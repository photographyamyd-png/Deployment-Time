# Ground Level Contracting — Unified Design System v2.0

Standalone design-system reference for a clone project: fonts, full CSS from the combined HTML export, preview-page script, and machine-readable registries.

_Generated from:_ `c:/Users/hutch/Downloads/All4 Design things to Combine into MD/Combining them all.txt`

---

## Contents

1. [Google Fonts (link tags)](#1-google-fonts-link-tags)
2. [CSS — Unified system (document 1)](#2-css--unified-system-document-1)
3. [CSS — SVG motif approval preview (document 2)](#3-css--svg-motif-approval-preview-document-2)
3b. [HTML — GLC SVG Motif System · Approval Preview (complete body)](#3b-html--glc-svg-motif-system--approval-preview-complete-body)
4. [JavaScript — unified preview interactions](#4-javascript--unified-preview-interactions)
5. [JSON — Approved Sections registry](#5-json--approved-sections-registry)
6. [JSON — Section DNA](#6-json--section-dna)

---

## 1. Google Fonts (link tags)

Paste into the `<head>` of a static HTML clone (order preserved from the source export):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;700;800&family=Barlow:wght@300;400;500&family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet">
```

---

## 2. CSS — Unified system (document 1)

Full stylesheet from the first `<style>` block (`Unified Design System` export).

```css

/* ═══════════════════════════════════════════════════════════════
   GLC UNIFIED DESIGN SYSTEM v2.0
   Light-primary. DSE for contrast. White not off-white.
   Oswald display · Plus Jakarta Sans body · Barlow industrial (DSE)
   Source Code Pro mono · Single accent: #F7C520
   Zero border-radius on internals · Charcoal tints only
═══════════════════════════════════════════════════════════════ */
:root {
  /* Surfaces — WHITE is primary, never off-white on page backgrounds */
  --white:           #FFFFFF;
  --gray-100:        rgba(30,28,26,0.06);
  --gray-200:        rgba(30,28,26,0.12);

  /* Charcoal family — warm-biased */
  --charcoal-deep:   #1E1C1A;
  --charcoal-mid:    #2E2B28;
  --charcoal-light:  #585653;

  /* Single accent */
  --yellow-core:     #F7C520;
  --gold:            #D4A017;

  /* Tints — charcoal ONLY, never yellow tints */
  --charcoal-tint:   rgba(46,43,40,0.06);
  --charcoal-tint-md:rgba(46,43,40,0.12);

  /* Text */
  --text-600:        rgba(30,28,26,0.90);
  --text-500:        rgba(30,28,26,0.80);
  --text-400:        rgba(30,28,26,0.55);

  /* Typography */
  --font-display:    'Oswald', sans-serif;
  --font-body:       'Plus Jakarta Sans', sans-serif;
  --font-industrial: 'Barlow', sans-serif;   /* DSE sections only */
  --font-mono:       'Source Code Pro', monospace;

  /* Motion */
  --ease-expo:       cubic-bezier(0.22, 1, 0.36, 1);

  /* Layout */
  --section-v:       clamp(80px, 9vw, 120px);
  --container-max:   1320px;
  --header-h:        80px;
}

/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
body {
  font-family: var(--font-body);
  background: var(--white);
  color: var(--text-500);
  line-height: 1.8;
  overflow-x: hidden;
  cursor: none;
}
img { display: block; max-width: 100%; }
a   { color: inherit; text-decoration: none; }

/* ═══════════════════════════════════════════════════════════════
   CUSTOM CURSOR — yellow dot + lagging ring
═══════════════════════════════════════════════════════════════ */
.c-dot {
  position: fixed; width: 7px; height: 7px;
  background: var(--yellow-core); border-radius: 50%;
  pointer-events: none; z-index: 9999;
  transform: translate(-50%,-50%);
  transition: transform 0.15s var(--ease-expo), background 0.2s;
}
.c-ring {
  position: fixed; width: 36px; height: 36px;
  border: 1px solid rgba(247,197,32,0.28); border-radius: 50%;
  pointer-events: none; z-index: 9998;
  transform: translate(-50%,-50%);
  transition: width 0.35s var(--ease-expo), height 0.35s var(--ease-expo), border-color 0.25s;
}
.c-ring.on { width: 60px; height: 60px; border-color: var(--yellow-core); }
.c-dot.on   { transform: translate(-50%,-50%) scale(1.8); background: var(--white); }
.c-dot.bar  { transform: translate(-50%,-50%) scale(3); background: var(--charcoal-deep); }

/* ═══════════════════════════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════════════════════════ */
.reveal {
  opacity: 0; transform: translateY(28px);
  transition: opacity 0.65s var(--ease-expo), transform 0.65s var(--ease-expo);
}
.reveal.visible { opacity: 1; transform: none; }
.reveal--d1 { transition-delay: 0.08s; }
.reveal--d2 { transition-delay: 0.16s; }
.reveal--d3 { transition-delay: 0.24s; }
.reveal--d4 { transition-delay: 0.32s; }
@media (prefers-reduced-motion: reduce) { .reveal { opacity: 1; transform: none; transition: none; } }

/* ═══════════════════════════════════════════════════════════════
   SHARED PRIMITIVES
═══════════════════════════════════════════════════════════════ */

/* Eyebrow */
.eyebrow {
  font-family: var(--font-body);
  font-size: 9px; font-weight: 800;
  letter-spacing: 0.24em; text-transform: uppercase;
  color: var(--yellow-core);
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 20px;
}
.eyebrow::before {
  content: ''; display: inline-block;
  width: 20px; height: 2px;
  background: var(--yellow-core); flex-shrink: 0;
}
.eyebrow--on-dark { color: rgba(255,255,255,0.38); }
.eyebrow--on-dark span { color: var(--yellow-core); }

/* Button primary */
.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-body);
  font-size: 11px; font-weight: 800;
  letter-spacing: 0.14em; text-transform: uppercase;
  background: var(--yellow-core); color: var(--charcoal-deep);
  border: none; padding: 14px 28px;
  cursor: none; position: relative; overflow: hidden;
  transition: transform 0.22s var(--ease-expo), box-shadow 0.22s var(--ease-expo);
}
.btn-primary::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
  transform: translateX(-100%);
  transition: transform 0.7s var(--ease-expo);
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(247,197,32,0.30); }
.btn-primary:hover::before { transform: translateX(100%); }

/* Button ghost */
.btn-ghost {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-body);
  font-size: 11px; font-weight: 800;
  letter-spacing: 0.14em; text-transform: uppercase;
  background: transparent; color: var(--white);
  border: 1px solid rgba(255,255,255,0.32);
  padding: 13px 28px; cursor: none;
  transition: background 0.22s var(--ease-expo), border-color 0.22s;
}
.btn-ghost:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.60); }

/* Arrow icon */
.icon-arr {
  width: 14px; height: 14px; fill: none;
  stroke: currentColor; stroke-width: 2;
  stroke-linecap: round; stroke-linejoin: round;
  transition: transform 0.22s var(--ease-expo); flex-shrink: 0;
}
.btn-primary:hover .icon-arr,
.btn-ghost:hover .icon-arr { transform: translateX(4px); }

/* Blueprint grid — DSE section texture */
.bp-grid::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image:
    repeating-linear-gradient(0deg,   rgba(255,255,255,0.012) 0, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 80px),
    repeating-linear-gradient(90deg,  rgba(255,255,255,0.012) 0, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 80px);
}

/* Light hairline grid — light sections */
.line-grid::before {
  content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image: repeating-linear-gradient(0deg,
    rgba(0,0,0,0.022) 0px, rgba(0,0,0,0.022) 1px, transparent 1px, transparent 64px);
}

/* Yellow top rail */
.yellow-rail {
  position: absolute; top: 0; left: 0; right: 0;
  height: 3px; z-index: 3;
  background: linear-gradient(90deg, var(--yellow-core) 0%, rgba(247,197,32,0.14) 60%, transparent 100%);
}

/* Grain overlay */
.grain {
  position: absolute; inset: 0; z-index: 2; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E");
  background-size: 200px; opacity: 0.028; mix-blend-mode: overlay;
}

/* ═══════════════════════════════════════════════════════════════
   HEADER
═══════════════════════════════════════════════════════════════ */
.gl-header {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 100; height: var(--header-h);
  background: rgba(255,255,255,0.97);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--gray-200);
  transition: box-shadow 0.3s;
}
.gl-header.scrolled { box-shadow: 0 4px 32px rgba(30,28,26,0.10); }
.gl-header__inner {
  display: flex; align-items: center; justify-content: space-between;
  height: var(--header-h);
  max-width: var(--container-max); margin: 0 auto; padding: 0 40px;
}
.gl-header__logo { display: flex; align-items: center; gap: 12px; }
.gl-header__mark {
  width: 32px; height: 32px;
  background: var(--charcoal-deep);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 11px; font-weight: 700;
  color: var(--yellow-core); position: relative; flex-shrink: 0;
}
.gl-header__mark::after {
  content: ''; position: absolute; bottom: -2px; right: -2px;
  width: 6px; height: 6px; background: var(--yellow-core);
}
.gl-header__name {
  font-family: var(--font-display); font-size: 13px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.06em; color: var(--charcoal-deep); line-height: 1;
}
.gl-header__sub {
  font-family: var(--font-mono); font-size: 8px;
  letter-spacing: 0.20em; text-transform: uppercase; color: var(--text-400);
  margin-top: 3px;
}
.gl-header__nav { display: flex; align-items: center; }
.gl-header__nav a {
  font-family: var(--font-body); font-size: 10px; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-400);
  padding: 0 16px; height: var(--header-h); display: flex; align-items: center;
  border-right: 1px solid var(--gray-100);
  transition: color 0.18s, background 0.18s; position: relative; cursor: none;
}
.gl-header__nav a::after {
  content: ''; position: absolute; bottom: 0; left: 16px; right: 16px;
  height: 2px; background: var(--yellow-core);
  transform: scaleX(0); transform-origin: left; transition: transform 0.3s var(--ease-expo);
}
.gl-header__nav a:hover { color: var(--charcoal-deep); background: var(--charcoal-tint); }
.gl-header__nav a:hover::after { transform: scaleX(1); }
.gl-header__cta { display: flex; align-items: center; gap: 16px; }
.gl-header__phone {
  font-family: var(--font-display); font-size: 15px; font-weight: 700;
  color: var(--charcoal-deep); letter-spacing: 0.01em;
  padding-right: 20px; border-right: 1px solid var(--gray-200);
}

/* ═══════════════════════════════════════════════════════════════
   HERO — DSE SPLIT (46/54) with seam + parallax
═══════════════════════════════════════════════════════════════ */
.hero {
  display: grid;
  grid-template-columns: 46fr 54fr;
  grid-template-rows: 1fr auto;
  grid-template-areas: "left right" "bar bar";
  min-height: 100vh; overflow: hidden; position: relative;
}

/* LEFT PANEL */
.hero__left {
  grid-area: left; background: var(--charcoal-deep);
  position: relative; display: flex; flex-direction: column;
  padding: 0 72px 64px 80px;
  padding-top: calc(var(--header-h) + 80px);
  overflow: hidden; z-index: 2;
}
/* Blueprint grid */
.hero__left::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image:
    repeating-linear-gradient(0deg,   rgba(255,255,255,0.010) 0, rgba(255,255,255,0.010) 1px, transparent 1px, transparent 80px),
    repeating-linear-gradient(90deg,  rgba(255,255,255,0.010) 0, rgba(255,255,255,0.010) 1px, transparent 1px, transparent 80px);
}
/* Ghost watermark */
.hero__ghost {
  position: absolute; bottom: 80px; right: -10px;
  font-family: var(--font-display); font-size: clamp(88px, 11vw, 148px);
  font-weight: 700; letter-spacing: -0.04em; line-height: 1;
  color: rgba(255,255,255,0.025); pointer-events: none; user-select: none; z-index: 0;
}
/* Yellow top rail */
.hero__rail {
  position: absolute; top: 0; left: 0; right: 0; height: 3px; z-index: 4;
  background: linear-gradient(90deg, var(--yellow-core) 0%, rgba(247,197,32,0.12) 65%, transparent 100%);
}
/* Eyebrow */
.hero__eyebrow {
  display: flex; align-items: center; gap: 14px; margin-bottom: 52px;
  position: relative; z-index: 1;
  opacity: 0; animation: aFade 0.7s var(--ease-expo) 0.3s forwards;
}
.hero__eyebrow-dash { width: 24px; height: 1px; background: var(--yellow-core); flex-shrink: 0; }
.hero__eyebrow-txt {
  font-family: var(--font-body); font-size: 9px; font-weight: 700;
  letter-spacing: 0.28em; text-transform: uppercase; color: rgba(255,255,255,0.32);
}
/* Three-act headline */
.hero__hl-wrap { position: relative; z-index: 1; margin-bottom: 48px; }
.hero__hl {
  display: block; overflow: hidden;
  font-family: var(--font-display);
  font-size: clamp(56px, 6.8vw, 110px);
  line-height: 0.88; text-transform: uppercase; letter-spacing: -0.025em;
}
.hero__hl span { display: block; animation: aLineUp 1s var(--ease-expo) both; }
.hero__hl--1 span { font-weight: 200; color: rgba(255,255,255,0.18); animation-delay: 0.45s; }
.hero__hl--2 span { font-weight: 600; color: rgba(255,255,255,0.88); animation-delay: 0.62s; }
.hero__hl--3 span { font-weight: 700; color: var(--yellow-core);      animation-delay: 0.78s; }
/* Growing yellow rule */
.hero__rule {
  width: 0; height: 1px; background: rgba(247,197,32,0.30);
  margin-bottom: 44px; position: relative; z-index: 1;
  animation: aGrow 0.9s var(--ease-expo) 1.0s forwards;
}
/* Caption — Barlow 300 */
.hero__caption-wrap {
  position: relative; z-index: 1; margin-bottom: auto;
  opacity: 0; animation: aFade 0.8s var(--ease-expo) 1.1s forwards;
}
.hero__caption {
  font-family: var(--font-industrial); font-weight: 300;
  font-size: 15px; line-height: 1.82;
  color: rgba(255,255,255,0.62); max-width: 38ch;
}
.hero__caption strong { font-weight: 500; color: rgba(255,255,255,0.86); }
/* Phone zone */
.hero__phone-zone {
  position: relative; z-index: 1;
  padding-top: 44px; border-top: 1px solid rgba(255,255,255,0.07);
  display: flex; align-items: flex-end; justify-content: space-between; gap: 24px;
  opacity: 0; animation: aSlide 0.8s var(--ease-expo) 1.35s forwards;
}
.hero__phone-block { display: flex; flex-direction: column; gap: 10px; }
.hero__phone-lbl {
  font-size: 8px; font-weight: 700; letter-spacing: 0.32em; text-transform: uppercase;
  color: rgba(255,255,255,0.22);
}
.hero__phone {
  font-family: var(--font-display); font-size: clamp(26px, 3.2vw, 46px);
  font-weight: 700; letter-spacing: -0.01em; line-height: 1;
  color: var(--white); position: relative; width: fit-content; padding-bottom: 5px; cursor: none;
}
.hero__phone::after {
  content: ''; position: absolute; bottom: 0; left: 0;
  width: 0; height: 2px; background: var(--yellow-core);
  transition: width 0.55s var(--ease-expo);
}
.hero__phone:hover::after { width: 100%; }
.hero__trust { display: flex; flex-direction: column; gap: 7px; align-items: flex-end; flex-shrink: 0; }
.hero__trust-item {
  display: flex; align-items: center; gap: 8px;
  font-family: var(--font-industrial); font-size: 10px; font-weight: 400;
  letter-spacing: 0.10em; text-transform: uppercase; color: rgba(255,255,255,0.28);
}
.hero__trust-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--yellow-core); flex-shrink: 0; }

/* YELLOW SEAM — structural weld */
.hero__seam {
  position: absolute; top: 0; bottom: 76px; left: calc(46% - 1.5px);
  width: 3px; z-index: 20; pointer-events: none;
  background: linear-gradient(180deg, transparent 0%, var(--yellow-core) 8%, var(--yellow-core) 92%, transparent 100%);
  opacity: 0; animation: aFade 0.6s var(--ease-expo) 1.5s forwards;
}
.hero__seam::before {
  content: ''; position: absolute; top: 0; left: -4px; right: -4px; bottom: 0;
  background: repeating-linear-gradient(180deg,
    transparent 0, transparent 24px, rgba(247,197,32,0.20) 24px, rgba(247,197,32,0.20) 25px);
}

/* RIGHT PANEL — image */
.hero__right {
  grid-area: right; position: relative; overflow: hidden; background: #0a0908;
  opacity: 0; animation: rightEnter 1.1s var(--ease-expo) 0.15s forwards;
}
@keyframes rightEnter { from { opacity:0; transform: translateX(24px); } to { opacity:1; transform: translateX(0); } }
.hero__img-wrap {
  position: absolute; inset: -6%; will-change: transform;
}
.hero__img {
  width: 100%; height: 100%; object-fit: cover; object-position: center 40%;
  filter: contrast(1.12) brightness(0.80) saturate(0.65);
  transform: scale(1.06); animation: imgBreath 3s var(--ease-expo) forwards;
}
.hero__img-edge {
  position: absolute; top: 0; left: 0; bottom: 0; width: 70px; z-index: 1;
  background: linear-gradient(90deg, var(--charcoal-deep) 0%, transparent 100%);
}
.hero__img-floor {
  position: absolute; bottom: 0; left: 0; right: 0; height: 35%; z-index: 1;
  background: linear-gradient(to top, rgba(5,4,3,0.92) 0%, rgba(5,4,3,0.45) 55%, transparent 100%);
}
.hero__img-sky {
  position: absolute; top: 0; left: 0; right: 0; height: 40%; z-index: 1;
  background: linear-gradient(to bottom, rgba(10,8,6,0.45) 0%, rgba(10,8,6,0.12) 55%, transparent 100%);
}
/* Service chip badge on image */
.hero__badge {
  position: absolute; bottom: 52px; right: 48px; z-index: 5;
  background: rgba(30,28,26,0.90); border: 1px solid rgba(247,197,32,0.20);
  border-top: 3px solid var(--yellow-core); padding: 18px 22px;
  opacity: 0; animation: aFade 0.8s var(--ease-expo) 1.8s forwards;
}
.hero__badge-lbl {
  font-family: var(--font-mono); font-size: 8px; font-weight: 500;
  letter-spacing: 0.22em; text-transform: uppercase; color: rgba(255,255,255,0.30); margin-bottom: 5px;
}
.hero__badge-val {
  font-family: var(--font-display); font-size: 26px; font-weight: 700;
  color: var(--white); line-height: 1; letter-spacing: -0.02em;
}
.hero__badge-sub {
  font-family: var(--font-mono); font-size: 8px; color: var(--yellow-core);
  letter-spacing: 0.16em; text-transform: uppercase; margin-top: 4px;
}

/* CTA BAR — full width, yellow + dark */
.hero__bar {
  grid-area: bar; display: grid; grid-template-columns: 1fr auto; height: 76px;
  position: relative; z-index: 20;
  opacity: 0; animation: aSlide 0.7s var(--ease-expo) 1.8s forwards;
}
.hero__bar-main {
  background: var(--yellow-core); display: flex; align-items: center;
  justify-content: space-between; padding: 0 52px 0 80px; gap: 32px;
  text-decoration: none; cursor: none; position: relative; overflow: hidden;
}
/* White wipe on hover */
.hero__bar-main::before {
  content: ''; position: absolute; inset: 0; background: var(--white);
  transform: scaleX(0); transform-origin: left; transition: transform 0.58s var(--ease-expo);
}
.hero__bar-main:hover::before { transform: scaleX(1); }
.hero__bar-lbl {
  font-family: var(--font-display); font-size: clamp(12px, 1.1vw, 15px);
  font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--charcoal-deep); position: relative; z-index: 1;
  transition: letter-spacing 0.35s var(--ease-expo);
}
.hero__bar-main:hover .hero__bar-lbl { letter-spacing: 0.28em; }
.hero__bar-right {
  display: flex; align-items: center; gap: 16px; position: relative; z-index: 1; flex-shrink: 0;
}
.hero__bar-line {
  width: 0; height: 1px; background: rgba(30,28,26,0.28);
  transition: width 0.40s var(--ease-expo);
}
.hero__bar-main:hover .hero__bar-line { width: 40px; }
.hero__bar-icon {
  width: 38px; height: 38px; border: 1.5px solid rgba(30,28,26,0.22);
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.4s var(--ease-expo);
}
.hero__bar-icon svg { width: 15px; height: 15px; transition: transform 0.4s var(--ease-expo); }
.hero__bar-main:hover .hero__bar-icon svg { transform: rotate(-45deg); }
.hero__bar-sec {
  background: var(--charcoal-mid); border-left: 1px solid rgba(247,197,32,0.15);
  padding: 0 40px; display: flex; align-items: center; gap: 10px;
  text-decoration: none; cursor: none; position: relative; overflow: hidden;
  transition: background 0.3s;
}
.hero__bar-sec::before {
  content: ''; position: absolute; inset: 0;
  background: rgba(247,197,32,0.09); transform: scaleX(0); transform-origin: right;
  transition: transform 0.42s var(--ease-expo);
}
.hero__bar-sec:hover { background: #383330; }
.hero__bar-sec:hover::before { transform: scaleX(1); }
.hero__bar-sec svg {
  width: 14px; height: 14px; fill: none; stroke: rgba(247,197,32,0.40);
  stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;
  flex-shrink: 0; position: relative; z-index: 1; transition: stroke 0.25s;
}
.hero__bar-sec:hover svg { stroke: var(--yellow-core); }
.hero__bar-sec-txt {
  font-family: var(--font-body); font-size: 10px; font-weight: 700;
  letter-spacing: 0.20em; text-transform: uppercase;
  color: rgba(255,255,255,0.28); position: relative; z-index: 1;
  transition: color 0.25s; white-space: nowrap;
}
.hero__bar-sec:hover .hero__bar-sec-txt { color: rgba(255,255,255,0.65); }

/* ═══════════════════════════════════════════════════════════════
   STATS — ST3 Dark Editorial (Hero+Stats exception: back-to-back DSE ok)
═══════════════════════════════════════════════════════════════ */
.st3 {
  background: var(--charcoal-deep); position: relative; overflow: hidden;
}
.st3::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image:
    repeating-linear-gradient(0deg,   rgba(255,255,255,0.012) 0, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 80px),
    repeating-linear-gradient(90deg,  rgba(255,255,255,0.012) 0, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 80px);
}
.st3__top-rail {
  position: relative; z-index: 2; height: 3px; width: 100%;
  background: linear-gradient(90deg, var(--yellow-core) 0%, rgba(247,197,32,0.12) 45%, transparent 100%);
}
.st3__inner {
  position: relative; z-index: 1; display: flex; align-items: stretch;
}
.st3__side-label {
  width: 56px; flex-shrink: 0; display: flex; align-items: center;
  justify-content: center; padding: 0;
  border-right: 1px solid rgba(255,255,255,0.06);
}
.st3__side-label span {
  font-family: var(--font-body); font-size: 9px; font-weight: 800;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: rgba(255,255,255,0.20);
  writing-mode: vertical-rl; transform: rotate(180deg); white-space: nowrap;
}
.st3__grid { display: flex; flex: 1; }
.stat-cell {
  flex: 1; padding: 52px 0; border-right: 1px solid rgba(255,255,255,0.06);
  text-align: center; position: relative; overflow: hidden;
  cursor: none; transition: background 0.3s;
}
.stat-cell:last-child { border-right: none; }
.stat-cell::after {
  content: ''; position: absolute; bottom: 0; left: 0;
  width: 100%; height: 2px; background: var(--yellow-core);
  transform: scaleX(0); transform-origin: left; transition: transform 0.5s var(--ease-expo);
}
.stat-cell:hover { background: rgba(255,255,255,0.025); }
.stat-cell:hover::after { transform: scaleX(1); }
.stat-cell__num {
  font-family: var(--font-display); font-size: clamp(36px, 4.5vw, 56px);
  font-weight: 700; line-height: 1; letter-spacing: -0.04em; color: var(--white);
}
.stat-cell__num span { color: var(--yellow-core); }
.stat-cell__label {
  font-family: var(--font-industrial); font-size: 10px; font-weight: 400;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: rgba(255,255,255,0.35); margin-top: 8px;
}

/* ═══════════════════════════════════════════════════════════════
   ABOUT — AB3 Editorial Split (Light / White)
═══════════════════════════════════════════════════════════════ */
.ab3 {
  background: var(--white); padding: var(--section-v) 0;
  position: relative; overflow: hidden;
}
/* Light hairline grid */
.ab3::before {
  content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image: repeating-linear-gradient(0deg,
    rgba(0,0,0,0.022) 0px, rgba(0,0,0,0.022) 1px, transparent 1px, transparent 64px);
}
/* Giant GLC watermark */
.ab3__wm {
  position: absolute; right: -0.06em; top: 50%; transform: translateY(-50%);
  font-family: var(--font-display); font-size: clamp(180px, 22vw, 320px);
  font-weight: 700; line-height: 1; color: rgba(30,28,26,0.028);
  pointer-events: none; user-select: none; z-index: 0;
}
.ab3__layout {
  position: relative; z-index: 1;
  display: grid; grid-template-columns: 55fr 45fr;
  max-width: var(--container-max); margin: 0 auto; padding: 0 40px;
  gap: 0; align-items: stretch;
}
/* Copy column */
.ab3__copy {
  padding-right: 72px; padding-top: 8px;
  position: relative;
}
.ab3__copy::before {
  content: ''; position: absolute; left: 0; top: 32px;
  width: 4px; height: 56px; background: var(--yellow-core);
}
.ab3__top-row {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 28px;
}
.ab3__since {
  font-family: var(--font-mono); font-size: 9px; font-weight: 500;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--text-400); padding: 4px 10px;
  border: 1px solid var(--gray-200); background: var(--gray-100);
}
.ab3__heading {
  font-family: var(--font-display); font-size: clamp(36px, 4vw, 58px);
  font-weight: 700; text-transform: uppercase; letter-spacing: -0.02em;
  line-height: 1; color: var(--charcoal-deep); margin-bottom: 6px;
}
.ab3__heading em {
  font-style: normal; color: var(--yellow-core);
}
.ab3__rule { width: 48px; height: 3px; background: var(--yellow-core); margin-bottom: 24px; }
.ab3__body {
  font-family: var(--font-industrial); font-size: 15px; font-weight: 300;
  line-height: 1.82; color: var(--text-500); max-width: 44ch; margin-bottom: 32px;
}
.ab3__creds {
  display: grid; grid-template-columns: 1fr 1fr; gap: 2px; margin-bottom: 36px;
}
.ab3__cred {
  padding: 16px 20px; background: var(--white);
  border: 1px solid var(--gray-200); cursor: none;
  transition: background 0.22s var(--ease-expo), border-color 0.22s;
}
.ab3__cred:hover { background: var(--charcoal-tint); border-color: var(--yellow-core); }
.ab3__cred-label {
  font-family: var(--font-mono); font-size: 8px; font-weight: 500;
  letter-spacing: 0.18em; text-transform: uppercase; color: var(--text-400); margin-bottom: 4px;
}
.ab3__cred-value {
  font-family: var(--font-body); font-size: 12px; font-weight: 700;
  color: var(--text-600);
}
/* Media column */
.ab3__media {
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  background: var(--charcoal-mid);
}
.ab3__media-img {
  width: 100%; height: 100%; min-height: 480px;
  object-fit: cover; object-position: center;
  filter: contrast(1.06) saturate(0.82);
  transition: transform 0.8s var(--ease-expo);
}
.ab3__media:hover .ab3__media-img { transform: scale(1.03); }
/* Yellow bottom bar on image */
.ab3__media::after {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0;
  height: 4px; background: var(--yellow-core); z-index: 2;
}
.ab3__chip {
  position: absolute; top: 28px; left: -20px; z-index: 3;
  background: var(--charcoal-deep); padding: 12px 18px;
  border-left: 3px solid var(--yellow-core);
}
.ab3__chip-lbl {
  font-family: var(--font-mono); font-size: 8px; font-weight: 500;
  letter-spacing: 0.20em; text-transform: uppercase;
  color: rgba(255,255,255,0.35); margin-bottom: 3px;
}
.ab3__chip-val {
  font-family: var(--font-display); font-size: 20px; font-weight: 700;
  color: var(--white); line-height: 1;
}
.ab3__corner-mark {
  position: absolute; bottom: 24px; left: 24px; z-index: 3;
  width: 40px; height: 40px; opacity: 0.50;
}

