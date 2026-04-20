import { SitePrepGradingFaqEditorial } from "@/components/services/site-prep-grading-faq-editorial";
import { SitePrepGradingGeoHub } from "@/components/services/site-prep-grading-geo-hub";
import { SitePrepGradingParallaxCta } from "@/components/services/site-prep-grading-parallax-cta";
import { SitePrepGradingSeoResearch } from "@/components/services/site-prep-grading-seo-research";
import { SitePrepGradingServiceCanon } from "@/components/services/site-prep-grading-service-canon";
import { SitePrepGradingTrustStrip } from "@/components/services/site-prep-grading-trust-strip";
import { ServiceInlineQuote } from "@/components/services/service-inline-quote";
import { JsonLdSitePrepGradingHub } from "@/components/seo/json-ld-site-prep-grading-hub";
import { ParallaxTypeBand } from "@/components/sections/parallax-type-band";
import { SectionRenderer } from "@/components/sections/section-renderer";
import hub from "@/content/pages/site-prep-grading-seo.json";
import home from "@/content/pages/home.json";
import navigation from "@/content/navigation.json";
import type {
  HomePageContent,
  HomeSectionBlock,
  NavigationConfig,
  SiteConfig,
} from "@/content/types";
import type { Metadata } from "next";
import site from "@/content/site.json";
import { pageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";
import { getSiteUrl } from "@/lib/site-url";
import { getServiceBySlug } from "@/lib/service-pages";

const siteData = site as SiteConfig;
const service = getServiceBySlug("site-preparation-grading")!;
const homeContent = structuredClone(home) as HomePageContent;
const navData = navigation as NavigationConfig;
const seo = hub.meta as { title: string; description: string };
const hubHero = hub.hero as {
  eyebrow: string;
  title: { line1: string; line2: string; line3: string; emphasizeLine: 1 | 2 | 3 };
  subheadline: string;
  lede: string;
  primaryCtaLabel: string;
  coverageTags: string[];
};

const hubParallax = hub as {
  parallaxBackgroundImage?: string;
  parallaxBand?: {
    eyebrow: string;
    title: string;
    subtitle?: string;
    image: string;
    imageAlt: string;
  };
};

function getHomeSection<T extends HomeSectionBlock["type"]>(
  type: T,
): Extract<HomeSectionBlock, { type: T }> | null {
  const section = homeContent.sections.find((s) => s.type === type);
  return section && section.type === type ? (section as Extract<HomeSectionBlock, { type: T }>) : null;
}

const hero = getHomeSection("hero");
if (hero) {
  hero.props.eyebrow = hubHero.eyebrow;
  hero.props.title = hubHero.title;
  hero.props.subheadline = hubHero.subheadline;
  hero.props.lede = hubHero.lede;
  hero.props.primaryCta = {
    label: hubHero.primaryCtaLabel,
    href: `tel:${siteData.telephone.replace(/\s/g, "")}`,
  };
  hero.props.secondaryCta = { label: "All services", href: ROUTES.services };
  hero.props.coverage = {
    label: "Service coverage",
    tags: hubHero.coverageTags,
  };
  if (hubParallax.parallaxBackgroundImage) {
    hero.props.parallaxBackgroundImage = hubParallax.parallaxBackgroundImage;
  }
}

const marquee = getHomeSection("marquee");
if (marquee) {
  marquee.props.items = [
    "Site preparation & grading",
    "Laser-level & sub-base compaction",
    "Barrie · Innisfil · Springwater · Simcoe County",
    "Final grade certificates",
    "Licensed & insured crews",
    "Free estimates",
    "Inspection-ready surfaces",
    "From concept to creation",
  ];
}

const about = getHomeSection("about");
if (about) {
  about.props.eyebrow = "Service overview";
  about.props.headingBefore = "Agile equipment. ";
  about.props.headingAccent = "Tight tolerances.";
  about.props.headingAfter = "";
  about.props.body =
    (service.hero.body && service.hero.body[0]) ||
    hubHero.lede;
  about.props.credentials = service.deliverables.slice(0, 4).map((item) => ({
    title: item.split(" ").slice(0, 2).join(" "),
    sub: item,
  }));
  about.props.cta = {
    label: hubHero.primaryCtaLabel,
    href: `tel:${siteData.telephone.replace(/\s/g, "")}`,
  };
}

const stats = getHomeSection("stats");
if (stats) {
  const third = stats.props.cells[2];
  if (third) {
    third.sub = "Barrie, Innisfil, Springwater, Essa & Simcoe County";
  }
}

function pickSections(types: readonly HomeSectionBlock["type"][]): HomePageContent["sections"] {
  return types
    .map((type) => homeContent.sections.find((section) => section.type === type))
    .filter(Boolean) as HomePageContent["sections"];
}

const sitePrepTopSections = pickSections(["hero", "about", "marquee"] as const);
const sitePrepStatsSections = pickSections(["stats"] as const);

const schemaSite: SiteConfig = { ...siteData, url: getSiteUrl() };

export const metadata: Metadata = pageMetadata({
  title: seo.title,
  description: seo.description,
  path: ROUTES.service("site-preparation-grading"),
});

export default function SitePreparationGradingPage() {
  const band = hubParallax.parallaxBand;

  return (
    <>
      <JsonLdSitePrepGradingHub site={schemaSite} />
      <main id="main-content">
        <SectionRenderer sections={sitePrepTopSections} megaCards={navData.megaMenu.cards} />
        <SitePrepGradingServiceCanon />
        <SectionRenderer sections={sitePrepStatsSections} megaCards={navData.megaMenu.cards} />
        <SitePrepGradingTrustStrip />
        {band ? (
          <ParallaxTypeBand
            id="site-prep-type-band"
            tone="dark"
            eyebrow={band.eyebrow}
            title={band.title}
            subtitle={band.subtitle}
            imageSrc={band.image}
            imageAlt={band.imageAlt}
          />
        ) : null}
        <SitePrepGradingGeoHub />
        <SitePrepGradingSeoResearch />
        <SitePrepGradingFaqEditorial />
        <SitePrepGradingParallaxCta
          phoneDisplay={siteData.telephoneDisplay}
          phoneHref={`tel:${siteData.telephone.replace(/\s/g, "")}`}
        />
        <ServiceInlineQuote service={service} />
      </main>
    </>
  );
}
