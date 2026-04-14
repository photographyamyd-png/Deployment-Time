# GLC Design System Audit — Homepage DNA

**Scope:** Production homepage route `glc-site/src/app/page.tsx` and every section emitted by `SectionRenderer` from `glc-site/src/content/pages/home.json`.  
**CSS source of truth:** `glc-site/src/styles/glc-base.css` (classes cited below are defined there unless noted).

**Page shell**

```tsx
<main id="main-content">
  <SectionRenderer sections={homeContent.sections} megaCards={navData.megaMenu.cards} />
</main>
```

**Section order (registry) and primary shell tokens**

| Order | `type` (JSON) | Component | Section `id` / root classes | Surface (token) |
|------|----------------|-----------|-------------------------------|-----------------|
| 1 | `hero` | `HeroSection` | `#hero.hero-v2` | DSE — `var(--charcoal-deep)` |
| 2 | `stats` | `StatsSection` | `#stats` | Light — `var(--gray-100)` + blueprint `::before` |
| 3 | `marquee` | `MarqueeBand` | (no id) `.marquee-band` | Dark rail — `rgba(20, 18, 16, 0.92)` |
| 4 | `about` | `AboutSection` | `#about` | Light — `var(--white)` |
| 5 | `services` | `ServicesGridSection` | `#services.svlayer.svlayer--dse` | DSE — `var(--charcoal-deep)` |
| 6 | `why` | `WhySection` | `#why.why-v3-shell.glc-motif-a6-watermark` | Light — `var(--off-white)` + A3 top seam |
| 7 | `process` | `ProcessSection` | `#process` | Split: left DSE / right white |
| 8 | `parallaxBand` | `ParallaxTypeBand` | `#home-quote-band.gl-parallax-type-band--dark` | Full-bleed image + scrim |
| 9 | `testimonials` | `TestimonialsSection` | `#testimonials.testimonials-section--tst3.tst3` | Light — `var(--white)` (variant overrides `#testimonials`) |
| 10 | `coverage` | `CoverageSection` | `#coverage.coverage` | DSE — `var(--charcoal)` |
| 11 | `contactStrip` | `ContactStripSection` | `#contact-strip.home-contact-strip` | Light — `var(--white)` |
| 12 | `ctaBand` | `CtaBandSection` | `#cta-band` | DSE — `var(--charcoal-deep)` |

---

## 1. Section architectures and background layers

Patterns the homepage uses: **stacked planes** (`z-index`), **pseudo-element textures** (`::before` / `::after`), **optional parallax** (`framer-motion` + `useScroll` / `useTransform` / `useSpring`), **diagonal charcoal planes** (`.cta3__diag`), **multi-sheet motifs** (`.svlayer__sheet--*`), and **scrims** (gradients over photography).

### 1.1 Hero (`hero-v2`) — depth stack

**Intent:** Background plane → blueprint SVG + engineering grid → yellow diagonal → content canvas (copy + clipped photo + chips) → grain `::after` on the section; bottom service bar.

Template (structure only; motion attrs optional):

```tsx
<section id="hero" aria-label="Hero" className="hero-v2">
  <motion.div className="hero-v2__bg-plane" style={{ y: bgY }} aria-hidden>
    <div className="hero-v2__bg-photo" /> {/* or hero-v2__bg-roll + hero-v2__bg-photo--image */}
    <div className="hero-v2__scrim-radial" />
    <div className="hero-v2__scrim-left" />
  </motion.div>

  <div className="hero-v2__structure-plane" aria-hidden>
    <svg className="hero-v2__blueprint" viewBox="0 0 600 600" /* … */ />
    <div className="hero-v2__eng-grid" />
  </div>

  <div className="hero-v2__diag-stripe" aria-hidden />

  <div className="hero-v2__canvas">
    <motion.div className="hero-v2__photo-panel" /* parallax + entrance */ aria-hidden>
      <Image /* fill */ />
      <div className="hero-v2__photo-scrim" />
      <div className="hero-v2__chips">{/* .hero-v2__chip, .hero-v2__chip--coverage */}</div>
    </motion.div>

    <motion.div className="hero-v2__content" style={{ y: textY }}>
      <motion.div className="hero-v2__vert-label" aria-hidden>{/* eyebrow as vertical rail */}</motion.div>
      <div className="hero-v2__ghost-mark" aria-hidden>{/* watermark img */}</div>
      <h1 className="hero-v2__headline">
        <span className="hero-v2__line-overflow" aria-hidden>
          <motion.span className="hero-v2__line hero-v2__line--accent">{/* line */}</motion.span>
        </span>
      </h1>
      <motion.div className="hero-v2__rule" />
      <motion.div className="hero-v2__lede-block" style={{ maskImage: ledeMask }}>
        <p className="hero-v2__lede-lead">{/* <strong className="hero-v2__lede-brand"> */}</p>
        <p className="hero-v2__lede-body" />
      </motion.div>
      <motion.div className="hero-v2__cta-row">{/* .btn-primary, .btn-hero-glass */}</motion.div>
    </motion.div>
  </div>

  <div className="hero-v2__service-bar">
    <div className="hero-v2__service-inner">
      <SmartLink className="hero-v2__service-tile" href={/* … */}>{/* icon + .hero-v2__service-label */}</SmartLink>
    </div>
  </div>
</section>
```