/* ═══════════════════════════════════════════════════════════════
   SERVICES — STICKY TAB CONTAINER (STC1) — DSE
═══════════════════════════════════════════════════════════════ */
.stc1 { position: relative; }

/* Sticky tab rail */
.stc1__rail {
  position: sticky; top: 0; z-index: 50; height: 64px;
  background: var(--charcoal-deep); border-bottom: 1px solid rgba(255,255,255,0.07);
  display: flex; align-items: stretch; overflow: hidden;
}
.stc1__rail::before {
  content: ''; position: absolute; top: 0; left: 0; width: 3px; height: 100%;
  background: var(--yellow-core);
}
.stc1__rail::after {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image: repeating-linear-gradient(90deg,
    rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 120px);
}
.stc1__rail-label {
  flex-shrink: 0; display: flex; align-items: center; gap: 10px;
  padding: 0 24px 0 28px; border-right: 1px solid rgba(255,255,255,0.07); z-index: 1;
}
.stc1__rail-label span {
  font-size: 9px; font-weight: 800; letter-spacing: 0.22em; text-transform: uppercase;
  color: rgba(255,255,255,0.28); white-space: nowrap;
}
.stc1__tabs {
  display: flex; align-items: stretch; flex: 1; list-style: none;
  position: relative; z-index: 1;
}
.stc1__tab {
  position: relative; display: flex; align-items: center; gap: 10px;
  padding: 0 28px;
  font-family: var(--font-body); font-size: 11px; font-weight: 800;
  letter-spacing: 0.16em; text-transform: uppercase;
  color: rgba(255,255,255,0.38);
  background: transparent; border: none; border-right: 1px solid rgba(255,255,255,0.07);
  cursor: pointer; white-space: nowrap;
  transition: color 0.25s var(--ease-expo), background 0.25s var(--ease-expo);
  outline: none;
}
.stc1__tab-num {
  font-family: var(--font-display); font-size: 13px; font-weight: 700;
  color: rgba(255,255,255,0.18); transition: color 0.25s var(--ease-expo);
}
.stc1__tab::after {
  content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 2px;
  background: var(--yellow-core);
  transform: scaleX(0); transform-origin: left; transition: transform 0.4s var(--ease-expo);
}
.stc1__tab:hover { color: rgba(255,255,255,0.70); background: rgba(255,255,255,0.025); }
.stc1__tab:hover .stc1__tab-num { color: rgba(255,255,255,0.35); }
.stc1__tab.active { color: var(--white); background: rgba(247,197,32,0.06); }
.stc1__tab.active .stc1__tab-num { color: var(--yellow-core); }
.stc1__tab.active::after { transform: scaleX(1); }

/* Tab panels */
.stc1__panels { position: relative; }
.stc1__panel { display: none; position: relative; min-height: 600px; overflow: hidden; }
.stc1__panel.active { display: block; }
/* Panel background */
.stc1__panel-bg {
  position: absolute; inset: 0; background-size: cover; background-position: center;
  z-index: 0; transition: transform 8s linear;
}
.stc1__panel.active .stc1__panel-bg { transform: scale(1.04); }
/* Panel overlay */
.stc1__panel-overlay {
  position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(105deg, rgba(30,28,26,0.94) 0%, rgba(30,28,26,0.80) 45%, rgba(30,28,26,0.48) 100%);
}
/* Blueprint grid */
.stc1__panel-grid {
  position: absolute; inset: 0; z-index: 1; pointer-events: none;
  background-image:
    repeating-linear-gradient(0deg,   rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px),
    repeating-linear-gradient(90deg,  rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
}
/* SVG Motif layer */
.stc1__motif { position: absolute; z-index: 2; pointer-events: none; }
.motif-corner  { bottom: 0; right: 0;   width: 200px; height: 200px; opacity: 0.12; }
.motif-slash   { top: 20px; right: 60px; width: 160px; height: 160px; opacity: 0.08; }
.motif-cross   { top: 50%; right: 44%; transform: translateY(-50%); width: 120px; height: 120px; opacity: 0.06; }
.motif-triangle { bottom: 40px; left: 40px; width: 100px; height: 100px; opacity: 0.08; }
/* Panel content */
.stc1__panel-content {
  position: relative; z-index: 3;
  padding: clamp(52px,7vw,96px) clamp(32px,8vw,120px);
  max-width: 1200px; display: grid; grid-template-columns: 1fr 1fr;
  gap: 60px; align-items: center; min-height: 600px;
}
/* Panel entrance */
@keyframes panelIn { from { opacity:0; transform: translateY(18px); } to { opacity:1; transform: translateY(0); } }
.stc1__panel.active .stc1__panel-content { animation: panelIn 0.55s var(--ease-expo) both; }
/* Panel text */
.stc1__panel-heading {
  font-family: var(--font-display); font-size: clamp(36px, 4.5vw, 64px);
  font-weight: 700; line-height: 1.0; letter-spacing: -0.02em;
  text-transform: uppercase; color: var(--white); margin-bottom: 20px;
}
.stc1__panel-heading em { font-style: normal; color: var(--yellow-core); }
.stc1__panel-rule { width: 48px; height: 3px; background: var(--yellow-core); margin-bottom: 24px; }
.stc1__panel-body {
  font-family: var(--font-industrial); font-size: 15px; font-weight: 300;
  line-height: 1.80; color: rgba(255,255,255,0.58); max-width: 44ch; margin-bottom: 32px;
}
.stc1__panel-features { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 36px; }
.stc1__panel-features li {
  display: flex; align-items: center; gap: 12px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.10em; text-transform: uppercase;
  color: rgba(255,255,255,0.65);
}
.stc1__panel-features li::before {
  content: ''; width: 6px; height: 6px; background: var(--yellow-core); flex-shrink: 0;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}
/* Glass stat card */
.stc1__card {
  background: rgba(30,28,26,0.72); backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.08); border-left: 3px solid var(--yellow-core);
  padding: 40px 36px; display: flex; flex-direction: column; gap: 28px;
}
.stc1__card-badge {
  display: inline-block; font-size: 9px; font-weight: 800;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--yellow-core); background: rgba(247,197,32,0.12);
  padding: 5px 10px; align-self: flex-start;
}
.stc1__stat { display: flex; flex-direction: column; gap: 4px; padding-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.07); }
.stc1__stat:last-of-type { border-bottom: none; padding-bottom: 0; }
.stc1__stat-num {
  font-family: var(--font-display); font-size: clamp(36px,4vw,52px);
  font-weight: 700; line-height: 1; letter-spacing: -0.03em; color: var(--white);
}
.stc1__stat-num em { font-style: normal; color: var(--yellow-core); }
.stc1__stat-label {
  font-size: 10px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase;
  color: rgba(255,255,255,0.40);
}
.stc1__stat-sub { font-size: 12px; color: rgba(255,255,255,0.25); margin-top: 2px; }

/* ═══════════════════════════════════════════════════════════════
   WHY3 — Light Editorial Manifesto
═══════════════════════════════════════════════════════════════ */
.why3 {
  background: var(--white); padding: var(--section-v) 0;
  position: relative; overflow: hidden;
}
.why3::before {
  content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image: repeating-linear-gradient(0deg,
    rgba(0,0,0,0.022) 0px, rgba(0,0,0,0.022) 1px, transparent 1px, transparent 64px);
}
/* Ghost watermark */
.why3__wm {
  position: absolute; right: -0.05em; bottom: -0.1em;
  font-family: var(--font-display); font-size: clamp(120px, 18vw, 260px);
  font-weight: 700; letter-spacing: -0.05em; line-height: 1;
  color: rgba(30,28,26,0.028); pointer-events: none; user-select: none; z-index: 0;
}
.why3__inner {
  position: relative; z-index: 1;
  display: grid; grid-template-columns: 1fr 2fr;
  gap: 80px; align-items: start;
  max-width: var(--container-max); margin: 0 auto; padding: 0 40px;
}
.why3__heading {
  font-family: var(--font-display); font-size: clamp(36px, 4vw, 56px);
  font-weight: 700; text-transform: uppercase; letter-spacing: -0.02em;
  line-height: 1; color: var(--charcoal-deep); margin-bottom: 20px;
}
.why3__heading em { font-style: normal; color: var(--yellow-core); }
.why3__intro {
  font-family: var(--font-body); font-size: 14px; font-weight: 400;
  line-height: 1.82; color: var(--text-400); max-width: 28ch; margin-bottom: 36px;
}
/* Manifesto rows */
.why3__rows { display: flex; flex-direction: column; }
.why3__row {
  display: grid; grid-template-columns: 80px 1px 1fr;
  gap: 0 32px; padding: 40px 0;
  border-bottom: 1px solid var(--gray-200);
  position: relative; cursor: none; overflow: hidden;
}
.why3__row:first-child { border-top: 1px solid var(--gray-200); }
/* Yellow tint hover fill */
.why3__row::before {
  content: ''; position: absolute; inset: 0;
  background: var(--charcoal-tint);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.45s var(--ease-expo);
}
.why3__row:hover::before { transform: scaleX(1); }
.why3__row-num {
  font-family: var(--font-display); font-size: clamp(40px, 5vw, 60px);
  font-weight: 200; letter-spacing: -0.04em;
  color: var(--gray-200); line-height: 1; align-self: start;
  transition: color 0.3s; position: relative; z-index: 1;
}
.why3__row:hover .why3__row-num { color: rgba(247,197,32,0.35); }
.why3__row-line { background: var(--gray-200); width: 1px; position: relative; z-index: 1; }
.why3__row-content { position: relative; z-index: 1; }
.why3__row-title {
  font-family: var(--font-display); font-size: 18px; font-weight: 700;
  text-transform: uppercase; letter-spacing: -0.01em;
  color: var(--charcoal-deep); line-height: 1; margin-bottom: 10px;
  transition: color 0.3s;
}
.why3__row:hover .why3__row-title { color: var(--charcoal-deep); }
.why3__row-body {
  font-family: var(--font-body); font-size: 14px; font-weight: 400;
  line-height: 1.75; color: var(--text-400);
}

/* ═══════════════════════════════════════════════════════════════
   PROCESS — PROC3 Hybrid Split Timeline (Light)
═══════════════════════════════════════════════════════════════ */
.proc3 {
  background: var(--white); padding: var(--section-v) 0; overflow: hidden;
}
.proc3__inner {
  display: grid; grid-template-columns: 38fr 62fr; gap: 80px; align-items: start;
  max-width: var(--container-max); margin: 0 auto; padding: 0 40px;
}
/* Left: charcoal DSE panel */
.proc3__left {
  background: var(--charcoal-deep); padding: 52px 44px 52px 48px;
  position: relative; overflow: hidden;
}
.proc3__left::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image:
    repeating-linear-gradient(0deg,   rgba(255,255,255,0.010) 0, rgba(255,255,255,0.010) 1px, transparent 1px, transparent 80px),
    repeating-linear-gradient(90deg,  rgba(255,255,255,0.010) 0, rgba(255,255,255,0.010) 1px, transparent 1px, transparent 80px);
}
.proc3__left-rail {
  position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--yellow-core) 0%, rgba(247,197,32,0.12) 65%, transparent 100%);
}
.proc3__left-wm {
  position: absolute; bottom: -10px; right: -10px;
  font-family: var(--font-display); font-size: clamp(80px, 12vw, 140px);
  font-weight: 700; letter-spacing: -0.04em; line-height: 1;
  color: rgba(255,255,255,0.025); pointer-events: none; user-select: none;
}
.proc3__left-content { position: relative; z-index: 1; }
.proc3__heading {
  font-family: var(--font-display); font-size: clamp(32px, 3.8vw, 52px);
  font-weight: 700; text-transform: uppercase; letter-spacing: -0.02em;
  line-height: 1; color: var(--white); margin-bottom: 20px;
}
.proc3__body {
  font-family: var(--font-industrial); font-size: 14px; font-weight: 300;
  line-height: 1.82; color: rgba(255,255,255,0.55); max-width: 30ch; margin-bottom: 36px;
}
/* Thread timeline — right side */
.proc3__thread { position: relative; padding-top: 8px; }
.proc3__connector {
  position: absolute; top: 24px; left: 16px; bottom: 24px; width: 1px;
  background: linear-gradient(180deg, var(--yellow-core) 0%, rgba(247,197,32,0.10) 100%);
}
.proc3__step { display: grid; grid-template-columns: 44px 1fr; gap: 24px; padding-bottom: 44px; position: relative; }
.proc3__step:last-child { padding-bottom: 0; }
.proc3__step-num {
  width: 32px; height: 32px; background: var(--charcoal-deep);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 12px; font-weight: 700;
  color: var(--yellow-core); flex-shrink: 0; position: relative; z-index: 1;
  transition: background 0.3s, color 0.3s;
}
.proc3__step:hover .proc3__step-num { background: var(--yellow-core); color: var(--charcoal-deep); }
.proc3__step-title {
  font-family: var(--font-display); font-size: 15px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.03em;
  color: var(--charcoal-deep); line-height: 1; margin-bottom: 8px; margin-top: 7px;
}
.proc3__step-body {
  font-family: var(--font-body); font-size: 13px; font-weight: 400;
  line-height: 1.75; color: var(--text-400);
}

/* ═══════════════════════════════════════════════════════════════
   PARALLAX QUOTE BAND — Full bleed DSE
═══════════════════════════════════════════════════════════════ */
.quote-band {
  position: relative; height: 70vh; min-height: 480px;
  overflow: hidden; display: flex; align-items: center;
}
.quote-band__bg {
  position: absolute; inset: -8%; will-change: transform;
}
.quote-band__bg img {
  width: 100%; height: 120%; object-fit: cover; object-position: center 45%;
  filter: contrast(1.10) brightness(0.55) saturate(0.5);
}
.quote-band__overlay-l {
  position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(105deg, rgba(14,12,10,0.82) 0%, rgba(14,12,10,0.55) 35%, rgba(14,12,10,0.48) 100%);
}
.quote-band__overlay-t {
  position: absolute; top: 0; left: 0; right: 0; z-index: 1; height: 55%;
  background: linear-gradient(to bottom, rgba(10,8,6,0.52) 0%, rgba(10,8,6,0.18) 55%, transparent 100%);
}
.quote-band__overlay-b {
  position: absolute; bottom: 0; left: 0; right: 0; z-index: 1; height: 30%;
  background: linear-gradient(to top, rgba(10,8,6,0.95) 0%, rgba(10,8,6,0.55) 55%, transparent 100%);
}
.quote-band__grain {
  position: absolute; inset: 0; z-index: 2; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E");
  background-size: 200px; opacity: 0.030;
}
.quote-band__content {
  position: relative; z-index: 10; max-width: 800px;
  margin: 0 auto; padding: 0 80px; text-align: center;
}
.quote-band__rule { width: 40px; height: 2px; background: var(--yellow-core); margin: 0 auto 36px; }
.quote-band__quote {
  font-family: var(--font-industrial); font-style: italic; font-weight: 300;
  font-size: clamp(20px, 2.8vw, 34px); line-height: 1.58;
  color: rgba(255,255,255,0.88); letter-spacing: 0.01em; margin-bottom: 36px;
}
.quote-band__attr { display: flex; align-items: center; gap: 16px; justify-content: center; }
.quote-band__attr-line { width: 24px; height: 1px; background: rgba(255,255,255,0.25); }
.quote-band__attr-name {
  font-family: var(--font-mono); font-size: 9px; font-weight: 500;
  letter-spacing: 0.22em; text-transform: uppercase; color: rgba(255,255,255,0.40);
}

/* ═══════════════════════════════════════════════════════════════
   TESTIMONIALS — TST3 Pull Quote Grid (Light)
═══════════════════════════════════════════════════════════════ */
.tst3 {
  background: var(--white); padding: var(--section-v) 0; overflow: hidden;
}
.tst3__header { text-align: center; margin-bottom: 56px; }
.tst3__heading {
  font-family: var(--font-display); font-size: clamp(32px, 3.8vw, 52px);
  font-weight: 700; text-transform: uppercase; letter-spacing: -0.02em; line-height: 1;
  color: var(--charcoal-deep);
}
.tst3__grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px;
  max-width: var(--container-max); margin: 0 auto; padding: 0 40px;
}
.tst3__card {
  background: var(--white); padding: 40px 36px; position: relative;
  overflow: hidden; border-top: 3px solid transparent;
  transition: border-color 0.3s, box-shadow 0.3s; cursor: none;
}
.tst3__card:hover { border-color: var(--yellow-core); box-shadow: 0 12px 40px rgba(30,28,26,0.10); }
.tst3__card--featured { border-color: var(--yellow-core); border-top-width: 3px; }
/* Big open mark */
.tst3__open-mark {
  position: absolute; top: 20px; left: 28px;
  font-family: var(--font-display); font-size: 120px; font-weight: 700;
  line-height: 1; color: rgba(30,28,26,0.04); pointer-events: none; user-select: none;
}
.tst3__stars { display: flex; gap: 4px; margin-bottom: 20px; position: relative; z-index: 1; }
.tst3__star { width: 12px; height: 12px; fill: var(--yellow-core); }
.tst3__quote {
  font-family: var(--font-industrial); font-style: italic; font-weight: 300;
  font-size: 15px; line-height: 1.78; color: var(--text-500);
  margin-bottom: 28px; position: relative; z-index: 1;
}
.tst3__divider { width: 24px; height: 1px; background: var(--yellow-core); margin-bottom: 20px; }
.tst3__name {
  font-family: var(--font-body); font-size: 12px; font-weight: 700;
  letter-spacing: 0.08em; text-transform: uppercase; color: var(--charcoal-deep); margin-bottom: 4px;
}
.tst3__role {
  font-family: var(--font-mono); font-size: 9px; font-weight: 500;
  letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-400);
}

/* ═══════════════════════════════════════════════════════════════
   COVERAGE — Territory Band (DSE)
═══════════════════════════════════════════════════════════════ */
.coverage {
  background: var(--charcoal-mid); padding: var(--section-v) 0;
  position: relative; overflow: hidden;
}
.coverage::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image:
    repeating-linear-gradient(0deg,   rgba(255,255,255,0.010) 0, rgba(255,255,255,0.010) 1px, transparent 1px, transparent 80px),
    repeating-linear-gradient(90deg,  rgba(255,255,255,0.010) 0, rgba(255,255,255,0.010) 1px, transparent 1px, transparent 80px);
}
.coverage__rail {
  position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--yellow-core) 0%, rgba(247,197,32,0.10) 55%, transparent 100%);
}
.coverage__ghost {
  position: absolute; bottom: -20px; left: -20px;
  font-family: var(--font-display); font-size: clamp(80px, 14vw, 180px);
  font-weight: 700; letter-spacing: -0.05em;
  color: rgba(255,255,255,0.020); pointer-events: none; user-select: none; z-index: 0; line-height: 1;
}
.coverage__inner {
  max-width: var(--container-max); margin: 0 auto; padding: 0 40px;
  display: grid; grid-template-columns: 1fr 2fr; gap: 80px; align-items: center;
  position: relative; z-index: 1;
}
.coverage__heading {
  font-family: var(--font-display); font-size: clamp(32px, 3.8vw, 52px);
  font-weight: 700; text-transform: uppercase; letter-spacing: -0.02em;
  line-height: 1; color: var(--white); margin-bottom: 16px;
}
.coverage__sub {
  font-family: var(--font-industrial); font-size: 14px; font-weight: 300;
  line-height: 1.8; color: rgba(255,255,255,0.45); max-width: 28ch; margin-bottom: 32px;
}
.coverage__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
.coverage__item {
  padding: 18px 22px; background: rgba(255,255,255,0.04);
  border-top: 1px solid rgba(255,255,255,0.06);
  display: flex; align-items: center; gap: 12px;
  transition: background 0.25s; cursor: none;
}
.coverage__item:hover { background: rgba(247,197,32,0.06); }
.coverage__item-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--yellow-core); flex-shrink: 0; }
.coverage__item-name {
  font-family: var(--font-body); font-size: 11px; font-weight: 700;
  letter-spacing: 0.10em; text-transform: uppercase;
  color: rgba(255,255,255,0.55); transition: color 0.25s;
}
.coverage__item:hover .coverage__item-name { color: var(--white); }

/* ═══════════════════════════════════════════════════════════════
   CONTACT STRIP — Light (separator between coverage DSE + CTA DSE)
═══════════════════════════════════════════════════════════════ */
.contact-strip {
  background: var(--white); padding: clamp(48px,6vw,80px) 0;
  position: relative; overflow: hidden;
}
.contact-strip::before {
  content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image: repeating-linear-gradient(0deg,
    rgba(0,0,0,0.022) 0px, rgba(0,0,0,0.022) 1px, transparent 1px, transparent 64px);
}
.contact-strip__inner {
  max-width: var(--container-max); margin: 0 auto; padding: 0 40px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px;
  position: relative; z-index: 1;
}
.contact-strip__copy {}
.contact-strip__heading {
  font-family: var(--font-display); font-size: clamp(28px, 3.5vw, 48px);
  font-weight: 700; text-transform: uppercase; letter-spacing: -0.02em;
  line-height: 1; color: var(--charcoal-deep); margin-bottom: 12px;
}
.contact-strip__heading span { color: var(--yellow-core); }
.contact-strip__sub {
  font-family: var(--font-body); font-size: 14px; font-weight: 400;
  color: var(--text-400); max-width: 42ch; line-height: 1.75;
}
.contact-strip__actions { display: flex; align-items: center; gap: 16px; flex-shrink: 0; }
.contact-strip__phone-lbl {
  font-family: var(--font-mono); font-size: 8px; font-weight: 500;
  letter-spacing: 0.22em; text-transform: uppercase; color: var(--text-400); margin-bottom: 6px;
}
.contact-strip__phone {
  font-family: var(--font-display); font-size: clamp(22px, 2.8vw, 36px);
  font-weight: 700; letter-spacing: -0.01em; line-height: 1; color: var(--charcoal-deep);
  display: block; position: relative; width: fit-content; padding-bottom: 4px; cursor: none;
}
.contact-strip__phone::after {
  content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: var(--yellow-core);
  transition: width 0.55s var(--ease-expo);
}
.contact-strip__phone:hover::after { width: 100%; }
.btn-ghost--dark {
  color: var(--charcoal-deep); border-color: rgba(30,28,26,0.25);
}
.btn-ghost--dark:hover { background: var(--charcoal-tint); border-color: var(--charcoal-deep); color: var(--charcoal-deep); }

