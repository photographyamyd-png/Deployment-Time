# Path B execution log

## Layer 1 — Automated gap scan

- **Script:** [`scripts/audit-class-css-gaps.mjs`](../scripts/audit-class-css-gaps.mjs)
- **Outputs:** `audit/class-css-gaps.json`, `audit/class-css-gaps.md`
- **Before fixes:** 227 GLC-like class tokens not found as `.class` in `glc-base.css`
- **After batch:** 151 (re-run after commits; remaining mostly sandbox, snow subpages, drainage wrapper BEM, `service-layout-variants` process clone)

## Global / layout

- **Findings:** Missing GLC master typography in CSS (`.gl-h2`, `.gl-eyebrow`, `.gl-prose`, etc. used by excavation hub); mega quick-contact column unstyled; mobile drawer section label / header phone modifiers missing; embed section wrapper missing.
- **Changes:** [`src/styles/glc-base.css`](../src/styles/glc-base.css) — typography block; `gl-mega-quick-contact*`; `gl-react-embed-section`; `gl-drawer-phone--header`, `gl-drawer-section-label` (utility bar hours fixed in earlier commit).

## Legal & contact pages

- **Findings:** `legal-pg*`, `contact-pg*` had no rules → unstyled layout and form.
- **Changes:** `legal-pg`, `legal-pg__inner/title/lede`; `contact-pg` split grid, form fields, aside, footer meta; focus rings use `var(--yellow-core)`.

## Excavation hub (`/services/excavation-site-preparation/`)

- **Sections:** `ExcavationServiceCanon` (`exc-canon*`), `ExcavationFaqEditorial` (`exc-faq*`), `ExcavationGeoHub` (`exc-geo*`), `ExcavationSeoResearch` (partial gaps), `ExcavationTrustStrip` (partial gaps).
- **Changes:** Full `exc-canon` accordion; `exc-faq` rail + cards; `exc-geo` dark mast + territory grid; `exc-research__intro-block`, `exc-research__block--geo`; `exc-trust__copy`, yellow accent on `__slot--*` variants; dark geo section forces light prose on intro/cards via scoped selectors.

## Home & shared sections

- **Contact strip:** `home-contact-strip__locations`, `__cta-row`, `__cta-secondary`, `__block--address`.
- **Coverage (`cov4`):** `cov4__main`, `cov4__narrative` stack spacing.
- **About:** Grid overflow fixes `about-pg-split__copy`, `about-pg-media__copy`, `about-pg-audience__intro`.
- **Company:** `company-pg-trio__col`.
- **Process / testimonials:** `proc4__jump-txt`, `proc4__card-body`; `proj4__quote-body`.

## Regression tooling

- **`npm run audit:classes`** → runs gap script (see [`package.json`](../package.json)).

## Follow-up (backlog from gap report)

- `glc-snow-contracts3*`, `glc-snow-linked-expand*`, snow linked pages
- `service-layout-variants` `cta-band__*`, `process__*` if those templates render on live routes
- Sandbox-only `sandbox-phase*` classes (Tier 2)
- Drainage `glc-drain-hub__cap-*` / coverage figure wrappers if visual QA fails
