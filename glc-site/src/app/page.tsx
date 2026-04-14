import type { HomePageContent } from "@/content/types";
import home from "@/content/pages/home.json";
import navigation from "@/content/navigation.json";
import type { NavigationConfig } from "@/content/types";
import type { Metadata } from "next";
import site from "@/content/site.json";
import type { SiteConfig } from "@/content/types";
import { canonicalUrl, pageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";

const homeContent = home as HomePageContent;
const navData = navigation as NavigationConfig;
const siteData = site as SiteConfig;

const homeSeo = pageMetadata({
  title: "Ground Level Contracting | Barrie & Simcoe County Contractor",
  description:
    "Full-service civil contractor in Barrie & Simcoe County. Excavation, foundations, drainage, hardscaping & commercial snow removal. Licensed, insured. Free estimates.",
  path: ROUTES.home,
  ogTitle: "Ground Level Contracting | Barrie's Civil & Site Services Contractor",
  ogDescription:
    "Excavation, foundations, civil infrastructure, drainage, hardscaping & commercial snow removal — serving Barrie, Orillia, Wasaga Beach, Innisfil & Simcoe County.",
});

export const metadata: Metadata = {
  ...homeSeo,
  openGraph: {
    ...homeSeo.openGraph,
    siteName: siteData.name,
    title: "Ground Level Contracting | Barrie's Civil & Site Services Contractor",
    type: "website",
    locale: "en_CA",
    url: canonicalUrl(ROUTES.home),
  },
};

/** Kept in `home.json` for service hub reuse; omitted on the homepage for a shorter scroll. */
const HOME_SECTION_SKIP = new Set<string>(["stats", "marquee", "parallaxBand"]);

export default async function HomePage() {
  const { SectionRenderer } = await import("@/components/sections/section-renderer");
  const sections = homeContent.sections.filter((s) => !HOME_SECTION_SKIP.has(s.type));

  return (
    <main id="main-content">
      <SectionRenderer sections={sections} megaCards={navData.megaMenu.cards} />
    </main>
  );
}
