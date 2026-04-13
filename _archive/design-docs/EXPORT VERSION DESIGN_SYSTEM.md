# EXPORT VERSION DESIGN_SYSTEM

Standalone master design document for Ground Level fresh-build use.

## What this file is
- Self-contained source of truth for brand DNA, section DNA, motif logic, and raw assets.
- Built from 4 references in this workflow.
- No external CSS/SVG dependency required to understand or reuse design logic.

## Source Set (4 refs)
1. Doc 1: Chat-pasted Unified Design System v2.0 payload (conversation reference)
2. Doc 2: KEEPERS/approved/Approved Sections.json
3. Doc 3: GLC-SVG-MOTIF-PREVIEW.html
4. Doc 4: Newest Design System.html

## Brand Tokens (Canonical DNA)
`css
:root {
  --white: #FFFFFF;
  --gray-100: rgba(30,28,26,0.06);
  --gray-200: rgba(30,28,26,0.12);
  --charcoal-deep: #1E1C1A;
  --charcoal-mid: #2E2B28;
  --charcoal-light: #585653;
  --yellow-core: #F7C520;
  --gold: #D4A017;
  --charcoal-tint: rgba(46,43,40,0.06);
  --charcoal-tint-md: rgba(46,43,40,0.12);
  --text-600: rgba(30,28,26,0.90);
  --text-500: rgba(30,28,26,0.80);
  --text-400: rgba(30,28,26,0.55);
  --font-display: 'Oswald', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  --font-industrial: 'Barlow', sans-serif;
  --font-mono: 'Source Code Pro', monospace;
  --ease-expo: cubic-bezier(0.22, 1, 0.36, 1);
  --section-v: clamp(80px, 9vw, 120px);
  --container-max: 1320px;
  --header-h: 80px;
}
`

## Font Stacks
- Display: Oswald
- Body: Plus Jakarta Sans
- Industrial: Barlow
- Mono: Source Code Pro

## Geometric Logic
- Primary angle: 45deg
- Secondary angle: 60deg

## Approved Section Registry (from Doc 2)
- stats-st3-dark-editorial
- bout-ab3-editorial-split
- hero-v2-flagship-asymmetric
- gl-parallax-type-band-shared
- exc-hub-parallax-cta-band
- header-mega-services-panel-shell
- header-primary-nav-links-cluster
- services-home-grid-cards
- why-why3-editorial-manifesto
- process-proc3-split-timeline
- coverage-dark-territory-band
- 	estimonials-tst3-editorial
- cta-band-cta3-charcoal-close
- ooter-site-wide-gray-rail
- glc-snow-p14-midlower-cta

