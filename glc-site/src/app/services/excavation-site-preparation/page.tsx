import { JsonLdExcavationHub } from "@/components/seo/json-ld-excavation-hub";
import { ServicePageView } from "@/components/services/service-page-view";
import { servicePageMetadata } from "@/lib/service-page-meta";
import { getServiceBySlug } from "@/lib/service-pages";
import site from "@/content/site.json";
import type { SiteConfig } from "@/content/types";
import { getSiteUrl } from "@/lib/site-url";

export const metadata = servicePageMetadata("excavation-site-preparation");

export default function ExcavationSitePreparationPage() {
  const s = getServiceBySlug("excavation-site-preparation")!;
  const schemaSite: SiteConfig = { ...(site as SiteConfig), url: getSiteUrl() };

  return (
    <>
      <JsonLdExcavationHub site={schemaSite} />
      <ServicePageView service={s} site={schemaSite} />
    </>
  );
}