**Depth mechanisms (CSS):** `hero-v2__bg-plane` at `z-index: 0`; structure plane and diagonal above it; canvas content above; section `::after` grain at `z-index: 10` with `mix-blend-mode: overlay`. Scrims: `hero-v2__scrim-radial`, `hero-v2__scrim-left`, `hero-v2__photo-scrim`.

### 1.2 Stats (`st3__*`)

Light band with **top yellow rail**, **vertical side label**, **4-up grid**.

```tsx
<section id="stats" aria-label="Company statistics">
  <div className="st3__top-rail" aria-hidden />
  <div className="st3__inner">
    <div className="st3__side-label" aria-hidden>
      <span>Performance</span>
    </div>
    <div className="st3__grid">
      <Reveal className="stat-cell" delayClass="reveal--delay-1">
        <span className="stat-cell__num" data-target={…} data-format={…}>…</span>
        <span className="stat-cell__label">…</span>
        <span className="stat-cell__sub">…</span>
      </Reveal>
    </div>
  </div>
</section>
```

### 1.3 Marquee (trust ticker)

Thin full-width band; duplicated items for seamless scroll.

```tsx
<div className="marquee-band" aria-hidden="true">
  <div className="marquee-track">
    <span className="marquee-item">
      {item}
      <span className="marquee-sep" />
    </span>
  </div>
</div>
```

Variant: `marquee-band marquee-band--light` (A3-style light separator — used elsewhere; **home JSON uses default dark rail**).

### 1.4 About (`ab3__*`) — editorial split, watermark, and two-column layout; **no** `about__*` prefix on homepage (that family is service-template copy).

```tsx
<section id="about" aria-labelledby="about-heading">
  <span className="ab3__wm" aria-hidden>GLC</span>
  <div className="ab3__layout">
    <div className="ab3__copy">…</div>
    <div className="ab3__media">
      <div className="ab3__badge" aria-hidden><span>…</span></div>
      <div className="ab3__photo" role="img" aria-label="…" />
      <motion.div className="ab3__chip" aria-hidden>…</motion.div>
      <div className="ab3__corner-mark" aria-hidden />
    </div>
  </div>
</section>
```

### 1.5 Services hub band (`svlayer` + `cta3__` accents)

Homepage services use **`#services.svlayer.svlayer--dse`**: charcoal shell, blueprint `::before`, ghost `GLC` `::after` (shared block with `#cta-band`), **skewed charcoal plane** `.cta3__diag`, three decorative sheets, then content.

```tsx
<section id="services" className="svlayer svlayer--dse" aria-labelledby="services-heading">
  <div className="cta3__diag" aria-hidden />
  <div className="services-band__top-accent" aria-hidden />
  <div className="svlayer__layers" aria-hidden>
    <span className="svlayer__sheet svlayer__sheet--back" />
    <span className="svlayer__sheet svlayer__sheet--mid" />
    <span className="svlayer__sheet svlayer__sheet--front" />
  </div>

  <div className="svlayer__inner">
    <div className="svlayer__copy">…</div>
    <figure className="svlayer__figure">
      <div className="svlayer__figure-bite" aria-hidden />
      <div className="svlayer__figure-frame">
        <div className="svlayer__figure-fill">
          <Image className="svlayer__img" fill /* … */ />
        </div>
      </div>
      <figcaption className="svlayer__caption">…</figcaption>
    </figure>
    <div className="svlayer__deck">{/* <details className="svlayer__card"> … */}</div>
  </div>

  <div className="cta3__bottom-bar" aria-hidden />
</section>
```

