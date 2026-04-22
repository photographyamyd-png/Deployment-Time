import type { HomePageContent, HomeSectionBlock } from "@/content/types";

/**
 * Live homepage (`app/page.tsx`) — streamlined sequence (2026).
 * Dark/light rhythm: hero (D) → about teaser (L) → services (L) → stats (D) → why (L) →
 * parallax (D) → testimonials (L) → contact strip (brand/yellow).
 *
 * Omitted from home (JSON retained for other routes / archives):
 * `marquee`, `process` (About page only), `coverage` (city line in contact strip), `ctaBand`.
 */
export const HOME_SECTION_ORDER: HomeSectionBlock["type"][] = [
  "hero",
  "about",
  "services",
  "stats",
  "why",
  "parallaxBand",
  "testimonials",
  "contactStrip",
];

export function orderHomeSections(
  sections: HomePageContent["sections"],
): HomePageContent["sections"] {
  const byType = new Map(sections.map((s) => [s.type, s]));
  return HOME_SECTION_ORDER.map((t) => byType.get(t)).filter(Boolean) as HomePageContent["sections"];
}
