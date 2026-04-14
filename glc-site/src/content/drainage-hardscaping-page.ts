/** Verbatim marketing + SEO copy for the drainage & hardscaping hub (Markdown Part 2). */

/** §E–I interactive band: shell chrome + sticky column (all UI copy lives here). */
export const DRAINAGE_HUB_INTERACTIVE = {
  sectionAriaLabel: "Drainage and hardscaping capabilities",
  eyebrow: "Capabilities",
  stickyH2Line1: "Precision from the",
  stickyH2Accent: "Ground Up",
  tabPanelPrimaryCta: "Site consult",
  tabPanelSecondaryCta: "Request a quote",
  tabPanelSecondaryHref: "#request-site-visit",
} as const;

export const DRAINAGE_HUB_MID_CTA = {
  heading: "Ready to fix your drainage problem or start your hardscaping project?",
  supporting:
    "Free site assessments across Barrie, Orillia & Simcoe County. Written quotes within 48 hours.",
  primaryLabel: "Book Your Free Site Visit",
  secondaryLabel: "Call",
} as const;

export const DRAINAGE_HUB_HERO = {
  h1: "Drainage & Hardscaping Contractors Serving Barrie, Simcoe County & Surrounding Areas",
  /** First clause before ` — ` is the hero lead; remainder is `.hero-v2__lede-body` (spec §4.4). */
  subhead:
    "We solve the water problems other contractors ignore — and build the hardscapes that turn challenging grades into exceptional outdoor spaces.",
  primaryCta: "Get Your Free Drainage Assessment",
  secondaryCta: "Book a Free Site Visit",
  tertiaryCtaPrefix: "Call Us:",
  vertLabel: "Drainage & hardscape",
  breadcrumbCurrent: "Drainage & Hardscaping",
  imageAlt:
    "Drainage and hardscaping contractor Barrie Ontario armour stone retaining wall and interlock patio",
} as const;

/** Trust rail (st3) chrome — was hardcoded in the section component. */
export const DRAINAGE_HUB_TRUST_ST3 = {
  ariaLabel: "Trust highlights",
  sideLabel: "Proof",
} as const;

export const DRAINAGE_HUB_TRUST_BAR: { stat: string; label: string }[] = [
  { stat: "Drainage & Hardscaping Specialists", label: "Not a generalist landscaper" },
  { stat: "Barrie to Simcoe County", label: "9+ communities served" },
  { stat: "Licensed & Fully Insured", label: "WSIB Compliant" },
  { stat: "Free Site Assessments", label: "No-obligation quotes" },
];

export const DRAINAGE_HUB_OVERVIEW_EYEBROW = "Value proposition";

/** Homepage §7.2-style display heading fragments (before / gold accent / after). */
export const DRAINAGE_HUB_OVERVIEW_HEADING_BEFORE = "Simcoe County's ";
export const DRAINAGE_HUB_OVERVIEW_HEADING_ACCENT = "Drainage & Hardscape";
export const DRAINAGE_HUB_OVERVIEW_HEADING_AFTER = " Specialist — One Crew, Permanent Results";

/** §7.3 media chip — mirrors `mediaStat` pattern from home about. */
export const DRAINAGE_HUB_OVERVIEW_MEDIA_STAT = {
  value: "9+",
  label: "Communities served",
} as const;

export const DRAINAGE_HUB_OVERVIEW_BADGE = "Licensed & insured";

/** §7.2 credentials grid (2×2). */
export const DRAINAGE_HUB_OVERVIEW_CREDENTIALS: { title: string; sub: string }[] = [
  {
    title: "Drainage-first sequencing",
    sub: "Tile, French drains, and grading before finished caps",
  },
  {
    title: "Integrated hardscaping",
    sub: "Armour stone, interlock, and engineered walls",
  },
  {
    title: "Single-contractor accountability",
    sub: "One crew, one warranty conversation",
  },
  {
    title: "Written scopes",
    sub: "Line-item proposals and realistic timelines",
  },
];

export const DRAINAGE_HUB_OVERVIEW_PARAS: string[] = [
  "Ground Level Contracting is Simcoe County's trusted specialist for complete drainage and hardscaping solutions — from foundation drain tile installation and custom site drainage design, to armour stone retaining walls, interlock patios, and luxury outdoor living spaces. We solve the water problems other contractors ignore, and we build the hardscapes that turn challenging grades into stunning, functional environments.",
  "Our competitive advantage is the combination most contractors in this region cannot offer: deep drainage expertise paired with professional hardscaping capability under a single contractor. The 3/4\" clear stone going into your french drain, the armour stone wall holding back your slope, and the interlock patio sitting at the base of it — designed together, installed by the same crew, and built to perform for decades.",
  "We serve Barrie, Orillia, Wasaga Beach, Innisfil, Angus, Springwater, Oro-Medonte, New Tecumseth, and surrounding communities throughout Simcoe County and Central Ontario.",
  "Whether your project starts with a drainage problem or a design vision, it ends with a permanent solution.",
];

