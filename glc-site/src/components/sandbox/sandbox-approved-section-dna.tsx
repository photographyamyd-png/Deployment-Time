import type { ReactNode } from "react";
import { ExcavationParallaxCta } from "@/components/services/excavation-parallax-cta";
import { AboutSection } from "@/components/sections/about-section";
import { CoverageSection } from "@/components/sections/coverage-section";
import { CtaBandSection } from "@/components/sections/cta-band-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ParallaxTypeBand } from "@/components/sections/parallax-type-band";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesGridSection } from "@/components/sections/services-grid-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhySection } from "@/components/sections/why-section";
import {
  SandboxFooterPreview,
  SandboxMegaPanelPreview,
  SandboxPrimaryNavPreview,
} from "@/components/sandbox/sandbox-dna-chrome-previews";
import { SmartLink } from "@/components/ui/smart-link";
import { commercialSnowClosingCta } from "@/content/commercial-snow-page-data";
import home from "@/content/pages/home.json";
import navigation from "@/content/navigation.json";
import type {
  HeroProps,
  HomePageContent,
  HomeSectionBlock,
  NavigationConfig,
  ServicesBandCta,
  SiteConfig,
} from "@/content/types";

const homeContent = home as HomePageContent;
const navData = navigation as NavigationConfig;

function pickHomeSectionProps<T extends HomeSectionBlock["type"]>(type: T) {
  for (const block of homeContent.sections) {
    if (block.type === type) {
      return block.props as Extract<HomeSectionBlock, { type: T }>["props"];
    }
  }
  throw new Error(`sandbox-approved-section-dna: home.json is missing section type "${type}"`);
}

/** `/sandbox/` DNA hero only — does not change production homepage `home.json`. */
function sandboxDnaHeroProps(): HeroProps {
  const base = pickHomeSectionProps("hero");
  return {
    ...base,
    eyebrow: "Commercial Site Work — Simcoe County & Beyond",
    title: {
      line1: "From",
      line2: "Concept",
      line3: "To Creation",
      emphasizeLine: 3,
    },
    subheadline: undefined,
    lede:
      "GLC handles excavation, site grading, drainage, foundations, hauling, and commercial snow removal for contractors and developers across Barrie, Orillia, and Simcoe County.",
    primaryCta: { label: "Request a Site Quote", href: "/contact/" },
    secondaryCta: { label: "Call 705-619-4902", href: "tel:+17056194902" },
    ctaMicrocopy: undefined,
    trustItems: undefined,
    trustBadges: undefined,
    parallaxBackgroundImage:
      "/images/services/site-preparation-grading/cat-skid-steer-grading-simcoe-county.jpg",
    stats: [],
    coverage: { label: "", tags: [] },
    serviceBarSlugTitles: [],
  };
}

function homeServicesBandCta(content: HomePageContent, nav: NavigationConfig): ServicesBandCta | undefined {
  const hero = content.sections.find((s) => s.type === "hero");
  if (!hero) return undefined;
  return {
    quoteCta: hero.props.primaryCta,
    servicesViewAll: { label: nav.megaMenu.viewAllLabel, href: nav.megaMenu.viewAllHref },
  };
}

function SandboxDnaMarker({
  registryId,
  title,
  children,
}: {
  registryId: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section
      className="sandbox-dna-marker"
      aria-label={`Registry: ${registryId}`}
      data-sandbox-registry-id={registryId}
    >
      <div className="sandbox-dna-marker__inner">
        <p className="sandbox-dna-marker__kicker">section-dna / approved-sections.json</p>
        <h2 className="sandbox-dna-marker__title">{title}</h2>
        <p className="sandbox-dna-marker__id">
          <code>{registryId}</code> · deep link{" "}
          <a className="sandbox-dna-marker__deeplink" href={`#sandbox-dna-visual-${registryId}`}>
            #{`sandbox-dna-visual-${registryId}`}
          </a>
        </p>
        {children}
      </div>
    </section>
  );
}

function VisualSlot({ registryId, children }: { registryId: string; children: ReactNode }) {
  return (
    <div id={`sandbox-dna-visual-${registryId}`} className="sandbox-dna-visual-slot">
      {children}
    </div>
  );
}

type Props = {
  site: SiteConfig;
};

/**
 * All 15 registry entries from `approved-sections.json` `_meta.sectionIds`, in order,
 * each with a visible production (or chrome-preview) implementation on `/sandbox/`.
 */
