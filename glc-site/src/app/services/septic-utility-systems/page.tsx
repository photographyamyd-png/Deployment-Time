import { ServicePageView } from "@/components/services/service-page-view";
import { servicePageMetadata } from "@/lib/service-page-meta";
import { getServiceBySlug } from "@/lib/service-pages";
import site from "@/content/site.json";
import type { SiteConfig } from "@/content/types";

export const metadata = servicePageMetadata("septic-utility-systems");

export default function SepticUtilitySystemsPage() {
  const s = getServiceBySlug("septic-utility-systems")!;
  return <ServicePageView service={s} site={site as SiteConfig} />;
}
