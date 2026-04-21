# GLC page compliance matrix (ground rules audit)

**Ground rules (summary):** (1) Dark (`--charcoal` / `--charcoal-deep`) and light (`--white` / `--off-white` / `--gray-100`) sections must **alternate** — no two dark adjacent. (2) One **clear job** per section (~5 words). (4–5) **One primary quote CTA** label sitewide; **no duplicate closing bands** (e.g. contact strip + CTA band). **Ops:** one `page.tsx` per session; do not mix `glc-base.css` with layout/page in one commit; snapshot backups on `/sandbox/` before edits.

**Trailing slash:** All public paths use `/` suffix ([`next.config.ts`](../next.config.ts)).

---

## 0. Scope & methodology (lock with plan)

**Routes (production):** [`src/app/page.tsx`](../src/app/page.tsx) (home), `about/`, `company/`, `contact/`, `coverage/`, `process/`, `projects/`, `services/`, `locations/[slug]/`, `services/[slug]/`, each [`src/app/services/*/page.tsx`](../src/app/services/), `privacy/`, `terms/`. **`/sandbox/`** — test-only unless held to the same bar.

**Dark vs light (Rule 1):** Treat `--charcoal` / `--charcoal-deep` and the default marquee (`.marquee-band` `rgba(20,18,16,0.92)` in `glc-base.css` ~1795) as **dark**; `white` / `off-white` / `gray-100` as **light**. Full-bleed photo + dark scrim (e.g. `.gl-parallax-type-band--dark`) counts **dark**. **`--yellow-core` (#F2B705 only)** is neither — flag strict alternation calls (marquee as accent vs dark).

**CTA counting (Rules 4–5):** Primary conversion = `btn-primary` / `gl-btn--primary` or explicit form CTA in bands. Phone/email as links documented separately. **Header vs per-page limit:** optional `/sandbox` spike (two static variants: header hidden vs header + canonical CTA only) after approval.

**Operational (do not violate):**

- Never combine **`glc-base.css`** or **`glc-services-rebuild.css`** with **`page.tsx` / layout composition** in the **same commit**.
- Never change **multiple** `page.tsx` files in **one session**.
- After each file change: **browser check** on affected route(s) (build-only is not a substitute).
- Do **not** reorder sections and rewrite copy in the **same** change.
- Never alter **`--yellow-core`** away from `#F2B705`.

**Dev preview (canonical):** `http://127.0.0.1:3040/` — prefer over `localhost` on Windows; recovery scripts in [`package.json`](../package.json). Frozen copy + links also on **`/sandbox/`** → [`#sandbox-compliance-reference`](../src/app/sandbox/page.tsx).

**Deliverable:** Route-by-route table (this file): each major `<section>` / band in **DOM order** with **D/L** and violations; CTA inventory (primary vs secondary).

**Suggested batch:** audit-only → fix **one** unit → browser → commit → optional **CSS-only** commit; then next route / `service-page-view.tsx` alone for template fixes.

---

## 1. Static & hub routes

| URL path | App entry | Compliance notes (initial pass) |
|----------|-----------|----------------------------------|
| `/` | [`src/app/page.tsx`](../src/app/page.tsx) + [`home-section-order.ts`](../src/lib/home-section-order.ts) + [`SectionRenderer`](../src/components/sections/section-renderer.tsx) | **CTA:** `contactStrip` omitted from live order; **`ctaBand`** only at end; strip JSON kept for `getHomeSectionProps`. **Tone (2026-04-21):** marquee `bandTone: light` in [`home.json`](../src/content/pages/home.json) (hero→marquee D→L). **`#coverage`→`#cta-band`:** light seam via `glc-base.css` (`border-top` off-white, not mixed with page commits). **Still OPEN (browser):** services→why L→L; process→parallax D→D. |
| `/about/` | [`src/app/about/page.tsx`](../src/app/about/page.tsx) → [`AboutPageView`](../src/components/pages/about-page-view.tsx) | **CTA (code audit):** `btn-primary` reuses `about.cta` on **split** + **audience** (2× primary same label/href); **split** + **media** use `about.cta` (primary + `btn-ghost`). **`ParallaxWhiteFrameBand`** `parallax.cta` (home JSON). **`CtaBandSection`** tail. **Dom order:** `MiniPageHero` (D) → `about-pg-split` → `about-pg-media` → optional `about-pg-audience` → parallax → `ctaBand`. **Tone:** each section’s ground — browser pass required. |
| `/company/` | [`src/app/company/page.tsx`](../src/app/company/page.tsx) | **CTA (2026-04-21):** `ContactStripSection` **removed** — dispatch (`btn-primary` phone + `btn-ghost` form) + **`CtaBandSection`** only. **Tone:** browser pass on trio + dispatch bands. |
| `/contact/` | [`src/app/contact/page.tsx`](../src/app/contact/page.tsx) → `ContactPageView` | Form-first; confirm single primary quote CTA vs header. |
| `/coverage/` | [`src/app/coverage/page.tsx`](../src/app/coverage/page.tsx) | **CTA:** `ParallaxWhiteFrameBand` CTA + `CtaBandSection`; **tone:** audit figure band + `CoverageSection` + parallax sequence. |
| `/process/` | [`src/app/process/page.tsx`](../src/app/process/page.tsx) | Ends with `CtaBandSection`; check mid-page CTAs (`ProcessSection` floor CTA, etc.). |
| `/projects/` | [`src/app/projects/page.tsx`](../src/app/projects/page.tsx) | Mosaic + `CtaBandSection`; check CTA count/labels. |
| `/services/` | [`src/app/services/page.tsx`](../src/app/services/page.tsx) | Hero → marquee → grid → digest → gallery → parallax (`cta` from JSON) → `CtaBandSection` — **CTA** and **tone** pass. |
| `/privacy/` | [`src/app/privacy/page.tsx`](../src/app/privacy/page.tsx) | Legal; minimal CTAs — quick pass. |
| `/terms/` | [`src/app/terms/page.tsx`](../src/app/terms/page.tsx) | Legal; quick pass. |
| `/sandbox/` | [`src/app/sandbox/page.tsx`](../src/app/sandbox/page.tsx) | Internal reference / backup host ([`sandbox-playground.css`](../src/app/sandbox/sandbox-playground.css)); not held to prod nav rules. |

---

## 2. Service hub routes (six majors)

Each has a dedicated `page.tsx` (custom or shared layout). Audit **tone stack** + **CTA** count per file.

| URL path | App entry |
|----------|-----------|
| `/services/excavation-site-preparation/` | [`src/app/services/excavation-site-preparation/page.tsx`](../src/app/services/excavation-site-preparation/page.tsx) |
| `/services/site-preparation-grading/` | [`src/app/services/site-preparation-grading/page.tsx`](../src/app/services/site-preparation-grading/page.tsx) |
| `/services/foundations-civil-infrastructure/` | [`src/app/services/foundations-civil-infrastructure/page.tsx`](../src/app/services/foundations-civil-infrastructure/page.tsx) |
| `/services/drainage-hardscaping/` | [`src/app/services/drainage-hardscaping/page.tsx`](../src/app/services/drainage-hardscaping/page.tsx) |
| `/services/hauling-site-clearing-logistics/` | [`src/app/services/hauling-site-clearing-logistics/page.tsx`](../src/app/services/hauling-site-clearing-logistics/page.tsx) |
| `/services/snow-removal/` | [`src/app/services/snow-removal/page.tsx`](../src/app/services/snow-removal/page.tsx) |

**Shared template note:** Many hubs use [`ServicePageView`](../src/components/services/service-page-view.tsx) — tail is `CoverageSection` → `StatsBar` → `ContactBand` (**adjacent dark** on `#coverage` + `#stats.st3`; multiple end CTAs). Custom hubs (e.g. excavation) may diverge — verify each URL in browser.

---

## 3. Commercial snow “line” pages (`/services/[slug]/`)

Rendered by [`src/app/services/[slug]/page.tsx`](../src/app/services/[slug]/page.tsx) (`dynamicParams: false`). Slugs from [`getAllSnowSubServiceDefs()`](../src/lib/commercial-snow-routes.ts) / [`commercialSnowServices`](../src/content/commercial-snow-page-data.ts):

| URL path |
|----------|
| `/services/commercial-parking-lot-snow-plowing-barrie/` |
| `/services/industrial-snow-removal-simcoe-county/` |
| `/services/commercial-ice-management-deicing-simcoe-county/` |
| `/services/247-emergency-snow-removal-barrie/` |
| `/services/commercial-snow-hauling-removal-simcoe-county/` |
| `/services/retail-plaza-snow-removal-barrie/` |
| `/services/property-management-snow-removal-contracts/` |
| `/services/office-building-corporate-campus-snow-removal-barrie/` |

---

## 4. Commercial snow location pages (`/locations/[slug]/`)

Rendered by [`src/app/locations/[slug]/page.tsx`](../src/app/locations/[slug]/page.tsx). Slugs from [`getAllSnowLocationDefs()`](../src/lib/commercial-snow-routes.ts):

| URL path |
|----------|
| `/locations/commercial-snow-removal-barrie-ontario/` |
| `/locations/commercial-snow-removal-orillia-ontario/` |
| `/locations/commercial-snow-removal-innisfil-ontario/` |
| `/locations/commercial-snow-removal-wasaga-beach-ontario/` |
| `/locations/commercial-snow-removal-simcoe-county/` |

---

## 5. Homepage — ordered stack (`HOME_SECTION_ORDER`, code-derived tone)

Sources: [`home-section-order.ts`](../src/lib/home-section-order.ts), [`section-renderer.tsx`](../src/components/sections/section-renderer.tsx), [`glc-base.css`](../src/styles/glc-base.css), [`glc-services-rebuild.css`](../src/styles/glc-services-rebuild.css) (services stack). **D** = charcoal family / near-black + default marquee band + parallax dark scrim; **L** = white / off-white / gray-100.

**Live `/` order (no `contactStrip` in renderer):**

| # | Block | Tone (approx.) | Notes |
|---|--------|----------------|--------|
| 1 | `hero` | D (`--charcoal-deep`, `glc-base.css` ~9819) | → |
| 2 | `marquee` | L (`bandTone: light` → `.marquee-band--light`) | OK vs hero after JSON change |
| 3 | `about` | L (`#about` ~1851) | OK after marquee |
| 4 | `stats` | D (`#stats.st3` ~3902) | OK |
| 5 | `services` | L (off-white / layered; see `glc-services-rebuild.css` if loaded) | OK |
| 6 | `why` | L (`--off-white` ~16775) | **L→L** vs services |
| 7 | `process` | D (`#process` ~4409) | OK |
| 8 | `parallaxBand` | D (dark scrim ~11656; `tone: dark` in JSON) | **D→D** vs process |
| 9 | `testimonials` | L (`#testimonials` ~4958) | OK |
| 10 | `coverage` | D (`#coverage` ~4675) | OK |
| 11 | `ctaBand` | D (`section.cta3` ~5586) | **Seam:** `section#coverage + section#cta-band` off-white `border-top` in `glc-base.css` (adjacent-dark mitigation) |

`contactStrip` props remain in `home.json` for other pages only.

---

## 6. `ServicePageView` — DOM tail (shared hubs)

From [`service-page-view.tsx`](../src/components/services/service-page-view.tsx): after FAQ + related cards, **`CoverageSection`** → **`StatsBar`** (home `stats` props) → **`ContactBand`** (`ctaBand` / `ContactBand`, `sectionId="request-site-visit"`). **Tone:** `#coverage` dark + stats bar dark (`#stats.st3` pattern on hub) → **D→D risk**; then dark CTA band — **CTA:** hub overview / lifecycle / parallax / FAQ may each carry buttons; tail adds **ContactBand** — count labels in browser per slug.

---

## 7. Execution order (safe batches)

1. **Audit only:** complete route D/L + CTA inventory in this file (no code), then prioritize home + company.
2. **Optional spike:** `/sandbox` two variants for header CTA counting.
3. **Fix one unit:** single `page.tsx` or single view — browser verify — commit; **never** same commit as `glc-base.css` / `glc-services-rebuild.css` layout/ground changes.
4. **Alternation:** reorder (`home-section-order` / JSON order only) **or** CSS-only ground — **not both** in one change.
5. **Service template:** one `service-page-view.tsx` change per session + one slug in browser.
6. **Label pass:** one consumer file per session → `site.json` / `cta-copy.ts` + JSON; header/drawer last.

---

## 8. Reference docs

- Master plan: [`.cursor/plans/glc_page_compliance_audit_afcb5ca0.plan.md`](../../.cursor/plans/glc_page_compliance_audit_afcb5ca0.plan.md) (repo-relative from glc-site: `../../.cursor/plans/...`)
- Prior audit notes: [`routes-matrix.md`](routes-matrix.md)

---

## 9. Ordered checklist (same as plan YAML — use when Plan panel is empty)

| Step | Todo ID | Status | What |
|------|---------|--------|------|
| 1 | `audit-matrix` | **in progress** | Fill §1–4 route notes + D/L + primary CTAs; browser where required. **No code until this row is done enough to prioritize fixes.** |
| 2 | `fix-home-alternation` | pending | Home Rule 1 only: reorder **or** `glc-base.css` / `glc-services-rebuild.css` — isolated commits. |
| 3 | `sandbox-cta-spike` | pending | Optional `/sandbox` header vs CTA variants. |
| 4 | `fix-company-cta` | pending | `company/page.tsx` only + browser. |
| 5 | `fix-about-cta` | pending | About view only + browser. |
| 6 | `fix-service-tail` | pending | `service-page-view.tsx` only + one slug browser. |
| 7 | `canonical-quote-label` | pending | Label migration last. |
| — | `fix-home-cta-dup` | **completed** | `contactStrip` off home order; `ctaBand` on home. |

Execution rule: **do not start step 2+ until step 1 has enough matrix coverage** to pick the first alternation target (unless you explicitly override).

_Last updated: 2026-04-21 — **§9** ordered checklist = plan YAML execution order; plan file explains where Cursor shows todos. `/about/` row expanded (code CTA audit). **Next:** continue step **1** (`audit-matrix`) on remaining static routes; no step **2** code until step 1 is sufficient per §9 rule._
