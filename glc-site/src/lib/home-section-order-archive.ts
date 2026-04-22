import type { HomePageContent, HomeSectionBlock } from "@/content/types";

/** Pre-streamline homepage sequence (hero → marquee → … → ctaBand). For sandbox archive only. */
export const HOME_SECTION_ORDER_PRE_STREAMLINE: HomeSectionBlock["type"][] = [
  "hero",
  "marquee",
  "services",
  "about",
  "stats",
  "why",
  "parallaxBand",
  "testimonials",
  "coverage",
  "ctaBand",
];

export function orderHomeSectionsPreStreamline(
  sections: HomePageContent["sections"],
): HomePageContent["sections"] {
  const byType = new Map(sections.map((s) => [s.type, s]));
  return HOME_SECTION_ORDER_PRE_STREAMLINE.map((t) => byType.get(t)).filter(
    Boolean,
  ) as HomePageContent["sections"];
}
