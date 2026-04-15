import type { Metadata } from "next";
import hub from "@/content/pages/services-index.json";
import { SvcOverviewDigest } from "@/components/pages/svc-overview-digest";
import { SvcOverviewExpandGallery } from "@/components/pages/svc-overview-expand-gallery";
import { MarqueeBand } from "@/components/sections/marquee-band";
import { ParallaxWhiteFrameBand } from "@/components/sections/parallax-white-frame-band";
import { ServicesGridSection } from "@/components/sections/services-grid-section";
import { CtaBandSection } from "@/components/sections/cta-band-section";
import { SmartLink } from "@/components/ui/smart-link";
import navigation from "@/content/navigation.json";
import type {
  CtaBandProps,
  HomeParallaxBandProps,
  NavigationConfig,
  ServicesSectionProps,
  StatsProps,
} from "@/content/types";
import { getHomeSectionProps } from "@/lib/home-sections";
import { ROUTES } from "@/lib/routes";
import site from "@/content/site.json";
import type { SiteConfig } from "@/content/types";
import { pageMetadata } from "@/lib/seo";

const navData = navigation as NavigationConfig;
const siteData = site as SiteConfig;

type Hub = {
  breadcrumb: { homeLabel: string; currentLabel: string };
  title: string;
  titleEmphasis: string;
  lede: string;
  cardCtaLabel: string;
  cardDesc: string;
};

const hubData = hub as Hub;

const marqueeProps = getHomeSectionProps<{ items: string[] }>("marquee");
const servicesProps = getHomeSectionProps<ServicesSectionProps>("services");
const statsProps = getHomeSectionProps<StatsProps>("stats");
const parallaxProps = getHomeSectionProps<HomeParallaxBandProps>("parallaxBand");
const ctaProps = getHomeSectionProps<CtaBandProps>("ctaBand");

const digestTitle = `${hubData.title.trimEnd()} ${hubData.titleEmphasis.trim()}`;

const servicesSeo = pageMetadata({
  title: `Services | ${siteData.name}`,
  description: hubData.lede,
  path: ROUTES.services,
});

export const metadata: Metadata = {
  ...servicesSeo,
  openGraph: {
    ...servicesSeo.openGraph,
    siteName: siteData.name,
  },
};

export default function ServicesIndexPage() {
  return (
    <main id="main-content">
      <section className="service-page-hero">
        <div className="service-page-hero__bg" aria-hidden="true" />
        <div className="service-page-hero__inner">
          <p className="service-page-hero__breadcrumb">
            <SmartLink href={ROUTES.home}>{hubData.breadcrumb.homeLabel}</SmartLink>
            {" · "}
            {hubData.breadcrumb.currentLabel}
          </p>
          <h1 className="service-page-hero__title">
            {hubData.title}
            <em>{hubData.titleEmphasis}</em>
          </h1>
          <p className="service-page-hero__lede">{hubData.lede}</p>
        </div>
      </section>

      <MarqueeBand items={marqueeProps.items} />

      <ServicesGridSection {...servicesProps} cards={navData.megaMenu.cards} />

      <SvcOverviewDigest
        kicker={navData.megaMenu.kicker}
        digestTitle={digestTitle}
        megaIntro={navData.megaMenu.intro}
        hubLede={hubData.lede}
        stats={statsProps}
      />

      <SvcOverviewExpandGallery
        cards={navData.megaMenu.cards}
        cardDesc={hubData.cardDesc}
        kicker={navData.megaMenu.kicker}
        heading={navData.megaMenu.viewAllLabel}
      />

      <ParallaxWhiteFrameBand
        id="services-parallax"
        eyebrow={parallaxProps.eyebrow}
        title={parallaxProps.title}
        subtitle={parallaxProps.subtitle}
        imageSrc={parallaxProps.imageSrc}
        imageAlt={parallaxProps.imageAlt}
        cta={parallaxProps.cta}
      />

      <CtaBandSection {...ctaProps} />
    </main>
  );
}
