import type { HomePageContent } from "@/content/types";
import home from "@/content/pages/home.json";
import navigation from "@/content/navigation.json";
import type { NavigationConfig } from "@/content/types";
import type { Metadata } from "next";
import site from "@/content/site.json";
import type { SiteConfig } from "@/content/types";
import { canonicalUrl, pageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";
import { orderHomeSections } from "@/lib/home-section-order";
import { SectionRenderer } from "@/components/sections/section-renderer";

const homeContent = home as HomePageContent;
const navData = navigation as NavigationConfig;
const siteData = site as SiteConfig;

const homeSeo = pageMetadata({
  title: "Ground Level Contracting | Barrie & Simcoe County Contractor",
  description:
    "Civil contractor in Barrie & Simcoe County: excavation, foundations, drainage, hardscaping & commercial snow. Licensed, insured. Free estimates.",
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

/** Section order: `orderHomeSections` from `@/lib/home-section-order` (see audit matrix + plan methodology). */

export default function HomePage() {
  const sections = orderHomeSections(homeContent.sections);

  return (
    <main id="main-content">
      <SectionRenderer sections={sections} megaCards={navData.megaMenu.cards} />
    </main>
  );
}
