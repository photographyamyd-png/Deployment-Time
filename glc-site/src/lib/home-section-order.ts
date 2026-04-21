import type { HomePageContent, HomeSectionBlock } from "@/content/types";

/** Same sequence as the live homepage (`app/page.tsx`). */
/** Homepage omits `ctaBand` (single closing band — see PAGE-COMPLIANCE-MATRIX). */
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
  "contactStrip",
];

export function orderHomeSections(
  sections: HomePageContent["sections"],
): HomePageContent["sections"] {
  const byType = new Map(sections.map((s) => [s.type, s]));
  return HOME_SECTION_ORDER.map((t) => byType.get(t)).filter(Boolean) as HomePageContent["sections"];
}
