# Phase 4 — Responsive route matrix

**Method:** With `npm run dev`, open each URL at **http://127.0.0.1:3040** (see [`package.json`](../package.json)). For each **viewport width**, mark pass/fail against [`RESPONSIVE-SWEEP.md`](RESPONSIVE-SWEEP.md) bullets.

**Widths:** 1200 · 1024 · 768 · 640 · 390 (px).

**Legend:** `☐` not yet checked · `✓` pass · `✗` fail (add row in [`ISSUE-MATRIX.md`](ISSUE-MATRIX.md) with DOM path + width).

## Static routes

| Route | 1200 | 1024 | 768 | 640 | 390 | Notes |
|-------|------|------|-----|-----|-----|-------|
| `/` | ☐ | ☐ | ☐ | ☐ | ☐ | Homepage — hero rail, marquee, grids |
| `/about` | ☐ | ☐ | ☐ | ☐ | ☐ | |
| `/company` | ☐ | ☐ | ☐ | ☐ | ☐ | |
| `/contact` | ☐ | ☐ | ☐ | ☐ | ☐ | |
| `/coverage` | ☐ | ☐ | ☐ | ☐ | ☐ | |
| `/process` | ☐ | ☐ | ☐ | ☐ | ☐ | |
| `/projects` | ☐ | ☐ | ☐ | ☐ | ☐ | |
| `/services` | ☐ | ☐ | ☐ | ☐ | ☐ | Hub + mega |
| `/privacy` | ☐ | ☐ | ☐ | ☐ | ☐ | |
| `/terms` | ☐ | ☐ | ☐ | ☐ | ☐ | |
| `/sandbox` | ☐ | ☐ | ☐ | ☐ | ☐ | Dev-only patterns |

## Service detail (fixed)

| Route | 1200 | 1024 | 768 | 640 | 390 | Notes |
|-------|------|------|-----|-----|-----|-------|
| `/services/drainage-hardscaping` | ☐ | ☐ | ☐ | ☐ | ☐ | Long hub |
| `/services/excavation-site-preparation` | ☐ | ☐ | ☐ | ☐ | ☐ | |
| `/services/foundations-civil-infrastructure` | ☐ | ☐ | ☐ | ☐ | ☐ | |
| `/services/hauling-site-clearing-logistics` | ☐ | ☐ | ☐ | ☐ | ☐ | |
| `/services/snow-removal` | ☐ | ☐ | ☐ | ☐ | ☐ | |

## Dynamic (sample one URL each)

| Example URL | 1200 | 1024 | 768 | 640 | 390 | Notes |
|-------------|------|------|-----|-----|-----|-------|
| `/services/commercial-parking-lot-snow-plowing-barrie` | ☐ | ☐ | ☐ | ☐ | ☐ | From `[slug]` SSG list |
| `/locations/commercial-snow-removal-barrie-ontario` | ☐ | ☐ | ☐ | ☐ | ☐ | From `locations/[slug]` |

## Phase 4 completion criteria

- Every **static** route has at least one full pass at **768** and **390** (mobile drawer + no horizontal scroll).
- All **failures** logged in `ISSUE-MATRIX.md` with **RESP-** IDs.
