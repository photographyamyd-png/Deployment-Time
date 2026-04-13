# Clean.MD companion files

Assets that support **`Clean.MD`** at the repo root (motif preview HTML export + scripts). **`Clean.MD`** plus this folder are the narrative + tooling layer; avoid keeping parallel copies of the same export elsewhere.

## Single sources of truth (no duplicates)

| What | Canonical file here |
| --- | --- |
| Unified Design System v2.0 (full static HTML) | `glc-unified-design-system-v2-preview.html` |
| SVG Motif System · Approval Preview (full static HTML) | `glc-svg-motif-approval-preview.html` |
| Approved Sections registry (rich `sections[]` DNA) | `approved-sections.json` |
| Section DNA v1.3 (`themePhilosophy`, `tokens`, `sectionRegistry`, …) | `section-dna.json` |
| Motif preview **body** only (for `Clean.MD` §3b / embed script) | `glc-motif-approval-preview-body.html` |

Do **not** maintain extra copies under different names (for example a second HTML file with the same unified document, or a `.json` pasted under a prose title). That content belongs only in the files above.

## Optional monolith (`ALL OF DESIGN`)

The file **`ALL OF DESIGN`** is a **concatenation** of the four canonical files above. It is **not** a second source of truth—only a convenience for sharing one paste target. If it is absent, recreate it before running the split script:

`node clean-md-bundle/merge-all-of-design.mjs`

## Split export (regenerate the four files from the monolith)

If you still use a monolith paste, split it into the four files:

| Output | Contents |
| --- | --- |
| `glc-unified-design-system-v2-preview.html` | Full static preview: **Unified Design System v2.0** (`<!DOCTYPE html>` … `</html>`). |
| `glc-svg-motif-approval-preview.html` | Full static preview: **SVG Motif System · Approval Preview** (second document). |
| `approved-sections.json` | Approved Sections registry. |
| `section-dna.json` | Section DNA v1.3. |

Run: `node clean-md-bundle/split-all-of-design.mjs`

**Related:** `glc-motif-approval-preview-body.html` is **body-only** (for `Clean.MD` §3b / embed script), not the full second HTML document.

## Re-embed `Clean.MD` §3b (motif body)

Edit `combiningPath` in the script if your source file moves:

`node clean-md-bundle/embed-motif-body-in-clean-md.mjs`
