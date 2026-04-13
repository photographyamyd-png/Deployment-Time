# Section DNA

- **`approved-sections.json`** — Chat-approved registry: 15 section/component entries with `visualDna`, React paths, class prefixes, layer stacks, and cascade warnings. **Use this file for section refactors and new work** (easy to `@` in Cursor).

- **Source of truth in markdown:** The same object is embedded in **`DESIGN-SYSTEM.md` §5**. If you edit §5, refresh this JSON:

  ```bash
  node tools/extract-approved-sections.mjs
  ```

- **`catchall.json`** — Referenced in `_meta.sourceFile` when a broader merge workflow exists; if absent, treat `approved-sections.json` as current.