/** Overview column image (placeholder until client assets). */
export const DRAINAGE_HUB_OVERVIEW_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format";
export const DRAINAGE_HUB_OVERVIEW_IMAGE_ALT =
  "Outdoor living and hardscape installation showing integrated patio and landscape on a graded property";

export const DRAINAGE_HUB_SCOPE_EYEBROW = "Scope";

/** Visible H2 for the scope card grid (fragmented in the view). */
export const DRAINAGE_HUB_SCOPE_H2 = "Service overview — cards";

export const DRAINAGE_HUB_SCOPE_CARDS: {
  id: string;
  title: string;
  body: string;
  linkLabel: string;
  href: string;
}[] = [
  {
    id: "foundation-drain-tile",
    title: "Foundation Drain Tile",
    body: "Protect your foundation with properly installed weeping tile — perforated pipe, sock wrap, gravel bedding, and correct outlet connection that lasts 25–50+ years.",
    linkLabel: "View Foundation Drain Tile Details",
    href: "#foundation-drain-tile",
  },
  {
    id: "site-drainage-design",
    title: "Custom Site Drainage Design",
    body: "Surface and subsurface drainage systems — french drains, swales, catch basins, corrective grading — designed for your property's specific soil conditions and topography.",
    linkLabel: "View Site Drainage Details",
    href: "#site-drainage-design",
  },
  {
    id: "retaining-walls",
    title: "Retaining Walls",
    body: "Armour stone, segmental block, and engineered concrete retaining walls built with proper drainage backfill — walls that hold, drain, and look exceptional.",
    linkLabel: "View Retaining Wall Details",
    href: "#retaining-walls",
  },
  {
    id: "patios-driveways-steps",
    title: "Patios, Driveways & Steps",
    body: "Interlock paving stone, natural flagstone, exposed aggregate concrete, and natural stone steps — all built on properly prepared bases with integrated drainage.",
    linkLabel: "View Patios & Driveways Details",
    href: "#patios-driveways-steps",
  },
  {
    id: "hardscape-integration",
    title: "Hardscape & Landscape Integration",
    body: "Lakefront, hillside, and high-grade properties require more than a shovel and a load of stone. We design and build integrated solutions where drainage and hardscaping work as one system.",
    linkLabel: "View Integration Details",
    href: "#hardscape-integration",
  },
  {
    id: "cta-assessment",
    title: "Free Site Assessment",
    body: "Every project starts with a no-obligation site visit. We assess drainage issues, grade challenges, and hardscaping goals — and deliver a written proposal with clear scope and pricing.",
    linkLabel: "Book a Free Assessment",
    href: "#cta-assessment",
  },
];

export const DRAINAGE_HUB_WHY_EYEBROW = "Why";

export const DRAINAGE_HUB_WHY_H2 =
  "Why Choose Ground Level Contracting for Drainage & Hardscaping in Simcoe County?";

export const DRAINAGE_HUB_WHY_POINTS: { title: string; body: string }[] = [
  {
    title: "The Combination No One Else in This Market Owns",
    body: "No single contractor in the Barrie and Simcoe County market currently combines deep, documented drainage expertise — weeping tile, foundation drain tile, french drains, custom site drainage design — with full-service hardscaping capability in armour stone walls, interlock, natural stone, and concrete. Most drainage contractors don't build patios. Most hardscapers don't install weeping tile. Ground Level Contracting does both at a high level, which means your project doesn't require two separate contractors, two scopes of work, and two sets of scheduling headaches.",
  },
  {
    title: "Local Knowledge That Changes Outcomes",
    body: "Simcoe County soil — heavy clay near Barrie, sandy loam near Wasaga Beach, rocky till in Oro-Medonte — behaves differently under a foundation and responds differently to drainage intervention. Our team has worked across this region's full soil and topographic range. That experience changes the designs we specify and the outcomes our clients receive.",
  },
  {
    title: "Drainage-First Design Philosophy",
    body: "Every project we build — whether it starts as a drainage call or a patio inquiry — begins with a drainage assessment. We find the water before we put stone in the ground. This approach prevents the most common and expensive failure mode in hardscaping: beautiful work that creates a drainage problem or fails because it was built on top of one.",
  },
  {
    title: "Honest Scoping, Written Proposals",
    body: "Every project begins with a free site assessment, a written proposal with clear scope and line-item pricing, and a frank conversation about what is and isn't necessary. We do not upsell drainage systems that aren't needed or propose hardscaping that doesn't serve a functional purpose. What's in the proposal is what gets built.",
  },
  {
    title: "Fully Licensed, Insured & WSIB Compliant",
    body: "We carry comprehensive commercial liability insurance, maintain current WSIB compliance, and are fully licensed for the work we perform in Ontario. Certificates of insurance and WSIB clearance are available on request.",
  },
  {
    title: "Warranty-Backed Work",
    body: "Our hardscaping installations are backed by a workmanship warranty. Ask us for current warranty terms on your specific project type at the time of quoting.",
  },
];

