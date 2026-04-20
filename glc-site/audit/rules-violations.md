# Path B — rules snapshot (2026-04-20)

Static checks against `.cursorrules` Part 8 (automated where noted).

| Check | Result |
|-------|--------|
| Hex color literals in `src/**/*.tsx` | **None found** (grep `#` + 6 hex in TSX). |
| `border-radius` in TSX `style=` | Not exhaustively scanned; GLC uses `var(--r)` (0) in CSS. |
| Section shells using raw `px` padding | Present in legacy blocks; new work uses `var(--section-v)` / `clamp` where added. |

**Note:** `glc-base.css` contains many historical `rgba(...)` scrims and a few non-token grays in older blocks; remediation is incremental. New rules added in this audit use only `var(--*)` and documented `rgba(255,...)` for dark-surface prose.
