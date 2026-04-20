# GLC audit runbook (Phases 0–6)

Single place to **run** audits, **read** outputs, and **interpret** results. Complements [`ISSUE-MATRIX.md`](ISSUE-MATRIX.md).

---

## Command cheat sheet

Run from **`glc-site/`**:

| Phase | Command | Outputs |
|-------|---------|---------|
| 2 — TSX classes missing CSS | `npm run audit:classes` | `audit/class-css-gaps.json`, `class-css-gaps.md` |
| 3 — CSS classes missing from source | `npm run audit:dom-css` | `audit/dom-css-contracts.json`, `DOM-CSS-CONTRACTS.md` |
| 5 — Rules heuristics | `npm run audit:rules` | `audit/rules-snapshot.json`, `RULES-SNAPSHOT.md` |
| Build gate | `npm run build` | — |

---

## What commit `07f0e5a` added (Phase 3)

**Commit message:** `chore(glc-site): Phase 3 DOM-CSS contract audit (audit:dom-css)`

**Purpose:** Automate the **reverse** of Path B: Path B asks “is there CSS for this class used in TSX?” Phase 3 asks “is this **CSS class string** ever **mentioned** in our source tree?” If **never**, the selector is an **orphan**: either **dead CSS** (safe to remove after review) or **missing DOM** (you meant to render that markup but don’t).

**Artifacts:**

- [`scripts/audit-dom-css-contracts.mjs`](../scripts/audit-dom-css-contracts.mjs) — parser + scanner.
- [`DOM-CSS-CONTRACTS.md`](DOM-CSS-CONTRACTS.md) — human-readable summary.
- [`dom-css-contracts.json`](dom-css-contracts.json) — machine list (`orphans`, `likelyDeadBlocks`, counts).

**Key numbers (regenerate to refresh):** ~**3281** “GL-like” class tokens found in `glc-base.css`; ~**2014** never appear as a substring in scanned files under `src/app`, `src/components`, `src/content`, `src/lib`.

### How to use Phase 3 (practical triage)

1. **Re-run after big refactors:**  
   `cd glc-site && npm run audit:dom-css`  
   Commit the updated JSON/MD if you want CI or PR diffs to show drift.

2. **Start with “Likely dead CSS families”** in [`DOM-CSS-CONTRACTS.md`](DOM-CSS-CONTRACTS.md):  
   Those are BEM **blocks** with **many** orphan selectors and **no** occurrence of the block name in scanned source. They are the best candidates for **deleting whole sections** of `glc-base.css` **after** you confirm nothing loads them dynamically (see limits below).

3. **Do not bulk-delete without product check:**  
   Some orphans may be **intentional reserves** (upcoming sections), **A/B HTML** not in TSX, or **false orphans** (see limits).

### Limits (read before deleting CSS)

| Limit | Effect |
|--------|--------|
| **Substring match** | The class must appear **verbatim** in a scanned file. `clsx(\`foo-${x}\`)` without the full class string will **not** match → false **orphan**. |
| **Dynamic import / MDX / HTML files** | Not scanned unless under the configured roots/extensions → possible false orphan. |
| **Short block names** | A block like `hero` might match unrelated prose (“hero”) in JSON → “not dead” false negative for family detection; long hyphenated blocks (`glc-drain-rw-atelier`) are reliable. |
| **Likely dead heuristic** | Requires **≥12** orphan selectors and block string absent from corpus — tuned to reduce noise. |

### Relationship to Path B (`audit:classes`)

| Tool | Direction | Question |
|------|-----------|----------|
| `audit:classes` | TSX → CSS | “Component uses class X; is `.X` in `glc-base.css`?” |
| `audit:dom-css` | CSS → TSX | “`.X` exists in CSS; does any source file contain the string `X`?” |

You need **both**: one catches **missing styles**, the other catches **unused styles** or **never-wired markup**.

---

## Phase 4 — Responsive matrix

- **Template:** [`PHASE-4-ROUTE-MATRIX.md`](PHASE-4-ROUTE-MATRIX.md) — fill `☐` → `✓` / `✗`.
- **Checklist bullets:** [`RESPONSIVE-SWEEP.md`](RESPONSIVE-SWEEP.md).
- **Failures:** new rows in `ISSUE-MATRIX.md` (suggested ID prefix **RESP-**).

Phase 4 is **mostly manual**; automation (e.g. Playwright screenshots) is optional later.

---

## Phase 5 — Rules snapshot

- **Output:** [`RULES-SNAPSHOT.md`](RULES-SNAPSHOT.md) — heuristic hits for border-radius, font-family tokens, optional TSX hex.
- **Interpretation:** Every line is a **candidate** for Part 8 review, not an automatic violation.

---

## Phase 6 — Issue matrix

- **Source of truth for fixes:** [`ISSUE-MATRIX.md`](ISSUE-MATRIX.md).
- **Rule:** No large CSS deletes without a matrix row and owner decision.

---

## Suggested cadence

- **Every PR touching `glc-base.css`:** `npm run audit:dom-css` + `npm run audit:classes` (compare counts).
- **Before release:** complete **Phase 4** matrix for `/`, `/services`, `/contact`, and one dynamic service + location URL.
- **Quarterly:** triage top **likely dead** families from Phase 3.
