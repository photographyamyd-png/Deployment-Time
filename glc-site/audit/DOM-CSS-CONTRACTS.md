# DOM–CSS contract audit (Phase 3)

Generated: 2026-04-20T18:35:46.750Z

## Method

1. Collect **GLC-like** class tokens from `glc-base.css` (BEM `__` / `--`, or known prefixes such as `gl-`, `hero-v2`, `exc-`, etc.).
2. Concatenate all `src/app`, `src/components`, `src/content`, `src/lib` files with extensions `.tsx`, `.ts`, `.jsx`, `.js`, `.json`.
3. If a class string **never appears** in that corpus, flag as **orphan** — either **unused CSS** or **markup/DOM never emitted** (contract break).

**Limits:** dynamic class names built without the literal substring will false-negative. Rare false-positives if a class is only used in non-scanned files.

## Summary

| Metric | Count |
|--------|-------|
| Distinct GL-like classes in CSS | 3281 |
| Not found in TS/TSX/JSON corpus | **2014** |
| Source files scanned | 147 |

## Top orphan BEM blocks (by stem)

| Block stem | Orphan rule count |
|------------|-------------------|
| `glc-drain-hub` | 95 |
| `glc-drain-rw-atelier` | 52 |
| `about-clean` | 46 |
| `glc-drain-page` | 44 |
| `home-services-stc1` | 42 |
| `exhub-s1` | 37 |
| `glc-drain-hero-split` | 34 |
| `tst5` | 31 |
| `glc-snow-svo` | 30 |
| `exhub-hero` | 28 |
| `sandbox-ds-proj1` | 27 |
| `sandbox-ds-fleet1` | 26 |
| `cap1` | 24 |
| `exc-septic` | 23 |
| `fci-hero` | 23 |
| `glc-drain-integration` | 23 |
| `exhub-s2` | 22 |
| `gl-sticky-info-tabs` | 22 |
| `glc-drain-patios` | 22 |
| `exhub-geo-atlas` | 21 |
| `glc-drain-process` | 21 |
| `about` | 20 |
| `glc-density-acc` | 20 |
| `glc-drain-why-dse` | 20 |
| `hero` | 20 |
| `exhub-faq` | 19 |
| `test-r2` | 19 |
| `glc-drain-final-l21` | 18 |
| `glc-snow-property-v3` | 18 |
| `sandbox-ds-stabs` | 18 |
| `tst3` | 18 |
| `glc-drain-site-dse` | 17 |
| `glc-snow-contracts-v2` | 17 |
| `glc-snow-why-v3` | 17 |
| `glc-contact-page` | 16 |
| `sandbox-ds-gall1` | 16 |
| `exhub-final-i` | 15 |
| `glc-drain-areas` | 15 |
| `glc-drain-foundation` | 15 |
| `glc-snow-process-v3` | 15 |

## Likely dead CSS families

Blocks with **≥12** orphan selectors and **no** occurrence of the block string in scanned source (heuristic: legacy or never-wired UI).

| Block | Orphan selectors |
|-------|------------------|
| `glc-drain-rw-atelier` | 52 |
| `about-clean` | 46 |
| `home-services-stc1` | 42 |
| `exhub-s1` | 37 |
| `glc-drain-hero-split` | 34 |
| `glc-snow-svo` | 30 |
| `exhub-hero` | 28 |
| `sandbox-ds-proj1` | 27 |
| `sandbox-ds-fleet1` | 26 |
| `exc-septic` | 23 |
| `fci-hero` | 23 |
| `glc-drain-integration` | 23 |
| `exhub-s2` | 22 |
| `gl-sticky-info-tabs` | 22 |
| `glc-drain-patios` | 22 |
| `exhub-geo-atlas` | 21 |
| `glc-drain-process` | 21 |
| `glc-density-acc` | 20 |
| `glc-drain-why-dse` | 20 |
| `exhub-faq` | 19 |
| `test-r2` | 19 |
| `glc-drain-final-l21` | 18 |
| `glc-snow-property-v3` | 18 |
| `sandbox-ds-stabs` | 18 |
| `glc-drain-site-dse` | 17 |
| `glc-snow-contracts-v2` | 17 |
| `glc-snow-why-v3` | 17 |
| `glc-contact-page` | 16 |
| `sandbox-ds-gall1` | 16 |
| `exhub-final-i` | 15 |
| `glc-drain-areas` | 15 |
| `glc-drain-foundation` | 15 |
| `glc-snow-process-v3` | 15 |
| `exhub-trust` | 13 |
| `fci-faq` | 13 |
| `glc-snow-contracts-sbx` | 13 |
| `glc-snow-process-sbx` | 13 |
| `glc-snow-property-sbx` | 13 |
| `sandbox-ds-sect1` | 13 |
| `cta-r2` | 12 |
| `fci-mid-cta` | 12 |
| `glc-drain-l14` | 12 |
| `glc-snow-sla-v2` | 12 |
| `glc-snow-svcarea-v3` | 12 |
| `glc-snow-why-sbx` | 12 |
| `l-tabs` | 12 |
| `sandbox-ds-care1` | 12 |
| `svhub-hero` | 12 |


