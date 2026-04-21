# GLC page compliance matrix (ground rules audit)

**Ground rules (summary):** (1) Dark (`--charcoal` / `--charcoal-deep`) and light (`--white` / `--off-white` / `--gray-100`) sections must **alternate** — no two dark adjacent. (2) One **clear job** per section (~5 words). (4–5) **One primary quote CTA** label sitewide; **no duplicate closing bands** (e.g. contact strip + CTA band). **Ops:** one `page.tsx` per session; do not mix `glc-base.css` with layout/page in one commit; snapshot backups on `/sandbox/` before edits.

**Trailing slash:** All public paths use `/` suffix ([`next.config.ts`](../next.config.ts)).

---

## 1. Static & hub routes

| URL path | App entry | Compliance notes (initial pass) |
|----------|-----------|----------------------------------|
| `/` | [`src/app/page.tsx`](../src/app/page.tsx) + [`SectionRenderer`](../src/components/sections/section-renderer.tsx) | **CTA:** `contactStrip` + `ctaBand` both present ([`HOME_SECTION_ORDER`](../src/app/page.tsx)). **Tone:** hero dark + marquee dark; services light + why off-white; process dark + parallax dark — see plan Rule 1 table. |
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

## 5. Execution order (from plan; do not batch)

1. Fill **Tone** and **CTA** columns per row using browser + DevTools (one route per session when fixing).
2. Before each production edit: append **snapshot** to `/sandbox/` (sections + copy), per plan.
3. **Priority fixes:** home (duplicate closing CTAs + alternation), company, about, then `ServicePageView` tail, then remainder.
4. **Canonical CTA label** last: pick “Request a Quote” vs “Request a Site Quote”; migrate JSON/components in small commits.

---

## 6. Reference docs

- Master plan: [`.cursor/plans/glc_page_compliance_audit_afcb5ca0.plan.md`](../../.cursor/plans/glc_page_compliance_audit_afcb5ca0.plan.md) (repo-relative from glc-site: `../../.cursor/plans/...`)
- Prior audit notes: [`glc-site/audit/routes-matrix.md`](routes-matrix.md)

_Last updated: audit matrix scaffold; per-route Tone/CTA cells to be filled during walkthrough._