## Conflict Priority Notes (from Doc 2)
- Resolve duplicate section ID owners (#stats, #about, #why, #process, #testimonials, #cta-band) by enforcing single production owner for React usage.
- Keep legacy/v2 overrides scoped out of primary App Router section styling.

## Motif System Snapshot (from Doc 3)
- Group A: sweeps + dividers + cap/strip
- Group B: corner/panel motifs + inverted corner
- Group C: watermark planes
- Group D: micro UI motifs
- Existing slot-class mapping preserved:
  - .motif-corner
  - .motif-slash
  - .motif-cross
  - .motif-triangle

## Blueprint Snippets
### Shard Button
`html
<button class="btn-primary">Get a Quote</button>
`

### Watermark Layer
`css
.watermark-layer::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(247,197,32,0.07), transparent 60%);
  pointer-events: none;
}
`

---

## Verbatim Appendix - Doc 2
`json
{
  "_meta": {
    "title": "Approved Sections",
    "description": "Master reference of section, component, and element DNA approved through chat-driven registry work. Use when building similar sections or components; canonical living registry remains section-dna/catchall.json.",
    "sourceFile": "section-dna/catchall.json",
    "includesFromChat": [
      "About (#about / AboutSection)",
      "Hero v2 â€” 2026-04-05: full DNA merge into hero-v2-flagship-asymmetric (layer stack z0â€“grain, Framer variants, HeroProps/lede split, parallax springs, chips/CTAs/service bar, responsive 1024/768/480, a11y, assets, mounted gate, hub overrides note)",
      "Parallax type band, excavation parallax CTA, mega services panel, primary nav links",
      "Services grid, Stats ST3, Why Why3, Process Proc3, Coverage, Testimonials Tst3, CTA band Cta3, Site footer",
      "Commercial snow P14 mid-lower CTA (glc-snow-midlower-cta / SnowRevealSection)"
    ],
    "sectionCount": 15,
    "sectionIds": [
      "stats-st3-dark-editorial",
      "about-ab3-editorial-split",
      "hero-v2-flagship-asymmetric",
      "gl-parallax-type-band-shared",
      "exc-hub-parallax-cta-band",
      "header-mega-services-panel-shell",
      "header-primary-nav-links-cluster",
      "services-home-grid-cards",
      "why-why3-editorial-manifesto",
      "process-proc3-split-timeline",
      "coverage-dark-territory-band",
      "testimonials-tst3-editorial",
      "cta-band-cta3-charcoal-close",
      "footer-site-wide-gray-rail",
      "glc-snow-p14-midlower-cta"
    ],
    "lastSynced": "2026-04-05",
    "syncNote": "Regenerate from catchall: copy sections[], globalDnaDraft, conflictsToEliminate, or run a small script to merge."
  },
  "globalDnaDraft": {
    "description": "During audit, promote repeated values from sections[] into here, then into section-dna.json.",
    "brandTokens": [
      "--charcoal",
      "--charcoal-deep",
      "--yellow-core",
      "--gold",
      "--white",
      "--off-white",
      "--text-500",
      "--text-400",
      "--gray-200",
      "--gray-100",
      "--font-display",
      "--font-body",
      "--section-v",
      "--section-v-sm",
      "--ease-expo",
      "--container-max"
    ],
    "motion": {
      "defaultEase": "cubic-bezier(0.22, 1, 0.36, 1)",
      "token": "--ease-expo"
    },
    "interactionPatterns": [
      "Scroll reveal: .reveal opacity 0 + translateY(28px) â†’ .reveal.visible; delays reveal--delay-1..4; prefers-reduced-motion: show final state",
      "Hover accent bars: often scaleX(0)â†’1 with transform-origin left and --ease-expo"
    ],
    "layoutRhythmNotes": [
      "Section vertical padding often var(--section-v) desktop, var(--section-v-sm) mobile",
      "Prefer section-scoped class prefixes (e.g. st3__, ab3__) over bare global utilities for section internals"
    ]
  },
  "conflictsToEliminate": [
    {
      "id": "stats-v3-vs-v2-cascade",
      "severity": "high",
      "summary": "Two #stats themes in glc-base.css; later block overrides background and .stat-cell for white v2 while React uses st3__ dark band.",
      "searchInCss": [
        "STATS â€” v3 Dark Editorial",
        "STATS â€” Display-Scale Typography (v2)"
      ],
      "selectors": [
        "#stats",
        ".stat-cell"
      ],
      "resolutionHint": "Scope one theme (e.g. body class or @layer) or delete/merge duplicate #stats; avoid two definitions of the same shared class."
    },
    {
      "id": "about-ab3-plus-v2-overrides",
      "severity": "medium",
      "summary": "AB3 uses ab3__* + #about; later FULL-PAGE REDESIGN adds #about padding and #about::before hairlines. Works together today but v2 also defines unused .about__* classes.",
      "searchInCss": [
        "ABOUT â€” v3 Editorial Split",
        "ABOUT â€” Editorial White (v2)",
        "FULL-PAGE REDESIGN OVERRIDES"
      ],
      "selectors": [
        "#about",
        "#about::before"
      ],
      "resolutionHint": "Keep one documented owner for #about; remove dead .about__* if no component uses it."
    },
    {
      "id": "why-process-testimonials-cta-v2-cascade",
      "severity": "medium",
      "summary": "Later FULL-PAGE REDESIGN blocks redefine #why, #process, #testimonials, #cta-band (v2 layouts: why v2 rows, process-r2__, test-r2__, cta-r2__ + extra #cta-band::after watermark) while App Router uses WhySection why3__, ProcessSection proc3__, TestimonialsSection tst3__, CtaBandSection cta3__.",
      "searchInCss": [
        "WHY â€” Typographic Reason Rows (v2)",
        "PROCESS â€” Editorial 2Ã—2 Staggered Steps (v2)",
        "TESTIMONIALS â€” Featured Editorial Layout (v2)",
        "CTA BAND â€” Charcoal Drama (v2)"
      ],
      "selectors": [
        "#why",
        "#process",
        "#testimonials",
        "#cta-band"
      ],
      "resolutionHint": "Scope v2 rules to legacy static pages or remove if unused; ensure one winning #id block per section for React."
    }
  ],
  "sections": [
    {
      "id": "stats-st3-dark-editorial",
      "status": "candidate",
      "displayName": "Stats â€” ST3 Dark Editorial Counter Band",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "Full-bleed charcoal stats strip: yellow top rail, vertical Performance label, four animated counter cells with blueprint grid texture",
        "reactComponent": "glc-site/src/components/sections/stats-section.tsx",
        "sectionRenderer": "section-renderer type \"stats\"",
        "domPath": "main#main-content > section#stats",
        "relatedComponents": [
          "glc-site/src/components/ui/stat-cell-animated.tsx (Reveal + count-up + IntersectionObserver threshold 0.5)",
          "glc-site/src/components/ui/reveal.tsx"
        ],
        "sectionElementId": "stats",
        "aria": "section aria-label=\"Company statistics\"",
        "classPrefix": "st3__ / .stat-cell / .stat-cell__*",
        "cssAnchorComments": [
          "STATS â€” v3 Dark Editorial Counter Band",
          "STATS â€” Display-Scale Typography (v2)"
        ]
      },
      "referenceFiles": {
        "specMarkdown": "MY MASTER DESIGN SECTIONS/DESIGN-SPEC-stats-st3.md",
        "staticHtml": "MY MASTER DESIGN SECTIONS/stats-st3-section-master.html",
        "contentExample": "glc-site/src/content/pages/home.json type stats",
        "propsType": "glc-site/src/content/types.ts â†’ StatsProps / StatCellProps"
      },
      "visualDna": {
        "ground": {
          "sectionRoot": "#stats background var(--charcoal-deep); position relative; overflow hidden",
          "blueprintTexture": "#stats::before absolute inset; crossed repeating-linear-gradient 80px step rgba(255,255,255,0.012); pointer-events none"
        },
        "structureAndSpacing": {
          "topRail": ".st3__top-rail height 3px; z-index 2; linear-gradient 90deg var(--yellow-core) â†’ transparent",
          "innerFlex": ".st3__inner display flex align stretch; z-index 1",
          "sideLabelColumn": ".st3__side-label width 56px flex-shrink 0; border-right 1px rgba(255,255,255,0.06); padding 0 20px; centers vertical text",
          "sideLabelType": "span: body 9px weight 800 uppercase letter-spacing 0.22em; color rgba(255,255,255,0.2); writing-mode vertical-rl; rotate 180deg",
          "grid": ".st3__grid flex 1; grid 4Ã—1 equal columns; borders between cells"
        },
        "statCell": {
          "container": ".stat-cell padding 56Ã—32 default; text-align center; border-right 1px rgba(255,255,255,0.06); last child no right border",
          "hoverSurface": "background transition to rgba(255,255,255,0.025) on hover",
          "bottomAccent": "::after full width bar height 2px yellow-core; scaleX(0) â†’ scaleX(1) on hover; transform-origin left; 0.5s --ease-expo",
          "hierarchy": "stack: .stat-cell__num (block) â†’ .stat-cell__label (block, margin-top 12px) â†’ .stat-cell__sub (block, margin-top 5px)"
        },
        "typography": {
          "numbers": {
            "class": "stat-cell__num",
            "font": "--font-display",
            "clamp": "clamp(52px, 5vw, 80px)",
            "weight": 700,
            "color": "white",
            "suffix": "second span yellow-core (inline style in stat-cell-animated + !important rule in CSS for last-child)"
          },
          "label": {
            "class": "stat-cell__label",
            "sizePx": 10,
            "weight": 800,
            "uppercase": true,
            "letterSpacing": "0.18em",
            "color": "rgba(255,255,255,0.45)"
          },
          "sub": {
            "class": "stat-cell__sub",
            "sizePx": 12,
            "weight": 500,
            "color": "rgba(255,255,255,0.25)"
          }
        },
        "motion": {
          "reveal": "Each cell wrapped Reveal with stagger delays reveal--delay-1..3 on cells 2â€“4",
          "countUp": "1800ms ease-out cubic client animation; skips if prefers-reduced-motion",
          "cellHover": "background 0.3s --ease-expo",
          "barRevealMs": 500
        },
        "responsive": {
          "640": "cell padding 40Ã—16; stat-cell__num clamp(44px, 11vw, 60px)",
          "1024": "hide .st3__side-label; grid 2Ã—2; cell padding 48Ã—24"
        },
        "balance": "Symmetric four-column band; side label adds industrial asymmetry on desktop only; equal visual weight per cell via centered type",
        "contentShape": {
          "propsContract": "cells: StatCellProps[] target, afterNumber, format?, label, sub",
          "sideLabelText": "Hardcoded \"Performance\" in stats-section.tsx"
        },
        "cascadeWarning": "Later #stats v2 block (white ground) overrides same #stats and .stat-cell â€” see conflictsToEliminate stats-v3-vs-v2-cascade"
      },
      "layersBottomToTop": [
        "#stats var(--charcoal-deep) fill",
        "#stats::before blueprint grid texture",
        ".st3__top-rail (z2)",
        ".st3__inner (z1)",
        ".st3__side-label + span",
        ".st3__grid",
        "Reveal.stat-cell: .stat-cell__num + .stat-cell__label + .stat-cell__sub",
        ".stat-cell::after hover bar"
      ],
      "auditNotes": "DevTools may show SegmentViewNode around section; DOM matches StatsSection. User path div.st3__inner > div.st3__grid > div.reveal.stat-cell."
    },
    {
      "id": "about-ab3-editorial-split",
      "status": "candidate",
      "displayName": "About â€” AB3 Editorial Split",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "Homepage About band â€” editorial copy column + clipped photo panel (AB3)",
        "reactComponent": "glc-site/src/components/sections/about-section.tsx",
        "sectionRenderer": "glc-site/src/components/sections/section-renderer.tsx (section.type === \"about\" â†’ AboutSection)",
        "domPath": "main#main-content > section#about",
        "relatedComponents": [
          "glc-site/src/components/ui/reveal.tsx",
          "glc-site/src/components/ui/icon-arrow.tsx",
          "framer-motion on .ab3__chip (whileInView)"
        ],
        "sectionElementId": "about",
        "aria": "section#about aria-labelledby=\"about-heading\" (h2#about-heading)",
        "classPrefix": "ab3__",
        "cssAnchorComments": [
          "ABOUT â€” v3 Editorial Split",
          "ABOUT â€” Editorial White (v2)",
          "FULL-PAGE REDESIGN OVERRIDES"
        ]
      },
      "referenceFiles": {
        "specMarkdown": "MY MASTER DESIGN SECTIONS/DESIGN-SPEC-about-ab3.md",
        "staticHtml": "MY MASTER DESIGN SECTIONS/about-ab3-section-master.html",
        "contentExample": "glc-site/src/content/pages/home.json (single about block today)",
        "propsType": "glc-site/src/content/types.ts â†’ AboutProps"
      },
      "visualDna": {
        "ground": {
          "sectionBackground": "var(--white)",
          "sectionPadding": "0 0 calc(var(--section-v) + 16px) from FULL-PAGE REDESIGN #about override",
          "hairlineTexture": "#about::before repeating-linear-gradient horizontal lines 64px step rgba(0,0,0,0.022), z-index 0"
        },
        "watermark": {
          "type": "text",
          "class": "ab3__wm",
          "content": "Literal \"GLC\" in TSX (not content-driven)",
          "font": "--font-display",
          "opacity": 0.028,
          "position": "absolute right -0.06em vertical center, z-index 0"
        },
        "layout": {
          "grid": "55fr 45fr; min-height 680px; â‰¤1024px stacks to 1 column",
          "copyColumn": "flex column gap 28px; padding var(--section-v) + horizontal clamps; max-width 660px; justify center",
          "copyYellowPin": "3px Ã— 60px top-left on .ab3__copy::before",
          "mediaClipPath": "polygon(28px 0, 100% 0, 100% 100%, 0 100%)",
          "mediaClipPathTablet": "polygon(0 20px, 100% 0, 100% 100%, 0 100%); min-height 420px",
          "credentialsGrid": "2Ã—2 gap 12px; border-top 1px var(--gray-200); padding-top 24px; â‰¤768px 1 column",
          "responsiveNote": "â‰¤768px stacks to one column (copy then media); ~640px viewport matches tall mobile layout (DevTools width ~642px)."
        },
        "typography": {
          "eyebrow": {
            "class": "eyebrow",
            "sharedPrimitive": true
          },
          "sincePill": {
            "class": "ab3__since",
            "sizePx": 11,
            "weight": 700,
            "border": "1px var(--gray-200)",
            "pairsWith": "props.mediaStat (duplicated visually in .ab3__chip)"
          },
          "heading": {
            "class": "ab3__heading",
            "font": "--font-display",
            "clamp": "34px, 3.8vw, 52px",
            "uppercase": true,
            "accentClass": "ab3__heading-em",
            "accentColor": "--yellow-core"
          },
          "headingRule": {
            "class": "ab3__heading-rule",
            "size": "48Ã—3px",
            "color": "--charcoal-deep"
          },
          "body": {
            "class": "ab3__body",
            "sizePx": 15,
            "lineHeight": 1.82,
            "maxCh": 46,
            "color": "--text-500"
          },
          "credentials": {
            "idx": {
              "class": "ab3__cred-idx",
              "font": "--font-display",
              "sizePx": 13,
              "color": "--yellow-core"
            },
            "title": {
              "class": "ab3__cred-title",
              "sizePx": 11,
              "weight": 800,
              "uppercase": true
            },
            "sub": {
              "class": "ab3__cred-sub",
              "sizePx": 11,
              "color": "--text-400"
            }
          }
        },
        "tokensUsed": [
          "--white",
          "--charcoal-deep",
          "--yellow-core",
          "--yellow-tint",
          "--gray-100",
          "--gray-200",
          "--text-400",
          "--text-500",
          "--font-display",
          "--font-body",
          "--section-v",
          "--section-v-sm",
          "--ease-expo (chip transition ease array matches)"
        ],
        "mediaPanel": {
          "surface": "var(--charcoal-deep) + clip-path",
          "texture": ".ab3__media::before radial warm glow + 40px horizontal lines",
          "photo": ".ab3__photo absolute inset; current TSX uses CSS gradient placeholder only (no background-image)",
          "badge": ".ab3__badge yellow polygon clip top-left; copy from props.badgeText",
          "chip": ".ab3__chip bottom-right glass panel; border-left 3px yellow; backdrop-filter blur; props.mediaStat",
          "cornerMark": ".ab3__corner-mark 40px yellow L rotated 180deg bottom-left"
        },
        "cta": {
          "markup": "a.btn-primary + IconArrow inside last Reveal",
          "styling": "Site-wide .btn-primary in glc-base.css (not ab3-scoped)"
        },
        "motion": {
          "reveal": "Reveal wrappers on copy stack; delay classes reveal--delay-1 through reveal--delay-4",
          "chipFramer": {
            "duration": 0.8,
            "delay": 0.5,
            "ease": [
              0.22,
              1,
              0.36,
              1
            ],
            "viewport": {
              "once": true,
              "amount": 0.4
            }
          },
          "credentialHoverMs": 220,
          "credentialHover": "border-bottom yellow + background var(--yellow-tint)"
        },
        "contentShape": {
          "summary": "Single-column editorial story: eyebrow + experience pill â†’ split heading â†’ body â†’ 4 credentials â†’ CTA; right panel is decorative photo stack with badge, stat chip, corner mark.",
          "propsContract": "AboutProps: eyebrow, headingBefore|headingAccent|headingAfter, body, credentials[{title,sub}], cta{label,href}, mediaStat{value,label}, badgeText",
          "note": "Visible strings (e.g. eyebrow/headline) come from page JSON; DevTools text may differ from home.json if content was edited locally or on another branch."
        }
      },
      "layersBottomToTop": [
        "#about background var(--white)",
        "#about::before hairline grid z0",
        ".ab3__wm ghost text z0",
        ".ab3__layout z1 grid",
        ".ab3__copy column: ::before yellow pin",
        ".ab3__top-row .eyebrow + .ab3__since",
        ".ab3__heading-wrap h2#about-heading + .ab3__heading-rule",
        ".ab3__body",
        ".ab3__creds .ab3__cred cells",
        "a.btn-primary + IconArrow",
        ".ab3__media ::before texture z0",
        ".ab3__photo z0",
        ".ab3__badge z2",
        ".ab3__chip z2",
        ".ab3__corner-mark z2"
      ],
      "optionalMotifAssets": [
        "MY MASTER DESIGN SECTIONS/motifs/GLC-motif-01-corner-traced.svg",
        "MY MASTER DESIGN SECTIONS/motifs/GLC-motif-03-divider-traced.svg"
      ],
      "auditNotes": "Registry target: section AboutSection at section#about. Capture: two-column AB3 layout, override hairlines, GLC watermark, typography ladder, credentials grid interaction, framer chip, media clip stack, and AboutProps content shape. Goal: one documented DNA object for this layout; CSS v2 .about__* block remains unused by React â€” see conflictsToEliminate id about-ab3-plus-v2-overrides."
    },
    {
      "id": "hero-v2-flagship-asymmetric",
      "status": "candidate",
      "displayName": "Hero â€” V2 flagship (layered planes + parallax)",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "Full-viewport hero with deep BG parallax, blueprint overlay, diagonal yellow stripe, editorial headline column, clipped photo panel, glass stat/coverage chips, grain overlay, bottom service rail",
        "isClientComponent": true,
        "reactComponent": "glc-site/src/components/sections/hero-section.tsx",
        "sectionRenderer": "glc-site/src/components/sections/section-renderer.tsx (type \"hero\")",
        "domPath": "main#main-content > section#hero.hero-v2",
        "sectionElementId": "hero",
        "aria": "section aria-label=\"Hero\"; h1 aria-label concatenates title.line1+line2+line3; decorative layers aria-hidden where applied",
        "classPrefix": "hero-v2__ (plus global btn-primary, btn-hero-glass; service bar SVGs still use class hero__service-icon inside HeroServiceIcon)",
        "dependencies": [
          "framer-motion (scroll parallax, variants, CTA hover/tap)",
          "next/image (photo panel only)",
          "native img for ghost logo (SSR/CSR parity comment in TSX)"
        ],
        "relatedComponents": [
          "framer-motion: hero-v2__bg-plane (y spring), hero-v2__photo-panel (PHOTO_VARIANT + y spring), hero-v2__content (textY spring), LINE_VARIANT on each headline line, FADE_UP on subhead/lede/CTA row, scroll mask on lede block, CHIP_VARIANT on chips, TILE_VARIANT on service tiles",
          "glc-site/src/components/sections/service-card-icon.tsx â†’ HeroServiceIcon (inline SVGs; default slug â†’ ServiceCardIcon placeholder)",
          "glc-site/src/components/ui/smart-link.tsx (secondary CTA)",
          "glc-site/src/components/ui/icon-arrow.tsx (primary CTA)"
        ],
        "cssAnchorComments": [
          "HERO V2 â€” Asymmetric flagship hero",
          "HERO V2 â€” RESPONSIVE"
        ],
        "stylesCanonical": "glc-site/src/styles/glc-base.css â€” block HERO V2 (~L4519â€“5290): section root, grain ::after, bg-plane, scrims, structure-plane, diag-stripe, canvas, photo-panel, chips, content column, typography, lede, CTAs, service bar, breakpoints 1024/768/480"
      },
      "referenceFiles": {
        "contentExample": "glc-site/src/content/pages/home.json â†’ sections[] item type \"hero\"",
        "propsType": "glc-site/src/content/types.ts â†’ HeroProps",
        "hubOverrideExample": "glc-site/src/app/services/excavation-site-preparation/page.tsx mutates hero props (eyebrow, title, subheadline, lede, CTAs, coverage, parallaxBackgroundImage)"
      },
      "visualDna": {
        "authority": {
          "tsx": "glc-site/src/components/sections/hero-section.tsx",
          "css": "glc-site/src/styles/glc-base.css",
          "content": "glc-site/src/content/pages/home.json + HeroProps"
        },
        "ground": {
          "sectionRoot": "section#hero.hero-v2: position relative; min-height 100svh; display flex; flex-direction column; overflow hidden; background var(--charcoal-deep); header clearance via padding on canvas not section",
          "grain": ".hero-v2::after: z-index 10; pointer-events none; inline SVG feTurbulence noise data-URI; background-size 160px; opacity ~0.028; mix-blend-mode overlay; sits above content planes for film grain"
        },
        "layerArchitecture": {
          "narrative": "CSS comment documents z 0â€“4 + grain on top; canvas is z3 with photo at z0 inside it and content at z4",
          "z0_deepBackground": "motion.div.hero-v2__bg-plane (absolute inset 0; will-change transform): children â€” optional .hero-v2__bg-roll (inset -14%; CSS animation hero-v2-bg-roll 26s scale 1â†’1.08) wrapping .hero-v2__bg-photo--image (background-image from parallaxBackgroundImage) OR .hero-v2__bg-photo alone (CSS repeating-linear concrete texture + var(--charcoal-deep), inset -8%). Then .hero-v2__scrim-radial (radial vignette ellipse 80% 70% at 30% 45%) and .hero-v2__scrim-left (linear-gradient left dark column for text legibility)",
          "z1_structure": "div.hero-v2__structure-plane: inline SVG.hero-v2__blueprint (600Ã—600 viewBox, rects/lines/circles, white strokes, right -40px, opacity 0.04, mix-blend-mode screen) + div.hero-v2__eng-grid (48px crosshatch rgba(242,183,5,0.6) lines, opacity 0.03, screen)",
          "z2_accent": "div.hero-v2__diag-stripe: 3px wide; right ~56%; linear-gradient vertical transparentâ€“yellow-coreâ€“transparent; opacity 0.4; transform skewX(-2deg); pointer-events none",
          "z3_canvas": "div.hero-v2__canvas: relative z-index 3; flex 1; grid-template-columns 56px 1fr; align-items center; padding calc(var(--gl-header-height)+48px) 40px 120px; gap 0 32px; max-width 1440px (wider than --container-max 1320); margin auto; width 100%",
          "photoInsideCanvas": "motion.div.hero-v2__photo-panel: absolute top 0 right 0 width 58% bottom 80px (clears service bar); z-index 0 inside canvas; clip-path polygon parallelogram; overflow hidden; Next/Image fill objectPosition center 30%; .hero-v2__photo-scrim gradient left-to-right darkening for headline overlap",
          "chipsOnPhoto": "div.hero-v2__chips: absolute bottom 40px left 10%; column flex; z-index 2 â€” glass stat chips + hero-v2__chip--coverage (tags); chamfer clip-path; inset box-shadow borders; hover lift + stronger glow",
          "textColumn": "motion.div.hero-v2__content: grid-column 2; position relative; z-index 4; flex column; max-width 680px â€” stacks vert-label, ghost mark, h1, rule, optional h2, lede, CTAs",
          "z4_serviceBar": "div.hero-v2__service-bar: z-index 4; margin-top auto; dark frosted bar; border-top gold-tint; flex tiles with dividers"
        },
        "parallaxAndScroll": {
          "hook": "useScroll({ target: sectionRef, offset: [\"start start\", \"end start\"] })",
          "springs": "useSpring(useTransform): bgY [0%,38%], photoY [0%,14%], textY [0%,7%] vs scrollYProgress; stiffness 80 damping 30; applied only when mounted === true for photo/content to avoid SSR mismatch",
          "ledeMask": "useTransform scrollYProgress [0,0.18] â†’ linear-gradient mask strings; applied as WebkitMaskImage/maskImage on .hero-v2__lede-block when mounted",
          "mountedGate": "useState mounted set true in useEffect â€” parallax style props and lede mask omitted on server/first paint until client"
        },
        "framerVariants": {
          "EASE": "Const [0.22, 1, 0.36, 1] â€” aligns with global --ease-expo family / section-dna motion.defaultEase",
          "LINE_VARIANT": "Per headline line: hidden clipPath inset(110%â€¦), opacity 0, y 20; visible stagger delay 0.15 + i*0.12s; clipPath wipe + y 0 + opacity 1; duration ~0.9s ease EASE; opacity snap 0.01s",
          "FADE_UP": "hidden opacity 0 y 22 blur 5px; visible delay 0.55 + i*0.1s; duration 0.7s; used subheadline, lede block, CTA row (custom index)",
          "PHOTO_VARIANT": "hidden opacity 0 x 56 tighter clip-path; visible x 0 final clip-path; opacity 0.1s; x+clipPath 1.1s delay 0.2s EASE",
          "CHIP_VARIANT": "hidden opacity 0 y 24 scale 0.94; visible spring stiffness 260 damping 22 delay 0.9 + i*0.14",
          "TILE_VARIANT": "hidden opacity 0 y 14; visible duration 0.5s delay 1.1 + i*0.07 EASE â€” service bar tiles",
          "vertLabel": "initial opacity 0 x -12; animate opacity 1 x 0; duration 0.8 delay 0.1 EASE",
          "rule": "initial scaleX 0 opacity 0; animate scaleX 1 opacity 1; duration 0.8 delay 0.55 EASE; transform-origin left",
          "ctas": "whileHover scale 1.025 y -2; whileTap scale 0.97; spring stiffness 380 damping 18"
        },
        "typography": {
          "verticalEyebrow": "Not horizontal .eyebrow pattern: div.hero-v2__vert-label â€” grid col 1; writing-mode vertical-rl; rotate(180deg); 9px 600 uppercase letter-spacing 0.28em; color rgba(255,255,255,0.2); content from props.eyebrow",
          "headline": "h1.hero-v2__headline: font-display clamp(52px,9vw,118px) weight 700 line-height 1 uppercase white; each line in span.hero-v2__line-overflow > motion.span.hero-v2__line; line 1 nth-child(1) scaled 0.62em weight 500 opacity 0.68; line 3 mid-scale 0.74em; emphasizeLine adds .hero-v2__line--accent (yellow-core + hero-accent-pulse text-shadow keyframes 4s alternate from 1.8s delay)",
          "rule": "div.hero-v2__rule 48Ã—2px gradient yellow to transparent; scaleX entrance",
          "subheadline": "h2.hero-v2__subheadline optional: display font weight 600 clamp(1rem,2.2vw,1.35rem) uppercase rgba(255,255,255,0.88) max-width 520px",
          "lede": "Split in TSX on \" â€” \" (space-em-dash-space): first segment hero-v2__lede-lead; if starts with \"Ground Level Contracting\" wrap in strong.hero-v2__lede-brand; second segment hero-v2__lede-body; container hero-v2__lede-block has yellow left border 1.5px rgba(242,183,5,0.28) padding-left 16px",
          "ghostWatermark": "div.hero-v2__ghost-mark behind headline: img /images/glc-logo.png width/height attrs; filter brightness(0) invert(1); opacity ~0.055; scale 1.05; mobile recenters"
        },
        "chipsAndServiceChrome": {
          "statChip": "hero-v2__chip: backdrop blur; chamfer top-right; multi inset box-shadow simulating border (yellow-tint on right/bottom); hover translateY -2px",
          "coverageChip": "hero-v2__chip--coverage: wider; hero-v2__chip-eyebrow; hero-v2__chip-tag pills",
          "primaryCta": "Hero overrides .btn-primary in .hero-v2__cta-row: chamfer top-right clip-path; padding; letter-spacing 0.22em; ::before shimmer sweep translateX on hover (0.70s cubic 0.22,1,0.36,1); arrow z-index above shimmer",
          "secondaryCta": "btn-hero-glass: frosted; chamfer top-left mirror; inset shadows; hover yellow-tint borders and glow"
        },
        "assets": {
          "photoPanelImage": "Hard-coded path /images/hero-armour-stone-retaining-walls.png â€” next/image fill priority sizes (max-width:900px) 100vw, 58vw",
          "ghostLogo": "/images/glc-logo.png â€” native img (comment: avoid next/image SSR/CSR drift)",
          "optionalParallaxBg": "props.parallaxBackgroundImage â†’ inline style backgroundImage on hero-v2__bg-photo--image inside hero-v2__bg-roll"
        },
        "tokensAndLiterals": {
          "cssVariables": ["--charcoal-deep", "--yellow-core", "--white", "--font-display", "--font-body", "--ease-expo", "--gl-header-height"],
          "literalRgba": "Many scrims/chips use rgba(20,18,16,â€¦) and rgba(242,183,5,â€¦) alongside tokens â€” audit if consolidating to design_system.json"
        },
        "responsive": {
          "max1024": "Photo width 50%; clip-path adjusted; chips display none; canvas padding-bottom 100px",
          "max768": "Canvas single column grid; vert-label display none; content grid-column 1 max-width 100%; photo-panel position absolute inset 0 width 100% bottom 0 opacity 0.35 clip-path none z0; scrim-left strengthened; diag-stripe display none; headline font-size clamp reduced; ghost-mark centered; service-inner horizontal scroll hide scrollbar; tiles flex 0 0 auto min-width",
          "max480": "CTA row column; btn-primary and btn-hero-glass full width centered; chamfers preserved"
        },
        "accessibility": {
          "landmarks": "section#hero aria-label Hero",
          "headline": "Logical h1 with aria-label full title; inner motion spans aria-hidden true â€” screen reader relies on aria-label",
          "decorative": "bg plane, structure plane, diag stripe, ghost mark, photo panel aria-hidden where set in TSX"
        },
        "contentShape": {
          "HeroProps": {
            "eyebrow": "string â†’ vertical rail (not kicker dot pattern)",
            "title": "{ line1, line2, line3, emphasizeLine: 1|2|3 } â€” emphasizeLine picks accent line class",
            "subheadline": "optional string",
            "lede": "string â€” split on \" â€” \"; optional brand prefix handling",
            "primaryCta_secondaryCta": "{ label, href }",
            "stats": "array { value, label } for glass chips",
            "coverage": "{ label, tags: string[] }",
            "serviceBarSlugTitles": "{ slug, title }[] â€” links via ROUTES.service(slug)",
            "parallaxBackgroundImage": "optional string URL"
          }
        },
        "implementationNotes": [
          "HeroServiceIcon maps explicit slugs (e.g. excavation-site-prep, foundations-civil); home.json uses longer route slugs (e.g. excavation-site-preparation) â€” those hit ServiceCardIcon default fallback SVG unless aliases added",
          "Canvas max-width 1440px intentionally exceeds --container-max (1320px) for flagship bleed",
          "Chips use box-shadow (not border) because clip-path clips real borders",
          "Photo panel bottom: 80px reserves vertical space for service bar",
          "Legacy #hero .hero__* block still exists in glc-base for static previews; live homepage uses hero-v2 only"
        ]
      },
      "layersBottomToTop": [
        "hero-v2__bg-plane: texture or roll+image + scrim-radial + scrim-left (motion y)",
        "hero-v2__structure-plane: blueprint SVG + eng-grid",
        "hero-v2__diag-stripe",
        "hero-v2__canvas",
        "hero-v2__photo-panel: Image + photo-scrim + chips column",
        "hero-v2__content: vert-label, ghost img, h1 lines, rule, subheadline, lede block, CTA row (motion textY)",
        "hero-v2::after grain",
        "hero-v2__service-bar: inner + tiles"
      ],
      "auditNotes": "Merged 2026-04-05: full DNA from live hero-section.tsx + glc-base HERO V2 block â€” layer stack, Framer variant timings, HeroProps/lede parsing, parallax springs + mounted gate, chip/CTA chrome, responsive breakpoints, a11y pattern, asset paths, hub page override pattern, HeroServiceIcon slug caveat. Pair with glc-base numeric tokens for exact stops/opacities."
    },
    {
      "id": "gl-parallax-type-band-shared",
      "status": "candidate",
      "displayName": "Parallax type band â€” full-bleed image + oversized type",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "Service-page breaker: parallax-drifting photo with tone-specific scrim and bottom-aligned headline slab",
        "reactComponent": "glc-site/src/components/sections/parallax-type-band.tsx",
        "domPathExample": "main#main-content > section#excavation-type-band.gl-parallax-type-band--dark",
        "routeExample": "glc-site/src/app/services/excavation-site-preparation/page.tsx (id=\"excavation-type-band\")",
        "classPrefix": "gl-parallax-type-band__",
        "cssAnchorComments": [
          "Shared parallax \"type\" band â€” breaks section repetition"
        ]
      },
      "referenceFiles": {
        "contentExample": "hub parallax band fields in excavation hub / page data feeding ParallaxTypeBand",
        "propsType": "ParallaxTypeBandProps in parallax-type-band.tsx"
      },
      "visualDna": {
        "layout": {
          "section": "min-height clamp(280px, 42vw, 480px); flex align end; overflow hidden",
          "media": "motion.div gl-parallax-type-band__media absolute inset -8% 0; next/image.fill gl-parallax-type-band__img object-position center 35%",
          "content": "motion.div gl-parallax-type-band__content z2 container padding 48Ã—40Ã—52 (tighter on mobile)"
        },
        "parallax": {
          "imgY": "useScroll start end â†’ end start; transform ~ -6% to 10%",
          "textY": "parallel spring ~ 12% to 0%"
        },
        "scrims": {
          "darkTone": ".gl-parallax-type-band--dark .gl-parallax-type-band__media-scrim gradient bottom-heavy charcoal",
          "lightTone": ".gl-parallax-type-band--light â€¦ warm white to transparent rightward"
        },
        "typography": {
          "eyebrow": "10px 800 uppercase letter-spacing 0.22em; yellow-core dark / gold light",
          "title": "Oswald clamp headline uppercase max-width 18ch",
          "subtitle": "body 15px/1.65 optional"
        },
        "tokensUsed": [
          "--container-max",
          "--yellow-core",
          "--gold",
          "--charcoal-deep",
          "--text-600",
          "--font-display",
          "--font-body"
        ],
        "contentShape": {
          "propsContract": "id?, eyebrow, title, subtitle?, imageSrc, imageAlt, tone dark|light"
        }
      },
      "layersBottomToTop": [
        "gl-parallax-type-band__media + __img",
        "gl-parallax-type-band__media-scrim",
        "gl-parallax-type-band__content eyebrow + h2 + subtitle"
      ],
      "auditNotes": "Next/Image renders class gl-parallax-type-band__img with absolute fill; user DOM showed lazy image and srcset for optimisation. Same image file may repeat across hero/CTA elsewhere on hub â€” asset reuse, not CSS conflict."
    },
    {
      "id": "exc-hub-parallax-cta-band",
      "status": "candidate",
      "displayName": "Excavation hub â€” parallax CTA band (fixed BG + scrim)",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "Centered phone CTA over fixed parallax photo with diagonal dark scrim",
        "reactComponent": "glc-site/src/components/services/excavation-parallax-cta.tsx",
        "domPath": "main#main-content > section.exc-parallax-cta.gl-reveal",
        "routeExample": "glc-site/src/app/services/excavation-site-preparation/page.tsx",
        "classPrefix": "exc-parallax-cta__",
        "contentSource": "glc-site/src/content/pages/excavation-hub-seo.json â†’ parallaxCta (heading, responsePromise); phone from site.json"
      },
      "referenceFiles": {},
      "visualDna": {
        "layout": {
          "section": "min-height 320px (280px mobile); flex center; padding var(--section-v); overflow hidden",
          "inner": "exc-parallax-cta__inner z1 max-width container centered text"
        },
        "ground": {
          "bg": "exc-parallax-cta__bg absolute inset cover url /images/hero-armour-stone-retaining-walls.png; background-attachment fixed; scale(1.04); prefers-reduced-motion: scroll",
          "scrim": "exc-parallax-cta__scrim linear-gradient 105deg charcoal opaque left â†’ transparent right"
        },
        "accent": {
          "stripe": "exc-parallax-cta__stripe 64Ã—3px yellow-core centered above heading"
        },
        "typography": {
          "heading": "h2#exc-parallax-cta-heading Oswald clamp uppercase white",
          "phone": "a.exc-parallax-cta__phone Oswald clamp yellow-core hover gold",
          "promise": "body 15px white 72% opacity"
        },
        "motion": {
          "reveal": "inherits .gl-reveal scroll-visible pattern on section root"
        },
        "contentShape": {
          "propsContract": "phoneDisplay, phoneHref; copy.heading and copy.responsePromise from hub JSON"
        }
      },
      "layersBottomToTop": [
        "exc-parallax-cta__bg",
        "exc-parallax-cta__scrim",
        "exc-parallax-cta__inner: stripe, h2, phone link, promise"
      ],
      "auditNotes": "User saw SegmentViewNode in React tree â€” section is a server-friendly wrapper; structure matches exc-parallax-cta.tsx. scrim is the gradient overlay div.exc-parallax-cta__scrim."
    },
    {
      "id": "header-mega-services-panel-shell",
      "status": "candidate",
      "displayName": "Header â€” Services mega menu panel (#mega-services-panel)",
      "implementation": {
        "kind": "component",
        "plainEnglishName": "Frosted light dropdown panel under nav: intro column + 3Ã—2 service card grid",
        "reactComponent": "glc-site/src/components/layout/site-header.tsx (panel shell + state megaMode)",
        "childComponent": "glc-site/src/components/layout/mega-menu-services.tsx",
        "domPath": "header#site-header > div#mega-services-panel.gl-mega-panel",
        "aria": "role=region aria-label=\"Service lines\" aria-labelledby=mega-services-trigger; open class is-open on .gl-mega-panel",
        "dataSource": "glc-site/src/content/navigation.json megaMenu",
        "cssAnchorComments": [
          "MEGA MENU â€” Rugged yet Refined"
        ]
      },
      "referenceFiles": {},
      "visualDna": {
        "layout": {
          "shell": "position absolute top 100% left 0 right 0; frosted rgba(250,250,248,0.97) backdrop blur; yellow 3px top border; padding 48Ã—40",
          "innerGrid": "gl-mega-panel__inner 256px intro + 1fr gap 56px; â‰¤1100px single column; mega grid 3-col â†’ 2-col",
          "mobile": "â‰¤768px .gl-mega-panel display none (drawer replaces)"
        },
        "interaction": {
          "open": "hover .gl-nav-mega-wrap + click toggle on Services button; body.gl-mega-open; #gl-mega-backdrop fixed scrim",
          "animation": "glmc-panel-in on is-open; gl-mega-card stagger glmc-item-in"
        },
        "typography": {
          "kicker": "gl-mega-panel__kicker 9px 800 uppercase + yellow dash ::before",
          "cards": "gl-mega-card__num Oswald 40px watermark; gl-mega-card__title uppercase; gl-mega-card__desc 12px body"
        },
        "tokensUsed": [
          "--container-max",
          "--yellow-core",
          "--yellow-tint",
          "--white",
          "--charcoal-deep",
          "--ease-expo"
        ],
        "contentShape": {
          "cards": "navigation megaMenu.cards: num, title, description, slug, gridTitle[]",
          "intro": "mega.kicker + megaIntro string (home vs inner page variant in SiteHeader)"
        }
      },
      "layersBottomToTop": [
        "body .gl-mega-backdrop when gl-mega-open",
        "#mega-services-panel.gl-mega-panel",
        ".gl-mega-panel__inner intro + .gl-mega-grid .gl-mega-card links"
      ],
      "auditNotes": "Captures the open mega-services-panel the user inspected; pairs with header-nav-primary-links-cluster for trigger wiring (.gl-nav-mega-wrap + #mega-services-trigger)."
    },
    {
      "id": "header-primary-nav-links-cluster",
      "status": "candidate",
      "displayName": "Header â€” primary nav links row (.gl-header__nav-links)",
      "implementation": {
        "kind": "element",
        "plainEnglishName": "Desktop primary nav: direct links + mega dropdown triggers (Services, Company) + remaining routes",
        "reactComponent": "glc-site/src/components/layout/site-header.tsx",
        "domPath": "header#site-header > nav.gl-header__nav-row > div.gl-header__nav-inner > div.gl-header__nav-links",
        "relatedCss": "Selectors .gl-header__nav-links > a vs .gl-nav-mega-trigger (buttons are not direct children anchors)"
      },
      "referenceFiles": {},
      "visualDna": {
        "layout": {
          "cluster": "flex row gap 2px; margin-left auto between logo and CTA wrap",
          "children": "SmartLink about; gl-nav-mega-wrap + button#mega-services-trigger; gl-nav-mega-wrap + button#mega-company-trigger; SmartLink map for Process, Coverage, Projects (from navigation.primary)"
        },
        "typographyAndChrome": {
          "directLinks": ".gl-header__nav-links > a body 13px 700 padding 8Ã—14; color --text-600; ::after 2px yellow bar scaleX hover",
          "megaTriggers": ".gl-nav-mega-trigger same family size weight; chevron ::after; hover yellow-tint; is-open yellow-tint-md + rotated chevron"
        },
        "tokensUsed": [
          "--font-body",
          "--text-600",
          "--charcoal-deep",
          "--yellow-core",
          "--yellow-tint",
          "--yellow-tint-md",
          "--ease-expo"
        ],
        "motion": {
          "underline": "0.2s color; ::after transform 0.2s var(--ease-expo)",
          "megaTrigger": "0.22s color/background; chevron 0.3s"
        }
      },
      "layersBottomToTop": [
        "gl-header__nav-inner (logo | gl-header__nav-links | gl-header__cta-wrap)",
        "gl-header__nav-links flex of anchors and mega wrap/buttons"
      ],
      "auditNotes": "Documents the nav strip called out in DevTools; mega panels render as siblings below nav row inside #site-header, not inside .gl-header__nav-links."
    },
    {
      "id": "services-home-grid-cards",
      "status": "candidate",
      "displayName": "Services â€” homepage grid (dark cards + off-white ground)",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "Editorial header (2-col) plus full-width card grid: each service is a charcoal tile that inverts to white on hover/focus",
        "reactComponent": "glc-site/src/components/sections/services-grid-section.tsx",
        "childComponent": "glc-site/src/components/sections/services-grid-card.tsx",
        "relatedComponents": [
          "glc-site/src/components/sections/service-card-icon.tsx (svg.service-card__icon 40Ã—40)",
          "glc-site/src/components/ui/reveal.tsx",
          "glc-site/src/hooks/use-reveal.ts (ref on SmartLink a.service-card)",
          "glc-site/src/components/ui/smart-link.tsx",
          "glc-site/src/components/ui/icon-arrow-small.tsx"
        ],
        "sectionRenderer": "type \"services\" merges props + navigation.megaMenu.cards",
        "domPath": "main#main-content > section#services",
        "sectionElementId": "services",
        "aria": "aria-labelledby=\"services-heading\"; inner role=\"list\"; cards role=\"listitem\"",
        "classPrefix": "services__ / service-card__",
        "cssAnchorComments": [
          "SERVICES GRID"
        ]
      },
      "referenceFiles": {
        "contentExample": "glc-site/src/content/pages/home.json type services + glc-site/src/content/navigation.json megaMenu.cards",
        "propsType": "ServicesSectionProps + MegaMenuCard[]"
      },
      "visualDna": {
        "ground": {
          "section": "#services background var(--off-white); padding var(--section-v) 0; overflow hidden",
          "topBar": "#services::before absolute top full width height 4px var(--charcoal-deep) â€” GROUND seam"
        },
        "headerBlock": {
          "container": ".services__header max-width --container-max margin auto; padding 0 40px 60px",
          "layout": "grid 2 columns 1fr 1fr gap 40px align end",
          "eyebrow": ".eyebrow.eyebrow--dark inside Reveal; marginBottom 16px inline",
          "heading": "h2#services-heading .services__heading Oswald clamp(36px,3.5vw,52px) uppercase charcoal; line two wrapped; span line yellow-core",
          "intro": ".services__intro 15px/1.7 --text-600 right column",
          "motion": "Reveal on eyebrow; reveal--delay-1 heading; reveal--delay-2 intro"
        },
        "gridShell": {
          "wrap": ".services__grid-wrap container padding 0 40px; position relative",
          "leftRail": "::before absolute left edge topâ†’bottom width 4px charcoal-deep â€” STRUCTURE rail",
          "grid": ".services__grid CSS grid repeat(3,1fr) gap 2px â€” hairline gutters between cards",
          "responsive": "â‰¤1024px 2 columns; â‰¤768px header 1 col + grid 1 col (global responsive block)"
        },
        "serviceCard": {
          "element": "a.service-card SmartLink + classes reveal + optional reveal--delay-1|2 (pattern i%3)",
          "geometry": "min-height 280px; padding 40Ã—32; flex column; cursor pointer; overflow hidden",
          "layers": "::before absolute inset white fill scaleY(0) origin bottom â†’ scaleY(1) hover/focus-visible; z0. Children z1",
          "hoverChrome": "box-shadow var(--shadow-card) + inset 1px gray-200 on hover/focus-visible",
          "numWatermark": ".service-card__num absolute top-right Oswald 64px weight 700 rgba white 0.07 â†’ hover rgba charcoal 0.12",
          "icon": "svg.service-card__icon 40Ã—40 margin-bottom 20px stroke currentColor yellow-core",
          "title": "h3.service-card__title Oswald 20px uppercase white â†’ hover charcoal; multi-line via card.gridTitle spans + br between lines",
          "desc": ".service-card__desc 13px/1.65 rgba white 0.5 â†’ hover --text-600; margin-bottom auto (pushes CTA to bottom)",
          "ctaRow": ".service-card__link flex row gap 8â†’12 on hover; 11px 800 uppercase yellow-core letter-spacing 0.12em + IconArrowSmall",
          "transitions": "background/box-shadow 0.3s --ease-expo; ::before transform 0.5s --ease-expo; text colors 0.3s"
        },
        "tokensUsed": [
          "--off-white",
          "--charcoal-deep",
          "--white",
          "--yellow-core",
          "--text-600",
          "--gray-200",
          "--shadow-card",
          "--container-max",
          "--font-display",
          "--ease-expo",
          "--section-v"
        ],
        "contentShape": {
          "megaMenuCard": "num, title, description, slug, gridTitle[] (1â€“2 lines), gridDescription",
          "sectionProps": "eyebrow, headingLine1, headingLine2, intro"
        },
        "hierarchy": "Section eyebrow smallest â†’ H2 dominant â†’ intro paragraph â†’ grid of peer cards with num (decorative) < icon < title < body < learn-more",
        "balance": "2px negative space between cards reads as industrial grid; left rail aligns with card column edge"
      },
      "layersBottomToTop": [
        "#services off-white + top 4px charcoal bar",
        ".services__header (eyebrow, h2, intro)",
        ".services__grid-wrap + ::before left rail",
        ".services__grid",
        "a.service-card: ::before white lift layer",
        "card content: __num, svg.__icon, h3.__title, p.__desc, span.__link"
      ],
      "auditNotes": "SegmentViewNode in RSC output wraps section; class names are services__* and service-card (user DevTools typos .ervice. are OCR). Cards link to ROUTES.service(slug)."
    },
    {
      "id": "why-why3-editorial-manifesto",
      "status": "candidate",
      "displayName": "Why â€” Why3 light editorial (split header + reason rows)",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "Off-white band: two-column headline + CTA intro, then stacked reason rows with ghost numbers and yellow hover sweep",
        "reactComponent": "glc-site/src/components/sections/why-section.tsx",
        "domPath": "main#main-content > section#why",
        "sectionElementId": "why",
        "relatedComponents": [
          "framer-motion motion.div per .why3__reason",
          "glc-site/src/components/ui/reveal.tsx",
          "glc-site/src/components/ui/icon-arrow.tsx"
        ],
        "classPrefix": "why3__",
        "cssAnchorComments": [
          "WHY â€” v3 Light Editorial Manifesto",
          "WHY â€” Typographic Reason Rows (v2)"
        ]
      },
      "referenceFiles": {
        "contentExample": "glc-site/src/content/pages/home.json type why",
        "propsType": "WhyProps"
      },
      "visualDna": {
        "ground": {
          "section": "#why background var(--off-white); overflow hidden",
          "topSeam": "#why::before height 3px charcoal-deep full width (transition from dark stats above)"
        },
        "header": {
          "layout": ".why3__header grid 1fr 1fr gap 60px align end; max-width container; padding var(--section-v) 40px 56px",
          "left": "eyebrow + h2#why-heading .why3__heading Oswald clamp(34pxâ€¦54px) uppercase; em yellow-core",
          "right": ".why3__header-right flex column gap 24px; .why3__intro 15px/1.8 --text-500 max 44ch; .btn-primary.why3__cta + IconArrow",
          "motion": "Reveal delays on heading and right column"
        },
        "reasonRows": {
          "container": ".why3__reasons border-top gray-200; each .why3__reason border-bottom gray-200; position relative overflow hidden",
          "hoverLayers": ".why3__hover-fill absolute inset yellow-tint scaleX(0)â†’1 origin left 0.5s --ease-expo; ::before left 3px yellow bar scaleY hover",
          "innerGrid": ".why3__reason-inner z1 grid columns 80px | 1px rule | 1fr | auto; gap 0 28px; padding 28px 40px; max-width container",
          "num": ".why3__num Oswald 13px yellow-core uppercase tracking",
          "divider": ".why3__divider 1px wide self-stretch gray-200",
          "text": ".why3__text-block flex baseline wrap gap 24px; .why3__title Oswald 20px uppercase charcoal; .why3__desc 14px/1.65 --text-500 max 52ch",
          "ghost": ".why3__ghost-num absolute right huge Oswald clamp(72pxâ€¦120px) charcoal 0.04 opacity",
          "arrow": ".why3__arrow-mark â†’ appears translateX on hover; hidden â‰¤1024px",
          "motion": "framer whileInView each row opacity/y stagger delay i*0.07"
        },
        "responsive": {
          "768": "smaller section padding; text-block stacks column",
          "1024": "header 1 col; reason inner 52px col; hide arrow"
        },
        "tokensUsed": [
          "--off-white",
          "--charcoal-deep",
          "--yellow-core",
          "--yellow-tint",
          "--gray-200",
          "--text-500",
          "--container-max",
          "--section-v",
          "--section-v-sm",
          "--ease-expo",
          "--font-display",
          "--font-body"
        ],
        "contentShape": {
          "props": "eyebrow, headingBefore, headingEmphasis (em), headingAfter, body, cta, reasons[{num,title,text}]"
        }
      },
      "layersBottomToTop": [
        "#why off-white + top seam",
        ".why3__header",
        ".why3__reasons",
        "per .why3__reason: .why3__hover-fill (z0), ::before yellow bar, .why3__ghost-num, .why3__reason-inner, .why3__arrow-mark"
      ],
      "auditNotes": "v2 CSS block later retargets #why for unused layout â€” see conflictsToEliminate why-process-testimonials-cta-v2-cascade."
    },
    {
      "id": "process-proc3-split-timeline",
      "status": "candidate",
      "displayName": "Process â€” Proc3 dark-left / white-right timeline",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "Split layout: charcoal editorial panel with blueprint texture + step count ghost; white panel with vertical yellow thread and numbered nodes",
        "reactComponent": "glc-site/src/components/sections/process-section.tsx",
        "domPath": "main#main-content > section#process",
        "sectionElementId": "process",
        "relatedComponents": [
          "framer-motion per .proc3__step",
          "glc-site/src/components/ui/reveal.tsx"
        ],
        "classPrefix": "proc3__",
        "cssAnchorComments": [
          "PROCESS â€” v3 Dark Split Timeline",
          "PROCESS â€” Editorial 2Ã—2 Staggered Steps (v2)"
        ]
      },
      "referenceFiles": {
        "contentExample": "glc-site/src/content/pages/home.json type process",
        "propsType": "ProcessProps"
      },
      "visualDna": {
        "ground": {
          "section": "#process background var(--charcoal-deep); overflow hidden"
        },
        "layoutShell": {
          "grid": ".proc3__layout display grid 38fr 62fr; min-height 600px",
          "responsive": "â‰¤1024px single column; left panel loses right border gains bottom border; thread repositions"
        },
        "leftPanel": {
          "surface": ".proc3__left-panel flex column gap 24px; padding var(--section-v) + horizontal clamp; border-right 1px rgba white 0.06",
          "texture": "repeating-linear-gradient horizontal lines 40px step subtle white",
          "accent": ".proc3__left-accent absolute top-left 120Ã—3px yellow bar",
          "type": ".proc3__eyebrow yellow + forced ::before bar; h2#process-heading .proc3__heading white uppercase + .proc3__heading-accent block yellow",
          "intro": ".proc3__intro 14px rgba white 0.5 max 32ch â€” NOTE: copy hardcoded in process-section.tsx (not props)",
          "ghostCount": ".proc3__count-mark huge white 0.04 opacity; margin-top auto; hidden tablet+"
        },
        "stepsPanel": {
          "surface": ".proc3__steps-panel white; padding var(--section-v) + asymmetric horizontal padding",
          "thread": ".proc3__thread absolute vertical 2px line gradient yellow â†’ fade; positioned left clamp aligned with nodes",
          "stepRow": ".proc3__step grid 48px + 1fr gap 28px; padding 28px 0; border-bottom gray-200; hover expands bg gray-100 with negative horizontal margin (desktop)",
          "node": ".proc3__node 40px circle charcoal; flex center; border 2px transparent; margin-left -20px aligns on thread; hover yellow fill + scale",
          "content": ".proc3__step-label body 10px 800 uppercase yellow tracking; .proc3__step-title Oswald 20px uppercase; .proc3__step-desc 13px --text-500 max 50ch"
        },
        "motion": {
          "steps": "whileInView opacity x stagger per index"
        },
        "tokensUsed": [
          "--charcoal-deep",
          "--white",
          "--yellow-core",
          "--gray-100",
          "--gray-200",
          "--text-500",
          "--section-v",
          "--ease-expo",
          "--font-display",
          "--font-body"
        ],
        "contentShape": {
          "props": "eyebrow, heading, headingAccent, steps[{num,title,desc}]",
          "hardcodedIntro": "Fixed paragraph in TSX â€” change DNA if copy moves to JSON"
        }
      },
      "layersBottomToTop": [
        "#process charcoal",
        ".proc3__layout",
        ".proc3__left-panel: accent bar, eyebrow, h2, intro, count mark, blueprint lines",
        ".proc3__steps-panel: .proc3__thread, each .proc3__step (.proc3__node + .proc3__step-content)"
      ],
      "auditNotes": "User DOM proc3__.tep.-panel = .proc3__steps-panel. Later #process v2 uses off-white + process-r2__* â€” cascade conflict documented."
    },
    {
      "id": "coverage-dark-territory-band",
      "status": "candidate",
      "displayName": "Coverage â€” charcoal service territory (3-plane layout)",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "Dark band: intro column with yellow left rail + 2Ã—2 territory cards with dots; radial glow + top gradient bar overlays",
        "reactComponent": "glc-site/src/components/sections/coverage-section.tsx",
        "domPath": "main#main-content > section#coverage.coverage.relative.overflow-hidden",
        "sectionElementId": "coverage",
        "relatedComponents": [
          "glc-site/src/components/ui/reveal.tsx"
        ],
        "classPrefix": "coverage__",
        "cssAnchorComments": [
          "COVERAGE â€” dark band"
        ]
      },
      "referenceFiles": {
        "contentExample": "glc-site/src/content/pages/home.json type coverage",
        "propsType": "CoverageProps"
      },
      "visualDna": {
        "ground": {
          "inlineStyles": "React sets backgroundColor var(--charcoal), color var(--white), paddingTop/Bottom var(--section-v) â€” wins over Tailwind layer order in dev",
          "cssFallback": "section#coverage in glc-base repeats charcoal + section padding",
          "fxRadial": ".coverage__fx-radial absolute inset z0 radial warm yellow glow top-left quadrant",
          "fxTopbar": ".coverage__fx-topbar top full width 3px gradient yellow â†’ transparent z2"
        },
        "layout": {
          "inner": ".coverage__inner max-width container padding 0 40px; grid 1fr 2fr gap clamp(48pxâ€¦80px) align center; z1",
          "introColumn": ".coverage__intro border-left 3px yellow-core; padding-left 28px",
          "areasGrid": ".coverage__areas grid 2Ã—2 gap var(--gap-grid); Reveal wrapper delay--2",
          "responsive": "â‰¤1024 inner stacks 1fr; areas stay 2-col then 1 col at 768"
        },
        "cards": {
          "tile": ".coverage__area flex row gap 14px; padding 22Ã—24; bg rgba white 0.05; border 1px rgba white 0.08; hover yellow-tint + border yellow + translateY(-2px) 0.35s --ease-expo",
          "dot": ".coverage__area-dot 8px circle yellow-core",
          "type": ".coverage__area-name body 14px 700 uppercase white; .coverage__area-sub 12px muted white"
        },
        "typography": {
          "eyebrow": ".coverage__eyebrow margin-bottom 16px",
          "heading": "h2#coverage-heading Oswald clamp(36pxâ€¦54px) uppercase white; em yellow-core",
          "body": ".coverage__body 15px/1.7 rgba white 0.62 max 42ch â€” not --text-500 on charcoal (comment in CSS)"
        },
        "tokensUsed": [
          "--charcoal",
          "--white",
          "--yellow-core",
          "--yellow-tint",
          "--container-max",
          "--gap-grid",
          "--section-v",
          "--ease-expo",
          "--font-display",
          "--font-body"
        ],
        "contentShape": {
          "props": "eyebrow, headingBefore, headingEmphasis (em), headingAfter, body, areas[{name,sub}]"
        },
        "hierarchy": "Eyebrow â†’ H2 territory statement â†’ supporting body â†’ scannable area tiles"
      },
      "layersBottomToTop": [
        "section#coverage charcoal fill",
        ".coverage__fx-radial",
        ".coverage__fx-topbar",
        ".coverage__inner",
        ".coverage__label-col .coverage__intro (eyebrow, h2, body)",
        ".coverage__areas .coverage__area cards"
      ],
      "auditNotes": "User saw inline style on section in DevTools â€” intentional in CoverageSection.tsx. Tailwind classes on section are layout helpers only."
    },
    {
      "id": "testimonials-tst3-editorial",
      "status": "candidate",
      "displayName": "Testimonials â€” Tst3 featured quote + supporting grid",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "White band with charcoal top seam: split header, large Source Serif featured quote with yellow quote mark, yellow accent rule, then 2-col gray cards",
        "reactComponent": "glc-site/src/components/sections/testimonials-section.tsx",
        "domPath": "main#main-content > section#testimonials",
        "sectionElementId": "testimonials",
        "relatedComponents": [
          "framer-motion .tst3__featured + .tst3__card",
          "glc-site/src/components/ui/reveal.tsx"
        ],
        "classPrefix": "tst3__",
        "cssAnchorComments": [
          "TESTIMONIALS â€” v3 Editorial Pull Quote",
          "TESTIMONIALS â€” Featured Editorial Layout (v2)"
        ]
      },
      "referenceFiles": {
        "contentExample": "glc-site/src/content/pages/home.json type testimonials",
        "propsType": "TestimonialsProps"
      },
      "visualDna": {
        "ground": {
          "section": "#testimonials white overflow hidden",
          "seam": "#testimonials::before top 3px charcoal-deep full width"
        },
        "header": {
          "layout": ".tst3__header grid 1fr 1fr gap 40px align end; container padding var(--section-v) 40px 56px",
          "left": ".tst3__header-left: .eyebrow.eyebrow--dark + h2#testimonials-heading .tst3__heading Oswald clamp(32pxâ€¦48px) uppercase; em yellow-core (not in Reveal â€” instant)",
          "right": ".tst3__header-right .tst3__sub 15px/1.8 --text-500 max 44ch with reveal--delay-2"
        },
        "featured": {
          "container": "motion.div.tst3__featured role article; grid auto+1fr gap 32px; padding 0 40px 64px; position relative",
          "openQuote": ".tst3__open-mark Source Serif 4 italic huge clamp(100pxâ€¦160px) yellow-core ~0.7 opacity",
          "quote": ".tst3__featured-quote Source Serif italic clamp(18pxâ€¦26px) charcoal",
          "attribution": "flex row gap 16px: .tst3__featured-name body 13px 800 uppercase; .tst3__featured-sep 28Ã—2 yellow bar; .tst3__featured-role 12px muted",
          "accentBar": ".tst3__featured-accent bottom full width 1px gray-200; ::before 72Ã—3 yellow segment",
          "motion": "whileInView fade y 0.8s ease expo"
        },
        "supportingGrid": {
          "layout": ".tst3__grid 2 columns gap 2px; padding 0 40px bottom section-v",
          "card": "motion.article.tst3__card gray-100 padding 40Ã—36; border-top 3px transparent â†’ yellow hover; hover yellow-tint",
          "internals": ".tst3__card-mark Source Serif quote 48px yellow; .tst3__card-quote body italic 14px --text-500; .tst3__card-rule 28Ã—2 yellow; name uppercase; role small muted"
        },
        "responsive": {
          "768": "tighter padding; featured single column; smaller open mark",
          "1024": "header 1 col; grid 1 col"
        },
        "tokensUsed": [
          "--white",
          "--charcoal-deep",
          "--yellow-core",
          "--gray-100",
          "--gray-200",
          "--text-500",
          "--text-400",
          "--font-display",
          "--font-body",
          "--font-accent",
          "--container-max",
          "--section-v",
          "--ease-expo"
        ],
        "contentShape": {
          "props": "eyebrow, headingBefore, headingAccent (em), headingAfter, sub, items[{quote,name,role}] â€” first item featured"
        }
      },
      "layersBottomToTop": [
        "#testimonials white + top seam",
        ".tst3__header",
        ".tst3__featured: open mark, body, accent",
        ".tst3__grid .tst3__card articles"
      ],
      "auditNotes": "Featured h2 lines use em for accent word; supporting cards use framer whileInView. v2 #testimonials block adds padding + alternate layout classes â€” cascade conflict entry."
    },
    {
      "id": "cta-band-cta3-charcoal-close",
      "status": "candidate",
      "displayName": "CTA band â€” Cta3 charcoal close (diagonal wash + phone)",
      "implementation": {
        "kind": "section",
        "plainEnglishName": "Dark charcoal closing band: skewed yellow wash, blueprint grid, two-column inner (headline + sub) vs stacked phone/email actions, bottom yellow gradient bar",
        "reactComponent": "glc-site/src/components/sections/cta-band-section.tsx",
        "domPath": "main#main-content > section#cta-band",
        "sectionElementId": "cta-band",
        "propsNote": "sectionId prop defaults cta-band",
        "relatedComponents": [
          "glc-site/src/components/ui/icon-arrow.tsx"
        ],
        "classPrefix": "cta3__",
        "cssAnchorComments": [
          "CTA BAND â€” v3 Dark Charcoal Close",
          "CTA BAND â€” Charcoal Drama (v2)"
        ]
      },
      "referenceFiles": {
        "contentExample": "glc-site/src/content/pages/home.json type ctaBand",
        "propsType": "CtaBandProps"
      },
      "visualDna": {
        "ground": {
          "section": "#cta-band var(--charcoal-deep) overflow hidden",
          "blueprint": "#cta-band::before inset crossed 80px grid rgba white 0.012",
          "diag": ".cta3__diag absolute skewed yellow rectangle opacity 0.07 pointer-events none â€” atmospheric depth",
          "v2WatermarkNote": "Later #cta-band::after 'GLC' ghost text in v2 block â€” same id; see conflictsToEliminate"
        },
        "inner": {
          "layout": ".cta3__inner container padding var(--section-v) 40px; grid 1fr auto gap 60px align center z1",
          "copy": ".cta3__copy: .cta3__eyebrow-bar flex eyebrow + extending .cta3__eyebrow-line (1px rgba white 0.1); .cta3__eyebrow 10px 800 uppercase yellow tracking 0.22em",
          "heading": "h2#cta-heading Oswald clamp(36pxâ€¦58px) uppercase white; line breaks + em yellow-core",
          "sub": ".cta3__sub 14px rgba white 0.5 max 50ch"
        },
        "actions": {
          "column": ".cta3__actions flex column gap 16px align end; min-width 280px",
          "phone": ".cta3__phone-label micro uppercase muted; .cta3__phone block Oswald clamp yellow hover opacity",
          "divider": ".cta3__divider 1px rgba white 0.12 full width",
          "email": "a.btn-ghost.cta3__email-btn + IconArrow"
        },
        "footerAccent": ".cta3__bottom-bar height 4px gradient yellow â†’ fade full width",
        "responsive": {
          "768": "reduced padding; email btn align start",
          "1024": "inner 1 col; actions align start; phone text-align left"
        },
        "tokensUsed": [
          "--charcoal-deep",
          "--white",
          "--yellow-core",
          "--ease-expo",
          "--font-display",
          "--font-body",
          "--section-v",
          "--section-v-sm",
          "--container-max"
        ],
        "contentShape": {
          "props": "eyebrow, headingLine1, headingLine2, headingEmphasis (em), sub, phoneLabel, phone, phoneHref, emailCta{label,href}"
        }
      },
      "layersBottomToTop": [
        "#cta-band charcoal",
        "#cta-band::before blueprint",
        ".cta3__diag",
        ".cta3__inner: copy + actions",
        ".cta3__bottom-bar"
      ],
      "auditNotes": "RSC may show SegmentViewNode; markup is cta-band-section.tsx. v2 adds ::after watermark + cta-r2__* â€” documented cascade conflict."
    },
    {
      "id": "footer-site-wide-gray-rail",
      "status": "candidate",
      "displayName": "Footer â€” brand grid + legal bar",
      "implementation": {
        "kind": "component",
        "plainEnglishName": "Gray-100 footer: 4-column main grid (brand + 3 link columns), charcoal 4px top border, off-white legal strip",
        "reactComponent": "glc-site/src/components/layout/site-footer.tsx",
        "domPath": "footer#footer",
        "dataSource": "glc-site/src/content/site.json + navigation.json footer",
        "variant": "minimal prop renders bar-only copyright strip"
      },
      "referenceFiles": {},
      "visualDna": {
        "ground": {
          "shell": "#footer background var(--gray-100); padding 80px 0 0; border-top 4px var(--charcoal-deep)"
        },
        "mainGrid": {
          "layout": ".footer__main container padding 0 40px 60px; grid 280px 1fr 1fr 1fr gap 60px",
          "brand": ".footer__brand: .footer__logo-row Image + .footer__wordmark-name Oswald 16px uppercase + .footer__wordmark-sub 9px yellow tracking; .footer__tagline Source Serif italic 14px --text-600",
          "contact": ".footer__contact-item flex gap 10px 13px 600 --text-600; svg yellow-core; phone link hover yellow",
          "columns": "per column .footer__col-title Oswald 14px uppercase + bottom border gray-200 + ::after 24Ã—2 yellow accent; ul.footer__links li > SmartLink with ::before expanding yellow bar hover"
        },
        "legalBar": {
          "surface": ".footer__bar off-white border-top gray-200",
          "inner": ".footer__bar-inner flex space-between padding 20px 40px",
          "copy": ".footer__copy 12px --text-400; span legal name yellow-core",
          "legalLinks": ".footer__legal flex gap; links hover yellow-core"
        },
        "responsive": {
          "768": "main 1 col; bar-inner stacks centered",
          "1024": "main 2 columns; brand spans full width"
        },
        "tokensUsed": [
          "--gray-100",
          "--gray-200",
          "--off-white",
          "--charcoal-deep",
          "--yellow-core",
          "--text-600",
          "--text-400",
          "--font-display",
          "--font-body",
          "--font-accent",
          "--container-max",
          "--ease-expo"
        ],
        "contentShape": {
          "footerNav": "footer.tagline, footer.columns[{title, links[]}], footer.legal[]",
          "site": "name, slogan, telephone, telephoneDisplay, address, copyrightYear, legalName"
        },
        "interaction": "Link hover darkens text + yellow micro-bar animates width 0â†’16px"
      },
      "layersBottomToTop": [
        "#footer gray-100 + top charcoal rule",
        ".footer__main",
        ".footer__bar"
      ],
      "auditNotes": "Rendered from app/layout.tsx with site + navigation props. Not a main#main-content section but part of every page chrome."
    },
    {
      "id": "glc-snow-p14-midlower-cta",
      "status": "candidate",
      "displayName": "Commercial snow â€” P14 mid-to-lower CTA banner",
      "implementation": {
        "kind": "element",
        "plainEnglishName": "Dark charcoal inline CTA strip: yellow left rail, headline + supporting line, primary + ghost SmartLinks â€” revealed on scroll with the snow page reveal wrapper",
        "reactComponent": "glc-site/src/components/services/commercial-snow-page-main.tsx (comment P14 MID-TO-LOWER CTA BANNER)",
        "wrapperComponent": "glc-site/src/components/services/commercial-snow-reveal-section.tsx â†’ SnowRevealSection (div.reveal.glc-snow-reveal + useReveal ref)",
        "route": "glc-site/src/app/services/snow-removal/page.tsx â†’ CommercialSnowPageMain",
        "domPath": "main#main-content > div.glc-snow-page > div.reveal.glc-snow-reveal.visible > div.glc-snow-midlower-cta",
        "classPrefix": "glc-snow-midlower-cta__",
        "cssAnchorComments": [
          "P14 â€” Mid-to-lower CTA",
          "SNOW PAGE (glc-snow-btn)"
        ]
      },
      "referenceFiles": {
        "ctasAndSharedCopy": "glc-site/src/content/commercial-snow-page-data.ts â†’ commercialSnowClosingCta.ctas (href + labels for buttons; midlower block duplicates heading copy in TSX)"
      },
      "visualDna": {
        "parentWrapper": {
          "classes": "reveal glc-snow-reveal â€” inherits global .reveal scroll visibility; .glc-snow-reveal shortens transition to 0.28s (opacity/transform)",
          "behavior": "useReveal adds .visible when intersecting; prefers-reduced-motion: .glc-snow-reveal transition none"
        },
        "ground": {
          "banner": ".glc-snow-midlower-cta background var(--charcoal-deep); padding 48Ã—40; box-shadow 0 8px 40px rgba(14,13,12,0.3)",
          "mobilePadding": "â‰¤768px padding 36Ã—20 (snow page responsive block)"
        },
        "layout": {
          "inner": ".glc-snow-midlower-cta__inner max-width --container-max margin auto; grid minmax(0,1fr) + auto; align center; gap 32px",
          "stackMobile": "â‰¤768px grid 1 column; align-items start",
          "copyColumn": ".glc-snow-midlower-cta__copy min-width 0",
          "accentRail": ".glc-snow-midlower-cta__copy--accent border-left 4px var(--yellow-core); padding-left 24px",
          "actions": ".glc-snow-midlower-cta__btns flex row gap 12px wrap align center"
        },
        "typography": {
          "heading": "p.glc-snow-midlower-cta__heading â€” Oswald clamp(1rem, 2vw, 1.3rem) 700 uppercase letter-spacing 0.04em white; margin 0 0 8px",
          "sub": "p.glc-snow-midlower-cta__sub body 14px rgba(255,255,255,0.6) line-height 1.6"
        },
        "interactions": {
          "primaryCta": "SmartLink.glc-snow-btn.glc-snow-btn--primary â€” yellow fill, gold gradient sweep on hover/focus, charcoal text, border yellow, translateY(-2px) on hover",
          "ghostCta": "SmartLink.glc-snow-btn.glc-snow-btn--ghost â€” transparent + white border rgba 0.35; light gradient fill sweep hover; white text",
          "reducedMotion": ".glc-snow-btn--primary/--ghost lose background-image sweep; hover transform none"
        },
        "tokensUsed": [
          "--charcoal-deep",
          "--yellow-core",
          "--gold",
          "--white",
          "--container-max",
          "--font-display",
          "--font-body",
          "--ease-expo"
        ],
        "contentShape": {
          "note": "Heading and sub paragraphs are hardcoded strings in commercial-snow-page-main.tsx (~lines 426â€“430), not pulled from commercialSnowClosingCta object.",
          "buttons": "Both use commercialSnowClosingCta.ctas[0].href and ctas[1].href; primary label hardcoded \"Request Free Commercial Assessment\" (matches data); secondary label from ctas[1].label (e.g. tel link text)."
        },
        "hierarchy": "Yellow rail + headline (dominant) â†’ muted subcopy â†’ action row (primary first, ghost second)"
      },
      "layersBottomToTop": [
        "div.reveal.glc-snow-reveal (scroll fade/slide)",
        ".glc-snow-midlower-cta surface + shadow",
        ".glc-snow-midlower-cta__inner grid",
        ".glc-snow-midlower-cta__copy.glc-snow-midlower-cta__copy--accent: __heading, __sub",
        ".glc-snow-midlower-cta__btns: .glc-snow-btn--primary, .glc-snow-btn--ghost"
      ],
      "auditNotes": "DevTools class typos glc-.now-* are OCR errors; real prefix is glc-snow-. Part of long-form commercial snow page after process block (P13) and before FAQ (P15)."
    }
  ]
}
`

## Verbatim Appendix - Doc 3
`html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>GLC â€” SVG Motif System Â· Approval Preview</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;700;800&family=Barlow:wght@300;400;500&family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet">

<style>
/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   TOKENS â€” exact match to glc-unified-v2
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
:root {
  --white:            #FFFFFF;
  --gray-100:         rgba(30,28,26,0.06);
  --gray-200:         rgba(30,28,26,0.12);
  --charcoal-deep:    #1E1C1A;
  --charcoal-mid:     #2E2B28;
  --charcoal-light:   #585653;
  --yellow-core:      #F7C520;
  --gold:             #D4A017;
  --charcoal-tint:    rgba(46,43,40,0.06);
  --charcoal-tint-md: rgba(46,43,40,0.12);
  --text-600:         rgba(30,28,26,0.90);
  --text-500:         rgba(30,28,26,0.80);
  --text-400:         rgba(30,28,26,0.55);
  --font-display:     'Oswald', sans-serif;
  --font-body:        'Plus Jakarta Sans', sans-serif;
  --font-industrial:  'Barlow', sans-serif;
  --font-mono:        'Source Code Pro', monospace;
  --ease-expo:        cubic-bezier(0.22, 1, 0.36, 1);
  --container-max:    1320px;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { -webkit-font-smoothing: antialiased; }
body {
  font-family: var(--font-body);
  background: var(--white);
  color: var(--text-500);
  line-height: 1.8;
  overflow-x: hidden;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   PREVIEW CHROME
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.topbar {
  background: var(--charcoal-deep);
  border-bottom: 3px solid var(--yellow-core);
  padding: 18px 48px;
  display: flex; align-items: center; justify-content: space-between;
  position: sticky; top: 0; z-index: 200;
}
.topbar__mark {
  width: 28px; height: 28px; background: var(--yellow-core);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 10px; font-weight: 700;
  color: var(--charcoal-deep); position: relative; flex-shrink: 0;
}
.topbar__mark::after {
  content: ''; position: absolute; bottom: -2px; right: -2px;
  width: 5px; height: 5px; background: var(--charcoal-mid);
}
.topbar__title {
  font-family: var(--font-display); font-size: 12px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.12em; color: var(--white);
  margin-left: 14px;
}
.topbar__title em { font-style: normal; color: var(--yellow-core); }
.badge {
  font-family: var(--font-mono); font-size: 8px; font-weight: 500;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: rgba(255,255,255,0.30); background: rgba(255,255,255,0.05);
  padding: 4px 10px; border: 1px solid rgba(255,255,255,0.09);
}

/* Label strip between motif blocks */
.lstrip {
  background: var(--white);
  padding: 14px 48px;
  border-bottom: 1px solid var(--gray-100);
  border-top: 1px solid var(--gray-200);
  display: flex; align-items: center; justify-content: space-between;
}
.lstrip__id {
  font-family: var(--font-mono); font-size: 9px; font-weight: 500;
  letter-spacing: 0.22em; text-transform: uppercase; color: var(--yellow-core);
  display: flex; align-items: center; gap: 10px;
}
.lstrip__id::before { content:''; width:16px; height:2px; background:var(--yellow-core); flex-shrink:0; }
.lstrip__name {
  font-family: var(--font-display); font-size: 13px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.07em; color: var(--charcoal-deep);
}
.lstrip__note {
  font-family: var(--font-industrial); font-size: 12px; font-weight: 300;
  color: var(--text-400);
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   DSE SECTION PATTERN (matches unified-v2 exactly)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.dse {
  background: var(--charcoal-deep);
  position: relative; overflow: hidden;
}
.dse::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image:
    repeating-linear-gradient(0deg,   rgba(255,255,255,0.010) 0, rgba(255,255,255,0.010) 1px, transparent 1px, transparent 80px),
    repeating-linear-gradient(90deg,  rgba(255,255,255,0.010) 0, rgba(255,255,255,0.010) 1px, transparent 1px, transparent 80px);
}
.dse-rail {
  position: absolute; top: 0; left: 0; right: 0; height: 3px; z-index: 4;
  background: linear-gradient(90deg, var(--yellow-core) 0%, rgba(247,197,32,0.12) 65%, transparent 100%);
}
.dse-grain {
  position: absolute; inset: 0; z-index: 2; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E");
  background-size: 200px; opacity: 0.028; mix-blend-mode: overlay;
}
.dse-c { position: relative; z-index: 3; }

/* LIGHT SECTION PATTERN */
.ls {
  background: var(--white); position: relative; overflow: hidden;
}
.ls::before {
  content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image: repeating-linear-gradient(0deg,
    rgba(0,0,0,0.022) 0px, rgba(0,0,0,0.022) 1px, transparent 1px, transparent 64px);
}
.ls-c { position: relative; z-index: 1; }

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   SHARED PRIMITIVES (from unified-v2)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.eyebrow {
  font-family: var(--font-body); font-size: 9px; font-weight: 800;
  letter-spacing: 0.24em; text-transform: uppercase; color: var(--yellow-core);
  display: flex; align-items: center; gap: 10px; margin-bottom: 20px;
}
.eyebrow::before { content:''; width:20px; height:2px; background:var(--yellow-core); flex-shrink:0; }
.eyebrow-d { color: rgba(255,255,255,0.38); }
.eyebrow-d span { color: var(--yellow-core); }

.anno {
  font-family: var(--font-mono); font-size: 8px; font-weight: 500;
  letter-spacing: 0.18em; text-transform: uppercase; color: var(--text-400);
}
.anno-w { color: rgba(255,255,255,0.28); }

/* Grids */
.g2 { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
.g3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2px; }

/* Animations */
@keyframes s1 { from{transform:translateX(0)} to{transform:translateX(20px)} }
@keyframes s2 { from{transform:translateX(0)} to{transform:translateX(-14px)} }
.a1 { animation: s1 10s infinite alternate ease-in-out; }
.a2 { animation: s2 14s infinite alternate ease-in-out; }

/* Hover card (light) */
.hcard {
  background: var(--white); border: 1px solid var(--gray-200);
  padding: 28px; position: relative; overflow: hidden;
  transition: background 0.22s var(--ease-expo), border-color 0.22s;
  cursor: default;
}
.hcard:hover { background: var(--charcoal-tint); border-color: var(--yellow-core); }
.hcard::after {
  content: ''; position: absolute; top: 0; right: 0;
  width: 70px; height: 70px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cpolygon points='120,0 0,120 120,120' fill='%231E1C1A'/%3E%3Cpolygon points='120,0 60,60 120,60' fill='%23F7C520'/%3E%3C/svg%3E") no-repeat;
  background-size: contain;
  transform: translate(35px,-35px);
  transition: transform 0.35s var(--ease-expo);
  pointer-events: none;
}
.hcard:hover::after { transform: translate(0,0); }

/* btn-primary (exact from unified-v2) */
.btn-p {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-body); font-size: 11px; font-weight: 800;
  letter-spacing: 0.14em; text-transform: uppercase;
  background: var(--yellow-core); color: var(--charcoal-deep);
  border: none; padding: 14px 28px; cursor: default;
  position: relative; overflow: hidden;
  transition: transform 0.22s var(--ease-expo), box-shadow 0.22s var(--ease-expo);
}
.btn-p::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
  transform: translateX(-100%);
  transition: transform 0.7s var(--ease-expo);
}
.btn-p:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(247,197,32,0.30); }
.btn-p:hover::before { transform: translateX(100%); }

.btn-g {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-body); font-size: 11px; font-weight: 800;
  letter-spacing: 0.14em; text-transform: uppercase;
  background: transparent; color: var(--charcoal-deep);
  border: 1px solid var(--gray-200); padding: 13px 28px; cursor: default;
  transition: background 0.22s, border-color 0.22s;
}
.btn-g:hover { background: var(--charcoal-tint); border-color: var(--charcoal-light); }

/* Yellow rule 3px */
.yrule { width: 48px; height: 3px; background: var(--yellow-core); margin-bottom: 20px; }

/* Feature bullet (stc1 style) */
.fbullet {
  display: flex; align-items: center; gap: 12px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.10em;
  text-transform: uppercase; color: rgba(255,255,255,0.65);
}
.fbullet::before {
  content: ''; width: 6px; height: 6px; background: var(--yellow-core);
  clip-path: polygon(50% 0%,100% 50%,50% 100%,0% 50%); flex-shrink: 0;
}
</style>
</head>
<body>

<!-- TOP BAR -->
<div class="topbar">
  <div style="display:flex;align-items:center;">
    <div class="topbar__mark">GL</div>
    <div class="topbar__title">Ground Level <em>Contracting</em> â€” SVG Motif Approval Preview</div>
  </div>
  <div style="display:flex;gap:10px;">
    <div class="badge">glc-unified-v2 tokens</div>
    <div class="badge">21 motifs</div>
    <div class="badge">zero border-radius</div>
    <div class="badge">hover cards interactive</div>
  </div>
</div>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  A1 â€” HERO FULL SWEEP (Forward, left â†’ right)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<div class="lstrip">
  <div><div class="lstrip__id">A1 Â· Hero Full Sweep</div><div class="lstrip__name">Forward Flow Â· Left â†’ Right</div></div>
  <div class="lstrip__note">Hero left panel background Â· 3 planes Â· parallax layers animating on translateX</div>
</div>
<div class="dse" style="min-height:320px;display:flex;align-items:flex-end;padding:60px 80px 52px;">
  <div class="dse-rail"></div>
  <div class="dse-grain"></div>
  <svg style="position:absolute;inset:0;width:100%;height:100%;z-index:1;" viewBox="0 0 1400 320" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <polygon class="a1" points="0,320 0,155 700,50 1100,110 1400,42 1400,320" fill="#2E2B28" opacity="0.7"/>
    <polygon class="a1" points="0,158 0,190 850,70 1400,48 1400,42 700,50" fill="#F7C520" opacity="0.80"/>
    <polygon class="a2" points="0,320 0,230 480,175 1100,205 1400,165 1400,320" fill="#1E1C1A" opacity="0.65"/>
  </svg>
  <div style="position:absolute;bottom:72px;right:-10px;font-family:var(--font-display);font-size:clamp(80px,10vw,140px);font-weight:700;letter-spacing:-0.04em;line-height:1;color:rgba(255,255,255,0.022);pointer-events:none;user-select:none;z-index:1;">GLC</div>
  <div class="dse-c">
    <div class="eyebrow eyebrow-d"><span>Simcoe County Commercial</span></div>
    <div style="font-family:var(--font-display);font-size:clamp(44px,5.5vw,88px);font-weight:700;text-transform:uppercase;letter-spacing:-0.025em;line-height:0.88;margin-bottom:28px;">
      <span style="display:block;font-weight:200;color:rgba(255,255,255,0.18);">Built From</span>
      <span style="display:block;font-weight:600;color:rgba(255,255,255,0.88);">The Ground</span>
      <span style="display:block;color:var(--yellow-core);">Up.</span>
    </div>
    <div style="font-family:var(--font-industrial);font-size:14px;font-weight:300;color:rgba(255,255,255,0.55);max-width:38ch;line-height:1.82;">Commercial excavation, civil infrastructure, and site services across Barrie and Simcoe County.</div>
  </div>
  <div style="position:absolute;bottom:14px;right:48px;z-index:5;" class="anno anno-w">A1 Â· watch the yellow band drift right â†’</div>
</div>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  A2 â€” HERO REVERSED
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<div class="lstrip">
  <div><div class="lstrip__id">A2 Â· Hero Sweep Reversed</div><div class="lstrip__name">Right â†’ Left Flow Â· Service Page Variant</div></div>
  <div class="lstrip__note">Mirrors truck forward motion Â· use on right-side-weighted layouts Â· same animation, opposing direction</div>
</div>
<div class="dse" style="min-height:240px;display:flex;align-items:flex-end;padding:48px 80px 44px;">
  <div class="dse-grain"></div>
  <svg style="position:absolute;inset:0;width:100%;height:100%;z-index:1;" viewBox="0 0 1400 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <polygon class="a2" points="1400,240 1400,110 700,30 300,80 0,20 0,240" fill="#2E2B28" opacity="0.7"/>
    <polygon class="a2" points="1400,112 1400,145 550,45 0,25 0,20 700,30" fill="#F7C520" opacity="0.80"/>
    <polygon class="a1" points="1400,240 1400,175 920,130 300,152 0,115 0,240" fill="#1E1C1A" opacity="0.65"/>
  </svg>
  <div class="dse-c" style="margin-left:auto;text-align:right;">
    <div class="eyebrow eyebrow-d" style="justify-content:flex-end;"><span>Service Detail</span></div>
    <div style="font-family:var(--font-display);font-size:clamp(32px,4vw,62px);font-weight:700;text-transform:uppercase;letter-spacing:-0.02em;line-height:1;color:var(--white);">
      Foundations &amp; <em style="font-style:normal;color:var(--yellow-core);">Civil</em>
    </div>
  </div>
  <div style="position:absolute;bottom:14px;left:48px;z-index:5;" class="anno anno-w">A2 Â· reversed Â· â† yellow band drifts left</div>
</div>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  A3 â€” SECTION DIVIDER (live transition)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<div class="lstrip">
  <div><div class="lstrip__id">A3 Â· Section Divider</div><div class="lstrip__name">Angled Transition Â· Light â†’ Dark</div></div>
  <div class="lstrip__note">Between page zones Â· 55â€“80px height Â· yellow thread at seam edge</div>
</div>
<div class="ls" style="padding:28px 48px;">
  <div class="ls-c"><span class="anno">Section above â€” white surface Â· hairline grid active</span></div>
</div>
<div style="line-height:0;margin-bottom:-1px;">
  <svg viewBox="0 0 1400 70" preserveAspectRatio="none" style="width:100%;height:70px;display:block;" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,70 0,38 1400,0 1400,70" fill="#1E1C1A"/>
    <polygon points="0,70 0,54 700,16 1400,30 1400,70" fill="#1E1C1A" opacity="0.5"/>
    <polygon points="0,40 1400,2 1400,7 0,46" fill="#F7C520" opacity="0.42"/>
  </svg>
</div>
<div class="dse" style="padding:28px 48px;">
  <div class="dse-c"><span class="anno anno-w">Section below â€” DSE Â· blueprint grid active Â· yellow thread visible at seam</span></div>
</div>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  A4 + A5 â€” FOOTER CAP + THIN STRIP
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<div class="lstrip">
  <div><div class="lstrip__id">A4 Â· Footer Cap &nbsp;Â·&nbsp; A5 Â· Thin Accent Strip</div><div class="lstrip__name">Footer Entry Â· Typography Rule</div></div>
  <div class="lstrip__note">A4 at footer top Â· A5 as angled underline under Oswald display headings</div>
</div>
<div class="g2">
  <div>
    <div style="background:var(--charcoal-mid);padding:16px 28px;border-bottom:1px solid rgba(255,255,255,0.06);">
      <span class="anno anno-w">A4 Â· Footer Cap</span>
    </div>
    <div style="background:var(--charcoal-mid);line-height:0;">
      <svg viewBox="0 0 700 55" preserveAspectRatio="none" style="width:100%;height:55px;display:block;" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,55 0,28 700,0 700,55" fill="#1E1C1A"/>
        <polygon points="0,55 0,40 210,14 700,0 700,55" fill="#F7C520" opacity="0.15"/>
      </svg>
    </div>
    <div class="dse" style="padding:24px 28px;">
      <div class="dse-c"><span class="anno anno-w">Footer zone â€” charcoal-deep</span></div>
    </div>
  </div>
  <div class="ls" style="padding:40px 48px;">
    <div class="ls-c">
      <span class="anno" style="display:block;margin-bottom:16px;">A5 Â· Angled rule under display heading</span>
      <div style="font-family:var(--font-display);font-size:42px;font-weight:700;text-transform:uppercase;letter-spacing:-0.02em;line-height:1;color:var(--charcoal-deep);margin-bottom:8px;">Our Services</div>
      <svg viewBox="0 0 320 3" preserveAspectRatio="none" style="width:220px;height:3px;display:block;margin-bottom:18px;">
        <polygon points="0,3 0,1.5 320,0 320,3" fill="#F7C520"/>
      </svg>
      <div style="font-family:var(--font-industrial);font-size:14px;font-weight:300;color:var(--text-400);">Angled yellow rule replaces a flat border â€” carries the motif language into typography without a graphic element.</div>
    </div>
  </div>
</div>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  A6 â€” DIAGONAL STRIP AS BG WATERMARK
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<div class="lstrip">
  <div><div class="lstrip__id">A6 Â· Diagonal Strip</div><div class="lstrip__name">Section Background Watermark</div></div>
  <div class="lstrip__note">6â€“10% opacity max Â· DSE sections only Â· never on white backgrounds</div>
</div>
<div class="dse" style="padding:52px 80px;min-height:200px;display:flex;align-items:center;">
  <div class="dse-rail"></div>
  <div class="dse-grain"></div>
  <svg style="position:absolute;inset:0;width:100%;height:100%;z-index:1;" viewBox="0 0 1400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,200 0,100 1400,0 1400,100" fill="#F7C520" opacity="0.07"/>
    <polygon points="0,200 0,140 1400,40 1400,200" fill="#F7C520" opacity="0.04"/>
  </svg>
  <div class="dse-c">
    <div class="eyebrow eyebrow-d"><span>Why GLC</span></div>
    <div style="font-family:var(--font-display);font-size:clamp(28px,3.5vw,48px);font-weight:700;text-transform:uppercase;letter-spacing:-0.02em;line-height:1;color:var(--white);margin-bottom:12px;">
      Locally Operated. <em style="font-style:normal;color:var(--yellow-core);">Commercially Focused.</em>
    </div>
    <div style="font-family:var(--font-industrial);font-size:14px;font-weight:300;color:rgba(255,255,255,0.55);max-width:50ch;line-height:1.82;">Diagonal strip at 7% opacity. Carries angular identity without competing with text â€” you feel it rather than see it.</div>
  </div>
  <div style="position:absolute;bottom:14px;right:48px;z-index:5;" class="anno anno-w">A6 Â· opacity 0.07 Â· never above 0.10</div>
</div>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  GROUP B â€” CORNERS Â· stc1 service panel (existing slots)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<div class="lstrip">
  <div><div class="lstrip__id">B1â€“B4 Â· Service Panel Corners</div><div class="lstrip__name">stc1__panel Motif Slots â€” Existing Classes</div></div>
  <div class="lstrip__note">.motif-corner Â· .motif-slash Â· .motif-cross Â· .motif-triangle already in unified-v2 Â· SVG files plug directly in</div>
</div>
<div class="dse" style="min-height:420px;position:relative;overflow:hidden;">
  <div class="dse-rail"></div>
  <div class="dse-grain"></div>
  <div style="position:absolute;inset:0;z-index:1;pointer-events:none;background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.018) 0px,rgba(255,255,255,0.018) 1px,transparent 1px,transparent 80px),repeating-linear-gradient(90deg,rgba(255,255,255,0.018) 0px,rgba(255,255,255,0.018) 1px,transparent 1px,transparent 80px);"></div>
  <!-- B1: .motif-corner â€” bottom right, 200px, 12% -->
  <svg style="position:absolute;bottom:0;right:0;width:200px;height:200px;opacity:0.12;z-index:2;pointer-events:none;" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="200,0 0,200 200,200" fill="#F7C520"/>
  </svg>
  <!-- B2: .motif-slash â€” top right, 160px, 8% -->
  <svg style="position:absolute;top:20px;right:60px;width:160px;height:160px;opacity:0.08;z-index:2;pointer-events:none;" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
    <polygon points="160,0 80,160 160,160" fill="#F7C520"/>
    <polygon points="120,0 40,160 80,160 160,0" fill="#F7C520"/>
  </svg>
  <!-- B3: .motif-cross â€” centred, 120px, 6% -->
  <svg style="position:absolute;top:50%;right:44%;transform:translateY(-50%);width:120px;height:120px;opacity:0.06;z-index:2;pointer-events:none;" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,0 120,0 120,120" fill="#F7C520"/>
    <polygon points="0,0 0,120 120,120" fill="#F7C520" opacity="0.5"/>
  </svg>
  <!-- B4: .motif-triangle â€” bottom left, 100px, 8% -->
  <svg style="position:absolute;bottom:40px;left:40px;width:100px;height:100px;opacity:0.08;z-index:2;pointer-events:none;" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,100 100,100 100,0" fill="#F7C520"/>
  </svg>

  <div style="position:relative;z-index:3;padding:clamp(48px,7vw,80px) clamp(32px,6vw,100px);display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;min-height:420px;">
    <div>
      <div class="eyebrow eyebrow-d"><span>01 Â· Excavation</span></div>
      <div style="font-family:var(--font-display);font-size:clamp(32px,4vw,56px);font-weight:700;line-height:1;letter-spacing:-0.02em;text-transform:uppercase;color:var(--white);margin-bottom:16px;">
        Site Prep &amp; <em style="font-style:normal;color:var(--yellow-core);">Earthworks</em>
      </div>
      <div class="yrule"></div>
      <div style="font-family:var(--font-industrial);font-size:14px;font-weight:300;line-height:1.80;color:rgba(255,255,255,0.58);max-width:40ch;margin-bottom:24px;">Commercial bulk excavation, cut and fill, and precision grading for demanding project timelines across Simcoe County.</div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:28px;">
        <div class="fbullet">Bulk Earthworks</div>
        <div class="fbullet">Precision Grading</div>
        <div class="fbullet">Rock Breaking &amp; Removal</div>
      </div>
      <div style="display:flex;gap:12px;">
        <button class="btn-p">Get a Quote <svg style="width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2;" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
      </div>
    </div>
    <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);padding:28px;">
      <div style="font-family:var(--font-mono);font-size:9px;letter-spacing:0.20em;text-transform:uppercase;color:rgba(255,255,255,0.25);margin-bottom:14px;">Active motif slots in this panel</div>
      <div style="display:flex;flex-direction:column;gap:9px;">
        <div style="font-family:var(--font-mono);font-size:10px;color:rgba(247,197,32,0.65);letter-spacing:0.10em;">.motif-corner   â†’ B1 Â· bottom right Â· 200px Â· opacity 0.12</div>
        <div style="font-family:var(--font-mono);font-size:10px;color:rgba(247,197,32,0.65);letter-spacing:0.10em;">.motif-slash    â†’ B2 Â· top right Â· 160px Â· opacity 0.08</div>
        <div style="font-family:var(--font-mono);font-size:10px;color:rgba(247,197,32,0.65);letter-spacing:0.10em;">.motif-cross    â†’ B3 Â· centred Â· 120px Â· opacity 0.06</div>
        <div style="font-family:var(--font-mono);font-size:10px;color:rgba(247,197,32,0.65);letter-spacing:0.10em;">.motif-triangle â†’ B4 Â· bottom left Â· 100px Â· opacity 0.08</div>
      </div>
      <div style="margin-top:20px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.07);">
        <div style="font-family:var(--font-mono);font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.18);">These slots already exist in unified-v2.<br>Drop SVG files into /public/svg/ and reference by class name.</div>
      </div>
    </div>
  </div>
</div>


<!-- B5 + Light card hover -->
<div class="lstrip">
  <div><div class="lstrip__id">B5 Â· Inverted Corner &nbsp;Â·&nbsp; B1 on Light Card</div><div class="lstrip__name">ab3 Chip Pattern Â· Light Card Hover</div></div>
  <div class="lstrip__note">B5 maps to the ab3__chip and ab3__corner-mark slots Â· light card hover: corner slides in from top-right</div>
</div>
<div class="ls">
  <div class="ls-c" style="padding:48px;display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;">
    <div>
      <span class="anno" style="display:block;margin-bottom:12px;">B5 Â· Inverted â€” ab3__chip / ab3__corner-mark slot</span>
      <div style="background:var(--charcoal-deep);padding:28px 24px 28px 28px;position:relative;overflow:hidden;border-left:3px solid var(--yellow-core);">
        <svg style="position:absolute;top:0;left:0;width:80px;height:80px;opacity:0.10;pointer-events:none;" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,0 120,0 0,120" fill="#F7C520"/>
        </svg>
        <div style="position:relative;z-index:1;">
          <div style="font-family:var(--font-mono);font-size:8px;font-weight:500;letter-spacing:0.20em;text-transform:uppercase;color:rgba(255,255,255,0.30);margin-bottom:6px;">Established</div>
          <div style="font-family:var(--font-display);font-size:28px;font-weight:700;color:var(--white);line-height:1;letter-spacing:-0.02em;">2009</div>
          <div style="font-family:var(--font-mono);font-size:8px;color:var(--yellow-core);letter-spacing:0.16em;text-transform:uppercase;margin-top:6px;">Barrie, Ontario</div>
        </div>
      </div>
    </div>
    <div>
      <span class="anno" style="display:block;margin-bottom:12px;">B1 Â· 45Â° on light card â€” hover to trigger corner</span>
      <div class="hcard">
        <div style="font-family:var(--font-mono);font-size:8px;font-weight:500;letter-spacing:0.20em;text-transform:uppercase;color:var(--text-400);margin-bottom:6px;">Licensed &amp; Insured</div>
        <div style="font-family:var(--font-display);font-size:18px;font-weight:700;text-transform:uppercase;letter-spacing:0.02em;color:var(--charcoal-deep);margin-bottom:8px;">WSIB Certified Operator</div>
        <div style="font-family:var(--font-body);font-size:13px;color:var(--text-400);line-height:1.7;">Full WSIB coverage, $5M liability insurance. All operators certified to provincial standards.</div>
      </div>
    </div>
  </div>
</div>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  GROUP C â€” WATERMARKS
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<div class="lstrip">
  <div><div class="lstrip__id">Group C Â· Watermarks</div><div class="lstrip__name">C1 Light Â· C2 Layered Depth Â· C3 Parallax Animated</div></div>
  <div class="lstrip__note">Max opacity 0.08 Â· content must always read clearly above Â· C3 hero only Â· one per page</div>
</div>
<div class="g3">
  <div class="ls" style="min-height:220px;padding:40px 36px;display:flex;flex-direction:column;justify-content:center;">
    <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;" viewBox="0 0 500 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,220 0,80 420,0 500,24 500,220" fill="#1E1C1A" opacity="0.025"/>
    </svg>
    <div class="ls-c">
      <div class="eyebrow">About GLC</div>
      <div style="font-family:var(--font-display);font-size:22px;font-weight:700;text-transform:uppercase;letter-spacing:-0.01em;color:var(--charcoal-deep);margin-bottom:8px;">C1 Â· Light Section</div>
      <div style="font-family:var(--font-industrial);font-size:12px;font-weight:300;color:var(--text-400);line-height:1.8;">Angular shape at 2.5% opacity on white. Brand presence without noise. Barely perceptible.</div>
    </div>
    <div style="position:absolute;bottom:12px;right:14px;" class="anno">opacity: 0.025</div>
  </div>
  <div class="dse" style="min-height:220px;padding:40px 36px;display:flex;flex-direction:column;justify-content:center;">
    <div class="dse-grain"></div>
    <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1;" viewBox="0 0 500 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,220 0,100 500,30 500,220" fill="#F7C520" opacity="0.04"/>
      <polygon points="0,220 0,140 260,80 500,110 500,220" fill="#F7C520" opacity="0.03"/>
      <polygon points="360,220 160,120 500,60 500,220" fill="#F7C520" opacity="0.025"/>
    </svg>
    <div class="dse-c">
      <div class="eyebrow eyebrow-d"><span>Process</span></div>
      <div style="font-family:var(--font-display);font-size:22px;font-weight:700;text-transform:uppercase;letter-spacing:-0.01em;color:var(--white);margin-bottom:8px;">C2 Â· Three-Plane Depth</div>
      <div style="font-family:var(--font-industrial);font-size:12px;font-weight:300;color:rgba(255,255,255,0.50);line-height:1.8;">Three angular layers at 4 / 3 / 2.5% opacity. Creates atmosphere. Combined max ~10%.</div>
    </div>
    <div style="position:absolute;bottom:12px;right:14px;" class="anno anno-w">3 layers combined</div>
  </div>
  <div class="dse" style="min-height:220px;padding:40px 36px;display:flex;flex-direction:column;justify-content:center;">
    <div class="dse-grain"></div>
    <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1;" viewBox="0 0 500 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <polygon class="a1" points="0,220 0,90 500,20 500,220" fill="#F7C520" opacity="0.06"/>
      <polygon class="a2" points="0,220 130,120 500,50 500,220" fill="#2E2B28" opacity="0.09"/>
    </svg>
    <div class="dse-c">
      <div class="eyebrow eyebrow-d"><span>Hero Only Â· One Per Page</span></div>
      <div style="font-family:var(--font-display);font-size:22px;font-weight:700;text-transform:uppercase;letter-spacing:-0.01em;color:var(--white);margin-bottom:8px;">C3 Â· Parallax Â· Live</div>
      <div style="font-family:var(--font-industrial);font-size:12px;font-weight:300;color:rgba(255,255,255,0.50);line-height:1.8;">Two layers on 10s and 14s translateX cycles. Watch the sweep drift now.</div>
    </div>
    <div style="position:absolute;bottom:12px;right:14px;" class="anno anno-w">â† watch layers drift â†’</div>
  </div>
</div>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  GROUP D â€” MICRO UI
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<div class="lstrip">
  <div><div class="lstrip__id">Group D Â· Micro UI</div><div class="lstrip__name">D1 Clip Â· D2 Button Â· D3 Slice Â· D4 Slash Â· D5 Rule Â· D6 Split Â· D7 Animated</div></div>
  <div class="lstrip__note">Component-level motifs â€” all shown in actual unified-v2 component contexts</div>
</div>

<!-- D1 + D2 -->
<div class="ls">
  <div class="ls-c" style="padding:48px;display:grid;grid-template-columns:1fr 1fr;gap:48px;">
    <div>
      <span class="anno" style="display:block;margin-bottom:14px;">D1 Â· CSS clip-path on project photos</span>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        <div>
          <div style="height:150px;background:linear-gradient(140deg,#3D3935,#585653);clip-path:polygon(0 0,100% 0,100% 82%,90% 100%,0 100%);display:flex;align-items:center;justify-content:center;">
            <span style="font-family:var(--font-mono);font-size:8px;color:rgba(255,255,255,0.35);letter-spacing:0.16em;text-transform:uppercase;">Photo</span>
          </div>
          <div style="margin-top:6px;" class="anno">corner cut</div>
        </div>
        <div>
          <div style="height:150px;background:linear-gradient(140deg,#2E2B28,#3D3935);clip-path:polygon(0 0,100% 0,93% 100%,0 93%);display:flex;align-items:center;justify-content:center;">
            <span style="font-family:var(--font-mono);font-size:8px;color:rgba(255,255,255,0.35);letter-spacing:0.16em;text-transform:uppercase;">Photo</span>
          </div>
          <div style="margin-top:6px;" class="anno">diagonal shard</div>
        </div>
      </div>
    </div>
    <div>
      <span class="anno" style="display:block;margin-bottom:14px;">D2 Â· btn-primary edge accent Â· hover for sheen + lift + yellow shadow</span>
      <div style="background:var(--gray-100);padding:32px;display:flex;gap:14px;align-items:center;flex-wrap:wrap;">
        <button class="btn-p">Request a Quote <svg style="width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2;" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
        <button class="btn-g">View Services <svg style="width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2;" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
      </div>
    </div>
  </div>
</div>

<!-- D3 + D4 -->
<div class="g2">
  <div class="dse" style="min-height:130px;position:relative;overflow:hidden;">
    <div class="dse-grain"></div>
    <svg style="position:absolute;inset:0;width:100%;height:100%;z-index:1;pointer-events:none;" viewBox="0 0 700 130" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="700" height="130" fill="#1E1C1A"/>
      <polygon points="0,130 0,98 700,65 700,130" fill="#2E2B28"/>
      <polygon points="0,100 700,67 700,72 0,106" fill="#F7C520" opacity="0.55"/>
    </svg>
    <div class="dse-c" style="position:relative;z-index:3;padding:24px 32px;"><span class="anno anno-w">D3 Â· Sharp Slice Â· thin aggressive accent Â· max 1 per page Â· above CTA or hero only</span></div>
  </div>
  <div class="ls" style="padding:32px 36px;display:flex;gap:0;align-items:stretch;min-height:130px;">
    <div style="width:14px;flex-shrink:0;background:var(--gray-100);position:relative;margin-right:22px;">
      <div style="position:absolute;inset:0;background:var(--yellow-core);clip-path:polygon(0 0,14px 7px,14px 100%,0 100%);"></div>
    </div>
    <div class="ls-c" style="display:flex;flex-direction:column;justify-content:center;">
      <div style="font-family:var(--font-display);font-size:34px;font-weight:700;color:var(--charcoal-deep);letter-spacing:-0.04em;line-height:1;">15<span style="color:var(--yellow-core);">+</span></div>
      <div style="font-family:var(--font-industrial);font-size:10px;font-weight:400;letter-spacing:0.18em;text-transform:uppercase;color:var(--text-400);margin-top:4px;">Years Commercial</div>
      <div style="margin-top:10px;" class="anno">D4 Â· Block + Slash Â· stat panels Â· proc3 step numbers</div>
    </div>
  </div>
</div>

<!-- D5 + D6 -->
<div class="g2">
  <div class="ls" style="padding:36px 44px;min-height:140px;display:flex;flex-direction:column;justify-content:center;">
    <div class="ls-c">
      <span class="anno" style="display:block;margin-bottom:14px;">D5 Â· Minimal line angle â€” section heading underline</span>
      <div style="font-family:var(--font-display);font-size:30px;font-weight:700;text-transform:uppercase;letter-spacing:-0.02em;line-height:1;color:var(--charcoal-deep);margin-bottom:6px;">Why GLC</div>
      <svg viewBox="0 0 280 3" preserveAspectRatio="none" style="width:180px;height:3px;display:block;margin-bottom:12px;">
        <polygon points="0,3 0,1.5 280,0 280,3" fill="#F7C520"/>
      </svg>
      <div style="font-family:var(--font-body);font-size:13px;color:var(--text-400);line-height:1.7;">Angled rule replaces a flat border â€” directional energy without a graphic element.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 14px 1fr;min-height:140px;overflow:hidden;">
    <div style="background:var(--charcoal-deep);padding:28px 24px;display:flex;align-items:center;">
      <div style="font-family:var(--font-mono);font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.30);">Left â€” DSE<br>proc3 / layout seam</div>
    </div>
    <div style="background:var(--charcoal-mid);position:relative;overflow:hidden;">
      <div style="position:absolute;inset:0;background:var(--yellow-core);clip-path:polygon(0 0,14px 10px,14px 100%,0 100%);"></div>
    </div>
    <div class="ls" style="padding:28px 24px;display:flex;align-items:center;">
      <div class="ls-c">
        <div style="font-family:var(--font-mono);font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:var(--text-400);">Right â€” white<br>D6 Â· Split seam divider</div>
      </div>
    </div>
  </div>
</div>

<!-- D7: Animated sweep -->
<div class="dse" style="min-height:140px;position:relative;overflow:hidden;display:flex;align-items:center;padding:36px 60px;">
  <div class="dse-rail"></div>
  <div class="dse-grain"></div>
  <svg style="position:absolute;inset:0;width:100%;height:100%;z-index:1;pointer-events:none;" viewBox="0 0 1400 140" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <polygon class="a1" points="0,140 0,60 1400,8 1400,140" fill="#F7C520" opacity="0.06"/>
    <polygon class="a2" points="0,140 190,90 1400,28 1400,140" fill="#2E2B28" opacity="0.09"/>
  </svg>
  <div class="dse-c">
    <div style="font-family:var(--font-display);font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:0.04em;color:var(--white);margin-bottom:5px;">D7 Â· Animated SVG Layer â€” hero sections only Â· one instance per page</div>
    <div style="font-family:var(--font-industrial);font-size:13px;font-weight:300;color:rgba(255,255,255,0.50);">Two polygons on translateX keyframes Â· 10s and 14s cycles Â· watch the sweep drift now</div>
  </div>
  <div style="position:absolute;bottom:12px;right:48px;" class="anno anno-w">â† layers drifting in opposite directions â†’</div>
</div>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  FULL PAGE FLOW â€” compressed integration check
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<div class="lstrip">
  <div><div class="lstrip__id">Integration Preview</div><div class="lstrip__name">Hero â†’ A3 Divider â†’ Light Section â†’ A3 â†’ DSE Stats</div></div>
  <div class="lstrip__note">Compressed page flow â€” confirm section transitions and motif sequencing feel correct</div>
</div>

<div class="dse" style="min-height:200px;display:flex;align-items:flex-end;padding:36px 64px 32px;">
  <div class="dse-rail"></div>
  <div class="dse-grain"></div>
  <svg style="position:absolute;inset:0;width:100%;height:100%;z-index:1;" viewBox="0 0 1400 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <polygon class="a1" points="0,200 0,100 800,28 1400,60 1400,200" fill="#2E2B28" opacity="0.7"/>
    <polygon class="a1" points="0,103 0,128 900,48 1400,65 1400,60 800,28" fill="#F7C520" opacity="0.80"/>
    <polygon class="a2" points="0,200 0,145 500,110 1100,135 1400,105 1400,200" fill="#1E1C1A" opacity="0.6"/>
    <polygon points="1400,0 1160,200 1400,200" fill="#F7C520" opacity="0.10"/>
  </svg>
  <div class="dse-c">
    <div style="font-family:var(--font-display);font-size:clamp(28px,4vw,52px);font-weight:700;text-transform:uppercase;letter-spacing:-0.02em;line-height:1;color:var(--white);">
      Ground Level <em style="font-style:normal;color:var(--yellow-core);">Contracting</em>
    </div>
  </div>
</div>
<div style="line-height:0;margin-bottom:-1px;">
  <svg viewBox="0 0 1400 55" preserveAspectRatio="none" style="width:100%;height:55px;display:block;" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,55 0,25 1400,0 1400,55" fill="#FFFFFF"/>
    <polygon points="0,27 1400,2 1400,6 0,31" fill="#F7C520" opacity="0.40"/>
  </svg>
</div>
<div class="ls" style="padding:40px 64px;">
  <div class="ls-c" style="display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;">
    <div>
      <div class="eyebrow">About GLC</div>
      <div style="font-family:var(--font-display);font-size:clamp(24px,3vw,40px);font-weight:700;text-transform:uppercase;letter-spacing:-0.02em;line-height:1;color:var(--charcoal-deep);margin-bottom:8px;">Commercial-Only. <em style="font-style:normal;color:var(--yellow-core);">Always.</em></div>
      <div class="yrule"></div>
      <div style="font-family:var(--font-industrial);font-size:14px;font-weight:300;line-height:1.82;color:var(--text-400);">Ground Level Contracting serves project managers and site supervisors across Simcoe County.</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;">
      <div class="hcard" style="padding:20px;">
        <div style="font-family:var(--font-mono);font-size:8px;letter-spacing:0.18em;text-transform:uppercase;color:var(--text-400);margin-bottom:4px;">Projects</div>
        <div style="font-family:var(--font-display);font-size:28px;font-weight:700;color:var(--charcoal-deep);line-height:1;">500<span style="color:var(--yellow-core);">+</span></div>
      </div>
      <div class="hcard" style="padding:20px;">
        <div style="font-family:var(--font-mono);font-size:8px;letter-spacing:0.18em;text-transform:uppercase;color:var(--text-400);margin-bottom:4px;">Years</div>
        <div style="font-family:var(--font-display);font-size:28px;font-weight:700;color:var(--charcoal-deep);line-height:1;">15<span style="color:var(--yellow-core);">+</span></div>
      </div>
    </div>
  </div>
</div>
<div style="line-height:0;margin-bottom:-1px;">
  <svg viewBox="0 0 1400 50" preserveAspectRatio="none" style="width:100%;height:50px;display:block;" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,50 0,22 1400,0 1400,50" fill="#1E1C1A"/>
    <polygon points="0,24 1400,2 1400,6 0,28" fill="#F7C520" opacity="0.40"/>
  </svg>
</div>
<div class="dse" style="padding:0;overflow:hidden;">
  <div class="dse-grain"></div>
  <div style="height:3px;background:linear-gradient(90deg,var(--yellow-core) 0%,rgba(247,197,32,0.12) 45%,transparent 100%);position:relative;z-index:1;"></div>
  <div style="display:flex;align-items:stretch;position:relative;z-index:1;">
    <div style="width:48px;flex-shrink:0;display:flex;align-items:center;justify-content:center;border-right:1px solid rgba(255,255,255,0.06);">
      <span style="font-family:var(--font-body);font-size:9px;font-weight:800;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.20);writing-mode:vertical-rl;transform:rotate(180deg);">Performance</span>
    </div>
    <div style="display:flex;flex:1;">
      <div style="flex:1;padding:44px 0;border-right:1px solid rgba(255,255,255,0.06);text-align:center;">
        <div style="font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:700;line-height:1;letter-spacing:-0.04em;color:var(--white);">500<span style="color:var(--yellow-core);">+</span></div>
        <div style="font-family:var(--font-industrial);font-size:10px;font-weight:400;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.35);margin-top:8px;">Projects Completed</div>
      </div>
      <div style="flex:1;padding:44px 0;border-right:1px solid rgba(255,255,255,0.06);text-align:center;">
        <div style="font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:700;line-height:1;letter-spacing:-0.04em;color:var(--white);">15<span style="color:var(--yellow-core);">+</span></div>
        <div style="font-family:var(--font-industrial);font-size:10px;font-weight:400;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.35);margin-top:8px;">Years in Operation</div>
      </div>
      <div style="flex:1;padding:44px 0;text-align:center;">
        <div style="font-family:var(--font-display);font-size:clamp(32px,4vw,52px);font-weight:700;line-height:1;letter-spacing:-0.04em;color:var(--white);">6<span style="color:var(--yellow-core);">+</span></div>
        <div style="font-family:var(--font-industrial);font-size:10px;font-weight:400;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.35);margin-top:8px;">Service Areas</div>
      </div>
    </div>
  </div>
</div>


<!-- APPROVAL FOOTER -->
<div style="background:var(--charcoal-deep);border-top:3px solid var(--yellow-core);padding:32px 48px;display:flex;align-items:flex-start;justify-content:space-between;gap:40px;">
  <div style="max-width:720px;">
    <div style="font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--white);margin-bottom:10px;">For Approval</div>
    <div style="font-family:var(--font-industrial);font-size:13px;font-weight:300;color:rgba(255,255,255,0.55);line-height:1.80;">
      All 21 motifs rendered against actual <strong style="color:rgba(255,255,255,0.80);font-weight:500;">glc-unified-v2</strong> tokens, fonts, grids, and section patterns.
      Corner slots B1â€“B4 map to existing <code style="font-family:var(--font-mono);font-size:11px;color:var(--yellow-core);">.motif-corner / .motif-slash / .motif-cross / .motif-triangle</code> classes already in <code style="font-family:var(--font-mono);font-size:11px;color:var(--yellow-core);">stc1__panel</code>.
      Once approved: SVG files go to <code style="font-family:var(--font-mono);font-size:11px;color:var(--yellow-core);">/public/svg/</code>, CSS patterns slot into existing stylesheet.
    </div>
  </div>
  <div style="text-align:right;flex-shrink:0;padding-top:2px;">
    <div style="font-family:var(--font-mono);font-size:8px;font-weight:500;letter-spacing:0.22em;text-transform:uppercase;color:var(--yellow-core);margin-bottom:4px;">GLC Motif System</div>
    <div style="font-family:var(--font-mono);font-size:8px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.25);">v1.0 Â· Built on unified-v2</div>
  </div>
</div>

</body>
</html>

`

## Verbatim Appendix - Doc 4
`html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ground Level Contracting â€” Unified Design System v2.0</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;700;800&family=Barlow:wght@300;400;500&family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet">

<style>
/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   GLC UNIFIED DESIGN SYSTEM v2.0
   Light-primary. DSE for contrast. White not off-white.
   Oswald display Â· Plus Jakarta Sans body Â· Barlow industrial (DSE)
   Source Code Pro mono Â· Single accent: #F7C520
   Zero border-radius on internals Â· Charcoal tints only
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
:root {
  /* Surfaces â€” WHITE is primary, never off-white on page backgrounds */
  --white:           #FFFFFF;
  --gray-100:        rgba(30,28,26,0.06);
  --gray-200:        rgba(30,28,26,0.12);

  /* Charcoal family â€” warm-biased */
  --charcoal-deep:   #1E1C1A;
  --charcoal-mid:    #2E2B28;
  --charcoal-light:  #585653;

  /* Single accent */
  --yellow-core:     #F7C520;
  --gold:            #D4A017;

  /* Tints â€” charcoal ONLY, never yellow tints */
  --charcoal-tint:   rgba(46,43,40,0.06);
  --charcoal-tint-md:rgba(46,43,40,0.12);

  /* Text */
  --text-600:        rgba(30,28,26,0.90);
  --text-500:        rgba(30,28,26,0.80);
  --text-400:        rgba(30,28,26,0.55);

  /* Typography */
  --font-display:    'Oswald', sans-serif;
  --font-body:       'Plus Jakarta Sans', sans-serif;
  --font-industrial: 'Barlow', sans-serif;   /* DSE sections only */
  --font-mono:       'Source Code Pro', monospace;

  /* Motion */
  --ease-expo:       cubic-bezier(0.22, 1, 0.36, 1);

  /* Layout */
  --section-v:       clamp(80px, 9vw, 120px);
  --container-max:   1320px;
  --header-h:        80px;
}

/* â”€â”€ Reset â”€â”€ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
body {
  font-family: var(--font-body);
  background: var(--white);
  color: var(--text-500);
  line-height: 1.8;
  overflow-x: hidden;
  cursor: none;
}
img { display: block; max-width: 100%; }
a   { color: inherit; text-decoration: none; }

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   CUSTOM CURSOR â€” yellow dot + lagging ring
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.c-dot {
  position: fixed; width: 7px; height: 7px;
  background: var(--yellow-core); border-radius: 50%;
  pointer-events: none; z-index: 9999;
  transform: translate(-50%,-50%);
  transition: transform 0.15s var(--ease-expo), background 0.2s;
}
.c-ring {
  position: fixed; width: 36px; height: 36px;
  border: 1px solid rgba(247,197,32,0.28); border-radius: 50%;
  pointer-events: none; z-index: 9998;
  transform: translate(-50%,-50%);
  transition: width 0.35s var(--ease-expo), height 0.35s var(--ease-expo), border-color 0.25s;
}
.c-ring.on { width: 60px; height: 60px; border-color: var(--yellow-core); }
.c-dot.on   { transform: translate(-50%,-50%) scale(1.8); background: var(--white); }
.c-dot.bar  { transform: translate(-50%,-50%) scale(3); background: var(--charcoal-deep); }

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   SCROLL REVEAL
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.reveal {
  opacity: 0; transform: translateY(28px);
  transition: opacity 0.65s var(--ease-expo), transform 0.65s var(--ease-expo);
}
.reveal.visible { opacity: 1; transform: none; }
.reveal--d1 { transition-delay: 0.08s; }
.reveal--d2 { transition-delay: 0.16s; }
.reveal--d3 { transition-delay: 0.24s; }
.reveal--d4 { transition-delay: 0.32s; }
@media (prefers-reduced-motion: reduce) { .reveal { opacity: 1; transform: none; transition: none; } }

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   SHARED PRIMITIVES
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

/* Eyebrow */
.eyebrow {
  font-family: var(--font-body);
  font-size: 9px; font-weight: 800;
  letter-spacing: 0.24em; text-transform: uppercase;
  color: var(--yellow-core);
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 20px;
}
.eyebrow::before {
  content: ''; display: inline-block;
  width: 20px; height: 2px;
  background: var(--yellow-core); flex-shrink: 0;
}
.eyebrow--on-dark { color: rgba(255,255,255,0.38); }
.eyebrow--on-dark span { color: var(--yellow-core); }

/* Button primary */
.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-body);
  font-size: 11px; font-weight: 800;
  letter-spacing: 0.14em; text-transform: uppercase;
  background: var(--yellow-core); color: var(--charcoal-deep);
  border: none; padding: 14px 28px;
  cursor: none; position: relative; overflow: hidden;
  transition: transform 0.22s var(--ease-expo), box-shadow 0.22s var(--ease-expo);
}
.btn-primary::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
  transform: translateX(-100%);
  transition: transform 0.7s var(--ease-expo);
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(247,197,32,0.30); }
.btn-primary:hover::before { transform: translateX(100%); }

/* Button ghost */
.btn-ghost {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-body);
  font-size: 11px; font-weight: 800;
  letter-spacing: 0.14em; text-transform: uppercase;
  background: transparent; color: var(--white);
  border: 1px solid rgba(255,255,255,0.32);
  padding: 13px 28px; cursor: none;
  transition: background 0.22s var(--ease-expo), border-color 0.22s;
}
.btn-ghost:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.60); }

/* Arrow icon */
.icon-arr {
  width: 14px; height: 14px; fill: none;
  stroke: currentColor; stroke-width: 2;
  stroke-linecap: round; stroke-linejoin: round;
  transition: transform 0.22s var(--ease-expo); flex-shrink: 0;
}
.btn-primary:hover .icon-arr,
.btn-ghost:hover .icon-arr { transform: translateX(4px); }

/* Blueprint grid â€” DSE section texture */
.bp-grid::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image:
    repeating-linear-gradient(0deg,   rgba(255,255,255,0.012) 0, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 80px),
    repeating-linear-gradient(90deg,  rgba(255,255,255,0.012) 0, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 80px);
}

/* Light hairline grid â€” light sections */
.line-grid::before {
  content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image: repeating-linear-gradient(0deg,
    rgba(0,0,0,0.022) 0px, rgba(0,0,0,0.022) 1px, transparent 1px, transparent 64px);
}

/* Yellow top rail */
.yellow-rail {
  position: absolute; top: 0; left: 0; right: 0;
  height: 3px; z-index: 3;
  background: linear-gradient(90deg, var(--yellow-core) 0%, rgba(247,197,32,0.14) 60%, transparent 100%);
}

/* Grain overlay */
.grain {
  position: absolute; inset: 0; z-index: 2; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E");
  background-size: 200px; opacity: 0.028; mix-blend-mode: overlay;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   HEADER
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.gl-header {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 100; height: var(--header-h);
  background: rgba(255,255,255,0.97);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--gray-200);
  transition: box-shadow 0.3s;
}
.gl-header.scrolled { box-shadow: 0 4px 32px rgba(30,28,26,0.10); }
.gl-header__inner {
  display: flex; align-items: center; justify-content: space-between;
  height: var(--header-h);
  max-width: var(--container-max); margin: 0 auto; padding: 0 40px;
}
.gl-header__logo { display: flex; align-items: center; gap: 12px; }
.gl-header__mark {
  width: 32px; height: 32px;
  background: var(--charcoal-deep);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 11px; font-weight: 700;
  color: var(--yellow-core); position: relative; flex-shrink: 0;
}
.gl-header__mark::after {
  content: ''; position: absolute; bottom: -2px; right: -2px;
  width: 6px; height: 6px; background: var(--yellow-core);
}
.gl-header__name {
  font-family: var(--font-display); font-size: 13px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.06em; color: var(--charcoal-deep); line-height: 1;
}
.gl-header__sub {
  font-family: var(--font-mono); font-size: 8px;
  letter-spacing: 0.20em; text-transform: uppercase; color: var(--text-400);
  margin-top: 3px;
}
.gl-header__nav { display: flex; align-items: center; }
.gl-header__nav a {
  font-family: var(--font-body); font-size: 10px; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-400);
  padding: 0 16px; height: var(--header-h); display: flex; align-items: center;
  border-right: 1px solid var(--gray-100);
  transition: color 0.18s, background 0.18s; position: relative; cursor: none;
}
.gl-header__nav a::after {
  content: ''; position: absolute; bottom: 0; left: 16px; right: 16px;
  height: 2px; background: var(--yellow-core);
  transform: scaleX(0); transform-origin: left; transition: transform 0.3s var(--ease-expo);
}
.gl-header__nav a:hover { color: var(--charcoal-deep); background: var(--charcoal-tint); }
.gl-header__nav a:hover::after { transform: scaleX(1); }
.gl-header__cta { display: flex; align-items: center; gap: 16px; }
.gl-header__phone {
  font-family: var(--font-display); font-size: 15px; font-weight: 700;
  color: var(--charcoal-deep); letter-spacing: 0.01em;
  padding-right: 20px; border-right: 1px solid var(--gray-200);
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   HERO â€” DSE SPLIT (46/54) with seam + parallax
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.hero {
  display: grid;
  grid-template-columns: 46fr 54fr;
  grid-template-rows: 1fr auto;
  grid-template-areas: "left right" "bar bar";
  min-height: 100vh; overflow: hidden; position: relative;
}

/* LEFT PANEL */
.hero__left {
  grid-area: left; background: var(--charcoal-deep);
  position: relative; display: flex; flex-direction: column;
  padding: 0 72px 64px 80px;
  padding-top: calc(var(--header-h) + 80px);
  overflow: hidden; z-index: 2;
}
/* Blueprint grid */
.hero__left::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image:
    repeating-linear-gradient(0deg,   rgba(255,255,255,0.010) 0, rgba(255,255,255,0.010) 1px, transparent 1px, transparent 80px),
    repeating-linear-gradient(90deg,  rgba(255,255,255,0.010) 0, rgba(255,255,255,0.010) 1px, transparent 1px, transparent 80px);
}
/* Ghost watermark */
.hero__ghost {
  position: absolute; bottom: 80px; right: -10px;
  font-family: var(--font-display); font-size: clamp(88px, 11vw, 148px);
  font-weight: 700; letter-spacing: -0.04em; line-height: 1;
  color: rgba(255,255,255,0.025); pointer-events: none; user-select: none; z-index: 0;
}
/* Yellow top rail */
.hero__rail {
  position: absolute; top: 0; left: 0; right: 0; height: 3px; z-index: 4;
  background: linear-gradient(90deg, var(--yellow-core) 0%, rgba(247,197,32,0.12) 65%, transparent 100%);
}
/* Eyebrow */
.hero__eyebrow {
  display: flex; align-items: center; gap: 14px; margin-bottom: 52px;
  position: relative; z-index: 1;
  opacity: 0; animation: aFade 0.7s var(--ease-expo) 0.3s forwards;
}
.hero__eyebrow-dash { width: 24px; height: 1px; background: var(--yellow-core); flex-shrink: 0; }
.hero__eyebrow-txt {
  font-family: var(--font-body); font-size: 9px; font-weight: 700;
  letter-spacing: 0.28em; text-transform: uppercase; color: rgba(255,255,255,0.32);
}
/* Three-act headline */
.hero__hl-wrap { position: relative; z-index: 1; margin-bottom: 48px; }
.hero__hl {
  display: block; overflow: hidden;
  font-family: var(--font-display);
  font-size: clamp(56px, 6.8vw, 110px);
  line-height: 0.88; text-transform: uppercase; letter-spacing: -0.025em;
}
.hero__hl span { display: block; animation: aLineUp 1s var(--ease-expo) both; }
.hero__hl--1 span { font-weight: 200; color: rgba(255,255,255,0.18); animation-delay: 0.45s; }
.hero__hl--2 span { font-weight: 600; color: rgba(255,255,255,0.88); animation-delay: 0.62s; }
.hero__hl--3 span { font-weight: 700; color: var(--yellow-core);      animation-delay: 0.78s; }
/* Growing yellow rule */
.hero__rule {
  width: 0; height: 1px; background: rgba(247,197,32,0.30);
  margin-bottom: 44px; position: relative; z-index: 1;
  animation: aGrow 0.9s var(--ease-expo) 1.0s forwards;
}
/* Caption â€” Barlow 300 */
.hero__caption-wrap {
  position: relative; z-index: 1; margin-bottom: auto;
  opacity: 0; animation: aFade 0.8s var(--ease-expo) 1.1s forwards;
}
.hero__caption {
  font-family: var(--font-industrial); font-weight: 300;
  font-size: 15px; line-height: 1.82;
  color: rgba(255,255,255,0.62); max-width: 38ch;
}
.hero__caption strong { font-weight: 500; color: rgba(255,255,255,0.86); }
/* Phone zone */
.hero__phone-zone {
  position: relative; z-index: 1;
  padding-top: 44px; border-top: 1px solid rgba(255,255,255,0.07);
  display: flex; align-items: flex-end; justify-content: space-between; gap: 24px;
  opacity: 0; animation: aSlide 0.8s var(--ease-expo) 1.35s forwards;
}
.hero__phone-block { display: flex; flex-direction: column; gap: 10px; }
.hero__phone-lbl {
  font-size: 8px; font-weight: 700; letter-spacing: 0.32em; text-transform: uppercase;
  color: rgba(255,255,255,0.22);
}
.hero__phone {
  font-family: var(--font-display); font-size: clamp(26px, 3.2vw, 46px);
  font-weight: 700; letter-spacing: -0.01em; line-height: 1;
  color: var(--white); position: relative; width: fit-content; padding-bottom: 5px; cursor: none;
}
.hero__phone::after {
  content: ''; position: absolute; bottom: 0; left: 0;
  width: 0; height: 2px; background: var(--yellow-core);
  transition: width 0.55s var(--ease-expo);
}
.hero__phone:hover::after { width: 100%; }
.hero__trust { display: flex; flex-direction: column; gap: 7px; align-items: flex-end; flex-shrink: 0; }
.hero__trust-item {
  display: flex; align-items: center; gap: 8px;
  font-family: var(--font-industrial); font-size: 10px; font-weight: 400;
  letter-spacing: 0.10em; text-transform: uppercase; color: rgba(255,255,255,0.28);
}
.hero__trust-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--yellow-core); flex-shrink: 0; }

/* YELLOW SEAM â€” structural weld */
.hero__seam {
  position: absolute; top: 0; bottom: 76px; left: calc(46% - 1.5px);
  width: 3px; z-index: 20; pointer-events: none;
  background: linear-gradient(180deg, transparent 0%, var(--yellow-core) 8%, var(--yellow-core) 92%, transparent 100%);
  opacity: 0; animation: aFade 0.6s var(--ease-expo) 1.5s forwards;
}
.hero__seam::before {
  content: ''; position: absolute; top: 0; left: -4px; right: -4px; bottom: 0;
  background: repeating-linear-gradient(180deg,
    transparent 0, transparent 24px, rgba(247,197,32,0.20) 24px, rgba(247,197,32,0.20) 25px);
}

/* RIGHT PANEL â€” image */
.hero__right {
  grid-area: right; position: relative; overflow: hidden; background: #0a0908;
  opacity: 0; animation: rightEnter 1.1s var(--ease-expo) 0.15s forwards;
}
@keyframes rightEnter { from { opacity:0; transform: translateX(24px); } to { opacity:1; transform: translateX(0); } }
.hero__img-wrap {
  position: absolute; inset: -6%; will-change: transform;
}
.hero__img {
  width: 100%; height: 100%; object-fit: cover; object-position: center 40%;
  filter: contrast(1.12) brightness(0.80) saturate(0.65);
  transform: scale(1.06); animation: imgBreath 3s var(--ease-expo) forwards;
}
.hero__img-edge {
  position: absolute; top: 0; left: 0; bottom: 0; width: 70px; z-index: 1;
  background: linear-gradient(90deg, var(--charcoal-deep) 0%, transparent 100%);
}
.hero__img-floor {
  position: absolute; bottom: 0; left: 0; right: 0; height: 35%; z-index: 1;
  background: linear-gradient(to top, rgba(5,4,3,0.92) 0%, rgba(5,4,3,0.45) 55%, transparent 100%);
}
.hero__img-sky {
  position: absolute; top: 0; left: 0; right: 0; height: 40%; z-index: 1;
  background: linear-gradient(to bottom, rgba(10,8,6,0.45) 0%, rgba(10,8,6,0.12) 55%, transparent 100%);
}
/* Service chip badge on image */
.hero__badge {
  position: absolute; bottom: 52px; right: 48px; z-index: 5;
  background: rgba(30,28,26,0.90); border: 1px solid rgba(247,197,32,0.20);
  border-top: 3px solid var(--yellow-core); padding: 18px 22px;
  opacity: 0; animation: aFade 0.8s var(--ease-expo) 1.8s forwards;
}
.hero__badge-lbl {
  font-family: var(--font-mono); font-size: 8px; font-weight: 500;
  letter-spacing: 0.22em; text-transform: uppercase; color: rgba(255,255,255,0.30); margin-bottom: 5px;
}
.hero__badge-val {
  font-family: var(--font-display); font-size: 26px; font-weight: 700;
  color: var(--white); line-height: 1; letter-spacing: -0.02em;
}
.hero__badge-sub {
  font-family: var(--font-mono); font-size: 8px; color: var(--yellow-core);
  letter-spacing: 0.16em; text-transform: uppercase; margin-top: 4px;
}

/* CTA BAR â€” full width, yellow + dark */
.hero__bar {
  grid-area: bar; display: grid; grid-template-columns: 1fr auto; height: 76px;
  position: relative; z-index: 20;
  opacity: 0; animation: aSlide 0.7s var(--ease-expo) 1.8s forwards;
}
.hero__bar-main {
  background: var(--yellow-core); display: flex; align-items: center;
  justify-content: space-between; padding: 0 52px 0 80px; gap: 32px;
  text-decoration: none; cursor: none; position: relative; overflow: hidden;
}
/* White wipe on hover */
.hero__bar-main::before {
  content: ''; position: absolute; inset: 0; background: var(--white);
  transform: scaleX(0); transform-origin: left; transition: transform 0.58s var(--ease-expo);
}
.hero__bar-main:hover::before { transform: scaleX(1); }
.hero__bar-lbl {
  font-family: var(--font-display); font-size: clamp(12px, 1.1vw, 15px);
  font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--charcoal-deep); position: relative; z-index: 1;
  transition: letter-spacing 0.35s var(--ease-expo);
}
.hero__bar-main:hover .hero__bar-lbl { letter-spacing: 0.28em; }
.hero__bar-right {
  display: flex; align-items: center; gap: 16px; position: relative; z-index: 1; flex-shrink: 0;
}
.hero__bar-line {
  width: 0; height: 1px; background: rgba(30,28,26,0.28);
  transition: width 0.40s var(--ease-expo);
}
.hero__bar-main:hover .hero__bar-line { width: 40px; }
.hero__bar-icon {
  width: 38px; height: 38px; border: 1.5px solid rgba(30,28,26,0.22);
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.4s var(--ease-expo);
}
.hero__bar-icon svg { width: 15px; height: 15px; transition: transform 0.4s var(--ease-expo); }
.hero__bar-main:hover .hero__bar-icon svg { transform: rotate(-45deg); }
.hero__bar-sec {
  background: var(--charcoal-mid); border-left: 1px solid rgba(247,197,32,0.15);
  padding: 0 40px; display: flex; align-items: center; gap: 10px;
  text-decoration: none; cursor: none; position: relative; overflow: hidden;
  transition: background 0.3s;
}
.hero__bar-sec::before {
  content: ''; position: absolute; inset: 0;
  background: rgba(247,197,32,0.09); transform: scaleX(0); transform-origin: right;
  transition: transform 0.42s var(--ease-expo);
}
.hero__bar-sec:hover { background: #383330; }
.hero__bar-sec:hover::before { transform: scaleX(1); }
.hero__bar-sec svg {
  width: 14px; height: 14px; fill: none; stroke: rgba(247,197,32,0.40);
  stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;
  flex-shrink: 0; position: relative; z-index: 1; transition: stroke 0.25s;
}
.hero__bar-sec:hover svg { stroke: var(--yellow-core); }
.hero__bar-sec-txt {
  font-family: var(--font-body); font-size: 10px; font-weight: 700;
  letter-spacing: 0.20em; text-transform: uppercase;
  color: rgba(255,255,255,0.28); position: relative; z-index: 1;
  transition: color 0.25s; white-space: nowrap;
}
.hero__bar-sec:hover .hero__bar-sec-txt { color: rgba(255,255,255,0.65); }

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   STATS â€” ST3 Dark Editorial (Hero+Stats exception: back-to-back DSE ok)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.st3 {
  background: var(--charcoal-deep); position: relative; overflow: hidden;
}
.st3::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image:
    repeating-linear-gradient(0deg,   rgba(255,255,255,0.012) 0, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 80px),
    repeating-linear-gradient(90deg,  rgba(255,255,255,0.012) 0, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 80px);
}
.st3__top-rail {
  position: relative; z-index: 2; height: 3px; width: 100%;
  background: linear-gradient(90deg, var(--yellow-core) 0%, rgba(247,197,32,0.12) 45%, transparent 100%);
}
.st3__inner {
  position: relative; z-index: 1; display: flex; align-items: stretch;
}
.st3__side-label {
  width: 56px; flex-shrink: 0; display: flex; align-items: center;
  justify-content: center; padding: 0;
  border-right: 1px solid rgba(255,255,255,0.06);
}
.st3__side-label span {
  font-family: var(--font-body); font-size: 9px; font-weight: 800;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: rgba(255,255,255,0.20);
  writing-mode: vertical-rl; transform: rotate(180deg); white-space: nowrap;
}
.st3__grid { display: flex; flex: 1; }
.stat-cell {
  flex: 1; padding: 52px 0; border-right: 1px solid rgba(255,255,255,0.06);
  text-align: center; position: relative; overflow: hidden;
  cursor: none; transition: background 0.3s;
}
.stat-cell:last-child { border-right: none; }
.stat-cell::after {
  content: ''; position: absolute; bottom: 0; left: 0;
  width: 100%; height: 2px; background: var(--yellow-core);
  transform: scaleX(0); transform-origin: left; transition: transform 0.5s var(--ease-expo);
}
.stat-cell:hover { background: rgba(255,255,255,0.025); }
.stat-cell:hover::after { transform: scaleX(1); }
.stat-cell__num {
  font-family: var(--font-display); font-size: clamp(36px, 4.5vw, 56px);
  font-weight: 700; line-height: 1; letter-spacing: -0.04em; color: var(--white);
}
.stat-cell__num span { color: var(--yellow-core); }
.stat-cell__label {
  font-family: var(--font-industrial); font-size: 10px; font-weight: 400;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: rgba(255,255,255,0.35); margin-top: 8px;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   ABOUT â€” AB3 Editorial Split (Light / White)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.ab3 {
  background: var(--white); padding: var(--section-v) 0;
  position: relative; overflow: hidden;
}
/* Light hairline grid */
.ab3::before {
  content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image: repeating-linear-gradient(0deg,
    rgba(0,0,0,0.022) 0px, rgba(0,0,0,0.022) 1px, transparent 1px, transparent 64px);
}
/* Giant GLC watermark */
.ab3__wm {
  position: absolute; right: -0.06em; top: 50%; transform: translateY(-50%);
  font-family: var(--font-display); font-size: clamp(180px, 22vw, 320px);
  font-weight: 700; line-height: 1; color: rgba(30,28,26,0.028);
  pointer-events: none; user-select: none; z-index: 0;
}
.ab3__layout {
  position: relative; z-index: 1;
  display: grid; grid-template-columns: 55fr 45fr;
  max-width: var(--container-max); margin: 0 auto; padding: 0 40px;
  gap: 0; align-items: stretch;
}
/* Copy column */
.ab3__copy {
  padding-right: 72px; padding-top: 8px;
  position: relative;
}
.ab3__copy::before {
  content: ''; position: absolute; left: 0; top: 32px;
  width: 4px; height: 56px; background: var(--yellow-core);
}
.ab3__top-row {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 28px;
}
.ab3__since {
  font-family: var(--font-mono); font-size: 9px; font-weight: 500;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--text-400); padding: 4px 10px;
  border: 1px solid var(--gray-200); background: var(--gray-100);
}
.ab3__heading {
  font-family: var(--font-display); font-size: clamp(36px, 4vw, 58px);
  font-weight: 700; text-transform: uppercase; letter-spacing: -0.02em;
  line-height: 1; color: var(--charcoal-deep); margin-bottom: 6px;
}
.ab3__heading em {
  font-style: normal; color: var(--yellow-core);
}
.ab3__rule { width: 48px; height: 3px; background: var(--yellow-core); margin-bottom: 24px; }
.ab3__body {
  font-family: var(--font-industrial); font-size: 15px; font-weight: 300;
  line-height: 1.82; color: var(--text-500); max-width: 44ch; margin-bottom: 32px;
}
.ab3__creds {
  display: grid; grid-template-columns: 1fr 1fr; gap: 2px; margin-bottom: 36px;
}
.ab3__cred {
  padding: 16px 20px; background: var(--white);
  border: 1px solid var(--gray-200); cursor: none;
  transition: background 0.22s var(--ease-expo), border-color 0.22s;
}
.ab3__cred:hover { background: var(--charcoal-tint); border-color: var(--yellow-core); }
.ab3__cred-label {
  font-family: var(--font-mono); font-size: 8px; font-weight: 500;
  letter-spacing: 0.18em; text-transform: uppercase; color: var(--text-400); margin-bottom: 4px;
}
.ab3__cred-value {
  font-family: var(--font-body); font-size: 12px; font-weight: 700;
  color: var(--text-600);
}
/* Media column */
.ab3__media {
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  background: var(--charcoal-mid);
}
.ab3__media-img {
  width: 100%; height: 100%; min-height: 480px;
  object-fit: cover; object-position: center;
  filter: contrast(1.06) saturate(0.82);
  transition: transform 0.8s var(--ease-expo);
}
.ab3__media:hover .ab3__media-img { transform: scale(1.03); }
/* Yellow bottom bar on image */
.ab3__media::after {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0;
  height: 4px; background: var(--yellow-core); z-index: 2;
}
.ab3__chip {
  position: absolute; top: 28px; left: -20px; z-index: 3;
  background: var(--charcoal-deep); padding: 12px 18px;
  border-left: 3px solid var(--yellow-core);
}
.ab3__chip-lbl {
  font-family: var(--font-mono); font-size: 8px; font-weight: 500;
  letter-spacing: 0.20em; text-transform: uppercase;
  color: rgba(255,255,255,0.35); margin-bottom: 3px;
}
.ab3__chip-val {
  font-family: var(--font-display); font-size: 20px; font-weight: 700;
  color: var(--white); line-height: 1;
}
.ab3__corner-mark {
  position: absolute; bottom: 24px; left: 24px; z-index: 3;
  width: 40px; height: 40px; opacity: 0.50;
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   SERVICES â€” STICKY TAB CONTAINER (STC1) â€” DSE
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.stc1 { position: relative; }

/* Sticky tab rail */
.stc1__rail {
  position: sticky; top: 0; z-index: 50; height: 64px;
  background: var(--charcoal-deep); border-bottom: 1px solid rgba(255,255,255,0.07);
  display: flex; align-items: stretch; overflow: hidden;
}
.stc1__rail::before {
  content: ''; position: absolute; top: 0; left: 0; width: 3px; height: 100%;
  background: var(--yellow-core);
}
.stc1__rail::after {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image: repeating-linear-gradient(90deg,
    rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 120px);
}
.stc1__rail-label {
  flex-shrink: 0; display: flex; align-items: center; gap: 10px;
  padding: 0 24px 0 28px; border-right: 1px solid rgba(255,255,255,0.07); z-index: 1;
}
.stc1__rail-label span {
  font-size: 9px; font-weight: 800; letter-spacing: 0.22em; text-transform: uppercase;
  color: rgba(255,255,255,0.28); white-space: nowrap;
}
.stc1__tabs {
  display: flex; align-items: stretch; flex: 1; list-style: none;
  position: relative; z-index: 1;
}
.stc1__tab {
  position: relative; display: flex; align-items: center; gap: 10px;
  padding: 0 28px;
  font-family: var(--font-body); font-size: 11px; font-weight: 800;
  letter-spacing: 0.16em; text-transform: uppercase;
  color: rgba(255,255,255,0.38);
  background: transparent; border: none; border-right: 1px solid rgba(255,255,255,0.07);
  cursor: pointer; white-space: nowrap;
  transition: color 0.25s var(--ease-expo), background 0.25s var(--ease-expo);
  outline: none;
}
.stc1__tab-num {
  font-family: var(--font-display); font-size: 13px; font-weight: 700;
  color: rgba(255,255,255,0.18); transition: color 0.25s var(--ease-expo);
}
.stc1__tab::after {
  content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 2px;
  background: var(--yellow-core);
  transform: scaleX(0); transform-origin: left; transition: transform 0.4s var(--ease-expo);
}
.stc1__tab:hover { color: rgba(255,255,255,0.70); background: rgba(255,255,255,0.025); }
.stc1__tab:hover .stc1__tab-num { color: rgba(255,255,255,0.35); }
.stc1__tab.active { color: var(--white); background: rgba(247,197,32,0.06); }
.stc1__tab.active .stc1__tab-num { color: var(--yellow-core); }
.stc1__tab.active::after { transform: scaleX(1); }

/* Tab panels */
.stc1__panels { position: relative; }
.stc1__panel { display: none; position: relative; min-height: 600px; overflow: hidden; }
.stc1__panel.active { display: block; }
/* Panel background */
.stc1__panel-bg {
  position: absolute; inset: 0; background-size: cover; background-position: center;
  z-index: 0; transition: transform 8s linear;
}
.stc1__panel.active .stc1__panel-bg { transform: scale(1.04); }
/* Panel overlay */
.stc1__panel-overlay {
  position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(105deg, rgba(30,28,26,0.94) 0%, rgba(30,28,26,0.80) 45%, rgba(30,28,26,0.48) 100%);
}
/* Blueprint grid */
.stc1__panel-grid {
  position: absolute; inset: 0; z-index: 1; pointer-events: none;
  background-image:
    repeating-linear-gradient(0deg,   rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px),
    repeating-linear-gradient(90deg,  rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 80px);
}
/* SVG Motif layer */
.stc1__motif { position: absolute; z-index: 2; pointer-events: none; }
.motif-corner  { bottom: 0; right: 0;   width: 200px; height: 200px; opacity: 0.12; }
.motif-slash   { top: 20px; right: 60px; width: 160px; height: 160px; opacity: 0.08; }
.motif-cross   { top: 50%; right: 44%; transform: translateY(-50%); width: 120px; height: 120px; opacity: 0.06; }
.motif-triangle { bottom: 40px; left: 40px; width: 100px; height: 100px; opacity: 0.08; }
/* Panel content */
.stc1__panel-content {
  position: relative; z-index: 3;
  padding: clamp(52px,7vw,96px) clamp(32px,8vw,120px);
  max-width: 1200px; display: grid; grid-template-columns: 1fr 1fr;
  gap: 60px; align-items: center; min-height: 600px;
}
/* Panel entrance */
@keyframes panelIn { from { opacity:0; transform: translateY(18px); } to { opacity:1; transform: translateY(0); } }
.stc1__panel.active .stc1__panel-content { animation: panelIn 0.55s var(--ease-expo) both; }
/* Panel text */
.stc1__panel-heading {
  font-family: var(--font-display); font-size: clamp(36px, 4.5vw, 64px);
  font-weight: 700; line-height: 1.0; letter-spacing: -0.02em;
  text-transform: uppercase; color: var(--white); margin-bottom: 20px;
}
.stc1__panel-heading em { font-style: normal; color: var(--yellow-core); }
.stc1__panel-rule { width: 48px; height: 3px; background: var(--yellow-core); margin-bottom: 24px; }
.stc1__panel-body {
  font-family: var(--font-industrial); font-size: 15px; font-weight: 300;
  line-height: 1.80; color: rgba(255,255,255,0.58); max-width: 44ch; margin-bottom: 32px;
}
.stc1__panel-features { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 36px; }
.stc1__panel-features li {
  display: flex; align-items: center; gap: 12px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.10em; text-transform: uppercase;
  color: rgba(255,255,255,0.65);
}
.stc1__panel-features li::before {
  content: ''; width: 6px; height: 6px; background: var(--yellow-core); flex-shrink: 0;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}
/* Glass stat card */
.stc1__card {
  background: rgba(30,28,26,0.72); backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.08); border-left: 3px solid var(--yellow-core);
  padding: 40px 36px; display: flex; flex-direction: column; gap: 28px;
}
.stc1__card-badge {
  display: inline-block; font-size: 9px; font-weight: 800;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--yellow-core); background: rgba(247,197,32,0.12);
  padding: 5px 10px; align-self: flex-start;
}
.stc1__stat { display: flex; flex-direction: column; gap: 4px; padding-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.07); }
.stc1__stat:last-of-type { border-bottom: none; padding-bottom: 0; }
.stc1__stat-num {
  font-family: var(--font-display); font-size: clamp(36px,4vw,52px);
  font-weight: 700; line-height: 1; letter-spacing: -0.03em; color: var(--white);
}
.stc1__stat-num em { font-style: normal; color: var(--yellow-core); }
.stc1__stat-label {
  font-size: 10px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase;
  color: rgba(255,255,255,0.40);
}
.stc1__stat-sub { font-size: 12px; color: rgba(255,255,255,0.25); margin-top: 2px; }

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   WHY3 â€” Light Editorial Manifesto
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.why3 {
  background: var(--white); padding: var(--section-v) 0;
  position: relative; overflow: hidden;
}
.why3::before {
  content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image: repeating-linear-gradient(0deg,
    rgba(0,0,0,0.022) 0px, rgba(0,0,0,0.022) 1px, transparent 1px, transparent 64px);
}
/* Ghost watermark */
.why3__wm {
  position: absolute; right: -0.05em; bottom: -0.1em;
  font-family: var(--font-display); font-size: clamp(120px, 18vw, 260px);
  font-weight: 700; letter-spacing: -0.05em; line-height: 1;
  color: rgba(30,28,26,0.028); pointer-events: none; user-select: none; z-index: 0;
}
.why3__inner {
  position: relative; z-index: 1;
  display: grid; grid-template-columns: 1fr 2fr;
  gap: 80px; align-items: start;
  max-width: var(--container-max); margin: 0 auto; padding: 0 40px;
}
.why3__heading {
  font-family: var(--font-display); font-size: clamp(36px, 4vw, 56px);
  font-weight: 700; text-transform: uppercase; letter-spacing: -0.02em;
  line-height: 1; color: var(--charcoal-deep); margin-bottom: 20px;
}
.why3__heading em { font-style: normal; color: var(--yellow-core); }
.why3__intro {
  font-family: var(--font-body); font-size: 14px; font-weight: 400;
  line-height: 1.82; color: var(--text-400); max-width: 28ch; margin-bottom: 36px;
}
/* Manifesto rows */
.why3__rows { display: flex; flex-direction: column; }
.why3__row {
  display: grid; grid-template-columns: 80px 1px 1fr;
  gap: 0 32px; padding: 40px 0;
  border-bottom: 1px solid var(--gray-200);
  position: relative; cursor: none; overflow: hidden;
}
.why3__row:first-child { border-top: 1px solid var(--gray-200); }
/* Yellow tint hover fill */
.why3__row::before {
  content: ''; position: absolute; inset: 0;
  background: var(--charcoal-tint);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.45s var(--ease-expo);
}
.why3__row:hover::before { transform: scaleX(1); }
.why3__row-num {
  font-family: var(--font-display); font-size: clamp(40px, 5vw, 60px);
  font-weight: 200; letter-spacing: -0.04em;
  color: var(--gray-200); line-height: 1; align-self: start;
  transition: color 0.3s; position: relative; z-index: 1;
}
.why3__row:hover .why3__row-num { color: rgba(247,197,32,0.35); }
.why3__row-line { background: var(--gray-200); width: 1px; position: relative; z-index: 1; }
.why3__row-content { position: relative; z-index: 1; }
.why3__row-title {
  font-family: var(--font-display); font-size: 18px; font-weight: 700;
  text-transform: uppercase; letter-spacing: -0.01em;
  color: var(--charcoal-deep); line-height: 1; margin-bottom: 10px;
  transition: color 0.3s;
}
.why3__row:hover .why3__row-title { color: var(--charcoal-deep); }
.why3__row-body {
  font-family: var(--font-body); font-size: 14px; font-weight: 400;
  line-height: 1.75; color: var(--text-400);
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   PROCESS â€” PROC3 Hybrid Split Timeline (Light)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.proc3 {
  background: var(--white); padding: var(--section-v) 0; overflow: hidden;
}
.proc3__inner {
  display: grid; grid-template-columns: 38fr 62fr; gap: 80px; align-items: start;
  max-width: var(--container-max); margin: 0 auto; padding: 0 40px;
}
/* Left: charcoal DSE panel */
.proc3__left {
  background: var(--charcoal-deep); padding: 52px 44px 52px 48px;
  position: relative; overflow: hidden;
}
.proc3__left::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image:
    repeating-linear-gradient(0deg,   rgba(255,255,255,0.010) 0, rgba(255,255,255,0.010) 1px, transparent 1px, transparent 80px),
    repeating-linear-gradient(90deg,  rgba(255,255,255,0.010) 0, rgba(255,255,255,0.010) 1px, transparent 1px, transparent 80px);
}
.proc3__left-rail {
  position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--yellow-core) 0%, rgba(247,197,32,0.12) 65%, transparent 100%);
}
.proc3__left-wm {
  position: absolute; bottom: -10px; right: -10px;
  font-family: var(--font-display); font-size: clamp(80px, 12vw, 140px);
  font-weight: 700; letter-spacing: -0.04em; line-height: 1;
  color: rgba(255,255,255,0.025); pointer-events: none; user-select: none;
}
.proc3__left-content { position: relative; z-index: 1; }
.proc3__heading {
  font-family: var(--font-display); font-size: clamp(32px, 3.8vw, 52px);
  font-weight: 700; text-transform: uppercase; letter-spacing: -0.02em;
  line-height: 1; color: var(--white); margin-bottom: 20px;
}
.proc3__body {
  font-family: var(--font-industrial); font-size: 14px; font-weight: 300;
  line-height: 1.82; color: rgba(255,255,255,0.55); max-width: 30ch; margin-bottom: 36px;
}
/* Thread timeline â€” right side */
.proc3__thread { position: relative; padding-top: 8px; }
.proc3__connector {
  position: absolute; top: 24px; left: 16px; bottom: 24px; width: 1px;
  background: linear-gradient(180deg, var(--yellow-core) 0%, rgba(247,197,32,0.10) 100%);
}
.proc3__step { display: grid; grid-template-columns: 44px 1fr; gap: 24px; padding-bottom: 44px; position: relative; }
.proc3__step:last-child { padding-bottom: 0; }
.proc3__step-num {
  width: 32px; height: 32px; background: var(--charcoal-deep);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 12px; font-weight: 700;
  color: var(--yellow-core); flex-shrink: 0; position: relative; z-index: 1;
  transition: background 0.3s, color 0.3s;
}
.proc3__step:hover .proc3__step-num { background: var(--yellow-core); color: var(--charcoal-deep); }
.proc3__step-title {
  font-family: var(--font-display); font-size: 15px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.03em;
  color: var(--charcoal-deep); line-height: 1; margin-bottom: 8px; margin-top: 7px;
}
.proc3__step-body {
  font-family: var(--font-body); font-size: 13px; font-weight: 400;
  line-height: 1.75; color: var(--text-400);
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   PARALLAX QUOTE BAND â€” Full bleed DSE
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.quote-band {
  position: relative; height: 70vh; min-height: 480px;
  overflow: hidden; display: flex; align-items: center;
}
.quote-band__bg {
  position: absolute; inset: -8%; will-change: transform;
}
.quote-band__bg img {
  width: 100%; height: 120%; object-fit: cover; object-position: center 45%;
  filter: contrast(1.10) brightness(0.55) saturate(0.5);
}
.quote-band__overlay-l {
  position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(105deg, rgba(14,12,10,0.82) 0%, rgba(14,12,10,0.55) 35%, rgba(14,12,10,0.48) 100%);
}
.quote-band__overlay-t {
  position: absolute; top: 0; left: 0; right: 0; z-index: 1; height: 55%;
  background: linear-gradient(to bottom, rgba(10,8,6,0.52) 0%, rgba(10,8,6,0.18) 55%, transparent 100%);
}
.quote-band__overlay-b {
  position: absolute; bottom: 0; left: 0; right: 0; z-index: 1; height: 30%;
  background: linear-gradient(to top, rgba(10,8,6,0.95) 0%, rgba(10,8,6,0.55) 55%, transparent 100%);
}
.quote-band__grain {
  position: absolute; inset: 0; z-index: 2; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E");
  background-size: 200px; opacity: 0.030;
}
.quote-band__content {
  position: relative; z-index: 10; max-width: 800px;
  margin: 0 auto; padding: 0 80px; text-align: center;
}
.quote-band__rule { width: 40px; height: 2px; background: var(--yellow-core); margin: 0 auto 36px; }
.quote-band__quote {
  font-family: var(--font-industrial); font-style: italic; font-weight: 300;
  font-size: clamp(20px, 2.8vw, 34px); line-height: 1.58;
  color: rgba(255,255,255,0.88); letter-spacing: 0.01em; margin-bottom: 36px;
}
.quote-band__attr { display: flex; align-items: center; gap: 16px; justify-content: center; }
.quote-band__attr-line { width: 24px; height: 1px; background: rgba(255,255,255,0.25); }
.quote-band__attr-name {
  font-family: var(--font-mono); font-size: 9px; font-weight: 500;
  letter-spacing: 0.22em; text-transform: uppercase; color: rgba(255,255,255,0.40);
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   TESTIMONIALS â€” TST3 Pull Quote Grid (Light)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.tst3 {
  background: var(--white); padding: var(--section-v) 0; overflow: hidden;
}
.tst3__header { text-align: center; margin-bottom: 56px; }
.tst3__heading {
  font-family: var(--font-display); font-size: clamp(32px, 3.8vw, 52px);
  font-weight: 700; text-transform: uppercase; letter-spacing: -0.02em; line-height: 1;
  color: var(--charcoal-deep);
}
.tst3__grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px;
  max-width: var(--container-max); margin: 0 auto; padding: 0 40px;
}
.tst3__card {
  background: var(--white); padding: 40px 36px; position: relative;
  overflow: hidden; border-top: 3px solid transparent;
  transition: border-color 0.3s, box-shadow 0.3s; cursor: none;
}
.tst3__card:hover { border-color: var(--yellow-core); box-shadow: 0 12px 40px rgba(30,28,26,0.10); }
.tst3__card--featured { border-color: var(--yellow-core); border-top-width: 3px; }
/* Big open mark */
.tst3__open-mark {
  position: absolute; top: 20px; left: 28px;
  font-family: var(--font-display); font-size: 120px; font-weight: 700;
  line-height: 1; color: rgba(30,28,26,0.04); pointer-events: none; user-select: none;
}
.tst3__stars { display: flex; gap: 4px; margin-bottom: 20px; position: relative; z-index: 1; }
.tst3__star { width: 12px; height: 12px; fill: var(--yellow-core); }
.tst3__quote {
  font-family: var(--font-industrial); font-style: italic; font-weight: 300;
  font-size: 15px; line-height: 1.78; color: var(--text-500);
  margin-bottom: 28px; position: relative; z-index: 1;
}
.tst3__divider { width: 24px; height: 1px; background: var(--yellow-core); margin-bottom: 20px; }
.tst3__name {
  font-family: var(--font-body); font-size: 12px; font-weight: 700;
  letter-spacing: 0.08em; text-transform: uppercase; color: var(--charcoal-deep); margin-bottom: 4px;
}
.tst3__role {
  font-family: var(--font-mono); font-size: 9px; font-weight: 500;
  letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-400);
}

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   COVERAGE â€” Territory Band (DSE)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.coverage {
  background: var(--charcoal-mid); padding: var(--section-v) 0;
  position: relative; overflow: hidden;
}
.coverage::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image:
    repeating-linear-gradient(0deg,   rgba(255,255,255,0.010) 0, rgba(255,255,255,0.010) 1px, transparent 1px, transparent 80px),
    repeating-linear-gradient(90deg,  rgba(255,255,255,0.010) 0, rgba(255,255,255,0.010) 1px, transparent 1px, transparent 80px);
}
.coverage__rail {
  position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--yellow-core) 0%, rgba(247,197,32,0.10) 55%, transparent 100%);
}
.coverage__ghost {
  position: absolute; bottom: -20px; left: -20px;
  font-family: var(--font-display); font-size: clamp(80px, 14vw, 180px);
  font-weight: 700; letter-spacing: -0.05em;
  color: rgba(255,255,255,0.020); pointer-events: none; user-select: none; z-index: 0; line-height: 1;
}
.coverage__inner {
  max-width: var(--container-max); margin: 0 auto; padding: 0 40px;
  display: grid; grid-template-columns: 1fr 2fr; gap: 80px; align-items: center;
  position: relative; z-index: 1;
}
.coverage__heading {
  font-family: var(--font-display); font-size: clamp(32px, 3.8vw, 52px);
  font-weight: 700; text-transform: uppercase; letter-spacing: -0.02em;
  line-height: 1; color: var(--white); margin-bottom: 16px;
}
.coverage__sub {
  font-family: var(--font-industrial); font-size: 14px; font-weight: 300;
  line-height: 1.8; color: rgba(255,255,255,0.45); max-width: 28ch; margin-bottom: 32px;
}
.coverage__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
.coverage__item {
  padding: 18px 22px; background: rgba(255,255,255,0.04);
  border-top: 1px solid rgba(255,255,255,0.06);
  display: flex; align-items: center; gap: 12px;
  transition: background 0.25s; cursor: none;
}
.coverage__item:hover { background: rgba(247,197,32,0.06); }
.coverage__item-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--yellow-core); flex-shrink: 0; }
.coverage__item-name {
  font-family: var(--font-body); font-size: 11px; font-weight: 700;
  letter-spacing: 0.10em; text-transform: uppercase;
  color: rgba(255,255,255,0.55); transition: color 0.25s;
}
.coverage__item:hover .coverage__item-name { color: var(--white); }

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   CONTACT STRIP â€” Light (separator between coverage DSE + CTA DSE)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.contact-strip {
  background: var(--white); padding: clamp(48px,6vw,80px) 0;
  position: relative; overflow: hidden;
}
.contact-strip::before {
  content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image: repeating-linear-gradient(0deg,
    rgba(0,0,0,0.022) 0px, rgba(0,0,0,0.022) 1px, transparent 1px, transparent 64px);
}
.contact-strip__inner {
  max-width: var(--container-max); margin: 0 auto; padding: 0 40px;
  display: flex; align-items: center; justify-content: space-between; gap: 48px;
  position: relative; z-index: 1;
}
.contact-strip__copy {}
.contact-strip__heading {
  font-family: var(--font-display); font-size: clamp(28px, 3.5vw, 48px);
  font-weight: 700; text-transform: uppercase; letter-spacing: -0.02em;
  line-height: 1; color: var(--charcoal-deep); margin-bottom: 12px;
}
.contact-strip__heading span { color: var(--yellow-core); }
.contact-strip__sub {
  font-family: var(--font-body); font-size: 14px; font-weight: 400;
  color: var(--text-400); max-width: 42ch; line-height: 1.75;
}
.contact-strip__actions { display: flex; align-items: center; gap: 16px; flex-shrink: 0; }
.contact-strip__phone-lbl {
  font-family: var(--font-mono); font-size: 8px; font-weight: 500;
  letter-spacing: 0.22em; text-transform: uppercase; color: var(--text-400); margin-bottom: 6px;
}
.contact-strip__phone {
  font-family: var(--font-display); font-size: clamp(22px, 2.8vw, 36px);
  font-weight: 700; letter-spacing: -0.01em; line-height: 1; color: var(--charcoal-deep);
  display: block; position: relative; width: fit-content; padding-bottom: 4px; cursor: none;
}
.contact-strip__phone::after {
  content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: var(--yellow-core);
  transition: width 0.55s var(--ease-expo);
}
.contact-strip__phone:hover::after { width: 100%; }
.btn-ghost--dark {
  color: var(--charcoal-deep); border-color: rgba(30,28,26,0.25);
}
.btn-ghost--dark:hover { background: var(--charcoal-tint); border-color: var(--charcoal-deep); color: var(--charcoal-deep); }

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   CTA FINAL â€” glc-cta-final-v2 (Full bleed, the crown jewel)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.cta-final {
  position: relative; min-height: 100vh; display: flex; flex-direction: column; overflow: hidden;
}
/* Full-bleed image */
.cta-final__bg { position: absolute; inset: 0; z-index: 0; overflow: hidden; }
.cta-final__bg img {
  width: 100%; height: 100%; object-fit: cover; object-position: center 55%;
  transform: scale(1.06); animation: imgBreath 3s var(--ease-expo) forwards;
}
/* Three-layer atmospheric overlay */
.cta-final__overlay-l {
  position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(105deg, rgba(14,12,10,0.82) 0%, rgba(14,12,10,0.55) 30%, rgba(14,12,10,0.20) 55%, rgba(14,12,10,0.28) 100%);
}
.cta-final__overlay-t {
  position: absolute; top: 0; left: 0; right: 0; z-index: 1; height: 55%;
  background: linear-gradient(to bottom, rgba(10,8,6,0.52) 0%, rgba(10,8,6,0.20) 55%, transparent 100%);
}
.cta-final__overlay-b {
  position: absolute; bottom: 0; left: 0; right: 0; z-index: 1; height: 30%;
  background: linear-gradient(to top, rgba(10,8,6,0.96) 0%, rgba(10,8,6,0.60) 55%, transparent 100%);
}
.cta-final__grain {
  position: absolute; inset: 0; z-index: 2; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E");
  background-size: 200px; opacity: 0.032; mix-blend-mode: overlay;
}
/* Content */
.cta-final__content {
  position: relative; z-index: 10; flex: 1;
  display: flex; flex-direction: column; justify-content: space-between; padding: 0;
}
/* Top zone â€” in the sky */
.cta-final__top { padding: 72px 80px 0; max-width: 760px; }
.cta-final__eyebrow {
  display: flex; align-items: center; gap: 14px; margin-bottom: 56px;
  opacity: 0; animation: aFade 0.7s var(--ease-expo) 0.4s forwards;
}
.cta-final__eyebrow.in-view { animation: aFade 0.7s var(--ease-expo) 0.1s forwards; }
.cta-final__eyebrow-dash { width: 24px; height: 1px; background: var(--yellow-core); flex-shrink: 0; }
.cta-final__eyebrow-txt {
  font-size: 9px; font-weight: 700; letter-spacing: 0.32em; text-transform: uppercase;
  color: rgba(255,255,255,0.45);
}
/* Three-act headline */
.cta-final__hl {
  display: block; overflow: hidden;
  font-family: var(--font-display); font-size: clamp(58px, 8vw, 118px);
  line-height: 0.90; text-transform: uppercase; letter-spacing: -0.02em;
}
.cta-final__hl span { display: block; }
.cta-final__hl--1 span { font-weight: 200; color: rgba(255,255,255,0.25); }
.cta-final__hl--2 span { font-weight: 600; color: rgba(255,255,255,0.92); }
.cta-final__hl--3 span { font-weight: 700; color: var(--yellow-core); }
.cta-final.in-view .cta-final__hl--1 span { animation: aLineUp 1s var(--ease-expo) 0.55s both; }
.cta-final.in-view .cta-final__hl--2 span { animation: aLineUp 1s var(--ease-expo) 0.72s both; }
.cta-final.in-view .cta-final__hl--3 span { animation: aLineUp 1s var(--ease-expo) 0.88s both; }
/* Mid zone */
.cta-final__mid {
  padding: 56px 80px 0; max-width: 520px;
  opacity: 0; animation: aFade 0.8s var(--ease-expo) 1.15s forwards;
}
.cta-final.in-view .cta-final__mid { animation: aFade 0.8s var(--ease-expo) 0.95s forwards; }
.cta-final__caption {
  font-family: var(--font-industrial); font-weight: 300;
  font-size: 16px; line-height: 1.75; color: rgba(255,255,255,0.68);
}
.cta-final__caption strong { font-family: var(--font-industrial); font-weight: 500; color: rgba(255,255,255,0.88); }
/* Bottom zone */
.cta-final__bottom {
  padding: 0 80px 44px;
  display: flex; align-items: flex-end; justify-content: space-between; gap: 40px; flex-wrap: wrap;
}
.cta-final__phone-block {
  opacity: 0; animation: aSlide 0.8s var(--ease-expo) 1.4s forwards;
}
.cta-final.in-view .cta-final__phone-block { animation: aSlide 0.8s var(--ease-expo) 1.2s forwards; }
.cta-final__phone-lbl {
  display: block; font-size: 8px; font-weight: 700; letter-spacing: 0.32em; text-transform: uppercase;
  color: rgba(255,255,255,0.28); margin-bottom: 10px;
}
.cta-final__phone {
  display: block; font-family: var(--font-display); font-size: clamp(30px, 3.8vw, 56px);
  font-weight: 700; letter-spacing: -0.01em; line-height: 1; color: var(--white);
  position: relative; width: fit-content; padding-bottom: 6px; cursor: none;
}
.cta-final__phone::after {
  content: ''; position: absolute; bottom: 0; left: 0;
  width: 0; height: 2px; background: var(--yellow-core);
  transition: width 0.55s var(--ease-expo);
}
.cta-final__phone:hover::after { width: 100%; }
.cta-final__trust {
  display: flex; flex-direction: column; gap: 8px;
  opacity: 0; animation: aFade 0.7s var(--ease-expo) 1.6s forwards;
}
.cta-final.in-view .cta-final__trust { animation: aFade 0.7s var(--ease-expo) 1.3s forwards; }
.cta-final__trust-item {
  display: flex; align-items: center; gap: 8px; font-size: 10px; font-weight: 600;
  letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.35);
}
.cta-final__trust-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--yellow-core); flex-shrink: 0; }
/* CTA bar */
.cta-final__bar {
  display: grid; grid-template-columns: 1fr auto; height: 76px;
  position: relative; z-index: 20;
  opacity: 0; animation: aSlide 0.7s var(--ease-expo) 1.9s forwards;
}
.cta-final.in-view .cta-final__bar { animation: aSlide 0.7s var(--ease-expo) 1.6s forwards; }
.cta-final__bar-main {
  background: var(--yellow-core); display: flex; align-items: center;
  justify-content: space-between; padding: 0 52px 0 80px; gap: 32px;
  text-decoration: none; cursor: none; position: relative; overflow: hidden;
}
.cta-final__bar-main::before {
  content: ''; position: absolute; inset: 0; background: var(--white);
  transform: scaleX(0); transform-origin: left; transition: transform 0.58s var(--ease-expo);
}
.cta-final__bar-main:hover::before { transform: scaleX(1); }
.cta-final__bar-lbl {
  font-family: var(--font-display); font-size: clamp(12px,1.1vw,15px);
  font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--charcoal-deep); position: relative; z-index: 1;
  transition: letter-spacing 0.35s var(--ease-expo);
}
.cta-final__bar-main:hover .cta-final__bar-lbl { letter-spacing: 0.28em; }
.cta-final__bar-right { display: flex; align-items: center; gap: 16px; position: relative; z-index: 1; flex-shrink: 0; }
.cta-final__bar-line { width: 0; height: 1px; background: rgba(30,28,26,0.28); transition: width 0.40s var(--ease-expo); }
.cta-final__bar-main:hover .cta-final__bar-line { width: 40px; }
.cta-final__bar-icon {
  width: 38px; height: 38px; border: 1.5px solid rgba(30,28,26,0.22);
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.4s var(--ease-expo);
}
.cta-final__bar-icon svg { width: 15px; height: 15px; fill: none; stroke: var(--charcoal-deep); stroke-width:2; stroke-linecap:round; stroke-linejoin:round; transition: transform 0.4s var(--ease-expo); }
.cta-final__bar-main:hover .cta-final__bar-icon svg { transform: rotate(-45deg); }
.cta-final__bar-sec {
  background: var(--charcoal-mid); border-left: 1px solid rgba(247,197,32,0.15);
  padding: 0 40px; display: flex; align-items: center; gap: 10px;
  text-decoration: none; cursor: none; position: relative; overflow: hidden; transition: background 0.3s;
}
.cta-final__bar-sec:hover { background: #383330; }
.cta-final__bar-sec svg { width: 14px; height: 14px; fill: none; stroke: rgba(247,197,32,0.40); stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; flex-shrink:0; position: relative; z-index:1; transition: stroke 0.25s; }
.cta-final__bar-sec:hover svg { stroke: var(--yellow-core); }
.cta-final__bar-sec-txt {
  font-family: var(--font-body); font-size: 10px; font-weight: 700;
  letter-spacing: 0.20em; text-transform: uppercase;
  color: rgba(255,255,255,0.28); position: relative; z-index: 1; transition: color 0.25s; white-space: nowrap;
}
.cta-final__bar-sec:hover .cta-final__bar-sec-txt { color: rgba(255,255,255,0.65); }

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   FOOTER â€” Brand Grid + Legal Bar (DSE)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.footer {
  background: var(--charcoal-deep); position: relative; overflow: hidden;
}
.footer::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image:
    repeating-linear-gradient(0deg,   rgba(255,255,255,0.008) 0, rgba(255,255,255,0.008) 1px, transparent 1px, transparent 80px),
    repeating-linear-gradient(90deg,  rgba(255,255,255,0.008) 0, rgba(255,255,255,0.008) 1px, transparent 1px, transparent 80px);
}
.footer__rail {
  height: 3px;
  background: linear-gradient(90deg, var(--yellow-core) 0%, rgba(247,197,32,0.10) 55%, transparent 100%);
}
.footer__main {
  max-width: var(--container-max); margin: 0 auto; padding: 72px 40px 64px;
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px;
  position: relative; z-index: 1;
}
.footer__mark {
  width: 40px; height: 40px; background: var(--yellow-core); flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 13px; font-weight: 700;
  color: var(--charcoal-deep); position: relative;
}
.footer__mark::after {
  content: ''; position: absolute; bottom: -2px; right: -2px;
  width: 8px; height: 8px; background: var(--charcoal-deep);
}
.footer__logo-row { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
.footer__name { font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--white); line-height: 1; }
.footer__name-sub { font-family: var(--font-mono); font-size: 8px; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(255,255,255,0.30); margin-top: 3px; }
.footer__tagline {
  font-family: var(--font-industrial); font-size: 13px; font-weight: 300;
  color: rgba(255,255,255,0.38); line-height: 1.7; max-width: 28ch; margin-bottom: 24px;
}
.footer__contact-item {
  display: flex; align-items: center; gap: 10px;
  font-family: var(--font-body); font-size: 12px; font-weight: 500;
  color: rgba(255,255,255,0.55); margin-bottom: 8px; cursor: none; transition: color 0.2s;
}
.footer__contact-item:hover { color: var(--white); }
.footer__contact-item svg { width: 14px; height: 14px; fill: none; stroke: var(--yellow-core); stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; flex-shrink: 0; }
.footer__col-title {
  font-family: var(--font-body); font-size: 9px; font-weight: 800;
  letter-spacing: 0.22em; text-transform: uppercase; color: var(--yellow-core);
  margin-bottom: 20px; display: flex; align-items: center; gap: 8px;
}
.footer__col-title::before { content: ''; width: 16px; height: 2px; background: var(--yellow-core); flex-shrink: 0; }
.footer__links { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.footer__links a {
  font-family: var(--font-industrial); font-size: 13px; font-weight: 300;
  color: rgba(255,255,255,0.40); cursor: none; display: block;
  transition: color 0.2s, padding-left 0.25s var(--ease-expo);
}
.footer__links a:hover { color: var(--white); padding-left: 6px; }
.footer__bar { border-top: 1px solid rgba(255,255,255,0.07); position: relative; z-index: 1; }
.footer__bar-inner {
  max-width: var(--container-max); margin: 0 auto; padding: 20px 40px;
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
}
.footer__copy { font-family: var(--font-mono); font-size: 9px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.22); }
.footer__copy span { color: rgba(255,255,255,0.40); }
.footer__legal { display: flex; align-items: center; gap: 24px; }
.footer__legal a { font-family: var(--font-mono); font-size: 9px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.22); cursor: none; transition: color 0.2s; }
.footer__legal a:hover { color: rgba(255,255,255,0.55); }

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   KEYFRAMES
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
@keyframes aFade   { from { opacity: 0; } to { opacity: 1; } }
@keyframes aLineUp { from { transform: translateY(110%); } to { transform: translateY(0); } }
@keyframes aGrow   { from { width: 0; } to { width: 100%; } }
@keyframes aSlide  { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
@keyframes imgBreath { to { transform: scale(1.00); } }

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   CONTAINER UTILITY
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
.container { max-width: var(--container-max); margin: 0 auto; padding: 0 40px; }

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   RESPONSIVE
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   TABLET  â‰¤1024px
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
@media (max-width: 1024px) {
  /* Header */
  .gl-header__nav { display: none; }
  .gl-header__phone { display: none; }
  .gl-header__inner { padding: 0 24px; }

  /* Hero â€” stack image above copy */
  .hero {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas: "right" "left" "bar";
  }
  .hero__right  { min-height: 52vw; }
  .hero__left   { padding: 48px 32px 48px; padding-top: 48px; }
  .hero__seam   { display: none; }
  .hero__ghost  { display: none; }

  /* Stats */
  .st3__side-label { display: none; }
  .st3__grid { flex-wrap: wrap; }
  .stat-cell { flex: 0 0 50%; border-bottom: 1px solid rgba(255,255,255,0.06); }

  /* About */
  .ab3__layout { grid-template-columns: 1fr; }
  .ab3__copy   { padding-right: 0; margin-bottom: 0; }
  .ab3__media  { min-height: 300px; overflow: hidden; clip-path: none; }
  .ab3__wm     { display: none; }
  .ab3__chip   { left: 12px; }

  /* Services tab */
  .stc1__rail-label { display: none; }
  .stc1__tab        { padding: 0 18px; font-size: 10px; }
  .stc1__panel-content { grid-template-columns: 1fr; gap: 40px; min-height: auto; padding-bottom: 48px; }

  /* Why */
  .why3__inner { grid-template-columns: 1fr; gap: 40px; }
  .why3__wm    { display: none; }

  /* Process */
  .proc3__inner { grid-template-columns: 1fr; gap: 0; }
  .proc3__left  { padding: 40px 32px; }
  .proc3__thread { padding-top: 48px; }

  /* Testimonials */
  .tst3__grid { grid-template-columns: 1fr 1fr; }
  .tst3__grid .tst3__card:last-child { display: none; }

  /* Coverage */
  .coverage__inner { grid-template-columns: 1fr; gap: 40px; }
  .coverage__grid  { grid-template-columns: repeat(2,1fr); }
  .coverage__ghost { display: none; }

  /* Contact strip */
  .contact-strip__inner { flex-direction: column; align-items: flex-start; gap: 32px; }

  /* CTA Final */
  .cta-final__top    { padding: 60px 32px 0; max-width: 100%; }
  .cta-final__mid    { padding: 36px 32px 0; max-width: 100%; }
  .cta-final__bottom { padding: 36px 32px 40px; }
  .cta-final__bar-main { padding: 0 28px 0 32px; }
  .cta-final__bar-sec  { padding: 0 24px; }

  /* Footer */
  .footer__main { grid-template-columns: 1fr 1fr; gap: 32px; padding: 52px 24px 48px; }
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   MOBILE  â‰¤640px
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
@media (max-width: 640px) {
  /* Base spacing */
  :root { --section-v: clamp(56px,10vw,80px); }
  .container { padding: 0 20px; }

  /* Header */
  .gl-header__inner { padding: 0 20px; }
  .gl-header__name  { font-size: 11px; }
  .gl-header__sub   { display: none; }
  .gl-header__mark  { width: 28px; height: 28px; font-size: 10px; }
  .btn-primary      { font-size: 10px; padding: 11px 18px; }

  /* Hero */
  .hero__right  { min-height: 56vw; }
  .hero__left   { padding: calc(var(--header-h) + 32px) 20px 40px; }
  .hero__hl     { font-size: clamp(44px, 12vw, 72px); }
  .hero__caption { font-size: 14px; max-width: 100%; }
  .hero__phone  { font-size: clamp(24px, 7vw, 36px); }
  .hero__trust  { display: none; }
  .hero__badge  { display: none; }
  .hero__bar    { height: 60px; }
  .hero__bar-main { padding: 0 20px; }
  .hero__bar-lbl  { font-size: 10px; letter-spacing: 0.12em; }
  .hero__bar-sec  { padding: 0 18px; }
  .hero__bar-sec-txt { display: none; }
  .hero__bar-icon { width: 30px; height: 30px; }

  /* Stats */
  .stat-cell { flex: 0 0 50%; padding: 36px 0; }
  .stat-cell__num { font-size: clamp(32px, 9vw, 48px); }

  /* About */
  .ab3 { padding: var(--section-v) 0; }
  .ab3__layout { padding: 0 20px; }
  .ab3__copy::before { display: none; }
  .ab3__heading { font-size: clamp(30px, 9vw, 46px); }
  .ab3__creds { grid-template-columns: 1fr 1fr; }
  .ab3__media { min-height: 240px; clip-path: none; }
  .ab3__chip  { left: 0; top: 16px; }

  /* Tab container */
  .stc1__tab     { padding: 0 14px; font-size: 10px; }
  .stc1__tab-num { display: none; }
  .stc1__panel-content { padding: 36px 20px 48px; }
  .stc1__panel-heading { font-size: clamp(28px, 8vw, 48px); }
  .stc1__card  { padding: 28px 20px; }

  /* Why */
  .why3 { padding: var(--section-v) 0; }
  .why3__inner { padding: 0 20px; }
  .why3__heading { font-size: clamp(28px, 9vw, 44px); }
  .why3__row { grid-template-columns: 48px 1px 1fr; gap: 0 20px; padding: 28px 0; }
  .why3__row-num { font-size: clamp(32px, 8vw, 48px); }
  .why3__row-title { font-size: 14px; }
  .why3__row-body  { font-size: 13px; }

  /* Process */
  .proc3__inner { padding: 0; }
  .proc3__left  { padding: 36px 20px; }
  .proc3__thread { padding: 36px 20px 0; }
  .proc3__heading { font-size: clamp(26px, 8vw, 44px); }

  /* Quote band */
  .quote-band__content { padding: 0 24px; }
  .quote-band__quote   { font-size: clamp(16px, 4.5vw, 24px); }

  /* Testimonials */
  .tst3__header { padding: 0 20px; }
  .tst3__grid   { grid-template-columns: 1fr; padding: 0 20px; }
  .tst3__grid .tst3__card:last-child { display: block; }
  .tst3__card   { padding: 28px 24px; }

  /* Coverage */
  .coverage__inner  { padding: 0 20px; }
  .coverage__grid   { grid-template-columns: 1fr 1fr; }
  .coverage__heading { font-size: clamp(28px, 9vw, 44px); }

  /* Contact strip */
  .contact-strip { padding: var(--section-v) 0; }
  .contact-strip__inner { padding: 0 20px; }
  .contact-strip__heading { font-size: clamp(22px, 7vw, 36px); }
  .contact-strip__phone   { font-size: clamp(20px, 6.5vw, 30px); }

  /* CTA Final */
  .cta-final         { min-height: auto; }
  .cta-final__top    { padding: 56px 20px 0; }
  .cta-final__hl     { font-size: clamp(44px, 13vw, 72px); }
  .cta-final__mid    { padding: 28px 20px 0; }
  .cta-final__caption { font-size: 14px; }
  .cta-final__bottom { padding: 28px 20px 36px; flex-direction: column; align-items: flex-start; gap: 24px; }
  .cta-final__phone  { font-size: clamp(26px, 8vw, 40px); }
  .cta-final__trust  { align-items: flex-start; }
  .cta-final__bar    { height: 60px; }
  .cta-final__bar-main { padding: 0 20px; }
  .cta-final__bar-lbl  { font-size: 10px; letter-spacing: 0.12em; }
  .cta-final__bar-sec  { padding: 0 18px; }
  .cta-final__bar-sec-txt { display: none; }

  /* Footer */
  .footer__main  { grid-template-columns: 1fr; padding: 48px 20px 40px; gap: 28px; }
  .footer__bar-inner { padding: 16px 20px; flex-direction: column; align-items: flex-start; gap: 10px; }
  .footer__legal { flex-wrap: wrap; gap: 16px; }

  /* Hide cursor on touch */
  .c-dot, .c-ring { display: none; }
  body { cursor: auto; }
}
</style>
</head>
<body>

<!-- Custom cursor -->
<div class="c-dot" id="dot"></div>
<div class="c-ring" id="ring"></div>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     HEADER
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<header class="gl-header" id="gl-header">
  <div class="gl-header__inner">
    <div class="gl-header__logo">
      <div class="gl-header__mark">GL</div>
      <div>
        <div class="gl-header__name">Ground Level</div>
        <div class="gl-header__sub">Contracting Inc.</div>
      </div>
    </div>
    <nav class="gl-header__nav">
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#why">Why GLC</a>
      <a href="#process">Process</a>
      <a href="#coverage">Coverage</a>
    </nav>
    <div class="gl-header__cta">
      <span class="gl-header__phone">249.989.2233</span>
      <a href="#contact" class="btn-primary">Get a Quote
        <svg class="icon-arr" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
      </a>
    </div>
  </div>
</header>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     HERO â€” DSE Split 46/54
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<section class="hero" id="hero" aria-labelledby="hero-heading">

  <div class="hero__left">
    <div class="hero__rail"></div>
    <div class="hero__ghost" aria-hidden="true">GLC</div>
    <div class="hero__eyebrow">
      <div class="hero__eyebrow-dash"></div>
      <span class="hero__eyebrow-txt">Barrie, Ontario â€” Simcoe County</span>
    </div>
    <div class="hero__hl-wrap">
      <span class="hero__hl hero__hl--1"><span>Commercial</span></span>
      <span class="hero__hl hero__hl--2"><span id="hero-heading">Excavation</span></span>
      <span class="hero__hl hero__hl--3"><span>&amp; Site Work.</span></span>
    </div>
    <div class="hero__rule"></div>
    <div class="hero__caption-wrap">
      <p class="hero__caption">
        <strong>Ground Level Contracting</strong> delivers commercial excavation, foundations, drainage, and site preparation for project managers who need it done right â€” on schedule, with their own crews and equipment. No subcontracting. No runaround.
      </p>
    </div>
    <div class="hero__phone-zone">
      <div class="hero__phone-block">
        <span class="hero__phone-lbl">Direct Line</span>
        <a href="tel:2499892233" class="hero__phone">249.989.2233</a>
      </div>
      <div class="hero__trust">
        <span class="hero__trust-item"><span class="hero__trust-dot"></span>WSIB Compliant</span>
        <span class="hero__trust-item"><span class="hero__trust-dot"></span>Fully Insured</span>
        <span class="hero__trust-item"><span class="hero__trust-dot"></span>Est. 2010</span>
      </div>
    </div>
  </div>

  <div class="hero__seam" aria-hidden="true"></div>

  <div class="hero__right" id="hero-right">
    <div class="hero__img-wrap" id="hero-img-wrap">
      <img class="hero__img"
           src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80"
           alt="Yellow excavator at commercial site Barrie Ontario">
    </div>
    <div class="hero__img-edge" aria-hidden="true"></div>
    <div class="hero__img-floor" aria-hidden="true"></div>
    <div class="hero__img-sky" aria-hidden="true"></div>
    <div class="grain" aria-hidden="true"></div>
    <div class="hero__badge">
      <div class="hero__badge-lbl">Est.</div>
      <div class="hero__badge-val">2010</div>
      <div class="hero__badge-sub">Simcoe County</div>
    </div>
  </div>

  <div class="hero__bar">
    <a class="hero__bar-main" href="#services" id="hero-bar">
      <span class="hero__bar-lbl">Excavation Â· Foundations Â· Drainage Â· Snow Removal â€” Simcoe County</span>
      <div class="hero__bar-right">
        <div class="hero__bar-line"></div>
        <div class="hero__bar-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </a>
    <a class="hero__bar-sec" href="#contact">
      <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      <span class="hero__bar-sec-txt">Request Quote</span>
    </a>
  </div>

</section>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     STATS â€” ST3 (Hero+Stats exception: back-to-back DSE ok)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<section class="st3" id="stats" aria-label="Company statistics">
  <div class="st3__top-rail"></div>
  <div class="st3__inner">
    <div class="st3__side-label"><span>Performance</span></div>
    <div class="st3__grid">
      <div class="stat-cell reveal">
        <div class="stat-cell__num" data-target="15">0<span>+</span></div>
        <div class="stat-cell__label">Years in Business</div>
      </div>
      <div class="stat-cell reveal reveal--d1">
        <div class="stat-cell__num" data-target="200">0<span>+</span></div>
        <div class="stat-cell__label">Projects Completed</div>
      </div>
      <div class="stat-cell reveal reveal--d2">
        <div class="stat-cell__num" data-target="100">0<span>%</span></div>
        <div class="stat-cell__label">Own Crews &amp; Equipment</div>
      </div>
      <div class="stat-cell reveal reveal--d3">
        <div class="stat-cell__num" data-target="5">0<span>â€“10 Days</span></div>
        <div class="stat-cell__label">Mobilization Window</div>
      </div>
    </div>
  </div>
</section>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     ABOUT â€” AB3 Editorial Split (Light / White)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<section class="ab3" id="about" aria-labelledby="about-heading">
  <div class="ab3__wm" aria-hidden="true">GLC</div>
  <div class="ab3__layout">

    <div class="ab3__copy">
      <div class="ab3__top-row">
        <div class="eyebrow reveal">About GLC</div>
        <div class="ab3__since">Est. 2010</div>
      </div>
      <h2 id="about-heading" class="ab3__heading reveal reveal--d1">
        Built from the<br>ground <em>up.</em>
      </h2>
      <div class="ab3__rule"></div>
      <p class="ab3__body reveal reveal--d2">
        Ground Level Contracting is Barrie's commercial-first excavation and site services company. No residential sidework, no brokered subcontracting â€” when we're on your project, we're doing the work. Every crew is ours. Every piece of equipment is ours.
      </p>
      <div class="ab3__creds reveal reveal--d2">
        <div class="ab3__cred">
          <div class="ab3__cred-label">Compliance</div>
          <div class="ab3__cred-value">WSIB Cleared</div>
        </div>
        <div class="ab3__cred">
          <div class="ab3__cred-label">Coverage</div>
          <div class="ab3__cred-value">Commercial Liability</div>
        </div>
        <div class="ab3__cred">
          <div class="ab3__cred-label">Staffing</div>
          <div class="ab3__cred-value">Own Operators</div>
        </div>
        <div class="ab3__cred">
          <div class="ab3__cred-label">Quotes</div>
          <div class="ab3__cred-value">Line-Item Detail</div>
        </div>
      </div>
      <a href="#process" class="btn-primary reveal reveal--d3">
        How We Work
        <svg class="icon-arr" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
      </a>
    </div>

    <div class="ab3__media reveal reveal--d1">
      <img class="ab3__media-img"
           src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
           alt="GLC crew commercial site preparation" loading="lazy"
           style="min-height:300px"
           onerror="this.style.cssText='display:block;width:100%;min-height:300px;background:#2E2B28';">
      <div class="ab3__chip">
        <div class="ab3__chip-lbl">Head Office</div>
        <div class="ab3__chip-val">Barrie, ON</div>
      </div>
      <svg class="ab3__corner-mark" viewBox="0 0 40 40" fill="none" stroke="#F7C520" stroke-width="1.5">
        <path d="M0 40 L0 0 L40 0"/>
        <path d="M6 40 L6 6 L40 6" opacity="0.4"/>
      </svg>
    </div>

  </div>
</section>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     SERVICES â€” STC1 Sticky Tab Container (DSE)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<section class="stc1" id="services" aria-label="Services">

  <nav class="stc1__rail" aria-label="Service navigation">
    <div class="stc1__rail-label">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <rect x="0" y="0" width="6" height="6" fill="#F7C520" opacity="0.7"/>
        <rect x="8" y="0" width="6" height="6" fill="#F7C520" opacity="0.3"/>
        <rect x="0" y="8" width="6" height="6" fill="#F7C520" opacity="0.3"/>
        <rect x="8" y="8" width="6" height="6" fill="#F7C520" opacity="0.15"/>
      </svg>
      <span>Services</span>
    </div>
    <ul class="stc1__tabs" role="tablist">
      <li><button class="stc1__tab active" data-tab="0" role="tab" aria-selected="true"><span class="stc1__tab-num">01</span>Excavation</button></li>
      <li><button class="stc1__tab" data-tab="1" role="tab" aria-selected="false"><span class="stc1__tab-num">02</span>Foundations</button></li>
      <li><button class="stc1__tab" data-tab="2" role="tab" aria-selected="false"><span class="stc1__tab-num">03</span>Drainage</button></li>
      <li><button class="stc1__tab" data-tab="3" role="tab" aria-selected="false"><span class="stc1__tab-num">04</span>Snow Removal</button></li>
    </ul>
  </nav>

  <div class="stc1__panels">

    <!-- Panel 1: Excavation -->
    <div class="stc1__panel active" data-panel="0">
      <div class="stc1__panel-bg" style="background-image:url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=70')"></div>
      <div class="stc1__panel-overlay"></div>
      <div class="stc1__panel-grid"></div>
      <!-- SVG Motif: corner bracket -->
      <svg class="stc1__motif motif-corner" viewBox="0 0 200 200" fill="none" stroke="#F7C520" stroke-width="1">
        <path d="M200 0 L0 0 L0 200"/>
        <path d="M200 20 L20 20 L20 200"/>
        <path d="M200 40 L40 40 L40 200" opacity="0.5"/>
      </svg>
      <!-- SVG Motif: diagonal slash -->
      <svg class="stc1__motif motif-slash" viewBox="0 0 160 160" fill="none" stroke="#F7C520" stroke-width="1">
        <line x1="0" y1="160" x2="160" y2="0"/>
        <line x1="20" y1="160" x2="160" y2="20"/>
        <line x1="40" y1="160" x2="160" y2="40"/>
        <line x1="60" y1="160" x2="160" y2="60"/>
        <line x1="80" y1="160" x2="160" y2="80"/>
      </svg>
      <div class="stc1__panel-content">
        <div>
          <div class="eyebrow eyebrow--on-dark"><span>01 / Excavation</span></div>
          <h3 class="stc1__panel-heading">Site <em>Preparation</em><br>&amp; Excavation</h3>
          <div class="stc1__panel-rule"></div>
          <p class="stc1__panel-body">Full-site stripping, grading, bulk excavation, and haul-away for commercial pads, institutional sites, and residential subdivisions. Machine selection matched to soil conditions and access constraints.</p>
          <ul class="stc1__panel-features">
            <li>Bulk excavation &amp; mass grading</li>
            <li>Site stripping &amp; topsoil removal</li>
            <li>Precision grade control</li>
            <li>Haul-away &amp; disposal</li>
          </ul>
          <a href="#contact" class="btn-primary">
            Get a Quote
            <svg class="icon-arr" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </a>
        </div>
        <div class="stc1__card">
          <div class="stc1__card-badge">Service Stats</div>
          <div class="stc1__stat">
            <div class="stc1__stat-num">100<em>+</em></div>
            <div class="stc1__stat-label">Excavation Projects</div>
            <div class="stc1__stat-sub">Commercial &amp; Institutional</div>
          </div>
          <div class="stc1__stat">
            <div class="stc1__stat-num">5<em>â€“10</em></div>
            <div class="stc1__stat-label">Day Mobilization</div>
            <div class="stc1__stat-sub">From contract execution</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Panel 2: Foundations -->
    <div class="stc1__panel" data-panel="1">
      <div class="stc1__panel-bg" style="background-image:url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=70')"></div>
      <div class="stc1__panel-overlay"></div>
      <div class="stc1__panel-grid"></div>
      <!-- SVG Motif: crosshair circle -->
      <svg class="stc1__motif motif-cross" viewBox="0 0 120 120" fill="none" stroke="#F7C520" stroke-width="1">
        <circle cx="60" cy="60" r="55"/>
        <circle cx="60" cy="60" r="35"/>
        <circle cx="60" cy="60" r="15"/>
        <line x1="0" y1="60" x2="120" y2="60"/>
        <line x1="60" y1="0" x2="60" y2="120"/>
      </svg>
      <!-- SVG Motif: concentric squares -->
      <svg class="stc1__motif motif-slash" viewBox="0 0 160 160" fill="none" stroke="#F7C520" stroke-width="1">
        <rect x="10" y="10" width="140" height="140"/>
        <rect x="30" y="30" width="100" height="100"/>
        <rect x="50" y="50" width="60" height="60"/>
        <rect x="70" y="70" width="20" height="20"/>
      </svg>
      <div class="stc1__panel-content">
        <div>
          <div class="eyebrow eyebrow--on-dark"><span>02 / Foundations</span></div>
          <h3 class="stc1__panel-heading">Foundations &amp;<br><em>Civil Infrastructure</em></h3>
          <div class="stc1__panel-rule"></div>
          <p class="stc1__panel-body">Foundation excavation, backfill, frost wall prep, and civil infrastructure cuts. Precision grade control and compaction testing. Municipal and commercial grade work built to spec.</p>
          <ul class="stc1__panel-features">
            <li>Foundation excavation &amp; backfill</li>
            <li>Frost wall preparation</li>
            <li>Compaction testing</li>
            <li>Civil infrastructure cuts</li>
          </ul>
          <a href="#contact" class="btn-primary">
            Get a Quote
            <svg class="icon-arr" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </a>
        </div>
        <div class="stc1__card">
          <div class="stc1__card-badge">Service Stats</div>
          <div class="stc1__stat">
            <div class="stc1__stat-num">60<em>+</em></div>
            <div class="stc1__stat-label">Foundation Projects</div>
            <div class="stc1__stat-sub">Commercial &amp; Institutional</div>
          </div>
          <div class="stc1__stat">
            <div class="stc1__stat-num">0</div>
            <div class="stc1__stat-label">Subcontracted Jobs</div>
            <div class="stc1__stat-sub">All work done in-house</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Panel 3: Drainage -->
    <div class="stc1__panel" data-panel="2">
      <div class="stc1__panel-bg" style="background-image:url('https://images.unsplash.com/photo-1590086782792-42dd2350140d?auto=format&fit=crop&w=1600&q=70')"></div>
      <div class="stc1__panel-overlay"></div>
      <div class="stc1__panel-grid"></div>
      <!-- SVG Motif: triangle slab -->
      <svg class="stc1__motif motif-triangle" viewBox="0 0 100 100" fill="none" stroke="#F7C520" stroke-width="1">
        <polygon points="50,0 100,100 0,100"/>
        <polygon points="50,20 80,80 20,80" opacity="0.5"/>
        <polygon points="50,40 65,65 35,65" opacity="0.3"/>
      </svg>
      <div class="stc1__panel-content">
        <div>
          <div class="eyebrow eyebrow--on-dark"><span>03 / Drainage</span></div>
          <h3 class="stc1__panel-heading">Drainage &amp;<br><em>Hardscaping</em></h3>
          <div class="stc1__panel-rule"></div>
          <p class="stc1__panel-body">Storm drainage systems, catch basins, swales, weeping tile, and lot grading for drainage compliance. Interlocking, retaining walls, and commercial hardscape installation done right.</p>
          <ul class="stc1__panel-features">
            <li>Storm drainage systems</li>
            <li>Catch basins &amp; swales</li>
            <li>Weeping tile installation</li>
            <li>Retaining walls &amp; hardscape</li>
          </ul>
          <a href="#contact" class="btn-primary">
            Get a Quote
            <svg class="icon-arr" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </a>
        </div>
        <div class="stc1__card">
          <div class="stc1__card-badge">Service Stats</div>
          <div class="stc1__stat">
            <div class="stc1__stat-num">80<em>+</em></div>
            <div class="stc1__stat-label">Drainage Projects</div>
          </div>
          <div class="stc1__stat">
            <div class="stc1__stat-num">0</div>
            <div class="stc1__stat-label">Change Orders</div>
            <div class="stc1__stat-sub">Scope locked before mobilization</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Panel 4: Snow -->
    <div class="stc1__panel" data-panel="3">
      <div class="stc1__panel-bg" style="background-image:url('https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1600&q=70')"></div>
      <div class="stc1__panel-overlay"></div>
      <div class="stc1__panel-grid"></div>
      <!-- SVG Motif: corner bracket rotated -->
      <svg class="stc1__motif motif-corner" viewBox="0 0 200 200" fill="none" stroke="#F7C520" stroke-width="1" style="transform:rotate(180deg)">
        <path d="M200 0 L0 0 L0 200"/>
        <path d="M200 20 L20 20 L20 200"/>
      </svg>
      <div class="stc1__panel-content">
        <div>
          <div class="eyebrow eyebrow--on-dark"><span>04 / Snow Removal</span></div>
          <h3 class="stc1__panel-heading">Commercial<br><em>Snow Removal</em></h3>
          <div class="stc1__panel-rule"></div>
          <p class="stc1__panel-body">Seasonal contracts for commercial properties, industrial sites, and multi-unit developments. 24/7 response protocols, salting and sanding, and full-season coverage agreements. We work when others won't.</p>
          <ul class="stc1__panel-features">
            <li>24/7 storm response</li>
            <li>Salting &amp; sanding</li>
            <li>Full-season contracts</li>
            <li>Plazas, lots &amp; MURBs</li>
          </ul>
          <a href="#contact" class="btn-primary">
            Get a Quote
            <svg class="icon-arr" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </a>
        </div>
        <div class="stc1__card">
          <div class="stc1__card-badge">Service Stats</div>
          <div class="stc1__stat">
            <div class="stc1__stat-num">24<em>/7</em></div>
            <div class="stc1__stat-label">Storm Response</div>
            <div class="stc1__stat-sub">Year-round availability</div>
          </div>
          <div class="stc1__stat">
            <div class="stc1__stat-num">40<em>+</em></div>
            <div class="stc1__stat-label">Active Contracts</div>
            <div class="stc1__stat-sub">Commercial properties</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     WHY3 â€” Editorial Manifesto (Light)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<section class="why3" id="why" aria-labelledby="why-heading">
  <div class="why3__wm" aria-hidden="true">WHY</div>
  <div class="why3__inner">

    <div>
      <div class="eyebrow reveal">Why GLC</div>
      <h2 id="why-heading" class="why3__heading reveal reveal--d1">
        No fluff.<br>Just <em>ground work.</em>
      </h2>
      <p class="why3__intro reveal reveal--d2">We don't win work on price alone. We win it on accountability, equipment, and the willingness to be on-site when it matters.</p>
      <a href="#contact" class="btn-primary reveal reveal--d3" style="margin-top:8px;">Start a Conversation
        <svg class="icon-arr" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
      </a>
    </div>

    <div class="why3__rows reveal reveal--d1">
      <div class="why3__row">
        <div class="why3__row-num">01</div>
        <div class="why3__row-line"></div>
        <div class="why3__row-content">
          <div class="why3__row-title">No Subcontracting. Ever.</div>
          <p class="why3__row-body">Every service GLC quotes is performed by our own operators on our own equipment. We don't broker work. If we're on your project, we're doing the work â€” not someone you've never met.</p>
        </div>
      </div>
      <div class="why3__row">
        <div class="why3__row-num">02</div>
        <div class="why3__row-line"></div>
        <div class="why3__row-content">
          <div class="why3__row-title">Owner-Accessible. Always.</div>
          <p class="why3__row-body">Project managers call us and talk to a decision-maker. Questions get answered. Scope changes get discussed. There's no call centre, no ticketing system, no waiting.</p>
        </div>
      </div>
      <div class="why3__row">
        <div class="why3__row-num">03</div>
        <div class="why3__row-line"></div>
        <div class="why3__row-content">
          <div class="why3__row-title">Line-Item Transparency.</div>
          <p class="why3__row-body">Our quotes are detailed, itemized, and locked before we mobilize. No scope creep surprises â€” we define scope precisely upfront, then hold to it. Certificate of insurance on request.</p>
        </div>
      </div>
      <div class="why3__row">
        <div class="why3__row-num">04</div>
        <div class="why3__row-line"></div>
        <div class="why3__row-content">
          <div class="why3__row-title">Built for Commercial.</div>
          <p class="why3__row-body">We're not a residential landscaper who occasionally takes on commercial jobs. Commercial projects are our primary work â€” our equipment, crews, and processes are built around that.</p>
        </div>
      </div>
    </div>

  </div>
</section>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     PROCESS â€” PROC3 Hybrid Split Timeline (Light)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<section class="proc3" id="process" aria-labelledby="proc3-heading">
  <div class="proc3__inner">

    <div class="proc3__left">
      <div class="proc3__left-rail"></div>
      <div class="proc3__left-wm" aria-hidden="true">04</div>
      <div class="proc3__left-content">
        <div class="eyebrow eyebrow--on-dark reveal">How We Work</div>
        <h2 id="proc3-heading" class="proc3__heading reveal reveal--d1">From first call to final grade.</h2>
        <p class="proc3__body reveal reveal--d2">A repeatable process that keeps your project moving â€” and keeps you informed at every step without chasing us.</p>
        <a href="#contact" class="btn-primary reveal reveal--d3" style="margin-top:8px;">
          Request a Site Assessment
          <svg class="icon-arr" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
        </a>
      </div>
    </div>

    <div class="proc3__thread reveal reveal--d1">
      <div class="proc3__connector" aria-hidden="true"></div>
      <div class="proc3__step">
        <div class="proc3__step-num">01</div>
        <div>
          <div class="proc3__step-title">Discovery Call</div>
          <p class="proc3__step-body">You speak directly with the owner. We discuss your project scope, timeline, site conditions, and access constraints. No forms, no call centres â€” straight answer, first call.</p>
        </div>
      </div>
      <div class="proc3__step">
        <div class="proc3__step-num">02</div>
        <div>
          <div class="proc3__step-title">Site Visit &amp; Assessment</div>
          <p class="proc3__step-body">We visit the site at no charge. We assess soil conditions, access, grade requirements, and underground utility proximity before quoting anything. No surprises later.</p>
        </div>
      </div>
      <div class="proc3__step">
        <div class="proc3__step-num">03</div>
        <div>
          <div class="proc3__step-title">Line-Item Quote</div>
          <p class="proc3__step-body">You receive a detailed, itemized written quote with locked scope. What we quote is what we deliver â€” no scope creep, no surprise addendums mid-project.</p>
        </div>
      </div>
      <div class="proc3__step">
        <div class="proc3__step-num">04</div>
        <div>
          <div class="proc3__step-title">Mobilization &amp; Execution</div>
          <p class="proc3__step-body">Typical mobilization within 5â€“10 business days of contract execution. Our crews arrive with the right machines for your site and complete work to grade spec, on time.</p>
        </div>
      </div>
    </div>

  </div>
</section>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     QUOTE BAND â€” Full bleed parallax (DSE)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<section class="quote-band" aria-label="Client testimonial pull quote">
  <div class="quote-band__bg" id="quote-bg">
    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=80"
         alt="Aerial view commercial construction site">
  </div>
  <div class="quote-band__overlay-l" aria-hidden="true"></div>
  <div class="quote-band__overlay-t" aria-hidden="true"></div>
  <div class="quote-band__overlay-b" aria-hidden="true"></div>
  <div class="quote-band__grain" aria-hidden="true"></div>
  <div class="quote-band__content">
    <div class="quote-band__rule reveal"></div>
    <blockquote class="quote-band__quote reveal">
      Ground Level showed up on time, kept the site clean, communicated every day, and hit grade within spec on a tight urban lot. We've moved all our Simcoe County site prep to them.
    </blockquote>
    <div class="quote-band__attr reveal reveal--d1">
      <div class="quote-band__attr-line"></div>
      <span class="quote-band__attr-name">Senior Project Manager â€” Commercial Developer, Barrie ON</span>
      <div class="quote-band__attr-line"></div>
    </div>
  </div>
</section>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     TESTIMONIALS â€” TST3 Pull Quote Grid (Light)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<section class="tst3" id="testimonials" aria-labelledby="tst3-heading">
  <div class="tst3__header">
    <div class="eyebrow reveal" style="justify-content:center;">Client Feedback</div>
    <h2 id="tst3-heading" class="tst3__heading reveal reveal--d1">What Project Managers Say</h2>
  </div>
  <div class="tst3__grid">

    <div class="tst3__card tst3__card--featured reveal">
      <div class="tst3__open-mark" aria-hidden="true">"</div>
      <div class="tst3__stars" aria-label="5 stars">
        <svg class="tst3__star" viewBox="0 0 20 20"><path d="M10 1l2.4 7.4H20l-6.2 4.5 2.4 7.4L10 16l-6.2 4.3 2.4-7.4L0 8.4h7.6z"/></svg>
        <svg class="tst3__star" viewBox="0 0 20 20"><path d="M10 1l2.4 7.4H20l-6.2 4.5 2.4 7.4L10 16l-6.2 4.3 2.4-7.4L0 8.4h7.6z"/></svg>
        <svg class="tst3__star" viewBox="0 0 20 20"><path d="M10 1l2.4 7.4H20l-6.2 4.5 2.4 7.4L10 16l-6.2 4.3 2.4-7.4L0 8.4h7.6z"/></svg>
        <svg class="tst3__star" viewBox="0 0 20 20"><path d="M10 1l2.4 7.4H20l-6.2 4.5 2.4 7.4L10 16l-6.2 4.3 2.4-7.4L0 8.4h7.6z"/></svg>
        <svg class="tst3__star" viewBox="0 0 20 20"><path d="M10 1l2.4 7.4H20l-6.2 4.5 2.4 7.4L10 16l-6.2 4.3 2.4-7.4L0 8.4h7.6z"/></svg>
      </div>
      <p class="tst3__quote">Hired GLC for a full commercial excavation and foundation prep on a tight downtown lot. They were the only crew that actually walked the site before quoting. Mobilized in 6 days and didn't lose a single workday to equipment issues.</p>
      <div class="tst3__divider"></div>
      <div class="tst3__name">James Kowalski</div>
      <div class="tst3__role">Site Superintendent â€” Innisfil Industrial Development</div>
    </div>

    <div class="tst3__card reveal reveal--d1">
      <div class="tst3__open-mark" aria-hidden="true">"</div>
      <div class="tst3__stars" aria-label="5 stars">
        <svg class="tst3__star" viewBox="0 0 20 20"><path d="M10 1l2.4 7.4H20l-6.2 4.5 2.4 7.4L10 16l-6.2 4.3 2.4-7.4L0 8.4h7.6z"/></svg>
        <svg class="tst3__star" viewBox="0 0 20 20"><path d="M10 1l2.4 7.4H20l-6.2 4.5 2.4 7.4L10 16l-6.2 4.3 2.4-7.4L0 8.4h7.6z"/></svg>
        <svg class="tst3__star" viewBox="0 0 20 20"><path d="M10 1l2.4 7.4H20l-6.2 4.5 2.4 7.4L10 16l-6.2 4.3 2.4-7.4L0 8.4h7.6z"/></svg>
        <svg class="tst3__star" viewBox="0 0 20 20"><path d="M10 1l2.4 7.4H20l-6.2 4.5 2.4 7.4L10 16l-6.2 4.3 2.4-7.4L0 8.4h7.6z"/></svg>
        <svg class="tst3__star" viewBox="0 0 20 20"><path d="M10 1l2.4 7.4H20l-6.2 4.5 2.4 7.4L10 16l-6.2 4.3 2.4-7.4L0 8.4h7.6z"/></svg>
      </div>
      <p class="tst3__quote">Our drainage installation was complicated â€” high water table, clay soil, restricted access. GLC scoped the solution in one visit and executed it without a single change order. That almost never happens.</p>
      <div class="tst3__divider"></div>
      <div class="tst3__name">Michelle Tran</div>
      <div class="tst3__role">Project Manager â€” Barrie Multi-Unit Residential</div>
    </div>

    <div class="tst3__card reveal reveal--d2">
      <div class="tst3__open-mark" aria-hidden="true">"</div>
      <div class="tst3__stars" aria-label="5 stars">
        <svg class="tst3__star" viewBox="0 0 20 20"><path d="M10 1l2.4 7.4H20l-6.2 4.5 2.4 7.4L10 16l-6.2 4.3 2.4-7.4L0 8.4h7.6z"/></svg>
        <svg class="tst3__star" viewBox="0 0 20 20"><path d="M10 1l2.4 7.4H20l-6.2 4.5 2.4 7.4L10 16l-6.2 4.3 2.4-7.4L0 8.4h7.6z"/></svg>
        <svg class="tst3__star" viewBox="0 0 20 20"><path d="M10 1l2.4 7.4H20l-6.2 4.5 2.4 7.4L10 16l-6.2 4.3 2.4-7.4L0 8.4h7.6z"/></svg>
        <svg class="tst3__star" viewBox="0 0 20 20"><path d="M10 1l2.4 7.4H20l-6.2 4.5 2.4 7.4L10 16l-6.2 4.3 2.4-7.4L0 8.4h7.6z"/></svg>
        <svg class="tst3__star" viewBox="0 0 20 20"><path d="M10 1l2.4 7.4H20l-6.2 4.5 2.4 7.4L10 16l-6.2 4.3 2.4-7.4L0 8.4h7.6z"/></svg>
      </div>
      <p class="tst3__quote">Three years, four projects. Same crew lead, same standard of work. GLC is the only excavation contractor in Simcoe County I'd put in a tender recommendation without hesitation.</p>
      <div class="tst3__divider"></div>
      <div class="tst3__name">Rob Castellan</div>
      <div class="tst3__role">Development Manager â€” Springwater Township</div>
    </div>

  </div>
</section>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     COVERAGE â€” Territory Band (DSE)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<section class="coverage" id="coverage" aria-labelledby="coverage-heading">
  <div class="coverage__rail" aria-hidden="true"></div>
  <div class="coverage__ghost" aria-hidden="true">SIMCOE</div>
  <div class="coverage__inner">
    <div>
      <div class="eyebrow eyebrow--on-dark reveal"><span>Where We Work</span></div>
      <h2 id="coverage-heading" class="coverage__heading reveal reveal--d1">Simcoe<br>County &amp;<br>Beyond.</h2>
      <p class="coverage__sub reveal reveal--d2">Based in Barrie â€” deployed across the full Simcoe County region for commercial and institutional projects.</p>
      <a href="#contact" class="btn-ghost reveal reveal--d3" style="margin-top:8px;">Check Your Area</a>
    </div>
    <div class="coverage__grid reveal reveal--d1">
      <div class="coverage__item"><div class="coverage__item-dot"></div><span class="coverage__item-name">Barrie</span></div>
      <div class="coverage__item"><div class="coverage__item-dot"></div><span class="coverage__item-name">Innisfil</span></div>
      <div class="coverage__item"><div class="coverage__item-dot"></div><span class="coverage__item-name">Springwater</span></div>
      <div class="coverage__item"><div class="coverage__item-dot"></div><span class="coverage__item-name">Midhurst</span></div>
      <div class="coverage__item"><div class="coverage__item-dot"></div><span class="coverage__item-name">Oro-Medonte</span></div>
      <div class="coverage__item"><div class="coverage__item-dot"></div><span class="coverage__item-name">Bradford</span></div>
      <div class="coverage__item"><div class="coverage__item-dot"></div><span class="coverage__item-name">Essa Township</span></div>
      <div class="coverage__item"><div class="coverage__item-dot"></div><span class="coverage__item-name">Angus</span></div>
      <div class="coverage__item"><div class="coverage__item-dot"></div><span class="coverage__item-name">New Tecumseth</span></div>
      <div class="coverage__item"><div class="coverage__item-dot"></div><span class="coverage__item-name">Collingwood</span></div>
      <div class="coverage__item"><div class="coverage__item-dot"></div><span class="coverage__item-name">Wasaga Beach</span></div>
      <div class="coverage__item"><div class="coverage__item-dot"></div><span class="coverage__item-name">+ Surrounding Areas</span></div>
    </div>
  </div>
</section>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     CONTACT STRIP â€” Light (separates two DSE sections)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<section class="contact-strip" id="contact" aria-labelledby="contact-heading">
  <div class="contact-strip__inner">
    <div class="contact-strip__copy">
      <div class="eyebrow reveal">Ready to Start</div>
      <h2 id="contact-heading" class="contact-strip__heading reveal reveal--d1">
        Let's Build <span>Something</span> Lasting.
      </h2>
      <p class="contact-strip__sub reveal reveal--d2">
        Site assessment included at no charge. Line-item quote within 48 hours. Talk directly to the owner from call one.
      </p>
    </div>
    <div class="contact-strip__actions reveal reveal--d1">
      <div>
        <div class="contact-strip__phone-lbl">Call Us Directly</div>
        <a href="tel:2499892233" class="contact-strip__phone">249.989.2233</a>
      </div>
      <a href="mailto:info@groundlevelcontracting.ca" class="btn-ghost btn-ghost--dark" style="margin-top:20px;">
        <svg style="width:13px;height:13px;fill:none;stroke:currentColor;stroke-width:1.5;flex-shrink:0" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        Send an Email
      </a>
    </div>
  </div>
</section>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     CTA FINAL â€” glc-cta-final-v2 (Full bleed, crown jewel DSE)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<section class="cta-final" id="cta-final" aria-labelledby="cta-final-heading">

  <div class="cta-final__bg">
    <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
         alt="GLC excavator fleet on commercial site Barrie Ontario">
  </div>
  <div class="cta-final__overlay-l" aria-hidden="true"></div>
  <div class="cta-final__overlay-t" aria-hidden="true"></div>
  <div class="cta-final__overlay-b" aria-hidden="true"></div>
  <div class="cta-final__grain" aria-hidden="true"></div>

  <div class="cta-final__content">

    <div class="cta-final__top">
      <div class="cta-final__eyebrow">
        <div class="cta-final__eyebrow-dash"></div>
        <span class="cta-final__eyebrow-txt">Ready to Break Ground</span>
      </div>
      <div>
        <div class="cta-final__hl cta-final__hl--1"><span>Let's</span></div>
        <div class="cta-final__hl cta-final__hl--2"><span id="cta-final-heading">Build</span></div>
        <div class="cta-final__hl cta-final__hl--3"><span>Something.</span></div>
      </div>
    </div>

    <div class="cta-final__mid">
      <p class="cta-final__caption">
        Contact <strong>Barrie's commercial contracting team</strong> for a site assessment and written quote. No call centres. No runaround. Straight to the owner.
      </p>
    </div>

    <div class="cta-final__bottom">
      <div class="cta-final__phone-block">
        <span class="cta-final__phone-lbl">Call Us Directly</span>
        <a href="tel:2499892233" class="cta-final__phone">249.989.2233</a>
      </div>
      <div class="cta-final__trust">
        <div class="cta-final__trust-item"><div class="cta-final__trust-dot"></div>Free Site Assessment</div>
        <div class="cta-final__trust-item"><div class="cta-final__trust-dot"></div>Line-Item Quote</div>
        <div class="cta-final__trust-item"><div class="cta-final__trust-dot"></div>No Obligation</div>
      </div>
    </div>

  </div>

  <div class="cta-final__bar">
    <a class="cta-final__bar-main" href="tel:2499892233" id="cta-bar">
      <span class="cta-final__bar-lbl">Call Now â€” Talk Directly to the Owner â€” 249.989.2233</span>
      <div class="cta-final__bar-right">
        <div class="cta-final__bar-line"></div>
        <div class="cta-final__bar-icon">
          <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
    </a>
    <a class="cta-final__bar-sec" href="mailto:info@groundlevelcontracting.ca">
      <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      <span class="cta-final__bar-sec-txt">Email Us</span>
    </a>
  </div>

</section>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     FOOTER â€” Brand Grid + Legal (DSE)
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<footer class="footer">
  <div class="footer__rail" aria-hidden="true"></div>
  <div class="footer__main">
    <div>
      <div class="footer__logo-row">
        <div class="footer__mark">GL</div>
        <div>
          <div class="footer__name">Ground Level</div>
          <div class="footer__name-sub">Contracting Inc.</div>
        </div>
      </div>
      <p class="footer__tagline">Built from the ground up â€” every project, every time.</p>
      <div class="footer__contact-item">
        <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        <a href="tel:2499892233">249.989.2233</a>
      </div>
      <div class="footer__contact-item">
        <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
        <span>Barrie, Ontario â€” Simcoe County</span>
      </div>
    </div>
    <div>
      <h3 class="footer__col-title">Services</h3>
      <ul class="footer__links">
        <li><a href="#">Excavation &amp; Site Prep</a></li>
        <li><a href="#">Foundations &amp; Civil</a></li>
        <li><a href="#">Drainage &amp; Hardscaping</a></li>
        <li><a href="#">Decks, Fences &amp; Structures</a></li>
        <li><a href="#">Commercial Snow Removal</a></li>
      </ul>
    </div>
    <div>
      <h3 class="footer__col-title">Company</h3>
      <ul class="footer__links">
        <li><a href="#">About GLC</a></li>
        <li><a href="#">Our Process</a></li>
        <li><a href="#">Project Gallery</a></li>
        <li><a href="#">Coverage Area</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div>
      <h3 class="footer__col-title">Service Area</h3>
      <ul class="footer__links">
        <li><a href="#">Barrie</a></li>
        <li><a href="#">Innisfil</a></li>
        <li><a href="#">Springwater &amp; Midhurst</a></li>
        <li><a href="#">Oro-Medonte</a></li>
        <li><a href="#">Bradford &amp; Essa</a></li>
        <li><a href="#">Angus &amp; New Tecumseth</a></li>
      </ul>
    </div>
  </div>
  <div class="footer__bar">
    <div class="footer__bar-inner">
      <p class="footer__copy">Â© 2025 <span>Ground Level Contracting Inc.</span> â€” All rights reserved.</p>
      <nav class="footer__legal" aria-label="Legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Accessibility</a>
      </nav>
    </div>
  </div>
</footer>


<!-- â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     JAVASCRIPT
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• -->
<script>
(function() {
  'use strict';

  /* â”€â”€ CURSOR â”€â”€ */
  const dot  = document.getElementById('dot');
  const ring = document.getElementById('ring');
  let mx=0, my=0, rx=0, ry=0;

  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });

  // Standard hover
  document.querySelectorAll('a, button, .stat-cell, .why3__row, .coverage__item, .ab3__cred').forEach(el => {
    el.addEventListener('mouseenter', () => { dot.classList.add('on'); ring.classList.add('on'); dot.classList.remove('bar'); });
    el.addEventListener('mouseleave', () => { dot.classList.remove('on'); ring.classList.remove('on'); });
  });

  // CTA bars get big dark dot
  ['hero-bar','cta-bar'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('mouseenter', () => { dot.classList.add('bar'); ring.classList.add('on'); });
      el.addEventListener('mouseleave', () => { dot.classList.remove('bar'); ring.classList.remove('on'); });
    }
  });

  (function loop() {
    dot.style.left = mx+'px'; dot.style.top = my+'px';
    rx += (mx-rx)*0.09; ry += (my-ry)*0.09;
    ring.style.left = rx+'px'; ring.style.top = ry+'px';
    requestAnimationFrame(loop);
  })();


  /* â”€â”€ HERO PARALLAX (image follows mouse) â”€â”€ */
  const heroEl   = document.getElementById('hero');
  const heroWrap = document.getElementById('hero-img-wrap');
  let px=0, py=0, nx=0, ny=0;
  if (heroEl && heroWrap) {
    heroEl.addEventListener('mousemove', e => {
      const r = heroEl.getBoundingClientRect();
      nx = ((e.clientX-r.left)/r.width  - 0.5) * -18;
      ny = ((e.clientY-r.top) /r.height - 0.5) * -10;
    });
    heroEl.addEventListener('mouseleave', () => { nx=0; ny=0; });
    (function parallax() {
      px += (nx-px)*0.055; py += (ny-py)*0.055;
      heroWrap.style.transform = 'translate('+px+'px,'+py+'px)';
      requestAnimationFrame(parallax);
    })();
  }


  /* â”€â”€ QUOTE BAND SCROLL PARALLAX â”€â”€ */
  const quoteBg = document.getElementById('quote-bg');
  function quoteParallax() {
    if (!quoteBg) return;
    const rect = quoteBg.parentElement.getBoundingClientRect();
    const diff = (rect.top + rect.height/2 - window.innerHeight/2) / window.innerHeight;
    quoteBg.style.transform = 'translateY('+(diff*44)+'px)';
  }
  window.addEventListener('scroll', quoteParallax, {passive:true});


  /* â”€â”€ SCROLL REVEAL â”€â”€ */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObs.observe(el));


  /* â”€â”€ CTA FINAL: trigger scroll-based entrance animations â”€â”€ */
  const ctaFinal = document.querySelector('.cta-final');
  if (ctaFinal) {
    const ctaObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { ctaFinal.classList.add('in-view'); ctaObs.unobserve(ctaFinal); }
      });
    }, { threshold: 0.15 });
    ctaObs.observe(ctaFinal);
  }


  /* â”€â”€ COUNT-UP STATS (ST3) â”€â”€ */
  function animateCount(el, target, duration) {
    const suffix = el.querySelector('span') ? el.querySelector('span').outerHTML : '';
    let start = null;
    const step = ts => {
      if (!start) start = ts;
      const progress = Math.min((ts-start)/duration, 1);
      const eased = 1 - Math.pow(1-progress, 3);
      el.innerHTML = Math.floor(eased*target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.innerHTML = target + suffix;
    };
    requestAnimationFrame(step);
  }
  const statNums = document.querySelectorAll('.stat-cell__num[data-target]');
  const countObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCount(e.target, parseInt(e.target.dataset.target), 1800);
        countObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => countObs.observe(el));


  /* â”€â”€ TAB CONTAINER (STC1) â”€â”€ */
  const tabs   = document.querySelectorAll('.stc1__tab');
  const panels = document.querySelectorAll('.stc1__panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.dataset.tab);
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      tab.setAttribute('aria-selected','true');
      if (panels[idx]) panels[idx].classList.add('active');
    });
  });


  /* â”€â”€ HEADER SCROLL â”€â”€ */
  const header = document.getElementById('gl-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  }, {passive:true});


  /* â”€â”€ SMOOTH ANCHOR SCROLL â”€â”€ */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); }
    });
  });

})();
</script>

</body>
</html>

`

## Verbatim Appendix - Doc 1
Doc 1 was provided as chat-pasted content in this run (not as a local file path).
Use the conversation payload as the exact Doc 1 source block.