**Note:** Under `svlayer--dse`, the vertical `.svlayer__sheet--mid` spine is **hidden** in CSS; yellow emphasis moves to `.svlayer__figure-bite` and top/bottom `cta3` bars.

### 1.6 Why (`why-v3-shell`) — motif slots + header seam

```tsx
<section id="why" className="why-v3-shell glc-motif-a6-watermark" aria-labelledby="why-heading">
  <span className="glc-motif-b2 why-v3__motif-b2" aria-hidden />
  <span className="glc-motif-b4 why-v3__motif-b4" aria-hidden />
  <div className="why-v3__container">
    <div className="why-v3__header">…</div>
    <div className="why-v3__body-grid">
      <div className="why-v3__feature">{/* figure.why-v3__media */}</div>
      <div className="why-v3__reasons-col">
        <div className="why-v3__rail" aria-hidden />
        <div className="why-v3__rows">…</div>
        <div className="why-v3__proof-bar">…</div>
      </div>
    </div>
  </div>
</section>
```

`#why.why-v3-shell::before` is the **A3 seam** (3px `var(--charcoal-deep)`) after the dark services band.

### 1.7 Process (`proc3__*`) — split editorial / timeline

Single section, **two surfaces**: dark left panel (blueprint lines), white right steps panel with vertical **thread** `.proc3__thread`.

```tsx
<section id="process" aria-labelledby="process-heading">
  <div className="proc3__layout">
    <div className="proc3__left-panel">
      <div className="proc3__left-accent" aria-hidden />
      {/* eyebrow, heading, intro, proc3__count-mark */}
    </div>
    <div className="proc3__steps-panel">
      <div className="proc3__thread" aria-hidden />
      <motion.div className="proc3__step">
        <div className="proc3__node" aria-hidden><span>01</span></div>
        <div className="proc3__step-content">
          <div className="proc3__step-label">Step 01</div>
          <div className="proc3__step-title">…</div>
          <p className="proc3__step-desc">…</p>
        </div>
      </motion.div>
    </div>
  </div>
</section>
```

### 1.8 Parallax type band

Full-bleed **`gl-parallax-type-band__media`** (absolute, parallax `y`) + **`gl-parallax-type-band__media-scrim`** + foreground **`gl-parallax-type-band__content`**.

```tsx
<section
  ref={sectionRef}
  id="home-quote-band"
  className="gl-parallax-type-band gl-parallax-type-band--dark"
  aria-labelledby="home-quote-band-heading"
>
  <motion.div className="gl-parallax-type-band__media" style={{ y: imgY }} aria-hidden>
    <Image className="gl-parallax-type-band__img" fill />
    <div className="gl-parallax-type-band__media-scrim" />
  </motion.div>
  <motion.div className="gl-parallax-type-band__content" style={{ y: textY }}>
    <p className="gl-parallax-type-band__eyebrow">…</p>
    <h2 id="home-quote-band-heading" className="gl-parallax-type-band__title">…</h2>
    <p className="gl-parallax-type-band__subtitle">…</p>
    <div className="gl-parallax-type-band__cta-row">
      <a className="btn-primary" href="tel:…">…</a>
    </div>
  </motion.div>
</section>
```

### 1.9 Testimonials (`tst3`)

Centered header + 3-column card grid; cards use hover border/shadow.

### 1.10 Coverage — FX layers + sandbox grid

```tsx
<section id="coverage" className="coverage relative overflow-hidden" aria-labelledby="coverage-heading">
  <span aria-hidden className="coverage__fx-radial" />
  <span aria-hidden className="coverage__fx-topbar" />
  <div className="coverage__inner coverage__inner--sandbox">…</div>
  <div className="coverage__band-cta">…</div>
</section>
```

### 1.11 Contact strip — light separator

```tsx
<section id="contact-strip" className="home-contact-strip" aria-labelledby="contact-strip-heading">
  <div className="home-contact-strip__rail" aria-hidden />
  <div className="home-contact-strip__motif" aria-hidden />
  <div className="home-contact-strip__inner">…</div>
</section>
```

### 1.12 CTA band (`cta3__*`) — closing DSE

Same **`.cta3__diag`** / **`.cta3__bottom-bar`** vocabulary as services band; inner two-column grid for copy vs phone/email.

