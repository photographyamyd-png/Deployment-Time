import home from "@/content/pages/home.json";
import type { HomePageContent } from "@/content/types";

const homeContent = home as HomePageContent;

export function getHomeSectionProps<T>(type: string): T {
  const section = homeContent.sections.find((item) => item.type === type);
  if (!section) {
    throw new Error(`Missing "${type}" in home content.`);
  }
  return section.props as T;
}
