# Drainage & hardscaping hub — image asset checklist

Use this when exporting or commissioning photography. All paths are relative to the **`glc-site/`** app (Next.js serves files from `glc-site/public/` at the site root).

**After files land:** point the listed **constants** (or inline placeholder) at `/images/...` URLs. Local files do not need `remotePatterns` in `glc-site/next.config.ts`; only remote hosts (e.g. Unsplash) do.

---

## Folder convention (recommended)

Create:

```text
glc-site/public/images/services/drainage-hardscaping/
```

Optional subfolders: `hero/`, `overview/`, `tabs/`, `why/`, `coverage/`, `og/`

---

## Master table (slot → file on disk → code location)

| # | Slot (page order) | Suggested filename(s) | Target size / ratio | Update in code |
|---|-------------------|------------------------|---------------------|----------------|
| 1 | **Open Graph** (link previews) | `glc-site/public/images/og/drainage-hardscaping-barrie.jpg` (or `.webp` if you change metadata) | **1200 × 630** px; safe zone center | `glc-site/src/app/services/drainage-hardscaping/page.tsx` → `openGraph.images[0].url` (today expects `.jpg` under `/images/og/`) |
| 2 | **Hero** (large masked photo + BG) | `…/drainage-hardscaping/hero-wide.webp` (+ optional `.jpg` fallback) | **~1920 × 1080** min; wide 16:9; subject right-weighted | `DRAINAGE_HUB_HERO_IMAGE` in `glc-site/src/content/drainage-hardscaping-page.ts` |
| 3 | **Hero alt** (screen readers / SEO) | — | — | Same file: `DRAINAGE_HUB_HERO.imageAlt` in `drainage-hardscaping-page.ts` |
| 4 | **Overview** (`ab3` editorial photo) | `…/drainage-hardscaping/overview-integrated-outdoor.webp` | **~1600 × 1200** or 4:3; crop safe for ~45vw column | `DRAINAGE_HUB_OVERVIEW_IMAGE` + `DRAINAGE_HUB_OVERVIEW_IMAGE_ALT` in `drainage-hardscaping-page.ts` |
| 5 | **Scope band figure** (single static image) | `…/drainage-hardscaping/scope-feature-foundation-or-integrated.webp` | **~1400 × 1000**; works at ~40vw | **`glc-site/src/content/drainage-hub-capability-tabs.ts`** → first tab only: `DRAINAGE_HUB_CAPABILITY_TABS[0].imageSrc` and `.imageAlt` (`drainage-hub-scope.tsx` reads tab **index 0** always) |
| 6a | **Capabilities tab 1** — Foundation drain tile | `…/drainage-hardscaping/tab-foundation-drain-tile.webp` | **~1200 × 900** min | `drainage-hub-capability-tabs.ts` → tab `id: "foundation-drain-tile"` → `imageSrc`, `imageAlt` |
| 6b | **Capabilities tab 2** — Site drainage design | `…/drainage-hardscaping/tab-site-drainage-design.webp` | same | tab `id: "site-drainage-design"` |
| 6c | **Capabilities tab 3** — Retaining walls | `…/drainage-hardscaping/tab-retaining-walls.webp` | same | tab `id: "retaining-walls"` |
| 6d | **Capabilities tab 4** — Patios & driveways | `…/drainage-hardscaping/tab-patios-driveways.webp` | same | tab `id: "patios-driveways-steps"` |
| 6e | **Capabilities tab 5** — Hardscape integration | `…/drainage-hardscaping/tab-hardscape-integration.webp` | same | tab `id: "hardscape-integration"` |
| 7 | **Why / process** (small capped frame) | `…/drainage-hardscaping/why-process-detail.webp` | **~1200 × 800**; detail reads when cropped small | `DRAINAGE_HUB_WHY_IMAGE` + `DRAINAGE_HUB_WHY_IMAGE_ALT` (+ caption `DRAINAGE_HUB_WHY_FIG_CAPTION`) in `drainage-hardscaping-page.ts` |
| 8 | **Coverage “map”** | `…/drainage-hardscaping/coverage-simcoe-service-area.webp` (or `.svg`) | **~1200 × 900** or vector; must read as **territory** | `MAP_PLACEHOLDER` in `glc-site/src/components/services/drainage-hardscaping/drainage-hub-coverage.tsx` (consider moving to `drainage-hardscaping-page.ts` next to `DRAINAGE_HUB_COVERAGE_MAP_ALT`) |

---

## Example constant swap (local URL)

From:

```ts
export const DRAINAGE_HUB_HERO_IMAGE =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80&auto=format";
```

To:

```ts
export const DRAINAGE_HUB_HERO_IMAGE =
  "/images/services/drainage-hardscaping/hero-wide.webp";
```

Repeat the same pattern for every `imageSrc` / `DRAINAGE_HUB_*_IMAGE` you replace.

---

## Deep panel “figures” rows (shot list only today)

`interactive-capabilities.tsx` renders `kind: "figures"` as **caption placeholders** (no image files yet). When you add real photos, each `alts[]` string in `drainage-hub-capability-tabs.ts` is the intended **subject + SEO phrase** for a future image.

**Suggested future filenames** (pair in order with each tab’s `figures` blocks):

- Tab **foundation-drain-tile**: `figure-foundation-01.webp`, `figure-foundation-02.webp`, … aligned to each `alts` entry in that tab’s blocks.
- Repeat per tab (`site-drainage-design`, `retaining-walls`, etc.).

Implementing that is a **code + content** follow-up (extend the tab type with `imageSrc` per figure or a shared gallery array).

---

## Export pipeline (quick rules)

1. **Format:** WebP (or AVIF if you standardize decoding targets); keep **hero** under ~300–500 KB if possible without mush.
2. **Naming:** lowercase, hyphens, no spaces; include `barrie` or `simcoe` only when the photo is **actually** from that job or generic regional marketing (avoid false locality).
3. **Color:** Light grade consistency across the tab set reduces visible “stock hop” when users switch tabs.
4. **Uniqueness:** Do **not** reuse the same file for **hero** and **why** (current placeholders duplicate one Unsplash ID — replace with two distinct scenes).
5. **OG image:** Confirm the file exists at `glc-site/public/images/og/drainage-hardscaping-barrie.jpg` or update `page.tsx` to match your real extension/path.

---

## `sizes` hints (already in components)

| Component | `sizes` (approximate intent) |
|-----------|-----------------------------|
| Hero | `(max-width: 1024px) 100vw, 62vw` (check `drainage-hub-hero-v2.tsx` if you change layout) |
| Overview | `(max-width: 1024px) 100vw, 45vw` |
| Scope figure | `(max-width: 900px) 100vw, 40vw` |
| Capabilities panel | `(max-width: 900px) 100vw, 62vw` |
| Why / process | `(max-width: 1024px) 100vw, 62vw` |
| Coverage | `(max-width: 900px) 100vw, 44vw` |

If you change breakpoints in CSS, revisit these strings so Next serves the right srcset width.

---

## One-line QA before publish

- [ ] Hero, overview, why, and each tab use **different** files where intent differs.
- [ ] Every `imageAlt` matches what is **visible** (no “Barrie” in alt if the frame is not Barrie-specific).
- [ ] OG image opens at 1200×630 and reads at **phone thumbnail** size.
- [ ] Scope figure still makes sense as “first service” or swap tab-0 image to a deliberately **integrated** site shot.
