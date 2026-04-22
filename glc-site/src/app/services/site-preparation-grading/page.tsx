import { JsonLdSitePrepGradingHub } from "@/components/seo/json-ld-site-prep-grading-hub";
import { ServicePageView } from "@/components/services/service-page-view";
import { servicePageMetadata } from "@/lib/service-page-meta";
import { getServiceBySlug } from "@/lib/service-pages";
import site from "@/content/site.json";
import type { SiteConfig } from "@/content/types";
import { getSiteUrl } from "@/lib/site-url";

export const metadata = servicePageMetadata("site-preparation-grading");

export default function SitePreparationGradingPage() {
  const s = getServiceBySlug("site-preparation-grading")!;
  const schemaSite: SiteConfig = { ...(site as SiteConfig), url: getSiteUrl() };

  return (
    <>
      <JsonLdSitePrepGradingHub site={schemaSite} />
      <ServicePageView service={s} site={schemaSite} />
    </>
  );
}
