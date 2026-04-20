/**
 * Phase 4 automated responsive audit (Playwright).
 *
 * Usage:
 *   npm run audit:responsive
 *
 * Env:
 *   BASE_URL=http://127.0.0.1:3040  (default)
 *   START_SERVER=0                  skip auto-start; expect dev already running
 *   START_SERVER=1                  (default) run `npm run dev` if base URL not ready
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const AUDIT = path.join(ROOT, "audit");
const SHOTS = path.join(AUDIT, "screenshots");
const MATRIX_FILE = path.join(AUDIT, "PHASE-4-ROUTE-MATRIX.md");
const ISSUE_MATRIX = path.join(AUDIT, "ISSUE-MATRIX.md");
const FAILURES_JSON = path.join(AUDIT, "responsive-failures.json");
const SWEEP_MD = path.join(AUDIT, "RESPONSIVE-SWEEP.md");

const WIDTHS = [1200, 1024, 768, 640, 390];
const VIEWPORT_H = 2000;
const BASE_URL = process.env.BASE_URL || "http://127.0.0.1:3040";
const START_SERVER = process.env.START_SERVER !== "0";

/** @type {{ path: string, slug: string, section: string }[]} */
const ROUTES = [
  { path: "/", slug: "home", section: "static" },
  { path: "/about", slug: "about", section: "static" },
  { path: "/company", slug: "company", section: "static" },
  { path: "/contact", slug: "contact", section: "static" },
  { path: "/coverage", slug: "coverage", section: "static" },
  { path: "/process", slug: "process", section: "static" },
  { path: "/projects", slug: "projects", section: "static" },
  { path: "/services", slug: "services", section: "static" },
  { path: "/privacy", slug: "privacy", section: "static" },
  { path: "/terms", slug: "terms", section: "static" },
  { path: "/sandbox", slug: "sandbox", section: "static" },
  { path: "/services/drainage-hardscaping", slug: "services-drainage-hardscaping", section: "service-fixed" },
  { path: "/services/excavation-site-preparation", slug: "services-excavation-site-preparation", section: "service-fixed" },
  { path: "/services/site-preparation-grading", slug: "services-site-preparation-grading", section: "service-fixed" },
  { path: "/services/foundations-civil-infrastructure", slug: "services-foundations-civil-infrastructure", section: "service-fixed" },
  { path: "/services/hauling-site-clearing-logistics", slug: "services-hauling-site-clearing-logistics", section: "service-fixed" },
  { path: "/services/snow-removal", slug: "services-snow-removal", section: "service-fixed" },
  {
    path: "/services/commercial-parking-lot-snow-plowing-barrie",
    slug: "dyn-service-slug",
    section: "dynamic",
  },
  {
    path: "/locations/commercial-snow-removal-barrie-ontario",
    slug: "dyn-location-slug",
    section: "dynamic",
  },
];

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitForServer(url, maxAttempts = 90) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
      if (res.ok) return true;
    } catch {
      /* retry */
    }
    await sleep(1000);
  }
  return false;
}

/** @returns {import('child_process').ChildProcess | null} */
function startDevServer() {
  const proc = spawn("npm", ["run", "dev"], {
    cwd: ROOT,
    shell: true,
    stdio: ["ignore", "pipe", "pipe"],
    detached: false,
  });
  proc.stdout?.on("data", (d) => process.stdout.write(d));
  proc.stderr?.on("data", (d) => process.stderr.write(d));
  return proc;
}

