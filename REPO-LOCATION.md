# Canonical repo location

This copy of the project lives at:

**`C:\Users\hutch\dev\htnl-attempts`**

It was copied from the former OneDrive Desktop path so Next.js / Webpack builds are not corrupted by sync. **Git history and remotes are unchanged.**

## Day-to-day commands

From this folder (repo root):

```bash
npm install          # only needed after clone or dependency changes; app deps live in glc-site/
cd glc-site && npm install
npm run dev          # http://localhost:3040 (see glc-site/package.json)
npm run build
npm run lint
```

## Cursor / IDE

Open the workspace folder: **`C:\Users\hutch\dev\htnl-attempts`** (not the old Desktop path).

## After you switch to this folder

1. Close any project still opened from `…\OneDrive\Desktop\htnl attempts`.
2. Optionally delete or archive the old folder once you confirm nothing important remains only there (compare `git status` in both if needed).

## Paths in the repo

There are **no hardcoded absolute paths** to the old location. Content, scripts, and `npm` scripts use relative paths only.
