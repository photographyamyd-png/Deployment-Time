# Path B — routes matrix (status after 2026-04-20 audit pass)

| Route | Primary UI | Audit notes | Status |
|-------|------------|-------------|--------|
| `/` | [`page.tsx`](../src/app/page.tsx), [`section-renderer`](../src/components/sections/section-renderer.tsx) | Home sections: prior fixes for `home-services-photo`, `st3__trust-*`, `hero-v2__trust-badges`, mega thumbs. Contact strip: added `home-contact-strip__locations`, `__cta-row`, `__cta-secondary`, `__block--address`. | CSS gaps triaged |
| `/about/` | [`about-page-view`](../src/components/pages/about-page-view.tsx) | Added grid children: `about-pg-split__copy`, `about-pg-media__copy`, `about-pg-audience__intro`. | Done |
| `/company/` | [`company/page`](../src/app/company/page.tsx) | Added `company-pg-trio__col` (`min-width: 0`). | Done |
| `/contact/` | [`contact-page-view`](../src/components/pages/contact-page-view.tsx), [`contact-form`](../src/components/pages/contact-form.tsx) | Full `contact-pg*` + form control styles added. | Done |
| `/coverage/` | [`coverage-section`](../src/components/sections/coverage-section.tsx), extras | Added `cov4__main`, `cov4__narrative`. | Done |
| `/process/` | [`process-section`](../src/components/sections/process-section.tsx) | Added `proc4__jump-txt`, `proc4__card-body`; `proc4__floor-cta` present. | Done |
| `/projects/` | page view | Uses shared primitives; no new gaps in top report. | Spot OK |
| `/privacy/`, `/terms/` | legal pages | Full `legal-pg*` block added. | Done |
| `/services/excavation-site-preparation/` | excavation hub components | Added `exc-canon`, `exc-faq`, `exc-geo`; `exc-research__intro-block`, `exc-research__block--geo`; `exc-trust__copy`, slot modifiers; GL typography `.gl-h2`, `.gl-eyebrow*`, `.gl-prose*`, `.gl-pullquote`. | Done |
| `/services/drainage-hardscaping/` | drainage hub | Seam classes share `.glc-drain-page__mist-seam` (no extra rules required). Remaining `glc-drain-hub__*` wrappers: Tier 2 if layout issues reported. | Partial / inherited |
| `/services/snow-removal/` + snow slugs | snow components | `glc-snow-*` gaps remain in automated report; address in follow-up if visual bugs. | Backlog |
| `/sandbox/` | sandbox | Tier 2 per plan; many `sandbox*` gaps intentional playground. | Backlog |
| Layout | [`site-header`](../src/components/layout/site-header.tsx), [`mobile-drawer`](../src/components/layout/mobile-drawer.tsx), mega | `gl-util-hours`, `gl-mega-quick-contact*`, `gl-drawer-phone--header`, `gl-drawer-section-label`, `gl-react-embed-section`. | Done |
| `#testimonials` | [`testimonials-section`](../src/components/sections/testimonials-section.tsx) | `proj4__quote-body` wrapper added. | Done |

**Dynamic routes** `services/[slug]`, `locations/[slug]`: templates share service/location views; same CSS system. Spot-check after content changes.
