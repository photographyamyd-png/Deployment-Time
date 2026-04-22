# Stats section — ST3 “Dark Editorial Counter Band”

Canonical implementation in the Next app: `glc-site/src/components/sections/stats-section.tsx`, cell animation in `glc-site/src/components/ui/stat-cell-animated.tsx`, styles in `glc-site/src/styles/glc-base.css` (search for `STATS — v3 Dark Editorial`).

## Layer stack (bottom → top)

1. **`#stats`** — Full-bleed section. Background `var(--charcoal-deep)` (#1E1C1A). `position: relative`, `overflow: hidden`.
2. **`#stats::before`** — Blueprint grid texture: two `repeating-linear-gradient` layers at 80px intervals, white lines at ~1.2% opacity. `inset: 0`, `pointer-events: none`.
3. **`.st3__top-rail`** — 3px-tall accent rail. `linear-gradient(90deg, var(--yellow-core) → rgba(242,183,5,0.12) at 45% → transparent)`. `z-index: 2` so it sits above the texture.
4. **`.st3__inner`** — Flex row: side label + grid. `z-index: 1`, `align-items: stretch`.
5. **`.st3__side-label`** — Fixed width 56px, vertical “Performance” label, right border `1px solid rgba(255,255,255,0.06)`.
6. **`.st3__grid`** — `grid-template-columns: repeat(4, 1fr)`, `flex: 1`.
7. **`.stat-cell`** (each cell is a `.reveal` + `.stat-cell`) — Padding `56px 32px`, vertical dividers, hover lift via background and bottom yellow bar animation.

## Typography

| Element | Font | Size | Weight | Other |
|--------|------|------|--------|--------|
| Side label | `--font-body` (Plus Jakarta Sans) | 9px | 800 | `letter-spacing: 0.22em`, uppercase, `writing-mode: vertical-rl`, rotated 180deg |
| Number | `--font-display` (Oswald) | `clamp(52px, 5vw, 80px)` | 700 | `line-height: 1`, `letter-spacing: -0.04em`, white |
| Suffix (+, %, etc.) | (nested span) | inherits | — | `var(--yellow-core)` |
| Label | body | 10px | 800 | `letter-spacing: 0.18em`, uppercase, `rgba(255,255,255,0.45)`, `margin-top: 12px` |
| Subline | body | 12px | 500 | `rgba(255,255,255,0.25)`, `margin-top: 5px` |

## Spacing and rhythm

- Top rail: **3px** height (full viewport width).
- Stat cell padding: **56px** vertical, **32px** horizontal (tablet: 48/24, mobile: 40/16).
- Label offset from number: **12px**; subline from label: **5px**.
- Side label column: **56px** wide, **20px** horizontal padding inside.
- Motion: hover background transition **0.3s** `var(--ease-expo)`; bottom bar **0.5s** `var(--ease-expo)`, `scaleX` from left.

## Interaction

- **Hover (desktop):** Cell background `rgba(255,255,255,0.025)`; `::after` 2px yellow bar scales from 0 to full width.
- **Scroll (React):** `StatCellAnimated` uses `IntersectionObserver` (threshold 0.5) to count up over ~1.8s with cubic ease-out; respects `prefers-reduced-motion`. Wrapper uses `.reveal` + `.reveal.visible` from `use-reveal`.

## Responsive

- **≤1024px:** `.st3__side-label` hidden; grid **2×2**.
- **≤640px:** Tighter cell padding; number `clamp(44px, 11vw, 60px)`.

## Sample content (home.json)

Four cells: years (15+), projects (500+), coverage (4 Areas), satisfaction (100%). See `glc-site/src/content/pages/home.json` under `"type": "stats"`.

## Cascade warning (production CSS)

`glc-base.css` contains a **second** `#stats` block later in the file (`STATS — Display-Scale Typography (v2)`) that sets white background and replaces several `.stat-cell` rules. If the live page does not match this dark ST3 spec, check which `#stats` / `.stat-cell` rules win in the cascade and remove or scope the duplicate block.