/** Serialized into browser via page.evaluate */
function collectLayoutIssuesInPage() {
  function buildSelector(el) {
    if (el.id) return "#" + el.id.replace(/([^\w-])/g, "\\$1");
    const parts = [];
    let e = el;
    let depth = 0;
    while (e && e.nodeType === 1 && depth < 8) {
      let seg = e.tagName.toLowerCase();
      if (typeof e.className === "string" && e.className.trim()) {
        const cs = e.className
          .trim()
          .split(/\s+/)
          .filter(Boolean)
          .slice(0, 3)
          .map((c) => "." + c.replace(/([^\w-])/g, "\\$1"))
          .join("");
        seg += cs;
      }
      parts.unshift(seg);
      e = e.parentElement;
      depth++;
    }
    return parts.join(" > ");
  }

  /** Intentional horizontal scroll: children may extend past viewport without layout bug */
  function insideHorizontalScrollPort(el) {
    let e = el;
    while (e) {
      if (!(e instanceof HTMLElement)) break;
      const ox = getComputedStyle(e).overflowX;
      if (ox === "auto" || ox === "scroll") {
        if (e.scrollWidth > e.clientWidth + 2) return true;
      }
      e = e.parentElement;
    }
    return false;
  }

  function skipRightOverflowSubtree(el) {
    let e = el;
    while (e) {
      if (e.id === "mobile-drawer") return true;
      const cn = e.className ? String(e.className) : "";
      if (
        cn.includes("marquee-track") ||
        cn.includes("marquee-band") ||
        cn.includes("gl-mobile-drawer") ||
        cn.includes("gl-drawer-")
      )
        return true;
      if (
        cn.includes("hero-v2__bg-roll") ||
        cn.includes("hero-v2__bg-plane") ||
        cn.includes("hero-v2__photo-panel") ||
        cn.includes("hero-v2__photo-pan") ||
        cn.includes("service-page-hero__bg") ||
        cn.includes("glc-snow-hero__plane") ||
        cn.includes("glc-snow-hero__bg-img") ||
        cn.includes("exc-parallax-cta__bg") ||
        cn.includes("sandbox-ds-quote__bg") ||
        cn.includes("glc-feat-acc__motif") ||
        cn.includes("stc1__panel-bg") ||
        /\b[\w-]+__wm\b/.test(cn)
      )
        return true;
      e = e.parentElement;
    }
    return false;
  }

  function skipTextClipSubtree(el) {
    let e = el;
    while (e) {
      const cn = e.className ? String(e.className) : "";
      if (cn.includes("glc-sr-only") || cn.includes("sr-only")) return true;
      if (cn.includes("gl-util-rotator")) return true;
      if (cn.includes("marquee")) return true;
      if (cn.includes("gl-mega-panel")) return true;
      e = e.parentElement;
    }
    return false;
  }

  const docEl = document.documentElement;
  const vw = docEl.clientWidth || window.innerWidth;
  const vh = window.innerHeight;
  const body = document.body;
  const docScrollW = Math.max(docEl.scrollWidth, body ? body.scrollWidth : 0);
  const htmlOx = getComputedStyle(docEl).overflowX;
  const bodyOx = body ? getComputedStyle(body).overflowX : "visible";
  const clipsDocumentX =
    htmlOx === "hidden" ||
    htmlOx === "clip" ||
    bodyOx === "hidden" ||
    bodyOx === "clip";
  const docOverflow = docScrollW > vw + 1 && !clipsDocumentX;

  const rightOverflow = [];
  const seen = new Set();
  const all = document.querySelectorAll("*");
  for (let i = 0; i < all.length; i++) {
    const el = all[i];
    if (!(el instanceof HTMLElement)) continue;
    if (skipRightOverflowSubtree(el)) continue;
    if (insideHorizontalScrollPort(el)) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 1 && r.height < 1) continue;
    if (r.right <= vw + 5) continue;
    const sel = buildSelector(el);
    if (seen.has(sel)) continue;
    seen.add(sel);
    rightOverflow.push({
      selector: sel,
      right: Math.round(r.right * 10) / 10,
      width: Math.round(r.width * 10) / 10,
      tag: el.tagName.toLowerCase(),
    });
  }

  const clipped = new Set();
  const clippedList = [];
  if (document.body) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.textContent || !node.textContent.trim()) return NodeFilter.FILTER_REJECT;
        const p = node.parentElement;
        if (!p || p.tagName === "SCRIPT" || p.tagName === "STYLE") return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    let tn;
    while ((tn = walker.nextNode())) {
      const p = tn.parentElement;
      if (!p || skipTextClipSubtree(p)) continue;
      if (
        typeof p.className === "string" &&
        p.className.includes("glc-feat-acc__panel-label")
      ) {
        const panel = p.closest(".glc-feat-acc__panel");
        if (panel && !panel.classList.contains("is-active")) continue;
      }
      if (p.scrollWidth > p.clientWidth + 8) {
        const sel = buildSelector(p);
        if (clipped.has(sel)) continue;
        clipped.add(sel);
        clippedList.push({
          selector: sel,
          scrollWidth: p.scrollWidth,
          clientWidth: p.clientWidth,
          tag: p.tagName.toLowerCase(),
        });
      }
    }
  }

  rightOverflow.sort((a, b) => b.right - a.right);
  const capR = rightOverflow.slice(0, 35);
  clippedList.sort((a, b) => b.scrollWidth - b.clientWidth - (a.scrollWidth - a.clientWidth));
  const capC = clippedList.slice(0, 30);

  return {
    vw,
    vh,
    docScrollW,
    docOverflow,
    rightOverflow: capR,
    clippedText: capC,
  };
}

/**
 * @param {string} routePath
 * @param {number} width
 * @param {Awaited<ReturnType<typeof collectLayoutIssues>>} data
 */
