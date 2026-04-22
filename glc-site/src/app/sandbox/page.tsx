import type { Metadata } from "next";
import { FeaturedAccordion } from "@/components/sections/featured-accordion";
import { SandboxApprovedSectionDna } from "@/components/sandbox/sandbox-approved-section-dna";
import { SandboxComplianceBackup } from "@/components/sandbox/sandbox-compliance-backup";
import { SandboxDesignSystemV2Sections } from "@/components/sandbox/sandbox-design-system-v2-sections";
import { HomeServicesAccordionGrid } from "@/components/sections/home-services-accordion-grid";
import { SmartLink } from "@/components/ui/smart-link";
import { glcDevPreviewUrl } from "@/lib/glc-dev-preview";
import home from "@/content/pages/home.json";
import site from "@/content/site.json";
import type {
  AboutProps,
  AccordionSectionProps,
  HomePageContent,
  SiteConfig,
} from "@/content/types";
import { SandboxAboutArchive } from "@/components/sandbox/sandbox-about-archive";
import { pageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";

const siteData = site as SiteConfig;
const homeContent = home as HomePageContent;
const aboutProps = homeContent.sections.find((s) => s.type === "about")
  ?.props as AboutProps;

const accordionBlock = homeContent.sections.find((s) => s.type === "accordion");
const fallbackAccordionProps: AccordionSectionProps = {
  eyebrow: "What We Do",
  headingLine1: "Six Core",
  headingLine2: "Service Lines",
  intro:
    "From excavation and grading through foundations, drainage, hauling, and commercial snow, Ground Level Contracting delivers end-to-end civil and site services for commercial builds across Barrie, Midland, Orillia, and Simcoe County.",
  cta: { label: "Request a Quote", href: "tel:+17056194902" },
  sectionBadge: "06",
  items: [
    {
      id: 1,
      title: "Excavation & Site Prep",
      imageUrl: "/images/excavation-and-foundations.png",
      href: ROUTES.service("excavation-site-preparation"),
    },
    {
      id: 2,
      title: "Site Prep & Grading",
      imageUrl: "/images/services/site-preparation-grading/cat-skid-steer-grading-simcoe-county.jpg",
      href: ROUTES.service("site-preparation-grading"),
    },
    {
      id: 3,
      title: "Foundations & Civil",
      imageUrl: "/images/excavation-and-foundations-orillia-barrie.png",
      href: ROUTES.service("foundations-civil-infrastructure"),
    },
    {
      id: 4,
      title: "Drainage & Hardscaping",
      imageUrl: "/images/excavation-and-foundations-orillia-barrie-pools.png",
      href: ROUTES.service("drainage-hardscaping"),
    },
    {
      id: 5,
      title: "Hauling & Clearing",
      imageUrl: "/images/armour-stone-retaining-walls.png",
      href: ROUTES.service("hauling-site-clearing-logistics"),
    },
    {
      id: 6,
      title: "Snow Removal",
      imageUrl: "/images/hero-armour-stone-retaining-walls.png",
      href: ROUTES.service("snow-removal"),
    },
  ],
};
const accProps = (accordionBlock?.props ?? fallbackAccordionProps) as AccordionSectionProps;

const sandboxSvcAccGridIntro =
  "Six service hubs on a dark band with light tiles: photo fills each square, expand for scope, then use the yellow CTA to jump straight into that service line.";

const sandboxSvcAccGridPanelCopy = [
  "Cut-to-fill, trenching, and mass grading for commercial pads—mobilization, spoils strategy, and engineer tie-ins documented for inspection.",
  "Finish grading, compaction, and drainage tie-ins that set up foundations and hardscape—survey-aware tolerances and storm-ready surfaces.",
  "Footings, walls, pits, and civil tie-ins with pour-day discipline—forming, reinforcing, and backfill sequencing aligned to geotech.",
  "Storm, foundation, and hardscape water management with armor stone, walls, and permeable details in one integrated scope.",
  "Export, import, clearing, and site logistics with truck-matched scheduling—clean gates, scale tickets, and placement control.",
  "Commercial-only snow and ice—SLA language, GPS-tracked passes, and salting plans for plazas, yards, and institutional sites.",
];

const base = pageMetadata({
  title: "My sandbox.",
  description:
    "An internal layout playground with sample sections — not linked from site navigation.",
  path: ROUTES.sandbox,
});

export const metadata: Metadata = {
  ...base,
  robots: { index: false, follow: false },
};

export default function SandboxPage() {
  return (
    <main id="main-content">
      {/* Inner wrapper: scoped rules are `.sandbox .sandbox-ds-*` / `.sandbox .sandbox__*`; keep a guaranteed ancestor. */}
      <div className="sandbox">
      <SandboxComplianceBackup />

      {aboutProps ? <SandboxAboutArchive about={aboutProps} /> : null}

      <SandboxApprovedSectionDna site={siteData} />

      {/* 1 — Hero */}
      <section className="sandbox__s1 dse" aria-labelledby="sandbox-hero-heading">
        <div className="dse-rail" aria-hidden />
        <div className="glc-motif-layer-c2" aria-hidden />
        <span className="glc-motif-b4 sandbox__s1-b4" aria-hidden />
        <div className="sandbox__s1-inner">
          <p className="eyebrow">Playground</p>
          <span className="glc-motif-heading-rule sandbox__s1-rule" aria-hidden />
          <h1 id="sandbox-hero-heading" className="sandbox__s1-title">
            My sandbox.
          </h1>
          <p className="sandbox__s1-lede">
            Sample bands for shells, motifs, and rhythm — plus featured-accordion variants using the same service
            content as home. Not linked in the header or footer — bookmark{" "}
            <SmartLink href={ROUTES.sandbox} className="sandbox__s10-link">
              {ROUTES.sandbox}
            </SmartLink>{" "}
            or open{" "}
            <a href={glcDevPreviewUrl("/sandbox/")} className="sandbox__s10-link">
              {glcDevPreviewUrl("/sandbox/")}
            </a>{" "}
            in the browser (127.0.0.1 avoids some localhost failures on Windows).
          </p>
          <a href="#sandbox-band-2" className="btn-primary">
            Scroll to band two
          </a>
        </div>
      </section>

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      {/* 2 — Chip rail */}
      <section
        id="sandbox-band-2"
        className="sandbox__s2 ls ls-c"
        aria-label="Sample service tags"
      >
        <div className="glc-motif-layer-c1" aria-hidden />
        <span className="glc-motif-b2 sandbox__s2-b2" aria-hidden />
        <div className="sandbox__s2-inner">
          <p className="eyebrow eyebrow--dark">Tags</p>
          <ul className="sandbox__s2-chips" role="list">
            {["Grading", "Trenching", "Hydrovac", "Septic", "Snow", "Hauling", "Foundations"].map(
              (t) => (
                <li key={t} className="sandbox__s2-chip">
                  {t}
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      {/* 3 — Editorial split */}
      <section className="sandbox__s3 dse" aria-labelledby="sandbox-s3-heading">
        <div className="dse-rail" aria-hidden />
        <span className="glc-motif-b3 sandbox__s3-b3" aria-hidden />
        <div className="sandbox__s3-grid">
          <div className="sandbox__s3-copy">
            <p className="eyebrow">Editorial</p>
            <span className="glc-motif-heading-rule sandbox__s3-rule" aria-hidden />
            <h2 id="sandbox-s3-heading" className="sandbox__s3-h">
              Asymmetry beats symmetry when the brief is boring.
            </h2>
            <p className="sandbox__s3-p">
              This column keeps copy tight; the panel opposite is a pure décor stack — no competing photography, just
              depth planes and a clip so the band does not read as a flat poster.
            </p>
          </div>
          <div className="sandbox__s3-panel glc-motif-d1-clip-corner" aria-hidden>
            <div className="sandbox__s3-panel-fill" />
          </div>
        </div>
      </section>

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      {/* Featured accordion ×4 */}
      <section
        id="interactive-accordion"
        className="sandbox-feat-acc-scope sandbox-feat-acc-scope--dark gl-react-embed-section"
        aria-label="Featured accordion variant 1 of 4: dark mirrored"
      >
        <div className="sandbox-feat-acc-band">
          <p className="sandbox-feat-acc-band__eyebrow">Featured accordion · Variant 1 of 4</p>
          <p className="sandbox-feat-acc-band__line">
            Dark shell · Mirrored layout (copy and photo rail swap columns; strips read right-to-left).
          </p>
        </div>
        <FeaturedAccordion
          {...accProps}
          tone="dark"
          layoutMode="mirror"
          headingId="sandbox-feat-heading-dark"
        />
      </section>

      {/* Duplicate: wide strips + framed rail (chassis + watermark) and soft section vignette for contrast */}
      <section
        id="interactive-accordion-framed-rail"
        className="sandbox-feat-acc-scope sandbox-feat-acc-scope--dark sandbox-feat-acc-scope--rail-stage gl-react-embed-section"
        aria-label="Featured accordion duplicate: wide framed photo rail on dark ground"
      >
        <div className="sandbox-feat-acc-band">
          <p className="sandbox-feat-acc-band__eyebrow">Featured accordion · Wide rail + framed chassis</p>
          <p className="sandbox-feat-acc-band__line">
            Full-width rail on a light blueprint pad, dark photo chassis on top, then a white copy band—clear dark/light
            steps (not dark-on-dark). Six service panels match the six service hubs. Layout: mirror-stack-wide.
          </p>
        </div>
        <FeaturedAccordion
          {...accProps}
          tone="dark"
          layoutMode="mirror-stack-wide"
          widePanels
          panelFrame
          headingId="sandbox-feat-heading-dark-framed-rail"
        />
      </section>

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      <section
        className="sandbox-feat-acc-scope sandbox-feat-acc-scope--light gl-react-embed-section"
        aria-label="Featured accordion variant 2 of 4: light stacked"
      >
        <div className="sandbox-feat-acc-band">
          <p className="sandbox-feat-acc-band__eyebrow">Featured accordion · Variant 2 of 4</p>
          <p className="sandbox-feat-acc-band__line">
            Light shell · Rearranged layout (full-width panel band first, narrative and CTA second).
          </p>
        </div>
        <FeaturedAccordion
          {...accProps}
          tone="light"
          layoutMode="stack-top"
          headingId="sandbox-feat-heading-light"
        />
      </section>

      <hr className="sandbox-feat-acc-seam" aria-hidden />

      <section
        className="sandbox-feat-acc-scope sandbox-feat-acc-scope--medium gl-react-embed-section"
        aria-label="Featured accordion variant 3 of 4: medium reversed rails"
      >
        <div className="sandbox-feat-acc-band">
          <p className="sandbox-feat-acc-band__eyebrow">Featured accordion · Variant 3 of 4</p>
          <p className="sandbox-feat-acc-band__line">
            Medium shell · Rearranged rails (strip order reversed; classic split columns kept balanced).
          </p>
        </div>
        <FeaturedAccordion
          {...accProps}
          tone="medium"
          reversePanelOrder
          headingId="sandbox-feat-heading-medium"
        />
      </section>

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      <section
        className="sandbox-feat-acc-scope sandbox-feat-acc-scope--default gl-react-embed-section"
        aria-label="Featured accordion variant 4 of 4: default mirrored"
      >
        <div className="sandbox-feat-acc-band">
          <p className="sandbox-feat-acc-band__eyebrow">Featured accordion · Variant 4 of 4</p>
          <p className="sandbox-feat-acc-band__line">
            Default off-white shell · Mirrored layout (production palette, inverted column balance).
          </p>
        </div>
        <FeaturedAccordion
          {...accProps}
          tone="default"
          layoutMode="mirror"
          headingId="sandbox-feat-heading-balance"
        />
      </section>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      <HomeServicesAccordionGrid
        className="gl-react-embed-section"
        headingId="sandbox-svc-accgrid-heading"
        eyebrow="Sandbox · Accordion grid"
        headingLine1="Six core"
        headingLine2="service lines"
        headingLine3="— square tiles"
        intro={sandboxSvcAccGridIntro}
        items={accProps.items.slice(0, 6)}
        panelCopy={sandboxSvcAccGridPanelCopy}
        primaryCta={{ label: accProps.cta.label, href: accProps.cta.href }}
        secondaryCta={{ label: "Call 24/7 dispatch", href: "tel:+17056194902" }}
      />

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      {/* 4 — Stat row */}
      <section className="sandbox__s4 ls ls-c" aria-label="Sample metrics">
        <div className="glc-motif-layer-c1" aria-hidden />
        <div className="sandbox__s4-inner">
          <p className="eyebrow eyebrow--dark">Counters</p>
          <div className="sandbox__s4-stats" role="list">
            <div className="sandbox__s4-stat" role="listitem">
              <span className="sandbox__s4-num">24</span>
              <span className="sandbox__s4-lbl">Hour response window</span>
            </div>
            <div className="sandbox__s4-stat" role="listitem">
              <span className="sandbox__s4-num">500+</span>
              <span className="sandbox__s4-lbl">Commercial digs logged</span>
            </div>
            <div className="sandbox__s4-stat" role="listitem">
              <span className="sandbox__s4-num">0</span>
              <span className="sandbox__s4-lbl">Excuses on pour day</span>
            </div>
          </div>
        </div>
      </section>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      {/* 5 — Bento cards */}
      <section className="sandbox__s5 dse" aria-labelledby="sandbox-s5-heading">
        <div className="dse-rail" aria-hidden />
        <div className="glc-motif-layer-c2" aria-hidden />
        <div className="sandbox__s5-inner">
          <header className="sandbox__s5-hd">
            <p className="eyebrow">Bento</p>
            <h2 id="sandbox-s5-heading" className="sandbox__s5-title">
              Three unequal cells
            </h2>
          </header>
          <div className="sandbox__s5-bento">
            <article className="sandbox__s5-cell sandbox__s5-cell--wide">
              <h3 className="sandbox__s5-ct">Wide brief</h3>
              <p className="sandbox__s5-cp">
                Use the wide tile for narrative: mobilization, staging, and who owns the site rules.
              </p>
            </article>
            <article className="sandbox__s5-cell">
              <h3 className="sandbox__s5-ct">Tall note</h3>
              <p className="sandbox__s5-cp">Stack permits, locates, and inspection holds.</p>
            </article>
            <article className="sandbox__s5-cell">
              <h3 className="sandbox__s5-ct">Short win</h3>
              <p className="sandbox__s5-cp">Sign-off photos in the shared drive same day.</p>
            </article>
          </div>
        </div>
      </section>

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      {/* 6 — Pull quote */}
      <section className="sandbox__s6 ls sandbox__s6--mist" aria-label="Pull quote">
        <div className="glc-motif-layer-c1" aria-hidden />
        <blockquote className="sandbox__s6-quote">
          <p className="sandbox__s6-text">
            The sandbox is where we try ugly ideas safely — before they reach a paying page.
          </p>
          <footer className="sandbox__s6-cap">— Internal note, GLC design bench</footer>
        </blockquote>
      </section>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      {/* 7 — Vertical timeline */}
      <section className="sandbox__s7 dse" aria-labelledby="sandbox-s7-heading">
        <div className="dse-rail" aria-hidden />
        <span className="glc-motif-b1 sandbox__s7-b1" aria-hidden />
        <div className="sandbox__s7-inner">
          <h2 id="sandbox-s7-heading" className="sandbox__s7-h">
            Vertical thread
          </h2>
          <ol className="sandbox__s7-list">
            {[
              { t: "Mobilize", d: "Equipment list confirmed against geotech." },
              { t: "Expose", d: "Utilities located; hydrovac on standby." },
              { t: "Shape", d: "Rough grade to engineer tolerances." },
              { t: "Sign-off", d: "Photos + survey before backfill." },
            ].map((step, i) => (
              <li key={step.t} className="sandbox__s7-item">
                <span className="sandbox__s7-dot" aria-hidden />
                <div>
                  <span className="sandbox__s7-k">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="sandbox__s7-t">{step.t}</h3>
                  <p className="sandbox__s7-d">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      {/* 8 — Horizontal stepper */}
      <section className="sandbox__s8 ls ls-c" aria-labelledby="sandbox-s8-heading">
        <div className="glc-motif-layer-c1" aria-hidden />
        <div className="sandbox__s8-inner">
          <h2 id="sandbox-s8-heading" className="sandbox__s8-h">
            Horizontal stepper
          </h2>
          <div className="sandbox__s8-track" role="list">
            {["Call", "Quote", "Schedule", "Dig"].map((label, i) => (
              <div key={label} className="sandbox__s8-step" role="listitem">
                <span className="sandbox__s8-badge" aria-hidden>
                  {i + 1}
                </span>
                <span className="sandbox__s8-lbl">{label}</span>
                {i < 3 ? <span className="sandbox__s8-join" aria-hidden /> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      {/* 9 — Mini FAQ */}
      <section className="sandbox__s9 dse" aria-labelledby="sandbox-s9-heading">
        <div className="dse-rail" aria-hidden />
        <div className="sandbox__s9-inner">
          <h2 id="sandbox-s9-heading" className="sandbox__s9-h">
            Sample FAQ
          </h2>
          <div className="sandbox__s9-faq">
            <details className="sandbox__s9-d">
              <summary className="sandbox__s9-sum">Is this page indexed?</summary>
              <p className="sandbox__s9-a">
                Metadata sets noindex for this route. It is not linked from main navigation.
              </p>
            </details>
            <details className="sandbox__s9-d">
              <summary className="sandbox__s9-sum">Can I duplicate a section elsewhere?</summary>
              <p className="sandbox__s9-a">
                Yes — copy the markup and rename classes to a production prefix so shells stay unique per page.
              </p>
            </details>
          </div>
        </div>
      </section>

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      {/* Design system v2 HTML parity — six bands (AB3, ST3, Why3, quote, contact, coverage) */}
      <SandboxDesignSystemV2Sections site={siteData} />

      {/* 10 — Closing strip */}
      <section className="sandbox__s10 ls ls-c" aria-label="Closing">
        <div className="glc-motif-layer-c1" aria-hidden />
        <div className="sandbox__s10-inner">
          <p className="sandbox__s10-eyebrow">{siteData.name}</p>
          <p className="sandbox__s10-line">
            End of sandbox · Return to{" "}
            <SmartLink href={ROUTES.home} className="sandbox__s10-link">
              home
            </SmartLink>{" "}
            or{" "}
            <SmartLink href={ROUTES.contact} className="sandbox__s10-link">
              contact
            </SmartLink>
            .
          </p>
        </div>
      </section>
      </div>
    </main>
  );
}