```tsx
<section id="cta-band" aria-labelledby="cta-heading">
  <div className="cta3__diag" aria-hidden />
  <div className="cta3__inner">
    <div className="cta3__copy">
      <div className="cta3__eyebrow-bar" aria-hidden>
        <span className="cta3__eyebrow">…</span>
        <span className="cta3__eyebrow-line" />
      </div>
      <h2 id="cta-heading" className="cta3__heading">…<em>…</em></h2>
      <p className="cta3__sub">…</p>
    </div>
    <div className="cta3__actions">…</div>
  </div>
  <div className="cta3__bottom-bar" aria-hidden />
</section>
```

### 1.13 `service-hub__visual-slab` (not on homepage)

That class appears in **service hub** views (e.g. `service-hub-overview.tsx`, drainage hub). It is **not** part of the homepage DOM. Use **`svlayer__figure-bite`**, **`ab3__media`**, or **`why-v3__media`** for homepage media framing references.

---

## 2. Typography stack and fragmentation

### 2.1 Shared eyebrow (`.eyebrow`)

Base pattern in CSS: uppercase body label with `::before` rule.

- **On dark:** `.eyebrow.eyebrow--on-dark` (e.g. services: `<div className="eyebrow eyebrow--on-dark">`).
- **On light (charcoal text):** `.eyebrow.eyebrow--dark` (e.g. why header).

Testimonials wrap label as: `<div className="eyebrow"><span>{props.eyebrow}</span></div>` inside `.tst3__eyebrow-row`.

### 2.2 Fragmented headings

| Location | Pattern |
|----------|---------|
| Hero | Three lines in `<h1 className="hero-v2__headline">`; accent via `.hero-v2__line--accent` on emphasized line (not `<em>`). |
| About | `<h2 className="ab3__heading">{before}<em className="ab3__heading-em">{accent}</em>{after}</h2>` + `<span className="ab3__heading-rule" aria-hidden />`. |
| Services | `<h2 className="services__heading svlayer__headline">{line1}<br /><span>{line2}</span></h2>`. |
| Why | `<h2 className="why-v3__heading">{before}<em>{emphasis}</em>{after}</h2>` (`em` block accent in CSS). |
| Process | `<h2 className="proc3__heading">{heading}<span className="proc3__heading-accent">{accent}</span></h2>`. |
| Parallax band | Single `<h2 className="gl-parallax-type-band__title">` (no fragment). |
| Testimonials | `<h2 className="tst3__heading">{before}<em>{accent}</em>{after}</h2>`. |
| Coverage | `<h2 className="coverage__heading">{before}<em>{emphasis}</em>{after}</h2>` with `.glc-motif-heading-rule.coverage__band-rule`. |
| CTA | `<h2 className="cta3__heading">…<br />…<em>…</em></h2>`. |

### 2.3 Contact strip “eyebrow”

Uses **`home-contact-strip__eyebrow`** (`<p>`), not `.eyebrow` — intentional variant for the light rail strip.

### 2.4 Dividers

- **About:** `.ab3__heading-rule` (span, aria-hidden).
- **Testimonials cards:** `.tst3__divider` between quote and attribution.
- **CTA actions column:** `.cta3__divider` (aria-hidden).

---

## 3. Copy density and expansion (two-sentence rule)

### 3.1 Canonical rule (shared library)

`glc-site/src/lib/copy-density.ts` — **`splitFirstTwoSentences`**: first **two** sentences (`.`, `!`, `?` followed by space or end) stay visible; **third and later** sentences form the **remainder**. If the paragraph has ≤2 sentences, remainder is `null` (no expander).

### 3.2 `service-cap-readmore` pattern (service / hub pages — template)

Used e.g. in `drainage-typography.tsx` and `service-layout-variants.tsx`. Homepage does **not** mount this class; included here as the strict expander template the repo uses elsewhere:

```tsx
<p className={ledeClassName}>{lead}</p>
<details className="service-cap-readmore glc-drain-hub__readmore">
  <summary>Technical depth &amp; field notes</summary>
  <div className="service-cap-readmore__inner">
    {remainder ? <p className={innerClassName}>{remainder}</p> : null}
    {/* additional paragraphs */}
  </div>
</details>
```

`service-layout-variants.tsx` additionally truncates long leads with `slice(0, 198)` + `…` before the `<details>` when `leadLong || hasMoreBody`.

### 3.3 Homepage expanders (actual)

**A) Services accordion deck** — native `<details>` per card, **radiogroup behavior** via `name="home-service-lines"`:

