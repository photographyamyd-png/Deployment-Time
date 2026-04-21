import type { HomePageContent, HomeSectionBlock } from "@/content/types";

/**
 * Same sequence as the live homepage (`app/page.tsx`).
 * Rules 4–5: one closing conversion zone — `contactStrip` is omitted here (kept in
 * `home.json` for `getHomeSectionProps('contactStrip')` on company, etc.).
 * Rule 1: `#coverage` (dark) → `ctaBand` (dark) is **D→D** until `fix-home-alternation`
 * (reorder or CSS-only commit, never mixed with this order).
 */
export const HOME_SECTION_ORDER: HomeSectionBlock["type"][] = [
  "hero",
  "marquee",
  "about",
  "stats",
  "services",
  "why",
  "process",
  "parallaxBand",
  "testimonials",
  "coverage",
  "ctaBand",
];

export function orderHomeSections(
  sections: HomePageContent["sections"],
): HomePageContent["sections"] {
  const byType = new Map(sections.map((s) => [s.type, s]));
  return HOME_SECTION_ORDER.map((t) => byType.get(t)).filter(Boolean) as HomePageContent["sections"];
}