/* ═══════════════════════════════════════════════════════════════
   CTA FINAL — glc-cta-final-v2 (Full bleed, the crown jewel)
═══════════════════════════════════════════════════════════════ */
.cta-final {
  position: relative; min-height: 100vh; display: flex; flex-direction: column; overflow: hidden;
}
/* Full-bleed image */
.cta-final__bg { position: absolute; inset: 0; z-index: 0; overflow: hidden; }
.cta-final__bg img {
  width: 100%; height: 100%; object-fit: cover; object-position: center 55%;
  transform: scale(1.06); animation: imgBreath 3s var(--ease-expo) forwards;
}
/* Three-layer atmospheric overlay */
.cta-final__overlay-l {
  position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(105deg, rgba(14,12,10,0.82) 0%, rgba(14,12,10,0.55) 30%, rgba(14,12,10,0.20) 55%, rgba(14,12,10,0.28) 100%);
}
.cta-final__overlay-t {
  position: absolute; top: 0; left: 0; right: 0; z-index: 1; height: 55%;
  background: linear-gradient(to bottom, rgba(10,8,6,0.52) 0%, rgba(10,8,6,0.20) 55%, transparent 100%);
}
.cta-final__overlay-b {
  position: absolute; bottom: 0; left: 0; right: 0; z-index: 1; height: 30%;
  background: linear-gradient(to top, rgba(10,8,6,0.96) 0%, rgba(10,8,6,0.60) 55%, transparent 100%);
}
.cta-final__grain {
  position: absolute; inset: 0; z-index: 2; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E");
  background-size: 200px; opacity: 0.032; mix-blend-mode: overlay;
}
/* Content */
.cta-final__content {
  position: relative; z-index: 10; flex: 1;
  display: flex; flex-direction: column; justify-content: space-between; padding: 0;
}
/* Top zone — in the sky */
.cta-final__top { padding: 72px 80px 0; max-width: 760px; }
.cta-final__eyebrow {
  display: flex; align-items: center; gap: 14px; margin-bottom: 56px;
  opacity: 0; animation: aFade 0.7s var(--ease-expo) 0.4s forwards;
}
.cta-final__eyebrow.in-view { animation: aFade 0.7s var(--ease-expo) 0.1s forwards; }
.cta-final__eyebrow-dash { width: 24px; height: 1px; background: var(--yellow-core); flex-shrink: 0; }
.cta-final__eyebrow-txt {
  font-size: 9px; font-weight: 700; letter-spacing: 0.32em; text-transform: uppercase;
  color: rgba(255,255,255,0.45);
}
/* Three-act headline */
.cta-final__hl {
  display: block; overflow: hidden;
  font-family: var(--font-display); font-size: clamp(58px, 8vw, 118px);
  line-height: 0.90; text-transform: uppercase; letter-spacing: -0.02em;
}
.cta-final__hl span { display: block; }
.cta-final__hl--1 span { font-weight: 200; color: rgba(255,255,255,0.25); }
.cta-final__hl--2 span { font-weight: 600; color: rgba(255,255,255,0.92); }
.cta-final__hl--3 span { font-weight: 700; color: var(--yellow-core); }
.cta-final.in-view .cta-final__hl--1 span { animation: aLineUp 1s var(--ease-expo) 0.55s both; }
.cta-final.in-view .cta-final__hl--2 span { animation: aLineUp 1s var(--ease-expo) 0.72s both; }
.cta-final.in-view .cta-final__hl--3 span { animation: aLineUp 1s var(--ease-expo) 0.88s both; }
/* Mid zone */
.cta-final__mid {
  padding: 56px 80px 0; max-width: 520px;
  opacity: 0; animation: aFade 0.8s var(--ease-expo) 1.15s forwards;
}
.cta-final.in-view .cta-final__mid { animation: aFade 0.8s var(--ease-expo) 0.95s forwards; }
.cta-final__caption {
  font-family: var(--font-industrial); font-weight: 300;
  font-size: 16px; line-height: 1.75; color: rgba(255,255,255,0.68);
}
.cta-final__caption strong { font-family: var(--font-industrial); font-weight: 500; color: rgba(255,255,255,0.88); }
/* Bottom zone */
.cta-final__bottom {
  padding: 0 80px 44px;
  display: flex; align-items: flex-end; justify-content: space-between; gap: 40px; flex-wrap: wrap;
}
.cta-final__phone-block {
  opacity: 0; animation: aSlide 0.8s var(--ease-expo) 1.4s forwards;
}
.cta-final.in-view .cta-final__phone-block { animation: aSlide 0.8s var(--ease-expo) 1.2s forwards; }
.cta-final__phone-lbl {
  display: block; font-size: 8px; font-weight: 700; letter-spacing: 0.32em; text-transform: uppercase;
  color: rgba(255,255,255,0.28); margin-bottom: 10px;
}
.cta-final__phone {
  display: block; font-family: var(--font-display); font-size: clamp(30px, 3.8vw, 56px);
  font-weight: 700; letter-spacing: -0.01em; line-height: 1; color: var(--white);
  position: relative; width: fit-content; padding-bottom: 6px; cursor: none;
}
.cta-final__phone::after {
  content: ''; position: absolute; bottom: 0; left: 0;
  width: 0; height: 2px; background: var(--yellow-core);
  transition: width 0.55s var(--ease-expo);
}
.cta-final__phone:hover::after { width: 100%; }
.cta-final__trust {
  display: flex; flex-direction: column; gap: 8px;
  opacity: 0; animation: aFade 0.7s var(--ease-expo) 1.6s forwards;
}
.cta-final.in-view .cta-final__trust { animation: aFade 0.7s var(--ease-expo) 1.3s forwards; }
.cta-final__trust-item {
  display: flex; align-items: center; gap: 8px; font-size: 10px; font-weight: 600;
  letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.35);
}
.cta-final__trust-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--yellow-core); flex-shrink: 0; }
/* CTA bar */
.cta-final__bar {
  display: grid; grid-template-columns: 1fr auto; height: 76px;
  position: relative; z-index: 20;
  opacity: 0; animation: aSlide 0.7s var(--ease-expo) 1.9s forwards;
}
.cta-final.in-view .cta-final__bar { animation: aSlide 0.7s var(--ease-expo) 1.6s forwards; }
.cta-final__bar-main {
  background: var(--yellow-core); display: flex; align-items: center;
  justify-content: space-between; padding: 0 52px 0 80px; gap: 32px;
  text-decoration: none; cursor: none; position: relative; overflow: hidden;
}
.cta-final__bar-main::before {
  content: ''; position: absolute; inset: 0; background: var(--white);
  transform: scaleX(0); transform-origin: left; transition: transform 0.58s var(--ease-expo);
}
.cta-final__bar-main:hover::before { transform: scaleX(1); }
.cta-final__bar-lbl {
  font-family: var(--font-display); font-size: clamp(12px,1.1vw,15px);
  font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--charcoal-deep); position: relative; z-index: 1;
  transition: letter-spacing 0.35s var(--ease-expo);
}
.cta-final__bar-main:hover .cta-final__bar-lbl { letter-spacing: 0.28em; }
.cta-final__bar-right { display: flex; align-items: center; gap: 16px; position: relative; z-index: 1; flex-shrink: 0; }
.cta-final__bar-line { width: 0; height: 1px; background: rgba(30,28,26,0.28); transition: width 0.40s var(--ease-expo); }
.cta-final__bar-main:hover .cta-final__bar-line { width: 40px; }
.cta-final__bar-icon {
  width: 38px; height: 38px; border: 1.5px solid rgba(30,28,26,0.22);
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.4s var(--ease-expo);
}
.cta-final__bar-icon svg { width: 15px; height: 15px; fill: none; stroke: var(--charcoal-deep); stroke-width:2; stroke-linecap:round; stroke-linejoin:round; transition: transform 0.4s var(--ease-expo); }
.cta-final__bar-main:hover .cta-final__bar-icon svg { transform: rotate(-45deg); }
.cta-final__bar-sec {
  background: var(--charcoal-mid); border-left: 1px solid rgba(247,197,32,0.15);
  padding: 0 40px; display: flex; align-items: center; gap: 10px;
  text-decoration: none; cursor: none; position: relative; overflow: hidden; transition: background 0.3s;
}
.cta-final__bar-sec:hover { background: #383330; }
.cta-final__bar-sec svg { width: 14px; height: 14px; fill: none; stroke: rgba(247,197,32,0.40); stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; flex-shrink:0; position: relative; z-index:1; transition: stroke 0.25s; }
.cta-final__bar-sec:hover svg { stroke: var(--yellow-core); }
.cta-final__bar-sec-txt {
  font-family: var(--font-body); font-size: 10px; font-weight: 700;
  letter-spacing: 0.20em; text-transform: uppercase;
  color: rgba(255,255,255,0.28); position: relative; z-index: 1; transition: color 0.25s; white-space: nowrap;
}
.cta-final__bar-sec:hover .cta-final__bar-sec-txt { color: rgba(255,255,255,0.65); }

/* ═══════════════════════════════════════════════════════════════
   FOOTER — Brand Grid + Legal Bar (DSE)
═══════════════════════════════════════════════════════════════ */
.footer {
  background: var(--charcoal-deep); position: relative; overflow: hidden;
}
.footer::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image:
    repeating-linear-gradient(0deg,   rgba(255,255,255,0.008) 0, rgba(255,255,255,0.008) 1px, transparent 1px, transparent 80px),
    repeating-linear-gradient(90deg,  rgba(255,255,255,0.008) 0, rgba(255,255,255,0.008) 1px, transparent 1px, transparent 80px);
}
.footer__rail {
  height: 3px;
  background: linear-gradient(90deg, var(--yellow-core) 0%, rgba(247,197,32,0.10) 55%, transparent 100%);
}
.footer__main {
  max-width: var(--container-max); margin: 0 auto; padding: 72px 40px 64px;
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px;
  position: relative; z-index: 1;
}
.footer__mark {
  width: 40px; height: 40px; background: var(--yellow-core); flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 13px; font-weight: 700;
  color: var(--charcoal-deep); position: relative;
}
.footer__mark::after {
  content: ''; position: absolute; bottom: -2px; right: -2px;
  width: 8px; height: 8px; background: var(--charcoal-deep);
}
.footer__logo-row { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
.footer__name { font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--white); line-height: 1; }
.footer__name-sub { font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(255,255,255,0.30); margin-top: 3px; }
.footer__tagline {
  font-family: var(--font-industrial); font-size: 13px; font-weight: 300;
  color: rgba(255,255,255,0.38); line-height: 1.7; max-width: 28ch; margin-bottom: 24px;
}
.footer__contact-item {
  display: flex; align-items: center; gap: 10px;
  font-family: var(--font-body); font-size: 12px; font-weight: 500;
  color: rgba(255,255,255,0.55); margin-bottom: 8px; cursor: none; transition: color 0.2s;
}
.footer__contact-item:hover { color: var(--white); }
.footer__contact-item svg { width: 14px; height: 14px; fill: none; stroke: var(--yellow-core); stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; flex-shrink: 0; }
.footer__col-title {
  font-family: var(--font-body); font-size: 9px; font-weight: 800;
  letter-spacing: 0.22em; text-transform: uppercase; color: var(--yellow-core);
  margin-bottom: 20px; display: flex; align-items: center; gap: 8px;
}
.footer__col-title::before { content: ''; width: 16px; height: 2px; background: var(--yellow-core); flex-shrink: 0; }
.footer__links { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.footer__links a {
  font-family: var(--font-industrial); font-size: 13px; font-weight: 300;
  color: rgba(255,255,255,0.40); cursor: none; display: block;
  transition: color 0.2s, padding-left 0.25s var(--ease-expo);
}
.footer__links a:hover { color: var(--white); padding-left: 6px; }
.footer__bar { border-top: 1px solid rgba(255,255,255,0.07); position: relative; z-index: 1; }
.footer__bar-inner {
  max-width: var(--container-max); margin: 0 auto; padding: 20px 40px;
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
}
.footer__copy { font-family: var(--font-mono); font-size: 9px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.22); }
.footer__copy span { color: rgba(255,255,255,0.40); }
.footer__legal { display: flex; align-items: center; gap: 24px; }
.footer__legal a { font-family: var(--font-mono); font-size: 9px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.22); cursor: none; transition: color 0.2s; }
.footer__legal a:hover { color: rgba(255,255,255,0.55); }

/* ═══════════════════════════════════════════════════════════════
   KEYFRAMES
═══════════════════════════════════════════════════════════════ */
@keyframes aFade   { from { opacity: 0; } to { opacity: 1; } }
@keyframes aLineUp { from { transform: translateY(110%); } to { transform: translateY(0); } }
@keyframes aGrow   { from { width: 0; } to { width: 100%; } }
@keyframes aSlide  { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
@keyframes imgBreath { to { transform: scale(1.00); } }

/* ═══════════════════════════════════════════════════════════════
   CONTAINER UTILITY
═══════════════════════════════════════════════════════════════ */
.container { max-width: var(--container-max); margin: 0 auto; padding: 0 40px; }

/* ═══════════════════════════════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════════════════════════════ */
/* ─────────────────────────────────────────────────
   TABLET  ≤1024px
───────────────────────────────────────────────── */
@media (max-width: 1024px) {
  /* Header */
  .gl-header__nav { display: none; }
  .gl-header__phone { display: none; }
  .gl-header__inner { padding: 0 24px; }

  /* Hero — stack image above copy */
  .hero {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas: "right" "left" "bar";
  }
  .hero__right  { min-height: 52vw; }
  .hero__left   { padding: 48px 32px 48px; padding-top: 48px; }
  .hero__seam   { display: none; }
  .hero__ghost  { display: none; }

  /* Stats */
  .st3__side-label { display: none; }
  .st3__grid { flex-wrap: wrap; }
  .stat-cell { flex: 0 0 50%; border-bottom: 1px solid rgba(255,255,255,0.06); }

  /* About */
  .ab3__layout { grid-template-columns: 1fr; }
  .ab3__copy   { padding-right: 0; margin-bottom: 0; }
  .ab3__media  { min-height: 300px; overflow: hidden; clip-path: none; }
  .ab3__wm     { display: none; }
  .ab3__chip   { left: 12px; }

  /* Services tab */
  .stc1__rail-label { display: none; }
  .stc1__tab        { padding: 0 18px; font-size: 10px; }
  .stc1__panel-content { grid-template-columns: 1fr; gap: 40px; min-height: auto; padding-bottom: 48px; }

  /* Why */
  .why3__inner { grid-template-columns: 1fr; gap: 40px; }
  .why3__wm    { display: none; }

  /* Process */
  .proc3__inner { grid-template-columns: 1fr; gap: 0; }
  .proc3__left  { padding: 40px 32px; }
  .proc3__thread { padding-top: 48px; }

  /* Testimonials */
  .tst3__grid { grid-template-columns: 1fr 1fr; }
  .tst3__grid .tst3__card:last-child { display: none; }

  /* Coverage */
  .coverage__inner { grid-template-columns: 1fr; gap: 40px; }
  .coverage__grid  { grid-template-columns: repeat(2,1fr); }
  .coverage__ghost { display: none; }

  /* Contact strip */
  .contact-strip__inner { flex-direction: column; align-items: flex-start; gap: 32px; }

  /* CTA Final */
  .cta-final__top    { padding: 60px 32px 0; max-width: 100%; }
  .cta-final__mid    { padding: 36px 32px 0; max-width: 100%; }
  .cta-final__bottom { padding: 36px 32px 40px; }
  .cta-final__bar-main { padding: 0 28px 0 32px; }
  .cta-final__bar-sec  { padding: 0 24px; }

  /* Footer */
  .footer__main { grid-template-columns: 1fr 1fr; gap: 32px; padding: 52px 24px 48px; }
}

/* ─────────────────────────────────────────────────
   MOBILE  ≤640px
───────────────────────────────────────────────── */
@media (max-width: 640px) {
  /* Base spacing */
  :root { --section-v: clamp(56px,10vw,80px); }
  .container { padding: 0 20px; }

  /* Header */
  .gl-header__inner { padding: 0 20px; }
  .gl-header__name  { font-size: 11px; }
  .gl-header__sub   { display: none; }
  .gl-header__mark  { width: 28px; height: 28px; font-size: 10px; }
  .btn-primary      { font-size: 10px; padding: 11px 18px; }

  /* Hero */
  .hero__right  { min-height: 56vw; }
  .hero__left   { padding: calc(var(--header-h) + 32px) 20px 40px; }
  .hero__hl     { font-size: clamp(44px, 12vw, 72px); }
  .hero__caption { font-size: 14px; max-width: 100%; }
  .hero__phone  { font-size: clamp(24px, 7vw, 36px); }
  .hero__trust  { display: none; }
  .hero__badge  { display: none; }
  .hero__bar    { height: 60px; }
  .hero__bar-main { padding: 0 20px; }
  .hero__bar-lbl  { font-size: 10px; letter-spacing: 0.12em; }
  .hero__bar-sec  { padding: 0 18px; }
  .hero__bar-sec-txt { display: none; }
  .hero__bar-icon { width: 30px; height: 30px; }

  /* Stats */
  .stat-cell { flex: 0 0 50%; padding: 36px 0; }
  .stat-cell__num { font-size: clamp(32px, 9vw, 48px); }

  /* About */
  .ab3 { padding: var(--section-v) 0; }
  .ab3__layout { padding: 0 20px; }
  .ab3__copy::before { display: none; }
  .ab3__heading { font-size: clamp(30px, 9vw, 46px); }
  .ab3__creds { grid-template-columns: 1fr 1fr; }
  .ab3__media { min-height: 240px; clip-path: none; }
  .ab3__chip  { left: 0; top: 16px; }

  /* Tab container */
  .stc1__tab     { padding: 0 14px; font-size: 10px; }
  .stc1__tab-num { display: none; }
  .stc1__panel-content { padding: 36px 20px 48px; }
  .stc1__panel-heading { font-size: clamp(28px, 8vw, 48px); }
  .stc1__card  { padding: 28px 20px; }

  /* Why */
  .why3 { padding: var(--section-v) 0; }
  .why3__inner { padding: 0 20px; }
  .why3__heading { font-size: clamp(28px, 9vw, 44px); }
  .why3__row { grid-template-columns: 48px 1px 1fr; gap: 0 20px; padding: 28px 0; }
  .why3__row-num { font-size: clamp(32px, 8vw, 48px); }
  .why3__row-title { font-size: 14px; }
  .why3__row-body  { font-size: 13px; }

  /* Process */
  .proc3__inner { padding: 0; }
  .proc3__left  { padding: 36px 20px; }
  .proc3__thread { padding: 36px 20px 0; }
  .proc3__heading { font-size: clamp(26px, 8vw, 44px); }

  /* Quote band */
  .quote-band__content { padding: 0 24px; }
  .quote-band__quote   { font-size: clamp(16px, 4.5vw, 24px); }

  /* Testimonials */
  .tst3__header { padding: 0 20px; }
  .tst3__grid   { grid-template-columns: 1fr; padding: 0 20px; }
  .tst3__grid .tst3__card:last-child { display: block; }
  .tst3__card   { padding: 28px 24px; }

  /* Coverage */
  .coverage__inner  { padding: 0 20px; }
  .coverage__grid   { grid-template-columns: 1fr 1fr; }
  .coverage__heading { font-size: clamp(28px, 9vw, 44px); }

  /* Contact strip */
  .contact-strip { padding: var(--section-v) 0; }
  .contact-strip__inner { padding: 0 20px; }
  .contact-strip__heading { font-size: clamp(22px, 7vw, 36px); }
  .contact-strip__phone   { font-size: clamp(20px, 6.5vw, 30px); }

  /* CTA Final */
  .cta-final         { min-height: auto; }
  .cta-final__top    { padding: 56px 20px 0; }
  .cta-final__hl     { font-size: clamp(44px, 13vw, 72px); }
  .cta-final__mid    { padding: 28px 20px 0; }
  .cta-final__caption { font-size: 14px; }
  .cta-final__bottom { padding: 28px 20px 36px; flex-direction: column; align-items: flex-start; gap: 24px; }
  .cta-final__phone  { font-size: clamp(26px, 8vw, 40px); }
  .cta-final__trust  { align-items: flex-start; }
  .cta-final__bar    { height: 60px; }
  .cta-final__bar-main { padding: 0 20px; }
  .cta-final__bar-lbl  { font-size: 10px; letter-spacing: 0.12em; }
  .cta-final__bar-sec  { padding: 0 18px; }
  .cta-final__bar-sec-txt { display: none; }

  /* Footer */
  .footer__main  { grid-template-columns: 1fr; padding: 48px 20px 40px; gap: 28px; }
  .footer__bar-inner { padding: 16px 20px; flex-direction: column; align-items: flex-start; gap: 10px; }
  .footer__legal { flex-wrap: wrap; gap: 16px; }

  /* Hide cursor on touch */
  .c-dot, .c-ring { display: none; }
  body { cursor: auto; }
}
```

---

## 3. CSS — SVG motif approval preview (document 2)

Supplementary stylesheet from the second `<style>` block (motif preview chrome + shared primitives). Use with the motif section markup or merge selectively into your main sheet.

```css

/* ═══════════════════════════════════════════════════════
   TOKENS — exact match to glc-unified-v2
═══════════════════════════════════════════════════════ */
:root {
  --white:            #FFFFFF;
  --gray-100:         rgba(30,28,26,0.06);
  --gray-200:         rgba(30,28,26,0.12);
  --charcoal-deep:    #1E1C1A;
  --charcoal-mid:     #2E2B28;
  --charcoal-light:   #585653;
  --yellow-core:      #F7C520;
  --gold:             #D4A017;
  --charcoal-tint:    rgba(46,43,40,0.06);
  --charcoal-tint-md: rgba(46,43,40,0.12);
  --text-600:         rgba(30,28,26,0.90);
  --text-500:         rgba(30,28,26,0.80);
  --text-400:         rgba(30,28,26,0.55);
  --font-display:     'Oswald', sans-serif;
  --font-body:        'Plus Jakarta Sans', sans-serif;
  --font-industrial:  'Barlow', sans-serif;
  --font-mono:        'Source Code Pro', monospace;
  --ease-expo:        cubic-bezier(0.22, 1, 0.36, 1);
  --container-max:    1320px;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { -webkit-font-smoothing: antialiased; }
body {
  font-family: var(--font-body);
  background: var(--white);
  color: var(--text-500);
  line-height: 1.8;
  overflow-x: hidden;
}

/* ═══════════════════════════════════════════════════════
   PREVIEW CHROME
═══════════════════════════════════════════════════════ */
.topbar {
  background: var(--charcoal-deep);
  border-bottom: 3px solid var(--yellow-core);
  padding: 18px 48px;
  display: flex; align-items: center; justify-content: space-between;
  position: sticky; top: 0; z-index: 200;
}
.topbar__mark {
  width: 28px; height: 28px; background: var(--yellow-core);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 10px; font-weight: 700;
  color: var(--charcoal-deep); position: relative; flex-shrink: 0;
}
.topbar__mark::after {
  content: ''; position: absolute; bottom: -2px; right: -2px;
  width: 5px; height: 5px; background: var(--charcoal-mid);
}
.topbar__title {
  font-family: var(--font-display); font-size: 12px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.12em; color: var(--white);
  margin-left: 14px;
}
.topbar__title em { font-style: normal; color: var(--yellow-core); }
.badge {
  font-family: var(--font-mono); font-size: 8px; font-weight: 500;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: rgba(255,255,255,0.30); background: rgba(255,255,255,0.05);
  padding: 4px 10px; border: 1px solid rgba(255,255,255,0.09);
}

/* Label strip between motif blocks */
.lstrip {
  background: var(--white);
  padding: 14px 48px;
  border-bottom: 1px solid var(--gray-100);
  border-top: 1px solid var(--gray-200);
  display: flex; align-items: center; justify-content: space-between;
}
.lstrip__id {
  font-family: var(--font-mono); font-size: 9px; font-weight: 500;
  letter-spacing: 0.22em; text-transform: uppercase; color: var(--yellow-core);
  display: flex; align-items: center; gap: 10px;
}
.lstrip__id::before { content:''; width:16px; height:2px; background:var(--yellow-core); flex-shrink:0; }
.lstrip__name {
  font-family: var(--font-display); font-size: 13px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.07em; color: var(--charcoal-deep);
}
.lstrip__note {
  font-family: var(--font-industrial); font-size: 12px; font-weight: 300;
  color: var(--text-400);
}

/* ═══════════════════════════════════════════════════════
   DSE SECTION PATTERN (matches unified-v2 exactly)
═══════════════════════════════════════════════════════ */
.dse {
  background: var(--charcoal-deep);
  position: relative; overflow: hidden;
}
.dse::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image:
    repeating-linear-gradient(0deg,   rgba(255,255,255,0.010) 0, rgba(255,255,255,0.010) 1px, transparent 1px, transparent 80px),
    repeating-linear-gradient(90deg,  rgba(255,255,255,0.010) 0, rgba(255,255,255,0.010) 1px, transparent 1px, transparent 80px);
}
.dse-rail {
  position: absolute; top: 0; left: 0; right: 0; height: 3px; z-index: 4;
  background: linear-gradient(90deg, var(--yellow-core) 0%, rgba(247,197,32,0.12) 65%, transparent 100%);
}
.dse-grain {
  position: absolute; inset: 0; z-index: 2; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E");
  background-size: 200px; opacity: 0.028; mix-blend-mode: overlay;
}
.dse-c { position: relative; z-index: 3; }

/* LIGHT SECTION PATTERN */
.ls {
  background: var(--white); position: relative; overflow: hidden;
}
.ls::before {
  content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image: repeating-linear-gradient(0deg,
    rgba(0,0,0,0.022) 0px, rgba(0,0,0,0.022) 1px, transparent 1px, transparent 64px);
}
.ls-c { position: relative; z-index: 1; }

/* ═══════════════════════════════════════════════════════
   SHARED PRIMITIVES (from unified-v2)
═══════════════════════════════════════════════════════ */
.eyebrow {
  font-family: var(--font-body); font-size: 9px; font-weight: 800;
  letter-spacing: 0.24em; text-transform: uppercase; color: var(--yellow-core);
  display: flex; align-items: center; gap: 10px; margin-bottom: 20px;
}
.eyebrow::before { content:''; width:20px; height:2px; background:var(--yellow-core); flex-shrink:0; }
.eyebrow-d { color: rgba(255,255,255,0.38); }
.eyebrow-d span { color: var(--yellow-core); }

.anno {
  font-family: var(--font-mono); font-size: 8px; font-weight: 500;
  letter-spacing: 0.18em; text-transform: uppercase; color: var(--text-400);
}
.anno-w { color: rgba(255,255,255,0.28); }

/* Grids */
.g2 { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
.g3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2px; }

/* Animations */
@keyframes s1 { from{transform:translateX(0)} to{transform:translateX(20px)} }
@keyframes s2 { from{transform:translateX(0)} to{transform:translateX(-14px)} }
.a1 { animation: s1 10s infinite alternate ease-in-out; }
.a2 { animation: s2 14s infinite alternate ease-in-out; }

/* Hover card (light) */
.hcard {
  background: var(--white); border: 1px solid var(--gray-200);
  padding: 28px; position: relative; overflow: hidden;
  transition: background 0.22s var(--ease-expo), border-color 0.22s;
  cursor: default;
}
.hcard:hover { background: var(--charcoal-tint); border-color: var(--yellow-core); }
.hcard::after {
  content: ''; position: absolute; top: 0; right: 0;
  width: 70px; height: 70px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cpolygon points='120,0 0,120 120,120' fill='%231E1C1A'/%3E%3Cpolygon points='120,0 60,60 120,60' fill='%23F7C520'/%3E%3C/svg%3E") no-repeat;
  background-size: contain;
  transform: translate(35px,-35px);
  transition: transform 0.35s var(--ease-expo);
  pointer-events: none;
}
.hcard:hover::after { transform: translate(0,0); }

/* btn-primary (exact from unified-v2) */
.btn-p {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-body); font-size: 11px; font-weight: 800;
  letter-spacing: 0.14em; text-transform: uppercase;
  background: var(--yellow-core); color: var(--charcoal-deep);
  border: none; padding: 14px 28px; cursor: default;
  position: relative; overflow: hidden;
  transition: transform 0.22s var(--ease-expo), box-shadow 0.22s var(--ease-expo);
}
.btn-p::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
  transform: translateX(-100%);
  transition: transform 0.7s var(--ease-expo);
}
.btn-p:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(247,197,32,0.30); }
.btn-p:hover::before { transform: translateX(100%); }

.btn-g {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-body); font-size: 11px; font-weight: 800;
  letter-spacing: 0.14em; text-transform: uppercase;
  background: transparent; color: var(--charcoal-deep);
  border: 1px solid var(--gray-200); padding: 13px 28px; cursor: default;
  transition: background 0.22s, border-color 0.22s;
}
.btn-g:hover { background: var(--charcoal-tint); border-color: var(--charcoal-light); }

/* Yellow rule 3px */
.yrule { width: 48px; height: 3px; background: var(--yellow-core); margin-bottom: 20px; }

/* Feature bullet (stc1 style) */
.fbullet {
  display: flex; align-items: center; gap: 12px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.10em;
  text-transform: uppercase; color: rgba(255,255,255,0.65);
}
.fbullet::before {
  content: ''; width: 6px; height: 6px; background: var(--yellow-core);
  clip-path: polygon(50% 0%,100% 50%,50% 100%,0% 50%); flex-shrink: 0;
}
```

---

## 3b. HTML — GLC SVG Motif System · Approval Preview (complete body)

**Requires:** Section **1** (fonts) and Section **3** (motif preview CSS). Below is the full preview **body** fragment: top bar, every labelled block **A1–A6**, **B1–B5**, **C1–C3**, **D1–D7**, integration preview, and approval footer. Same content is saved as `clean-md-bundle/glc-motif-approval-preview-body.html` for direct reuse.

```html
<!-- TOP BAR -->
<div class="topbar">
  <div style="display:flex;align-items:center;">
    <div class="topbar__mark">GL</div>
    <div class="topbar__title">Ground Level <em>Contracting</em> — SVG Motif Approval Preview</div>
  </div>
  <div style="display:flex;gap:10px;">
    <div class="badge">glc-unified-v2 tokens</div>
    <div class="badge">21 motifs</div>
    <div class="badge">zero border-radius</div>
    <div class="badge">hover cards interactive</div>
  </div>
</div>


<!-- ══════════════════════════════════════════════════
  A1 — HERO FULL SWEEP (Forward, left → right)
══════════════════════════════════════════════════ -->
<div class="lstrip">
  <div><div class="lstrip__id">A1 · Hero Full Sweep</div><div class="lstrip__name">Forward Flow · Left → Right</div></div>
  <div class="lstrip__note">Hero left panel background · 3 planes · parallax layers animating on translateX</div>
</div>
<div class="dse" style="min-height:320px;display:flex;align-items:flex-end;padding:60px 80px 52px;">
  <div class="dse-rail"></div>
  <div class="dse-grain"></div>
  <svg style="position:absolute;inset:0;width:100%;height:100%;z-index:1;" viewBox="0 0 1400 320" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <polygon class="a1" points="0,320 0,155 700,50 1100,110 1400,42 1400,320" fill="#2E2B28" opacity="0.7"/>
    <polygon class="a1" points="0,158 0,190 850,70 1400,48 1400,42 700,50" fill="#F7C520" opacity="0.80"/>
    <polygon class="a2" points="0,320 0,230 480,175 1100,205 1400,165 1400,320" fill="#1E1C1A" opacity="0.65"/>
  </svg>
  <div style="position:absolute;bottom:72px;right:-10px;font-family:var(--font-display);font-size:clamp(80px,10vw,140px);font-weight:700;letter-spacing:-0.04em;line-height:1;color:rgba(255,255,255,0.022);pointer-events:none;user-select:none;z-index:1;">GLC</div>
  <div class="dse-c">
    <div class="eyebrow eyebrow-d"><span>Simcoe County Commercial</span></div>
    <div style="font-family:var(--font-display);font-size:clamp(44px,5.5vw,88px);font-weight:700;text-transform:uppercase;letter-spacing:-0.025em;line-height:0.88;margin-bottom:28px;">
      <span style="display:block;font-weight:200;color:rgba(255,255,255,0.18);">Built From</span>
      <span style="display:block;font-weight:600;color:rgba(255,255,255,0.88);">The Ground</span>
      <span style="display:block;color:var(--yellow-core);">Up.</span>
    </div>
    <div style="font-family:var(--font-industrial);font-size:14px;font-weight:300;color:rgba(255,255,255,0.55);max-width:38ch;line-height:1.82;">Commercial excavation, civil infrastructure, and site services across Barrie and Simcoe County.</div>
  </div>
  <div style="position:absolute;bottom:14px;right:48px;z-index:5;" class="anno anno-w">A1 · watch the yellow band drift right →</div>
