/**
 * Phase 5: Heuristic snapshot against .cursorrules Part 8 (hard rules).
 * Not a full design review — flags candidates for human triage.
 *
 * Run: node scripts/audit-rules-snapshot.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const CSS_PATH = path.join(ROOT, "src/styles/glc-base.css");
const OUT_DIR = path.join(ROOT, "audit");

function walkTsx(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) {
      if (name === "node_modules" || name === ".next") continue;
      walkTsx(full, acc);
    } else if (name.endsWith(".tsx") || name.endsWith(".ts")) acc.push(full);
  }
  return acc;
}

function borderRadiusViolations(css) {
  const lines = css.split(/\r?\n/);
  const hits = [];
  const re = /border-radius\s*:/i;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!re.test(line)) continue;
    const t = line.trim();
    if (/border-radius\s*:\s*0(?:px)?\s*[;}]?/i.test(t)) continue;
    if (/border-radius\s*:\s*50%\s*[;}]?/i.test(t)) continue;
    if (/border-radius\s*:\s*var\s*\(\s*--r\b/i.test(t)) continue;
    if (t.startsWith("/*") || t.startsWith("*")) continue;
    hits.push({ line: i + 1, text: t.slice(0, 120) });
  }
  return hits;
}

/** Hex in TS/TSX strings — skips lines that look like URLs or svg paths */
function hexInTsx(files) {
  const hits = [];
  const hexRe = /#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})\b/g;
  for (const file of files) {
    const rel = path.relative(ROOT, file).replace(/\\/g, "/");
    const src = fs.readFileSync(file, "utf8");
    const lines = src.split(/\r?\n/);
    lines.forEach((line, i) => {
      if (/https?:\/\//i.test(line) && line.includes("#")) return;
      if (line.includes("fill=") || line.includes("stroke=")) return;
      let m;
      const re = new RegExp(hexRe.source, "g");
      while ((m = re.exec(line)) !== null) {
        const hx = m[0].toUpperCase();
        if (hx === "#FFF" || hx === "#FFFFFF" || hx === "#000" || hx === "#000000")
          continue;
        hits.push({ file: rel, line: i + 1, hex: hx, snippet: line.trim().slice(0, 100) });
      }
    });
  }
  return hits;
}

function fontFamilyOutsideVarInCss(css) {
  const lines = css.split(/\r?\n/);
  const hits = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!/font-family\s*:/i.test(line)) continue;
    if (/var\s*\(\s*--font-/i.test(line)) continue;
    if (line.includes("inherit")) continue;
    if (line.trim().startsWith("/*")) continue;
    hits.push({ line: i + 1, text: line.trim().slice(0, 120) });
  }
  return hits;
}

function main() {
  const css = fs.readFileSync(CSS_PATH, "utf8");
  const tsFiles = [
    ...walkTsx(path.join(ROOT, "src/app")),
    ...walkTsx(path.join(ROOT, "src/components")),
  ];

  const radius = borderRadiusViolations(css);
  const fonts = fontFamilyOutsideVarInCss(css);
  const hexes = hexInTsx(tsFiles);

  const payload = {
    generated: new Date().toISOString(),
    borderRadiusNonZeroCount: radius.length,
    borderRadiusSamples: radius.slice(0, 40),
    fontFamilyNonVarCount: fonts.length,
    fontFamilySamples: fonts.slice(0, 25),
    tsxHexHitCount: hexes.length,
    tsxHexSamples: hexes.slice(0, 35),
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, "rules-snapshot.json"), JSON.stringify(payload, null, 2));

  const md = [
    "# Rules snapshot (Phase 5 — heuristic)",
    "",
    `Generated: ${payload.generated}`,
    "",
    "These checks approximate [.cursorrules](.cursorrules) Part 8. **Every hit needs human review** (context may justify the exception).",
    "",
    "## Summary",
    "",
    "| Check | Count | Notes |",
    "|-------|-------|-------|",
    `| \`border-radius\` not \`0\` / not \`50%\` in glc-base.css | **${radius.length}** | Rule 02 — zero radius except decorative circles |`,
    `| \`font-family\` not using \`var(--font-*)\` in glc-base.css | **${fonts.length}** | Rule 03 — token stacks |`,
    `| Hex tokens in \`.ts\` / \`.tsx\` under app + components | **${hexes.length}** | Prefer \`var(--*)\` in styles; some may be SVG/content |`,
    "",
    "## border-radius samples (first 40)",
    "",
    radius.length
      ? radius.map((h) => `- L${h.line}: \`${h.text}\``).join("\n")
      : "_None._",
    "",
    "## font-family samples (first 25)",
    "",
    fonts.length ? fonts.map((h) => `- L${h.line}: \`${h.text}\``).join("\n") : "_None._",
    "",
    "## TSX hex samples (first 35)",
    "",
    hexes.length
      ? hexes.map((h) => `- \`${h.file}:${h.line}\` ${h.hex} — \`${h.snippet}\``).join("\n")
      : "_None._",
    "",
  ].join("\n");

  fs.writeFileSync(path.join(OUT_DIR, "RULES-SNAPSHOT.md"), md);
  console.log(
    `Wrote audit/RULES-SNAPSHOT.md + rules-snapshot.json — radius:${radius.length} font:${fonts.length} tsx-hex:${hexes.length}`,
  );
}

main();
