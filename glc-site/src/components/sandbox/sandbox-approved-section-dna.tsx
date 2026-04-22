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
import { SmartLink } from "@/components/ui/smart-link";
import { commercialSnowClosingCta } from "@/content/commercial-snow-page-data";
import home from "@/content/pages/home.json";
import navigation from "@/content/navigation.json";
import type {
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
          <code>{registryId}</code>
        </p>
        {children}
      </div>
    </section>
  );
}

type Props = {
  site: SiteConfig;
};

/**
 * Renders production React sections that match `section-dna/approved-sections.json`
 * (hero-v2, ST3, AB3, parallax band, services grid, why, process, coverage, testimonials,
 * CTA3, excavation parallax CTA, snow P14 mid-lower pattern). Header mega + primary nav and
 * the site footer are global chrome — see marker bands for file paths.
 */
export function SandboxApprovedSectionDna({ site }: Props) {
  const servicesBandCta = homeServicesBandCta(homeContent, navData);

  return (
    <div id="sandbox-approved-dna-catalog" className="sandbox-approved-dna-root">
      <SandboxDnaMarker registryId="catalog" title="Approved section DNA — production components">
        <p className="sandbox-dna-marker__note">
          Content is sourced from <code>home.json</code> and <code>navigation.json</code> where applicable. Registry
          IDs mirror <code>section-dna/approved-sections.json</code>.
        </p>
      </SandboxDnaMarker>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      <SandboxDnaMarker registryId="hero-v2-flagship-asymmetric" title="Hero — V2 flagship" />
      <HeroSection {...pickHomeSectionProps("hero")} />

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      <SandboxDnaMarker registryId="stats-st3-dark-editorial" title="Stats — ST3 dark editorial" />
      <StatsSection {...pickHomeSectionProps("stats")} />

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      <SandboxDnaMarker registryId="about-ab3-editorial-split" title="About — AB3 editorial split" />
      <AboutSection {...pickHomeSectionProps("about")} />

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      <SandboxDnaMarker registryId="gl-parallax-type-band-shared" title="Parallax type band" />
      <ParallaxTypeBand id="sandbox-parallax-type-band" {...pickHomeSectionProps("parallaxBand")} />

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      <SandboxDnaMarker registryId="services-home-grid-cards" title="Services — homepage grid" />
      <ServicesGridSection
        {...pickHomeSectionProps("services")}
        cards={navData.megaMenu.cards}
        servicesBandCta={servicesBandCta}
        referenceSplitLayout
      />

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      <SandboxDnaMarker registryId="why-why3-editorial-manifesto" title="Why — editorial manifesto" />
      <WhySection {...pickHomeSectionProps("why")} />

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      <SandboxDnaMarker registryId="process-proc3-split-timeline" title="Process — split timeline" />
      <ProcessSection {...pickHomeSectionProps("process")} />

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      <SandboxDnaMarker registryId="coverage-dark-territory-band" title="Coverage — territory band" />
      <CoverageSection {...pickHomeSectionProps("coverage")} />

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      <SandboxDnaMarker registryId="testimonials-tst3-editorial" title="Testimonials — editorial" />
      <TestimonialsSection {...pickHomeSectionProps("testimonials")} />

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      <SandboxDnaMarker registryId="cta-band-cta3-charcoal-close" title="CTA band — charcoal close" />
      <CtaBandSection sectionId="sandbox-cta-band" {...pickHomeSectionProps("ctaBand")} />

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      <SandboxDnaMarker registryId="exc-hub-parallax-cta-band" title="Excavation hub — parallax CTA band" />
      <ExcavationParallaxCta phoneDisplay={site.telephoneDisplay} phoneHref={site.telephone} />

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      <SandboxDnaMarker registryId="glc-snow-p14-midlower-cta" title="Commercial snow — P14 mid-lower CTA (markup preview)" />
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

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      <SandboxDnaMarker registryId="header-mega-services-panel-shell" title="Header — Services mega panel (site chrome)">
        <p className="sandbox-dna-marker__note">
          Open the <strong>Services</strong> menu on any page. Implementation:{" "}
          <code>glc-site/src/components/layout/site-header.tsx</code> +{" "}
          <code>mega-menu-services.tsx</code> · <code>#mega-services-panel</code>.
        </p>
      </SandboxDnaMarker>

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      <SandboxDnaMarker registryId="header-primary-nav-links-cluster" title="Header — Primary nav links (site chrome)">
        <p className="sandbox-dna-marker__note">
          Desktop row: <code>.gl-header__nav-links</code> in <code>site-header.tsx</code> (mega triggers + SmartLinks).
        </p>
      </SandboxDnaMarker>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      <SandboxDnaMarker registryId="footer-site-wide-gray-rail" title="Footer — site-wide (layout chrome)">
        <p className="sandbox-dna-marker__note">
          The global footer is rendered from <code>app/layout.tsx</code> via{" "}
          <code>glc-site/src/components/layout/site-footer.tsx</code> — not duplicated here.
        </p>
      </SandboxDnaMarker>
    </div>
  );
}
