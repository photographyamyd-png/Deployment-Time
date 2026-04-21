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

## Troubleshooting (ERR -102 / connection refused)

Chrome/Edge **error -102** on **`http://localhost:3000/`** means nothing was listening on that port. This app’s default dev server binds to **3040**, not 3000.

- Use **`http://127.0.0.1:3040/`** after `npm run dev` (or `npm run dev:watch`).
- If you need port 3000 explicitly: `npm run dev:3000` → then `http://localhost:3000/`.
- Wait until the terminal shows **Ready** before the first load (first compile can take a bit).

## Static assets

Place files in **`public/`**. They are served from the site root:

- `public/images/ground-level-logo.png` → `https://yoursite.com/images/ground-level-logo.png`

## Deploy

See **[../DEPLOYMENT.md](../DEPLOYMENT.md)** in the repository root.