</div>


<!-- ══════════════════════════════════════════════════
  A2 — HERO REVERSED
══════════════════════════════════════════════════ -->
<div class="lstrip">
  <div><div class="lstrip__id">A2 · Hero Sweep Reversed</div><div class="lstrip__name">Right → Left Flow · Service Page Variant</div></div>
  <div class="lstrip__note">Mirrors truck forward motion · use on right-side-weighted layouts · same animation, opposing direction</div>
</div>
<div class="dse" style="min-height:240px;display:flex;align-items:flex-end;padding:48px 80px 44px;">
  <div class="dse-grain"></div>
  <svg style="position:absolute;inset:0;width:100%;height:100%;z-index:1;" viewBox="0 0 1400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <polygon class="a2" points="1400,240 1400,110 700,30 300,80 0,20 0,240" fill="#2E2B28" opacity="0.7"/>
    <polygon class="a2" points="1400,112 1400,145 550,45 0,25 0,20 700,30" fill="#F7C520" opacity="0.80"/>
    <polygon class="a1" points="1400,240 1400,175 920,130 300,152 0,115 0,240" fill="#1E1C1A" opacity="0.65"/>
  </svg>
  <div class="dse-c" style="margin-left:auto;text-align:right;">
    <div class="eyebrow eyebrow-d" style="justify-content:flex-end;"><span>Service Detail</span></div>
    <div style="font-family:var(--font-display);font-size:clamp(32px,4vw,62px);font-weight:700;text-transform:uppercase;letter-spacing:-0.02em;line-height:1;color:var(--white);">
      Foundations &amp; <em style="font-style:normal;color:var(--yellow-core);">Civil</em>
    </div>
  </div>
  <div style="position:absolute;bottom:14px;left:48px;z-index:5;" class="anno anno-w">A2 · reversed · ← yellow band drifts left</div>
</div>


<!-- ══════════════════════════════════════════════════
  A3 — SECTION DIVIDER (live transition)
══════════════════════════════════════════════════ -->
<div class="lstrip">
  <div><div class="lstrip__id">A3 · Section Divider</div><div class="lstrip__name">Angled Transition · Light → Dark</div></div>
  <div class="lstrip__note">Between page zones · 55–80px height · yellow thread at seam edge</div>
</div>
<div class="ls" style="padding:28px 48px;">
  <div class="ls-c"><span class="anno">Section above — white surface · hairline grid active</span></div>
</div>
<div style="line-height:0;margin-bottom:-1px;">
  <svg viewBox="0 0 1400 70" preserveAspectRatio="none" style="width:100%;height:70px;display:block;" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,70 0,38 1400,0 1400,70" fill="#1E1C1A"/>
    <polygon points="0,70 0,54 700,16 1400,30 1400,70" fill="#1E1C1A" opacity="0.5"/>
    <polygon points="0,40 1400,2 1400,7 0,46" fill="#F7C520" opacity="0.42"/>
  </svg>
</div>
<div class="dse" style="padding:28px 48px;">
  <div class="dse-c"><span class="anno anno-w">Section below — DSE · blueprint grid active · yellow thread visible at seam</span></div>
</div>


<!-- ══════════════════════════════════════════════════
  A4 + A5 — FOOTER CAP + THIN STRIP
══════════════════════════════════════════════════ -->
<div class="lstrip">
  <div><div class="lstrip__id">A4 · Footer Cap &nbsp;·&nbsp; A5 · Thin Accent Strip</div><div class="lstrip__name">Footer Entry · Typography Rule</div></div>
  <div class="lstrip__note">A4 at footer top · A5 as angled underline under Oswald display headings</div>
</div>
<div class="g2">
  <div>
    <div style="background:var(--charcoal-mid);padding:16px 28px;border-bottom:1px solid rgba(255,255,255,0.06);">
      <span class="anno anno-w">A4 · Footer Cap</span>
    </div>
    <div style="background:var(--charcoal-mid);line-height:0;">
      <svg viewBox="0 0 700 55" preserveAspectRatio="none" style="width:100%;height:55px;display:block;" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,55 0,28 700,0 700,55" fill="#1E1C1A"/>
        <polygon points="0,55 0,40 210,14 700,0 700,55" fill="#F7C520" opacity="0.15"/>
      </svg>
    </div>
    <div class="dse" style="padding:24px 28px;">
      <div class="dse-c"><span class="anno anno-w">Footer zone — charcoal-deep</span></div>
    </div>
  </div>
  <div class="ls" style="padding:40px 48px;">
    <div class="ls-c">
      <span class="anno" style="display:block;margin-bottom:16px;">A5 · Angled rule under display heading</span>
      <div style="font-family:var(--font-display);font-size:42px;font-weight:700;text-transform:uppercase;letter-spacing:-0.02em;line-height:1;color:var(--charcoal-deep);margin-bottom:8px;">Our Services</div>
      <svg viewBox="0 0 320 3" preserveAspectRatio="none" style="width:220px;height:3px;display:block;margin-bottom:18px;">
        <polygon points="0,3 0,1.5 320,0 320,3" fill="#F7C520"/>
      </svg>
      <div style="font-family:var(--font-industrial);font-size:14px;font-weight:300;color:var(--text-400);">Angled yellow rule replaces a flat border — carries the motif language into typography without a graphic element.</div>
    </div>
  </div>
</div>


<!-- ══════════════════════════════════════════════════
  A6 — DIAGONAL STRIP AS BG WATERMARK
══════════════════════════════════════════════════ -->
<div class="lstrip">
  <div><div class="lstrip__id">A6 · Diagonal Strip</div><div class="lstrip__name">Section Background Watermark</div></div>
  <div class="lstrip__note">6–10% opacity max · DSE sections only · never on white backgrounds</div>
</div>
<div class="dse" style="padding:52px 80px;min-height:200px;display:flex;align-items:center;">
  <div class="dse-rail"></div>
  <div class="dse-grain"></div>
  <svg style="position:absolute;inset:0;width:100%;height:100%;z-index:1;" viewBox="0 0 1400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,200 0,100 1400,0 1400,100" fill="#F7C520" opacity="0.07"/>
    <polygon points="0,200 0,140 1400,40 1400,200" fill="#F7C520" opacity="0.04"/>
  </svg>
  <div class="dse-c">
    <div class="eyebrow eyebrow-d"><span>Why GLC</span></div>
    <div style="font-family:var(--font-display);font-size:clamp(28px,3.5vw,48px);font-weight:700;text-transform:uppercase;letter-spacing:-0.02em;line-height:1;color:var(--white);margin-bottom:12px;">
      Locally Operated. <em style="font-style:normal;color:var(--yellow-core);">Commercially Focused.</em>
    </div>
    <div style="font-family:var(--font-industrial);font-size:14px;font-weight:300;color:rgba(255,255,255,0.55);max-width:50ch;line-height:1.82;">Diagonal strip at 7% opacity. Carries angular identity without competing with text — you feel it rather than see it.</div>
  </div>
  <div style="position:absolute;bottom:14px;right:48px;z-index:5;" class="anno anno-w">A6 · opacity 0.07 · never above 0.10</div>
</div>


<!-- ══════════════════════════════════════════════════
  GROUP B — CORNERS · stc1 service panel (existing slots)
══════════════════════════════════════════════════ -->
<div class="lstrip">
  <div><div class="lstrip__id">B1–B4 · Service Panel Corners</div><div class="lstrip__name">stc1__panel Motif Slots — Existing Classes</div></div>
  <div class="lstrip__note">.motif-corner · .motif-slash · .motif-cross · .motif-triangle already in unified-v2 · SVG files plug directly in</div>
</div>
<div class="dse" style="min-height:420px;position:relative;overflow:hidden;">
  <div class="dse-rail"></div>
  <div class="dse-grain"></div>
  <div style="position:absolute;inset:0;z-index:1;pointer-events:none;background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.018) 0px,rgba(255,255,255,0.018) 1px,transparent 1px,transparent 80px),repeating-linear-gradient(90deg,rgba(255,255,255,0.018) 0px,rgba(255,255,255,0.018) 1px,transparent 1px,transparent 80px);"></div>
  <!-- B1: .motif-corner — bottom right, 200px, 12% -->
  <svg style="position:absolute;bottom:0;right:0;width:200px;height:200px;opacity:0.12;z-index:2;pointer-events:none;" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="200,0 0,200 200,200" fill="#F7C520"/>
  </svg>
  <!-- B2: .motif-slash — top right, 160px, 8% -->
  <svg style="position:absolute;top:20px;right:60px;width:160px;height:160px;opacity:0.08;z-index:2;pointer-events:none;" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
    <polygon points="160,0 80,160 160,160" fill="#F7C520"/>
    <polygon points="120,0 40,160 80,160 160,0" fill="#F7C520"/>
  </svg>
  <!-- B3: .motif-cross — centred, 120px, 6% -->
  <svg style="position:absolute;top:50%;right:44%;transform:translateY(-50%);width:120px;height:120px;opacity:0.06;z-index:2;pointer-events:none;" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,0 120,0 120,120" fill="#F7C520"/>
    <polygon points="0,0 0,120 120,120" fill="#F7C520" opacity="0.5"/>
  </svg>
  <!-- B4: .motif-triangle — bottom left, 100px, 8% -->
  <svg style="position:absolute;bottom:40px;left:40px;width:100px;height:100px;opacity:0.08;z-index:2;pointer-events:none;" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,100 100,100 100,0" fill="#F7C520"/>
  </svg>

  <div style="position:relative;z-index:3;padding:clamp(48px,7vw,80px) clamp(32px,6vw,100px);display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;min-height:420px;">
    <div>
      <div class="eyebrow eyebrow-d"><span>01 · Excavation</span></div>
      <div style="font-family:var(--font-display);font-size:clamp(32px,4vw,56px);font-weight:700;line-height:1;letter-spacing:-0.02em;text-transform:uppercase;color:var(--white);margin-bottom:16px;">
        Site Prep &amp; <em style="font-style:normal;color:var(--yellow-core);">Earthworks</em>
      </div>
      <div class="yrule"></div>
      <div style="font-family:var(--font-industrial);font-size:14px;font-weight:300;line-height:1.80;color:rgba(255,255,255,0.58);max-width:40ch;margin-bottom:24px;">Commercial bulk excavation, cut and fill, and precision grading for demanding project timelines across Simcoe County.</div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:28px;">
        <div class="fbullet">Bulk Earthworks</div>
        <div class="fbullet">Precision Grading</div>
        <div class="fbullet">Rock Breaking &amp; Removal</div>
      </div>
      <div style="display:flex;gap:12px;">
        <button class="btn-p">Get a Quote <svg style="width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2;" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
      </div>
    </div>
    <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);padding:28px;">
      <div style="font-family:var(--font-mono);font-size:9px;letter-spacing:0.20em;text-transform:uppercase;color:rgba(255,255,255,0.25);margin-bottom:14px;">Active motif slots in this panel</div>
      <div style="display:flex;flex-direction:column;gap:9px;">
        <div style="font-family:var(--font-mono);font-size:10px;color:rgba(247,197,32,0.65);letter-spacing:0.10em;">.motif-corner   → B1 · bottom right · 200px · opacity 0.12</div>
        <div style="font-family:var(--font-mono);font-size:10px;color:rgba(247,197,32,0.65);letter-spacing:0.10em;">.motif-slash    → B2 · top right · 160px · opacity 0.08</div>
        <div style="font-family:var(--font-mono);font-size:10px;color:rgba(247,197,32,0.65);letter-spacing:0.10em;">.motif-cross    → B3 · centred · 120px · opacity 0.06</div>
        <div style="font-family:var(--font-mono);font-size:10px;color:rgba(247,197,32,0.65);letter-spacing:0.10em;">.motif-triangle → B4 · bottom left · 100px · opacity 0.08</div>
      </div>
      <div style="margin-top:20px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.07);">
        <div style="font-family:var(--font-mono);font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.18);">These slots already exist in unified-v2.<br>Drop SVG files into /public/svg/ and reference by class name.</div>
      </div>
    </div>
  </div>
</div>


<!-- B5 + Light card hover -->
<div class="lstrip">
  <div><div class="lstrip__id">B5 · Inverted Corner &nbsp;·&nbsp; B1 on Light Card</div><div class="lstrip__name">ab3 Chip Pattern · Light Card Hover</div></div>
  <div class="lstrip__note">B5 maps to the ab3__chip and ab3__corner-mark slots · light card hover: corner slides in from top-right</div>
</div>
<div class="ls">
  <div class="ls-c" style="padding:48px;display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;">
    <div>
      <span class="anno" style="display:block;margin-bottom:12px;">B5 · Inverted — ab3__chip / ab3__corner-mark slot</span>
      <div style="background:var(--charcoal-deep);padding:28px 24px 28px 28px;position:relative;overflow:hidden;border-left:3px solid var(--yellow-core);">
        <svg style="position:absolute;top:0;left:0;width:80px;height:80px;opacity:0.10;pointer-events:none;" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,0 120,0 0,120" fill="#F7C520"/>
        </svg>
        <div style="position:relative;z-index:1;">
          <div style="font-family:var(--font-mono);font-size:8px;font-weight:500;letter-spacing:0.20em;text-transform:uppercase;color:rgba(255,255,255,0.30);margin-bottom:6px;">Established</div>
          <div style="font-family:var(--font-display);font-size:28px;font-weight:700;color:var(--white);line-height:1;letter-spacing:-0.02em;">2009</div>
          <div style="font-family:var(--font-mono);font-size:8px;color:var(--yellow-core);letter-spacing:0.16em;text-transform:uppercase;margin-top:6px;">Barrie, Ontario</div>
        </div>
      </div>
    </div>
    <div>
      <span class="anno" style="display:block;margin-bottom:12px;">B1 · 45° on light card — hover to trigger corner</span>
      <div class="hcard">
        <div style="font-family:var(--font-mono);font-size:8px;font-weight:500;letter-spacing:0.20em;text-transform:uppercase;color:var(--text-400);margin-bottom:6px;">Licensed &amp; Insured</div>
        <div style="font-family:var(--font-display);font-size:18px;font-weight:700;text-transform:uppercase;letter-spacing:0.02em;color:var(--charcoal-deep);margin-bottom:8px;">WSIB Certified Operator</div>
        <div style="font-family:var(--font-body);font-size:13px;color:var(--text-400);line-height:1.7;">Full WSIB coverage, $5M liability insurance. All operators certified to provincial standards.</div>
      </div>
    </div>
  </div>
</div>


<!-- ══════════════════════════════════════════════════
  GROUP C — WATERMARKS
══════════════════════════════════════════════════ -->
<div class="lstrip">
  <div><div class="lstrip__id">Group C · Watermarks</div><div class="lstrip__name">C1 Light · C2 Layered Depth · C3 Parallax Animated</div></div>
  <div class="lstrip__note">Max opacity 0.08 · content must always read clearly above · C3 hero only · one per page</div>
</div>
<div class="g3">
  <div class="ls" style="min-height:220px;padding:40px 36px;display:flex;flex-direction:column;justify-content:center;">
    <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;" viewBox="0 0 500 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,220 0,80 420,0 500,24 500,220" fill="#1E1C1A" opacity="0.025"/>
    </svg>
    <div class="ls-c">
      <div class="eyebrow">About GLC</div>
      <div style="font-family:var(--font-display);font-size:22px;font-weight:700;text-transform:uppercase;letter-spacing:-0.01em;color:var(--charcoal-deep);margin-bottom:8px;">C1 · Light Section</div>
      <div style="font-family:var(--font-industrial);font-size:12px;font-weight:300;color:var(--text-400);line-height:1.8;">Angular shape at 2.5% opacity on white. Brand presence without noise. Barely perceptible.</div>
    </div>
    <div style="position:absolute;bottom:12px;right:14px;" class="anno">opacity: 0.025</div>
  </div>
  <div class="dse" style="min-height:220px;padding:40px 36px;display:flex;flex-direction:column;justify-content:center;">
    <div class="dse-grain"></div>
    <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1;" viewBox="0 0 500 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,220 0,100 500,30 500,220" fill="#F7C520" opacity="0.04"/>
      <polygon points="0,220 0,140 260,80 500,110 500,220" fill="#F7C520" opacity="0.03"/>
      <polygon points="360,220 160,120 500,60 500,220" fill="#F7C520" opacity="0.025"/>
    </svg>
    <div class="dse-c">
      <div class="eyebrow eyebrow-d"><span>Process</span></div>
      <div style="font-family:var(--font-display);font-size:22px;font-weight:700;text-transform:uppercase;letter-spacing:-0.01em;color:var(--white);margin-bottom:8px;">C2 · Three-Plane Depth</div>
      <div style="font-family:var(--font-industrial);font-size:12px;font-weight:300;color:rgba(255,255,255,0.50);line-height:1.8;">Three angular layers at 4 / 3 / 2.5% opacity. Creates atmosphere. Combined max ~10%.</div>
    </div>
    <div style="position:absolute;bottom:12px;right:14px;" class="anno anno-w">3 layers combined</div>
  </div>
  <div class="dse" style="min-height:220px;padding:40px 36px;display:flex;flex-direction:column;justify-content:center;">
    <div class="dse-grain"></div>
    <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1;" viewBox="0 0 500 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <polygon class="a1" points="0,220 0,90 500,20 500,220" fill="#F7C520" opacity="0.06"/>
      <polygon class="a2" points="0,220 130,120 500,50 500,220" fill="#2E2B28" opacity="0.09"/>
    </svg>
    <div class="dse-c">
      <div class="eyebrow eyebrow-d"><span>Hero Only · One Per Page</span></div>
      <div style="font-family:var(--font-display);font-size:22px;font-weight:700;text-transform:uppercase;letter-spacing:-0.01em;color:var(--white);margin-bottom:8px;">C3 · Parallax · Live</div>
      <div style="font-family:var(--font-industrial);font-size:12px;font-weight:300;color:rgba(255,255,255,0.50);line-height:1.8;">Two layers on 10s and 14s translateX cycles. Watch the sweep drift now.</div>
    </div>
    <div style="position:absolute;bottom:12px;right:14px;" class="anno anno-w">← watch layers drift →</div>
  </div>
</div>


<!-- ══════════════════════════════════════════════════
  GROUP D — MICRO UI
══════════════════════════════════════════════════ -->
<div class="lstrip">
  <div><div class="lstrip__id">Group D · Micro UI</div><div class="lstrip__name">D1 Clip · D2 Button · D3 Slice · D4 Slash · D5 Rule · D6 Split · D7 Animated</div></div>
  <div class="lstrip__note">Component-level motifs — all shown in actual unified-v2 component contexts</div>
</div>

<!-- D1 + D2 -->
<div class="ls">
  <div class="ls-c" style="padding:48px;display:grid;grid-template-columns:1fr 1fr;gap:48px;">
    <div>
      <span class="anno" style="display:block;margin-bottom:14px;">D1 · CSS clip-path on project photos</span>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        <div>
          <div style="height:150px;background:linear-gradient(140deg,#3D3935,#585653);clip-path:polygon(0 0,100% 0,100% 82%,90% 100%,0 100%);display:flex;align-items:center;justify-content:center;">
            <span style="font-family:var(--font-mono);font-size:8px;color:rgba(255,255,255,0.35);letter-spacing:0.16em;text-transform:uppercase;">Photo</span>
          </div>
          <div style="margin-top:6px;" class="anno">corner cut</div>
        </div>
        <div>
          <div style="height:150px;background:linear-gradient(140deg,#2E2B28,#3D3935);clip-path:polygon(0 0,100% 0,93% 100%,0 93%);display:flex;align-items:center;justify-content:center;">
            <span style="font-family:var(--font-mono);font-size:8px;color:rgba(255,255,255,0.35);letter-spacing:0.16em;text-transform:uppercase;">Photo</span>
          </div>
          <div style="margin-top:6px;" class="anno">diagonal shard</div>
        </div>
      </div>
    </div>
    <div>
      <span class="anno" style="display:block;margin-bottom:14px;">D2 · btn-primary edge accent · hover for sheen + lift + yellow shadow</span>
      <div style="background:var(--gray-100);padding:32px;display:flex;gap:14px;align-items:center;flex-wrap:wrap;">
        <button class="btn-p">Request a Quote <svg style="width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2;" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
        <button class="btn-g">View Services <svg style="width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2;" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
      </div>
    </div>
  </div>
</div>

<!-- D3 + D4 -->
<div class="g2">
  <div class="dse" style="min-height:130px;position:relative;overflow:hidden;">
    <div class="dse-grain"></div>
    <svg style="position:absolute;inset:0;width:100%;height:100%;z-index:1;pointer-events:none;" viewBox="0 0 700 130" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="700" height="130" fill="#1E1C1A"/>
      <polygon points="0,130 0,98 700,65 700,130" fill="#2E2B28"/>
      <polygon points="0,100 700,67 700,72 0,106" fill="#F7C520" opacity="0.55"/>
    </svg>
    <div class="dse-c" style="position:relative;z-index:3;padding:24px 32px;"><span class="anno anno-w">D3 · Sharp Slice · thin aggressive accent · max 1 per page · above CTA or hero only</span></div>
  </div>
  <div class="ls" style="padding:32px 36px;display:flex;gap:0;align-items:stretch;min-height:130px;">
    <div style="width:14px;flex-shrink:0;background:var(--gray-100);position:relative;margin-right:22px;">
      <div style="position:absolute;inset:0;background:var(--yellow-core);clip-path:polygon(0 0,14px 7px,14px 100%,0 100%);"></div>
    </div>
    <div class="ls-c" style="display:flex;flex-direction:column;justify-content:center;">
      <div style="font-family:var(--font-display);font-size:34px;font-weight:700;color:var(--charcoal-deep);letter-spacing:-0.04em;line-height:1;">15<span style="color:var(--yellow-core);">+</span></div>
      <div style="font-family:var(--font-industrial);font-size:10px;font-weight:400;letter-spacing:0.18em;text-transform:uppercase;color:var(--text-400);margin-top:4px;">Years Commercial</div>
      <div style="margin-top:10px;" class="anno">D4 · Block + Slash · stat panels · proc3 step numbers</div>
    </div>
  </div>
</div>

<!-- D5 + D6 -->
<div class="g2">
  <div class="ls" style="padding:36px 44px;min-height:140px;display:flex;flex-direction:column;justify-content:center;">
    <div class="ls-c">
      <span class="anno" style="display:block;margin-bottom:14px;">D5 · Minimal line angle — section heading underline</span>
      <div style="font-family:var(--font-display);font-size:30px;font-weight:700;text-transform:uppercase;letter-spacing:-0.02em;line-height:1;color:var(--charcoal-deep);margin-bottom:6px;">Why GLC</div>
      <svg viewBox="0 0 280 3" preserveAspectRatio="none" style="width:180px;height:3px;display:block;margin-bottom:12px;">
        <polygon points="0,3 0,1.5 280,0 280,3" fill="#F7C520"/>
      </svg>
      <div style="font-family:var(--font-body);font-size:13px;color:var(--text-400);line-height:1.7;">Angled rule replaces a flat border — directional energy without a graphic element.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 14px 1fr;min-height:140px;overflow:hidden;">
    <div style="background:var(--charcoal-deep);padding:28px 24px;display:flex;align-items:center;">
      <div style="font-family:var(--font-mono);font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.30);">Left — DSE<br>proc3 / layout seam</div>
    </div>
    <div style="background:var(--charcoal-mid);position:relative;overflow:hidden;">
      <div style="position:absolute;inset:0;background:var(--yellow-core);clip-path:polygon(0 0,14px 10px,14px 100%,0 100%);"></div>
    </div>
    <div class="ls" style="padding:28px 24px;display:flex;align-items:center;">
      <div class="ls-c">
        <div style="font-family:var(--font-mono);font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:var(--text-400);">Right — white<br>D6 · Split seam divider</div>
      </div>
    </div>
  </div>
</div>

<!-- D7: Animated sweep -->
<div class="dse" style="min-height:140px;position:relative;overflow:hidden;display:flex;align-items:center;padding:36px 60px;">
  <div class="dse-rail"></div>
  <div class="dse-grain"></div>
  <svg style="position:absolute;inset:0;width:100%;height:100%;z-index:1;pointer-events:none;" viewBox="0 0 1400 140" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <polygon class="a1" points="0,140 0,60 1400,8 1400,140" fill="#F7C520" opacity="0.06"/>
    <polygon class="a2" points="0,140 190,90 1400,28 1400,140" fill="#2E2B28" opacity="0.09"/>
  </svg>
  <div class="dse-c">
    <div style="font-family:var(--font-display);font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:var(--white);margin-bottom:5px;">D7 · Animated SVG Layer — hero sections only · one instance per page</div>
    <div style="font-family:var(--font-industrial);font-size:13px;font-weight:300;color:rgba(255,255,255,0.50);">Two polygons on translateX keyframes · 10s and 14s cycles · watch the sweep drift now</div>
  </div>
  <div style="position:absolute;bottom:12px;right:48px;" class="anno anno-w">← layers drifting in opposite directions →</div>
</div>


<!-- ══════════════════════════════════════════════════
  FULL PAGE FLOW — compressed integration check
══════════════════════════════════════════════════ -->
<div class="lstrip">
  <div><div class="lstrip__id">Integration Preview</div><div class="lstrip__name">Hero → A3 Divider → Light Section → A3 → DSE Stats</div></div>
  <div class="lstrip__note">Compressed page flow — confirm section transitions and motif sequencing feel correct</div>
</div>

<div class="dse" style="min-height:200px;display:flex;align-items:flex-end;padding:36px 64px 32px;">
  <div class="dse-rail"></div>
  <div class="dse-grain"></div>
  <svg style="position:absolute;inset:0;width:100%;height:100%;z-index:1;" viewBox="0 0 1400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <polygon class="a1" points="0,200 0,100 800,28 1400,60 1400,200" fill="#2E2B28" opacity="0.7"/>
    <polygon class="a1" points="0,103 0,128 900,48 1400,65 1400,60 800,28" fill="#F7C520" opacity="0.80"/>
    <polygon class="a2" points="0,200 0,145 500,110 1100,135 1400,105 1400,200" fill="#1E1C1A" opacity="0.6"/>
    <polygon points="1400,0 1160,200 1400,200" fill="#F7C520" opacity="0.10"/>
  </svg>
  <div class="dse-c">
    <div style="font-family:var(--font-display);font-size:clamp(28px,4vw,52px);font-weight:700;text-transform:uppercase;letter-spacing:-0.02em;line-height:1;color:var(--white);">
      Ground Level <em style="font-style:normal;color:var(--yellow-core);">Contracting</em>
    </div>
  </div>
</div>
<div style="line-height:0;margin-bottom:-1px;">
  <svg viewBox="0 0 1400 55" preserveAspectRatio="none" style="width:100%;height:55px;display:block;" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,55 0,25 1400,0 1400,55" fill="#FFFFFF"/>
    <polygon points="0,27 1400,2 1400,6 0,31" fill="#F7C520" opacity="0.40"/>
  </svg>
