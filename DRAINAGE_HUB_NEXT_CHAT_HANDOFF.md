# Drainage & Hardscaping hub — refactor handoff (for next chat)

Use this file as **`@DRAINAGE_HUB_NEXT_CHAT_HANDOFF.md`** when migrating or parity-building the **next** service hub. It summarizes **rules**, **layout/surface rhythm**, **what we changed** (assets + motion), and **where code lives**.

---

## 1. Page identity

- **Route:** `/services/drainage-hardscaping/`
- **Shell:** `<main class="service-page--drainage-v2 glc-drain-hub">` in `glc-site/src/components/services/drainage-hardscaping/drainage-hub-view.tsx`
- **Spec alignment:** `HOMEPAGE_SECTION_CLONE_SPEC.md` (homepage §7 ab3, §8 svlayer, STC1 capabilities, §10 process density)
- **Rhythm rules:** `.cursor/rules/service-hub-section-rhythm.mdc`, `.cursor/rules/design-compliance-preflight.mdc`, `.cursor/rules/dse-column-failure-reference.mdc`

---

## 2. Section order (DOM) and surfaces

Order is fixed in `DrainageHubView`. Between tone shifts, the page uses **mist seams** (A3-class): `.glc-drain-page__mist-seam` + hub-specific `glc-drain-hub__tone-seam` modifiers.

| # | Section / block | Approx. surface | Key `id` / anchor |
|---|------------------|-----------------|-------------------|
| 1 | Hero | DSE (charcoal) + existing scroll parallax | `#drainage-hub-hero` (see hero component) |
| — | **Mist seam** | Light (A3) | `glc-drain-hub__hero-to-stats-seam` — **required** so hero and ST3 are not back-to-back DSE |
| 2 | Trust rail (st3-style) | DSE | `#stats` `.st3` |
| 3 | Overview | Light (`ab3`-style split) | `#overview` |
| — | **Mist seam** | — | `glc-drain-hub__overview-to-scope-seam` |
| 4 | Scope (svlayer DSE + cards) | DSE | `#scope` |
| — | **Mist seam** | — | `glc-drain-hub__scope-to-interactive-seam` |
| 5 | Interactive capabilities | Wrapper `glc-drain-hub__interactive` — contains **STC1** + **mirrored ab3** detail | `#field-capabilities`, `#field-capability-detail` |
| — | **Mist seam** | — | `glc-drain-hub__interactive-to-why-seam` |
| 6 | Why + process (compact proc3) | DSE | `#why-process` |
| — | **Mist seam** | — | `glc-drain-hub__why-to-faq-seam` |
| 7 | FAQ | Light `.ls` | `#faq` |
| — | **Mist seam** | — | `glc-drain-hub__faq-to-trust-seam` |
| 8 | Trust signals grid | DSE | `#trust-signals` |
| — | **Mist seam** | — | `glc-drain-hub__trust-to-coverage-seam` |
| 9 | Coverage | Light `.ls` | `#coverage` |
| — | **Mist seam** | — | `glc-drain-hub__coverage-to-related-seam` |
| 10 | Related services | DSE | `#related-services` |
| 11 | Final CTA | Light (cta3 pattern) | `#request-site-visit` |

**DSE adjacency:** Do not place two charcoal-weight bands **back-to-back** without a light band, **accent strip**, or **mist seam** between them (see `dse-column-failure-reference.mdc`).

---

## 3. Styling system (non-negotiables)

- **Single CSS source for layout/look:** `glc-site/src/styles/glc-base.css` — tokens (`var(--*)`), shared section classes (`ab3__*`, `svlayer`, `stc1`, `proc3`, `cta3`, `glc-drain-hub__*`, etc.).
- **No Tailwind utilities** on these hub components for layout (repo standard).
- **No static `style={{}}`** for layout spacing; **exception:** Framer Motion `style` for **scroll-driven transforms** where already established (hero, parallax bands).
- **Internal links:** `SmartLink` / `next/link`, not raw `<a href="/...">`.
- **Images:** `next/image` with assets under `glc-site/public/images/...`.
- **Prose width:** Drainage hub copy uses **~68ch** caps where scoped (see `glc-drain-hub__readmore-inner` and related rules in `glc-base.css`).
- **Accessibility:** Decorative layers `aria-hidden`; meaningful photos use `role="img"` + `aria-label` or proper `alt` patterns already in components.

---

## 4. What we refactored / adjusted (this pass)

### 4.1 Photography (client work)

- **Hero image:** **unchanged** — still `DRAINAGE_HUB_HERO_IMAGE` → `/images/services/drainage-hardscaping/hero-wide.png`.
- **Everything else** that was Unsplash or placeholder: replaced with **local JPGs** under  
  `glc-site/public/images/services/drainage-hardscaping/work-*.jpg`.
- **Content single source of truth:**
  - `glc-site/src/content/drainage-hardscaping-page.ts` — overview image, why/process image, coverage map image + alts.
  - `glc-site/src/content/drainage-hub-capability-tabs.ts` — per-tab `imageSrc` / `imageAlt` (five capability tabs; scope figure uses tab 0).

### 4.2 Motion and overlays (non-hero)

