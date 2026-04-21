# Excavation-only hero — Visual Complexity Contract (VCC) + isolation

## Goal

Build a **non-shared** hero for [`/services/excavation-site-preparation/`](glc-site/src/app/services/excavation-site-preparation/page.tsx): **similar industrial premium feel** to the current flagship hero, but **visually and structurally unique** (not a clone of `.hero-v2`). It must satisfy the **GLC Visual Complexity Contract** below **within excavation-scoped files only**.

**Reference DOM today (to be replaced):** `main#main-content > section#hero .hero-v2__canvas` rendered by shared [`HeroSection`](glc-site/src/components/sections/hero-section.tsx). **End state:** `section#excavation-hub-hero` + `.exc-hub__*` only on this route.

---

## Non-negotiable: isolation boundary

**Do not modify:**

| Off-limits | Reason |
|------------|--------|
| [`hero-section.tsx`](glc-site/src/components/sections/hero-section.tsx) | Homepage + any `"hero"` `SectionRenderer` consumer. |
| [`.hero-v2` / `#hero` in `glc-base.css`](glc-site/src/styles/glc-base.css) | Site-wide styles. |
| Root [`layout.tsx`](glc-site/src/app/layout.tsx), [`glc-next-font-bridge.css`](glc-site/src/app/glc-next-font-bridge.css) | Global fonts/CSS variables. |
| [`types.ts`](glc-site/src/content/types.ts) `HeroProps` | Shared contract. |
| [`home.json`](glc-site/src/content/pages/home.json), [`section-renderer.tsx`](glc-site/src/components/sections/section-renderer.tsx) | Shared content / switch. |
| **Any other route or hub** (e.g. drainage hub) | Out of scope; **do not cite or edit** for this work. |

**Allowed:** excavation `page.tsx`, [`excavation-hub-seo.json`](glc-site/src/content/pages/excavation-hub-seo.json), **new** files under `glc-site/src/components/services/excavation-site-preparation/` and optional `app/services/excavation-site-preparation/layout.tsx` for fonts.

**Merge gate:** `git diff --name-only` ⊆ excavation folder + `excavation-hub-seo.json` + new files only.

---

## Uniqueness vs shared hero (differentiation audit prep)

The new hero should **not** read as “homepage hero with different copy.” Minimum differentiators (pick several, document in code comments):

- Distinct **composition**: e.g. different column balance, rail/typography hierarchy, or media placement (still not “plain 50/50 split only” per VCC cardinal sin — layer + motif + spec rail must break template feel).
- Distinct **motif set** usage (corner brackets vs crosshair vs slash) at contract opacities, **edge-anchored**, not centered.
- **Ghost watermark** as **Oswald keyword** (VCC), not necessarily the logo treatment used on home.
- **Service / wayfinding rail** must **not** be six equal tiles (VCC: no equal-weight identical card grids) — use one **featured** link + secondary cluster, or staggered widths / spec labels.

---

## VCC → implementation mapping (all inside `.exc-hub` / `#excavation-hub-hero`)

### Cardinal sins (hard avoid)

| Rule | Implementation notes |
|------|----------------------|
| No equal-weight identical card grids | Asymmetric service rail; stat “chips” vary width / hierarchy or merge into proof strip. |
| No centered stack on flat charcoal only | Maintain multi-plane stack (see layers). |
| Not **only** full-bleed horizontal split | Add vertical rail, ghost word, bracket, rule, spec labels — split may exist but cannot be the sole idea. |
| No single-layer dark bg | Base + blueprint + motif + (optional grain) count toward layers. |
| Body on dark ≤ `rgba(255,255,255,0.70)` | Lede, subhead, trust lines, chip copy; **full white reserved for display lines** per contract. |
| `border-radius: 0` | No rounded cards/buttons; decorative circles only if contract allows (prefer avoid new circles unless motif). |
| **No `box-shadow` on cards** | Chips/cards: **inset borders / layering only**; remove any inherited drop-shadow pattern from forked CSS. |
| CTAs | Reuse **visual language** of filled + ghost (chamfered industrial), **250ms ease-out** hovers per VCC (not spring scale). |
| Section height variety | Hero band: **feature** height (`min-height: 80vh` or `100vh`); avoid arbitrary px outside existing spacing scale where possible. |

### Layering (dark hero — minimum L1+L2+L3+L6, target full stack)

| Layer | Excavation implementation |
|-------|---------------------------|
| 1 Base | `background: var(--charcoal-deep)` on `#excavation-hub-hero.exc-hub` |
| 2 Blueprint | Grid/crosshatch at **~8–10%** effective opacity in scoped CSS |
| 3 SVG motif | Large partial motif (corner bracket / slash / crosshair) **10–20%**, **corner/edge anchored** |
| 4 Ghost | Oswald **word** watermark **~8–12%** (keyword from JSON, e.g. `SITE` / `DIG`) |
| 5 Photo | Panel + bg parallax images with **charcoal scrim** in 40–60% equivalent range |
| 6 Content | Headline, subhead, lede, CTAs |
| 7 Accents | Yellow rule; **Source Code Pro** micro-labels where spec text appears |

### Three-act Oswald headline

- Line / span classes: **200 / 600 / 700** with yellow on **emphasized** act (use `var(--yellow-core)`).
- Hero size: **`clamp(52px, 7vw, 96px)`** (VCC). **Load Oswald 200** in excavation segment layout (root layout must not change).

### Fonts (VCC table)