</div>
<div class="ls" style="padding:40px 64px;">
  <div class="ls-c" style="display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;">
    <div>
      <div class="eyebrow">About GLC</div>
      <div style="font-family:var(--font-display);font-size:clamp(24px,3vw,40px);font-weight:700;text-transform:uppercase;letter-spacing:-0.02em;line-height:1;color:var(--charcoal-deep);margin-bottom:8px;">Commercial-Only. <em style="font-style:normal;color:var(--yellow-core);">Always.</em></div>
      <div class="yrule"></div>
      <div style="font-family:var(--font-industrial);font-size:14px;font-weight:300;line-height:1.82;color:var(--text-400);">Ground Level Contracting serves project managers and site supervisors across Simcoe County.</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;">
      <div class="hcard" style="padding:20px;">
        <div style="font-family:var(--font-mono);font-size:8px;letter-spacing:0.18em;text-transform:uppercase;color:var(--text-400);margin-bottom:4px;">Projects</div>
        <div style="font-family:var(--font-display);font-size:28px;font-weight:700;color:var(--charcoal-deep);line-height:1;">500<span style="color:var(--yellow-core);">+</span></div>
      </div>
      <div class="hcard" style="padding:20px;">
        <div style="font-family:var(--font-mono);font-size:8px;letter-spacing:0.18em;text-transform:uppercase;color:var(--text-400);margin-bottom:4px;">Years</div>
        <div style="font-family:var(--font-display);font-size:28px;font-weight:700;color:var(--charcoal-deep);line-height:1;">15<span style="color:var(--yellow-core);">+</span></div>
      </div>
    </div>
  </div>
</div>
<div style="line-height:0;margin-bottom:-1px;">
  <svg viewBox="0 0 1400 50" preserveAspectRatio="none" style="width:100%;height:50px;display:block;" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,50 0,22 1400,0 1400,50" fill="#1E1C1A"/>
    <polygon points="0,24 1400,2 1400,6 0,28" fill="#F7C520" opacity="0.40"/>
  </svg>
</div>
<div class="dse" style="padding:0;overflow:hidden;">
  <div class="dse-grain"></div>
  <div style="height:3px;background:linear-gradient(90deg,var(--yellow-core) 0%,rgba(247,197,32,0.12) 45%,transparent 100%);position:relative;z-index:1;"></div>
  <div style="display:flex;align-items:stretch;position:relative;z-index:1;">
    <div style="width:48px;flex-shrink:0;display:flex;align-items:center;justify-content:center;border-right:1px solid rgba(255,255,255,0.06);">
      <span style="font-family:var(--font-body);font-size:9px;font-weight:800;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.20);writing-mode:vertical-rl;transform:rotate(180deg);">Performance</span>
    </div>
    <div style="display:flex;flex:1;">
      <div style="flex:1;padding:44px 0;border-right:1px solid rgba(255,255,255,0.06);text-align:center;">
        <div style="font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:700;line-height:1;letter-spacing:-0.04em;color:var(--white);">500<span style="color:var(--yellow-core);">+</span></div>
        <div style="font-family:var(--font-industrial);font-size:10px;font-weight:400;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.35);margin-top:8px;">Projects Completed</div>
      </div>
      <div style="flex:1;padding:44px 0;border-right:1px solid rgba(255,255,255,0.06);text-align:center;">
        <div style="font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:700;line-height:1;letter-spacing:-0.04em;color:var(--white);">15<span style="color:var(--yellow-core);">+</span></div>
        <div style="font-family:var(--font-industrial);font-size:10px;font-weight:400;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.35);margin-top:8px;">Years in Operation</div>
      </div>
      <div style="flex:1;padding:44px 0;text-align:center;">
        <div style="font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:700;line-height:1;letter-spacing:-0.04em;color:var(--white);">6<span style="color:var(--yellow-core);">+</span></div>
        <div style="font-family:var(--font-industrial);font-size:10px;font-weight:400;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.35);margin-top:8px;">Service Areas</div>
      </div>
    </div>
  </div>
</div>


<!-- APPROVAL FOOTER -->
<div style="background:var(--charcoal-deep);border-top:3px solid var(--yellow-core);padding:32px 48px;display:flex;align-items:flex-start;justify-content:space-between;gap:40px;">
  <div style="max-width:720px;">
    <div style="font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--white);margin-bottom:10px;">For Approval</div>
    <div style="font-family:var(--font-industrial);font-size:13px;font-weight:300;color:rgba(255,255,255,0.55);line-height:1.80;">
      All 21 motifs rendered against actual <strong style="color:rgba(255,255,255,0.80);font-weight:500;">glc-unified-v2</strong> tokens, fonts, grids, and section patterns.
      Corner slots B1–B4 map to existing <code style="font-family:var(--font-mono);font-size:11px;color:var(--yellow-core);">.motif-corner / .motif-slash / .motif-cross / .motif-triangle</code> classes already in <code style="font-family:var(--font-mono);font-size:11px;color:var(--yellow-core);">stc1__panel</code>.
      Once approved: SVG files go to <code style="font-family:var(--font-mono);font-size:11px;color:var(--yellow-core);">/public/svg/</code>, CSS patterns slot into existing stylesheet.
    </div>
  </div>
  <div style="text-align:right;flex-shrink:0;padding-top:2px;">
    <div style="font-family:var(--font-mono);font-size:8px;font-weight:500;letter-spacing:0.22em;text-transform:uppercase;color:var(--yellow-core);margin-bottom:4px;">GLC Motif System</div>
    <div style="font-family:var(--font-mono);font-size:8px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.25);">v1.0 · Built on unified-v2</div>
  </div>
</div>

