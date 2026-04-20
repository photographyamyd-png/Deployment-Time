# Issue matrix (GLC audit)

Add one row per confirmed defect. Do not bulk-fix CSS without a row here.

| ID | Layer | Template | Route(s) | Severity | Evidence | Root cause | Proposed fix | Status |
|----|-------|----------|----------|----------|----------|------------|--------------|--------|
| LAYOUT-001 | DOM-CSS / Responsive | Global header | All (utility visible ≥769px) | P0 | Overlap: rotator vs hours/phone | Flex child `.gl-util-rotator` had only absolute children → width collapsed; nowrap text drew over contact | Grid on `.gl-header__utility-right`; rotator `width:100%`, `overflow:hidden`, line `ellipsis` | Fixed |
| LAYOUT-002 | DOM-CSS | Homepage hero, drainage hub | `/`, drainage hub | P1 | Uneven service rail tiles | CSS expected `.hero-v2__service-tile-wrap`; TSX used bare `motion.div` | Add `className="hero-v2__service-tile-wrap"` on `motion.div` | Fixed |
| INT-001 | Integrity | Build | — | P0 | `layout.tsx` imported untracked files | Imports added without tracking assets in git | Track `glc-next-font-bridge.css`, `json-ld-website.tsx` | Fixed |

## Phase 2 — static audit

- Run: `npm run audit:classes` → `audit/class-css-gaps.json` (class names in TSX not found in `glc-base.css`).
- Latest run: **135 gaps** (many may be Tailwind false positives or intentional; triage before treating as bugs).

## Next rows to add (manual Phase 4)

- Use `RESPONSIVE-SWEEP.md` checklist per template × breakpoint (1200 / 1024 / 768 / 640 / 390).
- Phase 3 DOM–CSS contract grep: BEM blocks in CSS vs TSX usage.
