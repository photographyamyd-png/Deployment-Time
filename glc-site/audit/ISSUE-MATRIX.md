# Issue matrix (GLC audit)

Add one row per confirmed defect. Do not bulk-fix CSS without a row here.

| ID | Layer | Template | Route(s) | Severity | Evidence | Root cause | Proposed fix | Status |
|----|-------|----------|----------|----------|----------|------------|--------------|--------|
| LAYOUT-001 | DOM-CSS / Responsive | Global header | All (utility visible ≥769px) | P0 | Overlap: rotator vs hours/phone | Flex child `.gl-util-rotator` had only absolute children → width collapsed; nowrap text drew over contact | Grid on `.gl-header__utility-right`; rotator `width:100%`, `overflow:hidden`, line `ellipsis` | Fixed |
| LAYOUT-002 | DOM-CSS | Homepage hero, drainage hub | `/`, drainage hub | P1 | Uneven service rail tiles | CSS expected `.hero-v2__service-tile-wrap`; TSX used bare `motion.div` | Add `className="hero-v2__service-tile-wrap"` on `motion.div` | Fixed |
| INT-001 | Integrity | Build | — | P0 | `layout.tsx` imported untracked files | Imports added without tracking assets in git | Track `glc-next-font-bridge.css`, `json-ld-website.tsx` | Fixed |
| AUDIT-P3 | Static / DOM-CSS | Site-wide | * | P2 | `dom-css-contracts.json`: **2014** orphan selectors vs **3281** GL-like CSS classes | Legacy / alternate templates in `glc-base.css` never referenced in scanned `src/` | Triage **Likely dead CSS families** in [`DOM-CSS-CONTRACTS.md`](DOM-CSS-CONTRACTS.md); remove or document intentional reserves | Open |
| AUDIT-P5 | Rules (heuristic) | `glc-base.css` | * | P3 | [`RULES-SNAPSHOT.md`](RULES-SNAPSHOT.md): **1** non-token `border-radius`, **3** monospace `font-family` lines | Part 8 spot-check; monospace may be intentional (code/sandbox) | Confirm `.svlayer__figure-bite` `2px` vs Rule 02; document exceptions | Open |
| PHASE-4 | Responsive | All routes | * | — | — | `npm run audit:responsive` | [`RESPONSIVE-SWEEP.md`](RESPONSIVE-SWEEP.md) | Done |

## Phase 2 — static audit

- Run: `npm run audit:classes` → `audit/class-css-gaps.json` (class names in TSX not found in `glc-base.css`).
- Latest run: **135 gaps** (many may be Tailwind false positives or intentional; triage before treating as bugs).

## Phase 3 — DOM–CSS contracts (reverse: CSS → source)

- Run: `npm run audit:dom-css` → [`audit/DOM-CSS-CONTRACTS.md`](DOM-CSS-CONTRACTS.md) + `audit/dom-css-contracts.json`.
- **Full guide:** [`AUDIT-RUNBOOK.md`](AUDIT-RUNBOOK.md) (what `07f0e5a` did, limits, vs Path B).
- Interprets **orphan** selectors: in `glc-base.css` but string never appears under `src/app`, `components`, `content`, `lib`.
- **Likely dead families:** blocks with ≥12 orphans and block name absent from corpus (see report table).

## Phase 4 — responsive matrix

- **Runbook:** [`PHASE-4-ROUTE-MATRIX.md`](PHASE-4-ROUTE-MATRIX.md) + [`RESPONSIVE-SWEEP.md`](RESPONSIVE-SWEEP.md).
- **Dev URL:** `http://127.0.0.1:3040` (see root `package.json` dev script).

## Phase 5 — rules snapshot

- Run: `npm run audit:rules` → [`RULES-SNAPSHOT.md`](RULES-SNAPSHOT.md) + `rules-snapshot.json`.

## Phase 6 — issue matrix

- This file is the **gate** for bulk CSS or layout changes; add **RESP-*** for Phase 4 failures.
