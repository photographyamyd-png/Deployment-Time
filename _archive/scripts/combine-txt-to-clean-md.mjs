/**
 * Convert "Combining them all.txt" (multi-part HTML + trailing JSON) into Clean.MD
 */
import fs from "node:fs";
import path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "..");
const defaultSrc = path.join(
  process.env.USERPROFILE || "",
  "Downloads",
  "All4 Design things to Combine into MD",
  "Combining them all.txt"
);

const srcPath = path.resolve(process.argv[2] || defaultSrc);
const outPath = path.join(repoRoot, "Clean.MD");

function extractBetween(text, startRe, endRe, label) {
  const m = text.match(startRe);
  if (!m) throw new Error(`Missing ${label}`);
  const start = m.index + m[0].length;
  const tail = text.slice(start);
  const e = tail.match(endRe);
  if (!e) throw new Error(`Missing end for ${label}`);
  return tail.slice(0, e.index);
}

function extractAllStyles(htmlish) {
  const re = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  const blocks = [];
  let m;
  while ((m = re.exec(htmlish)) !== null) blocks.push(m[1].trimEnd());
  return blocks;
}

function extractFirstScript(htmlish) {
  const m = htmlish.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
  return m ? m[1].trim() : "";
}

function extractFontLinks(headText) {
  const links = [];
  const re = /<link[^>]+>/gi;
  let m;
  while ((m = re.exec(headText)) !== null) {
    const tag = m[0];
    if (/fonts\.googleapis\.com|fonts\.gstatic\.com/i.test(tag)) links.push(tag);
  }
  return links;
}

/** Brace-aware split of top-level `{ ... }` chunks after last </html> */
function extractTrailingJsonObjects(text) {
  const lastHtml = text.lastIndexOf("</html>");
  if (lastHtml === -1) throw new Error("No </html> found");
  let s = text.slice(lastHtml + "</html>".length).trimStart();

  const out = [];
  let i = 0;
  const len = s.length;
  while (i < len) {
    while (i < len && /\s/.test(s[i])) i++;
    if (i >= len || s[i] !== "{") break;
    const start = i;
    let depth = 0;
    let inStr = false;
    let esc = false;
    for (; i < len; i++) {
      const c = s[i];
      if (inStr) {
        if (esc) {
          esc = false;
          continue;
        }
        if (c === "\\") {
          esc = true;
          continue;
        }
        if (c === '"') inStr = false;
        continue;
      }
      if (c === '"') {
        inStr = true;
        continue;
      }
      if (c === "{") depth++;
      else if (c === "}") {
        depth--;
        if (depth === 0) {
          i++;
          out.push(s.slice(start, i).trim());
          break;
        }
      }
    }
  }
  return out;
}

function main() {
  if (!fs.existsSync(srcPath)) {
    console.error("Source not found:", srcPath);
    process.exit(1);
  }

  const raw = fs.readFileSync(srcPath, "utf8").replace(/\r\n/g, "\n");

  const doc1 = extractBetween(
    raw,
    /^<!DOCTYPE html>/im,
    /^<!DOCTYPE html>/im,
    "first HTML document"
  ).trimEnd();

  const head1 = extractBetween(doc1, /<head[^>]*>/i, /<\/head>/i, "first <head>");
  const title1 = (head1.match(/<title>([^<]*)<\/title>/i) || [])[1]?.trim() || "Design system";

  const styles = extractAllStyles(raw);
  if (styles.length < 1) throw new Error("No <style> blocks found");

  const script1 = extractFirstScript(doc1);
  const fontLinks = extractFontLinks(head1);

  const jsonObjs = extractTrailingJsonObjects(raw);
  if (jsonObjs.length < 2) {
    throw new Error(`Expected 2 trailing JSON objects, got ${jsonObjs.length}`);
  }

  let approvedPretty = "";
  let dnaPretty = "";
  try {
    approvedPretty = JSON.stringify(JSON.parse(jsonObjs[0]), null, 2);
  } catch (e) {
    approvedPretty = jsonObjs[0];
  }
  try {
    dnaPretty = JSON.stringify(JSON.parse(jsonObjs[1]), null, 2);
  } catch (e) {
    dnaPretty = jsonObjs[1];
  }

  const lines = [];
  lines.push(`# ${title1}`);
  lines.push("");
  lines.push(
    "Standalone design-system reference for a clone project: fonts, full CSS from the combined HTML export, preview-page script, and machine-readable registries."
  );
  lines.push("");
  lines.push(`_Generated from:_ \`${srcPath.replace(/\\/g, "/")}\``);
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## Contents");
  lines.push("");
  lines.push("1. [Google Fonts (link tags)](#1-google-fonts-link-tags)");
  lines.push("2. [CSS — Unified system (document 1)](#2-css--unified-system-document-1)");
  lines.push("3. [CSS — SVG motif approval preview (document 2)](#3-css--svg-motif-approval-preview-document-2)");
  lines.push("4. [JavaScript — unified preview interactions](#4-javascript--unified-preview-interactions)");
  lines.push("5. [JSON — Approved Sections registry](#5-json--approved-sections-registry)");
  lines.push("6. [JSON — Section DNA](#6-json--section-dna)");
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## 1. Google Fonts (link tags)");
  lines.push("");
  lines.push("Paste into the `<head>` of a static HTML clone (order preserved from the source export):");
  lines.push("");
  lines.push("```html");
  for (const tag of fontLinks) lines.push(tag);
  lines.push("```");
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## 2. CSS — Unified system (document 1)");
  lines.push("");
  lines.push("Full stylesheet from the first `<style>` block (`Unified Design System` export).");
  lines.push("");
  lines.push("```css");
  lines.push(styles[0].replace(/\r\n/g, "\n").trimEnd());
  lines.push("```");
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## 3. CSS — SVG motif approval preview (document 2)");
  lines.push("");
  lines.push(
    "Supplementary stylesheet from the second `<style>` block (motif preview chrome + shared primitives). Use with the motif section markup or merge selectively into your main sheet."
  );
  lines.push("");
  lines.push("```css");
  lines.push((styles[1] || "").trimEnd());
  lines.push("```");
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## 4. JavaScript — unified preview interactions");
  lines.push("");
  if (script1) {
    lines.push(
      "Inline script from the first HTML document (custom cursor, scroll reveal, header scroll class, smooth anchor links). Omit in production builds that do not use `cursor: none` or these classes."
    );
    lines.push("");
    lines.push("```js");
    lines.push(script1);
    lines.push("```");
  } else {
    lines.push("_No `<script>` block found in the first document._");
    lines.push("");
  }
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## 5. JSON — Approved Sections registry");
  lines.push("");
  lines.push("Parsed from the first trailing JSON object in the source file.");
  lines.push("");
  lines.push("```json");
  lines.push(approvedPretty);
  lines.push("```");
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## 6. JSON — Section DNA");
  lines.push("");
  lines.push("Parsed from the second trailing JSON object in the source file.");
  lines.push("");
  lines.push("```json");
  lines.push(dnaPretty);
  lines.push("```");
  lines.push("");

  fs.writeFileSync(outPath, lines.join("\n"), "utf8");
  console.log("Wrote", outPath);
}

main();
