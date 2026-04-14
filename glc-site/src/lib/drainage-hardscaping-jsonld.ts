import type { SiteConfig } from "@/content/types";
import { canonicalUrl } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";
import { getSiteOrigin } from "@/lib/site-url";

/** §1.3 FAQPage answers (schema.org) — verbatim from content brief; visible FAQ copy may differ slightly. */
const FAQ_SCHEMA_ENTITIES = [
  {
    "@type": "Question",
    name: "What is foundation drain tile and how does it work?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Foundation drain tile — also called weeping tile or a sub drain — is a perforated pipe installed around the base of your foundation footings. It collects groundwater and directs it away from your home to a sump pit or daylight outlet, preventing hydrostatic pressure from building against your foundation walls and causing leaks, cracks, or basement flooding.",
    },
  },
  {
    "@type": "Question",
    name: "How do I know if my weeping tile needs to be replaced in Barrie?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Common signs include a chronically wet basement, water stains or white powder (efflorescence) on foundation walls, a sump pump that runs constantly, soggy ground along the foundation, or a musty smell in the basement. Homes in Barrie and Simcoe County built before the 1980s may still have original clay tile systems that are prone to collapse and clogging and should be inspected and replaced proactively.",
    },
  },
  {
    "@type": "Question",
    name: "What type of retaining wall is best for my property in Simcoe County?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "The right retaining wall depends on your site conditions, height requirements, aesthetic goals, and budget. Armour stone is ideal for natural, rural, lakeside, and high-load applications. Segmental block suits residential grade changes and modern aesthetics. Concrete or engineered systems are required for tall walls, proximity to structures, or high surcharge loads. We assess every site individually and recommend the best solution for your specific property.",
    },
  },
  {
    "@type": "Question",
    name: "Does a retaining wall need drainage behind it?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Absolutely. Without proper drainage, water pressure — called hydrostatic pressure — builds behind the wall and is one of the leading causes of retaining wall failure. Every wall we build includes appropriate drainage as standard practice: crushed stone backfill, weep holes, and perforated pipe where required.",
    },
  },
  {
    "@type": "Question",
    name: "Can you fix drainage problems on a sloped property near Barrie?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Sloped and challenging properties are a specialty of ours. We design and install custom surface and subsurface drainage systems — including french drains, swales, catch basins, and corrective grading — combined with retaining walls and terraced hardscaping to manage water permanently and create beautiful, functional outdoor spaces.",
    },
  },
  {
    "@type": "Question",
    name: "Do you build retaining walls on waterfront and lakeside properties in Simcoe County?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. We regularly work on lakeside and waterfront properties around Lake Simcoe, Kempenfelt Bay, and throughout Simcoe County. Armour stone walls are particularly well-suited to shoreline applications, providing erosion protection while blending naturally into the landscape.",
    },
  },
  {
    "@type": "Question",
    name: "What areas do you serve for drainage and hardscaping?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We serve Barrie, Orillia, Wasaga Beach, Innisfil, Angus, Springwater, Oro-Medonte, New Tecumseth, Midland, Penetanguishene, and surrounding communities throughout Simcoe County and Central Ontario.",
    },
  },
  {
    "@type": "Question",
    name: "How long does a drain tile system last?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "A properly installed modern perforated PVC pipe system with sock wrap and gravel bedding can last 25 to 50 or more years. Older clay tile systems commonly found in pre-1980s Barrie homes are past their service life and should be inspected and replaced proactively to avoid costly foundation damage.",
    },
  },
];

function telSchema(tel: string): string {
  const digits = tel.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) {
    return `+1-${digits.slice(1, 4)}-${digits.slice(4, 7)}-${digits.slice(7)}`;
  }
  return tel;
}

export function buildDrainageHardscapingJsonLd(site: SiteConfig): Record<string, unknown> {
  const origin = getSiteOrigin();
  const businessId = `${origin}/#business`;
  const servicePath = ROUTES.service("drainage-hardscaping");
  const serviceUrl = canonicalUrl(servicePath);
  const serviceId = `${serviceUrl.replace(/\/$/, "")}#service`;
  const tel = telSchema(site.telephone);

  const provider: Record<string, unknown> = {
    "@type": "LocalBusiness",
    "@id": businessId,
    name: site.name,
    url: origin,
    telephone: tel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.3894,
      longitude: -79.6903,
    },
    priceRange: "$$",
    image: `${origin}/images/logo.png`,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
      "@type": "Service",
      "@id": serviceId,
      serviceType: "Drainage and Hardscaping",
      name: "Drainage & Hardscaping Services",
      description:
        "Ground Level Contracting provides complete drainage and hardscaping services throughout Barrie and Simcoe County, Ontario — including foundation drain tile installation and replacement, custom site drainage design, french drains, retaining walls in armour stone, segmental block and concrete, interlock patios, driveways, natural stone walkways, and hardscape integration for sloped, lakeside, and challenging-grade properties.",
      url: serviceUrl.replace(/\/$/, ""),
      provider,
      areaServed: [
        { "@type": "City", name: "Barrie" },
        { "@type": "City", name: "Orillia" },
        { "@type": "City", name: "Innisfil" },
        { "@type": "City", name: "Wasaga Beach" },
        { "@type": "City", name: "Angus" },
        { "@type": "City", name: "Springwater" },
        { "@type": "City", name: "Oro-Medonte" },
        { "@type": "City", name: "New Tecumseth" },
        { "@type": "City", name: "Midland" },
        { "@type": "City", name: "Penetanguishene" },
        { "@type": "City", name: "Bradford West Gwillimbury" },
        { "@type": "City", name: "Collingwood" },
        { "@type": "AdministrativeArea", name: "Simcoe County" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Drainage & Hardscaping Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Foundation Drain Tile Installation & Replacement" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Site Drainage Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "French Drain Installation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Armour Stone Retaining Walls" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Segmental Block Retaining Walls" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interlock Patio Installation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interlock Driveway Installation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Natural Stone & Flagstone Patios" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concrete Steps & Walkways" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hardscape & Drainage Integration" } },
        ],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": businessId,
      name: site.name,
      description:
        "Ground Level Contracting is a drainage and hardscaping contractor based in Barrie, Ontario, serving Simcoe County and surrounding communities. Services include foundation drain tile, custom site drainage, retaining walls, interlock patios, natural stone walkways, driveways, and hardscape integration.",
      url: origin,
      telephone: tel,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.streetAddress,
        addressLocality: site.address.addressLocality,
        addressRegion: site.address.addressRegion,
        postalCode: site.address.postalCode,
        addressCountry: site.address.addressCountry,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "14:00",
        },
      ],
      hasMap: "https://maps.google.com/?q=Ground+Level+Contracting+Barrie+ON",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${origin}/services/` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Drainage & Hardscaping",
          item: serviceUrl.replace(/\/$/, ""),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_SCHEMA_ENTITIES,
    },
    ],
  };
}