```

## 4. JavaScript — unified preview interactions

Inline script from the first HTML document (custom cursor, scroll reveal, header scroll class, smooth anchor links). Omit in production builds that do not use `cursor: none` or these classes.

```js
(function() {
  'use strict';

  /* ── CURSOR ── */
  const dot  = document.getElementById('dot');
  const ring = document.getElementById('ring');
  let mx=0, my=0, rx=0, ry=0;

  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });

  // Standard hover
  document.querySelectorAll('a, button, .stat-cell, .why3__row, .coverage__item, .ab3__cred').forEach(el => {
    el.addEventListener('mouseenter', () => { dot.classList.add('on'); ring.classList.add('on'); dot.classList.remove('bar'); });
    el.addEventListener('mouseleave', () => { dot.classList.remove('on'); ring.classList.remove('on'); });
  });

  // CTA bars get big dark dot
  ['hero-bar','cta-bar'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('mouseenter', () => { dot.classList.add('bar'); ring.classList.add('on'); });
      el.addEventListener('mouseleave', () => { dot.classList.remove('bar'); ring.classList.remove('on'); });
    }
  });

  (function loop() {
    dot.style.left = mx+'px'; dot.style.top = my+'px';
    rx += (mx-rx)*0.09; ry += (my-ry)*0.09;
    ring.style.left = rx+'px'; ring.style.top = ry+'px';
    requestAnimationFrame(loop);
  })();


  /* ── HERO PARALLAX (image follows mouse) ── */
  const heroEl   = document.getElementById('hero');
  const heroWrap = document.getElementById('hero-img-wrap');
  let px=0, py=0, nx=0, ny=0;
  if (heroEl && heroWrap) {
    heroEl.addEventListener('mousemove', e => {
      const r = heroEl.getBoundingClientRect();
      nx = ((e.clientX-r.left)/r.width  - 0.5) * -18;
      ny = ((e.clientY-r.top) /r.height - 0.5) * -10;
    });
    heroEl.addEventListener('mouseleave', () => { nx=0; ny=0; });
    (function parallax() {
      px += (nx-px)*0.055; py += (ny-py)*0.055;
      heroWrap.style.transform = 'translate('+px+'px,'+py+'px)';
      requestAnimationFrame(parallax);
    })();
  }


  /* ── QUOTE BAND SCROLL PARALLAX ── */
  const quoteBg = document.getElementById('quote-bg');
  function quoteParallax() {
    if (!quoteBg) return;
    const rect = quoteBg.parentElement.getBoundingClientRect();
    const diff = (rect.top + rect.height/2 - window.innerHeight/2) / window.innerHeight;
    quoteBg.style.transform = 'translateY('+(diff*44)+'px)';
  }
  window.addEventListener('scroll', quoteParallax, {passive:true});


  /* ── SCROLL REVEAL ── */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObs.observe(el));


  /* ── CTA FINAL: trigger scroll-based entrance animations ── */
  const ctaFinal = document.querySelector('.cta-final');
  if (ctaFinal) {
    const ctaObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { ctaFinal.classList.add('in-view'); ctaObs.unobserve(ctaFinal); }
      });
    }, { threshold: 0.15 });
    ctaObs.observe(ctaFinal);
  }


  /* ── COUNT-UP STATS (ST3) ── */
  function animateCount(el, target, duration) {
    const suffix = el.querySelector('span') ? el.querySelector('span').outerHTML : '';
    let start = null;
    const step = ts => {
      if (!start) start = ts;
      const progress = Math.min((ts-start)/duration, 1);
      const eased = 1 - Math.pow(1-progress, 3);
      el.innerHTML = Math.floor(eased*target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.innerHTML = target + suffix;
    };
    requestAnimationFrame(step);
  }
  const statNums = document.querySelectorAll('.stat-cell__num[data-target]');
  const countObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCount(e.target, parseInt(e.target.dataset.target), 1800);
        countObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => countObs.observe(el));


  /* ── TAB CONTAINER (STC1) ── */
  const tabs   = document.querySelectorAll('.stc1__tab');
  const panels = document.querySelectorAll('.stc1__panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.dataset.tab);
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      tab.setAttribute('aria-selected','true');
      if (panels[idx]) panels[idx].classList.add('active');
    });
  });


  /* ── HEADER SCROLL ── */
  const header = document.getElementById('gl-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  }, {passive:true});


  /* ── SMOOTH ANCHOR SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); }
    });
  });

})();
```

---

## 5. JSON — Approved Sections registry

Parsed from the first trailing JSON object in the source file.

```json
{
  "_meta": {
    "title": "Approved Sections",
    "description": "Master reference of section, component, and element DNA approved through chat-driven registry work. Use when building similar sections or components; canonical living registry remains section-dna/catchall.json.",
    "sourceFile": "section-dna/catchall.json",
    "includesFromChat": [
      "About (#about / AboutSection)",
      "Hero v2 — 2026-04-05: full DNA merge into hero-v2-flagship-asymmetric (layer stack z0–grain, Framer variants, HeroProps/lede split, parallax springs, chips/CTAs/service bar, responsive 1024/768/480, a11y, assets, mounted gate, hub overrides note)",
      "Parallax type band, excavation parallax CTA, mega services panel, primary nav links",
      "Services grid, Stats ST3, Why Why3, Process Proc3, Coverage, Testimonials Tst3, CTA band Cta3, Site footer",
      "Commercial snow P14 mid-lower CTA (glc-snow-midlower-cta / SnowRevealSection)"
    ],
    "sectionCount": 15,
    "sectionIds": [
      "stats-st3-dark-editorial",
      "about-ab3-editorial-split",
      "hero-v2-flagship-asymmetric",
      "gl-parallax-type-band-shared",
      "exc-hub-parallax-cta-band",
      "header-mega-services-panel-shell",
      "header-primary-nav-links-cluster",
      "services-home-grid-cards",
      "why-why3-editorial-manifesto",
      "process-proc3-split-timeline",
      "coverage-dark-territory-band",
      "testimonials-tst3-editorial",
      "cta-band-cta3-charcoal-close",
      "footer-site-wide-gray-rail",
      "glc-snow-p14-midlower-cta"
    ],
    "lastSynced": "2026-04-05",
    "syncNote": "Regenerate from catchall: copy sections[], globalDnaDraft, conflictsToEliminate, or run a small script to merge."
  },
  "globalDnaDraft": {
    "description": "During audit, promote repeated values from sections[] into here, then into section-dna.json.",
    "brandTokens": [
      "--charcoal",
      "--charcoal-deep",
      "--yellow-core",
      "--gold",
      "--white",
      "--off-white",
      "--text-500",
      "--text-400",
      "--gray-200",
      "--gray-100",
      "--font-display",
      "--font-body",
      "--section-v",
      "--section-v-sm",
      "--ease-expo",
      "--container-max"
    ],
    "motion": {
      "defaultEase": "cubic-bezier(0.22, 1, 0.36, 1)",
      "token": "--ease-expo"
    },
    "interactionPatterns": [
      "Scroll reveal: .reveal opacity 0 + translateY(28px) → .reveal.visible; delays reveal--delay-1..4; prefers-reduced-motion: show final state",
      "Hover accent bars: often scaleX(0)→1 with transform-origin left and --ease-expo"
    ],
    "layoutRhythmNotes": [
      "Section vertical padding often var(--section-v) desktop, var(--section-v-sm) mobile",
      "Prefer section-scoped class prefixes (e.g. st3__, ab3__) over bare global utilities for section internals"
    ]
  },
  "conflictsToEliminate": [
    {
      "id": "stats-v3-vs-v2-cascade",
      "severity": "high",
      "summary": "Two #stats themes in glc-base.css; later block overrides background and .stat-cell for white v2 while React uses st3__ dark band.",
      "searchInCss": [
        "STATS — v3 Dark Editorial",
        "STATS — Display-Scale Typography (v2)"
      ],
      "selectors": [
        "#stats",
        ".stat-cell"
      ],
      "resolutionHint": "Scope one theme (e.g. body class or @layer) or delete/merge duplicate #stats; avoid two definitions of the same shared class."
    },
    {
      "id": "about-ab3-plus-v2-overrides",
      "severity": "medium",
      "summary": "AB3 uses ab3__* + #about; later FULL-PAGE REDESIGN adds #about padding and #about::before hairlines. Works together today but v2 also defines unused .about__* classes.",
      "searchInCss": [
        "ABOUT — v3 Editorial Split",
        "ABOUT — Editorial White (v2)",
        "FULL-PAGE REDESIGN OVERRIDES"
      ],
      "selectors": [
        "#about",
        "#about::before"
      ],
      "resolutionHint": "Keep one documented owner for #about; remove dead .about__* if no component uses it."
    },
    {
      "id": "why-process-testimonials-cta-v2-cascade",
      "severity": "medium",
      "summary": "Later FULL-PAGE REDESIGN blocks redefine #why, #process, #testimonials, #cta-band (v2 layouts: why v2 rows, process-r2__, test-r2__, cta-r2__ + extra #cta-band::after watermark) while App Router uses WhySection why3__, ProcessSection proc3__, TestimonialsSection tst3__, CtaBandSection cta3__.",
      "searchInCss": [
        "WHY — Typographic Reason Rows (v2)",
        "PROCESS — Editorial 2×2 Staggered Steps (v2)",
        "TESTIMONIALS — Featured Editorial Layout (v2)",
        "CTA BAND — Charcoal Drama (v2)"
      ],
      "selectors": [
        "#why",
        "#process",
        "#testimonials",
        "#cta-band"
      ],
      "resolutionHint": "Scope v2 rules to legacy static pages or remove if unused; ensure one winning #id block per section for React."
    }
  ],
  "sections": [
    {
      "id": "stats-st3-dark-editorial",
      "status": "candidate",
      "displayName": "Stats — ST3 Dark Editorial Counter Band",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "Full-bleed charcoal stats strip: yellow top rail, vertical Performance label, four animated counter cells with blueprint grid texture",
        "reactComponent": "glc-site/src/components/sections/stats-section.tsx",
        "sectionRenderer": "section-renderer type \"stats\"",
        "domPath": "main#main-content > section#stats",
        "relatedComponents": [
          "glc-site/src/components/ui/stat-cell-animated.tsx (Reveal + count-up + IntersectionObserver threshold 0.5)",
          "glc-site/src/components/ui/reveal.tsx"
        ],
        "sectionElementId": "stats",
        "aria": "section aria-label=\"Company statistics\"",
        "classPrefix": "st3__ / .stat-cell / .stat-cell__*",
        "cssAnchorComments": [
          "STATS — v3 Dark Editorial Counter Band",
          "STATS — Display-Scale Typography (v2)"
        ]
      },
      "referenceFiles": {
        "specMarkdown": "MY MASTER DESIGN SECTIONS/DESIGN-SPEC-stats-st3.md",
        "staticHtml": "MY MASTER DESIGN SECTIONS/stats-st3-section-master.html",
        "contentExample": "glc-site/src/content/pages/home.json type stats",
        "propsType": "glc-site/src/content/types.ts → StatsProps / StatCellProps"
      },
      "visualDna": {
        "ground": {
          "sectionRoot": "#stats background var(--charcoal-deep); position relative; overflow hidden",
          "blueprintTexture": "#stats::before absolute inset; crossed repeating-linear-gradient 80px step rgba(255,255,255,0.012); pointer-events none"
        },
        "structureAndSpacing": {
          "topRail": ".st3__top-rail height 3px; z-index 2; linear-gradient 90deg var(--yellow-core) → transparent",
          "innerFlex": ".st3__inner display flex align stretch; z-index 1",
          "sideLabelColumn": ".st3__side-label width 56px flex-shrink 0; border-right 1px rgba(255,255,255,0.06); padding 0 20px; centers vertical text",
          "sideLabelType": "span: body 9px weight 800 uppercase letter-spacing 0.22em; color rgba(255,255,255,0.2); writing-mode vertical-rl; rotate 180deg",
          "grid": ".st3__grid flex 1; grid 4×1 equal columns; borders between cells"
        },
        "statCell": {
          "container": ".stat-cell padding 56×32 default; text-align center; border-right 1px rgba(255,255,255,0.06); last child no right border",
          "hoverSurface": "background transition to rgba(255,255,255,0.025) on hover",
          "bottomAccent": "::after full width bar height 2px yellow-core; scaleX(0) → scaleX(1) on hover; transform-origin left; 0.5s --ease-expo",
          "hierarchy": "stack: .stat-cell__num (block) → .stat-cell__label (block, margin-top 12px) → .stat-cell__sub (block, margin-top 5px)"
        },
        "typography": {
          "numbers": {
            "class": "stat-cell__num",
            "font": "--font-display",
            "clamp": "clamp(52px, 5vw, 80px)",
            "weight": 700,
            "color": "white",
            "suffix": "second span yellow-core (inline style in stat-cell-animated + !important rule in CSS for last-child)"
          },
          "label": {
            "class": "stat-cell__label",
            "sizePx": 10,
            "weight": 800,
            "uppercase": true,
            "letterSpacing": "0.18em",
            "color": "rgba(255,255,255,0.45)"
          },
          "sub": {
            "class": "stat-cell__sub",
            "sizePx": 12,
            "weight": 500,
            "color": "rgba(255,255,255,0.25)"
          }
        },
        "motion": {
          "reveal": "Each cell wrapped Reveal with stagger delays reveal--delay-1..3 on cells 2–4",
          "countUp": "1800ms ease-out cubic client animation; skips if prefers-reduced-motion",
          "cellHover": "background 0.3s --ease-expo",
          "barRevealMs": 500
        },
        "responsive": {
          "640": "cell padding 40×16; stat-cell__num clamp(44px, 11vw, 60px)",
          "1024": "hide .st3__side-label; grid 2×2; cell padding 48×24"
        },
        "balance": "Symmetric four-column band; side label adds industrial asymmetry on desktop only; equal visual weight per cell via centered type",
        "contentShape": {
          "propsContract": "cells: StatCellProps[] target, afterNumber, format?, label, sub",
          "sideLabelText": "Hardcoded \"Performance\" in stats-section.tsx"
        },
        "cascadeWarning": "Later #stats v2 block (white ground) overrides same #stats and .stat-cell — see conflictsToEliminate stats-v3-vs-v2-cascade"
      },
      "layersBottomToTop": [
        "#stats var(--charcoal-deep) fill",
        "#stats::before blueprint grid texture",
        ".st3__top-rail (z2)",
        ".st3__inner (z1)",
        ".st3__side-label + span",
        ".st3__grid",
        "Reveal.stat-cell: .stat-cell__num + .stat-cell__label + .stat-cell__sub",
        ".stat-cell::after hover bar"
      ],
      "auditNotes": "DevTools may show SegmentViewNode around section; DOM matches StatsSection. User path div.st3__inner > div.st3__grid > div.reveal.stat-cell."
    },
    {
      "id": "about-ab3-editorial-split",
      "status": "candidate",
      "displayName": "About — AB3 Editorial Split",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "Homepage About band — editorial copy column + clipped photo panel (AB3)",
        "reactComponent": "glc-site/src/components/sections/about-section.tsx",
        "sectionRenderer": "glc-site/src/components/sections/section-renderer.tsx (section.type === \"about\" → AboutSection)",
        "domPath": "main#main-content > section#about",
        "relatedComponents": [
          "glc-site/src/components/ui/reveal.tsx",
          "glc-site/src/components/ui/icon-arrow.tsx",
          "framer-motion on .ab3__chip (whileInView)"
        ],
        "sectionElementId": "about",
        "aria": "section#about aria-labelledby=\"about-heading\" (h2#about-heading)",
        "classPrefix": "ab3__",
        "cssAnchorComments": [
          "ABOUT — v3 Editorial Split",
          "ABOUT — Editorial White (v2)",
          "FULL-PAGE REDESIGN OVERRIDES"
        ]
      },
      "referenceFiles": {
        "specMarkdown": "MY MASTER DESIGN SECTIONS/DESIGN-SPEC-about-ab3.md",
        "staticHtml": "MY MASTER DESIGN SECTIONS/about-ab3-section-master.html",
        "contentExample": "glc-site/src/content/pages/home.json (single about block today)",
        "propsType": "glc-site/src/content/types.ts → AboutProps"
      },
      "visualDna": {
        "ground": {
          "sectionBackground": "var(--white)",
          "sectionPadding": "0 0 calc(var(--section-v) + 16px) from FULL-PAGE REDESIGN #about override",
          "hairlineTexture": "#about::before repeating-linear-gradient horizontal lines 64px step rgba(0,0,0,0.022), z-index 0"
        },
        "watermark": {
          "type": "text",
          "class": "ab3__wm",
          "content": "Literal \"GLC\" in TSX (not content-driven)",
          "font": "--font-display",
          "opacity": 0.028,
          "position": "absolute right -0.06em vertical center, z-index 0"
        },
        "layout": {
          "grid": "55fr 45fr; min-height 680px; ≤1024px stacks to 1 column",
          "copyColumn": "flex column gap 28px; padding var(--section-v) + horizontal clamps; max-width 660px; justify center",
          "copyYellowPin": "3px × 60px top-left on .ab3__copy::before",
          "mediaClipPath": "polygon(28px 0, 100% 0, 100% 100%, 0 100%)",
          "mediaClipPathTablet": "polygon(0 20px, 100% 0, 100% 100%, 0 100%); min-height 420px",
          "credentialsGrid": "2×2 gap 12px; border-top 1px var(--gray-200); padding-top 24px; ≤768px 1 column",
          "responsiveNote": "≤768px stacks to one column (copy then media); ~640px viewport matches tall mobile layout (DevTools width ~642px)."
        },
        "typography": {
          "eyebrow": {
            "class": "eyebrow",
            "sharedPrimitive": true
          },
          "sincePill": {
            "class": "ab3__since",
            "sizePx": 11,
            "weight": 700,
            "border": "1px var(--gray-200)",
            "pairsWith": "props.mediaStat (duplicated visually in .ab3__chip)"
          },
          "heading": {
            "class": "ab3__heading",
            "font": "--font-display",
            "clamp": "34px, 3.8vw, 52px",
            "uppercase": true,
            "accentClass": "ab3__heading-em",
            "accentColor": "--yellow-core"
          },
          "headingRule": {
            "class": "ab3__heading-rule",
            "size": "48×3px",
            "color": "--charcoal-deep"
          },
          "body": {
            "class": "ab3__body",
            "sizePx": 15,
            "lineHeight": 1.82,
            "maxCh": 46,
            "color": "--text-500"
          },
          "credentials": {
            "idx": {
              "class": "ab3__cred-idx",
              "font": "--font-display",
              "sizePx": 13,
              "color": "--yellow-core"
            },
            "title": {
              "class": "ab3__cred-title",
              "sizePx": 11,
              "weight": 800,
              "uppercase": true
            },
            "sub": {
              "class": "ab3__cred-sub",
              "sizePx": 11,
              "color": "--text-400"
            }
          }
        },
        "tokensUsed": [
          "--white",
          "--charcoal-deep",
          "--yellow-core",
          "--yellow-tint",
          "--gray-100",
          "--gray-200",
          "--text-400",
          "--text-500",
          "--font-display",
          "--font-body",
          "--section-v",
          "--section-v-sm",
          "--ease-expo (chip transition ease array matches)"
        ],
        "mediaPanel": {
          "surface": "var(--charcoal-deep) + clip-path",
          "texture": ".ab3__media::before radial warm glow + 40px horizontal lines",
          "photo": ".ab3__photo absolute inset; current TSX uses CSS gradient placeholder only (no background-image)",
          "badge": ".ab3__badge yellow polygon clip top-left; copy from props.badgeText",
          "chip": ".ab3__chip bottom-right glass panel; border-left 3px yellow; backdrop-filter blur; props.mediaStat",
          "cornerMark": ".ab3__corner-mark 40px yellow L rotated 180deg bottom-left"
        },
        "cta": {
          "markup": "a.btn-primary + IconArrow inside last Reveal",
          "styling": "Site-wide .btn-primary in glc-base.css (not ab3-scoped)"
        },
        "motion": {
          "reveal": "Reveal wrappers on copy stack; delay classes reveal--delay-1 through reveal--delay-4",
          "chipFramer": {
            "duration": 0.8,
            "delay": 0.5,
            "ease": [
              0.22,
              1,
              0.36,
              1
            ],
            "viewport": {
              "once": true,
              "amount": 0.4
            }
          },
          "credentialHoverMs": 220,
          "credentialHover": "border-bottom yellow + background var(--yellow-tint)"
        },
        "contentShape": {
          "summary": "Single-column editorial story: eyebrow + experience pill → split heading → body → 4 credentials → CTA; right panel is decorative photo stack with badge, stat chip, corner mark.",
          "propsContract": "AboutProps: eyebrow, headingBefore|headingAccent|headingAfter, body, credentials[{title,sub}], cta{label,href}, mediaStat{value,label}, badgeText",
          "note": "Visible strings (e.g. eyebrow/headline) come from page JSON; DevTools text may differ from home.json if content was edited locally or on another branch."
        }
      },
      "layersBottomToTop": [
        "#about background var(--white)",
        "#about::before hairline grid z0",
        ".ab3__wm ghost text z0",
        ".ab3__layout z1 grid",
        ".ab3__copy column: ::before yellow pin",
        ".ab3__top-row .eyebrow + .ab3__since",
        ".ab3__heading-wrap h2#about-heading + .ab3__heading-rule",
        ".ab3__body",
        ".ab3__creds .ab3__cred cells",
        "a.btn-primary + IconArrow",
        ".ab3__media ::before texture z0",
        ".ab3__photo z0",
        ".ab3__badge z2",
        ".ab3__chip z2",
        ".ab3__corner-mark z2"
      ],
      "optionalMotifAssets": [
        "MY MASTER DESIGN SECTIONS/motifs/GLC-motif-01-corner-traced.svg",
        "MY MASTER DESIGN SECTIONS/motifs/GLC-motif-03-divider-traced.svg"
      ],
      "auditNotes": "Registry target: section AboutSection at section#about. Capture: two-column AB3 layout, override hairlines, GLC watermark, typography ladder, credentials grid interaction, framer chip, media clip stack, and AboutProps content shape. Goal: one documented DNA object for this layout; CSS v2 .about__* block remains unused by React — see conflictsToEliminate id about-ab3-plus-v2-overrides."
    },
    {
      "id": "hero-v2-flagship-asymmetric",
      "status": "candidate",
      "displayName": "Hero — V2 flagship (layered planes + parallax)",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "Full-viewport hero with deep BG parallax, blueprint overlay, diagonal yellow stripe, editorial headline column, clipped photo panel, glass stat/coverage chips, grain overlay, bottom service rail",
        "isClientComponent": true,
        "reactComponent": "glc-site/src/components/sections/hero-section.tsx",
        "sectionRenderer": "glc-site/src/components/sections/section-renderer.tsx (type \"hero\")",
        "domPath": "main#main-content > section#hero.hero-v2",
        "sectionElementId": "hero",
        "aria": "section aria-label=\"Hero\"; h1 aria-label concatenates title.line1+line2+line3; decorative layers aria-hidden where applied",
        "classPrefix": "hero-v2__ (plus global btn-primary, btn-hero-glass; service bar SVGs still use class hero__service-icon inside HeroServiceIcon)",
        "dependencies": [
          "framer-motion (scroll parallax, variants, CTA hover/tap)",
          "next/image (photo panel only)",
          "native img for ghost logo (SSR/CSR parity comment in TSX)"
        ],
        "relatedComponents": [
          "framer-motion: hero-v2__bg-plane (y spring), hero-v2__photo-panel (PHOTO_VARIANT + y spring), hero-v2__content (textY spring), LINE_VARIANT on each headline line, FADE_UP on subhead/lede/CTA row, scroll mask on lede block, CHIP_VARIANT on chips, TILE_VARIANT on service tiles",
          "glc-site/src/components/sections/service-card-icon.tsx → HeroServiceIcon (inline SVGs; default slug → ServiceCardIcon placeholder)",
          "glc-site/src/components/ui/smart-link.tsx (secondary CTA)",
          "glc-site/src/components/ui/icon-arrow.tsx (primary CTA)"
        ],
        "cssAnchorComments": [
          "HERO V2 — Asymmetric flagship hero",
          "HERO V2 — RESPONSIVE"
        ],
        "stylesCanonical": "glc-site/src/styles/glc-base.css — block HERO V2 (~L4519–5290): section root, grain ::after, bg-plane, scrims, structure-plane, diag-stripe, canvas, photo-panel, chips, content column, typography, lede, CTAs, service bar, breakpoints 1024/768/480"
      },
      "referenceFiles": {
        "contentExample": "glc-site/src/content/pages/home.json → sections[] item type \"hero\"",
        "propsType": "glc-site/src/content/types.ts → HeroProps",
        "hubOverrideExample": "glc-site/src/app/services/excavation-site-preparation/page.tsx mutates hero props (eyebrow, title, subheadline, lede, CTAs, coverage, parallaxBackgroundImage)"
      },
      "visualDna": {
        "authority": {
          "tsx": "glc-site/src/components/sections/hero-section.tsx",
          "css": "glc-site/src/styles/glc-base.css",
          "content": "glc-site/src/content/pages/home.json + HeroProps"
        },
        "ground": {
          "sectionRoot": "section#hero.hero-v2: position relative; min-height 100svh; display flex; flex-direction column; overflow hidden; background var(--charcoal-deep); header clearance via padding on canvas not section",
          "grain": ".hero-v2::after: z-index 10; pointer-events none; inline SVG feTurbulence noise data-URI; background-size 160px; opacity ~0.028; mix-blend-mode overlay; sits above content planes for film grain"
        },
        "layerArchitecture": {
          "narrative": "CSS comment documents z 0–4 + grain on top; canvas is z3 with photo at z0 inside it and content at z4",
          "z0_deepBackground": "motion.div.hero-v2__bg-plane (absolute inset 0; will-change transform): children — optional .hero-v2__bg-roll (inset -14%; CSS animation hero-v2-bg-roll 26s scale 1→1.08) wrapping .hero-v2__bg-photo--image (background-image from parallaxBackgroundImage) OR .hero-v2__bg-photo alone (CSS repeating-linear concrete texture + var(--charcoal-deep), inset -8%). Then .hero-v2__scrim-radial (radial vignette ellipse 80% 70% at 30% 45%) and .hero-v2__scrim-left (linear-gradient left dark column for text legibility)",
          "z1_structure": "div.hero-v2__structure-plane: inline SVG.hero-v2__blueprint (600×600 viewBox, rects/lines/circles, white strokes, right -40px, opacity 0.04, mix-blend-mode screen) + div.hero-v2__eng-grid (48px crosshatch rgba(242,183,5,0.6) lines, opacity 0.03, screen)",
          "z2_accent": "div.hero-v2__diag-stripe: 3px wide; right ~56%; linear-gradient vertical transparent–yellow-core–transparent; opacity 0.4; transform skewX(-2deg); pointer-events none",
          "z3_canvas": "div.hero-v2__canvas: relative z-index 3; flex 1; grid-template-columns 56px 1fr; align-items center; padding calc(var(--gl-header-height)+48px) 40px 120px; gap 0 32px; max-width 1440px (wider than --container-max 1320); margin auto; width 100%",
          "photoInsideCanvas": "motion.div.hero-v2__photo-panel: absolute top 0 right 0 width 58% bottom 80px (clears service bar); z-index 0 inside canvas; clip-path polygon parallelogram; overflow hidden; Next/Image fill objectPosition center 30%; .hero-v2__photo-scrim gradient left-to-right darkening for headline overlap",
          "chipsOnPhoto": "div.hero-v2__chips: absolute bottom 40px left 10%; column flex; z-index 2 — glass stat chips + hero-v2__chip--coverage (tags); chamfer clip-path; inset box-shadow borders; hover lift + stronger glow",
          "textColumn": "motion.div.hero-v2__content: grid-column 2; position relative; z-index 4; flex column; max-width 680px — stacks vert-label, ghost mark, h1, rule, optional h2, lede, CTAs",
          "z4_serviceBar": "div.hero-v2__service-bar: z-index 4; margin-top auto; dark frosted bar; border-top gold-tint; flex tiles with dividers"
        },
        "parallaxAndScroll": {
          "hook": "useScroll({ target: sectionRef, offset: [\"start start\", \"end start\"] })",
          "springs": "useSpring(useTransform): bgY [0%,38%], photoY [0%,14%], textY [0%,7%] vs scrollYProgress; stiffness 80 damping 30; applied only when mounted === true for photo/content to avoid SSR mismatch",
          "ledeMask": "useTransform scrollYProgress [0,0.18] → linear-gradient mask strings; applied as WebkitMaskImage/maskImage on .hero-v2__lede-block when mounted",
          "mountedGate": "useState mounted set true in useEffect — parallax style props and lede mask omitted on server/first paint until client"
        },
        "framerVariants": {
          "EASE": "Const [0.22, 1, 0.36, 1] — aligns with global --ease-expo family / section-dna motion.defaultEase",
          "LINE_VARIANT": "Per headline line: hidden clipPath inset(110%…), opacity 0, y 20; visible stagger delay 0.15 + i*0.12s; clipPath wipe + y 0 + opacity 1; duration ~0.9s ease EASE; opacity snap 0.01s",
          "FADE_UP": "hidden opacity 0 y 22 blur 5px; visible delay 0.55 + i*0.1s; duration 0.7s; used subheadline, lede block, CTA row (custom index)",
          "PHOTO_VARIANT": "hidden opacity 0 x 56 tighter clip-path; visible x 0 final clip-path; opacity 0.1s; x+clipPath 1.1s delay 0.2s EASE",
          "CHIP_VARIANT": "hidden opacity 0 y 24 scale 0.94; visible spring stiffness 260 damping 22 delay 0.9 + i*0.14",
          "TILE_VARIANT": "hidden opacity 0 y 14; visible duration 0.5s delay 1.1 + i*0.07 EASE — service bar tiles",
          "vertLabel": "initial opacity 0 x -12; animate opacity 1 x 0; duration 0.8 delay 0.1 EASE",
          "rule": "initial scaleX 0 opacity 0; animate scaleX 1 opacity 1; duration 0.8 delay 0.55 EASE; transform-origin left",
          "ctas": "whileHover scale 1.025 y -2; whileTap scale 0.97; spring stiffness 380 damping 18"
        },
        "typography": {
          "verticalEyebrow": "Not horizontal .eyebrow pattern: div.hero-v2__vert-label — grid col 1; writing-mode vertical-rl; rotate(180deg); 9px 600 uppercase letter-spacing 0.28em; color rgba(255,255,255,0.2); content from props.eyebrow",
          "headline": "h1.hero-v2__headline: font-display clamp(52px,9vw,118px) weight 700 line-height 1 uppercase white; each line in span.hero-v2__line-overflow > motion.span.hero-v2__line; line 1 nth-child(1) scaled 0.62em weight 500 opacity 0.68; line 3 mid-scale 0.74em; emphasizeLine adds .hero-v2__line--accent (yellow-core + hero-accent-pulse text-shadow keyframes 4s alternate from 1.8s delay)",
          "rule": "div.hero-v2__rule 48×2px gradient yellow to transparent; scaleX entrance",
          "subheadline": "h2.hero-v2__subheadline optional: display font weight 600 clamp(1rem,2.2vw,1.35rem) uppercase rgba(255,255,255,0.88) max-width 520px",
          "lede": "Split in TSX on \" — \" (space-em-dash-space): first segment hero-v2__lede-lead; if starts with \"Ground Level Contracting\" wrap in strong.hero-v2__lede-brand; second segment hero-v2__lede-body; container hero-v2__lede-block has yellow left border 1.5px rgba(242,183,5,0.28) padding-left 16px",
          "ghostWatermark": "div.hero-v2__ghost-mark behind headline: img /images/glc-logo.png width/height attrs; filter brightness(0) invert(1); opacity ~0.055; scale 1.05; mobile recenters"
        },
        "chipsAndServiceChrome": {
          "statChip": "hero-v2__chip: backdrop blur; chamfer top-right; multi inset box-shadow simulating border (yellow-tint on right/bottom); hover translateY -2px",
          "coverageChip": "hero-v2__chip--coverage: wider; hero-v2__chip-eyebrow; hero-v2__chip-tag pills",
          "primaryCta": "Hero overrides .btn-primary in .hero-v2__cta-row: chamfer top-right clip-path; padding; letter-spacing 0.22em; ::before shimmer sweep translateX on hover (0.70s cubic 0.22,1,0.36,1); arrow z-index above shimmer",
          "secondaryCta": "btn-hero-glass: frosted; chamfer top-left mirror; inset shadows; hover yellow-tint borders and glow"
        },
        "assets": {
          "photoPanelImage": "Hard-coded path /images/hero-armour-stone-retaining-walls.png — next/image fill priority sizes (max-width:900px) 100vw, 58vw",
          "ghostLogo": "/images/glc-logo.png — native img (comment: avoid next/image SSR/CSR drift)",
          "optionalParallaxBg": "props.parallaxBackgroundImage → inline style backgroundImage on hero-v2__bg-photo--image inside hero-v2__bg-roll"
        },
        "tokensAndLiterals": {
          "cssVariables": [
            "--charcoal-deep",
            "--yellow-core",
            "--white",
            "--font-display",
            "--font-body",
            "--ease-expo",
            "--gl-header-height"
          ],
          "literalRgba": "Many scrims/chips use rgba(20,18,16,…) and rgba(242,183,5,…) alongside tokens — audit if consolidating to design_system.json"
        },
        "responsive": {
          "max1024": "Photo width 50%; clip-path adjusted; chips display none; canvas padding-bottom 100px",
          "max768": "Canvas single column grid; vert-label display none; content grid-column 1 max-width 100%; photo-panel position absolute inset 0 width 100% bottom 0 opacity 0.35 clip-path none z0; scrim-left strengthened; diag-stripe display none; headline font-size clamp reduced; ghost-mark centered; service-inner horizontal scroll hide scrollbar; tiles flex 0 0 auto min-width",
          "max480": "CTA row column; btn-primary and btn-hero-glass full width centered; chamfers preserved"
        },
        "accessibility": {
          "landmarks": "section#hero aria-label Hero",
          "headline": "Logical h1 with aria-label full title; inner motion spans aria-hidden true — screen reader relies on aria-label",
          "decorative": "bg plane, structure plane, diag stripe, ghost mark, photo panel aria-hidden where set in TSX"
        },
        "contentShape": {
          "HeroProps": {
            "eyebrow": "string → vertical rail (not kicker dot pattern)",
            "title": "{ line1, line2, line3, emphasizeLine: 1|2|3 } — emphasizeLine picks accent line class",
            "subheadline": "optional string",
            "lede": "string — split on \" — \"; optional brand prefix handling",
            "primaryCta_secondaryCta": "{ label, href }",
            "stats": "array { value, label } for glass chips",
            "coverage": "{ label, tags: string[] }",
            "serviceBarSlugTitles": "{ slug, title }[] — links via ROUTES.service(slug)",
            "parallaxBackgroundImage": "optional string URL"
          }
        },
        "implementationNotes": [
          "HeroServiceIcon maps explicit slugs (e.g. excavation-site-prep, foundations-civil); home.json uses longer route slugs (e.g. excavation-site-preparation) — those hit ServiceCardIcon default fallback SVG unless aliases added",
          "Canvas max-width 1440px intentionally exceeds --container-max (1320px) for flagship bleed",
          "Chips use box-shadow (not border) because clip-path clips real borders",
          "Photo panel bottom: 80px reserves vertical space for service bar",
          "Legacy #hero .hero__* block still exists in glc-base for static previews; live homepage uses hero-v2 only"
        ]
      },
      "layersBottomToTop": [
        "hero-v2__bg-plane: texture or roll+image + scrim-radial + scrim-left (motion y)",
        "hero-v2__structure-plane: blueprint SVG + eng-grid",
        "hero-v2__diag-stripe",
        "hero-v2__canvas",
        "hero-v2__photo-panel: Image + photo-scrim + chips column",
        "hero-v2__content: vert-label, ghost img, h1 lines, rule, subheadline, lede block, CTA row (motion textY)",
        "hero-v2::after grain",
        "hero-v2__service-bar: inner + tiles"
      ],
      "auditNotes": "Merged 2026-04-05: full DNA from live hero-section.tsx + glc-base HERO V2 block — layer stack, Framer variant timings, HeroProps/lede parsing, parallax springs + mounted gate, chip/CTA chrome, responsive breakpoints, a11y pattern, asset paths, hub page override pattern, HeroServiceIcon slug caveat. Pair with glc-base numeric tokens for exact stops/opacities."
    },
    {
      "id": "gl-parallax-type-band-shared",
      "status": "candidate",
      "displayName": "Parallax type band — full-bleed image + oversized type",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "Service-page breaker: parallax-drifting photo with tone-specific scrim and bottom-aligned headline slab",
        "reactComponent": "glc-site/src/components/sections/parallax-type-band.tsx",
        "domPathExample": "main#main-content > section#excavation-type-band.gl-parallax-type-band--dark",
        "routeExample": "glc-site/src/app/services/excavation-site-preparation/page.tsx (id=\"excavation-type-band\")",
        "classPrefix": "gl-parallax-type-band__",
        "cssAnchorComments": [
          "Shared parallax \"type\" band — breaks section repetition"
        ]
      },
      "referenceFiles": {
        "contentExample": "hub parallax band fields in excavation hub / page data feeding ParallaxTypeBand",
        "propsType": "ParallaxTypeBandProps in parallax-type-band.tsx"
      },
      "visualDna": {
        "layout": {
          "section": "min-height clamp(280px, 42vw, 480px); flex align end; overflow hidden",
          "media": "motion.div gl-parallax-type-band__media absolute inset -8% 0; next/image.fill gl-parallax-type-band__img object-position center 35%",
          "content": "motion.div gl-parallax-type-band__content z2 container padding 48×40×52 (tighter on mobile)"
        },
        "parallax": {
          "imgY": "useScroll start end → end start; transform ~ -6% to 10%",
          "textY": "parallel spring ~ 12% to 0%"
        },
        "scrims": {
          "darkTone": ".gl-parallax-type-band--dark .gl-parallax-type-band__media-scrim gradient bottom-heavy charcoal",
          "lightTone": ".gl-parallax-type-band--light … warm white to transparent rightward"
        },
        "typography": {
          "eyebrow": "10px 800 uppercase letter-spacing 0.22em; yellow-core dark / gold light",
          "title": "Oswald clamp headline uppercase max-width 18ch",
          "subtitle": "body 15px/1.65 optional"
        },
        "tokensUsed": [
          "--container-max",
          "--yellow-core",
          "--gold",
          "--charcoal-deep",
          "--text-600",
          "--font-display",
          "--font-body"
        ],
        "contentShape": {
          "propsContract": "id?, eyebrow, title, subtitle?, imageSrc, imageAlt, tone dark|light"
        }
      },
      "layersBottomToTop": [
        "gl-parallax-type-band__media + __img",
        "gl-parallax-type-band__media-scrim",
        "gl-parallax-type-band__content eyebrow + h2 + subtitle"
      ],
      "auditNotes": "Next/Image renders class gl-parallax-type-band__img with absolute fill; user DOM showed lazy image and srcset for optimisation. Same image file may repeat across hero/CTA elsewhere on hub — asset reuse, not CSS conflict."
    },
    {
      "id": "exc-hub-parallax-cta-band",
      "status": "candidate",
      "displayName": "Excavation hub — parallax CTA band (fixed BG + scrim)",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "Centered phone CTA over fixed parallax photo with diagonal dark scrim",
        "reactComponent": "glc-site/src/components/services/excavation-parallax-cta.tsx",
        "domPath": "main#main-content > section.exc-parallax-cta.gl-reveal",
        "routeExample": "glc-site/src/app/services/excavation-site-preparation/page.tsx",
        "classPrefix": "exc-parallax-cta__",
        "contentSource": "glc-site/src/content/pages/excavation-hub-seo.json → parallaxCta (heading, responsePromise); phone from site.json"
      },
      "referenceFiles": {},
      "visualDna": {
        "layout": {
          "section": "min-height 320px (280px mobile); flex center; padding var(--section-v); overflow hidden",
          "inner": "exc-parallax-cta__inner z1 max-width container centered text"
        },
        "ground": {
          "bg": "exc-parallax-cta__bg absolute inset cover url /images/hero-armour-stone-retaining-walls.png; background-attachment fixed; scale(1.04); prefers-reduced-motion: scroll",
          "scrim": "exc-parallax-cta__scrim linear-gradient 105deg charcoal opaque left → transparent right"
        },
        "accent": {
          "stripe": "exc-parallax-cta__stripe 64×3px yellow-core centered above heading"
        },
        "typography": {
          "heading": "h2#exc-parallax-cta-heading Oswald clamp uppercase white",
          "phone": "a.exc-parallax-cta__phone Oswald clamp yellow-core hover gold",
          "promise": "body 15px white 72% opacity"
        },
        "motion": {
          "reveal": "inherits .gl-reveal scroll-visible pattern on section root"
        },
        "contentShape": {
          "propsContract": "phoneDisplay, phoneHref; copy.heading and copy.responsePromise from hub JSON"
        }
      },
      "layersBottomToTop": [
        "exc-parallax-cta__bg",
        "exc-parallax-cta__scrim",
        "exc-parallax-cta__inner: stripe, h2, phone link, promise"
      ],
      "auditNotes": "User saw SegmentViewNode in React tree — section is a server-friendly wrapper; structure matches exc-parallax-cta.tsx. scrim is the gradient overlay div.exc-parallax-cta__scrim."
    },
    {
      "id": "header-mega-services-panel-shell",
      "status": "candidate",
      "displayName": "Header — Services mega menu panel (#mega-services-panel)",
      "implementation": {
        "kind": "component",
        "plainEnglishName": "Frosted light dropdown panel under nav: intro column + 3×2 service card grid",
        "reactComponent": "glc-site/src/components/layout/site-header.tsx (panel shell + state megaMode)",
        "childComponent": "glc-site/src/components/layout/mega-menu-services.tsx",
        "domPath": "header#site-header > div#mega-services-panel.gl-mega-panel",
        "aria": "role=region aria-label=\"Service lines\" aria-labelledby=mega-services-trigger; open class is-open on .gl-mega-panel",
        "dataSource": "glc-site/src/content/navigation.json megaMenu",
        "cssAnchorComments": [
          "MEGA MENU — Rugged yet Refined"
        ]
      },
      "referenceFiles": {},
      "visualDna": {
        "layout": {
          "shell": "position absolute top 100% left 0 right 0; frosted rgba(250,250,248,0.97) backdrop blur; yellow 3px top border; padding 48×40",
          "innerGrid": "gl-mega-panel__inner 256px intro + 1fr gap 56px; ≤1100px single column; mega grid 3-col → 2-col",
          "mobile": "≤768px .gl-mega-panel display none (drawer replaces)"
        },
        "interaction": {
          "open": "hover .gl-nav-mega-wrap + click toggle on Services button; body.gl-mega-open; #gl-mega-backdrop fixed scrim",
          "animation": "glmc-panel-in on is-open; gl-mega-card stagger glmc-item-in"
        },
        "typography": {
          "kicker": "gl-mega-panel__kicker 9px 800 uppercase + yellow dash ::before",
          "cards": "gl-mega-card__num Oswald 40px watermark; gl-mega-card__title uppercase; gl-mega-card__desc 12px body"
        },
        "tokensUsed": [
          "--container-max",
          "--yellow-core",
          "--yellow-tint",
          "--white",
          "--charcoal-deep",
          "--ease-expo"
        ],
        "contentShape": {
          "cards": "navigation megaMenu.cards: num, title, description, slug, gridTitle[]",
          "intro": "mega.kicker + megaIntro string (home vs inner page variant in SiteHeader)"
        }
      },
      "layersBottomToTop": [
        "body .gl-mega-backdrop when gl-mega-open",
        "#mega-services-panel.gl-mega-panel",
        ".gl-mega-panel__inner intro + .gl-mega-grid .gl-mega-card links"
      ],
      "auditNotes": "Captures the open mega-services-panel the user inspected; pairs with header-nav-primary-links-cluster for trigger wiring (.gl-nav-mega-wrap + #mega-services-trigger)."
    },
    {
      "id": "header-primary-nav-links-cluster",
      "status": "candidate",
      "displayName": "Header — primary nav links row (.gl-header__nav-links)",
      "implementation": {
        "kind": "element",
        "plainEnglishName": "Desktop primary nav: direct links + mega dropdown triggers (Services, Company) + remaining routes",
        "reactComponent": "glc-site/src/components/layout/site-header.tsx",
        "domPath": "header#site-header > nav.gl-header__nav-row > div.gl-header__nav-inner > div.gl-header__nav-links",
        "relatedCss": "Selectors .gl-header__nav-links > a vs .gl-nav-mega-trigger (buttons are not direct children anchors)"
      },
      "referenceFiles": {},
      "visualDna": {
        "layout": {
          "cluster": "flex row gap 2px; margin-left auto between logo and CTA wrap",
          "children": "SmartLink about; gl-nav-mega-wrap + button#mega-services-trigger; gl-nav-mega-wrap + button#mega-company-trigger; SmartLink map for Process, Coverage, Projects (from navigation.primary)"
        },
        "typographyAndChrome": {
          "directLinks": ".gl-header__nav-links > a body 13px 700 padding 8×14; color --text-600; ::after 2px yellow bar scaleX hover",
          "megaTriggers": ".gl-nav-mega-trigger same family size weight; chevron ::after; hover yellow-tint; is-open yellow-tint-md + rotated chevron"
        },
        "tokensUsed": [
          "--font-body",
          "--text-600",
          "--charcoal-deep",
          "--yellow-core",
          "--yellow-tint",
          "--yellow-tint-md",
          "--ease-expo"
        ],
        "motion": {
          "underline": "0.2s color; ::after transform 0.2s var(--ease-expo)",
          "megaTrigger": "0.22s color/background; chevron 0.3s"
        }
      },
      "layersBottomToTop": [
        "gl-header__nav-inner (logo | gl-header__nav-links | gl-header__cta-wrap)",
        "gl-header__nav-links flex of anchors and mega wrap/buttons"
      ],
      "auditNotes": "Documents the nav strip called out in DevTools; mega panels render as siblings below nav row inside #site-header, not inside .gl-header__nav-links."
    },
    {
      "id": "services-home-grid-cards",
      "status": "candidate",
      "displayName": "Services — homepage grid (dark cards + off-white ground)",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "Editorial header (2-col) plus full-width card grid: each service is a charcoal tile that inverts to white on hover/focus",
        "reactComponent": "glc-site/src/components/sections/services-grid-section.tsx",
        "childComponent": "glc-site/src/components/sections/services-grid-card.tsx",
        "relatedComponents": [
          "glc-site/src/components/sections/service-card-icon.tsx (svg.service-card__icon 40×40)",
          "glc-site/src/components/ui/reveal.tsx",
          "glc-site/src/hooks/use-reveal.ts (ref on SmartLink a.service-card)",
          "glc-site/src/components/ui/smart-link.tsx",
          "glc-site/src/components/ui/icon-arrow-small.tsx"
        ],
        "sectionRenderer": "type \"services\" merges props + navigation.megaMenu.cards",
        "domPath": "main#main-content > section#services",
        "sectionElementId": "services",
        "aria": "aria-labelledby=\"services-heading\"; inner role=\"list\"; cards role=\"listitem\"",
        "classPrefix": "services__ / service-card__",
        "cssAnchorComments": [
          "SERVICES GRID"
        ]
      },
      "referenceFiles": {
        "contentExample": "glc-site/src/content/pages/home.json type services + glc-site/src/content/navigation.json megaMenu.cards",
        "propsType": "ServicesSectionProps + MegaMenuCard[]"
      },
      "visualDna": {
        "ground": {
          "section": "#services background var(--off-white); padding var(--section-v) 0; overflow hidden",
          "topBar": "#services::before absolute top full width height 4px var(--charcoal-deep) — GROUND seam"
        },
        "headerBlock": {
          "container": ".services__header max-width --container-max margin auto; padding 0 40px 60px",
          "layout": "grid 2 columns 1fr 1fr gap 40px align end",
          "eyebrow": ".eyebrow.eyebrow--dark inside Reveal; marginBottom 16px inline",
          "heading": "h2#services-heading .services__heading Oswald clamp(36px,3.5vw,52px) uppercase charcoal; line two wrapped; span line yellow-core",
          "intro": ".services__intro 15px/1.7 --text-600 right column",
          "motion": "Reveal on eyebrow; reveal--delay-1 heading; reveal--delay-2 intro"
        },
        "gridShell": {
          "wrap": ".services__grid-wrap container padding 0 40px; position relative",
          "leftRail": "::before absolute left edge top→bottom width 4px charcoal-deep — STRUCTURE rail",
          "grid": ".services__grid CSS grid repeat(3,1fr) gap 2px — hairline gutters between cards",
          "responsive": "≤1024px 2 columns; ≤768px header 1 col + grid 1 col (global responsive block)"
        },
        "serviceCard": {
          "element": "a.service-card SmartLink + classes reveal + optional reveal--delay-1|2 (pattern i%3)",
          "geometry": "min-height 280px; padding 40×32; flex column; cursor pointer; overflow hidden",
          "layers": "::before absolute inset white fill scaleY(0) origin bottom → scaleY(1) hover/focus-visible; z0. Children z1",
          "hoverChrome": "box-shadow var(--shadow-card) + inset 1px gray-200 on hover/focus-visible",
          "numWatermark": ".service-card__num absolute top-right Oswald 64px weight 700 rgba white 0.07 → hover rgba charcoal 0.12",
          "icon": "svg.service-card__icon 40×40 margin-bottom 20px stroke currentColor yellow-core",
          "title": "h3.service-card__title Oswald 20px uppercase white → hover charcoal; multi-line via card.gridTitle spans + br between lines",
          "desc": ".service-card__desc 13px/1.65 rgba white 0.5 → hover --text-600; margin-bottom auto (pushes CTA to bottom)",
          "ctaRow": ".service-card__link flex row gap 8→12 on hover; 11px 800 uppercase yellow-core letter-spacing 0.12em + IconArrowSmall",
          "transitions": "background/box-shadow 0.3s --ease-expo; ::before transform 0.5s --ease-expo; text colors 0.3s"
        },
        "tokensUsed": [
          "--off-white",
          "--charcoal-deep",
          "--white",
          "--yellow-core",
          "--text-600",
          "--gray-200",
          "--shadow-card",
          "--container-max",
          "--font-display",
          "--ease-expo",
          "--section-v"
        ],
        "contentShape": {
          "megaMenuCard": "num, title, description, slug, gridTitle[] (1–2 lines), gridDescription",
          "sectionProps": "eyebrow, headingLine1, headingLine2, intro"
        },
        "hierarchy": "Section eyebrow smallest → H2 dominant → intro paragraph → grid of peer cards with num (decorative) < icon < title < body < learn-more",
        "balance": "2px negative space between cards reads as industrial grid; left rail aligns with card column edge"
      },
      "layersBottomToTop": [
        "#services off-white + top 4px charcoal bar",
        ".services__header (eyebrow, h2, intro)",
        ".services__grid-wrap + ::before left rail",
        ".services__grid",
        "a.service-card: ::before white lift layer",
        "card content: __num, svg.__icon, h3.__title, p.__desc, span.__link"
      ],
      "auditNotes": "SegmentViewNode in RSC output wraps section; class names are services__* and service-card (user DevTools typos .ervice. are OCR). Cards link to ROUTES.service(slug)."
    },
    {
      "id": "why-why3-editorial-manifesto",
      "status": "candidate",
      "displayName": "Why — Why3 light editorial (split header + reason rows)",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "Off-white band: two-column headline + CTA intro, then stacked reason rows with ghost numbers and yellow hover sweep",
        "reactComponent": "glc-site/src/components/sections/why-section.tsx",
        "domPath": "main#main-content > section#why",
        "sectionElementId": "why",
        "relatedComponents": [
          "framer-motion motion.div per .why3__reason",
          "glc-site/src/components/ui/reveal.tsx",
          "glc-site/src/components/ui/icon-arrow.tsx"
        ],
        "classPrefix": "why3__",
        "cssAnchorComments": [
          "WHY — v3 Light Editorial Manifesto",
          "WHY — Typographic Reason Rows (v2)"
        ]
      },
      "referenceFiles": {
        "contentExample": "glc-site/src/content/pages/home.json type why",
        "propsType": "WhyProps"
      },
      "visualDna": {
        "ground": {
          "section": "#why background var(--off-white); overflow hidden",
          "topSeam": "#why::before height 3px charcoal-deep full width (transition from dark stats above)"
        },
        "header": {
          "layout": ".why3__header grid 1fr 1fr gap 60px align end; max-width container; padding var(--section-v) 40px 56px",
          "left": "eyebrow + h2#why-heading .why3__heading Oswald clamp(34px…54px) uppercase; em yellow-core",
          "right": ".why3__header-right flex column gap 24px; .why3__intro 15px/1.8 --text-500 max 44ch; .btn-primary.why3__cta + IconArrow",
          "motion": "Reveal delays on heading and right column"
        },
        "reasonRows": {
          "container": ".why3__reasons border-top gray-200; each .why3__reason border-bottom gray-200; position relative overflow hidden",
          "hoverLayers": ".why3__hover-fill absolute inset yellow-tint scaleX(0)→1 origin left 0.5s --ease-expo; ::before left 3px yellow bar scaleY hover",
          "innerGrid": ".why3__reason-inner z1 grid columns 80px | 1px rule | 1fr | auto; gap 0 28px; padding 28px 40px; max-width container",
          "num": ".why3__num Oswald 13px yellow-core uppercase tracking",
          "divider": ".why3__divider 1px wide self-stretch gray-200",
          "text": ".why3__text-block flex baseline wrap gap 24px; .why3__title Oswald 20px uppercase charcoal; .why3__desc 14px/1.65 --text-500 max 52ch",
          "ghost": ".why3__ghost-num absolute right huge Oswald clamp(72px…120px) charcoal 0.04 opacity",
          "arrow": ".why3__arrow-mark → appears translateX on hover; hidden ≤1024px",
          "motion": "framer whileInView each row opacity/y stagger delay i*0.07"
        },
        "responsive": {
          "768": "smaller section padding; text-block stacks column",
          "1024": "header 1 col; reason inner 52px col; hide arrow"
        },
        "tokensUsed": [
          "--off-white",
          "--charcoal-deep",
          "--yellow-core",
          "--yellow-tint",
          "--gray-200",
          "--text-500",
          "--container-max",
          "--section-v",
          "--section-v-sm",
          "--ease-expo",
          "--font-display",
          "--font-body"
        ],
        "contentShape": {
          "props": "eyebrow, headingBefore, headingEmphasis (em), headingAfter, body, cta, reasons[{num,title,text}]"
        }
      },
      "layersBottomToTop": [
        "#why off-white + top seam",
        ".why3__header",
        ".why3__reasons",
        "per .why3__reason: .why3__hover-fill (z0), ::before yellow bar, .why3__ghost-num, .why3__reason-inner, .why3__arrow-mark"
      ],
      "auditNotes": "v2 CSS block later retargets #why for unused layout — see conflictsToEliminate why-process-testimonials-cta-v2-cascade."
    },
    {
      "id": "process-proc3-split-timeline",
      "status": "candidate",
      "displayName": "Process — Proc3 dark-left / white-right timeline",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "Split layout: charcoal editorial panel with blueprint texture + step count ghost; white panel with vertical yellow thread and numbered nodes",
        "reactComponent": "glc-site/src/components/sections/process-section.tsx",
        "domPath": "main#main-content > section#process",
        "sectionElementId": "process",
        "relatedComponents": [
          "framer-motion per .proc3__step",
          "glc-site/src/components/ui/reveal.tsx"
        ],
        "classPrefix": "proc3__",
        "cssAnchorComments": [
          "PROCESS — v3 Dark Split Timeline",
          "PROCESS — Editorial 2×2 Staggered Steps (v2)"
        ]
      },
      "referenceFiles": {
        "contentExample": "glc-site/src/content/pages/home.json type process",
        "propsType": "ProcessProps"
      },
      "visualDna": {
        "ground": {
          "section": "#process background var(--charcoal-deep); overflow hidden"
        },
        "layoutShell": {
          "grid": ".proc3__layout display grid 38fr 62fr; min-height 600px",
          "responsive": "≤1024px single column; left panel loses right border gains bottom border; thread repositions"
        },
        "leftPanel": {
          "surface": ".proc3__left-panel flex column gap 24px; padding var(--section-v) + horizontal clamp; border-right 1px rgba white 0.06",
          "texture": "repeating-linear-gradient horizontal lines 40px step subtle white",
          "accent": ".proc3__left-accent absolute top-left 120×3px yellow bar",
          "type": ".proc3__eyebrow yellow + forced ::before bar; h2#process-heading .proc3__heading white uppercase + .proc3__heading-accent block yellow",
          "intro": ".proc3__intro 14px rgba white 0.5 max 32ch — NOTE: copy hardcoded in process-section.tsx (not props)",
          "ghostCount": ".proc3__count-mark huge white 0.04 opacity; margin-top auto; hidden tablet+"
        },
        "stepsPanel": {
          "surface": ".proc3__steps-panel white; padding var(--section-v) + asymmetric horizontal padding",
          "thread": ".proc3__thread absolute vertical 2px line gradient yellow → fade; positioned left clamp aligned with nodes",
          "stepRow": ".proc3__step grid 48px + 1fr gap 28px; padding 28px 0; border-bottom gray-200; hover expands bg gray-100 with negative horizontal margin (desktop)",
          "node": ".proc3__node 40px circle charcoal; flex center; border 2px transparent; margin-left -20px aligns on thread; hover yellow fill + scale",
          "content": ".proc3__step-label body 10px 800 uppercase yellow tracking; .proc3__step-title Oswald 20px uppercase; .proc3__step-desc 13px --text-500 max 50ch"
        },
        "motion": {
          "steps": "whileInView opacity x stagger per index"
        },
        "tokensUsed": [
          "--charcoal-deep",
          "--white",
          "--yellow-core",
          "--gray-100",
          "--gray-200",
          "--text-500",
          "--section-v",
          "--ease-expo",
          "--font-display",
          "--font-body"
        ],
        "contentShape": {
          "props": "eyebrow, heading, headingAccent, steps[{num,title,desc}]",
          "hardcodedIntro": "Fixed paragraph in TSX — change DNA if copy moves to JSON"
        }
      },
      "layersBottomToTop": [
        "#process charcoal",
        ".proc3__layout",
        ".proc3__left-panel: accent bar, eyebrow, h2, intro, count mark, blueprint lines",
        ".proc3__steps-panel: .proc3__thread, each .proc3__step (.proc3__node + .proc3__step-content)"
      ],
      "auditNotes": "User DOM proc3__.tep.-panel = .proc3__steps-panel. Later #process v2 uses off-white + process-r2__* — cascade conflict documented."
    },
    {
      "id": "coverage-dark-territory-band",
      "status": "candidate",
      "displayName": "Coverage — charcoal service territory (3-plane layout)",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "Dark band: intro column with yellow left rail + 2×2 territory cards with dots; radial glow + top gradient bar overlays",
        "reactComponent": "glc-site/src/components/sections/coverage-section.tsx",
        "domPath": "main#main-content > section#coverage.coverage.relative.overflow-hidden",
        "sectionElementId": "coverage",
        "relatedComponents": [
          "glc-site/src/components/ui/reveal.tsx"
        ],
        "classPrefix": "coverage__",
        "cssAnchorComments": [
          "COVERAGE — dark band"
        ]
      },
      "referenceFiles": {
        "contentExample": "glc-site/src/content/pages/home.json type coverage",
        "propsType": "CoverageProps"
      },
      "visualDna": {
        "ground": {
          "inlineStyles": "React sets backgroundColor var(--charcoal), color var(--white), paddingTop/Bottom var(--section-v) — wins over Tailwind layer order in dev",
          "cssFallback": "section#coverage in glc-base repeats charcoal + section padding",
          "fxRadial": ".coverage__fx-radial absolute inset z0 radial warm yellow glow top-left quadrant",
          "fxTopbar": ".coverage__fx-topbar top full width 3px gradient yellow → transparent z2"
        },
        "layout": {
          "inner": ".coverage__inner max-width container padding 0 40px; grid 1fr 2fr gap clamp(48px…80px) align center; z1",
          "introColumn": ".coverage__intro border-left 3px yellow-core; padding-left 28px",
          "areasGrid": ".coverage__areas grid 2×2 gap var(--gap-grid); Reveal wrapper delay--2",
          "responsive": "≤1024 inner stacks 1fr; areas stay 2-col then 1 col at 768"
        },
        "cards": {
          "tile": ".coverage__area flex row gap 14px; padding 22×24; bg rgba white 0.05; border 1px rgba white 0.08; hover yellow-tint + border yellow + translateY(-2px) 0.35s --ease-expo",
          "dot": ".coverage__area-dot 8px circle yellow-core",
          "type": ".coverage__area-name body 14px 700 uppercase white; .coverage__area-sub 12px muted white"
        },
        "typography": {
          "eyebrow": ".coverage__eyebrow margin-bottom 16px",
          "heading": "h2#coverage-heading Oswald clamp(36px…54px) uppercase white; em yellow-core",
          "body": ".coverage__body 15px/1.7 rgba white 0.62 max 42ch — not --text-500 on charcoal (comment in CSS)"
        },
        "tokensUsed": [
          "--charcoal",
          "--white",
          "--yellow-core",
          "--yellow-tint",
          "--container-max",
          "--gap-grid",
          "--section-v",
          "--ease-expo",
          "--font-display",
          "--font-body"
        ],
        "contentShape": {
          "props": "eyebrow, headingBefore, headingEmphasis (em), headingAfter, body, areas[{name,sub}]"
        },
        "hierarchy": "Eyebrow → H2 territory statement → supporting body → scannable area tiles"
      },
      "layersBottomToTop": [
        "section#coverage charcoal fill",
        ".coverage__fx-radial",
        ".coverage__fx-topbar",
        ".coverage__inner",
        ".coverage__label-col .coverage__intro (eyebrow, h2, body)",
        ".coverage__areas .coverage__area cards"
      ],
      "auditNotes": "User saw inline style on section in DevTools — intentional in CoverageSection.tsx. Tailwind classes on section are layout helpers only."
    },
    {
      "id": "testimonials-tst3-editorial",
      "status": "candidate",
      "displayName": "Testimonials — Tst3 featured quote + supporting grid",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "White band with charcoal top seam: split header, large Source Serif featured quote with yellow quote mark, yellow accent rule, then 2-col gray cards",
        "reactComponent": "glc-site/src/components/sections/testimonials-section.tsx",
        "domPath": "main#main-content > section#testimonials",
        "sectionElementId": "testimonials",
        "relatedComponents": [
          "framer-motion .tst3__featured + .tst3__card",
          "glc-site/src/components/ui/reveal.tsx"
        ],
        "classPrefix": "tst3__",
        "cssAnchorComments": [
          "TESTIMONIALS — v3 Editorial Pull Quote",
          "TESTIMONIALS — Featured Editorial Layout (v2)"
        ]
      },
      "referenceFiles": {
        "contentExample": "glc-site/src/content/pages/home.json type testimonials",
        "propsType": "TestimonialsProps"
      },
      "visualDna": {
        "ground": {
          "section": "#testimonials white overflow hidden",
          "seam": "#testimonials::before top 3px charcoal-deep full width"
        },
        "header": {
          "layout": ".tst3__header grid 1fr 1fr gap 40px align end; container padding var(--section-v) 40px 56px",
          "left": ".tst3__header-left: .eyebrow.eyebrow--dark + h2#testimonials-heading .tst3__heading Oswald clamp(32px…48px) uppercase; em yellow-core (not in Reveal — instant)",
          "right": ".tst3__header-right .tst3__sub 15px/1.8 --text-500 max 44ch with reveal--delay-2"
        },
        "featured": {
          "container": "motion.div.tst3__featured role article; grid auto+1fr gap 32px; padding 0 40px 64px; position relative",
          "openQuote": ".tst3__open-mark Source Serif 4 italic huge clamp(100px…160px) yellow-core ~0.7 opacity",
          "quote": ".tst3__featured-quote Source Serif italic clamp(18px…26px) charcoal",
          "attribution": "flex row gap 16px: .tst3__featured-name body 13px 800 uppercase; .tst3__featured-sep 28×2 yellow bar; .tst3__featured-role 12px muted",
          "accentBar": ".tst3__featured-accent bottom full width 1px gray-200; ::before 72×3 yellow segment",
          "motion": "whileInView fade y 0.8s ease expo"
        },
        "supportingGrid": {
          "layout": ".tst3__grid 2 columns gap 2px; padding 0 40px bottom section-v",
          "card": "motion.article.tst3__card gray-100 padding 40×36; border-top 3px transparent → yellow hover; hover yellow-tint",
          "internals": ".tst3__card-mark Source Serif quote 48px yellow; .tst3__card-quote body italic 14px --text-500; .tst3__card-rule 28×2 yellow; name uppercase; role small muted"
        },
        "responsive": {
          "768": "tighter padding; featured single column; smaller open mark",
          "1024": "header 1 col; grid 1 col"
        },
        "tokensUsed": [
          "--white",
          "--charcoal-deep",
          "--yellow-core",
          "--gray-100",
          "--gray-200",
          "--text-500",
          "--text-400",
          "--font-display",
          "--font-body",
          "--font-accent",
          "--container-max",
          "--section-v",
          "--ease-expo"
        ],
        "contentShape": {
          "props": "eyebrow, headingBefore, headingAccent (em), headingAfter, sub, items[{quote,name,role}] — first item featured"
        }
      },
      "layersBottomToTop": [
        "#testimonials white + top seam",
        ".tst3__header",
        ".tst3__featured: open mark, body, accent",
        ".tst3__grid .tst3__card articles"
      ],
      "auditNotes": "Featured h2 lines use em for accent word; supporting cards use framer whileInView. v2 #testimonials block adds padding + alternate layout classes — cascade conflict entry."
    },
    {
      "id": "cta-band-cta3-charcoal-close",
      "status": "candidate",
      "displayName": "CTA band — Cta3 charcoal close (diagonal wash + phone)",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "Dark charcoal closing band: skewed yellow wash, blueprint grid, two-column inner (headline + sub) vs stacked phone/email actions, bottom yellow gradient bar",
        "reactComponent": "glc-site/src/components/sections/cta-band-section.tsx",
        "domPath": "main#main-content > section#cta-band",
        "sectionElementId": "cta-band",
        "propsNote": "sectionId prop defaults cta-band",
        "relatedComponents": [
          "glc-site/src/components/ui/icon-arrow.tsx"
        ],
        "classPrefix": "cta3__",
        "cssAnchorComments": [
          "CTA BAND — v3 Dark Charcoal Close",
          "CTA BAND — Charcoal Drama (v2)"
        ]
      },
      "referenceFiles": {
        "contentExample": "glc-site/src/content/pages/home.json type ctaBand",
        "propsType": "CtaBandProps"
      },
      "visualDna": {
        "ground": {
          "section": "#cta-band var(--charcoal-deep) overflow hidden",
          "blueprint": "#cta-band::before inset crossed 80px grid rgba white 0.012",
          "diag": ".cta3__diag absolute skewed yellow rectangle opacity 0.07 pointer-events none — atmospheric depth",
          "v2WatermarkNote": "Later #cta-band::after 'GLC' ghost text in v2 block — same id; see conflictsToEliminate"
        },
        "inner": {
          "layout": ".cta3__inner container padding var(--section-v) 40px; grid 1fr auto gap 60px align center z1",
          "copy": ".cta3__copy: .cta3__eyebrow-bar flex eyebrow + extending .cta3__eyebrow-line (1px rgba white 0.1); .cta3__eyebrow 10px 800 uppercase yellow tracking 0.22em",
          "heading": "h2#cta-heading Oswald clamp(36px…58px) uppercase white; line breaks + em yellow-core",
          "sub": ".cta3__sub 14px rgba white 0.5 max 50ch"
        },
        "actions": {
          "column": ".cta3__actions flex column gap 16px align end; min-width 280px",
          "phone": ".cta3__phone-label micro uppercase muted; .cta3__phone block Oswald clamp yellow hover opacity",
          "divider": ".cta3__divider 1px rgba white 0.12 full width",
          "email": "a.btn-ghost.cta3__email-btn + IconArrow"
        },
        "footerAccent": ".cta3__bottom-bar height 4px gradient yellow → fade full width",
        "responsive": {
          "768": "reduced padding; email btn align start",
          "1024": "inner 1 col; actions align start; phone text-align left"
        },
        "tokensUsed": [
          "--charcoal-deep",
          "--white",
          "--yellow-core",
          "--ease-expo",
          "--font-display",
          "--font-body",
          "--section-v",
          "--section-v-sm",
          "--container-max"
        ],
        "contentShape": {
          "props": "eyebrow, headingLine1, headingLine2, headingEmphasis (em), sub, phoneLabel, phone, phoneHref, emailCta{label,href}"
        }
      },
      "layersBottomToTop": [
        "#cta-band charcoal",
        "#cta-band::before blueprint",
        ".cta3__diag",
        ".cta3__inner: copy + actions",
        ".cta3__bottom-bar"
      ],
      "auditNotes": "RSC may show SegmentViewNode; markup is cta-band-section.tsx. v2 adds ::after watermark + cta-r2__* — documented cascade conflict."
    },
    {
      "id": "footer-site-wide-gray-rail",
      "status": "candidate",
      "displayName": "Footer — brand grid + legal bar",
      "implementation": {
        "kind": "component",
        "plainEnglishName": "Gray-100 footer: 4-column main grid (brand + 3 link columns), charcoal 4px top border, off-white legal strip",
        "reactComponent": "glc-site/src/components/layout/site-footer.tsx",
        "domPath": "footer#footer",
        "dataSource": "glc-site/src/content/site.json + navigation.json footer",
        "variant": "minimal prop renders bar-only copyright strip"
      },
      "referenceFiles": {},
      "visualDna": {
        "ground": {
          "shell": "#footer background var(--gray-100); padding 80px 0 0; border-top 4px var(--charcoal-deep)"
        },
        "mainGrid": {
          "layout": ".footer__main container padding 0 40px 60px; grid 280px 1fr 1fr 1fr gap 60px",
          "brand": ".footer__brand: .footer__logo-row Image + .footer__wordmark-name Oswald 16px uppercase + .footer__wordmark-sub 9px yellow tracking; .footer__tagline Source Serif italic 14px --text-600",
          "contact": ".footer__contact-item flex gap 10px 13px 600 --text-600; svg yellow-core; phone link hover yellow",
          "columns": "per column .footer__col-title Oswald 14px uppercase + bottom border gray-200 + ::after 24×2 yellow accent; ul.footer__links li > SmartLink with ::before expanding yellow bar hover"
        },
        "legalBar": {
          "surface": ".footer__bar off-white border-top gray-200",
          "inner": ".footer__bar-inner flex space-between padding 20px 40px",
          "copy": ".footer__copy 12px --text-400; span legal name yellow-core",
          "legalLinks": ".footer__legal flex gap; links hover yellow-core"
        },
        "responsive": {
          "768": "main 1 col; bar-inner stacks centered",
          "1024": "main 2 columns; brand spans full width"
        },
        "tokensUsed": [
          "--gray-100",
          "--gray-200",
          "--off-white",
          "--charcoal-deep",
          "--yellow-core",
          "--text-600",
          "--text-400",
          "--font-display",
          "--font-body",
          "--font-accent",
          "--container-max",
          "--ease-expo"
        ],
        "contentShape": {
          "footerNav": "footer.tagline, footer.columns[{title, links[]}], footer.legal[]",
          "site": "name, slogan, telephone, telephoneDisplay, address, copyrightYear, legalName"
        },
        "interaction": "Link hover darkens text + yellow micro-bar animates width 0→16px"
      },
      "layersBottomToTop": [
        "#footer gray-100 + top charcoal rule",
        ".footer__main",
        ".footer__bar"
      ],
      "auditNotes": "Rendered from app/layout.tsx with site + navigation props. Not a main#main-content section but part of every page chrome."
    },
    {
      "id": "glc-snow-p14-midlower-cta",
      "status": "candidate",
      "displayName": "Commercial snow — P14 mid-to-lower CTA banner",
      "implementation": {
        "kind": "element",
        "plainEnglishName": "Dark charcoal inline CTA strip: yellow left rail, headline + supporting line, primary + ghost SmartLinks — revealed on scroll with the snow page reveal wrapper",
        "reactComponent": "glc-site/src/components/services/commercial-snow-page-main.tsx (comment P14 MID-TO-LOWER CTA BANNER)",
        "wrapperComponent": "glc-site/src/components/services/commercial-snow-reveal-section.tsx → SnowRevealSection (div.reveal.glc-snow-reveal + useReveal ref)",
        "route": "glc-site/src/app/services/snow-removal/page.tsx → CommercialSnowPageMain",
        "domPath": "main#main-content > div.glc-snow-page > div.reveal.glc-snow-reveal.visible > div.glc-snow-midlower-cta",
        "classPrefix": "glc-snow-midlower-cta__",
        "cssAnchorComments": [
          "P14 — Mid-to-lower CTA",
          "SNOW PAGE (glc-snow-btn)"
        ]
      },
      "referenceFiles": {
        "ctasAndSharedCopy": "glc-site/src/content/commercial-snow-page-data.ts → commercialSnowClosingCta.ctas (href + labels for buttons; midlower block duplicates heading copy in TSX)"
      },
      "visualDna": {
        "parentWrapper": {
          "classes": "reveal glc-snow-reveal — inherits global .reveal scroll visibility; .glc-snow-reveal shortens transition to 0.28s (opacity/transform)",
          "behavior": "useReveal adds .visible when intersecting; prefers-reduced-motion: .glc-snow-reveal transition none"
        },
        "ground": {
          "banner": ".glc-snow-midlower-cta background var(--charcoal-deep); padding 48×40; box-shadow 0 8px 40px rgba(14,13,12,0.3)",
          "mobilePadding": "≤768px padding 36×20 (snow page responsive block)"
        },
        "layout": {
          "inner": ".glc-snow-midlower-cta__inner max-width --container-max margin auto; grid minmax(0,1fr) + auto; align center; gap 32px",
          "stackMobile": "≤768px grid 1 column; align-items start",
          "copyColumn": ".glc-snow-midlower-cta__copy min-width 0",
          "accentRail": ".glc-snow-midlower-cta__copy--accent border-left 4px var(--yellow-core); padding-left 24px",
          "actions": ".glc-snow-midlower-cta__btns flex row gap 12px wrap align center"
        },
        "typography": {
          "heading": "p.glc-snow-midlower-cta__heading — Oswald clamp(1rem, 2vw, 1.3rem) 700 uppercase letter-spacing 0.04em white; margin 0 0 8px",
          "sub": "p.glc-snow-midlower-cta__sub body 14px rgba(255,255,255,0.6) line-height 1.6"
        },
        "interactions": {
          "primaryCta": "SmartLink.glc-snow-btn.glc-snow-btn--primary — yellow fill, gold gradient sweep on hover/focus, charcoal text, border yellow, translateY(-2px) on hover",
          "ghostCta": "SmartLink.glc-snow-btn.glc-snow-btn--ghost — transparent + white border rgba 0.35; light gradient fill sweep hover; white text",
          "reducedMotion": ".glc-snow-btn--primary/--ghost lose background-image sweep; hover transform none"
        },
        "tokensUsed": [
          "--charcoal-deep",
          "--yellow-core",
          "--gold",
          "--white",
          "--container-max",
          "--font-display",
          "--font-body",
          "--ease-expo"
        ],
        "contentShape": {
          "note": "Heading and sub paragraphs are hardcoded strings in commercial-snow-page-main.tsx (~lines 426–430), not pulled from commercialSnowClosingCta object.",
          "buttons": "Both use commercialSnowClosingCta.ctas[0].href and ctas[1].href; primary label hardcoded \"Request Free Commercial Assessment\" (matches data); secondary label from ctas[1].label (e.g. tel link text)."
        },
        "hierarchy": "Yellow rail + headline (dominant) → muted subcopy → action row (primary first, ghost second)"
      },
      "layersBottomToTop": [
        "div.reveal.glc-snow-reveal (scroll fade/slide)",
        ".glc-snow-midlower-cta surface + shadow",
        ".glc-snow-midlower-cta__inner grid",
        ".glc-snow-midlower-cta__copy.glc-snow-midlower-cta__copy--accent: __heading, __sub",
        ".glc-snow-midlower-cta__btns: .glc-snow-btn--primary, .glc-snow-btn--ghost"
      ],
      "auditNotes": "DevTools class typos glc-.now-* are OCR errors; real prefix is glc-snow-. Part of long-form commercial snow page after process block (P13) and before FAQ (P15)."
    }
  ]
}
```

---

## 6. JSON — Section DNA

Parsed from the second trailing JSON object in the source file.

```json
{
  "_meta": {
    "kind": "section-dna",
    "version": "1.3.0",
    "changelog": "v1.3.0 — All 7 pending decisions resolved. PD-01: ease locked 0.22/0.36. PD-02: stat cell class names locked __num/__sub. PD-03/04/05: proposed values applied, flagged CONFIRM_BEFORE_SHIP. PD-06: tab container registered as stc1__. PD-07: AB3 canonical = white-only, dark variants = experimental only. Source Code Pro added as --font-mono. Theme = light-primary, DSE framework. Ready for Cursor use.",
    "purpose": "Single source of truth for GLC site design system. Point Cursor at this file only.",
    "canonicalStyleSource": "glc-site/src/styles/glc-base.css",
    "canonicalTokenSource": "design_system.json",
    "approvedSectionsSource": "section-dna/approved-sections.json (15 sections, lastSynced 2026-04-05)",
    "location": "Repository root — same level as package.json and /glc-site",
    "pendingDecisions": "NONE — all resolved. Values marked CONFIRM_BEFORE_SHIP should be verified once in design_system.json before final launch, but are safe to build against now.",
    "confirmBeforeShip": [
      "tokens.color.text.--text-600 — proposed rgba(30,28,26,0.90)",
      "tokens.color.charcoal.--charcoal — proposed #2E2B28 (alias of --charcoal-mid)",
      "tokens.effects.--shadow-card — proposed value, verify in design_system.json",
      "tokens.spacing.--gap-grid — proposed value, verify in design_system.json",
      "tokens.spacing.--gl-header-height — proposed value, verify in design_system.json"
    ],
    "cssConflictsToResolveInCursor": [
      "1. Open glc-base.css → search 'STATS — Display-Scale Typography (v2)' → delete that entire block",
      "2. Search '.about__' in all TSX files → if zero results → delete the v2 about block in glc-base.css",
      "3. Search 'process-r2__' in all TSX files → if zero results → delete the four v2 blocks for #why #process #testimonials #cta-band",
      "4. Search 'var(--yellow-tint)' in glc-base.css → replace all with var(--charcoal-tint)",
      "5. Search 'var(--yellow-tint-md)' in glc-base.css → replace all with var(--charcoal-tint-md)"
    ]
  },
  "themePhilosophy": {
    "primaryGround": "LIGHT — white and off-white are the default page surface",
    "designStyleEnhancements": "Dark sections (charcoal-deep, charcoal-mid, charcoal-light) are Design Style Enhancements (DSEs). Purposeful high-contrast interventions — not the default.",
    "dseSpacingRule": "Never place two full-bleed DSE sections consecutively without a light section between. Exception: hero + stats pairing only.",
    "yellowRole": "Yellow-core (#F7C520) is the single brand accent across both light and dark surfaces. Never substitute.",
    "charcoalTints": "--charcoal-tint and --charcoal-tint-md replace the former yellow-tint tokens. Industrial charcoal wash — feels like concrete and steel, not candy.",
    "logoNote": "GLC logo body gray is warm-neutral #585653 — all charcoal tokens are warm-biased to match."
  },
  "tokens": {
    "color": {
      "surfaces": {
        "--white": "#FFFFFF",
        "--off-white": "#F5F3EE",
        "--gray-100": "rgba(30,28,26,0.06)",
        "--gray-200": "rgba(30,28,26,0.12)"
      },
      "charcoal": {
        "--charcoal-light": "#585653",
        "--charcoal-mid": "#2E2B28",
        "--charcoal-deep": "#1E1C1A",
        "--charcoal": "#2E2B28 — CONFIRM_BEFORE_SHIP: assumed alias of --charcoal-mid; used by CoverageSection.tsx inline style"
      },
      "accent": {
        "--yellow-core": "#F7C520",
        "--gold": "#D4A017"
      },
      "tints": {
        "--charcoal-tint": "rgba(46,43,40,0.06) — replaces removed --yellow-tint",
        "--charcoal-tint-md": "rgba(46,43,40,0.12) — replaces removed --yellow-tint-md",
        "_removed": "--yellow-tint and --yellow-tint-md — deleted from system; update all CSS references"
      },
      "text": {
        "--text-500": "rgba(30,28,26,0.80)",
        "--text-400": "rgba(30,28,26,0.55)",
        "--text-600": "rgba(30,28,26,0.90) — CONFIRM_BEFORE_SHIP: extrapolated from token scale pattern"
      }
    },
    "typography": {
      "--font-display": "Oswald, sans-serif — weights 600 700",
      "--font-body": "'Plus Jakarta Sans', sans-serif — weights 400 500 700 800",
      "--font-accent": "'Source Serif 4', serif — italic weight 400; testimonials featured quote, card marks, footer tagline",
      "--font-mono": "'Source Code Pro', monospace — weights 400/500. USE weight 500 at ≤12px for legibility on both light and dark surfaces; weight 400 acceptable at 14px+. Minimum rendered size: 11px. Minimum opacity: 0.65 on any background. Used for: token values, hex codes, class prefixes, CSS property labels, all technical UI text. Part of the Adobe Source family alongside --font-accent — intentional family cohesion."
    },
    "spacing": {
      "--section-v": "clamp(72px, 8vw, 112px)",
      "--section-v-sm": "clamp(48px, 6vw, 72px)",
      "--container-max": "1320px",
      "--gap-grid": "24px — CONFIRM_BEFORE_SHIP: proposed standard grid gap; verify in design_system.json",
      "--gl-header-height": "80px — CONFIRM_BEFORE_SHIP: proposed standard nav height; verify in design_system.json"
    },
    "effects": {
      "--shadow-card": "0 4px 24px rgba(30,28,26,0.10) — CONFIRM_BEFORE_SHIP: proposed; verify in design_system.json"
    },
    "motion": {
      "--ease-expo": "cubic-bezier(0.22, 1, 0.36, 1)",
      "_resolved": "PD-01 resolved — matches all live Framer Motion components. CSS previews built in session were the outlier and should be updated to match."
    }
  },
  "globalPatterns": {
    "scrollReveal": {
      "hiddenState": "opacity:0; transform:translateY(28px)",
      "visibleState": "opacity:1; transform:translateY(0)",
      "transition": "opacity 0.6s var(--ease-expo), transform 0.6s var(--ease-expo)",
      "stagger": [
        "reveal--delay-1:0.08s",
        "reveal--delay-2:0.16s",
        "reveal--delay-3:0.24s",
        "reveal--delay-4:0.32s"
      ],
      "reducedMotion": "Show final state immediately, skip transition"
    },
    "hoverAccentBar": {
      "element": "::after absolute bottom:0 left:0 width:100% height:2px",
      "color": "var(--yellow-core)",
      "default": "scaleX(0) transform-origin:left",
      "hover": "scaleX(1)",
      "duration": "0.5s var(--ease-expo)",
      "hoverBg": {
        "lightSurface": "var(--charcoal-tint)",
        "darkSurface": "rgba(255,255,255,0.025)"
      }
    },
    "sectionPrefix": "All section internals use scoped prefix (st3__, ab3__, why3__, etc). No bare global utilities inside sections.",
    "blueprintTexture": "DSE: #id::before crossed 80px rgba(255,255,255,0.012). Light: horizontal-only 64px rgba(0,0,0,0.022).",
    "seams": {
      "lightToDSE": "DSE section top: ::before 3px var(--charcoal-deep) seam OR 3px yellow-core gradient top rail",
      "dseTobottom": "No additional seam needed — charcoal edge is the natural close"
    }
  },
  "knownCssConflicts": [
    {
      "id": "stats-v3-vs-v2-cascade",
      "severity": "HIGH",
      "file": "glc-base.css",
      "action": "Search 'STATS — Display-Scale Typography (v2)' → delete entire block"
    },
    {
      "id": "about-ab3-plus-v2-overrides",
      "severity": "MEDIUM",
      "file": "glc-base.css",
      "action": "Search '.about__' in all TSX → if zero hits → delete v2 about block in glc-base.css"
    },
    {
      "id": "why-process-testimonials-cta-v2-cascade",
      "severity": "MEDIUM",
      "file": "glc-base.css",
      "action": "Search 'process-r2__' in TSX → if zero → delete four v2 blocks for #why #process #testimonials #cta-band"
    },
    {
      "id": "yellow-tint-token-replacement",
      "severity": "MEDIUM",
      "file": "glc-base.css",
      "action": "Search 'var(--yellow-tint)' → replace with var(--charcoal-tint). Search 'var(--yellow-tint-md)' → replace with var(--charcoal-tint-md)"
    }
  ],
  "sectionRegistry": [
    {
      "id": "stats-st3-dark-editorial",
      "status": "CANDIDATE",
      "displayName": "Stats — ST3 Dark Editorial Counter Band",
      "ground": "DSE",
      "classPrefix": "st3__ / .stat-cell / .stat-cell__*",
      "sectionElementId": "stats",
      "reactComponent": "glc-site/src/components/sections/stats-section.tsx",
      "cellChildClasses": {
        "number": ".stat-cell__num — RESOLVED PD-02: confirmed from DevTools inspection",
        "label": ".stat-cell__label",
        "subline": ".stat-cell__sub — RESOLVED PD-02: confirmed from DevTools inspection"
      },
      "motion": {
        "observerThreshold": 0.5,
        "countUpMs": 1800,
        "cellHoverMs": 300,
        "barRevealMs": 500
      },
      "sideLabel": {
        "text": "Performance — hardcoded in stats-section.tsx",
        "opacity": "rgba(255,255,255,0.20)"
      },
      "spacing": {
        "desktop": "56px 32px",
        "tablet": "48px 24px",
        "mobile": "40px 16px"
      },
      "responsive": {
        "640": "tighter padding; num clamp(44px,11vw,60px)",
        "1024": "hide side-label; 2×2"
      },
      "layerStack": [
        "#stats charcoal-deep",
        "::before blueprint 80px",
        "st3__top-rail z2 3px yellow",
        "st3__inner z1",
        "st3__side-label 56px",
        "st3__grid 4-col",
        "Reveal.stat-cell",
        "stat-cell::after hover bar"
      ],
      "conflict": "stats-v3-vs-v2-cascade"
    },
    {
      "id": "about-ab3-editorial-split",
      "status": "CANDIDATE",
      "displayName": "About — AB3 Editorial Split",
      "ground": "LIGHT",
      "classPrefix": "ab3__",
      "sectionElementId": "about",
      "reactComponent": "glc-site/src/components/sections/about-section.tsx",
      "canonicalVariant": "WHITE — var(--white) is the only sanctioned ground for the canonical AB3 section",
      "experimentalVariants": "Dark and charcoal AB3 variants were built in design sandbox (session HTML preview). NOT ratified for production. If dark-ground about section is needed on a service page, create a new scoped section rather than overriding AB3.",
      "layerStack": [
        "#about white",
        "::before hairline 64px",
        "ab3__wm ghost z0",
        "ab3__layout 55/45",
        "ab3__copy::before yellow pin",
        "ab3__top-row eyebrow+since",
        "ab3__heading-wrap h2+rule",
        "ab3__body",
        "ab3__creds 2×2",
        "btn-primary",
        "ab3__media charcoal clip-path",
        "ab3__badge z2",
        "ab3__chip z2",
        "ab3__corner-mark z2"
      ],
      "motion": {
        "chip": "framer whileInView 0.8s delay:0.5 ease:[0.22,1,0.36,1]",
        "credHover": "220ms charcoal-tint + border yellow"
      },
      "conflict": "about-ab3-plus-v2-overrides"
    },
    {
      "id": "hero-v2-flagship-asymmetric",
      "status": "CANDIDATE",
      "displayName": "Hero — V2 Flagship",
      "ground": "DSE",
      "classPrefix": "hero-v2__",
      "sectionElementId": "hero",
      "reactComponent": "glc-site/src/components/sections/hero-section.tsx",
      "layerStack": [
        "bg-plane+scrims parallax",
        "structure-plane blueprint",
        "diag-stripe yellow",
        "canvas grid",
        "photo-panel+chips",
        "content z4",
        "grain ::after",
        "service-bar"
      ]
    },
    {
      "id": "gl-parallax-type-band-shared",
      "status": "CANDIDATE",
      "displayName": "Parallax Type Band",
      "ground": "BOTH",
      "classPrefix": "gl-parallax-type-band__",
      "reactComponent": "glc-site/src/components/sections/parallax-type-band.tsx",
      "tones": "dark (charcoal scrim) | light (warm white scrim) — set via tone prop"
    },
    {
      "id": "exc-hub-parallax-cta-band",
      "status": "CANDIDATE",
      "displayName": "Excavation Hub — Parallax CTA Band",
      "ground": "DSE",
      "classPrefix": "exc-parallax-cta__",
      "reactComponent": "glc-site/src/components/services/excavation-parallax-cta.tsx"
    },
    {
      "id": "header-mega-services-panel-shell",
      "status": "CANDIDATE",
      "displayName": "Header — Services Mega Menu",
      "ground": "Frosted rgba(250,250,248,0.97) backdrop-blur — NOT full white; distinct from page surface",
      "classPrefix": "gl-mega-panel__ / gl-mega-card__"
    },
    {
      "id": "header-primary-nav-links-cluster",
      "status": "CANDIDATE",
      "displayName": "Header — Primary Nav Links",
      "ground": "LIGHT",
      "classPrefix": "gl-header__nav-links / gl-nav-mega-trigger",
      "tokensUsed": [
        "--text-600",
        "--charcoal-tint",
        "--charcoal-tint-md",
        "--yellow-core",
        "--ease-expo"
      ]
    },
    {
      "id": "services-home-grid-cards",
      "status": "CANDIDATE",
      "displayName": "Services — Homepage Grid",
      "ground": "LIGHT",
      "classPrefix": "services__ / service-card__",
      "sectionElementId": "services",
      "reactComponent": "glc-site/src/components/sections/services-grid-section.tsx",
      "layerStack": [
        "#services off-white + ::before 4px charcoal seam",
        "services__header 2-col",
        "services__grid-wrap left rail",
        "services__grid repeat(3,1fr) gap:2px",
        "service-card::before white lift",
        "card __num __icon __title __desc __link"
      ],
      "cardHover": "::before scaleY(0→1) 0.5s; --shadow-card; text inverts dark→white; charcoal-tint on hover bg"
    },
    {
      "id": "why-why3-editorial-manifesto",
      "status": "CANDIDATE",
      "displayName": "Why — Why3 Light Editorial",
      "ground": "LIGHT",
      "classPrefix": "why3__",
      "sectionElementId": "why",
      "reactComponent": "glc-site/src/components/sections/why-section.tsx",
      "hoverFill": "why3__hover-fill yellow-tint → UPDATE: now uses --charcoal-tint scaleX(0→1)",
      "conflict": "why-process-testimonials-cta-v2-cascade"
    },
    {
      "id": "process-proc3-split-timeline",
      "status": "CANDIDATE",
      "displayName": "Process — Proc3 Dark / White Split",
      "ground": "HYBRID",
      "classPrefix": "proc3__",
      "sectionElementId": "process",
      "reactComponent": "glc-site/src/components/sections/process-section.tsx",
      "layout": "38fr DSE left panel (charcoal-deep + blueprint) + 62fr white right panel (thread + nodes)",
      "conflict": "why-process-testimonials-cta-v2-cascade"
    },
    {
      "id": "coverage-dark-territory-band",
      "status": "CANDIDATE",
      "displayName": "Coverage — Territory Band",
      "ground": "DSE",
      "classPrefix": "coverage__",
      "sectionElementId": "coverage",
      "reactComponent": "glc-site/src/components/sections/coverage-section.tsx",
      "implementationNote": "backgroundColor set via inline React style var(--charcoal) — now confirmed as #2E2B28 alias of --charcoal-mid (CONFIRM_BEFORE_SHIP)"
    },
    {
      "id": "testimonials-tst3-editorial",
      "status": "CANDIDATE",
      "displayName": "Testimonials — Tst3 Pull Quote Grid",
      "ground": "LIGHT",
      "classPrefix": "tst3__",
      "sectionElementId": "testimonials",
      "reactComponent": "glc-site/src/components/sections/testimonials-section.tsx",
      "fontAccentUsage": "--font-accent Source Serif 4 italic: tst3__open-mark + tst3__featured-quote + tst3__card-mark",
      "conflict": "why-process-testimonials-cta-v2-cascade"
    },
    {
      "id": "cta-band-cta3-charcoal-close",
      "status": "CANDIDATE",
      "displayName": "CTA Band — Cta3 Charcoal Close",
      "ground": "DSE",
      "classPrefix": "cta3__",
      "sectionElementId": "cta-band",
      "reactComponent": "glc-site/src/components/sections/cta-band-section.tsx",
      "layerStack": [
        "#cta-band charcoal-deep",
        "::before blueprint 80px",
        "cta3__diag yellow skew 0.07",
        "cta3__inner z1 copy+actions",
        "cta3__bottom-bar 4px yellow"
      ],
      "conflict": "why-process-testimonials-cta-v2-cascade"
    },
    {
      "id": "footer-site-wide-gray-rail",
      "status": "CANDIDATE",
      "displayName": "Footer — Brand Grid + Legal Bar",
      "ground": "LIGHT",
      "classPrefix": "footer__",
      "domPath": "footer#footer",
      "reactComponent": "glc-site/src/components/layout/site-footer.tsx",
      "fontUsage": "--font-accent Source Serif 4 italic: footer__tagline",
      "layerStack": [
        "#footer gray-100 border-top 4px charcoal",
        "footer__main grid 280px+3×1fr",
        "footer__bar off-white legal"
      ]
    },
    {
      "id": "glc-snow-p14-midlower-cta",
      "status": "CANDIDATE",
      "displayName": "Commercial Snow — P14 Mid-Lower CTA Banner",
      "ground": "DSE",
      "classPrefix": "glc-snow-midlower-cta__ / glc-snow-btn",
      "reactComponent": "glc-site/src/components/services/commercial-snow-page-main.tsx",
      "revealNote": "glc-snow-reveal transition 0.28s — shorter than global 0.6s, intentional",
      "layerStack": [
        "div.reveal.glc-snow-reveal",
        "glc-snow-midlower-cta charcoal+shadow",
        "inner grid 1fr+auto",
        "copy.--accent border-left 4px yellow",
        "btns flex row"
      ]
    },
    {
      "id": "services-tab-container-stc1",
      "status": "CANDIDATE",
      "displayName": "Services — Sticky Tab Container",
      "ground": "BOTH",
      "classPrefix": "stc1__",
      "origin": "Built in design sandbox session; not yet in production codebase. Add to glc-base.css when implementing.",
      "referenceFile": "MY MASTER DESIGN SECTIONS/tab-container-preview.html",
      "layout": "Sticky tab rail (stc1__rail) + full-bleed panel per service (stc1__panel) with background image, overlay scrim, blueprint grid, SVG motifs, text column, and glass stat card",
      "tabRail": {
        "sticky": "top:0 z-index:50",
        "ground": "charcoal-deep — DSE rail on a page that may otherwise be light",
        "accent": "3px yellow-core left border + ::after grid-line texture",
        "label": "56px scoped section label left of tabs — matches st3__side-label pattern",
        "tabs": "stc1__tab — numbered (01–04) + label; ::after yellow scaleX active indicator; hover charcoal-tint-dark"
      },
      "panels": {
        "bg": "full-bleed background-image with slow scale(1.04) on active",
        "overlay": "linear-gradient 105deg charcoal opaque left → transparent right",
        "grid": "#stats-style blueprint texture",
        "motifs": "per-panel SVG geometric motifs (corner bracket, diagonal hash, triangle slab, crosshair) at ~0.06–0.12 opacity",
        "content": "grid 1fr 1fr: text column (eyebrow + Oswald heading + rule + body + feature list + CTA) + glass stat card (border-left 3px yellow, backdrop-blur)"
      },
      "svgMotifs": {
        "rule": "Each panel has a distinct SVG motif — corner bracket, concentric squares, structural triangle, diagonal grid. Rotate through these for visual variety. Keep opacity 0.06–0.12 so they read as texture not decoration.",
        "style": "All motifs use var(--yellow-core) stroke/fill only. No other colours."
      },
      "motion": {
        "panelEnter": "opacity + translateY(18px→0) 0.55s ease-expo on panel activation",
        "tabActive": "::after scaleX(0→1) from left 0.4s ease-expo",
        "bgScale": "transform scale(1.04) over 8s linear on active panel — subtle parallax drift"
      },
      "contentSchema": {
        "tabs": "Array of 4: { num, label, eyebrow, heading, accentWord, body, features[], cta{label,href}, stats[{value,suffix,label,sub}], backgroundImage }",
        "count": "Exactly 4 tabs. Adding a 5th requires a grid/layout review."
      },
      "tokensUsed": [
        "--charcoal-deep",
        "--charcoal-mid",
        "--yellow-core",
        "--gold",
        "--white",
        "--charcoal-tint",
        "--font-display",
        "--font-body",
        "--font-mono",
        "--ease-expo",
        "--section-v",
        "--container-max"
      ]
    }
  ],
  "forbiddenPatterns": [
    "No border-radius on section internals — always 0",
    "No --yellow-tint or --yellow-tint-md — use --charcoal-tint / --charcoal-tint-md",
    "No 'Courier New' as a font — use --font-mono (Source Code Pro) for all technical text",
    "No --font-mono below weight 500 at sizes ≤12px — too thin to read on both light and dark surfaces",
    "No Inter, Roboto, system-ui, Arial — Oswald / Plus Jakarta Sans / Source Serif 4 / Source Code Pro only",
    "No purple, blue, or teal accents — single accent: --yellow-core #F7C520",
    "No box-shadow on section shells — exception: --shadow-card on service-card interaction only",
    "No duplicate #id CSS blocks in glc-base.css",
    "No bare global utility classes inside section internals — use scoped prefix",
    "No inline styles in TSX except documented exceptions (CoverageSection intentional)",
    "No two DSE sections back-to-back without a light section between (exception: hero + stats pairing)",
    "No dark-first page design — light is always the primary ground; DSEs are enhancements"
  ],
  "auditCommands": [
    {
      "check": "Stats cascade",
      "search": "glc-base.css for 'STATS'. Count #stats blocks. Must be 1."
    },
    {
      "check": "Yellow-tint removal",
      "search": "glc-base.css for 'yellow-tint'. Must return 0 after replacement."
    },
    {
      "check": "Courier New removal",
      "search": "all CSS and TSX for 'Courier New'. Must return 0."
    },
    {
      "check": "About dead CSS",
      "search": "all TSX for '.about__'. Zero hits = safe to delete v2 block."
    },
    {
      "check": "V2 cascade blocks",
      "search": "for 'process-r2__', 'test-r2__', 'cta-r2__'. Delete if unused."
    },
    {
      "check": "Font compliance",
      "search": "section CSS for font-family. Must resolve to --font-display, --font-body, --font-accent, or --font-mono."
    },
    {
      "check": "DSE spacing",
      "verify": "Page section order. Flag any two consecutive DSE sections (except hero+stats)."
    },
    {
      "check": "Charcoal token confirm",
      "verify": "design_system.json: confirm --charcoal, --text-600, --shadow-card, --gap-grid, --gl-header-height."
    }
  ],
  "promotionChecklist": [
    "DONE — All 15 + 1 (stc1) sections registered",
    "DONE — All 7 pending decisions resolved",
    "DONE — --ease-expo locked: cubic-bezier(0.22, 1, 0.36, 1)",
    "DONE — stat-cell class names locked: __num and __sub",
    "DONE — Source Code Pro added as --font-mono, Courier New eliminated",
    "DONE — Theme: light-primary, DSE framework documented",
    "DONE — --charcoal-light #585653 from logo added",
    "DONE — --charcoal-tint + --charcoal-tint-md replace yellow tints",
    "DONE — All 4 CSS conflicts documented with explicit actions",
    "DONE — AB3 canonical = white-only; dark variants = experimental, not ratified",
    "CONFIRM_BEFORE_SHIP — Verify 5 token values in design_system.json",
    "TODO in Cursor — Resolve 4 CSS conflicts in glc-base.css",
    "TODO in Cursor — Replace all --yellow-tint references in glc-base.css",
    "TODO in Cursor — Implement stc1__ tab container if adopting that section",
    "FINAL — Retire section-dna-catchall.json from active Cursor reference"
  ]
}
```

---

## Appendix A — GLC SVG Motif System · Approval Preview (canonical **21**)

**Full markup:** Section **[3b](#3b-html--glc-svg-motif-system--approval-preview-complete-body)** embeds the complete preview **body** (all A1–D7 blocks, integration flow, approval footer) as a single fenced `html` block; the same fragment lives at **`clean-md-bundle/glc-motif-approval-preview-body.html`**. **CSS** for this preview is in Section **[3](#3-css--svg-motif-approval-preview-document-2)**.

**Source:** second HTML document in the combined export: **`GLC — SVG Motif System · Approval Preview`**. The top bar badges include **`glc-unified-v2 tokens`**, **`21 motifs`**, **`zero border-radius`**, **`hover cards interactive`**.

### What “21 motifs” means (do not confuse with disk files)

The **21** are **named composition patterns** (IDs **A1–A6**, **B1–B5**, **C1–C3**, **D1–D7**). They are implemented in the preview mainly as:

- **Inline `<svg>`** polygons and rules (hero sweeps, dividers, micro UI),
- **`clip-path`**, **buttons**, **stats**, **section seams**,
- **Optional** exported `.svg` files dropped into **class slots** (e.g. `.motif-corner` on `stc1__panel`) — see approval footer: *“SVG files go to `/public/svg/`”*.

They are **not** the same thing as a separate inventory of **watermark file names** under `/images/motifs/watermarks/*.svg`. Treat **this table** as the motif system contract; treat **file exports** as **pluggable assets** where the preview assigns slots.

### Verification checklist — all 21 IDs

| ID | Name (from preview labels) | Role |
| --- | --- | --- |
| **A1** | Hero Full Sweep (forward, left → right) | DSE hero: 3 polygon planes + parallax classes `a1` / `a2`, yellow drift |
| **A2** | Hero Sweep Reversed | Same language, mirrored geometry; service variant |
| **A3** | Section Divider | Light ↔ dark seam; angled SVG band, yellow thread |
| **A4** | Footer Cap | Angled cap geometry at footer zone |
| **A5** | Thin Accent Strip / Angled rule | Typography underline (Oswald), small SVG rule |
| **A6** | Diagonal Strip (BG watermark) | DSE-only diagonal wash, **6–10% opacity max** |
| **B1** | `.motif-corner` | stc1 panel: bottom-right, ~200px, **~12%** opacity |
| **B2** | `.motif-slash` | Top-right slash stack, **~8%** |
| **B3** | `.motif-cross` | Center-right cross, **~6%** |
| **B4** | `.motif-triangle` | Bottom-left triangle, **~8%** |
| **B5** | Inverted corner + light card | ab3 chip / dark card; **hcard** hover corner on light |
| **C1** | Watermark — light section | Very light angular shape on **white** (~2.5% opacity note in preview) |
| **C2** | Watermark — layered depth (DSE) | Three-plane yellow wash on dark |
| **C3** | Watermark — parallax animated | Hero-only; **one per page**; `a1`/`a2` drift |
| **D1** | Micro — photo clip-path | Shard / corner-cut photo treatments |
| **D2** | Micro — `btn-p` / `btn-g` | Primary + ghost buttons, sheen |
| **D3** | Micro — Sharp Slice | Aggressive thin yellow slice (max use per preview notes) |
| **D4** | Micro — Block + slash stat | Stat number + vertical slash |
| **D5** | Micro — Angled heading rule | Section title underline SVG |
| **D6** | Micro — Split seam divider | DSE \| light column seam |
| **D7** | Micro — Animated sweep | Two polygons drifting (hero-only cadence) |

**Plus** (chrome, not always counted in the 21): **Top bar** (`topbar`, badges), **lstrip** label rows between blocks, **Integration Preview** flow, **Approval footer** copy.

### Relationship to optional file exports

- **Inline compositions** above = the **authoritative** visual language for the 21 IDs.
- **Separate `.svg` files** (e.g. under `public/images/motifs/` or `public/svg/`) exist to **populate CSS slots** or replace inline geometry where production build prefers assets — they **map to** B1–B4 / watermarks / dividers; they do **not** replace the **A1–D7 ID list**.

---

## Appendix B — Next.js `glc-site` vs static HTML export (implementation)

| Expectation from combined HTML export | In `glc-site` |
| --- | --- |
| Inline `<script>` (cursor, reveal, header scroll) | Does **not** run automatically; use **`use client`** + hooks / `<Reveal>` / Framer Motion as needed. |
| `body { cursor: none; }` | Not global; use **scoped** cursor only where spec requires (respect **`prefers-reduced-motion`**). |
| Raster photography | Not implied by the motif preview; use **`next/image`** + `remotePatterns` or files under `public/` when content needs photos. |

**Rule:** Any behavior described only in static HTML/JS must be **re-implemented** in React; the export is a **reference**, not an automatic runtime.
