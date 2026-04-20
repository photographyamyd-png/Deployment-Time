/**
 * Path B: extract className tokens from TSX and flag those not referenced in glc-base.css.
 * Run: node scripts/audit-class-css-gaps.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const CSS_PATH = path.join(ROOT, "src/styles/glc-base.css");
const SCAN_DIRS = [
  path.join(ROOT, "src/app"),
  path.join(ROOT, "src/components"),
];
const OUT_DIR = path.join(ROOT, "audit");

const TAILWINDISH =
  /^(sm:|md:|lg:|xl:|2xl:|max-sm:|max-md:|max-lg:|hover:|focus:|active:|dark:|flex|grid|inline|block|hidden|contents|static|fixed|absolute|relative|sticky|inset-|top-|bottom-|left-|right-|z-|m-|mx-|my-|mt-|mb-|ml-|mr-|ms-|me-|p-|px-|py-|pt-|pb-|pl-|pr-|ps-|pe-|gap-|space-|w-|h-|min-w|min-h|max-w|max-h|size-|shrink|grow|basis|self-|justify|items|content|place-|order-|rounded|border(?!-left|-right|-top|-bottom|-collapse)|ring|shadow|opacity|blur|brightness|contrast|grayscale|invert|sepia|saturate|hue-|backdrop|transition|duration|ease|delay|animate|cursor|select-|resize|scroll-|snap-|touch-|outline|appearance|placeholder|caret|pointer|will-change|aspect|object-|overflow|overscroll|truncate|whitespace|break-|text-|font-|leading|tracking|antialiased|subpixel|list-|decoration|underline|line-through|uppercase|lowercase|capitalize|normal-case|align-|vertical-|whitespace-pre|sr-only|not-sr-only|container|prose|from-|to-|via-|bg-gradient|bg-\[|text-\[|p-\[|m-\[|w-\[|h-\[)/;

const IGNORE_CLASSES = new Set([
  "open",
  "active",
  "is-open",
  "is-active",
  "is-visible",
  "scrolled",
  "reveal",
  "reveal--delay-1",
  "reveal--delay-2",
  "reveal--delay-3",
  "reveal--delay-4",
  "reveal--delay-5",
]);

function walkTsx(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walkTsx(full, acc);
    else if (name.endsWith(".tsx")) acc.push(full);
  }
  return acc;
}

/** Pull quoted chunks from template literals in className={`...`} */
function extractTemplateStaticParts(str) {
  const parts = [];
  const re = /className=\{\s*`([^`]+)`\s*\}/gs;
  let m;
  while ((m = re.exec(str)) !== null) {
    const chunk = m[1].replace(/\$\{[^}]+\}/g, " ");
    parts.push(chunk);
  }
  return parts;
}

function extractClassStrings(str) {
  const out = [];
  const re = /className=\{?["']([^"']+)["']\}?/g;
  let m;
  while ((m = re.exec(str)) !== null) out.push(m[1]);
  out.push(...extractTemplateStaticParts(str));
  return out;
}

function tokenize(classStr) {
  return classStr
    .split(/\s+/)
    .map((t) => t.trim())
    .filter(Boolean);
}

function isLikelyGlCustom(cls) {
  if (IGNORE_CLASSES.has(cls)) return false;
  if (cls.includes("__") || cls.includes("--")) return true;
  if (/^(gl-|glc-|hero-v2|st3|why|svc|page-|footer|about|cta|marquee|proj|tst|dse|ls|svlayer|exc-|exhub|drainage|snow|stc1|fci|sandbox)/i.test(cls)) return true;
  return false;
}

function cssCoversToken(css, cls) {
  if (cls.startsWith("#")) {
    const id = cls.slice(1);
    const re = new RegExp(`#${escapeRe(id)}\\b`);
    return re.test(css);
  }
  const re = new RegExp(`\\.${escapeRe(cls)}\\b`);
  return re.test(css);
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function main() {
  const css = fs.readFileSync(CSS_PATH, "utf8");
  const files = SCAN_DIRS.flatMap((d) => walkTsx(d));
  /** @type {Map<string, Set<string>>} */
  const tokenFiles = new Map();

  for (const file of files) {
    const src = fs.readFileSync(file, "utf8");
    for (const blob of extractClassStrings(src)) {
      for (const cls of tokenize(blob)) {
        if (TAILWINDISH.test(cls)) continue;
        if (cls.startsWith("[")) continue;
        if (/^[\w-]+__variable$/.test(cls)) continue;
        if (!isLikelyGlCustom(cls)) continue;
        if (!tokenFiles.has(cls)) tokenFiles.set(cls, new Set());
        tokenFiles.get(cls).add(path.relative(ROOT, file).replace(/\\/g, "/"));
      }
    }
  }

  const gaps = [];
  for (const [cls, fileSet] of tokenFiles) {
    if (cssCoversToken(css, cls)) continue;
    gaps.push({
      class: cls,
      files: [...fileSet].sort(),
      count: fileSet.size,
    });
  }
  gaps.sort((a, b) => b.files.length - a.files.length || a.class.localeCompare(b.class));

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, "class-css-gaps.json");
  fs.writeFileSync(jsonPath, JSON.stringify({ generated: new Date().toISOString(), gapCount: gaps.length, gaps }, null, 2));

  const md = [
    "# Class vs glc-base.css gaps",
    "",
    `Generated: ${new Date().toISOString()}`,
    `Potential missing selectors: **${gaps.length}** (heuristic: GLC-like tokens not found as \`.class\` in glc-base.css)`,
    "",
    "| Class | Files |",
    "|-------|-------|",
    ...gaps.slice(0, 200).map((g) => `| \`${g.class}\` | ${g.files.length}: ${g.files.slice(0, 3).join(", ")}${g.files.length > 3 ? "…" : ""} |`),
    "",
    gaps.length > 200 ? `_… and ${gaps.length - 200} more in class-css-gaps.json_` : "",
  ].join("\n");
  fs.writeFileSync(path.join(OUT_DIR, "class-css-gaps.md"), md);
  console.log(`Wrote ${jsonPath} (${gaps.length} gaps)`);
}

main();
