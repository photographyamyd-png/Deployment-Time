# Responsive sweep checklist (Phase 4)

Per **route** (or template once per type), check at widths **1200**, **1024**, **768**, **640**, **390** px.

- [ ] Header: utility + nav + mega — overlap, clipping, z-index
- [ ] No unintended horizontal scroll (body)
- [ ] Card grids: 3 / 2 / 1 column expectation vs actual
- [ ] `white-space: nowrap` labels — truncation or overflow
- [ ] Mobile drawer: open/close, focus trap sanity
- [ ] Hero / service bar: tile balance, scroll rail on small screens

Record failures as new rows in `ISSUE-MATRIX.md`.

**Default method:** manual DevTools responsive mode. Optional later: Playwright screenshots.
