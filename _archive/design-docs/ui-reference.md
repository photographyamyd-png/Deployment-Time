## About Section Reference

Source: `glc-site/src/components/sections/about-section.tsx`. Styling uses `ab3__*` classes in `glc-site/src/styles/glc-base.css`. Props type: `AboutProps` in `glc-site/src/content/types.ts`.

```tsx
"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { IconArrow } from "@/components/ui/icon-arrow";
import type { AboutProps } from "@/content/types";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AboutSection(props: AboutProps) {
  return (
    <section id="about" aria-labelledby="about-heading">
      {/* Ghost GLC watermark — right-side decorative */}
      <span className="ab3__wm" aria-hidden>GLC</span>

      <div className="ab3__layout">

        {/* ══ LEFT — editorial copy column ══ */}
        <div className="ab3__copy">

          {/* Eyebrow + since marker */}
          <Reveal className="ab3__top-row">
            <span className="eyebrow">{props.eyebrow}</span>
            <span className="ab3__since" aria-label={`${props.mediaStat.value} ${props.mediaStat.label}`}>
              {props.mediaStat.value}&thinsp;
              <span>{props.mediaStat.label}</span>
            </span>
          </Reveal>

          {/* Heading — large stacked display */}
          <Reveal delayClass="reveal--delay-1" className="ab3__heading-wrap">
            <h2 id="about-heading" className="ab3__heading">
              {props.headingBefore}
              <em className="ab3__heading-em">{props.headingAccent}</em>
              {props.headingAfter}
            </h2>
            <span className="ab3__heading-rule" aria-hidden />
          </Reveal>

          {/* Body */}
          <Reveal delayClass="reveal--delay-2">
            <p className="ab3__body">{props.body}</p>
          </Reveal>

          {/* Credentials — 4-cell compact grid */}
          <Reveal delayClass="reveal--delay-3" className="ab3__creds">
            {props.credentials.map((c, i) => (
              <div key={c.title} className="ab3__cred">
                <div className="ab3__cred-idx" aria-hidden>0{i + 1}</div>
                <div className="ab3__cred-body">
                  <div className="ab3__cred-title">{c.title}</div>
                  <div className="ab3__cred-sub">{c.sub}</div>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delayClass="reveal--delay-4">
            <a href={props.cta.href} className="btn-primary">
              {props.cta.label}
              <IconArrow />
            </a>
          </Reveal>
        </div>

        {/* ══ RIGHT — dark photo panel ══ */}
        <div className="ab3__media">
          {/* Yellow badge — punches off the left edge */}
          <div className="ab3__badge" aria-hidden>
            <span>{props.badgeText}</span>
          </div>

          {/* Photo fill */}
          <div className="ab3__photo" role="img" aria-label="Ground Level Contracting crew on an excavation site" />

          {/* Floating stat chip */}
          <motion.div
            className="ab3__chip"
            initial={{ opacity: 0, x: 28, y: 8 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            aria-hidden
          >
            <div className="ab3__chip-num">{props.mediaStat.value}</div>
            <div className="ab3__chip-lbl">{props.mediaStat.label}</div>
          </motion.div>

          {/* Bottom corner accent */}
          <div className="ab3__corner-mark" aria-hidden />
        </div>

      </div>
    </section>
  );
}
```

### `AboutProps` (supporting type)

```ts
export type AboutProps = {
  eyebrow: string;
  headingBefore: string;
  headingAccent: string;
  headingAfter: string;
  body: string;
  credentials: Array<{ title: string; sub: string }>;
  cta: { label: string; href: string };
  mediaStat: { value: string; label: string };
  badgeText: string;
};
```

### Sub-components / dependencies

- `Reveal` — `glc-site/src/components/ui/reveal.tsx`
- `IconArrow` — `glc-site/src/components/ui/icon-arrow.tsx`
- **framer-motion** — `motion.div` for the stat chip entrance

---

## About Section Pattern

Entire `<section id="about" aria-labelledby="about-heading">` with internal logic: editorial column (`Reveal` staggered lines, credentials grid, primary CTA), right media column (badge, CSS background photo, `motion.div` stat chip, corner mark). Styling is `ab3__*` in `glc-base.css` (no Tailwind on the component).

