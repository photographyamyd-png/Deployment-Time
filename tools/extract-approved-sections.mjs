import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const mdPath = path.join(root, "DESIGN-SYSTEM.md");
const textRaw = fs.readFileSync(mdPath, "utf8");
const text = textRaw.replace(/\r\n/g, "\n");

const anchor = "## 5. JSON";
const i5 = text.indexOf(anchor);
if (i5 < 0) throw new Error("section 5 not found");
const fence = text.indexOf("```json", i5);
const open = text.indexOf("\n", fence) + 1;
const closeFence = text.indexOf("\n```\n\n---", open);
if (closeFence < 0) throw new Error("close fence not found");

let json = text.slice(open, closeFence).trim();

/** Normalize a few legacy mojibake sequences from the markdown source */
json = json
  .replace(/\u00e2\u20ac\u201d/g, "—")
  .replace(/\u00e2\u2020\u2019/g, "→")
  .replace(/\u00c2\u00b7/g, "·")
  .replace(/\u00c3\u2014/g, "×");

JSON.parse(json);

const outDir = path.join(root, "section-dna");
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "approved-sections.json");
fs.writeFileSync(outPath, `${json}\n`, "utf8");
console.log("OK", outPath, json.length);
