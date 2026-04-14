import type { HubCapabilityTab } from "@/content/drainage-hub-types";

/** Markdown Sections E–I — verbatim H2/H3 and body copy. */
export const DRAINAGE_HUB_CAPABILITY_TABS: HubCapabilityTab[] = [
  {
    id: "foundation-drain-tile",
    tabLabel: "Foundation drain tile",
    tabId: "tab-drain-tile",
    panelId: "panel-drain-tile",
    eyebrow: "Foundation systems",
    credentialTitle: "Foundation drain tile",
    credentialSub:
      "Your foundation's first line of defence is a properly functioning drain tile system.",
    imageSrc:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format",
    imageAlt:
      "Excavator digging a trench along a foundation for drain tile and drainage work",
    blocks: [
      {
        kind: "h2",
        text: "Foundation Drain Tile Installation & Replacement — Protecting Barrie & Simcoe County Homes",
      },
      { kind: "h3", text: "What Is Foundation Drain Tile (Weeping Tile)?" },
      {
        kind: "p",
        text: "Your foundation's first line of defence is a properly functioning drain tile system. Also called weeping tile or a sub drain, this perforated piping runs around your foundation footings to intercept groundwater and redirect it away from your basement before it can cause structural damage, mould, or flooding.",
      },
      {
        kind: "p",
        text: "Hydrostatic pressure — the force that builds when saturated soil pushes water against your foundation — is one of the primary causes of basement water infiltration in Central Ontario. A properly installed drain tile system relieves this pressure continuously, protecting your foundation from the inside out.",
      },
      {
        kind: "p",
        text: "At Ground Level Contracting, we install and replace both interior and exterior foundation drain tile systems throughout Barrie, Orillia, and Simcoe County. Whether you're dealing with a failed clay tile system in an older home, a clogged perforated pipe, or a property that was never properly drained, our team designs and installs a durable, engineered solution: sock-wrapped perforated pipe, proper washed gravel bedding, and a correctly sized connection to a sump pit or daylight outlet — built to protect your home for decades.",
      },
      { kind: "h3", text: "Signs Your Drain Tile Needs Replacement in Barrie" },
      {
        kind: "p",
        text: "If your home is showing any of the following, a drain tile inspection should be your first call:",
      },
      {
        kind: "ul",
        items: [
          "Wet or damp basement after heavy rain",
          "Water stains or white powder (efflorescence) on foundation walls",
          "Musty odour in basement or crawlspace",
          "Soggy, saturated ground along the foundation perimeter",
          "Sump pump running constantly or cycling frequently",
          "Visible cracks in foundation walls or basement floor slab",
          "Standing water in window wells",
        ],
      },
      {
        kind: "p",
        text: "Homes in Barrie and Simcoe County built before the 1980s frequently still have original clay tile systems. These systems have a finite service life — clay tiles crack, collapse, and clog with root intrusion over decades. If your home is in this age range and you have not had your drain tile inspected, proactive replacement before failure occurs is significantly less expensive than reactive repair after foundation damage has begun.",
      },
      { kind: "h3", text: "Interior vs. Exterior Drain Tile — Which Is Right For You?" },
      {
        kind: "p_lead",
        lead: "Exterior drain tile",
        rest: " is installed around the perimeter of your foundation footings from the outside during initial construction or during an exterior excavation project. It is the most comprehensive solution — intercepting water before it ever contacts your foundation wall — and is the preferred method for new construction and full foundation remediation projects.",
      },
      {
        kind: "p_lead",
        lead: "Interior drain tile",
        rest: " systems are installed inside your basement at the perimeter, channelling water that has infiltrated the wall to a sump pit for removal. Interior systems are a practical solution where full exterior excavation is not feasible due to cost, access constraints, or existing landscaping investment. They do not stop water from entering the wall but manage it effectively before it damages your living space.",
      },
      {
        kind: "p",
        text: "The right choice depends on your foundation type, the source of the water infiltration, your site's access constraints, and your project budget. We assess each situation individually and recommend the approach that provides the most effective long-term protection for your specific property.",
      },
      { kind: "h3", text: "Drain Tile Installation Process" },
      {
        kind: "ol_step",
        items: [
          {
            title: "Site assessment",
            rest: " — Identify source and pattern of water infiltration, assess existing system condition",
          },
          { title: "Excavation", rest: " — Dig to footing level around the affected perimeter" },
          {
            title: "Pipe installation",
            rest: " — Lay sock-wrapped perforated PVC pipe in a bed of washed gravel at the correct slope",
          },
          {
            title: "Gravel bedding",
            rest: " — Surround pipe with minimum 150mm of washed 3/4\" clear stone for optimal drainage",
          },
          {
            title: "Outlet connection",
            rest: " — Connect to sump pit, weeping bed, or daylight outlet as site conditions allow",
          },
          {
            title: "Backfill & grade restoration",
            rest: " — Clean backfill compacted in lifts, surface grade restored to shed water away from foundation",
          },
          {
            title: "Surface restoration",
            rest: " — Hardscaping, lawn, or landscaping reinstated as required",
          },
        ],
      },
      {
        kind: "figures",
        alts: [
          "Foundation drain tile installation Barrie Ontario weeping tile sub drain perforated pipe gravel",
          "Exterior weeping tile replacement Simcoe County perforated pipe gravel bedding",
        ],
      },
      {
        kind: "closing_link",
        before: "→ Learn more about our ",
        href: "/services/foundation-drain-tile-barrie/",
        label: "Foundation Drain Tile service page",
      },
    ],
  },
  {
    id: "site-drainage-design",
    tabLabel: "Site drainage design",
    tabId: "tab-site-drainage",
    panelId: "panel-site-drainage",
    eyebrow: "Hydrology & grading",
    credentialTitle: "Custom site drainage",
    credentialSub: "Water always finds its way — the goal is to control where it goes.",
    imageSrc:
      "https://images.unsplash.com/photo-1416879595882-3373a0480ca5?w=1200&q=80&auto=format",
    imageAlt:
      "Heavy equipment grading and shaping earth for site drainage and stormwater management",
    blocks: [
      {
        kind: "h2",
        text: "Custom Site Drainage Design — Surface & Subsurface Solutions for Simcoe County Properties",
      },
      {
        kind: "p",
        text: "Water always finds its way — the goal is to control where it goes. Poor drainage is rarely a single-point problem. It is a systemic failure: the wrong grade directing surface runoff toward the foundation, subsurface water with no clear path to a proper outlet, compacted soil preventing infiltration, and a yard that holds water in low spots after every rain event. Ground Level Contracting designs drainage systems that address the complete picture — surface flow, subsurface movement, and outlet strategy — in a permanent, engineered solution.",
      },
      {
        kind: "p",
        text: "We design and install french drains, swales, catch basins, channel drains, and corrective grading systems that prevent water from pooling around foundations, flooding yards, eroding slopes, or migrating onto neighbouring properties. Serving properties across Barrie, Wasaga Beach, Innisfil, and rural Simcoe County, our team understands the local soil conditions, frost depth requirements, clay content of native soils, and municipal drainage standards that determine what will work on your specific site — not just in theory, but through a Simcoe County winter and spring thaw cycle.",
      },
      { kind: "p_lead", lead: "What's Included in a Custom Drainage Design:", rest: "" },
      {
        kind: "ul",
        items: [
          "Site grading assessment and slope analysis",
          "Surface drainage planning — swales, channels, grade corrections",
          "Subsurface drainage planning — french drains, perforated pipe trenches, catch basins",
          "Foundation drainage integration with existing or new weeping tile",
          "Outlet determination — municipal storm sewer connection, weeping bed, or daylight outlet",
          "Soil condition and infiltration assessment",
          "Coordination with retaining wall and hardscaping work as part of an integrated project",
        ],
      },
      { kind: "p_lead", lead: "Our Drainage Solutions — What We Install:", rest: "" },
      {
        kind: "p_lead",
        lead: "French Drains:",
        rest: " A trench filled with gravel and perforated pipe that intercepts subsurface water moving through the soil and redirects it to a proper outlet. Used for yard drainage, foundation perimeter relief, and slope drainage management.",
      },
      {
        kind: "p_lead",
        lead: "Swales:",
        rest: " Engineered shallow channels — either open or planted — that intercept and redirect surface water flow. A properly designed swale is invisible when dry and highly effective when wet.",
      },
      {
        kind: "p_lead",
        lead: "Catch Basins & Channel Drains:",
        rest: " Point-collection drainage structures installed at low spots, at the base of slopes, or at hard surface edges to capture surface water before it pools or infiltrates uncontrolled areas.",
      },
      {
        kind: "p_lead",
        lead: "Corrective Grading:",
        rest: " Re-sloping the ground surface around your home or property to redirect water away from foundations, toward drainage outlets, and away from neighbouring properties. Often the most cost-effective single intervention for surface drainage problems.",
      },
      {
        kind: "p_lead",
        lead: "Subsurface Drainage Trenches:",
        rest: " For properties where water moves laterally through the soil toward a structure or low point, interceptor trenches with perforated pipe capture this flow upslope and redirect it before it reaches the problem area.",
      },
      {
        kind: "figures",
        alts: [
          "French drain installation yard drainage Barrie Ontario perforated pipe gravel",
          "Catch basin installation surface drainage Wasaga Beach Ontario",
          "Corrective grading drainage solution Innisfil Ontario sloped property",
        ],
      },
      {
        kind: "closing_link",
        before: "→ Learn more about our ",
        href: "/services/site-drainage-design-barrie/",
        label: "Site Drainage Design service page",
      },
    ],
  },
  {
    id: "retaining-walls",
    tabLabel: "Retaining walls",
    tabId: "tab-retaining-walls",
    panelId: "panel-retaining-walls",
    eyebrow: "Structure & mass walls",
    credentialTitle: "Retaining walls",
    credentialSub:
      "A retaining wall does two jobs simultaneously: it holds back earth and it makes a statement.",
    imageSrc:
      "https://images.unsplash.com/photo-1599809275671-b0932a0f3d30?w=1200&q=80&auto=format",
    imageAlt: "Natural stone and boulder retaining wall on a residential slope",
    blocks: [
      {
        kind: "h2",
        text: "Retaining Walls in Barrie & Simcoe County — Armour Stone, Block, Concrete & Engineered Solutions",
      },
      {
        kind: "p",
        text: "A retaining wall does two jobs simultaneously: it holds back earth and it makes a statement. At Ground Level Contracting, we design and build retaining walls that accomplish both — from natural armour stone walls that integrate seamlessly into rural and lakeside landscapes, to precision-engineered block systems suited to residential grade changes and commercial applications, to structural concrete walls for high-load and high-height requirements.",
      },
      {
        kind: "p",
        text: "Every retaining wall we build includes proper drainage behind the wall — because without it, even the most well-built wall will eventually fail. Hydrostatic pressure from water trapped in saturated backfill is responsible for the majority of premature retaining wall failures in Ontario. We size our walls correctly for the load they carry, prepare our base to the depth the site requires, and install crushed stone drainage backfill, weep holes, and perforated pipe as standard practice on every wall — regardless of height or material.",
      },
      { kind: "hr" },
      { kind: "h3", text: "Armour Stone Retaining Walls — Natural, Durable, No-Shift" },
      {
        kind: "p",
        text: "Armour stone retaining walls are among the most durable and visually compelling options available in Central Ontario. Each large natural limestone or granite stone — typically weighing hundreds to thousands of kilograms — is set precisely to lock the wall together without mortar, distributing load evenly across the wall face and allowing natural drainage through the structure. The result is a wall that will not shift, will not sag, and looks better with every passing year as it weathers into the landscape.",
      },
      {
        kind: "p",
        text: "Armour stone is ideally suited for lakeside properties, rural estates, sloped driveways, and high-end residential projects where a natural, substantial, permanently stable wall is the priority. The scale and weight of the material makes it inherently resistant to frost heave and lateral soil pressure — the two forces that destroy smaller-scale wall systems over time.",
      },
      {
        kind: "p",
        text: "We source armour stone from regional quarries where possible, and our equipment is rated for the placement precision and weight management that armour stone installation requires.",
      },
      {
        kind: "figures",
        alts: [
          "Armour stone retaining wall Barrie Ontario natural limestone",
          "Armour stone retaining wall lakeside property Simcoe County",
        ],
      },
      { kind: "hr" },
      { kind: "h3", text: "Segmental Block & Concrete Retaining Walls — Residential & Commercial" },
      {
        kind: "p",
        text: "Segmental concrete block retaining walls — manufactured by brands including Unilock, Risi, and Allan Block — offer engineered performance, clean modern lines, and structural load ratings for walls up to and beyond 1.2 metres. Ideal for residential grade separations, garden terracing, pool surrounds, and commercial applications where a uniform, refined appearance is required, block walls can be curved, stepped, or built in tiers to suit complex site geometries.",
      },
      {
        kind: "p",
        text: "Block wall systems are engineered products with published installation specifications. We follow manufacturer guidelines for base preparation, geogrid reinforcement schedules, and drainage requirements — ensuring the warranty and structural performance the product is rated for.",
      },
      {
        kind: "p",
        text: "For applications requiring maximum structural strength — steep slopes carrying heavy surcharge loads, walls in close proximity to structures or utilities, or sites with complex geotechnical conditions — poured concrete and precast concrete retaining walls deliver the structural performance that other materials cannot match.",
      },
      {
        kind: "figures",
        alts: [
          "Block retaining wall installation Orillia segmental concrete",
          "Tiered retaining wall with interlock patio Barrie hardscaping",
        ],
      },
      { kind: "hr" },
      { kind: "h3", text: "Engineered Retaining Wall Solutions for High-Load or High-Height Applications" },
      {
        kind: "p",
        text: "Walls exceeding standard height thresholds, walls supporting structures, roads, or driveways, or sites with complex loading conditions require engineer-stamped design drawings under Ontario Building Code. Ground Level Contracting coordinates with structural engineers to design and build retaining walls that meet code requirements — including geogrid-reinforced earth systems, sheet pile solutions, and modular gravity wall systems — and obtains the required permits and inspections as part of the project scope.",
      },
      {
        kind: "p",
        text: "If your project requires a building permit for a retaining wall, we manage that process on your behalf.",
      },
      { kind: "hr" },
      { kind: "h3", text: "Retaining Walls for Lakeside & Waterfront Properties" },
      {
        kind: "p",
        text: "Shoreline and waterfront retaining walls on Lake Simcoe, Kempenfelt Bay, and throughout Simcoe County serve a dual purpose: they protect the land from erosion while defining the boundary between improved property and the water. Armour stone is the preferred material for most shoreline applications — its mass, permeability, and natural appearance make it both structurally suited to wave and ice pressure and aesthetically appropriate for waterfront settings.",
      },
      {
        kind: "p",
        text: "We regularly build and rebuild shoreline retaining walls for lakefront homeowners across the Simcoe County region. These projects often require site-specific engineering, environmental consideration for materials near the water, and coordination with applicable regulatory requirements. We have experience navigating these requirements and can advise on the permitting process as part of the project planning phase.",
      },
      {
        kind: "figures",
        alts: [
          "Retaining wall drainage backfill crushed stone weep holes Barrie",
          "Waterfront armour stone wall Innisfil Lake Simcoe shoreline",
        ],
      },
      {
        kind: "closing_link",
        before: "→ Learn more about our ",
        href: "/services/retaining-walls-barrie/",
        label: "Retaining Wall service page",
      },
    ],
  },
  {
    id: "patios-driveways-steps",
    tabLabel: "Patios & driveways",
    tabId: "tab-patios",
    panelId: "panel-patios",
    eyebrow: "Hard surfaces",
    credentialTitle: "Patios, walkways & driveways",
    credentialSub:
      "The hardscape surfaces on your property are where function meets lifestyle.",
    imageSrc:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80&auto=format",
    imageAlt: "Interlocking paver patio and walkway with clean edge detailing",
    blocks: [
      {
        kind: "h2",
        text: "Patios, Walkways, Driveways & Steps — Stone, Interlock & Concrete in Barrie & Simcoe County",
      },
      {
        kind: "p",
        text: "The hardscape surfaces on your property are where function meets lifestyle. A well-designed interlock patio, natural stone walkway, or exposed aggregate driveway doesn't just add curb appeal and outdoor living space — it solves drainage and grade challenges at the same time. Every hardscape project we build starts with proper base preparation: the right depth, the right compacted aggregate layers, and the right drainage integration so your surfaces perform as beautifully in year fifteen as they do on installation day.",
      },
      { kind: "hr" },
      { kind: "h3", text: "Interlock Paver Patios & Driveways" },
      {
        kind: "p",
        text: "Interlocking concrete paving stone is the most versatile and widely specified hardscape surface in the Barrie and Simcoe County market. Available in hundreds of sizes, profiles, colours, and textures from manufacturers including Unilock, Permacon, and Cambridge, interlock allows virtually unlimited design flexibility — from traditional herringbone driveways to contemporary large-format patio systems.",
      },
      {
        kind: "p",
        text: "The structural performance of an interlock installation is entirely dependent on base preparation. We excavate to the correct depth for the soil conditions and frost exposure on your specific site, compact Granular A base in mechanically compacted lifts, and install a calibrated bedding sand layer before setting paving units. This base system is what separates an interlock installation that lasts 20 years from one that settles and shifts within a season.",
      },
      {
        kind: "p",
        text: "Drainage integration — whether that means a positive cross-slope, a perforated edge pipe, or a channel drain at a transition point — is assessed and incorporated into every interlock project.",
      },
      {
        kind: "figures",
        alts: [
          "Interlock patio installation Barrie Ontario unilock paving stone",
          "Interlock driveway installation Innisfil paving stone",
        ],
      },
      { kind: "hr" },
      { kind: "h3", text: "Natural Stone & Flagstone Patios" },
      {
        kind: "p",
        text: "Natural flagstone — limestone, granite, slate, and sandstone — creates a hardscape surface that is genuinely irreplaceable in its visual character. No manufactured product fully replicates the variation, texture, and warmth of real stone. At Ground Level Contracting, we source and install natural flagstone patios, walkways, and feature areas throughout Simcoe County, cutting and fitting stone for consistent joint spacing and a finished surface that rewards closer inspection.",
      },
      {
        kind: "p",
        text: "Natural stone installations require more skilled labour than interlock and command a premium, but they deliver an aesthetic outcome and a permanence that elevates a property distinctly.",
      },
      {
        kind: "figures",
        alts: ["Natural stone flagstone patio Orillia Simcoe County"],
      },
      { kind: "hr" },
      { kind: "h3", text: "Stamped & Exposed Aggregate Concrete" },
      {
        kind: "p",
        text: "Concrete offers strength, longevity, and design versatility in a single material. Exposed aggregate concrete — where the surface paste is washed away to reveal the stone aggregate beneath — provides a slip-resistant, textured finish suited to driveways, pool surrounds, and walkways. Stamped concrete applies embossed pattern and colour to create the appearance of natural stone, brick, or wood plank at a lower material cost than the real thing.",
      },
      {
        kind: "p",
        text: "Both finishes require skilled formwork, proper mix design, and controlled curing. We manage the full process: subgrade preparation, form installation, reinforcing, pour, finish, and sealing — delivering a concrete installation that performs structurally and looks exceptional.",
      },
      {
        kind: "figures",
        alts: [
          "Exposed aggregate driveway Barrie Ontario concrete",
          "Stamped concrete patio Barrie Ontario",
        ],
      },
      { kind: "hr" },
      { kind: "h3", text: "Walkways, Steps & Stairways — Connecting Your Outdoor Space" },
      {
        kind: "p",
        text: "Steps, stairways, and walkways are the connective tissue of an outdoor living space — and when built in natural stone or armour stone, they become features in their own right. We design and build:",
      },
      {
        kind: "ul_lead",
        items: [
          {
            lead: "Natural stone and armour stone steps",
            rest: " — Set into grade for a permanent, natural appearance. No mortar required.",
          },
          {
            lead: "Interlock paving stone steps",
            rest: " — Engineered step units in block or paving stone for a clean, contemporary aesthetic.",
          },
          {
            lead: "Poured concrete steps and staircases",
            rest: " — Structurally engineered, reinforced, and finished to match adjacent hard surfaces.",
          },
          {
            lead: "Flagstone stepping stone paths",
            rest: " — Informal pathways set in gravel, mulch, or turf for connecting garden zones.",
          },
        ],
      },
      {
        kind: "p",
        text: "Grade change and step integration is an area where drainage planning is critical — water must be directed away from and off step surfaces, not allowed to pond or infiltrate behind risers. This is standard in our design process.",
      },
      {
        kind: "figures",
        alts: [
          "Natural stone steps front entrance Simcoe County",
          "Armour stone steps walkway Barrie Ontario hardscaping",
        ],
      },
      {
        kind: "closing_link",
        before: "→ Learn more about our ",
        href: "/services/interlock-patios-barrie/",
        label: "Patios & Walkways service page",
      },
    ],
  },
  {
    id: "hardscape-integration",
    tabLabel: "Hardscape integration",
    tabId: "tab-integration",
    panelId: "panel-integration",
    eyebrow: "Whole-site sequencing",
    credentialTitle: "Integrated delivery",
    credentialSub: "Not every property is a flat, easy build.",
    imageSrc:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80&auto=format",
    imageAlt:
      "Waterfront and lakeside property with terraced landscape and integrated outdoor structures",
    blocks: [
      {
        kind: "h2",
        text: "Hardscape & Landscape Integration — Lakeside, High-Grade & High-End Property Specialists",
      },
      {
        kind: "p",
        text: "Not every property is a flat, easy build. Some of the most striking properties in Simcoe County — lakefront homes on Lake Simcoe, hillside properties in Oro-Medonte, sloped rural lots near Wasaga Beach and Innisfil — present real engineering and design challenges. These are the projects we approach with the most enthusiasm.",
      },
      {
        kind: "p",
        text: "When a site has significant grade changes, drainage complexity, or waterfront conditions, the integration of drainage systems, retaining walls, terraced hardscaping, and planting zones must be designed as a single cohesive system — not assembled from separate contractor scopes that don't talk to each other. A retaining wall that is not drained correctly will fail. A patio that is not graded correctly will flood. A french drain that outlets into the wrong location will create a new problem while solving the original one.",
      },
      {
        kind: "p",
        text: "Ground Level Contracting brings a whole-site perspective to these challenging projects. We assess the full drainage, grade, and design picture before a single machine moves, and we sequence excavation, drainage installation, wall construction, and surface hardscaping in the correct order — because the order matters.",
      },
      { kind: "p_lead", lead: "What We Deliver on Challenging Properties:", rest: "" },
      {
        kind: "ul_lead",
        items: [
          {
            lead: "Terraced hardscaping on sloped lots",
            rest: " — Converting unusable slope into a series of usable, beautifully hardscaped outdoor living levels connected by stone steps and retaining walls.",
          },
          {
            lead: "Lakeside and waterfront integration",
            rest: " — Armour stone shoreline walls, natural stone patio terraces stepping down to the water, and drainage systems that protect against both runoff and shoreline erosion.",
          },
          {
            lead: "High-end design execution",
            rest: " — For properties where the design vision is as important as the engineering, we deliver finished quality to the level that luxury properties in Simcoe County require.",
          },
          {
            lead: "Drainage-first design methodology",
            rest: " — For every project, drainage is resolved first. The hardscaping is built on top of a drainage foundation that performs — not retrofitted around a water problem that keeps coming back.",
          },
          {
            lead: "Full excavation and grade management",
            rest: " — We bring our hauling capability to every project, managing spoils, importing material, and finishing grade as an integrated part of the project scope.",
          },
        ],
      },
      {
        kind: "p",
        text: "When a project requires drainage to be the foundation on which beautiful hardscaping is built, Ground Level Contracting is the team Simcoe County property owners trust to get it right.",
      },
      {
        kind: "figures",
        alts: [
          "Lakeside hardscaping drainage retaining wall Simcoe County Ontario",
          "Sloped property hardscape drainage integration Barrie Ontario",
          "High-end outdoor living space hardscaping Barrie Ontario",
          "Waterfront patio armour stone retaining wall Lake Simcoe",
          "Challenging grade hardscape solution Oro-Medonte Ontario",
        ],
      },
    ],
  },
];
