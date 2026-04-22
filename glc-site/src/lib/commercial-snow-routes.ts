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
  /** Single hero sentence — real local geography (dark hero, under H1). */
  heroGeoSentence: string;
  /** Editorial intro — local geography & GLC positioning (white overview, left column). */
  uniqueIntro: string;
  /** Left column: concrete programs delivered in this market. */
  servicesOfferedLocally: string;
  /** Left column: contracts, SLAs, documentation, accountability. */
  contractsAndDocumentation: string;
};

const LOCATION_DEFS: SnowLocationPageDef[] = [
  {
    slug: "commercial-snow-removal-barrie-ontario",
    label: "commercial snow removal in Barrie",
    placeName: "Barrie",
    metaTitle: "Commercial Snow Removal Barrie Ontario | Ground Level Contracting",
    metaDescription:
      "24/7 commercial snow removal & ice management for Barrie, Ontario businesses. Parking lots, industrial yards, SLAs. Licensed & insured. 705-619-4902.",
    heroGeoSentence:
      "From Essa Road plazas to Mapleview Drive and the Highway 400 interchanges, overnight accumulation has to be gone before the first tenant arrivals and commuter surge.",
    uniqueIntro:
      "Barrie's commercial corridor along Essa Road, Mapleview Drive, and the 400-series interchange sees heavy overnight traffic that demands pre-dawn lot clearing. GLC's Barrie-based crews run proactive routes before your site opens, with salting and ice management built into every contract.",
    servicesOfferedLocally:
      "Ground Level Contracting runs commercial-only snow and ice management for Barrie retail plazas, office parks, medical campuses, and logistics yards dispatched from our Barrie-based team. Programs cover parking lot plowing with fire-route and accessible-stall sequencing, loader and bobcat passes around cart corrals and tight islands, granular and liquid de-icing when Georgian Bay–driven squalls refreeze pavement fast, and berm management or haul-off when piles steal stalls or break sight triangles toward Highway 400 ramps. We align blade patterns with your operating hours, tenant expectations, and snow-storage plan so high-traffic corridors stay open for customers, staff, and emergency access—not cleared once and abandoned until the next headline storm.",
    contractsAndDocumentation:
      "Seasonal agreements bundle preseason mapping, trigger depths, ice-revisit rules, and escalation language so facility managers know when trucks roll and when a supervisor is notified. Hybrid and per-event structures are available for owners who mix flagship Barrie addresses with secondary sites elsewhere in Simcoe County. Service verification uses GPS-tracked equipment and documentation packages suited to insurer reviews after slip incidents. One accountable line—705-619-4902—reaches dispatch when radar outruns the forecast. We do not book residential driveways; winter capacity stays on commercial and industrial scale so Barrie properties get crew attention that matches traffic counts, liability exposure, and your brand standards.",
  },
  {
    slug: "commercial-snow-removal-orillia-ontario",
    label: "serving Orillia businesses",
    placeName: "Orillia",
    metaTitle: "Commercial Snow Removal Orillia Ontario | Ground Level Contracting",
    metaDescription:
      "Commercial snow removal & ice control for Orillia businesses and institutions. Simcoe County contractor. GPS-tracked fleets & contracts. 705-619-4902.",
    heroGeoSentence:
      "Lake Simcoe weather, the Casino Rama corridor, and West Street’s steady pedestrian traffic leave little room for late openings after a lake-effect band settles in.",
    uniqueIntro:
      "Orillia's Casino Rama corridor, West Street commercial strip, and expanding industrial park require contractors who understand the city's tight response windows during Lake Simcoe weather events. GLC manages seasonal snow contracts with GPS-tracked dispatch and documented response logs.",
    servicesOfferedLocally:
      "Locally we support Orillia institutions, retail strips, and industrial sites with parking lot programs that prioritize accessible routes, fire lanes, and storefront approaches before secondary aisles. Crews stage salt and liquids for refreeze cycles common along the lake, run loader support when berms block drainage or sight lines, and coordinate timing around entertainment and weekend peaks that change stall demand near Rama and the downtown core. Where property managers oversee mixed portfolios, we standardize priority maps and communication rhythms so on-site staff hear the same dispatch story your head office does—without improvising pass counts storm to storm.",
    contractsAndDocumentation:
      "Contracts spell out response tiers, revisits after freezing rain, and documentation expectations so you can answer tenants, municipal contacts, and carriers with specifics. GPS-tracked passes and logged treatments support post-event reviews; seasonal pricing can include preseason walkthroughs to update pile locations, hazard flags, and priority sequencing before the first significant event. Call 705-619-4902 to align SLAs with Orillia operating realities rather than generic county defaults. Commercial and industrial focus means crews, equipment, and salt inventory stay sized for business liability—not residential routes that dilute emergency response when you need it most.",
  },
  {
    slug: "commercial-snow-removal-innisfil-ontario",
    label: "Innisfil commercial properties",
    placeName: "Innisfil",
    metaTitle: "Commercial Snow Removal Innisfil Ontario | Ground Level Contracting",
    metaDescription:
      "Commercial snow plowing & ice management for Innisfil properties. Seasonal contracts, emergency response, Simcoe County coverage. 705-619-4902.",
    heroGeoSentence:
      "Friday Harbour, Big Bay Point Road, and new commercial pads along the lakeshore see rapid growth—and storm paths that do not behave like Barrie’s urban core.",
    uniqueIntro:
      "Innisfil's Friday Harbour corridor and the Big Bay Point Road commercial zone have created new demand for reliable commercial snow management in an area that was previously underserved. GLC provides seasonal contracts for Innisfil commercial properties, plazas, and development sites.",
    servicesOfferedLocally:
      "We deliver commercial plowing, ice control, and stacking strategies for Innisfil plazas, estate-commercial pads, and expanding development sites where curb geometry and drainage vary block by block. Equipment is matched to lot size—heavy pushes where acreage warrants it, agile machines where islands and tight turning radii dominate. Salt and liquid programs account for lakeshore wind exposure and melt–refreeze, and we plan berm placement so future phases still have staging room when the snow season runs long. For property managers adding addresses in Innisfil alongside legacy Barrie flags, one program design can cover both markets with consistent documentation and dispatch language.",
    contractsAndDocumentation:
      "Agreements capture trigger depths, after-hours escalation, and whether haul-off or on-site stacking is the default when space is tight on newer pads. Seasonal contracts include preseason mapping updates as tenants change, with GPS-backed verification when boards ask for proof of treatment. Reach 705-619-4902 to discuss hybrid pricing if some Innisfil assets are seasonal while others operate year-round. Our commercial-only focus keeps trucks and supervisors allocated to business liability profiles rather than scattered across low-priority residential callbacks that steal capacity during peak events.",
  },
  {
    slug: "commercial-snow-removal-wasaga-beach-ontario",
    label: "Wasaga Beach business snow services",
    placeName: "Wasaga Beach",
    metaTitle: "Commercial Snow Removal Wasaga Beach Ontario | Ground Level Contracting",
    metaDescription:
      "Business snow removal & de-icing for Wasaga Beach, Ontario. Commercial lots, retail & institutional sites across Simcoe County. 705-619-4902.",
    heroGeoSentence:
      "Mosley Street and River Road West blend resort-season peaks with year-round retail—clearing and ice control have to flex between volume weekends and quieter shoulder-week patterns.",
    uniqueIntro:
      "Wasaga Beach's seasonal commercial properties and year-round businesses along Mosley Street and River Road West require a snow contractor who can handle both peak-season volume and off-season light maintenance. GLC offers flexible commercial contracts for Wasaga Beach's mixed resort property landscape.",
    servicesOfferedLocally:
      "Ground Level Contracting serves Wasaga Beach commercial pads, hospitality-adjacent lots, and institutional sites with programs that respect pedestrian-heavy frontages and weekend traffic swings. We sequence fire routes and accessible parking first, manage ice on walkways and approaches where slip exposure is highest, and adjust salt strategy when sun angle and lake moisture drive rapid refreeze on exposed asphalt. Loader support clears wide pushes when events stack snow fast; between peaks we maintain berms and drainage paths so melt does not re-flood stalls. Contracts can scale crew commitment upward for holiday and event windows and downward in shoulder season while keeping the same documentation standards year-round.",
    contractsAndDocumentation:
      "Flexible agreements pair preseason priority maps with clear trigger and revisit language so owners know when lots are contractually complete versus when a refreeze pass is already included. GPS-tracked equipment supports verification for insurers and franchise standards; hybrid seasonal and per-event pricing is available when summer occupancy looks nothing like January. Phone 705-619-4902 to align response with your actual operating calendar—not a one-rate assumption built for purely urban sites. We remain commercial-focused so Wasaga Beach businesses receive dispatch attention sized to public-facing liability rather than competing with residential drive-through lists.",
  },
  {
    slug: "commercial-snow-removal-simcoe-county",
    label: "throughout Simcoe County",
    placeName: "Simcoe County",
    metaTitle: "Commercial Snow Removal Simcoe County | Ground Level Contracting",
    metaDescription:
      "County-wide commercial snow removal: Barrie, Orillia, Innisfil, Wasaga Beach & Simcoe County. Industrial, retail & portfolio programs. 705-619-4902.",
    heroGeoSentence:
      "County portfolios stretch from Barrie’s dense urban core to rural industrial yards in Essa, Springwater, and Oro-Medonte—one playbook has to cover unlike sites under the same SLA.",
    uniqueIntro:
      "Simcoe County's commercial properties span from Barrie's urban core to rural industrial sites in Essa, Springwater, and Oro-Medonte. GLC coordinates multi-site commercial snow programs across the county with centralized dispatch, consistent response SLAs, and a single point of contact.",
    servicesOfferedLocally:
      "We coordinate multi-location commercial programs across Simcoe County: retail and office in Barrie, institutional and entertainment-adjacent sites in Orillia, growth-corridor plazas in Innisfil, resort-area commercial in Wasaga Beach, and rural industrial in Essa, Springwater, Oro-Medonte, and surrounding townships. Dispatch plans route density by region so urban tight lots and wide yard pushes each get correctly sized equipment. Salt inventory, liquid de-icer, and backup assets are managed centrally—reducing the risk that a secondary site waits because a smaller contractor exhausted local stock. Priority maps and tenant communication templates can be standardized across your portfolio while still reflecting each property’s unique fire-route and accessible-stall layout.",
    contractsAndDocumentation:
      "County-wide contracts centralize billing, escalation, and documentation format so regional managers compare apples-to-apples after every event. SLAs reference consistent trigger depths and ice-revisit rules with room for site-specific addenda where municipal or landlord requirements differ. GPS-verified passes and treatment logs roll up to portfolio reports when home office asks for proof of service. Call 705-619-4902 to replace a patchwork of local operators with one accountable commercial partner. We maintain commercial and industrial focus only—keeping winter capacity aligned with business continuity, insurer expectations, and the mixed geography Simcoe County throws at facility teams.",
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
