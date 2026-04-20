/**
 * Phase 3: DOM–CSS contract audit — classes defined in glc-base.css that never
 * appear in TSX/TS/JSON under src/ (likely dead CSS or missing expected markup).
 *
 * Run: node scripts/audit-dom-css-contracts.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const CSS_PATH = path.join(ROOT, "src/styles/glc-base.css");
const OUT_DIR = path.join(ROOT, "audit");

const SCAN_EXT = new Set([".tsx", ".ts", ".jsx", ".js", ".json"]);
const IGNORE_CSS_CLASSES = new Set([
  "from",
  "to",
  "screen",
  "print",
  "keyframes",
  "global",
  "root",
  "host",
  "where",
  "is",
  "not",
  "has",
  "first",
  "last",
  "nth",
  "focus",
  "hover",
  "active",
  "visited",
  "disabled",
]);

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) {
      if (name === "node_modules" || name === ".next") continue;
      walk(full, acc);
    } else {
      const ext = path.extname(name);
      if (SCAN_EXT.has(ext)) acc.push(full);
    }
  }
  return acc;
}

function stripCssComments(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, " ");
}

function isLikelyGlCustom(cls) {
  if (!cls || cls.length < 2) return false;
  if (/^\d/.test(cls)) return false;
  if (IGNORE_CSS_CLASSES.has(cls)) return false;
  if (cls.includes("__") || cls.includes("--")) return true;
  if (
    /^(gl-|glc-|hero-v2|st3|why|svc|page-|footer|about|cta|marquee|proj|tst|dse|ls|svlayer|exc-|exhub|drainage|snow|stc1|fci|sandbox|cov-|proc-|stat-|testimonial|coverage|services|gl-hub|gl-mega|gl-btn|gl-prose|gl-reveal|gl-scope|gl-accordion|gl-nav|gl-header|gl-util|gl-logo)/i.test(
      cls,
    )
  )
    return true;
  return false;
}

/** Extract probable class names from CSS (first segment of .foo.bar or .foo:hover) */
function extractClassesFromCss(css) {
  const clean = stripCssComments(css);
  const found = new Set();
  const re = /\.([a-zA-Z_][\w-]*)/g;
  let m;
  while ((m = re.exec(clean)) !== null) {
    const cls = m[1];
    if (isLikelyGlCustom(cls)) found.add(cls);
  }
  return found;
}

function loadSourcesText(files) {
  const chunks = [];
  for (const f of files) {
    try {
      chunks.push(fs.readFileSync(f, "utf8"));
    } catch {
      /* skip */
    }
  }
  return chunks.join("\n");
}

