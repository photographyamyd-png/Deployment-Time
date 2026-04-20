# Responsive sweep (automated)

Generated: 2026-04-20T19:38:08.371Z

Playwright: `npm run audit:responsive`. Screenshots: `audit/screenshots/` (gitignored). Raw: [`responsive-failures.json`](responsive-failures.json).

## Route × width

| Route | 1200 | 1024 | 768 | 640 | 390 |
|-------|------|------|------|------|------|
| / | ✓ | ✓ | ✓ | ✓ | ✓ |
| /about | ✓ | ✓ | ✓ | ✓ | ✓ |
| /company | ✓ | ✓ | ✓ | ✓ | ✓ |
| /contact | ✓ | ✓ | ✓ | ✓ | ✓ |
| /coverage | ✓ | ✓ | ✓ | ✓ | ✓ |
| /process | ✓ | ✓ | ✓ | ✓ | ✓ |
| /projects | ✓ | ✓ | ✓ | ✓ | ✓ |
| /services | ✓ | ✓ | ✓ | ✓ | ✓ |
| /privacy | ✓ | ✓ | ✓ | ✓ | ✓ |
| /terms | ✓ | ✓ | ✓ | ✓ | ✓ |
| /sandbox | ✓ | ✗ | ✗ | ✓ | ✗ |
| /services/drainage-hardscaping | ✗ | ✗ | ✗ | ✗ | ✗ |
| /services/excavation-site-preparation | ✓ | ✓ | ✗ | ✗ | ✗ |
| /services/foundations-civil-infrastructure | ✗ | ✗ | ✗ | ✗ | ✗ |
| /services/hauling-site-clearing-logistics | ✗ | ✗ | ✗ | ✗ | ✗ |
| /services/snow-removal | ✓ | ✓ | ✓ | ✓ | ✓ |
| /services/commercial-parking-lot-snow-plowing-barrie | ✓ | ✓ | ✓ | ✓ | ✓ |
| /locations/commercial-snow-removal-barrie-ontario | ✓ | ✓ | ✓ | ✓ | ✓ |

## Failures detail

### /sandbox @ 1024px

- **text-clipped** — `section.glc-feat-acc__section.container > div.glc-feat-acc__layout > div.reveal.reveal--delay-2.glc-feat-acc__panels-wrap > div.glc-feat-acc__panels-dse > div.glc-feat-acc__panels-stage > div.glc-feat-acc__panels-row > a.glc-feat-acc__panel.is-active > span.glc-feat-acc__panel-label` — scrollWidth 149 > clientWidth 112

### /sandbox @ 390px

- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body > main.sandbox > section.sandbox-feat-acc-scope.sandbox-feat-acc-scope--dark.gl-react-embed-section > div.glc-feat-acc.glc-feat-acc--tone-dark.glc-feat-acc--layout-mirror > section.glc-feat-acc__section.container > div.glc-feat-acc__motif` — right 500.6px > vw 390px (width 600.6px)
- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body > main.sandbox > section.sandbox-feat-acc-scope.sandbox-feat-acc-scope--light.gl-react-embed-section > div.glc-feat-acc.glc-feat-acc--tone-light.glc-feat-acc--layout-stack-top > section.glc-feat-acc__section.container > div.glc-feat-acc__motif` — right 500.6px > vw 390px (width 600.6px)
- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body > main.sandbox > section.sandbox-feat-acc-scope.sandbox-feat-acc-scope--medium.gl-react-embed-section > div.glc-feat-acc.glc-feat-acc--tone-medium > section.glc-feat-acc__section.container > div.glc-feat-acc__motif` — right 500.6px > vw 390px (width 600.6px)
- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body > main.sandbox > section.sandbox-feat-acc-scope.sandbox-feat-acc-scope--default.gl-react-embed-section > div.glc-feat-acc.glc-feat-acc--layout-mirror > section.glc-feat-acc__section.container > div.glc-feat-acc__motif` — right 500.6px > vw 390px (width 600.6px)
- **text-clipped** — `section.glc-feat-acc__section.container > div.glc-feat-acc__layout > div.reveal.reveal--delay-2.glc-feat-acc__panels-wrap > div.glc-feat-acc__panels-dse > div.glc-feat-acc__panels-stage > div.glc-feat-acc__panels-row > a.glc-feat-acc__panel.is-active > span.glc-feat-acc__panel-label` — scrollWidth 149 > clientWidth 77

