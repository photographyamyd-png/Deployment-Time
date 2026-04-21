---
name: GLC page compliance audit (ground rules)
overview: Structured pass over production routes for section alternation (dark/light), one job per section, one primary quote CTA label sitewide, and no duplicate closing CTAs. Ops—one page.tsx per fix session; do not mix glc-base.css with page/layout in one commit; use /sandbox/ for labeled backups before production edits.
todos:
  - id: audit-matrix
    content: "1 — Audit only: matrix §1–4 + §9; D/L + primary CTA per route (browser where required)."
    status: in_progress
  - id: fix-home-alternation
    content: "2 — Home Rule 1: hero→marquee (light marquee JSON) + coverage seams (glc-base); still OPEN services/why, process/parallax — browser."
    status: in_progress
  - id: sandbox-cta-spike
    content: "3 — Optional: /sandbox header hidden vs canonical header CTA (visual CTA count)."
    status: pending
  - id: fix-company-cta
    content: "4 — company/page.tsx: ContactStrip removed; browser /company/."
    status: completed
  - id: fix-about-cta
    content: "5 — about view only; dedupe btn-primary + CtaBand; browser /about/."
    status: pending
  - id: fix-service-tail
    content: "6 — service-page-view.tsx only; coverage→stats + tail CTAs; one slug in browser."
    status: pending
  - id: canonical-quote-label
    content: "7 — Canonical quote label migration (small commits; header/drawer last)."
    status: pending
  - id: fix-home-cta-dup
    content: "Done: contactStrip off home order; ctaBand on home; OPEN coverage→cta → step 2."
    status: completed
isProject: false
---

# GLC page compliance audit (ground rules)

**Where the todo list lives**

1. **Cursor Plans panel** — open this file from **Plans** in the sidebar; checkboxes bind to YAML `todos` above (execution order **1 → 7**).
2. **Repo mirror (always visible)** — [`glc-site/audit/PAGE-COMPLIANCE-MATRIX.md` §9](../../glc-site/audit/PAGE-COMPLIANCE-MATRIX.md) duplicates the same ordered steps so you are not dependent on the Plan UI or a single chat thread.
3. **Composer/agent checkboxes** — ephemeral to that conversation; **not** authoritative.

**Working checklist (audit findings scaffold):** [`glc-site/audit/PAGE-COMPLIANCE-MATRIX.md`](../../glc-site/audit/PAGE-COMPLIANCE-MATRIX.md) — route table, app entry links, and **initial notes**. Per-row **Tone** / **CTA** detail is filled during the browser walk (not yet complete in the matrix “Compliance notes” column beyond the first pass).

**Internal sandbox (backups / spikes):** `http://127.0.0.1:3040/sandbox/` — append labeled snapshot blocks before changing production copy or section order.

---

## Ground rules (audit criteria)

1. **Alternation:** Dark (`--charcoal`, `--charcoal-deep`) and light (`--white`, `--off-white`, `--gray-100`) section backgrounds must **alternate** — no two dark bands adjacent.
2. **One job per section:** Each section has one clear purpose (~5 words headline test).
3. **One primary quote CTA** per page where the product rule applies, with a **single canonical label** sitewide (pick one: e.g. “Request a Quote” vs “Request a Site Quote”; migrate last, in small commits).
4. **No duplicate closing CTAs:** e.g. do not end with both `ContactStripSection` and `CtaBandSection` without an explicit product decision.

**Operational (same as matrix §0)**

- Never combine **`glc-base.css`** or **`glc-services-rebuild.css`** with **`page.tsx` / layout** in the **same commit**.
- Never change **multiple** `page.tsx` files in **one session**.
- After each change: **browser check** on affected route(s) — build-only is not enough.
- Do **not** reorder sections and rewrite copy in the **same** change.
- Never alter **`--yellow-core`** away from `#F2B705`.

**Scope (production routes):** `app/page.tsx` (home), `about`, `company`, `contact`, `coverage`, `process`, `projects`, `services`, `locations/[slug]`, `services/[slug]`, each `app/services/*/page.tsx`, `privacy`, `terms`. **`/sandbox/`** test-only unless held to same bar.

**Tone definitions:** Charcoal / charcoal-deep + default marquee (`rgba(20,18,16,0.92)` ~L1795) = **dark**; white / off-white / gray-100 = **light**; full-bleed photo + dark scrim (e.g. `.gl-parallax-type-band--dark`) = **dark**. Yellow is neither — decide marquee strict vs accent.

**CTA:** Primary = `btn-primary` / `gl-btn--primary` or explicit form CTA in bands; phone/email separately. Optional **`/sandbox` spike:** header hidden vs header + canonical CTA only for per-page limit.

**Homepage `HOME_SECTION_ORDER` (live):** ends with **`ctaBand` only** — `contactStrip` omitted from renderer (Rules 4–5: one closing band); `contactStrip` JSON kept for `getHomeSectionProps` on company, etc. **OPEN Rule 1:** `#coverage` (D) → `#cta-band` (D) until alternation-only commit. Other stacks to fix: hero→marquee; services→why; process→parallax.

**ServicePageView tail:** `CoverageSection` → `StatsBar` → `ContactBand` — `#coverage` + `#stats.st3` **D→D**; remediate with light spacer moved, or one band’s ground in **CSS-only** commit (never same commit as view reorder).

---

## Rule 1 — Homepage tone stack (reference)

| # | Block | Tone (approx.) | Notes |
|---|--------|----------------|-------|
| 1 | hero | D | |
| 2 | marquee | D | D→D vs hero under strict reading |
| 3 | about | L | |
| 4 | stats | D | |
| 5 | services | L | |
| 6 | why | L | L→L vs services |
| 7 | process | D | |
| 8 | parallaxBand | D | D→D vs process |
| 9 | testimonials | L | |
| 10 | coverage | D | |
| 11 | ctaBand | D | D→D vs coverage until alternation fix |

Exact DOM must be confirmed in browser; [`PAGE-COMPLIANCE-MATRIX.md`](../../glc-site/audit/PAGE-COMPLIANCE-MATRIX.md) §5 is source of truth for numbering.

---

## Route coverage (audit scope)

All **trailing-slash** public paths ([`next.config.ts`](../../glc-site/next.config.ts)).

1. **Static & hubs:** `/`, `/about/`, `/company/`, `/contact/`, `/coverage/`, `/process/`, `/projects/`, `/services/`, `/privacy/`, `/terms/`, `/sandbox/` (internal).
2. **Six service hub** `page.tsx` routes — see matrix §2.
3. **Commercial snow** `/services/[slug]/` — eight fixed slugs (matrix §3).
4. **Locations** `/locations/[slug]/` — five snow slugs (matrix §4).

**Shared template:** [`ServicePageView`](../../glc-site/src/components/services/service-page-view.tsx) — tail often `CoverageSection` → `StatsBar` → `ContactBand`; **initial finding:** possible **adjacent dark** on `#coverage` + `#stats` and **multiple end CTAs** — verify each hub that uses this view.

---

## Execution order (fixes)

Follow **safe batches** in [`PAGE-COMPLIANCE-MATRIX.md` §7](../../glc-site/audit/PAGE-COMPLIANCE-MATRIX.md): audit-only → one file → browser → commit; CSS vs composition never mixed; one `page.tsx` per session; label migration last.

---

## Reference

- Prior notes: [`glc-site/audit/routes-matrix.md`](../../glc-site/audit/routes-matrix.md) (if present).