```tsx
<details className="svlayer__card" name="home-service-lines">
  <summary className="svlayer__card-summary">
    <span className="svlayer__card-num" aria-hidden>{card.num}</span>
    <span className="svlayer__card-titles">
      {card.gridTitle.map((line) => (
        <span key={line} className="svlayer__card-title-line">{line}</span>
      ))}
    </span>
    <span className="svlayer__card-signal" aria-hidden />
  </summary>
  <div className="svlayer__card-panel">
    <ServiceCardIcon slug={card.slug} />
    <p className="svlayer__card-desc">{card.gridDescription}</p>
    <a className="svlayer__card-cta" href={…}>Learn more<IconArrow /></a>
  </div>
</details>
```

**B) Coverage territory narrative** — **button + region** with **`maxHeight` animation** (not `display: none`):

```tsx
<div className="glc-density-acc glc-density-acc--on-dark" id="coverage-coverage-acc">
  <button
    type="button"
    id="coverage-coverage-sum"
    className="glc-density-acc__trigger"
    aria-expanded={expanded}
    aria-controls="coverage-coverage-panel"
    onClick={() => setExpanded((v) => !v)}
  >
    <span className="glc-density-acc__chev" aria-hidden />
    <span className="coverage__acc-h">Full territory & market details</span>
  </button>
  <div
    id="coverage-coverage-panel"
    role="region"
    aria-labelledby="coverage-coverage-sum"
    className="glc-density-acc__panel-outer"
    style={{
      overflow: "hidden",
      maxHeight: expanded ? "1200px" : 0,
      transition: "max-height 320ms var(--ease-expo)",
    }}
  >
    <div className="glc-density-acc__panel-inner">
      <p className="coverage__panel-body">{props.body}</p>
      <div className="coverage__areas" role="list">…</div>
    </div>
  </div>
</div>
```

---

## 4. Image framing and media shells

### 4.1 Hero photo

`hero-v2__photo-panel` (absolute, parallelogram clip via motion) → `next/image` fill → `hero-v2__photo-scrim`.

### 4.2 About (`ab3__media`)

**Not** `about__media-shell` (homepage). Structure: `.ab3__media` → `.ab3__badge` → `.ab3__photo` (CSS background) → `.ab3__chip` → `.ab3__corner-mark`. Pseudo-element frame: `.ab3__media::before` in CSS.

### 4.3 Services figure column

`.svlayer__figure` → `.svlayer__figure-bite` (yellow seam) → `.svlayer__figure-frame` → `.svlayer__figure-fill` → `.svlayer__img` + `.svlayer__caption`.

### 4.4 Why feature

`figure.why-v3__media` → `Image.why-v3__media-img` → `figcaption.why-v3__media-cap` + `::after` frame treatment in CSS.

### 4.5 Parallax band

`.gl-parallax-type-band__media` (absolute, inset overflow) → image → `.gl-parallax-type-band__media-scrim`.

### 4.6 Service-template naming (cross-reference only)

Service variants use **`about__*`** + **`service-cap-split__*`** together (e.g. `about__copy`, `about__divider`, `service-cap-split__media-slab`). Those are **not** imported on the homepage About section (`ab3__*` only).

---

## 5. Interactive and reactive patterns

### 5.1 Scroll reveal (`.reveal` + `Reveal` component)

`glc-site/src/components/ui/reveal.tsx` renders:

```tsx
<Tag ref={ref} className={`reveal${delay ? ` ${delay}` : ""} ${className}`.trim()}>
  {children}
</Tag>
```

`glc-site/src/hooks/use-reveal.ts` uses **`IntersectionObserver`** (`threshold: 0.1`, `rootMargin: 0px 0px -40px 0px`); on intersect, adds class **`visible`**. **`prefers-reduced-motion: reduce`** → adds `visible` immediately.

**CSS** (`glc-base.css`):

```css
.reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s var(--ease-expo), transform 0.65s var(--ease-expo); }
.reveal.visible { opacity: 1; transform: none; }
.reveal--delay-1 { transition-delay: 0.08s; }
/* … through reveal--delay-4 */
```

**Home usage:** About, Services copy, Why header + feature, Process left column, Coverage headings, Stats cells (`StatCellAnimated` wraps `.reveal`).

### 5.2 Framer Motion

- **Hero:** scroll-linked parallax on bg/photo/text; lede **mask** via `useTransform` on `scrollYProgress`; line/photo/chip **variants**.
- **Why rows:** `motion.div.why-v3__row` with `whileInView` stagger.
- **Process steps:** `motion.div.proc3__step` with `whileInView`.
- **About chip:** `motion.div.ab3__chip` with `whileInView`.
- **Parallax band:** image and content `y` springs tied to `scrollYProgress`.
- **CTAs:** `whileHover` / `whileTap` on primary buttons in hero.

