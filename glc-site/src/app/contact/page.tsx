import { ContactPageView } from "@/components/pages/contact-page-view";
import { pageMetadata } from "@/lib/seo";
import site from "@/content/site.json";
import type { SiteConfig } from "@/content/types";
import { ROUTES } from "@/lib/routes";

const siteData = site as SiteConfig;

export const metadata = pageMetadata({
  title: `Contact | ${siteData.name}`,
  description:
    "Reach GLC for excavation, foundations, drainage & snow in Barrie, Midland, Orillia & Simcoe County. Call 705-619-4902 or send a project inquiry.",
  path: ROUTES.contact,
});

export default function ContactPage() {
  return <ContactPageView site={siteData} />;
}