function failuresFromData(routePath, width, data) {
  /** @type {{ route: string, width: number, type: string, selector: string, details: string }[]} */
  const out = [];
  if (data.docOverflow) {
    out.push({
      route: routePath,
      width,
      type: "document-horizontal-overflow",
      selector: "document",
      details: `scrollWidth ${data.docScrollW}px > innerWidth ${data.vw}px`,
    });
  }
  for (const o of data.rightOverflow) {
    out.push({
      route: routePath,
      width,
      type: "element-right-overflow",
      selector: o.selector,
      details: `right ${o.right}px > vw ${data.vw}px (width ${o.width}px)`,
    });
  }
  for (const c of data.clippedText) {
    out.push({
      route: routePath,
      width,
      type: "text-clipped",
      selector: c.selector,
      details: `scrollWidth ${c.scrollWidth} > clientWidth ${c.clientWidth}`,
    });
  }
  return out;
}

function cellPass(failsForCell) {
  return failsForCell.length === 0 ? "✓" : "✗";
}

function writeResponsiveSweep(grid, allFailures, generated) {
  const lines = [
    "# Responsive sweep (automated)",
    "",
    `Generated: ${generated}`,
    "",
    "Playwright: `npm run audit:responsive`. Screenshots: `audit/screenshots/` (gitignored). Raw: [`responsive-failures.json`](responsive-failures.json).",
    "",
    "## Route × width",
    "",
    "| Route | " + WIDTHS.join(" | ") + " |",
    "|-------|" + WIDTHS.map(() => "------").join("|") + "|",
  ];

  for (const r of ROUTES) {
    const row = [r.path];
    for (const w of WIDTHS) {
      const key = `${r.path}@${w}`;
      row.push(grid[key] || "—");
    }
    lines.push("| " + row.join(" | ") + " |");
  }

  lines.push("", "## Failures detail", "");
  if (!allFailures.length) {
    lines.push("_No failures._");
  } else {
    const byRoute = {};
    for (const f of allFailures) {
      const k = `${f.route} @ ${f.width}px`;
      if (!byRoute[k]) byRoute[k] = [];
      byRoute[k].push(f);
    }
    for (const k of Object.keys(byRoute).sort()) {
      lines.push(`### ${k}`, "");
      for (const f of byRoute[k]) {
        lines.push(`- **${f.type}** — \`${f.selector}\` — ${f.details}`);
      }
      lines.push("");
    }
  }

  fs.writeFileSync(SWEEP_MD, lines.join("\n"));
}

function rebuildPhase4Matrix(grid, generated) {
  const staticRows = ROUTES.filter((r) => r.section === "static");
  const svcRows = ROUTES.filter((r) => r.section === "service-fixed");
  const dynRows = ROUTES.filter((r) => r.section === "dynamic");

  const mkTable = (rows, noteFn) => {
    const head = "| Route | " + WIDTHS.join(" | ") + " | Notes |";
    const sep = "|-------|" + WIDTHS.map(() => "------").join("|") + "|--------|";
    const body = rows
      .map((r) => {
        const cells = WIDTHS.map((w) => grid[`${r.path}@${w}`] || "—");
        const note = noteFn(r);
        return `| \`${r.path}\` | ${cells.join(" | ")} | ${note} |`;
      })
      .join("\n");
    return `${head}\n${sep}\n${body}`;
  };

  const out = [
    "# Phase 4 — Responsive route matrix",
    "",
    `**Method:** Automated — \`npm run audit:responsive\` (Playwright). Last run: ${generated}.`,
    "",
    "**Widths:** 1200 · 1024 · 768 · 640 · 390 (px).",
    "",
    "**Legend:** `✓` pass · `✗` fail — see [`RESPONSIVE-SWEEP.md`](RESPONSIVE-SWEEP.md) and [`responsive-failures.json`](responsive-failures.json).",
    "",
    "## Static routes",
    "",
    mkTable(staticRows, (r) =>
      r.path === "/" ? "Homepage — hero rail, marquee, grids" : "",
    ),
    "",
    "## Service detail (fixed)",
    "",
    mkTable(svcRows, (r) =>
      r.path.includes("drainage-hardscaping") ? "Long hub" : "",
    ),
    "",
    "## Dynamic (sample one URL each)",
    "",
    mkTable(dynRows, (r) =>
      r.path.includes("/locations/")
        ? "From `locations/[slug]`"
        : "From `[slug]` SSG list",
    ),
    "",
    "## Phase 4 completion criteria",
    "",
    "- Every **static** route has at least one full pass at **768** and **390** (mobile drawer + no horizontal scroll).",
    "- All **failures** logged in `ISSUE-MATRIX.md` with **RESP-** IDs.",
    "",
  ].join("\n");

  fs.writeFileSync(MATRIX_FILE, out);
}

function normSelectorForDedupe(sel) {
  return sel
    .replace(/html\.__variable_[^\s>]+/g, "html")
    .replace(/\s+/g, " ")
    .trim();
}

function dedupeKeyNorm(f) {
  return `${f.type}::${normSelectorForDedupe(f.selector)}`;
}

