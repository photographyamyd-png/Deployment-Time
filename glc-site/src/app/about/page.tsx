import home from "@/content/pages/home.json";
import type { AboutProps, HomePageContent, ProcessProps } from "@/content/types";
import { AboutPageView } from "@/components/pages/about-page-view";
import { pageMetadata } from "@/lib/seo";
import site from "@/content/site.json";
import type { SiteConfig } from "@/content/types";
import { ROUTES } from "@/lib/routes";

const homeContent = home as HomePageContent;
const siteData = site as SiteConfig;
const aboutBlock = homeContent.sections.find((s) => s.type === "about");
const processBlock = homeContent.sections.find((s) => s.type === "process");
if (!aboutBlock || !processBlock) {
  throw new Error("About page requires `about` and `process` blocks in src/content/pages/home.json.");
}
const about = aboutBlock.props as AboutProps;
const process = processBlock.props as ProcessProps;

export const metadata = pageMetadata({
  title: `About | ${siteData.name}`,
  description:
    "How Ground Level runs commercial excavation, foundations & civil work across Barrie, Midland, Orillia & Simcoe County — crews, process & accountability.",
  path: ROUTES.about,
});

export default function AboutPage() {
  return <AboutPageView about={about} process={process} />;
}
