import type { Metadata } from "next";
import { ProjectsMosaic } from "@/components/pages/projects-mosaic";
import { MiniPageHero } from "@/components/pages/mini-page-hero";
import { ParallaxWhiteFrameBand } from "@/components/sections/parallax-white-frame-band";
import { CtaBandSection } from "@/components/sections/cta-band-section";
import { SmartLink } from "@/components/ui/smart-link";
import { getHomeSectionProps } from "@/lib/home-sections";
import { chunkSentences } from "@/lib/chunk-sentences";
import { ROUTES } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";
import site from "@/content/site.json";
import type { SiteConfig } from "@/content/types";
import type { CtaBandProps, HomeParallaxBandProps, TestimonialsProps } from "@/content/types";

const siteData = site as SiteConfig;
const testimonialsProps = getHomeSectionProps<TestimonialsProps>("testimonials");
const parallaxProps = getHomeSectionProps<HomeParallaxBandProps>("parallaxBand");
const ctaProps = getHomeSectionProps<CtaBandProps>("ctaBand");

const heroLede = chunkSentences(testimonialsProps.sub, 2)[0] ?? "";

const projectsSeo = pageMetadata({
  title: `Client Projects & Feedback | ${siteData.name}`,
  description: `${testimonialsProps.headingBefore}${testimonialsProps.headingAccent}${testimonialsProps.headingAfter}. ${heroLede}`,
  path: ROUTES.projects,
});

export const metadata: Metadata = {
  ...projectsSeo,
  openGraph: {
    ...projectsSeo.openGraph,
    siteName: siteData.name,
  },
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <MiniPageHero
        variant="dark"
        breadcrumb={
          <>
            <SmartLink href={ROUTES.home}>Home</SmartLink>
            {" · "}
            Client projects
          </>
        }
        title={
          <>
            {testimonialsProps.headingBefore}
            <em className="mini-page-hero__em">{testimonialsProps.headingAccent}</em>
            {testimonialsProps.headingAfter}
          </>
        }
        lede={heroLede}
      />

      <ProjectsMosaic {...testimonialsProps} />

      <ParallaxWhiteFrameBand
        id="projects-parallax"
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
