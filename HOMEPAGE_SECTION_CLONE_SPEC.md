# GLC Homepage — Section DNA & Clone Specification

**Purpose:** Paste this document (or sections of it) into a build prompt to reproduce the **structure, rhythm, typography, motion, and branding** of the production homepage (`glc-site`), without drifting into generic “AI landing page” aesthetics.

**Canonical sources of truth (this repo):**

| Concern | Location |
|--------|----------|
| Section order & content props | `glc-site/src/content/pages/home.json` |
| Section → React mapping | `glc-site/src/components/sections/section-renderer.tsx` |
| Tokens, layout, all section CSS | `glc-site/src/styles/glc-base.css` (`:root` + section blocks) |
| Each section component | `glc-site/src/components/sections/*.tsx` |
| Shared primitives | `glc-site/src/components/ui/reveal.tsx`, `smart-link.tsx`, `icon-arrow.tsx` |

---

## 1. Non‑negotiable build rules (brand contract)

1. **Styling lives in `glc-base.css`.** Do not style homepage sections with Tailwind utility stacks, CSS modules, or ad‑hoc `style={{}}` on layout roots. (Small inline motion styles from Framer are allowed where the reference app uses them.)
2. **Use design tokens only** from `:root` in `glc-base.css` (e.g. `--charcoal-deep`, `--yellow-core`, `--font-display`, `--section-v`, `--ease-expo`). No one-off hex colors for structural surfaces.
3. **Typography roles:**
   - **Display / headings:** `var(--font-display)` — Oswald, uppercase for major headings unless a specific block says otherwise.
   - **Body:** `var(--font-body)` — Plus Jakarta Sans.
   - **Pull quotes / testimonial quote text:** `var(--font-accent)` — Source Serif 4, italic in testimonial cards.
4. **Geometry:** Border radius is **0** everywhere except decorative circles (per project rules).
5. **Motion easing:** Default product curve is **`cubic-bezier(0.22, 1, 0.36, 1)`** — exposed as `var(--ease-expo)`. Framer components often duplicate this as `const EASE = [0.22, 1, 0.36, 1]`.
6. **Layout scale:** `--container-max: 1200px`; vertical section rhythm `--section-v: 96px` (mobile often `--section-v-sm: 64px` per breakpoints in CSS).
7. **Internal navigation:** Use **`SmartLink`** / Next `Link` for internal routes; plain `<a href="tel:…">` / `mailto:` for phone and email where the reference does.
8. **Section uniqueness (product rule):** On a single page, **do not duplicate the same section layout pattern twice** (same “DNA” band). Each top-level section should have a **distinct** layout idiom.
9. **Accessibility:** Decorative layers use `aria-hidden`. Primary headings use real `<h1>` / `<h2>` with `aria-labelledby` on `<section>` where implemented.

---

## 2. Global primitives (used across sections)

### 2.1 Eyebrow (`.eyebrow`)

- **Markup pattern:** small label above the main heading.
- **CSS:** 11px, weight 800, uppercase, `letter-spacing: 0.15em`, accent color; **28×2px** gold rule before text via `::before`.
- **Variants:** `.eyebrow--on-dark` (muted on charcoal), `.eyebrow--dark` (charcoal rule for light shells).

### 2.2 Primary CTA (`.btn-primary`)

- Gold fill `var(--yellow-core)`, charcoal text, **13px**, weight 800, uppercase, `letter-spacing: 0.08em`, padding **14px 28px**.
- Hover: `var(--gold)`, lift, soft gold shadow; arrow nudges right (`.arrow`).
- **Always pair with `<IconArrow />`** where the reference component does.

### 2.3 Ghost CTA (`.btn-ghost`)

- Transparent, white text, hairline white border; **11px**, heavy tracking. Used on dark bands (e.g. final CTA band email button).

### 2.4 Hero-specific CTAs

Inside `.hero-v2__cta-row` the primary button is **not** the global default: it uses a **chamfer clip-path**, tighter tracking (**0.22em**), smaller type (**10.5px**), and a **shimmer** pseudo-element on hover. Secondary uses **`.btn-hero-glass`** (glass, mirrored chamfer, backdrop blur). **Clone these overrides, not generic buttons**, or the hero will look “off-brand.”

