import type { SiteConfig } from "@/content/types";

type Props = {
  site: SiteConfig;
};

/** Sitewide WebSite node (paired with LocalBusiness in root layout). */
export function JsonLdWebSite({ site }: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url.replace(/\/$/, "") + "/",
    description: site.description,
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url.replace(/\/$/, "") + "/",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
