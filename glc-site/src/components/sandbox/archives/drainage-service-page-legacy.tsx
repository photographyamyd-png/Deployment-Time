/**
 * Pre-template drainage hub (DrainageHubView stack). Sandbox reference only.
 */
import { DrainageHubView } from "@/components/services/drainage-hardscaping/drainage-hub-view";
import site from "@/content/site.json";
import type { SiteConfig } from "@/content/types";
import { getServiceBySlug } from "@/lib/service-pages";

const siteData = site as SiteConfig;
const service = getServiceBySlug("drainage-hardscaping")!;

export function DrainageServicePageLegacy() {
  return <DrainageHubView site={siteData} service={service} />;
}