- **Overview (`#overview`):** `DrainageHubOverview` — `useScroll` + `useSpring` + `useTransform` on a **child** `motion.div` wrapping the photo (not on the grid root). Gradient **scrim** span over the image.
- **Why/process (`#why-process`):** `DrainageHubWhyProcess` — same pattern on the compact hero frame; scrim on the figure.
- **Capability detail (mirrored ab3):** `InteractiveCapabilities` — **static** gradient scrim only (no extra scroll parallax on that column).
- **Reduced motion:** `useReducedMotion()` from Framer Motion — parallax `y` transforms **disabled** when the user prefers reduced motion.
- **CSS:** New blocks in `glc-base.css` for `#overview .glc-drain-hub__ab3-photo-*`, `#field-capability-detail .glc-drain-hub__ab3-photo-scrim--cap-detail`, `.glc-drain-hub__proc3-hero-parallax`, scrims, and `prefers-reduced-motion` where relevant.

**Parallax budget note:** The **hub hero** already uses scroll-linked motion. The section-layout rule (`section-layout-refactor.mdc`) warns about stacking multiple heavy parallax stacks; here we added **subtle** section-scoped parallax on **two** below-the-fold photos, with reduced-motion off-ramps. For the **next** page, confirm with the same rule set or prefer scrims-only if the hero already owns the main parallax story.

### 4.3 Coverage band

- `DrainageHubCoverage` no longer uses an inline Unsplash URL; it imports **`DRAINAGE_HUB_COVERAGE_MAP_IMAGE`** from `drainage-hardscaping-page.ts`.

### 4.4 Dev / cache operational note (not design)

- App dev URL is **`http://localhost:3040`** (not 3000). Missing webpack chunks (`Cannot find module './331.js'`, etc.) → run from repo root: `npm run dev:fresh` or `npm run clean` in `glc-site` then `npm run dev`.

---

## 5. File map (quick reference)

| Concern | Path |
|--------|------|
| Page composition | `glc-site/src/components/services/drainage-hardscaping/drainage-hub-view.tsx` |
| Hero (parallax) | `glc-site/src/components/services/drainage-hardscaping/drainage-hub-hero-v2.tsx` |
| Overview + parallax | `glc-site/src/components/services/drainage-hardscaping/drainage-hub-overview.tsx` |
| Scope figure | `glc-site/src/components/services/drainage-hardscaping/drainage-hub-scope.tsx` |
| STC1 + detail | `glc-site/src/components/services/interactive-capabilities.tsx` |
| Why/process + parallax | `glc-site/src/components/services/drainage-hardscaping/drainage-hub-why-process.tsx` |
| Coverage | `glc-site/src/components/services/drainage-hardscaping/drainage-hub-coverage.tsx` |
| Hub copy + image constants | `glc-site/src/content/drainage-hardscaping-page.ts` |
| Capability tabs (images + SEO blocks) | `glc-site/src/content/drainage-hub-capability-tabs.ts` |
| Global styles | `glc-site/src/styles/glc-base.css` |
| Public assets | `glc-site/public/images/services/drainage-hardscaping/` |

---

## 6. Pre-ship checklist (copy into next hub ticket)

- [ ] **Band rhythm:** Full section order listed; D / light alternation; **mist seams** at each required tone boundary.
- [ ] **DSE adjacency:** No illegal `dse|dse` without separator.
- [ ] **Layout roots:** No accidental `overflow`/`position` fights on section wrappers; decorative layers on **children**, `aria-hidden`.
- [ ] **Styling:** No Tailwind on section layout; new classes live in `glc-base.css` with a clear comment anchor.
- [ ] **Tokens:** Colors/spacing/type from `glc-base.css` / design tokens only.
- [ ] **Links / images:** `SmartLink` for internal routes; `next/image` for photos.
- [ ] **Prose:** Width caps where the brief requires (drainage: 68ch patterns).
- [ ] **Motion:** Respect `prefers-reduced-motion`; avoid piling parallax if hero already owns a heavy stack.
- [ ] **Verify:** `npm run lint` and `npm run build` from repo root.

---

## 7. Reusable “next page” prompt (paste into a new chat)

```text
You are updating the NEXT GLC service hub page to match the same contract as the Drainage & Hardscaping hub.

First read @DRAINAGE_HUB_NEXT_CHAT_HANDOFF.md for section rhythm, DSE/light alternation, mist seams, styling rules (glc-base.css only, no Tailwind on layout), and file patterns.

Then:
1. Map the target route’s `*hub-view.tsx` (or equivalent) to the same DOM-level concerns: hero → trust/overview blocks → scope/services → interactive or long-form sections → process/why → FAQ → trust/coverage → related → final CTA, preserving DSE/light alternation and inserting `.glc-drain-page__mist-seam` (or the page’s equivalent A3 seam) wherever two DSE-family bands would otherwise touch.
2. Keep copy in `src/content/*.ts` (or JSON) as the single source of truth; wire images to `public/images/services/<slug>/`.
3. Use `next/image`, `SmartLink`, and existing section components (`ab3`, `svlayer`, `stc1`, `proc3`, `cta3`) where applicable—do not invent parallel layout systems.
4. Any new layout class names must be added to `glc-site/src/styles/glc-base.css` with a grep-able block comment; no static style={{}} for spacing.
5. If adding scroll motion, scope it to photo wrappers (children), honor useReducedMotion, and avoid conflicting with the page hero parallax budget described in the handoff.
6. Finish with `npm run lint` and `npm run build` from the repo root.

Goal for THIS page: [describe route + desired content/asset changes].
```

Replace the last line with the concrete goal for the new page (e.g. “swap placeholders for client photos on `/services/excavation-site-preparation/` without changing section order”).

---

*Generated to support chat-to-chat continuity; update this file if the drainage hub structure or rules change materially.*
