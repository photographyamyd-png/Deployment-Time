import type { Metadata } from "next";
import { MiniPageHero } from "@/components/pages/mini-page-hero";
import { ProcessPageLedger } from "@/components/pages/process-page-extra";
import { ParallaxWhiteFrameBand } from "@/components/sections/parallax-white-frame-band";
import { ProcessSection } from "@/components/sections/process-section";
import { CtaBandSection } from "@/components/sections/cta-band-section";
import { SmartLink } from "@/components/ui/smart-link";
import { getHomeSectionProps } from "@/lib/home-sections";
import { chunkSentences } from "@/lib/chunk-sentences";
import { ROUTES } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";
import site from "@/content/site.json";
import type { SiteConfig } from "@/content/types";
import type { CtaBandProps, HomeParallaxBandProps, ProcessProps } from "@/content/types";

const siteData = site as SiteConfig;
const processProps = getHomeSectionProps<ProcessProps>("process");
const parallaxProps = getHomeSectionProps<HomeParallaxBandProps>("parallaxBand");
const ctaProps = getHomeSectionProps<CtaBandProps>("ctaBand");

const heroLede =
  chunkSentences(processProps.steps[0]?.desc ?? "", 2)[0] ??
  "Commercial site process from first call to signoff.";

const processSeo = pageMetadata({
  title: `Our Process | ${siteData.name}`,
  description: `${processProps.heading}${processProps.headingAccent} — ${heroLede}`,
  path: ROUTES.process,
});

export const metadata: Metadata = {
  ...processSeo,
  openGraph: {
    ...processSeo.openGraph,
    siteName: siteData.name,
  },
};

export default function ProcessPage() {
  return (
    <main id="main-content">
      <MiniPageHero
        variant="dark"
        breadcrumb={
          <>
            <SmartLink href={ROUTES.home}>Home</SmartLink>
            {" · "}
            Our process
          </>
        }
        title={
          <>
            {processProps.heading}
            <em className="mini-page-hero__em">{processProps.headingAccent}</em>
          </>
        }
        lede={heroLede}
      />

      <ProcessSection {...processProps} />

      <ProcessPageLedger {...processProps} />

      <ParallaxWhiteFrameBand
        id="process-parallax"
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