### /sandbox @ 768px

- **element-right-overflow** — `section.glc-feat-acc__section.container > div.glc-feat-acc__layout > div.reveal.reveal--delay-2.glc-feat-acc__panels-wrap > div.glc-feat-acc__panels-dse > div.glc-feat-acc__panels-stage > div.glc-feat-acc__panels-row > a.glc-feat-acc__panel.is-active > img.glc-feat-acc__panel-img` — right 772.8px > vw 768px (width 81.6px)
- **element-right-overflow** — `div.glc-feat-acc.glc-feat-acc--tone-medium > section.glc-feat-acc__section.container > div.glc-feat-acc__layout > div.reveal.reveal--delay-2.glc-feat-acc__panels-wrap > div.glc-feat-acc__panels-dse > div.glc-feat-acc__panels-stage > div.glc-feat-acc__panels-row > a.glc-feat-acc__panel.is-active` — right 772px > vw 768px (width 80px)
- **element-right-overflow** — `section.glc-feat-acc__section.container > div.glc-feat-acc__layout > div.reveal.reveal--delay-2.glc-feat-acc__panels-wrap > div.glc-feat-acc__panels-dse > div.glc-feat-acc__panels-stage > div.glc-feat-acc__panels-row > a.glc-feat-acc__panel.is-active > div.glc-feat-acc__panel-scrim` — right 772px > vw 768px (width 80px)
- **text-clipped** — `section.glc-feat-acc__section.container > div.glc-feat-acc__layout > div.reveal.reveal--delay-2.glc-feat-acc__panels-wrap > div.glc-feat-acc__panels-dse > div.glc-feat-acc__panels-stage > div.glc-feat-acc__panels-row > a.glc-feat-acc__panel.is-active > span.glc-feat-acc__panel-label` — scrollWidth 149 > clientWidth 72

### /services/drainage-hardscaping @ 1024px

- **element-right-overflow** — `body.page-service > main.service-page--drainage-v2.glc-drain-hub > section.glc-drain-hub__overview > div.ab3__layout > div.ab3__media > div.ab3__photo.ab3__photo--has-img > div.glc-drain-hub__ab3-photo-parallax > img.ab3__photo-img.glc-drain-hub__ab3-photo-img--parallax` — right 1125.6px > vw 1024px (width 1227.2px)
- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main.service-page--drainage-v2.glc-drain-hub > section.glc-drain-hub__overview > div.ab3__layout > div.ab3__media > div.ab3__photo.ab3__photo--has-img > div.glc-drain-hub__ab3-photo-parallax` — right 1085.4px > vw 1024px (width 1146.9px)
- **element-right-overflow** — `body.page-service > main.service-page--drainage-v2.glc-drain-hub > section.glc-drain-hub__overview > div.ab3__layout > div.ab3__media > div.ab3__photo.ab3__photo--has-img > div.glc-drain-hub__ab3-photo-parallax > span.glc-drain-hub__ab3-photo-scrim` — right 1085.4px > vw 1024px (width 1146.9px)
- **element-right-overflow** — `body.page-service > main.service-page--drainage-v2.glc-drain-hub > div.glc-drain-hub__interactive > div.glc-drain-site-stc1.glc-drain-hub__stc1 > section.stc1 > div.stc1__panels > div.stc1__panel.active > div.stc1__panel-bg` — right 1044.5px > vw 1024px (width 1065px)

### /services/drainage-hardscaping @ 1200px

- **element-right-overflow** — `body.page-service > main.service-page--drainage-v2.glc-drain-hub > section.glc-drain-hub__overview > div.ab3__layout > div.ab3__media > div.ab3__photo.ab3__photo--has-img > div.glc-drain-hub__ab3-photo-parallax > img.ab3__photo-img.glc-drain-hub__ab3-photo-img--parallax` — right 1253.6px > vw 1200px (width 647.1px)
- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main.service-page--drainage-v2.glc-drain-hub > section.glc-drain-hub__overview > div.ab3__layout > div.ab3__media > div.ab3__photo.ab3__photo--has-img > div.glc-drain-hub__ab3-photo-parallax` — right 1232.4px > vw 1200px (width 604.8px)
- **element-right-overflow** — `body.page-service > main.service-page--drainage-v2.glc-drain-hub > section.glc-drain-hub__overview > div.ab3__layout > div.ab3__media > div.ab3__photo.ab3__photo--has-img > div.glc-drain-hub__ab3-photo-parallax > span.glc-drain-hub__ab3-photo-scrim` — right 1232.4px > vw 1200px (width 604.8px)
- **element-right-overflow** — `body.page-service > main.service-page--drainage-v2.glc-drain-hub > div.glc-drain-hub__interactive > div.glc-drain-site-stc1.glc-drain-hub__stc1 > section.stc1 > div.stc1__panels > div.stc1__panel.active > div.stc1__panel-bg` — right 1224px > vw 1200px (width 1248px)

