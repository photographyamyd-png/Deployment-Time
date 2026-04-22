import { JsonLdFaq } from "@/components/seo/json-ld-faq";
import { JsonLdService } from "@/components/seo/json-ld-service";
import { ContactStripSection } from "@/components/sections/contact-strip-section";
import { ScopeStrip } from "@/components/ui/scope-strip";
import { ServiceFaqSection } from "@/components/services/service-faq-section";
import { ServiceHubOverview } from "@/components/services/service-hub-overview";
import { ServiceInlineQuote } from "@/components/services/service-inline-quote";
import { ServicePageHero } from "@/components/services/service-page-hero";
import { ServiceProjectContext } from "@/components/services/service-project-context";
import { ServiceRelatedServices } from "@/components/services/service-related-services";
import { ServiceScopeSection } from "@/components/services/service-scope-section";
import { ServiceSnowUrgencyStrip } from "@/components/services/service-snow-urgency-strip";
import navigation from "@/content/navigation.json";
import type { HomeContactStripProps, NavigationConfig, ServiceDetailContent, SiteConfig } from "@/content/types";
import { getHomeSectionProps } from "@/lib/home-sections";
import { resolveHubStats } from "@/lib/service-defaults";
import { normalizeServiceScopeStrip } from "@/lib/service-scope-strip";
import { ROUTES } from "@/lib/routes";
import { canonicalUrl } from "@/lib/seo";

type Props = {
  service: ServiceDetailContent;
  site: SiteConfig;
  /** Commercial snow route — 60px yellow urgency band under hero */
  snowUrgencyStrip?: boolean;
  /** Snow hub ships FAQ schema via `JsonLdCommercialSnow` — omit duplicate JSON-LD */
  includeFaqSchema?: boolean;
};

export function ServicePageView({
  service,
  site,
  snowUrgencyStrip = false,
  includeFaqSchema = true,
}: Props) {
  const navData = navigation as NavigationConfig;
  const hubStats = resolveHubStats(service);
  const servicePageUrl = canonicalUrl(ROUTES.service(service.slug));

  const relatedCards = navData.megaMenu.cards.filter((c) => c.slug !== service.slug).slice(0, 3);

  const scopeLinks = normalizeServiceScopeStrip(service.scopeStrip);

  const contactStripProps = getHomeSectionProps<HomeContactStripProps>("contactStrip");

  const snowMainClass = snowUrgencyStrip ? "glc-snow-hub" : undefined;

  return (
    <>
      <JsonLdService
        site={site}
        serviceName={service.schemaOfferName}
        serviceUrl={servicePageUrl}
        description={service.meta.description}
      />
      {includeFaqSchema ? <JsonLdFaq items={service.faq ?? []} /> : null}
      <main id="main-content" className={snowMainClass}>
        <ServicePageHero service={service} />
        {snowUrgencyStrip ? <ServiceSnowUrgencyStrip /> : null}

        <ScopeStrip links={scopeLinks} />

        <ServiceHubOverview service={service} hubStats={hubStats} />
        <ServiceScopeSection service={service} />
        <ServiceProjectContext service={service} />
        <ServiceFaqSection service={service} />

        <div className="service-page__quote-related-stack" id="service-quote-related">
          <ServiceInlineQuote service={service} variant="on-grey" />
          <ServiceRelatedServices cards={relatedCards} embedInStack />
        </div>

        <ContactStripSection {...contactStripProps} sectionId="service-contact-strip" />
      </main>
    </>
  );
}