### 2.5 Scroll reveal (`.reveal`)

- Initial: `opacity: 0`, `translateY(28px)`.
- On intersect: class **`visible`** (IntersectionObserver in `use-reveal.ts`, threshold **0.1**, `rootMargin:0px 0px -40px 0px`).
- Stagger: `.reveal--delay-1` … `.reveal--delay-4` add **0.08s** steps of `transition-delay`.
- **`prefers-reduced-motion: reduce`:** elements become visible without waiting.

### 2.6 Framer Motion usage (where present)

- **Hero:** scroll-linked parallax on background, photo, text; headline line clip reveal; CTA hover scale.
- **About / Why / Process:** `whileInView` for chips, rows, steps.
- **Parallax band:** `useScroll` + `useSpring` on image and content.

---

## 3. Homepage assembly

### 3.1 Page shell

- `glc-site/src/app/page.tsx` renders `<main id="main-content">` → **`SectionRenderer`** with `sections` from `home.json` and **`megaCards`** from `navigation.json` (`megaMenu.cards`) for the services grid.

### 3.2 Canonical section order (production `home.json`)

1. **`hero`** — `HeroSection`, `#hero`, class **`hero-v2`**
2. **`stats`** — `StatsSection`, `#stats`, **st3** grid
3. **`marquee`** — `MarqueeBand`, trust ticker
4. **`about`** — `AboutSection`, `#about`, **ab3** editorial split
5. **`services`** — `ServicesGridSection`, `#services`, **`svlayer svlayer--dse`** + accordion deck
6. **`why`** — `WhySection`, `#why`, **`why-v3-shell`** + motifs
7. **`process`** — `ProcessSection`, `#process`, **proc3** split timeline
8. **`parallaxBand`** — `ParallaxTypeBand`, id `home-quote-band`, **`gl-parallax-type-band--dark`**
9. **`testimonials`** — `TestimonialsSection`, `#testimonials`, **tst3**
10. **`coverage`** — `CoverageSection`, `#coverage`, dark **coverage** band + density accordion
11. **`contactStrip`** — `ContactStripSection`, `#contact-strip`, **home-contact-strip**
12. **`ctaBand`** — `CtaBandSection`, `#cta-band`, **cta3** diagonal + phone slab

### 3.3 Light / dark rhythm (approximate)

- **Dark:** Hero (charcoal-deep stack), Services (DSE svlayer), Parallax (dark tone), Coverage (dark).
- **Light:** Stats (gray-100 / white cells), Marquee (dark bar but separator context), About (white), Why (light shell with motifs), Process (split: dark left / light right — follow CSS), Testimonials (white), Contact strip (light), CTA band (follows cta3).

When cloning: **never place two “DSE-weight” charcoal bands adjacent** without an **A3-class separator** (gold rail, mist band, marquee, or light section) — see project design-compliance rules.

---

## 4. Hero — `hero-v2` (full DNA)

**Component:** `glc-site/src/components/sections/hero-section.tsx`  
**Content schema:** `HeroProps` in `glc-site/src/content/types.ts`

### 4.1 Shell & viewport

- **Section:** `<section id="hero" className="hero-v2" aria-label="Hero">`
- **Min height:** `#hero.hero-v2` uses **`min-height: 100vh`** (not the generic `.hero-v2` **92svh** default used elsewhere).
- **Top padding:** `padding-top: calc(var(--gl-header-height) + 36px)` so content clears the fixed header (`--gl-header-height: 100px`).
- **Layout:** `display: flex; flex-direction: column; overflow: hidden;` Service bar is **`margin-top: auto`** (pinned to bottom of flex column).
- **Grain:** `hero-v2::after` full-bleed noise, low opacity, `mix-blend-mode: overlay`, `z-index: 10`.

### 4.2 Layer stack (bottom → top)

