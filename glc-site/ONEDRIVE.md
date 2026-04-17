# OneDrive and Next.js builds (`glc-site/.next`)

OneDrive can sync, lock, or partially-copy files under `.next` while Webpack is writing chunks, which leads to errors like `Cannot find module './611.js'` or **runtime** `TypeError: __webpack_modules__[moduleId] is not a function` (corrupted webpack module map). Dev webpack cache is redirected to the OS temp folder via `next.config.ts` to reduce this; still run `npm run clean` after errors.

## What works reliably

1. **Move the whole repo** to a path that OneDrive does not sync, for example:
   - `C:\dev\htnl-attempts\`
   - `D:\projects\...`

2. **Stop OneDrive from backing up Desktop** (if that is what syncs this folder): OneDrive tray icon → **Help & Settings** → **Settings** → **Backup** → **Manage backup** → turn off **Desktop** (only if you understand you are changing backup scope).

Consumer OneDrive does **not** offer “exclude this subfolder only” inside a synced tree the way some sync tools do.

## Optional: build folder outside OneDrive (junction)

If you must keep the repo under OneDrive, you can redirect `.next` to a local folder (run **Command Prompt or PowerShell as Administrator** from `glc-site` after `npm run clean`):

```cmd
rmdir /s /q .next
mklink /J .next %LOCALAPPDATA%\glc-site-next-cache
```

Then run `npm run dev` as usual. The real files live under `%LOCALAPPDATA%\glc-site-next-cache`, which OneDrive typically does not touch.

To undo: delete the junction `rmdir .next`, then run `npm run clean` or `npm run dev` to recreate a normal `.next` folder.

## After moving cache or fixing sync

From the **repository root** (parent of `glc-site`):

```bash
npm run clean
npm run dev
```

If chunks still go missing, delete `glc-site/node_modules/.cache` if it exists, then `npm run clean` again.
