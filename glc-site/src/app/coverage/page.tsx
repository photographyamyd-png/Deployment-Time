import type { Metadata } from "next";
import { CoveragePageFigureBand } from "@/components/pages/coverage-page-extra";
import { MiniPageHero } from "@/components/pages/mini-page-hero";
import { ParallaxWhiteFrameBand } from "@/components/sections/parallax-white-frame-band";
import { CoverageSection } from "@/components/sections/coverage-section";
import { CtaBandSection } from "@/components/sections/cta-band-section";
import { SmartLink } from "@/components/ui/smart-link";
import { getHomeSectionProps } from "@/lib/home-sections";
import { chunkSentences } from "@/lib/chunk-sentences";
import { ROUTES } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";
import site from "@/content/site.json";
import type { SiteConfig } from "@/content/types";
import type { CoverageProps, CtaBandProps, HomeParallaxBandProps } from "@/content/types";

const siteData = site as SiteConfig;
const coverageProps = getHomeSectionProps<CoverageProps>("coverage");
const parallaxProps = getHomeSectionProps<HomeParallaxBandProps>("parallaxBand");
const ctaProps = getHomeSectionProps<CtaBandProps>("ctaBand");

const heroLede =
  chunkSentences(
    coverageProps.intro ??
      "Headquartered in Barrie with county-wide dispatch — no travel surcharges within Simcoe County.",
    2,
  )[0] ?? "";

const coverageSeo = pageMetadata({
  title: `Coverage Area | ${siteData.name}`,
  description:
    "Commercial excavation & civil dispatch from Barrie across Simcoe County — Orillia, Midland, Innisfil & Wasaga Beach. County-wide mobilization.",
  path: ROUTES.coverage,
});

export const metadata: Metadata = {
  ...coverageSeo,
  openGraph: {
    ...coverageSeo.openGraph,
    siteName: siteData.name,
  },
};

export default function CoveragePage() {
  return (
    <main id="main-content">
      <MiniPageHero
        variant="dark"
        breadcrumb={
          <>
            <SmartLink href={ROUTES.home}>Home</SmartLink>
            {" · "}
            Coverage area
          </>
        }
        title={
          <>
            {coverageProps.headingBefore}
            <em className="mini-page-hero__em">{coverageProps.headingEmphasis}</em>
            {coverageProps.headingAfter}
          </>
        }
        lede={heroLede}
      />

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      <CoveragePageFigureBand
        areas={coverageProps.areas}
        eyebrow={coverageProps.eyebrow}
        headingBefore={coverageProps.headingBefore}
        headingEmphasis={coverageProps.headingEmphasis}
        headingAfter={coverageProps.headingAfter}
        closingLine={coverageProps.closingLine}
      />

      <CoverageSection {...coverageProps} />

      <ParallaxWhiteFrameBand
        id="coverage-parallax"
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
