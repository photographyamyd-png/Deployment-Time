/**
 * Builds `ALL OF DESIGN` from the four canonical outputs (inverse of split-all-of-design.mjs).
 * Uses LF and the same inter-file spacing as the historical monolith so split line indices stay valid.
 *
 * Run: node clean-md-bundle/merge-all-of-design.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const inputs = [
  "glc-unified-design-system-v2-preview.html",
  "glc-svg-motif-approval-preview.html",
  "approved-sections.json",
  "section-dna.json",
];

function readLfTrimEnd(name) {
  return fs.readFileSync(path.join(__dirname, name), "utf8").replace(/\r\n/g, "\n").trimEnd();
}

const [p0, p1, p2, p3] = inputs.map(readLfTrimEnd);

const monolith =
  p0 +
  "\n\n" +
  p1 +
  "\n\n\n\n" +
  p2 +
  "\n\n\n\n" +
  p3 +
  "\n\n";

const outPath = path.join(__dirname, "ALL OF DESIGN");
fs.writeFileSync(outPath, monolith, "utf8");
console.log("wrote", outPath, monolith.length, "bytes");
