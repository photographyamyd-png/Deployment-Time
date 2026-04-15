/**
 * Homepage services STC1 band — background art + bullets + stat card copy per mega-menu slug.
 * Keeps MegaMenuCard type minimal; imagery lives here until optional CMS fields exist.
 */

export const SERVICE_STC_BG: Record<string, string> = {
  "excavation-site-preparation":
    "/images/drainage-hardscaping/work-cap-foundation-trench.jpg",
  "foundations-civil-infrastructure":
    "/images/drainage-hardscaping/work-cap-retaining-timber-grading.jpg",
  "drainage-hardscaping":
    "/images/drainage-hardscaping/work-overview-dry-creek-steps.jpg",
  "hauling-site-clearing-logistics":
    "/images/drainage-hardscaping/work-cap-concrete-stairs-rock-channel.jpg",
  "snow-removal": "/images/drainage-hardscaping/hero-wide.png",
};

export const SERVICE_STC_FEATURES: Record<string, string[]> = {
  "excavation-site-preparation": [
    "Bulk excavation & mass grading",
    "Site stripping & topsoil management",
    "Rough & precision grade to engineer spec",
    "Haul-off, import, and placement coordination",
  ],
  "foundations-civil-infrastructure": [
    "Footing & frost wall excavation",
    "Structural backfill & compaction",
    "Utility & civil trenching",
    "Shoring coordination & safety staging",
  ],
  "drainage-hardscaping": [
    "Surface grading & storm routing",
    "Catch basins, tile, and swales",
    "Retaining & hardscape tie-ins",
    "Lot drainage compliance focus",
  ],
  "hauling-site-clearing-logistics": [
    "Export / import trucking",
    "Clearing, grubbing, and demo haul-off",
    "On-site material handling",
    "Tight-site logistics planning",
  ],
  "snow-removal": [
    "Commercial lots & circulation routes",
    "Salting & ice control programs",
    "Seasonal contracts & dispatch",
    "After-hours storm response",
  ],
};

export const SERVICE_STC_STATS: Record<
  string,
  {
    badge: string;
    primary: { num: string; label: string; sub?: string };
    secondary: { num: string; label: string; sub?: string };
  }
> = {
  "excavation-site-preparation": {
    badge: "Service focus",
    primary: { num: "100+", label: "Site & pad projects", sub: "Commercial & civil" },
    secondary: { num: "5–10", label: "Day mobilization", sub: "Typical window" },
  },
  "foundations-civil-infrastructure": {
    badge: "Service focus",
    primary: { num: "60+", label: "Foundation packages", sub: "Structural earthwork" },
    secondary: { num: "0", label: "Brokered crews", sub: "In-house operators" },
  },
  "drainage-hardscaping": {
    badge: "Service focus",
    primary: { num: "80+", label: "Drainage & grade jobs", sub: "Storm & lot work" },
    secondary: { num: "1", label: "Dispatch standard", sub: "Coordinated with excavation" },
  },
  "hauling-site-clearing-logistics": {
    badge: "Service focus",
    primary: { num: "24h", label: "Dispatch availability", sub: "Peak season windows" },
    secondary: { num: "Fleet", label: "Haul & support iron", sub: "Matched to site" },
  },
  "snow-removal": {
    badge: "Service focus",
    primary: { num: "24/7", label: "Storm coverage", sub: "Commercial programs" },
    secondary: { num: "40+", label: "Active seasonal sites", sub: "Lots & routes" },
  },
};

export function serviceStcBackground(slug: string): string {
  return (
    SERVICE_STC_BG[slug] ??
    "/images/drainage-hardscaping/work-cap-foundation-trench.jpg"
  );
}

export function serviceStcFeatures(slug: string): string[] {
  return (
    SERVICE_STC_FEATURES[slug] ?? [
      "Commercial-grade equipment",
      "Licensed & insured crews",
      "Simcoe County dispatch",
      "Single-point project contact",
    ]
  );
}

export function serviceStcStats(slug: string) {
  return (
    SERVICE_STC_STATS[slug] ?? {
      badge: "Service focus",
      primary: { num: "15+", label: "Years in the field", sub: "Commercial earthwork" },
      secondary: { num: "5", label: "Core lines", sub: "One contractor" },
    }
  );
}
