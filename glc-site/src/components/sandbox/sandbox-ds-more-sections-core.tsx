import Image from "next/image";
import { IconArrow } from "@/components/ui/icon-arrow";
import { SmartLink } from "@/components/ui/smart-link";
import type { SiteConfig } from "@/content/types";
import { ROUTES } from "@/lib/routes";
import { SandboxDsCompactStickyTabs } from "./sandbox-ds-compact-sticky-tabs";

const CERT_ITEMS = [
  { name: "WSIB", sub: "Clearance & coverage" },
  { name: "Commercial liability", sub: "Project-scaled" },
  { name: "LOCATES", sub: "Utility protocol" },
  { name: "Engineer-ready", sub: "As-built friendly" },
  { name: "Equipment certs", sub: "Annual inspection" },
  { name: "Snow ops", sub: "Seasonal readiness" },
];

const TICKER_PHRASES = [
  { k: "a", text: "Commercial excavation", em: true },
  { k: "b", text: "Foundations & civil", em: false },
  { k: "c", text: "Drainage systems", em: true },
  { k: "d", text: "Simcoe County", em: false },
  { k: "e", text: "Own crews", em: true },
  { k: "f", text: "Line-item quotes", em: false },
];

const SECT_CARDS = [
  {
    n: "01",
    title: "Site & pad",
    body: "Stripping, rough grade, and engineered pads sized for commercial loads — sandbox copy only.",
    tags: ["Grading", "Compaction", "Geotech"],
  },
  {
    n: "02",
    title: "Structure-ready",
    body: "Footings, walls, and tie-ins coordinated with pour schedules — not a live scope list.",
    tags: ["Foundations", "Forming", "Steel day"],
  },
  {
    n: "03",
    title: "Water managed",
    body: "French drains, catchments, and hardscape tie-ins that keep pavements dry in spring thaw.",
    tags: ["Drainage", "Hardscape", "Inspection"],
  },
];

const PROC_STEPS = [
  { num: "1", title: "Site call", desc: "Mobilization window and access plan confirmed against locates." },
  { num: "2", title: "Quote & schedule", desc: "Line items for labour, equipment, and disposal — no mystery buckets." },
  { num: "3", title: "Execute", desc: "Crew lead on radio; engineer changes logged same day." },
  { num: "4", title: "Sign-off", desc: "Photo pack + grades before backfill or handoff." },
];

const FLEET_CARDS = [
  {
    src: "/images/hero-armour-stone-retaining-walls.png",
    alt: "Heavy equipment on a commercial excavation site",
    code: "EX-01",
    name: "Excavators",
    spec: "Tight-tail swing + mass excavation",
    count: "06",
  },
  {
    src: "/images/septic-excavation5.png",
    alt: "Dump truck hauling material from site",
    code: "HAUL-02",
    name: "Articulated haul",
    spec: "On-road + site logistics",
    count: "04",
  },
  {
    src: "/images/excavation-and-foundations.png",
    alt: "Loader at work on graded site",
    code: "LD-03",
    name: "Loaders & skid",
    spec: "Finish grade + snow pushers",
    count: "05",
  },
];

const GALL_ITEMS = [
  { src: "/images/services/drainage-hardscaping/work-overview-dry-creek-steps.jpg", type: "Drainage", name: "Dry creek corridor", loc: "Sandbox locale", year: "2025" },
  { src: "/images/services/drainage-hardscaping/work-cap-retaining-timber-grading.jpg", type: "Grade", name: "Timber retaining run", loc: "Sandbox locale", year: "2025" },
  { src: "/images/services/drainage-hardscaping/work-cap-french-drain-fabric.jpg", type: "French drain", name: "Fabric-wrapped trench", loc: "Sandbox locale", year: "2024" },
];

const TST_ITEMS = [
  { quote: "Crew showed up when they said they would — rare in this trade.", name: "Placeholder client", role: "Facilities manager" },
  { quote: "Quote matched the invoice. Communication was blunt in the best way.", name: "Sandbox reviewer", role: "General contractor" },
  { quote: "We use GLC when the pad has to be right the first time.", name: "Design bench", role: "Internal QA note" },
];