function main() {
  const css = fs.readFileSync(CSS_PATH, "utf8");
  const cssClasses = extractClassesFromCss(css);

  const scanRoots = [
    path.join(ROOT, "src/app"),
    path.join(ROOT, "src/components"),
    path.join(ROOT, "src/content"),
    path.join(ROOT, "src/lib"),
  ];
  const files = scanRoots.flatMap((d) => walk(d));
  const corpus = loadSourcesText(files);

  const orphans = [];
  for (const cls of cssClasses) {
    const needle = cls;
    if (!corpus.includes(needle)) orphans.push(cls);
  }
  orphans.sort((a, b) => a.localeCompare(b));

  /** BEM block stem: `foo__bar--mod` → `foo`, `foo--mod` → `foo` */
  function bemBlock(cls) {
    const noMod = cls.split("--")[0];
    const [block] = noMod.split("__");
    return block || cls;
  }

  const byBlock = {};
  for (const cls of orphans) {
    const block = bemBlock(cls);
    byBlock[block] = (byBlock[block] || 0) + 1;
  }
  const topPrefixes = Object.entries(byBlock)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 40);

  /** Blocks with many orphan rules and zero literal substring in src (likely legacy / unused) */
  const MIN_ORPHANS_FOR_DEAD_FAMILY = 12;
  const likelyDeadBlocks = Object.entries(byBlock)
    .filter(
      ([block, n]) =>
        n >= MIN_ORPHANS_FOR_DEAD_FAMILY &&
        block.length >= 6 &&
        !corpus.includes(block),
    )
    .sort((a, b) => b[1] - a[1]);

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const payload = {
    generated: new Date().toISOString(),
    cssPath: "src/styles/glc-base.css",
    scannedFiles: files.length,
    distinctGlClassesInCss: cssClasses.size,
    notReferencedInSrc: orphans.length,
    orphans,
    topOrphanPrefixes: topPrefixes,
    likelyDeadBlocks,
    likelyDeadBlockMinOrphans: MIN_ORPHANS_FOR_DEAD_FAMILY,
  };
  fs.writeFileSync(path.join(OUT_DIR, "dom-css-contracts.json"), JSON.stringify(payload, null, 2));

  const md = [
    "# DOM–CSS contract audit (Phase 3)",
    "",
    `Generated: ${payload.generated}`,
    "",
    "## Method",
    "",
    "1. Collect **GLC-like** class tokens from `glc-base.css` (BEM `__` / `--`, or known prefixes such as `gl-`, `hero-v2`, `exc-`, etc.).",
    "2. Concatenate all `src/app`, `src/components`, `src/content`, `src/lib` files with extensions `.tsx`, `.ts`, `.jsx`, `.js`, `.json`.",
    "3. If a class string **never appears** in that corpus, flag as **orphan** — either **unused CSS** or **markup/DOM never emitted** (contract break).",
    "",
    "**Limits:** dynamic class names built without the literal substring will false-negative. Rare false-positives if a class is only used in non-scanned files.",
    "",
    "## Summary",
    "",
    `| Metric | Count |`,
    `|--------|-------|`,
    `| Distinct GL-like classes in CSS | ${cssClasses.size} |`,
    `| Not found in TS/TSX/JSON corpus | **${orphans.length}** |`,
    `| Source files scanned | ${files.length} |`,
    "",
    "## Top orphan BEM blocks (by stem)",
    "",
    "| Block stem | Orphan rule count |",
    "|------------|-------------------|",
    ...topPrefixes.map(([p, n]) => `| \`${p}\` | ${n} |`),
    "",
    "## Likely dead CSS families",
    "",
    `Blocks with **≥${MIN_ORPHANS_FOR_DEAD_FAMILY}** orphan selectors and **no** occurrence of the block string in scanned source (heuristic: legacy or never-wired UI).`,
    "",
    likelyDeadBlocks.length
      ? [
          "| Block | Orphan selectors |",
          "|-------|------------------|",
          ...likelyDeadBlocks.map(([b, n]) => `| \`${b}\` | ${n} |`),
          "",
        ].join("\n")
      : "_None matched threshold._\n",
    "",
    "## Sample orphans (first 120)",
    "",
    orphans.length
      ? orphans
          .slice(0, 120)
          .map((c) => `- \`${c}\``)
          .join("\n")
      : "_None_",
    "",
    orphans.length > 120 ? `\n_Full list: \`audit/dom-css-contracts.json\` → \`orphans\`._\n` : "",
    "",
    "## Manual follow-ups (not automated)",
    "",
    "- Parent/child flex contracts (e.g. motion wrapper without layout class).",
    "- `position: absolute` inside flex children without reserved width (see fixed utility rotator).",
    "- Cross-check high-count orphan families against GLC_MASTER / design intent before deleting CSS.",
    "",
  ].join("\n");

  fs.writeFileSync(path.join(OUT_DIR, "DOM-CSS-CONTRACTS.md"), md);
  console.log(
    `Wrote audit/dom-css-contracts.json and DOM-CSS-CONTRACTS.md — ${orphans.length} orphans / ${cssClasses.size} GL-like classes in CSS`,
  );
}

main();
