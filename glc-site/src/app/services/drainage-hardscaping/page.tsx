import type { Metadata } from "next";
import Script from "next/script";
import { DrainageHubView } from "@/components/services/drainage-hardscaping/drainage-hub-view";
import site from "@/content/site.json";
import type { SiteConfig } from "@/content/types";
import { buildDrainageHardscapingJsonLd } from "@/lib/drainage-hardscaping-jsonld";
import { ROUTES } from "@/lib/routes";
import { canonicalUrl, pageMetadata } from "@/lib/seo";
import { getSiteOrigin } from "@/lib/site-url";

const path = ROUTES.service("drainage-hardscaping");
const canonical = canonicalUrl(path);

const base = pageMetadata({
  title: "Drainage & Hardscaping Barrie | Drain Tile & Retaining Walls",
  description:
    "Expert drainage & hardscaping in Barrie & Simcoe County. Foundation drain tile, armour stone retaining walls, interlock patios & driveways. Free quotes.",
  path,
  ogTitle:
    "Drainage & Hardscaping Contractors in Barrie & Simcoe County | Ground Level Contracting",
  ogDescription:
    "Simcoe County's trusted specialists for foundation drain tile, custom site drainage, armour stone retaining walls, interlock patios, driveways & steps. Serving Barrie, Orillia, Wasaga Beach, Innisfil & beyond.",
});

export const metadata: Metadata = {
  ...base,
  alternates: {
    canonical,
    languages: {
      "en-CA": canonical,
      "x-default": canonical,
    },
  },
  openGraph: {
    ...base.openGraph,
    type: "website",
    locale: "en_CA",
    siteName: "Ground Level Contracting",
    images: [
      {
        url: `${getSiteOrigin()}/images/og/drainage-hardscaping-barrie.jpg`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function DrainageHardscapingPage() {
  const siteCfg = site as SiteConfig;
  return (
    <>
      <Script
        id="drainage-hub-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildDrainageHardscapingJsonLd(siteCfg)),
        }}
      />
      <DrainageHubView site={siteCfg} />
    </>
  );
}
