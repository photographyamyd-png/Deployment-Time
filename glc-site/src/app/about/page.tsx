import home from "@/content/pages/home.json";
import type { AboutProps, HomePageContent } from "@/content/types";
import { AboutPageView } from "@/components/pages/about-page-view";
import { pageMetadata } from "@/lib/seo";
import site from "@/content/site.json";
import type { SiteConfig } from "@/content/types";
import { ROUTES } from "@/lib/routes";

const homeContent = home as HomePageContent;
const about = homeContent.sections.find((s) => s.type === "about")?.props as AboutProps;
const siteData = site as SiteConfig;

export const metadata = pageMetadata({
  title: `About | ${siteData.name}`,
  description:
    "How Ground Level runs commercial excavation, foundations & civil work across Barrie, Midland, Orillia & Simcoe County — crews, process & accountability.",
  path: ROUTES.about,
});

export default function AboutPage() {
  return <AboutPageView about={about} />;
}
