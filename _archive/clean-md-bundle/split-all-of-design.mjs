/**
 * Splits `ALL OF DESIGN` (monolith export) into four canonical files:
 * 1) unified v2 full HTML preview
 * 2) SVG motif approval full HTML preview
 * 3) approved-sections.json
 * 4) section-dna.json
 *
 * If `ALL OF DESIGN` is missing, regenerate it from the four outputs:
 *   node clean-md-bundle/merge-all-of-design.mjs
 *
 * Run: node clean-md-bundle/split-all-of-design.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, "ALL OF DESIGN");
const text = fs.readFileSync(src, "utf8");
const lines = text.split(/\r?\n/);

// Line numbers are 1-based in comments; slice end is exclusive.
const html1 = lines.slice(0, 2529).join("\n") + "\n";
const html2 = lines.slice(2530, 3255).join("\n") + "\n";
// First `{` of approved-sections at line 3259; section-dna `{` at line 4588 (1-based)
const json1 = lines.slice(3258, 4584).join("\n") + "\n";
const json2 = lines.slice(4587, 4944).join("\n") + "\n";

const out = {
  "glc-unified-design-system-v2-preview.html": html1,
  "glc-svg-motif-approval-preview.html": html2,
  "approved-sections.json": json1,
  "section-dna.json": json2,
};

for (const [name, content] of Object.entries(out)) {
  fs.writeFileSync(path.join(__dirname, name), content, "utf8");
  console.log("wrote", name, content.length, "bytes");
}

JSON.parse(json1);
JSON.parse(json2);
console.log("OK: both JSON files parse");
