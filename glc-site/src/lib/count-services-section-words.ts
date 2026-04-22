import type { MegaMenuCard, ServicesSectionProps } from "@/content/types";

/**
 * Industrial Authority: tabbed services UI when narrative density exceeds this threshold.
 * Uses GLC content only (no Tailwind); merged with `.cursorrules` token system.
 */
export const SERVICES_INDUSTRIAL_TAB_WORD_THRESHOLD = 500;

/** Counts words in visible services band copy: headings, intro, specs, and all card blurbs. */
export function countServicesSectionWords(
  props: Pick<
    ServicesSectionProps,
    "eyebrow" | "headingLine1" | "headingLine2" | "intro" | "tagline" | "technicalSpecs"
  >,
  cards: MegaMenuCard[],
): number {
  const parts: string[] = [
    props.eyebrow,
    props.headingLine1,
    props.headingLine2,
    props.intro,
    props.tagline ?? "",
  ];
  for (const row of props.technicalSpecs ?? []) {
    parts.push(row.label, row.value);
  }
  for (const c of cards) {
    parts.push(c.title, c.description ?? "", c.gridDescription ?? "");
    if (Array.isArray(c.gridTitle)) {
      parts.push(...c.gridTitle);
    }
    if (c.subTags?.length) {
      parts.push(...c.subTags);
    }
  }
  const blob = parts.filter(Boolean).join(" ");
  if (!blob.trim()) return 0;
  return blob.trim().split(/\s+/).length;
}