| Z order | Layer | Class / notes |
|--------|--------|----------------|
| 0 | Deep photo plane | `.hero-v2__bg-plane` — `motion.div`, `y` tied to scroll |
| | Default fill | `.hero-v2__bg-photo` (engineered texture if no `parallaxBackgroundImage`) |
| | Optional image | `.hero-v2__bg-photo--image` via inline `backgroundImage` |
| | Radial + left scrim | `.hero-v2__scrim-radial`, `.hero-v2__scrim-left` |
| 1 | Blueprint | `.hero-v2__structure-plane` — SVG `.hero-v2__blueprint` + `.hero-v2__eng-grid` |
| 2 | Yellow diagonal | `.hero-v2__diag-stripe` |
| 3 | Canvas | `.hero-v2__canvas` — CSS grid: content column + photo |
| | Photo column | `.hero-v2__photo-panel` — parallelogram clip, Next `Image`, `.hero-v2__photo-scrim` |
| | Chips | `.hero-v2__chips` on photo — stat chips + coverage chip |
| | Content column | `.hero-v2__content` — `motion.div`, `y` tied to scroll |
| 4 | Service bar | `.hero-v2__service-bar` — frosted dark bar, gold top border |

Parallax mapping (Framer): `useScroll` target section, offset `["start start","end start"]`; maps `scrollYProgress` → `bgY` **0%→38%**, `photoY` **0%→14%**, `textY` **0%→7%**, with **`useSpring`** (stiffness **80**, damping **30**).

### 4.3 Typography & headline logic

- **Vertical label:** `.hero-v2__vert-label` — rotated eyebrow along left rail; content = `eyebrow` prop.
- **Ghost logo:** `.hero-v2__ghost-mark` + **native `<img src="/images/glc-logo.png">`** (intentionally not `next/image` to avoid SSR/CSR mismatch).
- **H1:** `.hero-v2__headline` — **three lines** required for CSS nth-line scales:
  - Wrapper lines: `<span class="hero-v2__line-overflow" aria-hidden>` each containing `motion.span.hero-v2__line` or `.hero-v2__line--accent` for `emphasizeLine`.
  - **Base H1:** `font-size: clamp(52px, 9vw, 118px)`, weight 700, uppercase, tight leading.
  - **Line 1:** `.62em`, weight 500, opacity `.68`, wider tracking (`0.06em`) — “connector” line.
  - **Line 2:** typically **accent** — `var(--yellow-core)`.
  - **Line 3:** `.74em` — “resolution” line.
- **H1 motion:** `LINE_VARIANT` — clip from below (`clipPath: inset(110% 0% -10% 0%)` → open), staggered delays per line index.

**Content:** `home.json` uses `title.line1` / `line2` / `line3` and `emphasizeLine: 2` (“Concept” in gold).

### 4.4 Rule, subhead, lede

- **Rule:** `.hero-v2__rule` — **48×2px**, gradient gold fading right; scales in with delay ~0.55s.
- **Optional H2:** `.hero-v2__subheadline` — not used on current home JSON.
- **Lede:** `.hero-v2__lede-block` — **yellow left rail** (`border-left` gold tint). Split logic in TSX:
  - Split `lede` on **` — `** (space–em–dash–space): first part = lead, second = body.
  - If lead starts with **`Ground Level Contracting`**, wrap brand in `<strong class="hero-v2__lede-brand">`.
  - Second paragraph gets sentence case fix on first character.
- **Scroll mask on lede:** `maskImage` / `WebkitMaskImage` driven by `ledeMask` transform (gradient reveals more copy as you scroll).
- **Widths / type:** lede block `max-width: 460px`; lead line stronger white; body line smaller, muted (`hero-v2__lede-body` uses clamp ~11.5–13px, high line-height).

### 4.5 CTAs

- Row: `.hero-v2__cta-row`, gap **14px**, wrap allowed.
- **Primary:** `motion.a.btn-primary` + `IconArrow` — Framer `whileHover` / `whileTap`.
- **Secondary:** `MotionSmartLink.btn-hero-glass` — internal/hash link.

### 4.6 Photo chips

- Stat chips: map `stats[]` → `.hero-v2__chip` with `.hero-v2__chip-num` / `__chip-label`.
- Coverage: `.hero-v2__chip--coverage` with `.hero-v2__chip-eyebrow` + `.hero-v2__chip-tags` / `.hero-v2__chip-tag`.
- Motion: `CHIP_VARIANT` — spring, staggered from ~0.9s.

### 4.7 Service bar