### 5.3 Hover states

- **`#stats .stat-cell`:** `::after` accent + hover background (see `#stats .stat-cell:hover` in CSS).
- **`svlayer__card`:** summary hover/focus-within background (DSE tokens).
- **`tst3__card`:** `border-color` + `box-shadow` on hover; featured modifier `tst3__card--featured`.
- **`proc3__step`:** background expand on hover; node color transition.
- **`why-v3__row`:** `.why-v3__row-bg` + rail/num/tag animations on hover.

### 5.4 Tabs / accordion

- **Homepage:** Services use **`<details class="svlayer__card">`** (native accordion). Coverage uses **`glc-density-acc`** button panel (see §3.3). No **ST1** tab rail on the homepage.

### 5.5 “Sticky side panel”

The stats **`.st3__side-label`** is a **fixed-width vertical typographic rail** in a flex row, not `position: sticky` in the shipped CSS. For true sticky aside patterns, check other routes; homepage DNA is the **rail + grid** composition.

---

## 6. Dark / light section rhythm

**Observed homepage alternation (full-width bands):**

1. **DSE** — Hero (`--charcoal-deep`)  
2. **Light** — Stats (`--gray-100`)  
3. **Dark accent rail** — Marquee (narrow; breaks light-to-light adjacency)  
4. **Light** — About (`--white`)  
5. **DSE** — Services (`svlayer--dse`, `--charcoal-deep`)  
6. **Light** — Why (`--off-white`) + **A3** `#why.why-v3-shell::before` (3px charcoal seam)  
7. **Split** — Process: DSE left + white right (single section, internal contrast)  
8. **Image band** — Parallax (`--dark` scrim; reads as dramatic mid-page break)  
9. **Light** — Testimonials (`tst3` sets `--white`)  
10. **DSE** — Coverage (`--charcoal`)  
11. **Light** — Contact strip (`--white`)  
12. **DSE** — CTA (`--charcoal-deep`)

**Approved registry note (from project rules):** Hero (DSE) may sit **back-to-back** with Stats (DSE-family exception for stats is **light** on home — so the “double DSE” exception applies when stats is also dark; **here stats is light**, so the pair is Hero → Stats = DSE → light, which is standard). Marquee provides separation before About.

**Repeated motifs across DSE bands:** `cta3__diag`, `cta3__bottom-bar`, blueprint grids, ghost `GLC` watermark (`#cta-band::after` and `#services.svlayer.svlayer--dse::after` share the same treatment block in CSS).

---

## Source index (implementations)

| File | Role |
|------|------|
| `glc-site/src/app/page.tsx` | Home route; `main#main-content` |
| `glc-site/src/components/sections/section-renderer.tsx` | Maps JSON `type` → section component |
| `glc-site/src/content/pages/home.json` | Section order and props |
| `glc-site/src/components/sections/hero-section.tsx` | Hero DOM + parallax |
| `glc-site/src/components/sections/stats-section.tsx` | Stats + `StatCellAnimated` |
| `glc-site/src/components/sections/marquee-band.tsx` | Ticker |
| `glc-site/src/components/sections/about-section.tsx` | About `ab3__` |
| `glc-site/src/components/sections/services-grid-section.tsx` | `svlayer` + `details` deck |
| `glc-site/src/components/sections/why-section.tsx` | `why-v3-shell` |
| `glc-site/src/components/sections/process-section.tsx` | `proc3__` |
| `glc-site/src/components/sections/parallax-type-band.tsx` | Parallax band |
| `glc-site/src/components/sections/testimonials-section.tsx` | `tst3` |
| `glc-site/src/components/sections/coverage-section.tsx` | Coverage + density accordion |
| `glc-site/src/components/sections/contact-strip-section.tsx` | Light contact strip |
| `glc-site/src/components/sections/cta-band-section.tsx` | `cta3__` close |
| `glc-site/src/components/ui/reveal.tsx` + `hooks/use-reveal.ts` | Scroll reveal |
| `glc-site/src/lib/copy-density.ts` | Two-sentence split helper |
| `glc-site/src/styles/glc-base.css` | All class definitions |

---

*Generated from the shipped homepage implementation and stylesheet. Use this document as a structural/template reference; token values and responsive breakpoints remain authoritative in `glc-base.css`.*
