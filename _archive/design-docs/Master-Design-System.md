# Ground Level Contracting Master Design System

Version: 2026-04-07  
Sources merged: Doc 1 (Unified v2), Doc 2 (Approved Sections registry), Doc 3 (SVG Motif Preview), Doc 4 (Newest Design System)

## 1) Canonical Precedence

- Visual/CSS baseline for shared system styles: **Doc 4**
- Section IDs, section DNA, implementation ownership, and conflict map: **Doc 2**
- Motif taxonomy, placement rules, and slot mappings: **Doc 3**
- Doc 1 retained only for non-conflicting historical notes

## 2) Global Foundation (Canonical Tokens)

```css
:root {
  --white: #FFFFFF;
  --gray-100: rgba(30,28,26,0.06);
  --gray-200: rgba(30,28,26,0.12);
  --charcoal-deep: #1E1C1A;
  --charcoal-mid: #2E2B28;
  --charcoal-light: #585653;
  --yellow-core: #F7C520;
  --gold: #D4A017;
  --charcoal-tint: rgba(46,43,40,0.06);
  --charcoal-tint-md: rgba(46,43,40,0.12);
  --text-600: rgba(30,28,26,0.90);
  --text-500: rgba(30,28,26,0.80);
  --text-400: rgba(30,28,26,0.55);
  --font-display: 'Oswald', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  --font-industrial: 'Barlow', sans-serif;
  --font-mono: 'Source Code Pro', monospace;
  --ease-expo: cubic-bezier(0.22, 1, 0.36, 1);
  --section-v: clamp(80px, 9vw, 120px);
  --container-max: 1320px;
  --header-h: 80px;
}
```

## 3) Approved Section DNA (Canonical IDs)

1. `stats-st3-dark-editorial`
2. `about-ab3-editorial-split`
3. `hero-v2-flagship-asymmetric`
4. `gl-parallax-type-band-shared`
5. `exc-hub-parallax-cta-band`
6. `header-mega-services-panel-shell`
7. `header-primary-nav-links-cluster`
8. `services-home-grid-cards`
9. `why-why3-editorial-manifesto`
10. `process-proc3-split-timeline`
11. `coverage-dark-territory-band`
12. `testimonials-tst3-editorial`
13. `cta-band-cta3-charcoal-close`
14. `footer-site-wide-gray-rail`
15. `glc-snow-p14-midlower-cta`

## 4) Conflict Register and Resolution Policy

### C-01 Stats Cascade
- Conflict: two `#stats` themes and overlapping `.stat-cell`
- Resolution: keep `st3` dark editorial as production owner; scope/remove legacy `v2` `#stats` blocks

### C-02 About Cascade
- Conflict: AB3 + late `#about` overrides + unused `.about__*`
- Resolution: `ab3__*` owns React implementation; remove dead `.about__*` if unused

### C-03 Why/Process/Testimonials/CTA v2 Override Drift
- Conflict: later FULL-PAGE REDESIGN blocks redefine `#why`, `#process`, `#testimonials`, `#cta-band`
- Resolution: treat v2 rules as legacy-static scope only; preserve single owner per React section

## 5) Motif System (Doc 3 Consolidation)

### Group A: Structural Sweeps/Transitions
- A1 Hero full sweep (left to right)
- A2 Hero reversed sweep (right to left)
- A3 Section divider light<->dark angled seam
- A4 Footer cap
- A5 Angled heading rule
- A6 Diagonal section watermark strip

### Group B: Corner and Panel Motifs
- B1 corner, B2 slash, B3 cross, B4 triangle (mapped to existing `stc1` slots)
- B5 inverted corner (AB3 chip/corner mark usage)

### Group C: Watermark Planes
- C1 light low-opacity watermark
- C2 layered depth watermark
- C3 animated/parallax watermark (hero-only use)

### Group D: Micro UI Motifs
- D1 clip-path cuts
- D2 button sheen edge language
- D3 sharp slice band
- D4 block/slash number treatment
- D5 minimal angled rule
- D6 split seam divider
- D7 animated sweep accent

### Existing Slot-Class Mapping (Canonical)
- `.motif-corner` -> B1 (bottom-right, 200px, 0.12)
- `.motif-slash` -> B2 (top-right, 160px, 0.08)
- `.motif-cross` -> B3 (center-right, 120px, 0.06)
- `.motif-triangle` -> B4 (bottom-left, 100px, 0.08)

## 6) Hard Rules (Consolidated)

- One primary accent: `--yellow-core`
- No yellow tint noise outside approved motif/overlay contexts
- One animated watermark/sweep per page max
- Watermark opacity target range: `0.025` to `0.10` max
- Zero border-radius on internal system components unless explicitly decorative
- Use section-prefixed class families (`st3__`, `ab3__`, `why3__`, etc.)
- Avoid duplicate owner definitions for the same section ID

## 7) Raw SVG Appendix (Verbatim)

### SVG-A3 Divider Thread

```svg
<svg viewBox="0 0 1400 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <polygon points="0,70 0,38 1400,0 1400,70" fill="#1E1C1A"/>
  <polygon points="0,70 0,54 700,16 1400,30 1400,70" fill="#1E1C1A" opacity="0.5"/>
  <polygon points="0,40 1400,2 1400,7 0,46" fill="#F7C520" opacity="0.42"/>
</svg>
```

### SVG-B1 Corner

```svg
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="200,0 0,200 200,200" fill="#F7C520"/>
</svg>
```

### SVG-B2 Slash

```svg
<svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
  <polygon points="160,0 80,160 160,160" fill="#F7C520"/>
  <polygon points="120,0 40,160 80,160 160,0" fill="#F7C520"/>
</svg>
```

### SVG-B3 Cross

```svg
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <polygon points="0,0 120,0 120,120" fill="#F7C520"/>
  <polygon points="0,0 0,120 120,120" fill="#F7C520" opacity="0.5"/>
</svg>
```

### SVG-B4 Triangle

```svg
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <polygon points="0,100 100,100 100,0" fill="#F7C520"/>
</svg>
```

### SVG-B5 Inverted Corner

```svg
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <polygon points="0,0 120,0 0,120" fill="#F7C520"/>
</svg>
```

## 8) Migration and Alignment Notes

- Align `glc-site/src/styles/glc-base.css` to this master ownership model (single owner per section)
- Keep `design_system.json` token values synchronized with canonical token block above
- Keep legacy/static preview-specific CSS scoped away from App Router section IDs
- Use registry section IDs from this file as canonical section references for all future changes

