import { JsonLdCommercialSnow } from "@/components/seo/json-ld-commercial-snow";
import { ServicePageView } from "@/components/services/service-page-view";
import { commercialSnowFaqs } from "@/content/commercial-snow-faqs";
import {
  commercialSnowMeta,
  commercialSnowSchemaOfferEntries,
} from "@/content/commercial-snow-page-data";
import type { SiteConfig } from "@/content/types";
import { pageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";
import { getServiceBySlug } from "@/lib/service-pages";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import site from "@/content/site.json";

const siteData = site as SiteConfig;

export const metadata: Metadata = pageMetadata({
  title: commercialSnowMeta.title,
  description: commercialSnowMeta.description,
  path: ROUTES.service("snow-removal"),
});

export default function SnowRemovalPage() {
  const schemaSite: SiteConfig = { ...siteData, url: getSiteUrl() };
  const s = getServiceBySlug("snow-removal")!;

  return (
    <>
      <JsonLdCommercialSnow
        site={schemaSite}
        faqItems={commercialSnowFaqs.map((f) => ({ question: f.question, answer: f.answer }))}
        offers={commercialSnowSchemaOfferEntries()}
      />
      <ServicePageView
        service={s}
        site={schemaSite}
        snowUrgencyStrip
        includeFaqSchema={false}
      />
    </>
  );
}