type Props = { site: SiteConfig };

function CoreTickerDark() {
  const items = [...TICKER_PHRASES, ...TICKER_PHRASES];
  return (
    <div className="sandbox-ds-tick1" role="presentation" aria-hidden="true">
      <div className="sandbox-ds-tick1__rail" aria-hidden />
      <div className="sandbox-ds-tick1__rail-r" aria-hidden />
      <div className="sandbox-ds-tick1__track">
        {items.map((item, i) => (
          <span key={`${item.k}-${i}`} className="sandbox-ds-tick1__item">
            {item.em ? <em>{item.text}</em> : item.text}
            <span className="sandbox-ds-tick1__diamond" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}

function CoreTickerLight() {
  const items = [...TICKER_PHRASES, ...TICKER_PHRASES];
  return (
    <div className="sandbox-ds-tick1 sandbox-ds-tick1--light" role="presentation" aria-hidden="true">
      <div className="sandbox-ds-tick1__rail" aria-hidden />
      <div className="sandbox-ds-tick1__rail-r" aria-hidden />
      <div className="sandbox-ds-tick1__track">
        {items.map((item, i) => (
          <span key={`${item.k}-${i}`} className="sandbox-ds-tick1__item">
            {item.em ? <em>{item.text}</em> : item.text}
            <span className="sandbox-ds-tick1__diamond" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}

/** Default /sandbox stack: one instance per pattern + sticky tabs (keeps the page usable). */
export function SandboxDsMoreSectionsCore({ site }: Props) {
  const telHref = site.telephone.replace(/\s/g, "");

  return (
    <>
      <section className="sandbox-ds-cert1" aria-labelledby="sandbox-ds-cert1-h">
        <div className="sandbox-ds-cert1__inner">
          <header className="sandbox-ds-cert1__header">
            <div>
              <p className="eyebrow">Credentials</p>
              <h2 id="sandbox-ds-cert1-h" className="sandbox-ds-cert1__heading">
                Trust &amp; <em>compliance</em>
              </h2>
            </div>
          </header>
          <div className="sandbox-ds-cert1__grid">
            {CERT_ITEMS.map((c) => (
              <div key={c.name} className="sandbox-ds-cert1__item">
                <div className="sandbox-ds-cert1__icon" aria-hidden>
                  <svg viewBox="0 0 32 32" width="32" height="32">
                    <path d="M8 16 L14 22 L24 10" />
                  </svg>
                </div>
                <div className="sandbox-ds-cert1__name">{c.name}</div>
                <div className="sandbox-ds-cert1__sub">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />
      <CoreTickerDark />
      <div className="glc-motif-divider-a3--to-light" aria-hidden />
      <CoreTickerLight />

      <div className="sandbox-ds-div-rule" role="separator" aria-label="Section divider">
        <span className="sandbox-ds-div-rule__line" aria-hidden />
        <span className="sandbox-ds-div-rule__center">
          <span className="sandbox-ds-div-rule__mark" aria-hidden />
          <span className="sandbox-ds-div-rule__text">Band rhythm</span>
        </span>
        <span className="sandbox-ds-div-rule__line" aria-hidden />
      </div>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      <section className="sandbox-ds-sect1" aria-labelledby="sandbox-ds-sect1-h">
        <div className="sandbox-ds-sect1__rail" aria-hidden />
        <div className="sandbox-ds-sect1__inner">
          <header className="sandbox-ds-sect1__head">
            <h2 id="sandbox-ds-sect1-h" className="sandbox-ds-sect1__heading">
              Sector <em>depth</em>
            </h2>
            <p className="sandbox-ds-sect1__sub">
              Three-card grid from the static prototype — tags stay mono so the band does not compete with production
              services copy.
            </p>
          </header>
          <div className="sandbox-ds-sect1__grid">
            {SECT_CARDS.map((c) => (
              <article key={c.n} className="sandbox-ds-sect1__card">
                <div className="sandbox-ds-sect1__card-num">{c.n}</div>
                <h3 className="sandbox-ds-sect1__card-title">{c.title}</h3>
                <p className="sandbox-ds-sect1__card-body">{c.body}</p>
                <div className="sandbox-ds-sect1__tags">
                  {c.tags.map((t) => (
                    <span key={t} className="sandbox-ds-sect1__tag">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      <SandboxDsCompactStickyTabs />

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      <section id="sandbox-ds-proc3" className="sandbox-ds-proc3-wrap" aria-labelledby="sandbox-ds-proc3-h">
        <div className="proc3__layout">
          <div className="proc3__left-panel">
            <div className="proc3__left-accent" aria-hidden />
            <p className="eyebrow proc3__eyebrow">
              <span>How we work</span>
            </p>
            <h2 id="sandbox-ds-proc3-h" className="proc3__heading">
              Field process
              <span className="proc3__heading-accent"> — sandbox</span>
            </h2>
            <p className="proc3__intro">
              Same split layout as the homepage process band: charcoal editorial column + white timeline with yellow
              thread — without client reveal wrappers.
            </p>
            <div className="proc3__count-mark" aria-hidden>
              0{PROC_STEPS.length}
            </div>
          </div>
          <div className="proc3__steps-panel">
            <div className="proc3__thread" aria-hidden />
            {PROC_STEPS.map((step) => (
              <div key={step.num} className="proc3__step">
                <div className="proc3__node" aria-hidden>
                  <span>{step.num}</span>
                </div>
                <div className="proc3__step-content">
                  <div className="proc3__step-label">Step {step.num}</div>
                  <div className="proc3__step-title">{step.title}</div>
                  <p className="proc3__step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      <section className="sandbox-ds-fleet1" aria-labelledby="sandbox-ds-fleet1-h">
        <div className="sandbox-ds-fleet1__rail" aria-hidden />
        <div className="sandbox-ds-fleet1__inner">
          <header className="sandbox-ds-fleet1__head">
            <div>
              <h2 id="sandbox-ds-fleet1-h" className="sandbox-ds-fleet1__heading">
                Fleet &amp; <em>iron</em>
              </h2>
              <p className="sandbox-ds-fleet1__sub">
                Hover rails and count chips echo the HTML reference — imagery is representative, not an equipment
                manifest.
              </p>
              <div className="sandbox-ds-fleet1__proof">
                <p className="sandbox-ds-fleet1__proof-text">Own assets · Maintained in-house</p>
                <p className="sandbox-ds-fleet1__proof-sub">Playground band · not inventory data</p>
              </div>
            </div>
          </header>
          <div className="sandbox-ds-fleet1__grid">
            {FLEET_CARDS.map((f) => (
              <article key={f.code} className="sandbox-ds-fleet1__card">
                <Image src={f.src} alt={f.alt} fill className="sandbox-ds-fleet1__card-img" sizes="(max-width: 900px) 100vw, 33vw" />
                <div className="sandbox-ds-fleet1__card-overlay" aria-hidden />
                <div className="sandbox-ds-fleet1__card-rail" aria-hidden />
                <div className="sandbox-ds-fleet1__card-count">
                  <span className="sandbox-ds-fleet1__card-count-num">{f.count}</span>
                  <span className="sandbox-ds-fleet1__card-count-lbl">Units</span>
                </div>
                <div className="sandbox-ds-fleet1__card-body">
                  <div className="sandbox-ds-fleet1__card-num">{f.code}</div>
                  <h3 className="sandbox-ds-fleet1__card-name">{f.name}</h3>
                  <p className="sandbox-ds-fleet1__card-spec">{f.spec}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="sandbox-ds-fleet1__bar">
            <div className="sandbox-ds-fleet1__bar-stat">
              <span className="sandbox-ds-fleet1__bar-num">
                24<span>/7</span>
              </span>
              <span className="sandbox-ds-fleet1__bar-label">Emergency line (snow)</span>
            </div>
            <span className="sandbox-ds-fleet1__bar-divider" aria-hidden />
            <div className="sandbox-ds-fleet1__bar-stat">
              <span className="sandbox-ds-fleet1__bar-num">
                100<span>%</span>
              </span>
              <span className="sandbox-ds-fleet1__bar-label">Crew-owned narrative</span>
            </div>
          </div>
        </div>
      </section>

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      <section className="sandbox-ds-proj1" aria-labelledby="sandbox-ds-proj1-h">
        <div className="sandbox-ds-proj1__inner">
          <div className="sandbox-ds-proj1__layout">
            <div className="sandbox-ds-proj1__media">
              <Image
                src="/images/services/drainage-hardscaping/work-why-boulder-pergola-patio.jpg"
                alt="Hardscape and grading around a pergola patio"
                fill
                className="sandbox-ds-proj1__img"
                sizes="(max-width: 900px) 100vw, 60vw"
              />
              <div className="sandbox-ds-proj1__media-overlay" aria-hidden />
              <div className="sandbox-ds-proj1__media-badge">
                <div className="sandbox-ds-proj1__badge-lbl">Featured</div>
                <div className="sandbox-ds-proj1__badge-val">Outdoor living tie-in</div>
              </div>
              <div className="sandbox-ds-proj1__media-num">PRJ · SANDBOX</div>
            </div>
            <div className="sandbox-ds-proj1__details">
              <div className="sandbox-ds-proj1__details-rail" aria-hidden />
              <div className="sandbox-ds-proj1__details-content">
                <p className="sandbox-ds-proj1__proj-id">Case study shell</p>
                <h2 id="sandbox-ds-proj1-h" className="sandbox-ds-proj1__proj-title">
                  Grade, drain, and <em>finish</em>
                </h2>
                <div className="sandbox-ds-proj1__proj-rule" aria-hidden />
                <p className="sandbox-ds-proj1__proj-body">
                  Parity block for the static PROJ1 layout: media-heavy left column, charcoal detail stack with specs and
                  outcome callout — copy is placeholder.
                </p>
                <ul className="sandbox-ds-proj1__specs">
                  <li className="sandbox-ds-proj1__spec">
                    <span className="sandbox-ds-proj1__spec-label">Duration</span>
                    <span className="sandbox-ds-proj1__spec-value">3–4 weeks</span>
                  </li>
                  <li className="sandbox-ds-proj1__spec">
                    <span className="sandbox-ds-proj1__spec-label">Discipline</span>
                    <span className="sandbox-ds-proj1__spec-value">Civil + landscape</span>
                  </li>
                </ul>
                <div className="sandbox-ds-proj1__outcome">
                  <div className="sandbox-ds-proj1__outcome-lbl">Outcome</div>
                  <p className="sandbox-ds-proj1__outcome-text">Patio stays dry; owner gets a photo pack at handoff.</p>
                </div>
                <SmartLink href={ROUTES.contact} className="btn-primary sandbox-ds-proj1__cta">
                  Start a similar scope
                  <IconArrow />
                </SmartLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      <section className="sandbox-ds-gall1" aria-labelledby="sandbox-ds-gall1-h">
        <div className="sandbox-ds-gall1__inner">
          <header className="sandbox-ds-gall1__header">
            <h2 id="sandbox-ds-gall1-h" className="sandbox-ds-gall1__heading">
              Project <em>stills</em>
            </h2>
            <p className="eyebrow">Gallery</p>
          </header>
          <div className="sandbox-ds-gall1__filters" role="list">
            <span className="sandbox-ds-gall1__filter sandbox-ds-gall1__filter--static">All</span>
            <span className="sandbox-ds-gall1__filter sandbox-ds-gall1__filter--static">Drainage</span>
            <span className="sandbox-ds-gall1__filter sandbox-ds-gall1__filter--static">Civil</span>
          </div>
          <div className="sandbox-ds-gall1__grid">
            {GALL_ITEMS.map((g) => (
              <article key={g.src} className="sandbox-ds-gall1__item">
                <Image src={g.src} alt="" fill className="sandbox-ds-gall1__item-img" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="sandbox-ds-gall1__item-overlay" aria-hidden />
                <span className="sandbox-ds-gall1__item-year">{g.year}</span>
                <div className="sandbox-ds-gall1__item-body">
                  <div className="sandbox-ds-gall1__item-type">{g.type}</div>
                  <h3 className="sandbox-ds-gall1__item-name">{g.name}</h3>
                  <p className="sandbox-ds-gall1__item-loc">{g.loc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="sandbox-ds-gall1__footer">
            <SmartLink href={ROUTES.contact} className="btn-ghost btn-ghost--dark">
              Request portfolio links
            </SmartLink>
          </div>
        </div>
      </section>

      <div className="glc-motif-divider-a3--to-light" aria-hidden />

      <section className="sandbox-ds-tst3 tst3" aria-labelledby="sandbox-ds-tst3-h">
        <div className="tst3__header">
          <div className="tst3__eyebrow-row">
            <div className="eyebrow">
              <span>Social proof</span>
            </div>
          </div>
          <h2 id="sandbox-ds-tst3-h" className="tst3__heading">
            Voices from the <em>field</em>
          </h2>
          <p className="tst3__lede">Placeholder quotes for layout QA — not live reviews.</p>
        </div>
        <div className="tst3__grid">
          {TST_ITEMS.map((t, i) => (
            <div key={t.name} className={`tst3__card${i === 0 ? " tst3__card--featured" : ""}`}>
              <div className="tst3__open-mark" aria-hidden>
                &quot;
              </div>
              <div className="tst3__stars" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <svg key={`${t.name}-${idx}`} className="tst3__star" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M10 1l2.4 7.4H20l-6.2 4.5 2.4 7.4L10 16l-6.2 4.3 2.4-7.4L0 8.4h7.6z" />
                  </svg>
                ))}
              </div>
              <p className="tst3__quote">{t.quote}</p>
              <div className="tst3__divider" />
              <div className="tst3__name">{t.name}</div>
              <div className="tst3__role">{t.role}</div>
            </div>
          ))}
        </div>
        <div className="tst3__cta-row">
          <a href={`tel:${telHref}`} className="btn-primary">
            Call {site.telephoneDisplay}
            <IconArrow />
          </a>
          <SmartLink href={ROUTES.contact} className="tst3__google-link">
            Email the desk
            <IconArrow />
          </SmartLink>
        </div>
      </section>

      <div className="glc-motif-divider-a3--to-dark" aria-hidden />

      <section className="sandbox-ds-care1" aria-labelledby="sandbox-ds-care1-h">
        <div className="sandbox-ds-care1__rail" aria-hidden />
        <div className="sandbox-ds-care1__inner">
          <div>
            <h2 id="sandbox-ds-care1-h" className="sandbox-ds-care1__heading">
              Build a career <em>in dirt</em>
            </h2>
            <p className="sandbox-ds-care1__sub">
              CARE1 parity: perks list on charcoal with yellow micro-icons — links go to contact for now.
            </p>
            <div className="sandbox-ds-care1__perks">
              {[
                { t: "Equipment training", s: "Certified operators on core fleet" },
                { t: "Winter stability", s: "Snow desk keeps hours predictable" },
                { t: "Local routes", s: "Simcoe-focused, low deadhead" },
              ].map((p) => (
                <div key={p.t} className="sandbox-ds-care1__perk">
                  <div className="sandbox-ds-care1__perk-icon" aria-hidden>
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path d="M5 12 L10 17 L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="sandbox-ds-care1__perk-title">{p.t}</div>
                    <div className="sandbox-ds-care1__perk-sub">{p.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sandbox-ds-care1__action">
            <SmartLink href={ROUTES.contact} className="btn-primary">
              Talk hiring
              <IconArrow />
            </SmartLink>
            <p className="sandbox-ds-care1__action-note">No public ATS on this preview route</p>
          </div>
        </div>
      </section>
    </>
  );
}
