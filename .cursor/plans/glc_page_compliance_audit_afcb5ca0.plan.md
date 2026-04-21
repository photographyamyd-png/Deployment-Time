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
    content: "Single session: remove duplicate closing CTA on home (contactStrip vs ctaBand) via page order + home-section-order only; browser check."
    status: pending
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

**Operational**

- **One** `page.tsx` (or one focused surface) per fix session.
- Do **not** commit `glc-base.css` changes in the same commit as page/layout reordering for compliance.
- After material UI changes: quick **browser check** on the affected route(s).

---

## Rule 1 — Homepage tone stack (known issue, initial audit)

| Order (approx.) | Section / band | Tone (initial read) | Notes |
|-----------------|------------------|---------------------|--------|
| 1 | Hero | Dark | OK as opener |
| 2 | Marquee | Yellow / dark-adjacent risk | Verify vs hero — may read as two dark-adjacent depending on implementation |
| 3 | Services | Light | |
| 4 | Why | Off-white | |
| 5 | Process | Dark | |
| 6 | Parallax | Dark | **Adjacent dark** with process if both charcoal family |
| … | CTA bands | | **2026-04-21:** Homepage omits `ctaBand` in [`HOME_SECTION_ORDER`](../../glc-site/src/lib/home-section-order.ts) — terminal band is `contactStrip` only; `ctaBand` props remain in `home.json` for other pages. **Tradeoff:** no dual-panel `#cta` on `/` until alternation strategy allows both. |

Exact DOM and CSS classes must be confirmed in browser; the matrix row for `/` is the source of truth once filled.

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