| Role | Font | Scope |
|------|------|--------|
| Display | Oswald 200/600/700 | Already global; add weight **200** in **excavation `layout.tsx` only** via `next/font`. |
| Dark body | Barlow 400/500 | `next/font` in excavation `layout.tsx`; apply only under `.exc-hub`. |
| Labels / spec | Source Code Pro 400 | same |
| Do not use | Source Serif 4, Inter, Roboto, Arial for this hero | — |

### Parallax (hero band)

Five rates on scroll (Framer `useScroll` + `useTransform`), **`prefers-reduced-motion` → no parallax**:

- Background image **0.3**
- Texture / blueprint plane **0.5**
- Motif plane **0.7**
- Ghost watermark **0.6**
- Content **1.0 fixed** (no extra translate on copy column)

### Scroll / hover motion

- Headline reveal: **~600ms ease-out**, **translateY 20px → 0**, opacity 0 → 1.
- Stagger chips / service items: **0, 100, 200, 300ms** where lists exist.
- Card hover: yellow rule **40px → 80px**; image **scale 1.02** with `overflow: hidden`; **350ms ease-out**.
- CTA hover: **250ms ease-out**; filled = slightly lighter yellow; ghost = border/text toward yellow + `rgba(247,197,32,0.08)` fill **or** map to repo yellow tint tokens if sticking to `var(--yellow-core)` (see token note).

### Card complexity (stat / proof chips)

Each chip must hit **≥3** of: blueprint texture feel, ghost number (Oswald 200), corner bracket SVG, thin yellow rule, Source Code Pro label, category tag, hover that **transforms** a sub-element (rule width, bracket opacity, number opacity 12% → 35%).

### Background rules (dark)

- Base `var(--charcoal-deep)`; blueprint **always**; large motif **partially cropped**; ghost word when keyword exists.
- **Scrims** on photos are allowed as overlays (not “section gradient fill”). Avoid full-section gradient fills as the sole background.

### 3-pass audit (before PR)

1. **Layer audit:** count ≥3 deep layers on dark hero.  
2. **Typography audit:** three-act weights; Barlow + SCP on dark/labels; no body > 0.70 white.  
3. **Differentiation audit:** must not look like generic contractor template; name the GLC-specific elements in PR description.

---

## Token conflict (VCC vs repo)

- VCC snippet lists `--yellow-core: #F7C520` and label yellow the same.  
- Repo [`.cursorrules`](.cursorrules) / [`glc-base.css`](glc-site/src/styles/glc-base.css) canonical yellow is **`#F2B705`** on `var(--yellow-core)`.

**Default for this implementation:** use **existing** `:root` tokens (`var(--yellow-core)`, `var(--charcoal-deep)`, etc.) so the excavation page stays on-brand with the rest of the GLC Next site. If product later mandates VCC hex exactly, introduce **`--exc-hub-yellow`** only on `#excavation-hub-hero` scope — **not** global `:root`.

---

## File / component checklist (execution)

1. **`ExcavationHubHero.tsx`** (`"use client"`) — markup + motion; props type **local** (extends shape of hero props inline, **not** `HeroProps` export).  
2. **`excavation-hub-hero.css`** — all `.exc-hub__` rules; **no** `.hero-v2` selectors. Finish any partial generated CSS; append VCC overrides (chip/button shadows, asym grid, headline clamp, body opacity).  
3. **`app/services/excavation-site-preparation/layout.tsx`** — `next/font` for Oswald **200**, Barlow, Source Code Pro; CSS variables scoped to wrapper class if needed.  
4. **`page.tsx`** — `import './excavation-hub-hero.css'` **or** import from component side; `pickSections(['about','marquee'])`; render `<ExcavationHubHero />` first.  
5. **`excavation-hub-seo.json`** — hero copy + `parallaxBackgroundImage`, `heroPanelImage`, `ghostWatermarkWord` (or agreed keys) **only** read by `ExcavationHubHero`.

---

## Execution progress — **9 VCC areas** (maps plan → done)

Use this when tracking “X of 9”; file checklist (1–5) is a subset of implementation work.

| # | Area | Status |
|---|------|--------|
| 1 | **Isolation** — no edits outside excavation paths + `excavation-hub-seo.json` | Done (merge gate) |
| 2 | **Layer stack** (base, blueprint, motif, ghost, photo scrims, content, accents) | Done |
| 3 | **Three-act Oswald** + **Barlow / SCP** on dark + body opacity caps | Done |
| 4 | **Parallax** — five rates + `prefers-reduced-motion` | Done |
| 5 | **Motion** — headline ~600ms ease-out; chip stagger; chip rule 40→80px; CTA 250ms; **photo hover scale 1.02** | Done |
| 6 | **Stat chip complexity** (≥3 signals each: ghost index, bracket, rule, SCP label, hover sub-transforms) | Done |
| 7 | **Asymmetric service rail** (featured first column, not equal cards) | Done |
| 8 | **VCC sins** — no outer drop-shadow on chips; inset/glass only; no spring scale on CTAs | Done (polish ongoing) |
| 9 | **3-pass audit** documented for PR (layer / typography / differentiation) | Done — audit text in `ExcavationHubHero.tsx` file header |

---

## Explicit non-goals

- No drainage hub references, files, or “align with drainage” parity work.  
- No shared hero regression tests against `HeroSection` unless running full site smoke manually.

---

*When execution is approved: implement the checklist above; keep `git diff` within the isolation boundary.*
