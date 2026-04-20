# Rules snapshot (Phase 5 — heuristic)

Generated: 2026-04-20T18:48:02.859Z

These checks approximate [.cursorrules](.cursorrules) Part 8. **Every hit needs human review** (context may justify the exception).

## Summary

| Check | Count | Notes |
|-------|-------|-------|
| `border-radius` not `0` / not `50%` in glc-base.css | **1** | Rule 02 — zero radius except decorative circles |
| `font-family` not using `var(--font-*)` in glc-base.css | **3** | Rule 03 — token stacks |
| Hex tokens in `.ts` / `.tsx` under app + components | **0** | Prefer `var(--*)` in styles; some may be SVG/content |

## border-radius samples (first 40)

- L2962: `border-radius: 2px;`

## font-family samples (first 25)

- L19877: `font-family: ui-monospace, "Cascadia Code", monospace;`
- L20555: `font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;`
- L20800: `font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;`

## TSX hex samples (first 35)

_None._