- **Data:** `serviceBarSlugTitles[]` in JSON (slug + short title); icons from **`HeroServiceIcon`**; links `ROUTES.service(slug)`.
- **Motion:** `TILE_VARIANT` stagger ~1.1s + i×0.07s.
- **Tiles:** `.hero-v2__service-tile` — vertical stack icon + label; borders between; hover gold inset shadow.

### 4.8 Mobile behavior (CSS)

- At **≤768px**: canvas single column; photo becomes **absolute** background with opacity ~**0.35**; chips hidden; headline size `clamp(46px, 13.5vw, 80px)`; diagonal stripe hidden; ghost mark re-centered; service bar becomes horizontal scroll.

### 4.9 Hero copy constraints (for writers)

- **Eyebrow:** one line, title-case / sentence-case as in JSON; acts as **vertical rail** text (keep length reasonable).
- **H1:** three short words/lines work best; **middle line** is the brand “hero word.”
- **Lede:** Use **` — `** to separate **positioning sentence** from **service detail**; first clause should survive alone if body is omitted.
- **Stats labels:** short for chips; **two** stats + coverage chip is the default layout.
- **Coverage tags:** concise locality tokens (city / county names).

---

## 5. Stats — `#stats` / **st3**

**Component:** `stats-section.tsx`  
**Props:** `cells[]` with `target`, `afterNumber`, `format`, `label`, `sub`.

### 5.1 Structure

1. `.st3__top-rail` —3px gold-gradient rail.
2. `.st3__inner` flex:
   - `.st3__side-label` — vertical “Performance” label.
   - `.st3__grid` — **4 equal columns** on desktop.

### 5.2 Cells

- Each: `Reveal` + `.stat-cell` + `.stat-cell__num` (number + suffix in yellow span) + `__label` + `__sub`.
- **Delays:** `reveal--delay-1` … `3` on successive cells.

### 5.3 Visual system

- Section background **`var(--gray-100)`** with subtle **blueprint grid** via `#stats::before`.
- Cells white, **1px** gray borders, hover **2px** gold bottom accent (see `#stats .stat-cell::after`).

### 5.4 Implementation note

- `StatCellAnimated` exposes `data-target` for a counter; **no TSX observer** in-repo wires the digit-roll animation. Visual truth today is **static numeric content** inside the spans. CSS also contains optional **`#stats.stats-band`** “live” animations — classes are **not** currently applied from React. When cloning behavior, either wire the observer or treat numbers as static.

---

## 6. Marquee — **`.marquee-band`**

**Component:** `marquee-band.tsx`  
**Props:** `items: string[]`, optional `bandTone: "default" | "light"`.

### 6.1 Behavior

- Duplicated track: `[...items, ...items]` for seamless loop.
- **Animation:** `marquee-scroll` **56s** linear infinite; **pauses on hover**.
- **Reduced motion:** animation disabled.

### 6.2 Visual

- Default: dark translucent bar `rgba(20,18,16,0.92)`, gold **top border**, padding **6px 0**.
- Items: **10px**, semibold, uppercase, wide tracking, muted white; separators `.marquee-sep` (small gold dot).

---

## 7. About — `#about` / **ab3**

**Component:** `about-section.tsx`

### 7.1 Structure

- Full-width **light** section, **ghost watermark** `.ab3__wm` (“GLC”) ultra-subtle.
- `.ab3__layout` ~**55/45** split: `.ab3__copy` | `.ab3__media`.

### 7.2 Copy column

- Top row: `.eyebrow` + `.ab3__since` (years chip).
- Heading: `.ab3__heading` with `<em class="ab3__heading-em">` for gold accent fragment + `.ab3__heading-rule`.
- Body: `.ab3__body` — **max-width 46ch**, 15px, relaxed line-height, muted gray.
- Credentials: **2×2** `.ab3__cred` grid with index `0{i}` rail.
- CTA: `.btn-primary` + arrow.

### 7.3 Media column

- `.ab3__badge` yellow punch badge; `.ab3__photo` background image; `.ab3__chip` floating stat; `.ab3__corner-mark` accent.
- Chip uses **Framer** `whileInView` once.

### 7.4 Motion

- Progressive **`Reveal`** delays1–4 on copy blocks.

---

## 8. Services — `#services` / **`svlayer svlayer--dse`**

**Component:** `services-grid-section.tsx`  
**Props:** `eyebrow`, `headingLine1/2`, `intro` + **`cards: MegaMenuCard[]`** from navigation.

