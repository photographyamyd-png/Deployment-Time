/**
 * Canonical local preview origin (Windows-friendly; avoids some localhost quirks).
 * Use in internal /sandbox/ copy only — production URLs come from ROUTES + canonicalUrl.
 */
export const GLC_DEV_PREVIEW_ORIGIN = "http://127.0.0.1:3040" as const;

/** Path must start with `/` (e.g. `/sandbox/`). */
export function glcDevPreviewUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${GLC_DEV_PREVIEW_ORIGIN}${normalized}`;
}