export const DRAINAGE_HUB_WHY_IMAGE_ALT =
  "Drainage and retaining wall integration luxury property Innisfil Ontario";

export const DRAINAGE_HUB_WHY_IMAGE =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80&auto=format";

export const DRAINAGE_HUB_PROCESS_EYEBROW = "Process";

export const DRAINAGE_HUB_PROCESS_H2 =
  "Our Drainage & Hardscaping Process — From Assessment to Completion";

export const DRAINAGE_HUB_PROCESS_STEPS: { title: string; body: string }[] = [
  {
    title: "Step 1: Free Site Assessment",
    body: "We visit your property at no charge. Our goal is to understand what you're experiencing — whether that's water in the basement, a drainage problem in the yard, a slope you want to retain, or a hardscaping project you want to design. We assess existing conditions, identify drainage challenges, and listen to your goals before we say anything about solutions. A good assessment is the difference between a proposal that fixes the problem and one that addresses the symptom.",
  },
  {
    title: "Step 2: Written Proposal",
    body: "Within a few business days of your site visit, you receive a written proposal with a clearly defined scope of work, line-item pricing, and a project timeline. We walk through every element with you — materials, scope boundaries, sequence of work, and what to expect during the project. No surprises.",
  },
  {
    title: "Step 3: Scheduling & Pre-Project Planning",
    body: "Once you accept the proposal, we schedule your project and confirm all material orders, equipment bookings, and utility locates. On projects requiring permits — retaining walls above code height thresholds, drainage alterations near property lines — we manage the permit application as part of our pre-project process.",
  },
  {
    title: "Step 4: Site Preparation & Excavation",
    body: "Excavation is performed to the depth required for your specific project — whether that's footing-level for drain tile, subgrade depth for base preparation, or full excavation for grade correction. Spoils are managed through our integrated hauling capability — removed from site, stockpiled, or redistributed as the project requires.",
  },
  {
    title: "Step 5: Drainage Infrastructure First",
    body: "Drainage systems — perforated pipe, gravel bedding, catch basins, outlet connections — are installed before any hardscaping surfaces go down. Drainage infrastructure is always buried. Once it is covered, it must work correctly for decades without access. This is where craftsmanship in concealed work matters most.",
  },
  {
    title: "Step 6: Hardscaping Installation",
    body: "Retaining walls are built on properly prepared and compacted bases with drainage backfill installed as the wall rises. Hard surfaces — interlock, natural stone, concrete — are laid on mechanically compacted aggregate bases to the depth required for the load and frost exposure on your site.",
  },
  {
    title: "Step 7: Final Grade, Cleanup & Restoration",
    body: "Final grade is established to direct surface water correctly away from structures and toward drainage outlets. Site cleanup, topsoil restoration, and any seed or sod reinstatement are completed. The project is not done until the site looks as though we were never there — except for the permanent solution that remains.",
  },
];

export const DRAINAGE_HUB_FAQ_EYEBROW = "FAQ";

export const DRAINAGE_HUB_FAQ_H2 = "Drainage & Hardscaping FAQs — Barrie and Simcoe County";