### 8.1 Structure

- Section class **`svlayer svlayer--dse`** (dark editorial shell).
- Decorative: `.cta3__diag`, `.services-band__top-accent`, `.svlayer__layers` (three sheets).
- Inner: `.svlayer__inner` grid — **copy**, **figure** (image bite), **deck** (accordion cards).

### 8.2 Copy column

- `.eyebrow.eyebrow--on-dark`
- `.services__heading.svlayer__headline` — line break between line1 and line2.
- `.services__intro` + **`<ul class="svlayer__scope">`**
- **Important:** Scope list items are **hardcoded in TSX** (`scopeItems` array), not from JSON — clone must preserve or consciously replace.
- `.services__kicker` closing line.

### 8.3 Figure

- Next `Image` in `.svlayer__figure` with `.svlayer__caption`.

### 8.4 Deck

- Each card: **`<details class="svlayer__card" name="home-service-lines">`** — native disclosure, not `display:none` accordion anti-pattern.
- Summary shows num + stacked titles + signal; panel has icon, description, CTA “Learn more” + arrow.

---

## 9. Why — `#why` / **why-v3**

**Component:** `why-section.tsx`

### 9.1 Structure

- `section.why-v3-shell.glc-motif-a6-watermark` + motif spans **b2/b4**.
- `.why-v3__container` — header grid + body grid.

### 9.2 Header

- Eyebrow `.eyebrow.eyebrow--dark`
- `.why-v3__heading` with `<em>` for stressed phrase + `.why-v3__header-body` intro paragraph.

### 9.3 Body

- **Left:** figure with real image + caption; **proof chip**; **primary CTA**.
- **Right:** vertical `.why-v3__rail`; **reason rows** `.why-v3__row` each with num, tag, title, text — **Framer** stagger `whileInView`.
- **Tags** in TSX are **hardcoded:** `["Logistics","Expertise","Coordination","Accountability"]` mapped by index.
- **Proof bar** metrics at bottom are **hardcoded** (“24-Hr”, “100%”, “Full Scope”).

---

## 10. Process — `#process` / **proc3**

**Component:** `process-section.tsx`

### 10.1 Structure

- `.proc3__layout` — **left dark panel** + **right light steps**.

### 10.2 Left

- Gold top accent `.proc3__left-accent`
- Eyebrow, heading (text + `.proc3__heading-accent` span), **intro paragraph**
- **Note:** Intro sentence is **hardcoded in TSX**, not from `home.json` steps.

### 10.3 Right

- Vertical thread `.proc3__thread`; each `.proc3__step` with `.proc3__node` and content (label, title, desc).
- Steps animate with Framer `whileInView` stagger.

---

## 11. Parallax type band — **`gl-parallax-type-band`**

**Component:** `parallax-type-band.tsx`  
**Home:** `tone: "dark"` → class **`gl-parallax-type-band--dark`**, `id: "home-quote-band"`.

### 11.1 Behavior

- Full-bleed image `.gl-parallax-type-band__media` with `y` spring; scrim overlay.
- Content `.gl-parallax-type-band__content` moves on complementary spring.
- Eyebrow, oversized title, optional subtitle, optional `.btn-primary` row.

---

## 12. Testimonials — `#testimonials` / **tst3**

**Component:** `testimonials-section.tsx`  
**Classes:** `testimonials-section testimonials-section--tst3 tst3`

### 12.1 Structure

- Light section, `padding: var(--section-v) 0`.
- Centered header: eyebrow row, `.tst3__heading` with `<em>` accent, `.tst3__lede` **max-width 62ch**.
- **3-column** grid (gap `--gap-grid` **2px**), `max-width: var(--container-max)`, horizontal padding **40px**.

### 12.2 Cards

- First card: **`tst3__card--featured`** (gold top border).
- Giant decorative quote mark, five gold stars, **italic Source Serif** quote body, divider, name (uppercase small), role (tiny).

### 12.3 CTA row

- `.tst3__cta` with `btn-primary` (hardcoded “Request a Quote” + tel).

### 12.4 Copy rules

- **Quotes:** long-form OK inside cards; keep **credible B2B detail** (sites, trades, geography).
- **Roles:** include geography or sector parenthetical — matches brand tone.