### /services/drainage-hardscaping @ 390px

- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main.service-page--drainage-v2.glc-drain-hub > section.glc-drain-hub__jk.dse > div.cta3__diag.glc-drain-hub__proc3-diag` — right 459.6px > vw 390px (width 794.4px)
- **element-right-overflow** — `body.page-service > main.service-page--drainage-v2.glc-drain-hub > section.glc-drain-hub__overview > div.ab3__layout > div.ab3__media > div.ab3__photo.ab3__photo--has-img > div.glc-drain-hub__ab3-photo-parallax > img.ab3__photo-img.glc-drain-hub__ab3-photo-img--parallax` — right 428.7px > vw 390px (width 467.4px)
- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main.service-page--drainage-v2.glc-drain-hub > section.glc-drain-hub__overview > div.ab3__layout > div.ab3__media > div.ab3__photo.ab3__photo--has-img > div.glc-drain-hub__ab3-photo-parallax` — right 413.4px > vw 390px (width 436.8px)
- **element-right-overflow** — `body.page-service > main.service-page--drainage-v2.glc-drain-hub > section.glc-drain-hub__overview > div.ab3__layout > div.ab3__media > div.ab3__photo.ab3__photo--has-img > div.glc-drain-hub__ab3-photo-parallax > span.glc-drain-hub__ab3-photo-scrim` — right 413.4px > vw 390px (width 436.8px)
- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main.service-page--drainage-v2.glc-drain-hub > section.glc-drain-hub__overview > div.ab3__layout > div.ab3__media > div.ab3__chip` — right 402px > vw 390px (width 183px)
- **element-right-overflow** — `body.page-service > main.service-page--drainage-v2.glc-drain-hub > div.glc-drain-hub__interactive > div.glc-drain-site-stc1.glc-drain-hub__stc1 > section.stc1 > div.stc1__panels > div.stc1__panel.active > div.stc1__panel-bg` — right 397.8px > vw 390px (width 405.6px)
- **text-clipped** — `body.page-service > main.service-page--drainage-v2.glc-drain-hub > div.glc-drain-hub__interactive > section.glc-drain-hub__cap-detail-mirror > div.ab3__layout.glc-drain-hub__ab3-mirror > div.ab3__media > div.ab3__badge > span` — scrollWidth 62 > clientWidth 22

### /services/drainage-hardscaping @ 640px

- **element-right-overflow** — `body.page-service > main.service-page--drainage-v2.glc-drain-hub > section.glc-drain-hub__overview > div.ab3__layout > div.ab3__media > div.ab3__photo.ab3__photo--has-img > div.glc-drain-hub__ab3-photo-parallax > img.ab3__photo-img.glc-drain-hub__ab3-photo-img--parallax` — right 703.5px > vw 640px (width 767px)
- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main.service-page--drainage-v2.glc-drain-hub > section.glc-drain-hub__overview > div.ab3__layout > div.ab3__media > div.ab3__photo.ab3__photo--has-img > div.glc-drain-hub__ab3-photo-parallax` — right 678.4px > vw 640px (width 716.8px)
- **element-right-overflow** — `body.page-service > main.service-page--drainage-v2.glc-drain-hub > section.glc-drain-hub__overview > div.ab3__layout > div.ab3__media > div.ab3__photo.ab3__photo--has-img > div.glc-drain-hub__ab3-photo-parallax > span.glc-drain-hub__ab3-photo-scrim` — right 678.4px > vw 640px (width 716.8px)
- **element-right-overflow** — `body.page-service > main.service-page--drainage-v2.glc-drain-hub > div.glc-drain-hub__interactive > div.glc-drain-site-stc1.glc-drain-hub__stc1 > section.stc1 > div.stc1__panels > div.stc1__panel.active > div.stc1__panel-bg` — right 652.8px > vw 640px (width 665.6px)
- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main.service-page--drainage-v2.glc-drain-hub > section.glc-drain-hub__overview > div.ab3__layout > div.ab3__media > div.ab3__chip` — right 652px > vw 640px (width 183px)

### /services/drainage-hardscaping @ 768px

- **element-right-overflow** — `body.page-service > main.service-page--drainage-v2.glc-drain-hub > section.glc-drain-hub__overview > div.ab3__layout > div.ab3__media > div.ab3__photo.ab3__photo--has-img > div.glc-drain-hub__ab3-photo-parallax > img.ab3__photo-img.glc-drain-hub__ab3-photo-img--parallax` — right 844.2px > vw 768px (width 920.4px)
- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main.service-page--drainage-v2.glc-drain-hub > section.glc-drain-hub__overview > div.ab3__layout > div.ab3__media > div.ab3__photo.ab3__photo--has-img > div.glc-drain-hub__ab3-photo-parallax` — right 814.1px > vw 768px (width 860.2px)
- **element-right-overflow** — `body.page-service > main.service-page--drainage-v2.glc-drain-hub > section.glc-drain-hub__overview > div.ab3__layout > div.ab3__media > div.ab3__photo.ab3__photo--has-img > div.glc-drain-hub__ab3-photo-parallax > span.glc-drain-hub__ab3-photo-scrim` — right 814.1px > vw 768px (width 860.2px)
- **element-right-overflow** — `body.page-service > main.service-page--drainage-v2.glc-drain-hub > div.glc-drain-hub__interactive > div.glc-drain-site-stc1.glc-drain-hub__stc1 > section.stc1 > div.stc1__panels > div.stc1__panel.active > div.stc1__panel-bg` — right 783.4px > vw 768px (width 798.7px)
- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main.service-page--drainage-v2.glc-drain-hub > section.glc-drain-hub__overview > div.ab3__layout > div.ab3__media > div.ab3__chip` — right 780px > vw 768px (width 183px)

### /services/excavation-site-preparation @ 390px

- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main > section > div.ab3__layout > div.ab3__media > div.ab3__chip` — right 402px > vw 390px (width 190.2px)

