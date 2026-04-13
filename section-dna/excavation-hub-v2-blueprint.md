# Excavation hub v2 — section blueprint (implementation reference)

Content source: `glc-site/src/content/pages/excavation-hub-seo.json` — copy and order unchanged.

| # | Block | DNA inspiration (approved-sections.json) | Primary motif + shell | Notes |
|---|--------|---------------------------------------------|----------------------|--------|
| 1 | Hero | `hero-v2-flagship-asymmetric`, `gl-parallax-type-band-shared` | **D1** clip on media, **A1** static sweep, **Shell** `.dse` `.dse-grain`; **B4** | Single Framer parallax budget (bg + photo drift). |
| 2 | Trust | `stats-st3-dark-editorial`, `coverage-dark-territory-band` | **Shell** `.ls`, **C1**, **B2** | Light band; `fbullet`-style ticks. |
| 3a | Services A (0–4) | `process-proc3-split-timeline`, `why-why3-editorial-manifesto` | **A5** `glc-motif-heading-rule`, **Shell** `.ls` | Timeline rail `<details name="exhub-svc-a">`. |
| 4 | Mid CTA | `cta-band-cta3-charcoal-close` | **A6** `.glc-motif-a6-watermark`, **Shell** `.dse`, **B1** | Static full-bleed image band. |
| 3b | Services B (5–10) | `services-home-grid-cards` | **B5** / `.hcard`, **Shell** `.ls` | Card grid + `<details name="exhub-svc-b">`. |
| 5 | Geo | `coverage-dark-territory-band` (inverted to light) | **D6** `glc-motif-d6-split`, **D1** on map | Light editorial; seam between map and copy. |
| 6 | FAQ | `testimonials-tst3-editorial` | **D4** slash rail, **Shell** `.dse` `.dse-rail` | Dark editorial; numeric rail. |
| 7 | Final CTA | Distinct from mid | **B5** `glc-motif-b5-inverted`, **C1**, `.ls` | Split mast; centered actions on light. |

**Layer stacks (abbrev):** Hero: bg → A1 static → grain → scrim → B4 → grid (copy \| media+chips). Trust: C1 → B2 → list. Services A: heading rail → timeline. Mid: bg image → scrim → A6 → B1 → content. Services B: hcard grid. Geo: D6 split (map \| copy) → chips. FAQ: rail → D4 rows. Final: C1 → B5 → copy/actions.

**Orchestrator:** `ExcavationServicesFlow` renders A3 dividers between light/dark transitions; preserves service `id` attributes and `details` group exclusivity.