export const DRAINAGE_HUB_FAQ: { question: string; answer: string }[] = [
  {
    question: "What is foundation drain tile and how does it work?",
    answer:
      "Foundation drain tile — also called weeping tile or a sub drain — is a perforated pipe installed around the base of your foundation footings. It collects groundwater that moves through the surrounding soil and directs it away from your home to a sump pit or a daylight outlet, preventing hydrostatic pressure from building against your foundation walls and causing leaks, cracks, or basement flooding. Modern systems use sock-wrapped perforated PVC pipe bedded in washed clear stone for maximum longevity and drainage performance.",
  },
  {
    question: "How do I know if my weeping tile needs to be replaced in Barrie?",
    answer:
      "Common signs include a chronically wet basement, water stains or white powder — called efflorescence — on your foundation walls, a sump pump that runs constantly or cycles more than it should, soggy saturated ground along your foundation perimeter, or a persistent musty smell in the basement or crawlspace. Homes in Barrie and Simcoe County built before the 1980s may still have original clay tile systems. These systems have a finite service life — they crack, collapse, and clog with root intrusion over time — and should be inspected and replaced before failure causes costly foundation damage. If your home is in this age range, proactive replacement is almost always less expensive than reactive repair after water infiltration has begun.",
  },
  {
    question: "What type of retaining wall is best for my property in Simcoe County?",
    answer:
      "The right retaining wall depends on your site conditions, height requirements, aesthetic goals, and budget. Armour stone is the ideal choice for natural, rural, lakeside, and high-load applications — it is durable, requires no mortar, drains naturally, and integrates beautifully into most Simcoe County property settings. Segmental concrete block suits residential grade changes, garden terracing, and projects where a clean, contemporary aesthetic is the priority. Poured concrete or engineered wall systems are required for walls exceeding standard height thresholds, walls supporting structures or driveways, or sites with complex load conditions that require stamped engineer drawings. We assess every site individually and recommend the approach that best suits your property and budget.",
  },
  {
    question: "Does a retaining wall need drainage behind it?",
    answer:
      "Absolutely — and this is one of the most commonly skipped steps by less experienced contractors. Without proper drainage, water from the backfill zone has nowhere to go. It accumulates, saturates the soil, and creates hydrostatic pressure against the back of the wall — one of the leading causes of retaining wall failure in Ontario. Every wall we build includes appropriate drainage as standard practice: a minimum backfill zone of washed crushed stone, weep holes at the base of the wall face, and perforated pipe where conditions require. This is not an upgrade. It is a baseline requirement for a wall that will perform over its intended service life.",
  },
  {
    question: "Can you fix drainage problems on a sloped property near Barrie?",
    answer:
      "Yes — and sloped, challenging properties are a project type we actively specialize in. Sloped lots create concentrated runoff at the base of the grade, erosion on exposed surfaces, and often direct water toward foundation walls or neighbouring properties. We design and install custom surface and subsurface drainage systems — french drains, swales, catch basins, and corrective grading — combined where appropriate with retaining walls and terraced hardscaping to manage water permanently. The goal is not just to address the visible symptom but to engineer a solution that works through every season — including Simcoe County's heavy spring thaw.",
  },
  {
    question: "Do you build retaining walls on waterfront and lakeside properties in Simcoe County?",
    answer:
      "Yes. We regularly work on lakeside and waterfront properties around Lake Simcoe, Kempenfelt Bay, and throughout Simcoe County. Armour stone walls are particularly well-suited to shoreline applications — the mass and permeability of the material provides erosion and wave protection while blending naturally into the waterfront landscape. Shoreline wall projects near the water's edge may require coordination with municipal or conservation authority permitting, and we have experience navigating those requirements as part of the project planning process.",
  },
  {
    question: "What areas do you serve for drainage and hardscaping?",
    answer:
      "We serve Barrie, Orillia, Wasaga Beach, Innisfil, Angus, Springwater, Oro-Medonte, New Tecumseth (Alliston), Midland, Penetanguishene, Bradford West Gwillimbury, and surrounding communities throughout Simcoe County and Central Ontario. If your property is within the Simcoe County region and you're not sure whether we serve your specific area, call or submit a quote request and we will confirm.",
  },
  {
    question: "How long does a drain tile system last?",
    answer:
      "A properly installed modern system — sock-wrapped perforated PVC pipe, washed 3/4\" clear stone bedding, correctly sloped to a properly sized outlet — can last 25 to 50 or more years with minimal maintenance. The longevity of a drain tile system is directly tied to the quality of the installation: pipe sizing, gravel depth, slope, and outlet capacity all affect long-term performance. Older clay tile systems common in pre-1980s Barrie homes are past their engineered service life. Clay tiles collapse under soil pressure, crack along joint lines, and are highly susceptible to root intrusion. If your home has an original clay system and you have not had it inspected, it should be evaluated before it fails — proactive replacement is a fraction of the cost of reactive foundation repair.",
  },
];

export const DRAINAGE_HUB_TRUST_SIGNALS_EYEBROW = "Trust";

export const DRAINAGE_HUB_TRUST_SIGNALS_H2 =
  "Licensed, Insured & Locally Trusted in Simcoe County";

