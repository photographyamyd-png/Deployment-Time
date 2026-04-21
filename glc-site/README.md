# GLC Site — Next.js application

This folder is the **only** production web app. The repo root `package.json` delegates `npm run dev|build|start|lint` here.

## Commands (from repo root)

```bash
npm run dev      # http://127.0.0.1:3040/ — GLC dev port (prefer 127.0.0.1 over localhost on Windows)
npm run build
npm run start
npm run lint
```

If dev **stops loading** after edits: `npm run dev:fresh` (from `glc-site/`) or `npm run dev:turbo` — see `.cursorrules` / `PAGE-COMPLIANCE-MATRIX.md` §0.

Or from **`glc-site/`**:

```bash
npm run dev
```

## Static assets

Place files in **`public/`**. They are served from the site root:

- `public/images/ground-level-logo.png` → `https://yoursite.com/images/ground-level-logo.png`

## Deploy

See **[../DEPLOYMENT.md](../DEPLOYMENT.md)** in the repository root.