---

## 13. Coverage — `#coverage`

**Component:** `coverage-section.tsx` — `section.coverage.relative.overflow-hidden`

### 13.1 Structure

- FX layers: `.coverage__fx-radial`, `.coverage__fx-topbar`.
- `.coverage__inner.coverage__inner--sandbox` — label column + accordion column.
- Heading uses `Reveal` + `.coverage__heading` with `<em>`.
- **Accordion:** `glc-density-acc glc-density-acc--on-dark` — button expands panel with **`max-height` transition** (not `display:none`).

### 13.2 Copy pitfall

- Component **hardcodes** a short `.coverage__lede` paragraph in TSX; **`props.body` and `areas`** appear inside the accordion panel. When cloning content, align TSX and JSON or you will show conflicting copy.

### 13.3 Band CTA

- `.coverage__band-cta` uses **`glc-snow-btn glc-snow-btn--primary`**, not `btn-primary`.

---

## 14. Contact strip — `#contact-strip` / **home-contact-strip**

**Component:** `contact-strip-section.tsx`

### 14.1 Structure

- Light band with `.home-contact-strip__rail` + motif.
- `.home-contact-strip__inner` — copy column (eyebrow, heading, sub) + **actions grid** (phone, email, address lines, CTA).

### 14.2 CTAs

- Phone/email are **large typographic links** (classes `__phone`, `__email`), plus **`btn-primary`** for “Full contact form”.

---

## 15. CTA band — `#cta-band` / **cta3**

**Component:** `cta-band-section.tsx`

### 15.1 Structure

- `.cta3__diag` structural diagonal.
- `.cta3__inner` — **left copy** (eyebrow bar with rule, stacked heading with `<em>` emphasis line, sub) + **right actions** (big phone, divider, `btn-ghost` email).

### 15.2 Bottom bar

- `.cta3__bottom-bar` — decorative full-width bar.

---

## 16. Language, rhythm, and line-length (CPL) discipline

Use these **writer-facing rules** so new pages stay on-brand:

1. **Prefer `ch` caps from CSS:** Examples: about body **46ch**, testimonial lede **62ch**, hero lede block **~460px** with smaller type — aim **~45–68ch** for running text depending on shell.
2. **Sentence budgeting:** Avoid **>4 sentences** in a single undifferentiated block without a **list, rail, pull quote, or subheading** (per internal design-compliance guidance for long-form columns).
3. **Headings:** Display headings are **short, uppercased,1–3 lines**; emphasis is **one gold fragment** (`<em>` with `font-style: normal` where styled).
4. **Eyebrows:** Uppercase, **~2–8 words**, lead with sector + geography when SEO-relevant.
5. **Voice:** Direct, B2B construction PM/superintendent reader; **concrete nouns** (pads, trenches, municipalities, trades); avoid fluff adjectives.
6. **Geography:** Repeat **Barrie + Simcoe County + secondary markets** in hero and key sections for local SEO consistency (see `home.json` pattern).
7. **CTA verbs:** “Request a Quote”, “View Our Services”, “Discuss Your Project”, phone as **direct numeric CTA** on dark bands.

---

## 17. “Clone checklist” for prompts

When asking an AI to rebuild the homepage:

- [ ] Output **section order** exactly as §3.2.
- [ ] Implement **`hero-v2` layer stack** §4.2 with **three-line H1** §4.3 and **hero CTA overrides** §2.4.
- [ ] Use **JSON-driven** content for each section’s `props` shapes from `types.ts`.
- [ ] Respect **light/dark alternation** §3.3 and **A3 separators**.
- [ ] No Tailwind on layout; **token-aligned CSS** only.
- [ ] **`Reveal`** + Framer patterns match §2.5–2.6.
- [ ] **`SmartLink`** for internal routes; **`details/summary`** for services deck.
- [ ] Note all **hardcoded TSX copy** (services scope list, why tags/proof bar, process intro, coverage lede, testimonial CTA label) §8.2, §9.3, §10.2, §13.2, §12.3.

---

*End of specification. For file-level audits, see `GLC_Design_System_Audit.md`. For token authority, keep `glc-base.css` `:root` aligned with `.cursorrules` / `GLC_MASTER_SYSTEM.html`.*