```tsx
"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { IconArrow } from "@/components/ui/icon-arrow";
import type { AboutProps } from "@/content/types";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AboutSection(props: AboutProps) {
  return (
    <section id="about" aria-labelledby="about-heading">
      {/* Ghost GLC watermark — right-side decorative */}
      <span className="ab3__wm" aria-hidden>GLC</span>

      <div className="ab3__layout">

        {/* ══ LEFT — editorial copy column ══ */}
        <div className="ab3__copy">

          {/* Eyebrow + since marker */}
          <Reveal className="ab3__top-row">
            <span className="eyebrow">{props.eyebrow}</span>
            <span className="ab3__since" aria-label={`${props.mediaStat.value} ${props.mediaStat.label}`}>
              {props.mediaStat.value}&thinsp;
              <span>{props.mediaStat.label}</span>
            </span>
          </Reveal>

          {/* Heading — large stacked display */}
          <Reveal delayClass="reveal--delay-1" className="ab3__heading-wrap">
            <h2 id="about-heading" className="ab3__heading">
              {props.headingBefore}
              <em className="ab3__heading-em">{props.headingAccent}</em>
              {props.headingAfter}
            </h2>
            <span className="ab3__heading-rule" aria-hidden />
          </Reveal>

          {/* Body */}
          <Reveal delayClass="reveal--delay-2">
            <p className="ab3__body">{props.body}</p>
          </Reveal>

          {/* Credentials — 4-cell compact grid */}
          <Reveal delayClass="reveal--delay-3" className="ab3__creds">
            {props.credentials.map((c, i) => (
              <div key={c.title} className="ab3__cred">
                <div className="ab3__cred-idx" aria-hidden>0{i + 1}</div>
                <div className="ab3__cred-body">
                  <div className="ab3__cred-title">{c.title}</div>
                  <div className="ab3__cred-sub">{c.sub}</div>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delayClass="reveal--delay-4">
            <a href={props.cta.href} className="btn-primary">
              {props.cta.label}
              <IconArrow />
            </a>
          </Reveal>
        </div>

        {/* ══ RIGHT — dark photo panel ══ */}
        <div className="ab3__media">
          {/* Yellow badge — punches off the left edge */}
          <div className="ab3__badge" aria-hidden>
            <span>{props.badgeText}</span>
          </div>

          {/* Photo fill */}
          <div className="ab3__photo" role="img" aria-label="Ground Level Contracting crew on an excavation site" />

          {/* Floating stat chip */}
          <motion.div
            className="ab3__chip"
            initial={{ opacity: 0, x: 28, y: 8 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            aria-hidden
          >
            <div className="ab3__chip-num">{props.mediaStat.value}</div>
            <div className="ab3__chip-lbl">{props.mediaStat.label}</div>
          </motion.div>

          {/* Bottom corner accent */}
          <div className="ab3__corner-mark" aria-hidden />
        </div>

      </div>
    </section>
  );
}
```

---

## CTA Band — Ground Level Logo.svg variants (5)

Asset: `Public Images/Ground Level Logo.svg` (replaces earlier `motifs/g1.svg` reference; no unwanted white plate behind the mark).

Static preview (open in a browser; logo path is relative to the preview file):

`Public Images/motifs/cta-band-g1-variants-preview.html`

| Variant | Class hook | Best background context | Logo treatment |
|--------|------------|---------------------------|----------------|
| **A** | `cta-g1--a` | Dark charcoal (same family as live `#cta-band`) | Large bottom-right watermark `img`, low opacity; keeps blueprint grid + skew yellow band |
| **B** | `cta-g1--b` | Light / cream sections | Same placement; `filter: brightness(0)` + opacity for ink ghost on light |
| **C** | `cta-g1--c` | Yellow-forward / diagonal energy | Logo inside skewed, clipped column with yellow wash overlay |
| **D** | `cta-g1--d` | Photo or busy imagery | Gradient “site” backdrop, `backdrop-filter` frosted panel, extra-faint corner logo |
| **E** | `cta-g1--e` | White / minimal / print-like | Small inline lockup column (`~88px`) beside copy; no giant watermark |

Shared layout mirrors production `CtaBandSection`: eyebrow bar, stacked heading with `<em>` accent, subcopy, phone column, divider, email CTA, bottom accent bar. Tokens: `--charcoal`, `--charcoal-deep`, `--yellow-core`, `--gold`, `--cream`, `--container-max`.

**React integration note:** Add an optional `visualVariant?: 'a' | 'b' | 'c' | 'd' | 'e'` (or similar) to `CtaBandSection` and map to root classes `cta-g1 cta-g1--{variant}`; lift the preview CSS into `glc-base.css` under a single namespace (e.g. `.cta-g1`) to match the project rule of keeping styling in CSS, not Tailwind on components.

**Performance:** `Ground Level Logo.svg` is large; for production consider a simplified mark or `public/` URL plus loading strategy if used above the fold.

---

## Logo motif & pattern variants (10)

Static preview (same asset as the CTA variants; paths relative to the file):

`Public Images/motifs/logo-motif-variants-preview.html`

These are **section ornaments and background patterns** built from `Ground Level Logo.svg` plus CSS geometry—not literal vector decomposition of the file (the SVG is raster-heavy). Class prefix in the preview: **`lmv`** / **`lmv--1`** … **`lmv--10`**. **M4** is the retained skewed-panel treatment from the first pass; M1–M3 and M5–M10 were replaced with a second pass of layouts.

| ID | Name | Use |
|----|------|-----|
| **M1** | Overlap card | Charcoal field + cream card with offset gold shadow; logo pins the top corner of the card |
| **M2** | Hexagon frame | Hex `clip-path` + gold border; logo centered as an engineered badge |
| **M3** | Gold headline bar | Gradient bar extends from heading; logo caps the row as a terminal mark |
| **M4** | Skewed parallelogram rail *(unchanged)* | Cream section; left skew panel, yellow wash, logo de-skewed inside panel (matches CTA diagonal language) |
| **M5** | Split seam | Half dark / half cream grid; circular badge with logo absolutely centered on the vertical seam |
| **M6** | Stamp | Dashed border, slight rotation, paper field—certificate / approval block |
| **M7** | Pull-quote rail | Gold left rule + large quote glyph; logo + horizontal rule as bridge under copy |
| **M8** | Timeline node | Horizontal axis lines with logo in a centered ring—process / phase steps |
| **M9** | Frosted glass bar | Blueprint-style grid + `backdrop-filter` strip with logo and title |
| **M10** | Quarter-circle arc | Bottom-right corner crop with large faint logo and gold arc stroke |

**Integration:** Port styles into `glc-base.css` under a namespace (e.g. `.lmv` or `.glc-motif`) and wrap markup in a section component or include as a fragment inside page JSON-driven sections. Prefer `loading="lazy"` and a lighter PNG/WebP derivative for repeated tiles if performance matters.
