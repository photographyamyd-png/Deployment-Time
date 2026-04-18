import { commercialSnowServices } from "@/content/commercial-snow-page-data";
import { ROUTES } from "@/lib/routes";

const HUB = ROUTES.service("snow-removal");

export type SnowSubServicePageDef = {
  slug: string;
  hubFragment: string;
  heading: string;
  metaTitle: string;
  metaDescription: string;
};

function slugFromServiceHref(href: string): string {
  const m = href.match(/^\/services\/([^/]+)\/?$/);
  return m ? m[1] : href.replace(/^\//, "").replace(/\/$/, "");
}

/** Commercial snow line pages linked from the hub (strategy doc URLs). */
export function getAllSnowSubServiceDefs(): SnowSubServicePageDef[] {
  return commercialSnowServices.map((svc) => {
    const slug = slugFromServiceHref(svc.moreHref);
    const metaTitle = `${svc.heading} | Ground Level Contracting`;
    const metaDescription =
      `${svc.heading} for businesses in Barrie, Orillia, Innisfil, Wasaga Beach & Simcoe County. Commercial-only snow removal, ice management & SLAs. Call 705-619-4902.`.slice(
        0,
        160,
      );
    return {
      slug,
      hubFragment: svc.fragment,
      heading: svc.heading,
      metaTitle,
      metaDescription,
    };
  });
}

export function getSnowSubServiceDef(slug: string): SnowSubServicePageDef | undefined {
  return getAllSnowSubServiceDefs().find((d) => d.slug === slug);
}

export type SnowLocationPageDef = {
  slug: string;
  label: string;
  placeName: string;
  metaTitle: string;
  metaDescription: string;
  /** Extra crawlable copy so location pages are not city-swap duplicates only. */
  uniqueIntro?: string;
};

const LOCATION_DEFS: SnowLocationPageDef[] = [
  {
    slug: "commercial-snow-removal-barrie-ontario",
    label: "commercial snow removal in Barrie",
    placeName: "Barrie",
    metaTitle: "Commercial Snow Removal Barrie Ontario | Ground Level Contracting",
    metaDescription:
      "24/7 commercial snow removal & ice management for Barrie, Ontario businesses. Parking lots, industrial yards, SLAs. Licensed & insured. 705-619-4902.",
    uniqueIntro:
      "Barrie's rapid commercial expansion along Essa Road, Mapleview Drive, and the 400-series corridor stacks high-traffic lots and tight overnight refreeze windows. GLC runs commercial plow routes and ice control tuned to retail peaks and highway access—not one-size county defaults.",
  },
  {
    slug: "commercial-snow-removal-orillia-ontario",
    label: "serving Orillia businesses",
    placeName: "Orillia",
    metaTitle: "Commercial Snow Removal Orillia Ontario | Ground Level Contracting",
    metaDescription:
      "Commercial snow removal & ice control for Orillia businesses and institutions. Simcoe County contractor. GPS-tracked fleets & contracts. 705-619-4902.",
    uniqueIntro:
      "Orillia's Casino Rama traffic and the West Street commercial strip keep pedestrian-heavy lots online through lake-effect squalls. GLC aligns institutional access windows, municipal lot geometry, and SLA-backed revisits for mixed-use and industrial sites.",
  },
  {
    slug: "commercial-snow-removal-innisfil-ontario",
    label: "Innisfil commercial properties",
    placeName: "Innisfil",
    metaTitle: "Commercial Snow Removal Innisfil Ontario | Ground Level Contracting",
    metaDescription:
      "Commercial snow plowing & ice management for Innisfil properties. Seasonal contracts, emergency response, Simcoe County coverage. 705-619-4902.",
    uniqueIntro:
      "Innisfil's Friday Harbour corridor and Friday Drive commercial expansion add lakeshore lots where route density shifts storm-to-storm. GLC right-sizes plow equipment and salt programs for waterfront retail, estate-commercial pads, and rural-industrial lanes.",
  },
  {
    slug: "commercial-snow-removal-wasaga-beach-ontario",
    label: "Wasaga Beach business snow services",
    placeName: "Wasaga Beach",
    metaTitle: "Commercial Snow Removal Wasaga Beach Ontario | Ground Level Contracting",
    metaDescription:
      "Business snow removal & de-icing for Wasaga Beach, Ontario. Commercial lots, retail & institutional sites across Simcoe County. 705-619-4902.",
    uniqueIntro:
      "Wasaga Beach's seasonal retail traffic and beach-area commercial pads need ice control that holds through melt–refreeze — we focus on pedestrian safety and insured slip exposure, not just pushing piles. Resort-adjacent timing windows and weekend peaks shape how we stage plow routes.",
  },
  {
    slug: "commercial-snow-removal-simcoe-county",
    label: "throughout Simcoe County",
    placeName: "Simcoe County",
    metaTitle: "Commercial Snow Removal Simcoe County | Ground Level Contracting",
    metaDescription:
      "County-wide commercial snow removal: Barrie, Orillia, Innisfil, Wasaga Beach & Simcoe County. Industrial, retail & portfolio programs. 705-619-4902.",
    uniqueIntro:
      "Simcoe County-wide programs bundle portfolio sites under one dispatch desk — shared salt inventory, GPS-verified passes, and a single escalation path for facility managers covering multiple towns.",
  },
];

export function getAllSnowLocationDefs(): SnowLocationPageDef[] {
  return LOCATION_DEFS;
}

export function getSnowLocationDef(slug: string): SnowLocationPageDef | undefined {
  return LOCATION_DEFS.find((d) => d.slug === slug);
}

export function hubUrlWithFragment(fragment: string): string {
  return `${HUB}#${fragment}`;
}

export function snowHubUrl(): string {
  return HUB;
}
