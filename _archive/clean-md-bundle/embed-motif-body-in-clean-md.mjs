/**
 * One-off / repeatable: embed GLC Motif Approval Preview HTML body into Clean.MD
 * Source: Combining them all.txt (second document body)
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, "..");

const combiningPath =
  "C:/Users/hutch/Downloads/All4 Design things to Combine into MD/Combining them all.txt";
const cleanPath = path.join(repoRoot, "Clean.MD");
const keeperPath = path.join(
  repoRoot,
  "clean-md-bundle",
  "glc-motif-approval-preview-body.html",
);

const lines = fs.readFileSync(combiningPath, "utf8").split(/\r?\n/);
// 1-based line 2760 <!-- TOP BAR --> … through 3252 (last </div> before </body>)
const body = lines.slice(2759, 3253).join("\n");

fs.mkdirSync(path.dirname(keeperPath), { recursive: true });
fs.writeFileSync(keeperPath, body + "\n", "utf8");

const intro = `

## 3b. HTML — GLC SVG Motif System · Approval Preview (complete body)

**Requires:** Section **1** (fonts) and Section **3** (motif preview CSS). Below is the full preview **body** fragment: top bar, every labelled block **A1–A6**, **B1–B5**, **C1–C3**, **D1–D7**, integration preview, and approval footer. Same content is saved as \`clean-md-bundle/glc-motif-approval-preview-body.html\` for direct reuse.

\`\`\`html
${body}
\`\`\`

`;

let md = fs.readFileSync(cleanPath, "utf8");

// Corrupted one-line insert used literal \n instead of newlines
const brokenStart = "---\\n\\n## 3b. HTML — GLC SVG Motif System · Approval Preview (complete body)";
const i = md.indexOf(brokenStart);
const j = md.indexOf("## 4. JavaScript — unified preview interactions", i);

if (i !== -1 && j !== -1) {
  md = md.slice(0, i) + intro + md.slice(j);
} else {
  const marker = "## 4. JavaScript — unified preview interactions";
  const idx = md.indexOf(marker);
  if (idx === -1) {
    console.error("Could not find section 4 marker");
    process.exit(1);
  }
  md = md.slice(0, idx) + intro + md.slice(idx);
}

fs.writeFileSync(cleanPath, md, "utf8");
console.log("OK: embedded body", body.length, "chars; wrote", keeperPath);
