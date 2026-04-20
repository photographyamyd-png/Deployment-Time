# Phase 4 — Responsive route matrix

**Method:** Automated — `npm run audit:responsive` (Playwright). Last run: 2026-04-20T19:46:08.273Z.

**Widths:** 1200 · 1024 · 768 · 640 · 390 (px).

**Legend:** `✓` pass · `✗` fail — see [`RESPONSIVE-SWEEP.md`](RESPONSIVE-SWEEP.md) and [`responsive-failures.json`](responsive-failures.json).

## Static routes

| Route | 1200 | 1024 | 768 | 640 | 390 | Notes |
|-------|------|------|------|------|------|--------|
| `/` | ✓ | ✓ | ✓ | ✓ | ✓ | Homepage — hero rail, marquee, grids |
| `/about` | ✓ | ✓ | ✓ | ✓ | ✓ |  |
| `/company` | ✓ | ✓ | ✓ | ✓ | ✓ |  |
| `/contact` | ✓ | ✓ | ✓ | ✓ | ✓ |  |
| `/coverage` | ✓ | ✓ | ✓ | ✓ | ✓ |  |
| `/process` | ✓ | ✓ | ✓ | ✓ | ✓ |  |
| `/projects` | ✓ | ✓ | ✓ | ✓ | ✓ |  |
| `/services` | ✓ | ✓ | ✓ | ✓ | ✓ |  |
| `/privacy` | ✓ | ✓ | ✓ | ✓ | ✓ |  |
| `/terms` | ✓ | ✓ | ✓ | ✓ | ✓ |  |
| `/sandbox` | ✓ | ✓ | ✓ | ✓ | ✓ |  |

## Service detail (fixed)

| Route | 1200 | 1024 | 768 | 640 | 390 | Notes |
|-------|------|------|------|------|------|--------|
| `/services/drainage-hardscaping` | ✓ | ✓ | ✓ | ✓ | ✓ | Long hub |
| `/services/excavation-site-preparation` | ✓ | ✓ | ✓ | ✓ | ✓ |  |
| `/services/foundations-civil-infrastructure` | ✓ | ✓ | ✓ | ✓ | ✓ |  |
| `/services/hauling-site-clearing-logistics` | ✓ | ✓ | ✓ | ✓ | ✓ |  |
| `/services/snow-removal` | ✓ | ✓ | ✓ | ✓ | ✓ |  |

## Dynamic (sample one URL each)

| Route | 1200 | 1024 | 768 | 640 | 390 | Notes |
|-------|------|------|------|------|------|--------|
| `/services/commercial-parking-lot-snow-plowing-barrie` | ✓ | ✓ | ✓ | ✓ | ✓ | From `[slug]` SSG list |
| `/locations/commercial-snow-removal-barrie-ontario` | ✓ | ✓ | ✓ | ✓ | ✓ | From `locations/[slug]` |

## Phase 4 completion criteria

- Every **static** route has at least one full pass at **768** and **390** (mobile drawer + no horizontal scroll).
- All **failures** logged in `ISSUE-MATRIX.md` with **RESP-** IDs.