export function SandboxApprovedSectionDna({ site }: Props) {
  const servicesBandCta = homeServicesBandCta(homeContent, navData);

  return (
    <div id="sandbox-approved-dna-catalog" className="sandbox-approved-dna-root">
      <SandboxDnaMarker registryId="catalog" title="Approved section DNA — all 15 visuals (registry order)">
        <p className="sandbox-dna-marker__note">
          Order matches <code>_meta.sectionIds</code> in <code>approved-sections.json</code>. Content from{" "}
          <code>home.json</code> / <code>navigation.json</code> where applicable. Each block uses{" "}
          <strong>unique DOM ids</strong> (<code>sandbox-dna-*</code>) so it does not collide with the archived homepage
          stack below. Deep links: <code>#sandbox-dna-visual-…</code>.
        </p>
      </SandboxDnaMarker>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      {/* 1 — stats-st3-dark-editorial */}
      <VisualSlot registryId="stats-st3-dark-editorial">
        <SandboxDnaMarker registryId="stats-st3-dark-editorial" title="Stats — ST3 dark editorial" />
        <StatsSection {...pickHomeSectionProps("stats")} htmlSectionId="sandbox-dna-stats" />
      </VisualSlot>

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      {/* 2 — about-ab3-editorial-split */}
      <VisualSlot registryId="about-ab3-editorial-split">
        <SandboxDnaMarker registryId="about-ab3-editorial-split" title="About — AB3 editorial split" />
        <AboutSection
          {...pickHomeSectionProps("about")}
          htmlSectionId="sandbox-dna-about"
          headingDomId="sandbox-dna-about-heading"
        />
      </VisualSlot>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      {/* 3 — hero-v2-flagship-asymmetric */}
      <VisualSlot registryId="hero-v2-flagship-asymmetric">
        <SandboxDnaMarker registryId="hero-v2-flagship-asymmetric" title="Hero — V2 flagship asymmetric" />
        <HeroSection
          {...sandboxDnaHeroProps()}
          variant="sandbox"
          htmlSectionId="sandbox-dna-hero"
        />
      </VisualSlot>

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      {/* 4 — gl-parallax-type-band-shared */}
      <VisualSlot registryId="gl-parallax-type-band-shared">
        <SandboxDnaMarker registryId="gl-parallax-type-band-shared" title="Parallax type band" />
        <ParallaxTypeBand id="sandbox-dna-parallax-type-band" {...pickHomeSectionProps("parallaxBand")} />
      </VisualSlot>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      {/* 5 — exc-hub-parallax-cta-band */}
      <VisualSlot registryId="exc-hub-parallax-cta-band">
        <SandboxDnaMarker registryId="exc-hub-parallax-cta-band" title="Excavation hub — parallax CTA band" />
        <ExcavationParallaxCta
          phoneDisplay={site.telephoneDisplay}
          phoneHref={site.telephone}
          htmlSectionId="sandbox-dna-exc-parallax-cta"
          headingDomId="sandbox-dna-exc-parallax-cta-heading"
        />
      </VisualSlot>

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      {/* 6 — header-mega-services-panel-shell */}
      <VisualSlot registryId="header-mega-services-panel-shell">
        <SandboxDnaMarker registryId="header-mega-services-panel-shell" title="Header — Services mega panel shell" />
        <SandboxMegaPanelPreview navigation={navData} />
      </VisualSlot>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      {/* 7 — header-primary-nav-links-cluster */}
      <VisualSlot registryId="header-primary-nav-links-cluster">
        <SandboxDnaMarker registryId="header-primary-nav-links-cluster" title="Header — Primary nav links cluster" />
        <SandboxPrimaryNavPreview navigation={navData} />
      </VisualSlot>

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      {/* 8 — services-home-grid-cards */}
      <VisualSlot registryId="services-home-grid-cards">
        <SandboxDnaMarker registryId="services-home-grid-cards" title="Services — homepage grid cards" />
        <ServicesGridSection
          {...pickHomeSectionProps("services")}
          cards={navData.megaMenu.cards}
          servicesBandCta={servicesBandCta}
          referenceSplitLayout
          htmlSectionId="sandbox-dna-services"
          headingDomId="sandbox-dna-services-heading"
        />
      </VisualSlot>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      {/* 9 — why-why3-editorial-manifesto */}
      <VisualSlot registryId="why-why3-editorial-manifesto">
        <SandboxDnaMarker registryId="why-why3-editorial-manifesto" title="Why — editorial manifesto (Why3)" />
        <WhySection
          {...pickHomeSectionProps("why")}
          htmlSectionId="sandbox-dna-why"
          headingDomId="sandbox-dna-why-heading"
        />
      </VisualSlot>

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      {/* 10 — process-proc3-split-timeline */}
      <VisualSlot registryId="process-proc3-split-timeline">
        <SandboxDnaMarker registryId="process-proc3-split-timeline" title="Process — split timeline (Proc3)" />
        <ProcessSection
          {...pickHomeSectionProps("process")}
          htmlSectionId="sandbox-dna-process"
          headingDomId="sandbox-dna-process-heading"
          stepIdPrefix="sandbox-dna-process-step"
        />
      </VisualSlot>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      {/* 11 — coverage-dark-territory-band */}
      <VisualSlot registryId="coverage-dark-territory-band">
        <SandboxDnaMarker registryId="coverage-dark-territory-band" title="Coverage — dark territory band" />
        <CoverageSection
          {...pickHomeSectionProps("coverage")}
          htmlSectionId="sandbox-dna-coverage"
          headingDomId="sandbox-dna-coverage-heading"
        />
      </VisualSlot>

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      {/* 12 — testimonials-tst3-editorial */}
      <VisualSlot registryId="testimonials-tst3-editorial">
        <SandboxDnaMarker registryId="testimonials-tst3-editorial" title="Testimonials — editorial (Tst3)" />
        <TestimonialsSection
          {...pickHomeSectionProps("testimonials")}
          htmlSectionId="sandbox-dna-testimonials"
          headingDomId="sandbox-dna-testimonials-heading"
        />
      </VisualSlot>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      {/* 13 — cta-band-cta3-charcoal-close */}
      <VisualSlot registryId="cta-band-cta3-charcoal-close">
        <SandboxDnaMarker registryId="cta-band-cta3-charcoal-close" title="CTA band — charcoal close (Cta3)" />
        <CtaBandSection
          sectionId="sandbox-dna-cta-band"
          headingDomId="sandbox-dna-cta-heading"
          {...pickHomeSectionProps("ctaBand")}
        />
      </VisualSlot>

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      {/* 14 — footer-site-wide-gray-rail */}
      <VisualSlot registryId="footer-site-wide-gray-rail">
        <SandboxDnaMarker registryId="footer-site-wide-gray-rail" title="Footer — site-wide gray rail" />
        <SandboxFooterPreview site={site} navigation={navData} />
      </VisualSlot>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      {/* 15 — glc-snow-p14-midlower-cta */}
      <VisualSlot registryId="glc-snow-p14-midlower-cta">
        <SandboxDnaMarker registryId="glc-snow-p14-midlower-cta" title="Commercial snow — P14 mid-lower CTA" />
        <div className="glc-snow-page gl-react-embed-section" data-sandbox-snow-p14>
          <div className="reveal glc-snow-reveal visible">
            <div className="glc-snow-midlower-cta">
              <div className="glc-snow-midlower-cta__inner">
                <div className="glc-snow-midlower-cta__copy glc-snow-midlower-cta__copy--accent">
                  <p className="glc-snow-midlower-cta__heading">
                    Plan winter operations before the first storm — commercial contracts and 24/7 dispatch.
                  </p>
                  <p className="glc-snow-midlower-cta__sub">
                    Sandbox preview of the P14 mid-lower CTA shell (see <code>glc-base.css</code>{" "}
                    <code>.glc-snow-midlower-cta</code>). Button targets match{" "}
                    <code>commercialSnowClosingCta.ctas</code>.
                  </p>
                </div>
                <div className="glc-snow-midlower-cta__btns">
                  <SmartLink
                    href={commercialSnowClosingCta.ctas[0].href}
                    className="glc-snow-btn glc-snow-btn--primary"
                  >
                    {commercialSnowClosingCta.ctas[0].label}
                  </SmartLink>
                  <SmartLink
                    href={commercialSnowClosingCta.ctas[1].href}
                    className="glc-snow-btn glc-snow-btn--ghost"
                  >
                    {commercialSnowClosingCta.ctas[1].label}
                  </SmartLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VisualSlot>
    </div>
  );
}
