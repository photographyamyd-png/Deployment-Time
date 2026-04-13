/**
 * Rebuilds EXPORT VERSION DESIGN_SYSTEM.html as a browsable doc:
 * - Sticky TOC, GLC token styling
 * - Tabbed appendices: JSON (pretty) + live iframe previews for motif + unified HTML
 * - Doc 3/4 extracted from existing export <pre> blobs, entity-decoded, UTF-8 fixed
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const exportPath = path.join(root, "EXPORT VERSION DESIGN_SYSTEM.html");
const approvedJsonPath = path.join(root, "KEEPERS", "approved", "Approved Sections.json");

function extractPreAfterSummary(html, summaryContains) {
  const idx = html.indexOf(summaryContains);
  if (idx === -1) return null;
  const preStart = html.indexOf('<div class="content"><pre>', idx);
  if (preStart === -1) return null;
  const contentStart = preStart + '<div class="content"><pre>'.length;
  const preEnd = html.indexOf("</pre></div>", contentStart);
  if (preEnd === -1) return null;
  return html.slice(contentStart, preEnd);
}

function decodePreEntities(s) {
  let t = s
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
  t = t.replace(/&#x([0-9a-fA-F]+);/gi, (_, h) => {
    const n = parseInt(h, 16);
    return n <= 0xffff ? String.fromCharCode(n) : String.fromCodePoint(n);
  });
  t = t.replace(/&#(\d{1,7});/g, (_, d) => {
    const n = parseInt(d, 10);
    return n <= 0xffff ? String.fromCharCode(n) : String.fromCodePoint(n);
  });
  // Common UTF-8-as-Latin-1 mojibake leftovers in older exports
  t = t
    .replace(/\u00e2\u20ac\u201d/g, "—")
    .replace(/\u00e2\u20ac\u201c/g, "—")
    .replace(/\u00e2\u20ac\u2122/g, "™")
    .replace(/\u00e2\u20ac\u00a6/g, "…")
    .replace(/\u00c2\u00b7/g, "·")
    .replace(/\u00e2\u2013\u00a0/g, "–");
  return t;
}

function escapeHtmlText(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildPage({ jsonText, motifHtml, unifiedHtml }) {
  const b64Motif = Buffer.from(motifHtml, "utf8").toString("base64");
  const b64Unified = Buffer.from(unifiedHtml, "utf8").toString("base64");
  const jsonInPre = escapeHtmlText(jsonText);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>GLC Master Design System — Export (browsable)</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&amp;family=Plus+Jakarta+Sans:wght@400;600;700&amp;family=Source+Code+Pro:wght@400;500&amp;display=swap" rel="stylesheet" />
<style>
:root {
  --white: #fff;
  --charcoal-deep: #1e1c1a;
  --charcoal-mid: #2e2b28;
  --yellow-core: #f7c520;
  --gold: #d4a017;
  --text: rgba(30, 28, 26, 0.92);
  --muted: rgba(30, 28, 26, 0.55);
  --line: rgba(30, 28, 26, 0.12);
  --ease-expo: cubic-bezier(0.22, 1, 0.36, 1);
  --nav-w: 268px;
  --font-display: "Oswald", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --font-mono: "Source Code Pro", monospace;
}
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--text);
  background: var(--white);
  line-height: 1.65;
  display: grid;
  grid-template-columns: var(--nav-w) 1fr;
  min-height: 100vh;
}
@media (max-width: 960px) {
  body { grid-template-columns: 1fr; }
  .toc {
    position: relative;
    height: auto;
    max-height: none;
    border-right: none;
    border-bottom: 3px solid var(--yellow-core);
  }
}
.toc {
  position: sticky;
  top: 0;
  align-self: start;
  height: 100vh;
  max-height: 100vh;
  overflow: auto;
  padding: 28px 18px 48px;
  background: var(--charcoal-deep);
  color: rgba(255, 255, 255, 0.88);
  border-right: 3px solid var(--yellow-core);
}
.toc h2 {
  font-family: var(--font-display);
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--yellow-core);
  margin: 0 0 18px;
}
.toc a {
  display: block;
  padding: 9px 12px;
  color: rgba(255, 255, 255, 0.72);
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  border-left: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s, background 0.2s var(--ease-expo);
}
.toc a:hover {
  color: #fff;
  background: rgba(247, 197, 32, 0.08);
  border-left-color: var(--yellow-core);
}
.toc .toc-h {
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.38);
  margin: 22px 0 10px;
  padding-left: 12px;
}
main.flow {
  padding: 0 0 96px;
  min-width: 0;
}
.hero {
  padding: 48px clamp(24px, 4vw, 56px) 40px;
  background: linear-gradient(120deg, var(--charcoal-deep), var(--charcoal-mid));
  color: #fff;
  border-bottom: 3px solid var(--yellow-core);
}
.hero h1 {
  font-family: var(--font-display);
  font-size: clamp(26px, 3.6vw, 40px);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  line-height: 1.1;
  margin: 0 0 14px;
}
.hero h1 em {
  font-style: normal;
  color: var(--yellow-core);
}
.hero p {
  margin: 0;
  max-width: 58ch;
  color: rgba(255, 255, 255, 0.62);
  font-size: 15px;
}
.block {
  padding: 36px clamp(24px, 4vw, 56px);
  max-width: 1100px;
}
h2.block-title {
  font-family: var(--font-display);
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 18px;
  padding-top: 8px;
  border-top: 1px solid var(--line);
}
.block:first-of-type h2.block-title { border-top: none; padding-top: 0; }
.lead { margin: 0 0 16px; max-width: 65ch; color: var(--muted); }
.dna-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 14px;
}
.dna-card {
  border: 1px solid var(--line);
  padding: 16px 18px;
  background: #fafafa;
  border-left: 3px solid var(--yellow-core);
}
.dna-card .k {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 8px;
}
.dna-card .v {
  font-family: var(--font-display);
  font-size: 17px;
  color: var(--charcoal-deep);
}
.pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}
.pills code {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 7px 11px;
  background: var(--charcoal-deep);
  color: var(--yellow-core);
  border: 1px solid rgba(247, 197, 32, 0.28);
}
.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
}
.tabs button {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 11px 18px;
  border: 1px solid var(--line);
  background: #fff;
  cursor: pointer;
  transition: background 0.2s var(--ease-expo), color 0.2s, border-color 0.2s;
}
.tabs button[aria-selected="true"] {
  background: var(--charcoal-deep);
  color: var(--yellow-core);
  border-color: var(--charcoal-deep);
}
.tab-panel[hidden] { display: none !important; }
.shell {
  border: 1px solid var(--line);
  background: #f6f6f4;
  overflow: hidden;
}
.shell-h {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 11px 16px;
  background: var(--charcoal-deep);
  color: rgba(255, 255, 255, 0.88);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.shell-h button {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 8px 14px;
  background: var(--yellow-core);
  color: var(--charcoal-deep);
  border: none;
  cursor: pointer;
}
.shell pre {
  margin: 0;
  padding: 18px;
  max-height: min(72vh, 680px);
  overflow: auto;
  font-family: var(--font-mono);
  font-size: 12px;
  line-height: 1.55;
  white-space: pre;
  tab-size: 2;
}
iframe.live {
  width: 100%;
  min-height: 82vh;
  border: 1px solid var(--line);
  background: #fff;
}
.hint {
  margin: 0 0 14px;
  max-width: 68ch;
  color: var(--muted);
  font-size: 14px;
}
.note-box {
  padding: 18px 20px;
  background: rgba(247, 197, 32, 0.12);
  border-left: 4px solid var(--yellow-core);
  margin-top: 20px;
  max-width: 72ch;
}
.note-box strong { color: var(--charcoal-deep); }
</style>
</head>
<body>
<nav class="toc" aria-label="Table of contents">
  <h2>Navigate</h2>
  <a href="#top">Overview</a>
  <div class="toc-h">DNA</div>
  <a href="#tokens">Tokens &amp; type</a>
  <a href="#geometry">Geometry</a>
  <a href="#sections">Section registry</a>
  <div class="toc-h">Sources</div>
  <a href="#appendix">Appendices</a>
  <a href="#appendix-json">· JSON registry</a>
  <a href="#appendix-motif">· Motif preview</a>
  <a href="#appendix-unified">· Unified v2 page</a>
  <a href="#doc1-note">Doc 1 note</a>
</nav>

<main class="flow" id="top">
  <header class="hero">
    <h1>Ground Level <em>Contracting</em> — Master export</h1>
    <p>
      One HTML file: quick-reading DNA up top, then <strong>three real documents</strong> — JSON in a scrollable
      panel, and both large HTML references rendered as live pages inside iframes (not dead code walls).
    </p>
  </header>

  <section class="block" id="tokens">
    <h2 class="block-title">Brand tokens (from your references)</h2>
    <p class="lead">Copy/paste anchors for a fresh build. Accent matches unified-v2 / motif preview.</p>
    <div class="dna-grid">
      <div class="dna-card"><div class="k">Charcoal deep</div><div class="v">#1E1C1A</div></div>
      <div class="dna-card"><div class="k">Charcoal mid</div><div class="v">#2E2B28</div></div>
      <div class="dna-card"><div class="k">Yellow core</div><div class="v">#F7C520</div></div>
      <div class="dna-card"><div class="k">Gold</div><div class="v">#D4A017</div></div>
      <div class="dna-card"><div class="k">Display</div><div class="v">Oswald</div></div>
      <div class="dna-card"><div class="k">Body</div><div class="v">Plus Jakarta Sans</div></div>
      <div class="dna-card"><div class="k">Industrial</div><div class="v">Barlow</div></div>
      <div class="dna-card"><div class="k">Mono</div><div class="v">Source Code Pro</div></div>
    </div>
  </section>

  <section class="block" id="geometry">
    <h2 class="block-title">Geometric logic</h2>
    <div class="dna-grid">
      <div class="dna-card"><div class="k">Primary shard angle</div><div class="v">45°</div></div>
      <div class="dna-card"><div class="k">Aggressive sweep</div><div class="v">60°</div></div>
      <div class="dna-card"><div class="k">Container max (v2)</div><div class="v">1320px</div></div>
    </div>
  </section>

  <section class="block" id="sections">
    <h2 class="block-title">Canonical section IDs</h2>
    <p class="lead">From Approved Sections (15 entries).</p>
    <div class="pills">
      <code>stats-st3-dark-editorial</code>
      <code>about-ab3-editorial-split</code>
      <code>hero-v2-flagship-asymmetric</code>
      <code>gl-parallax-type-band-shared</code>
      <code>exc-hub-parallax-cta-band</code>
      <code>header-mega-services-panel-shell</code>
      <code>header-primary-nav-links-cluster</code>
      <code>services-home-grid-cards</code>
      <code>why-why3-editorial-manifesto</code>
      <code>process-proc3-split-timeline</code>
      <code>coverage-dark-territory-band</code>
      <code>testimonials-tst3-editorial</code>
      <code>cta-band-cta3-charcoal-close</code>
      <code>footer-site-wide-gray-rail</code>
      <code>glc-snow-p14-midlower-cta</code>
    </div>
  </section>

  <section class="block" id="appendix">
    <h2 class="block-title">Source appendices</h2>
    <p class="lead">
      Switch tabs. <strong>Motif preview</strong> and <strong>Unified v2</strong> are full HTML documents with their own fonts and CSS — embedded here via <code>iframe.srcdoc</code> so you can scroll and use them visually.
    </p>

    <div class="tabs" role="tablist">
      <button type="button" role="tab" aria-selected="true" aria-controls="panel-json" id="tab-json">1 · Approved JSON</button>
      <button type="button" role="tab" aria-selected="false" aria-controls="panel-motif" id="tab-motif">2 · Motif preview (live)</button>
      <button type="button" role="tab" aria-selected="false" aria-controls="panel-unified" id="tab-unified">3 · Unified design system (live)</button>
    </div>

    <div role="tabpanel" id="panel-json" aria-labelledby="tab-json">
      <div class="shell" id="appendix-json">
        <div class="shell-h">
          <span>KEEPERS/approved/Approved Sections.json</span>
          <button type="button" id="copy-json">Copy</button>
        </div>
        <pre id="json-pre">${jsonInPre}</pre>
      </div>
    </div>

    <div role="tabpanel" id="appendix-motif" aria-labelledby="tab-motif" hidden>
      <p class="hint" id="hint-motif">GLC-SVG-MOTIF-PREVIEW — structural sweeps, corners, watermarks, micro UI (verbatim HTML, decoded).</p>
      <iframe class="live" id="iframe-motif" title="SVG motif system preview"></iframe>
    </div>

    <div role="tabpanel" id="appendix-unified" aria-labelledby="tab-unified" hidden>
      <p class="hint" id="hint-unified">Newest Design System / Unified v2.0 — full page including sections and JS (verbatim HTML, decoded).</p>
      <iframe class="live" id="iframe-unified" title="Unified design system v2"></iframe>
    </div>
  </section>

  <section class="block" id="doc1-note">
    <h2 class="block-title">Doc 1</h2>
    <div class="note-box">
      <strong>Chat-pasted unified HTML.</strong> There is no separate Doc 1 file in this repo. Where it matches file-backed
      <em>Newest Design System.html</em>, treat Doc 4 / the live tab above as the operational extract for CSS + structure.
    </div>
  </section>
</main>

<script>
(function () {
  var tabJson = document.getElementById("tab-json");
  var tabMotif = document.getElementById("tab-motif");
  var tabUnified = document.getElementById("tab-unified");
  var panelJson = document.getElementById("panel-json");
  var panelMotif = document.getElementById("appendix-motif");
  var panelUnified = document.getElementById("appendix-unified");
  function selectTab(which) {
    var tabs = [tabJson, tabMotif, tabUnified];
    var panels = [panelJson, panelMotif, panelUnified];
    tabs.forEach(function (t, i) {
      var on = (which === i);
      t.setAttribute("aria-selected", on ? "true" : "false");
      panels[i].hidden = !on;
    });
  }
  tabJson.addEventListener("click", function () { selectTab(0); });
  tabMotif.addEventListener("click", function () { selectTab(1); });
  tabUnified.addEventListener("click", function () { selectTab(2); });

  function syncTabFromHash() {
    var h = (location.hash || "").slice(1);
    if (h === "appendix-motif" || h === "motif") selectTab(1);
    else if (h === "appendix-unified" || h === "unified") selectTab(2);
    else if (h === "appendix-json" || h === "json") selectTab(0);
  }
  window.addEventListener("hashchange", syncTabFromHash);
  syncTabFromHash();

  document.getElementById("copy-json").addEventListener("click", function () {
    var t = document.getElementById("json-pre").textContent;
    navigator.clipboard.writeText(t).then(function () {
      var b = document.getElementById("copy-json");
      var p = b.textContent;
      b.textContent = "Copied";
      setTimeout(function () { b.textContent = p; }, 1400);
    });
  });

  var MOTIF_B64 = "${b64Motif}";
  var UNIFIED_B64 = "${b64Unified}";
  document.getElementById("iframe-motif").srcdoc = atob(MOTIF_B64);
  document.getElementById("iframe-unified").srcdoc = atob(UNIFIED_B64);
})();
</script>
</body>
</html>
`;
}

function defaultDownloadsDocPaths() {
  const base = process.env.USERPROFILE || process.env.HOME || "";
  const dir = path.join(base, "Downloads", "SANDBOX PERFECTION PROGRESS");
  return {
    motif: path.join(dir, "GLC-SVG-MOTIF-PREVIEW.html"),
    unified: path.join(dir, "Newest Design System.html"),
  };
}

function main() {
  const defaults = defaultDownloadsDocPaths();
  const doc3Path = process.env.GLC_EXPORT_DOC3 || defaults.motif;
  const doc4Path = process.env.GLC_EXPORT_DOC4 || defaults.unified;

  let motifHtml;
  let unifiedHtml;
  if (fs.existsSync(doc3Path) && fs.existsSync(doc4Path)) {
    motifHtml = fs.readFileSync(doc3Path, "utf8");
    unifiedHtml = fs.readFileSync(doc4Path, "utf8");
    console.log("Loaded Doc3 from:", doc3Path);
    console.log("Loaded Doc4 from:", doc4Path);
  } else {
    const oldExport = fs.existsSync(exportPath) ? fs.readFileSync(exportPath, "utf8") : "";
    const pre3 = extractPreAfterSummary(oldExport, "Doc 3 Raw");
    const pre4 = extractPreAfterSummary(oldExport, "Doc 4 Raw");
    if (!pre3 || !pre4) {
      console.error(
        "Motif / Unified HTML not found. Expected:\n ",
        doc3Path,
        "\n ",
        doc4Path,
        "\nSet GLC_EXPORT_DOC3 and GLC_EXPORT_DOC4, or restore an export that still contains Doc 3/4 <pre> blocks."
      );
      process.exit(1);
    }
    motifHtml = decodePreEntities(pre3);
    unifiedHtml = decodePreEntities(pre4);
    console.log("Loaded Doc3/Doc4 from embedded <pre> in existing export (fallback).");
  }
  let jsonText;
  if (fs.existsSync(approvedJsonPath)) {
    jsonText = fs.readFileSync(approvedJsonPath, "utf8").trim();
  } else {
    const pre2 = extractPreAfterSummary(oldExport, "Doc 2 Raw");
    if (!pre2) {
      console.error("No Approved Sections.json and could not extract Doc 2 pre.");
      process.exit(1);
    }
    jsonText = decodePreEntities(pre2);
    try {
      jsonText = JSON.stringify(JSON.parse(jsonText), null, 2);
    } catch {
      /* keep raw */
    }
  }

  const out = buildPage({ jsonText, motifHtml, unifiedHtml });
  fs.writeFileSync(exportPath, out, "utf8");
  console.log("Wrote browsable export:", exportPath);
  console.log("Motif HTML length:", motifHtml.length, "Unified:", unifiedHtml.length);
}

main();