### /services/excavation-site-preparation @ 640px

- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main > section > div.ab3__layout > div.ab3__media > div.ab3__chip` — right 652px > vw 640px (width 190.2px)

### /services/excavation-site-preparation @ 768px

- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main > section > div.ab3__layout > div.ab3__media > div.ab3__chip` — right 780px > vw 768px (width 190.2px)

### /services/foundations-civil-infrastructure @ 1024px

- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main > section > div.cta3__diag` — right 1439.8px > vw 1024px (width 2551.8px)

### /services/foundations-civil-infrastructure @ 1200px

- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main > section > div.cta3__diag` — right 1285.4px > vw 1200px (width 2186.9px)

### /services/foundations-civil-infrastructure @ 390px

- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main > section > div.cta3__diag` — right 1380.3px > vw 390px (width 2635.8px)

### /services/foundations-civil-infrastructure @ 640px

- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main > section > div.cta3__diag` — right 1385.9px > vw 640px (width 2567.1px)

### /services/foundations-civil-infrastructure @ 768px

- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main > section > div.cta3__diag` — right 1425.6px > vw 768px (width 2605.5px)

### /services/hauling-site-clearing-logistics @ 1024px

- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main > section > div.cta3__diag` — right 2093.5px > vw 1024px (width 3859.4px)

### /services/hauling-site-clearing-logistics @ 1200px

- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main > section > div.cta3__diag` — right 1978.3px > vw 1200px (width 3572.5px)

### /services/hauling-site-clearing-logistics @ 390px

- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main > section > div.cta3__diag` — right 2356.8px > vw 390px (width 4588.7px)

### /services/hauling-site-clearing-logistics @ 640px

- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main > section > div.cta3__diag` — right 2141px > vw 640px (width 4077.1px)

### /services/hauling-site-clearing-logistics @ 768px

- **element-right-overflow** — `html.__variable_4b3a9b.__variable_a11773.__variable_40cec9 > body.page-service > main > section > div.cta3__diag` — right 2160.4px > vw 768px (width 4075.1px)
