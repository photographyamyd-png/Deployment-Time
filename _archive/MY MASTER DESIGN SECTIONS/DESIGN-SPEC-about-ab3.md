# About section — AB3 editorial split (`AboutSection`)

Canonical React: `glc-site/src/components/sections/about-section.tsx`  
Styles: `glc-site/src/styles/glc-base.css` — search `ABOUT — v3 Editorial Split` (and note cascade from `ABOUT — Editorial White (v2)` on `#about`).  
Sample props: `glc-site/src/content/pages/home.json` → `"type": "about"`.

---

## DOM order (matches TSX)

1. `<section id="about" aria-labelledby="about-heading">`
2. `.ab3__wm` — ghost watermark (text node `GLC`, not an `<img>`)
3. `.ab3__layout` — two-column grid
   - `.ab3__copy` — left editorial column
     - `.reveal.ab3__top-row` → `.eyebrow` + `.ab3__since`
     - `.reveal.ab3__heading-wrap` → `h2#about-heading.ab3__heading` + `.ab3__heading-rule`
     - `.reveal` → `p.ab3__body`
     - `.reveal.ab3__creds` → `.ab3__cred` ×4 (`.ab3__cred-idx`, `.ab3__cred-body` / title / sub)
     - `.reveal` → `a.btn-primary` + `IconArrow` (14×24 chevron SVG, class `arrow`)
   - `.ab3__media` — right photo panel
     - `.ab3__badge` → `span` (uppercase badge copy)
     - `.ab3__photo` — empty div, `role="img"`, gradient placeholder (no `background-image` in CSS today)
     - `motion.div.ab3__chip` — stat chip (Framer: fade/slide in view)
     - `.ab3__corner-mark` — L-shaped yellow corner lines

---

## Layer stack (section → foreground)

| Z / order | Layer | Implementation |
|-----------|--------|------------------|
| Base | Section background | `#about { background: var(--white); }` |
| 0 | Horizontal hairline texture | `#about::before` — `repeating-linear-gradient` horizontal lines every 64px, ~2.2% black opacity (`FULL-PAGE REDESIGN OVERRIDES` block). Pointer-events none. |
| 0 | Ghost “GLC” watermark | `.ab3__wm` — absolute, vertically centered, `right: -0.06em`, huge Oswald, charcoal at **2.8%** opacity |
| 0 (optional reference) | SVG motif accents | This folder’s `motifs/*.svg` — **not rendered by default in Next**. Use for static comps or add a positioned `<img>` / `background-image` if you want traced geometry on the white field. |
| 1 | Main grid | `.ab3__layout` — `grid-template-columns: 55fr 45fr`, `min-height: 680px` |
| Copy column | Left yellow pin | `.ab3__copy::before` — 3×60px strip, `var(--yellow-core)`, top-left |
| Copy column | Typography & creds | Eyebrow, heading, body, 2×2 cred grid, CTA |
| Media column | Clip | `.ab3__media` — `clip-path: polygon(28px 0, 100% 0, 100% 100%, 0 100%)` (diagonal left edge) |
| Media z=0 | Engineered texture | `.ab3__media::before` — radial yellow glow + horizontal lines every 40px |
| Media z=0 | Photo bed | `.ab3__photo` — dark blue/green **CSS gradient** only (swap to `background-image` for a real photo) |
| Media z=2 | Badge, chip, corner | `.ab3__badge`, `.ab3__chip`, `.ab3__corner-mark` |

---

## Typography & rhythm (copy column)

- **Eyebrow** (`.eyebrow`): Plus Jakarta 11px / 800, `letter-spacing: 0.15em`, uppercase, `var(--yellow-core)`; **28×2px** yellow bar via `::before`.
- **Since pill** (`.ab3__since`): 11px / 700, `letter-spacing: 0.12em`, uppercase, `var(--text-400)`, 1px `var(--gray-200)` border, padding `4px 12px`; inner `span` weight 500.
- **Heading** (`.ab3__heading`): Oswald `clamp(34px, 3.8vw, 52px)` / 700, uppercase, `line-height: 1.04`, `var(--charcoal-deep)`; accent (`.ab3__heading-em`) **not italic**, `var(--yellow-core)`.
- **Heading rule**: 48×3px `var(--charcoal-deep)`, `margin-top: 16px`.
- **Body**: 15px, `line-height: 1.82`, `var(--text-500)`, `max-width: 46ch`.
- **Copy column**: `padding` uses `var(--section-v)` (96px) with horizontal `clamp`; `gap: 28px` between flex children; `max-width: 660px`.
- **Creds**: top border `var(--gray-200)`, `padding-top: 24px`, grid gap `12px`; each `.ab3__cred` pad `14px`, `var(--gray-100)` bg; index Oswald 13px yellow; title 11px / 800 uppercase; sub 11px / 500 muted.

---

## Media column details

- **Badge**: `top: 48px`, `left: 0`, yellow fill, clipped polygon notch; label 10px / 800, `letter-spacing: 0.18em`.
- **Chip**: `bottom: 52px`, `right: 36px`, dark glass `rgba(10,9,8,0.88)`, blur 20px, left border 3px yellow; num Oswald 46px yellow; label 10px uppercase muted.
- **Corner mark**: 40×40px, bottom-left, two 2px yellow borders, `transform: rotate(180deg)` (geometry as authored).

---

## Motion

- **Reveal** (copy blocks): `.reveal` / `.reveal.visible` / `reveal--delay-*` in `glc-base.css` (opacity + `translateY`).
- **Chip**: `framer-motion` `whileInView`, once, `amount: 0.4`, duration 0.8s, delay 0.5s, ease `[0.22, 1, 0.36, 1]`.

---

## Responsive

- **≤1024px**: Single column; media `min-height: 420px`, clip-path changes to `polygon(0 20px, 100% 0, 100% 100%, 0 100%)`; copy padding adjusts, `max-width: 100%`.
- **≤768px**: Copy horizontal padding 20px; creds 1 column; media `min-height: 320px`.

---

## Watermark vs SVG motif library

- **Shipped in Next:** The large background watermark is **text** in `.ab3__wm` (“GLC”), not an SVG.
- **Logo-tile watermarks** under `glc-site/public/images/motifs/watermarks/` often `<image href="../../Ground%20Level%20Logo.svg" …>` — that file may be missing locally; fix the href or embed a self-contained asset.
- **This reference pack** includes self-contained traced SVGs in `MY MASTER DESIGN SECTIONS/motifs/` for dividers/corners; wire them in only if the design calls for extra geometry on the white side.

---

## Cascade note

Later `glc-base.css` adds `#about` bottom padding and `#about::before` hairlines. The older AB3 block sets base `#about` background/overflow. No conflicting `#about::before` earlier, so the hairline overlay applies as intended.

---

## Rebuild checklist

- [ ] Section `id="about"` + `aria-labelledby="about-heading"`
- [ ] `.ab3__wm` + `.ab3__layout` + full copy/media subtree
- [ ] Eyebrow + `.btn-primary` + arrow SVG
- [ ] `#about::before` + all `.ab3__*` rules + responsive overrides
- [ ] Optional: real image on `.ab3__photo`; optional: motif SVGs from `/motifs`
- [ ] Framer chip or CSS-only fallback for static HTML
