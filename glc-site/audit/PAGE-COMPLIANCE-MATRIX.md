# GLC page compliance matrix (ground rules audit)

**Ground rules (summary):** (1) Dark (`--charcoal` / `--charcoal-deep`) and light (`--white` / `--off-white` / `--gray-100`) sections must **alternate** — no two dark adjacent. (2) One **clear job** per section (~5 words). (4–5) **One primary quote CTA** label sitewide; **no duplicate closing bands** (e.g. contact strip + CTA band). **Ops:** one `page.tsx` per session; do not mix `glc-base.css` with layout/page in one commit; snapshot backups on `/sandbox/` before edits.

**Trailing slash:** All public paths use `/` suffix ([`next.config.ts`](../next.config.ts)).

---

## 1. Static & hub routes

| URL path | App entry | Compliance notes (initial pass) |
|----------|-----------|----------------------------------|
| `/` | [`src/app/page.tsx`](../src/app/page.tsx) (`orderHomeSections` from [`home-section-order.ts`](../src/lib/home-section-order.ts)) + [`SectionRenderer`](../src/components/sections/section-renderer.tsx) | **CTA (2026-04-21):** `ctaBand` **omitted from live** [`HOME_SECTION_ORDER`](../src/lib/home-section-order.ts) — single terminal band is `contactStrip` (`btn-primary` → `/contact/`). `ctaBand` block **remains in** [`home.json`](../src/content/pages/home.json) for `getHomeSectionProps('ctaBand')` on company, services, etc. **Tradeoff:** homepage no longer renders the dual-panel `#cta` close from master sequence. **Tone:** see §5 — hero→marquee both read dark; `services` + `why` both off-white/light; `process` + `parallaxBand` both dark (`home.json` parallax `tone: dark`). |
| `/about/` | [`src/app/about/page.tsx`](../src/app/about/page.tsx) → [`AboutPageView`](../src/components/pages/about-page-view.tsx) | **CTA:** multiple `about.cta` + parallax CTA + `CtaBandSection`. **Tone:** verify each band in browser. |
| `/company/` | [`src/app/company/page.tsx`](../src/app/company/page.tsx) | **CTA:** dispatch block + `ContactStripSection` + `CtaBandSection`. |
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

Sources: [`home-section-order.ts`](../src/lib/home-section-order.ts), [`section-renderer.tsx`](../src/components/sections/section-renderer.tsx), [`glc-base.css`](../src/styles/glc-base.css) (`#hero`, `.marquee-band`, `#about`, `#stats.st3`, `#services.svlayer`, `#why`, `#process`, `#testimonials`, `#coverage`, `#contact-strip`, `#cta-band`). **D** = charcoal family / near-black; **L** = white / off-white / gray-100.

| # | Block | Tone | Adjacent note |
|---|--------|------|----------------|
| 1 | `hero` | D (`hero-v2`) | → |
| 2 | `marquee` | D (`.marquee-band` rgba ~charcoal) | **D→D** vs hero — thin rail; confirm in browser |
| 3 | `about` | L (`#about` white) | OK |
| 4 | `stats` | D (`#stats.st3`) | OK |
| 5 | `services` | L (`--off-white`) | OK |
| 6 | `why` | L (`--off-white` `.why-v3-shell`) | **L→L** vs services — verify seam reads as distinct |
| 7 | `process` | D (`#process` `--charcoal-deep`) | OK |
| 8 | `parallaxBand` | D (`tone: dark` in JSON) | **D→D** vs process |
| 9 | `testimonials` | L (`#testimonials`) | OK |
| 10 | `coverage` | D (`#coverage` `--charcoal`) | OK |
| 11 | `contactStrip` | L (`#contact-strip` white) | Terminal section; **no** second `ctaBand` on `/` |

---

## 6. `ServicePageView` — DOM tail (shared hubs)

From [`service-page-view.tsx`](../src/components/services/service-page-view.tsx): after FAQ + related cards, **`CoverageSection`** → **`StatsBar`** (home `stats` props) → **`ContactBand`** (`ctaBand` / `ContactBand`, `sectionId="request-site-visit"`). **Tone:** `#coverage` dark + stats bar dark (`#stats.st3` pattern on hub) → **D→D risk**; then dark CTA band — **CTA:** hub overview / lifecycle / parallax / FAQ may each carry buttons; tail adds **ContactBand** — count labels in browser per slug.

---

## 7. Execution order (from plan; do not batch)

1. Fill **Tone** and **CTA** columns per row using browser + DevTools (one route per session when fixing).
2. Before each production edit: append **snapshot** to `/sandbox/` (sections + copy), per plan.
3. **Priority fixes:** home (duplicate closing CTAs + alternation), company, about, then `ServicePageView` tail, then remainder.
4. **Canonical CTA label** last: pick “Request a Quote” vs “Request a Site Quote”; migrate JSON/components in small commits.

---

## 8. Reference docs

- Master plan: [`.cursor/plans/glc_page_compliance_audit_afcb5ca0.plan.md`](../../.cursor/plans/glc_page_compliance_audit_afcb5ca0.plan.md) (repo-relative from glc-site: `../../.cursor/plans/...`)
- Prior audit notes: [`routes-matrix.md`](routes-matrix.md)

_Last updated: 2026-04-21 — homepage CTA dedupe executed (`ctaBand` dropped from home order only); §5–6 stack tables added; static-route table still needs per-URL browser confirmation for CTAs beyond `/`. **Next:** `fix-home-alternation` (marquee light variant, process/parallax, services/why); `fix-company-cta`; `fix-service-tail`._
