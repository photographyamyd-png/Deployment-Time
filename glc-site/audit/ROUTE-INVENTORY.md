# GLC route inventory

Baseline: generated during site-wide audit execution. Update when adding `page.tsx` routes.

## Static routes

| Route | File |
|-------|------|
| `/` | `src/app/page.tsx` |
| `/about` | `src/app/about/page.tsx` |
| `/company` | `src/app/company/page.tsx` |
| `/contact` | `src/app/contact/page.tsx` |
| `/coverage` | `src/app/coverage/page.tsx` |
| `/process` | `src/app/process/page.tsx` |
| `/projects` | `src/app/projects/page.tsx` |
| `/services` | `src/app/services/page.tsx` |
| `/privacy` | `src/app/privacy/page.tsx` |
| `/terms` | `src/app/terms/page.tsx` |
| `/sandbox` | `src/app/sandbox/page.tsx` |

## Service detail (fixed segments)

| Route | File |
|-------|------|
| `/services/drainage-hardscaping` | `src/app/services/drainage-hardscaping/page.tsx` |
| `/services/excavation-site-preparation` | `src/app/services/excavation-site-preparation/page.tsx` |
| `/services/foundations-civil-infrastructure` | `src/app/services/foundations-civil-infrastructure/page.tsx` |
| `/services/hauling-site-clearing-logistics` | `src/app/services/hauling-site-clearing-logistics/page.tsx` |
| `/services/snow-removal` | `src/app/services/snow-removal/page.tsx` |

## Dynamic segments

| Pattern | File |
|---------|------|
| `/services/[slug]` | `src/app/services/[slug]/page.tsx` |
| `/locations/[slug]` | `src/app/locations/[slug]/page.tsx` |

## Template tags (for Phase 4 checklist)

- **Homepage:** `/`
- **Services hub:** `/services`
- **Service hub / long-form:** drainage, excavation, snow-removal, etc.
- **Service programmatic:** `/services/[slug]`
- **Marketing:** about, company, process, coverage
- **Contact:** `/contact`
- **Lists:** `/projects`
- **Legal:** privacy, terms
- **Dev:** `/sandbox`
