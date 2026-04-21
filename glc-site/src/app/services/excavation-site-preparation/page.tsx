import { ExcavationFaqEditorial } from "@/components/services/excavation-faq-editorial";
import { ExcavationGeoHub } from "@/components/services/excavation-geo-hub";
import { ExcavationParallaxCta } from "@/components/services/excavation-parallax-cta";
import { ExcavationSeoResearch } from "@/components/services/excavation-seo-research";
import { ExcavationServiceCanon } from "@/components/services/excavation-service-canon";
import { ExcavationTrustStrip } from "@/components/services/excavation-trust-strip";
import { ServiceInlineQuote } from "@/components/services/service-inline-quote";
import { JsonLdExcavationHub } from "@/components/seo/json-ld-excavation-hub";
import "@/components/services/excavation-site-preparation/excavation-hub-hero.css";
import {
  ExcavationHubHero,
  type ExcavationHubHeroProps,
} from "@/components/services/excavation-site-preparation/excavation-hub-hero";
import { ParallaxTypeBand } from "@/components/sections/parallax-type-band";
import { SectionRenderer } from "@/components/sections/section-renderer";
import hub from "@/content/pages/excavation-hub-seo.json";
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
const service = getServiceBySlug("excavation-site-preparation")!;
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
  heroPanelImage?: string;
  heroGhostWatermarkWord?: string;
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

const excavationHeroProps: ExcavationHubHeroProps | null = hero
  ? {
      ...hero.props,
      panelImage: hubParallax.heroPanelImage,
      ghostWatermarkWord: hubParallax.heroGhostWatermarkWord,
    }
  : null;

const marquee = getHomeSection("marquee");
if (marquee) {
  marquee.props.items = [
    "Excavation & bulk earthworks",
    "Barrie · Orillia · Wasaga Beach · Innisfil",
    "Pool digs · Trenching · Hydrovac · Clearing",
    "Simcoe County contractor",
    "Licensed & insured crews",
    "Free estimates",
    "Next: site prep & grading for certificates",
    "From concept to creation",
  ];
}

const about = getHomeSection("about");
if (about) {
  about.props.eyebrow = "Service overview";
  about.props.headingBefore = "Bulk ";
  about.props.headingAccent = "excavation";
  about.props.headingAfter = " — digs, trenches & hydrovac";
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
    third.sub = "Barrie, Orillia, Wasaga Beach, Innisfil & Simcoe County";
  }
}

function pickSections(types: readonly HomeSectionBlock["type"][]): HomePageContent["sections"] {
  return types
    .map((type) => homeContent.sections.find((section) => section.type === type))
    .filter(Boolean) as HomePageContent["sections"];
}

/** ExcavationHubHero (non-shared) → about (light) → marquee; stats rendered after canon. */
const excavationTopSections = pickSections(["about", "marquee"] as const);
const excavationStatsSections = pickSections(["stats"] as const);

const schemaSite: SiteConfig = { ...siteData, url: getSiteUrl() };

export const metadata: Metadata = pageMetadata({
  title: seo.title,
  description: seo.description,
  path: ROUTES.service("excavation-site-preparation"),
});

export default function ExcavationSitePreparationPage() {
  const band = hubParallax.parallaxBand;

  return (
    <>
      <JsonLdExcavationHub site={schemaSite} />
      <main id="main-content">
        {excavationHeroProps ? <ExcavationHubHero {...excavationHeroProps} /> : null}
        <SectionRenderer sections={excavationTopSections} megaCards={navData.megaMenu.cards} />
        <ExcavationServiceCanon />
        <SectionRenderer sections={excavationStatsSections} megaCards={navData.megaMenu.cards} />
        <ExcavationTrustStrip />
        {band ? (
          <ParallaxTypeBand
            id="excavation-type-band"
            tone="dark"
            eyebrow={band.eyebrow}
            title={band.title}
            subtitle={band.subtitle}
            imageSrc={band.image}
            imageAlt={band.imageAlt}
          />
        ) : null}
        <ExcavationGeoHub />
        <ExcavationSeoResearch />
        <ExcavationFaqEditorial />
        <ExcavationParallaxCta
          phoneDisplay={siteData.telephoneDisplay}
          phoneHref={`tel:${siteData.telephone.replace(/\s/g, "")}`}
        />
        <ServiceInlineQuote service={service} />
      </main>
    </>
  );
}
