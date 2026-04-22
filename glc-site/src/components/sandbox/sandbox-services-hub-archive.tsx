import { SvcOverviewDigest } from "@/components/pages/svc-overview-digest";
import { SvcOverviewExpandGallery } from "@/components/pages/svc-overview-expand-gallery";
import { MarqueeBand } from "@/components/sections/marquee-band";
import { ParallaxWhiteFrameBand } from "@/components/sections/parallax-white-frame-band";
import { ServicesGridSection } from "@/components/sections/services-grid-section";
import { CtaBandSection } from "@/components/sections/cta-band-section";
import { SmartLink } from "@/components/ui/smart-link";
import type {
  CtaBandProps,
  HomeParallaxBandProps,
  NavigationConfig,
  ServicesSectionProps,
  StatsProps,
} from "@/content/types";
import { getHomeSectionProps } from "@/lib/home-sections";
import { ROUTES } from "@/lib/routes";

export type ServicesHubArchiveHub = {
  breadcrumb: { homeLabel: string; currentLabel: string };
  title: string;
  titleEmphasis: string;
  lede: string;
  cardCtaLabel: string;
  cardDesc: string;
};

type Props = {
  hubData: ServicesHubArchiveHub;
  navData: NavigationConfig;
};

/**
 * Archived pre-2026 Services hub layout (marquee, full homepage services band,
 * digest + stats, expandable gallery, parallax, CTA). Preserved in sandbox
 * before `/services/` was reduced to hero + card grid + CTA.
 */
export function SandboxServicesHubArchive({ hubData, navData }: Props) {
  const marqueeProps = getHomeSectionProps<{ items: string[] }>("marquee");
  const servicesProps = getHomeSectionProps<ServicesSectionProps>("services");
  const statsProps = getHomeSectionProps<StatsProps>("stats");
  const parallaxProps = getHomeSectionProps<HomeParallaxBandProps>("parallaxBand");
  const ctaProps = getHomeSectionProps<CtaBandProps>("ctaBand");

  const digestTitle = `${hubData.title.trimEnd()} ${hubData.titleEmphasis.trim()}`;

  return (
    <section
      className="sandbox-svc-hub-arch gl-react-embed-section"
      aria-label="Archived Services hub layout (reference)"
    >
      <header className="sandbox-svc-hub-arch__band">
        <p className="sandbox-svc-hub-arch__eyebrow">Sandbox archive</p>
        <h2 className="sandbox-svc-hub-arch__title">Former Services hub page stack</h2>
        <p className="sandbox-svc-hub-arch__note">
          Production <SmartLink href={ROUTES.services}>Services</SmartLink> was simplified to three
          sections; this band keeps the retired marquee, homepage-style services band, digest, gallery,
          and parallax for comparison.
        </p>
      </header>

      <section className="service-page-hero">
        <div className="service-page-hero__bg" aria-hidden="true" />
        <div className="service-page-hero__inner">
          <p className="service-page-hero__breadcrumb">
            <SmartLink href={ROUTES.home}>{hubData.breadcrumb.homeLabel}</SmartLink>
            {" · "}
            {hubData.breadcrumb.currentLabel} (archive)
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
        id="sandbox-arch-services-parallax"
        eyebrow={parallaxProps.eyebrow}
        title={parallaxProps.title}
        subtitle={parallaxProps.subtitle}
        imageSrc={parallaxProps.imageSrc}
        imageAlt={parallaxProps.imageAlt}
        cta={parallaxProps.cta}
      />

      <CtaBandSection {...ctaProps} />
    </section>
  );
}
