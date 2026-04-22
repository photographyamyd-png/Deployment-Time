import type {
  HomeContactStripProps,
  HomePageContent,
  HomeSectionBlock,
  NavigationConfig,
  ServicesBandCta,
  SiteConfig,
} from "@/content/types";
import home from "@/content/pages/home.json";
import navigation from "@/content/navigation.json";
import type { Metadata } from "next";
import site from "@/content/site.json";
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

function homeServicesBandCta(content: HomePageContent, nav: NavigationConfig): ServicesBandCta | undefined {
  const hero = content.sections.find((s) => s.type === "hero");
  if (!hero) return undefined;
  return {
    quoteCta: hero.props.primaryCta,
    servicesViewAll: { label: nav.megaMenu.viewAllLabel, href: nav.megaMenu.viewAllHref },
  };
}

const HOME_CONTACT_STRIP_EXTRAS: Pick<HomeContactStripProps, "serviceAreaLine" | "surface"> = {
  serviceAreaLine:
    "Barrie · Midland · Orillia · Innisfil · Wasaga Beach · Angus · Springwater · Oro-Medonte · Collingwood · Bradford · Essa · Simcoe County",
  surface: "brand",
};

function applyHomeOnlyContactStrip(sections: HomeSectionBlock[]): HomeSectionBlock[] {
  return sections.map((s) => {
    if (s.type !== "contactStrip") return s;
    return {
      ...s,
      props: {
        ...s.props,
        ...HOME_CONTACT_STRIP_EXTRAS,
      },
    };
  });
}

export default function HomePage() {
  const sections = applyHomeOnlyContactStrip(orderHomeSections(homeContent.sections));
  const servicesBandCta = homeServicesBandCta(homeContent, navData);

  return (
    <main id="main-content">
      <SectionRenderer
        sections={sections}
        megaCards={navData.megaMenu.cards}
        servicesBandCta={servicesBandCta}
        servicesReferenceSplit
      />
    </main>
  );
}