## Sample orphans (first 120)

- `ab3__perf`
- `ab3__perf-cell`
- `ab3__perf-grid`
- `ab3__perf-lbl`
- `ab3__perf-sub`
- `ab3__perf-val`
- `about__badge`
- `about__badge-text`
- `about__container`
- `about__cred-sub`
- `about__cred-title`
- `about__creds`
- `about__eyebrow-row`
- `about__heading-rule`
- `about__photo-panel`
- `about__photo-placeholder`
- `about__photo-shell`
- `about__rule-bar`
- `about__split`
- `about__stat-chip`
- `about__stat-chip-label`
- `about__stat-chip-num`
- `about__top-accent`
- `about__top-accent-label`
- `about__top-accent-num`
- `about__wm`
- `about-clean`
- `about-clean__bottom-cta`
- `about-clean__c-dot`
- `about-clean__c-dot--press`
- `about-clean__c-ring`
- `about-clean__container`
- `about-clean__cta-row`
- `about-clean__d5-rule`
- `about-clean__dark`
- `about-clean__display`
- `about-clean__display-line`
- `about-clean__display-line--accent`
- `about-clean__display-line--muted`
- `about-clean__display-line--strong`
- `about-clean__field-img`
- `about-clean__field-photo`
- `about-clean__ghost-dark`
- `about-clean__h2`
- `about-clean__h2--light`
- `about-clean__hero`
- `about-clean__hero-grain`
- `about-clean__hero-grain--dse`
- `about-clean__hero-grid`
- `about-clean__hero-panel`
- `about-clean__hero-photo`
- `about-clean__hero-photo-wrap`
- `about-clean__hero-rail`
- `about-clean__hero-sweep`
- `about-clean__lede`
- `about-clean__light`
- `about-clean__motif-divider`
- `about-clean__panel-card`
- `about-clean__pillars`
- `about-clean__quote-card`
- `about-clean__quote-grid`
- `about-clean__split`
- `about-clean__split--story`
- `about-clean__stats-grid`
- `about-clean__story-media`
- `about-clean__story-photo`
- `about-clean__story-photo-frame`
- `about-clean__sweep-a1`
- `about-clean__sweep-a2`
- `about-clean__testimonials`
- `about-clean__testimonials-head`
- `about-clean--experience`
- `acc-item__chev`
- `acc-item__panel`
- `acc-item__trigger`
- `cap1__actions`
- `cap1__body`
- `cap1__copy--reverse`
- `cap1__credential`
- `cap1__credential-sub`
- `cap1__credential-title`
- `cap1__eyebrow`
- `cap1__grid`
- `cap1__grid--asym-left`
- `cap1__grid--asym-right`
- `cap1__grid--balanced`
- `cap1__grid--bleed`
- `cap1__heading`
- `cap1__key`
- `cap1__lede`
- `cap1__media`
- `cap1__media--bleed`
- `cap1__media--offset`
- `cap1__media-shell`
- `cap1__media-slab`
- `cap1__readmore`
- `cap1__readmore__inner`
- `cap1__readmore--key`
- `cap1__rule`
- `cap2__cell`
- `cap2__cell-text`
- `cap2__cells`
- `cap2__cells--2`
- `cap2__cells--3`
- `cap2__closing`
- `cap2__closing-label`
- `cap2__eyebrow`
- `cap2__heading`
- `cap2__inner`
- `cap2__intro`
- `cap2__rule`
- `coverage__area`
- `coverage__area-dot`
- `coverage__area-name`
- `coverage__area-sub`
- `coverage__area-text`
- `coverage__areas`
- `coverage__band-cta`
- `coverage__body`
- `coverage__eyebrow`


_Full list: `audit/dom-css-contracts.json` → `orphans`._


## Manual follow-ups (not automated)

- Parent/child flex contracts (e.g. motion wrapper without layout class).
- `position: absolute` inside flex children without reserved width (see fixed utility rotator).
- Cross-check high-count orphan families against GLC_MASTER / design intent before deleting CSS.