/** Each run: drop prior RESP-* rows, rewrite from current failures (stable sort by dedupe key). */
function rewriteRespRows(allFailures) {
  const byKey = new Map();
  for (const f of allFailures) {
    const k = dedupeKeyNorm(f);
    if (!byKey.has(k)) byKey.set(k, { ...f, routes: new Set(), widths: new Set() });
    const e = byKey.get(k);
    e.routes.add(f.route);
    e.widths.add(f.width);
  }

  let matrix = fs.readFileSync(ISSUE_MATRIX, "utf8");
  matrix = matrix
    .split(/\r?\n/)
    .filter((line) => !/^\| RESP-\d+ \|/.test(line))
    .join("\n");

  const sorted = [...byKey.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  const newRows = [];
  let n = 1;
  for (const [, v] of sorted) {
    const autoTag = `[auto:${dedupeKeyNorm(v)}]`;
    const routes = [...v.routes].sort().join(", ");
    const widths = [...v.widths].sort((a, b) => a - b).join(", ");
    const selEsc = normSelectorForDedupe(v.selector).replace(/\|/g, "\\|").slice(0, 200);
    newRows.push(
      `| RESP-${String(n).padStart(3, "0")} | Responsive | Multiple | ${routes} | P2 | ${widths}px — ${v.type} — \`${selEsc}\` ${autoTag} | Playwright Phase 4 | CSS/markup | Fix overflow/clip per selector | Open |`,
    );
    n++;
  }

  const phase2 = matrix.indexOf("\n## Phase 2");
  if (phase2 === -1) throw new Error("ISSUE-MATRIX.md: missing ## Phase 2");
  matrix =
    matrix.slice(0, phase2) +
    (newRows.length ? "\n" + newRows.join("\n") : "") +
    matrix.slice(phase2);

  matrix = matrix.replace(
    /\| PHASE-4 \| Responsive \| All routes \| \* \|[^|]*\|[^|]*\|[^|]*\|[^|]*\|[^|]*\|/,
    "| PHASE-4 | Responsive | All routes | * | — | — | `npm run audit:responsive` | [`RESPONSIVE-SWEEP.md`](RESPONSIVE-SWEEP.md) | Done |",
  );
  fs.writeFileSync(ISSUE_MATRIX, matrix);
}

async function main() {
  let serverProc = null;
  if (START_SERVER) {
    const ok = await waitForServer(BASE_URL, 3);
    if (!ok) {
      console.log("Starting Next dev server (npm run dev)…");
      serverProc = startDevServer();
      const up = await waitForServer(BASE_URL, 120);
      if (!up) {
        serverProc?.kill?.();
        throw new Error(`Server not reachable at ${BASE_URL}`);
      }
    }
  } else {
    if (!(await waitForServer(BASE_URL, 5))) {
      throw new Error(`START_SERVER=0 but nothing at ${BASE_URL}`);
    }
  }

  fs.mkdirSync(SHOTS, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const allFailures = [];
  /** @type {Record<string, string>} */
  const grid = {};

  try {
    for (const r of ROUTES) {
      for (const w of WIDTHS) {
        const context = await browser.newContext({
          viewport: { width: w, height: VIEWPORT_H },
        });
        const page = await context.newPage();
        const url = `${BASE_URL}${r.path === "/" ? "/" : r.path}`;
        try {
          await page.goto(url, { waitUntil: "load", timeout: 120000 });
          await sleep(1200);
          const shotPath = path.join(SHOTS, `${r.slug}__${w}.png`);
          await page.screenshot({ path: shotPath, fullPage: true });

          const data = await page.evaluate(collectLayoutIssuesInPage);
          const fails = failuresFromData(r.path, w, data);
          for (const f of fails) allFailures.push(f);
          grid[`${r.path}@${w}`] = cellPass(fails);
        } catch (e) {
          allFailures.push({
            route: r.path,
            width: w,
            type: "navigation-error",
            selector: "—",
            details: String(e.message || e),
          });
          grid[`${r.path}@${w}`] = "✗";
        } finally {
          await context.close();
        }
      }
    }
  } finally {
    await browser.close();
    if (serverProc) {
      try {
        serverProc.kill("SIGTERM");
      } catch {
        /* */
      }
    }
  }

  const generated = new Date().toISOString();
  fs.writeFileSync(
    FAILURES_JSON,
    JSON.stringify({ generated, baseUrl: BASE_URL, failures: allFailures }, null, 2),
  );

  writeResponsiveSweep(grid, allFailures, generated);
  rebuildPhase4Matrix(grid, generated);
  rewriteRespRows(allFailures);

  console.log(
    `Done. Failures: ${allFailures.length}. JSON: ${path.relative(ROOT, FAILURES_JSON)}`,
  );
  if (allFailures.length) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