/** Bodies may include [YEAR] replaced at render time with site.copyrightYear. */
export const DRAINAGE_HUB_TRUST_SIGNALS: { title: string; body: string }[] = [
  {
    title: "Fully Licensed & Insured",
    body: "Commercial general liability coverage on every project",
  },
  { title: "WSIB Compliant", body: "Current WSIB clearance certificates available on request" },
  {
    title: "Locally Owned & Operated",
    body: "Based in Barrie, serving Simcoe County since [YEAR]",
  },
  {
    title: "Warranty-Backed Workmanship",
    body: "Ask about warranty terms for your project type",
  },
  {
    title: "Free Site Assessments",
    body: "No-obligation site visits and written proposals",
  },
  {
    title: "Transparent, Written Quotes",
    body: "Line-item pricing with no surprises at invoice",
  },
  {
    title: "Licensed for Permits",
    body: "We manage permit applications for regulated wall and drainage work",
  },
  {
    title: "Real Project Photos",
    body: "Before & after documentation from properties across Simcoe County",
  },
  {
    title: "Google Reviewed",
    body: "Reviews and ratings from verified local clients on Google",
  },
];

export const DRAINAGE_HUB_COVERAGE_EYEBROW = "Territory";

export const DRAINAGE_HUB_COVERAGE_H2 = "Areas We Serve Across Central Ontario";

export const DRAINAGE_HUB_COVERAGE_INTRO =
  "Ground Level Contracting provides drainage and hardscaping services throughout a broad territory centred on Barrie, Ontario, covering the full geographic range of Simcoe County and its surrounding communities.";

export const DRAINAGE_HUB_COVERAGE_PRIMARY: { line: string }[] = [
  { line: "Barrie, Ontario — Full service. All drainage and hardscaping services." },
  { line: "Innisfil, Ontario — Residential, lakefront, and waterfront properties." },
  { line: "Orillia, Ontario — Drainage, retaining walls, interlock, and hardscaping." },
  { line: "Wasaga Beach, Ontario — Drainage and hardscaping in residential and cottage-area settings." },
  { line: "Angus / Essa Township — Residential drainage and hardscaping services." },
  { line: "Springwater Township — Rural residential drainage and hardscaping." },
  { line: "Oro-Medonte — Lakeside, hillside, and rural estate properties." },
];

export const DRAINAGE_HUB_COVERAGE_EXTENDED: string[] = [
  "New Tecumseth / Alliston",
  "Midland & Penetanguishene",
  "Bradford West Gwillimbury",
  "Collingwood & The Blue Mountains",
  "Ramara & surrounding Simcoe County townships",
];

export const DRAINAGE_HUB_COVERAGE_LAKESIDE =
  "We regularly work on waterfront properties around Lake Simcoe, Kempenfelt Bay, and throughout the Simcoe County cottage belt. Armour stone shoreline walls, drainage integration for seasonal properties, and hardscaping on challenging lakefront grades are all within our scope.";

export const DRAINAGE_HUB_COVERAGE_MAP_ALT =
  "Site drainage design sloped property Simcoe County Ontario map";

export const DRAINAGE_HUB_RELATED_SECTION = {
  eyebrow: "Related",
  titleBefore: "Related",
  titleAccent: "services",
} as const;

export const DRAINAGE_HUB_RELATED: { title: string; href: string; body: string }[] = [
  {
    title: "Hauling & Material Delivery",
    href: "/services/hauling-site-clearing-logistics/",
    body: "Stone, aggregate & spoils hauling integrated with every drainage project.",
  },
  {
    title: "Commercial Snow Removal",
    href: "/services/snow-removal/",
    body: "Year-round property maintenance for commercial clients.",
  },
  {
    title: "Free Site Assessment",
    href: "/contact/",
    body: "Book a no-obligation site visit and written quote.",
  },
];

export const DRAINAGE_HUB_FINAL = {
  sectionAriaLabel: "Request a site visit",
  headline: "Stop the Water. Fix the Grade. Build Something Exceptional.",
  headlineLine1: "Stop the Water. Fix the Grade.",
  headlineAccent: "Build Something Exceptional.",
  ctaEyebrow: "Request",
  line1:
    "Ground Level Contracting provides complete drainage and hardscaping solutions across Barrie, Orillia, Simcoe County, Wasaga Beach & Innisfil.",
  line2: "Every project starts with a free site assessment and a written quote.",
  primaryCta: "Get Your Free Drainage Assessment",
  secondaryCta: "Book a Free Site Visit",
  tertiaryCtaPrefix: "Call",
  footTemplate: "Licensed & insured. WSIB compliant. Serving Simcoe County since [YEAR].",
} as const;

/** Default hero background until /public hero asset exists */
export const DRAINAGE_HUB_HERO_IMAGE =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80&auto=format";
