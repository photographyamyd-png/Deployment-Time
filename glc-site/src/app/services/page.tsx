import type { Metadata } from "next";
import hub from "@/content/pages/services-index.json";
import { ServicesHubCardGrid } from "@/components/pages/services-hub-card-grid";
import { CtaBandSection } from "@/components/sections/cta-band-section";
import { SmartLink } from "@/components/ui/smart-link";
import navigation from "@/content/navigation.json";
import type { CtaBandProps, NavigationConfig } from "@/content/types";
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
  gridEyebrow: string;
  gridHeading: string;
  gridIntro: string;
};

const hubData = hub as Hub;
const ctaProps = getHomeSectionProps<CtaBandProps>("ctaBand");

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
      <section className="service-page-hero service-page-hero--hub-compact">
        <div className="service-page-hero__bg" aria-hidden="true" />
        <div className="service-page-hero__scrim service-page-hero__scrim--hub" aria-hidden="true" />
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

      <ServicesHubCardGrid
        eyebrow={hubData.gridEyebrow}
        heading={hubData.gridHeading}
        intro={hubData.gridIntro}
        cards={navData.megaMenu.cards}
        ctaLabel={hubData.cardCtaLabel}
      />

      <CtaBandSection {...ctaProps} sectionId="services-hub-cta" />
    </main>
  );
}
