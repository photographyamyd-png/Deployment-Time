---
name: GLC page compliance audit (ground rules)
overview: Structured pass over production routes for section alternation (dark/light), one job per section, one primary quote CTA label sitewide, and no duplicate closing CTAs. Ops—one page.tsx per fix session; do not mix glc-base.css with page/layout in one commit; use /sandbox/ for labeled backups before production edits.
todos:
  - id: audit-matrix
    content: "Fill PAGE-COMPLIANCE-MATRIX.md per URL: DOM order, tone (D/L), adjacent violations, primary CTA count + labels (browser + DevTools)."
    status: pending
  - id: sandbox-cta-spike
    content: "Optional: two /sandbox variants—header included vs excluded from per-page CTA count; browser snapshot for stakeholder."
    status: pending
  - id: fix-home-cta-dup
    content: "Home: omit contactStrip from HOME_SECTION_ORDER; keep ctaBand; contactStrip JSON for getHomeSectionProps; browser /; OPEN coverage→cta D→D for alternation commit."
    status: completed
  - id: fix-home-alternation
    content: "Separate session(s): hero/marquee, services/why, process/parallax adjacency via reorder OR CSS-only ground change (never mixed with page commit)."
    status: pending
  - id: fix-company-cta
    content: "One session: company/page.tsx—drop ContactStrip or CtaBand; simplify dispatch CTAs; browser check."
    status: pending
  - id: fix-service-tail
    content: "One session: service-page-view.tsx—resolve coverage+stats dark adjacency and multiple end CTAs; verify one slug."
    status: pending
  - id: canonical-quote-label
    content: "Define single label; migrate home.json, cta-band defaults, header/drawer, registry in separate small commits."
    status: pending
isProject: false
---

# GLC page compliance audit (ground rules)

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

1. Complete matrix walk: **tone + CTA** per URL (one route per session when fixing).
2. **Priority fixes:** home (duplicate CTAs + alternation), company, about, then `ServicePageView` tail, then remainder per matrix.
3. **Canonical CTA label** last: JSON, `CtaBand` defaults, header/drawer, registry — **small separate commits**.

---

## Reference

- Prior notes: [`glc-site/audit/routes-matrix.md`](../../glc-site/audit/routes-matrix.md) (if present).
