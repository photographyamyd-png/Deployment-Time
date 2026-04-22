import type { Metadata } from "next";
import Image from "next/image";
import "./test-page.css";
import navigation from "@/content/navigation.json";
import type { AboutProps, HomePageContent, MegaMenuCard, NavigationConfig } from "@/content/types";
import { Reveal } from "@/components/ui/reveal";
import { SmartLink } from "@/components/ui/smart-link";
import { StatCellAnimated } from "@/components/ui/stat-cell-animated";
import { IconArrow, IconArrowSmall } from "@/components/ui/icon-arrow";
import { ROUTES } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";
import svcStyles from "@/components/sections/services-grid-section.module.css";
import home from "@/content/pages/home.json";

const seo = pageMetadata({
  title: "Landing Page Test | Ground Level Contracting",
  description:
    "Internal wireframe-compliance landing page test. Not linked in site navigation.",
  path: ROUTES.testPage,
});

const navData = navigation as NavigationConfig;
const navCards = navData.megaMenu.cards.slice(0, 6);

const homeContent = home as HomePageContent;
const aboutFromHome = homeContent.sections.find((s) => s.type === "about")?.props as AboutProps | undefined;
const about: AboutProps = aboutFromHome ?? {
  eyebrow: "Who We Are",
  headingBefore: "Built On ",
  headingAccent: "Ground Level",
  headingAfter: " — Trusted From Below Up",
  body: "Ground Level Contracting is a commercial excavation and civil infrastructure company based in Barrie, Ontario.",
  credentials: [
    { title: "Geotechnical Solutions", sub: "Rock, clay, high water table — handled" },
    { title: "On-Schedule Delivery", sub: "Built around your critical-path timeline" },
    { title: "Safety-First Operations", sub: "Licensed, insured & WSIB compliant" },
    { title: "B2B Specialists", sub: "Trusted by PMs, GCs & site supervisors" },
  ],
  cta: { label: "Discuss Your Project", href: `${ROUTES.contact}` },
  mediaStat: { value: "15+", label: "Yrs. Field Experience" },
  badgeText: "Licensed & Insured",
};

const TESTPAGE_ABOUT_PHOTO = "/images/excavation-and-foundations-orillia-barrie.png";

/** Title accent treatment aligned to service-card wireframe (yellow word / full line). */
const SERVICE_CARD_TITLE_ACCENT: Record<
  string,
  { mode: "none" | "all" | "word"; word?: string }
> = {
  "excavation-site-preparation": { mode: "none" },
  "site-preparation-grading": { mode: "word", word: "Grading" },
  "foundations-civil-infrastructure": { mode: "word", word: "Civil" },
  "drainage-hardscaping": { mode: "none" },
  "hauling-site-clearing-logistics": { mode: "all" },
  "snow-removal": { mode: "word", word: "Removal" },
};

function serviceHeadline(card: MegaMenuCard) {
  return Array.isArray(card.gridTitle) && card.gridTitle.length > 0
    ? card.gridTitle.join(" · ")
    : card.title;
}

function ServiceCardHeading({ slug, headline }: { slug: string; headline: string }) {
  const cfg = SERVICE_CARD_TITLE_ACCENT[slug] ?? { mode: "none" as const };
  const t = headline.trim();
  if (cfg.mode === "all") {
    return (
      <>
        <span className="testpage__service-head-accent">{t}</span>
      </>
    );
  }
  if (cfg.mode === "word" && cfg.word) {
    const lower = t.toLowerCase();
    const w = cfg.word.toLowerCase();
    const i = lower.indexOf(w);
    if (i < 0) {
      return <>{t}</>;
    }
    const before = t.slice(0, i);
    const mid = t.slice(i, i + cfg.word.length);
    const after = t.slice(i + cfg.word.length);
    return (
      <>
        {before}
        <span className="testpage__service-head-accent">{mid}</span>
        {after}
      </>
    );
  }
  return <>{t}</>;
}

const base = {
  ...seo,
  robots: { index: false, follow: false },
};

export const metadata: Metadata = base;

export default function TestPage() {
  return (
    <main id="main-content" className="testpage">
      <section className="testpage__hero" aria-labelledby="testpage-hero-heading">
        <div className="testpage__hero-bg" aria-hidden />
        <div className="testpage__hero-planes" aria-hidden />
        <div className="testpage__hero-inner gl-reveal">
          <div className="testpage__trust-chips" role="list" aria-label="Credentials">
            <span className="testpage__trust-chip" role="listitem">
                FULLY LICENSED & INSURED IN ONTARIO
            </span>
            <span className="testpage__trust-chip" role="listitem">
                WSIB REGISTERED & IN GOOD STANDING
            </span>
            <span className="testpage__trust-chip" role="listitem">
                OBC COMPLIANT - ALL WORK TO CODE
            </span>
          </div>
          <p className="eyebrow">Built on trust. Driven by quality.</p>
          <h1 id="testpage-hero-heading" className="gl-h1 testpage__hero-title">
            WE BUILD WHAT MATTERS.
          </h1>
          <div className="testpage__hero-lede-wrap">
            <p className="gl-prose gl-prose--light testpage__hero-sub">
              Full-service construction solutions for residential, commercial, and industrial projects.
            </p>
          </div>
          <div className="testpage__hero-actions">
            <SmartLink href={ROUTES.contact} className="btn-primary">
              GET A QUOTE <IconArrow />
            </SmartLink>
            <SmartLink href={ROUTES.projects} className="btn-hero-glass">
              VIEW OUR WORK <IconArrow />
            </SmartLink>
          </div>
          <a href="#testpage-services" className="testpage__hero-cue" aria-label="Scroll to services" />
        </div>
      </section>

      <section id="testpage-services" className="testpage__services testpage__services--dna" aria-labelledby="testpage-services-heading">
        <div className="testpage__services-dse-rail" aria-hidden />
        <div className="testpage__services-blueprint" aria-hidden />
        <div className="testpage__services-grain" aria-hidden />
        <div className="testpage__services-diagonal" aria-hidden />
        <div className="testpage__services-motif-svg" aria-hidden />
        <span className="testpage__services-wm" aria-hidden>
          GLC
        </span>
        <div className="testpage__container">
          <header className="testpage__head testpage__head--services-ref gl-reveal">
            <div className={svcStyles.svcRefEyebrow}>
              <span className={svcStyles.svcRefEyebrowDash} aria-hidden />
              <span className={svcStyles.svcRefEyebrowTxt}>What we do</span>
            </div>
            <h2 id="testpage-services-heading" className={svcStyles.svcRefStageHeading}>
              Complete Construction <span>Services</span>
            </h2>
            <p className={svcStyles.svcRefStageSub}>
              From start to finish, we deliver quality craftsmanship and reliable solutions.
            </p>
          </header>
          <div className="testpage__services-motif-bridge" aria-hidden>
            <div className="glc-motif-divider-a3--to-light" />
          </div>
          <ul className="testpage__services-grid">
            {navCards.map((card, idx) => {
              const src = card.photoSrc?.trim() || "/images/excavation-and-foundations-orillia-barrie.png";
              const alt = [card.title, card.description].filter(Boolean).join(" — ");
              const hl = serviceHeadline(card);
              const wide = idx >= 4;
              return (
                <li
                  key={card.slug}
                  className={`testpage__services-grid-item gl-reveal gl-delay-${(idx % 5) + 1}`}
                >
                  <SmartLink
                    href={ROUTES.service(card.slug)}
                    className={`testpage__svc-card${wide ? " testpage__svc-card--wide" : ""}`}
                  >
                    <div className="testpage__svc-card__stack">
                      {/* z-0 — image plane (bleeds past card edge like header layer stack) */}
                      <div className="testpage__svc-card__image-layer">
                        <Image
                          src={src}
                          alt={alt}
                          fill
                          className="testpage__svc-card__img"
                          sizes="(max-width: 768px) 100vw, (max-width: 980px) 50vw, (max-width: 1399px) 25vw, 16vw"
                        />
                        <div className="testpage__svc-card__scrim" aria-hidden />
                        <span className={`${svcStyles.expandHeroNum} testpage__svc-card__num`} aria-hidden>
                          {card.num}
                        </span>
                      </div>
                      {/* z-10 — hero-v2__chip glass plate + header gold strip / vertical rail (marquee + nav DNA) */}
                      <div className="testpage__svc-card__plate">
                        <span className="testpage__svc-card__plate-cap" aria-hidden />
                        <div className="testpage__svc-card__plate-body">
                          <span className="testpage__svc-card__plate-rail" aria-hidden />
                          <div className="testpage__svc-card__plate-inner">
                            <h3 className={`${svcStyles.expandHeadline} testpage__svc-card__title`}>
                              <ServiceCardHeading slug={card.slug} headline={hl} />
                            </h3>
                            {card.gridDescription ? (
                              <p className="testpage__svc-card__lede">{card.gridDescription}</p>
                            ) : null}
                            {card.subTags && card.subTags.length > 0 ? (
                              <ul className={`${svcStyles.expandTags} testpage__svc-card__tags`}>
                                {card.subTags.map((t) => (
                                  <li key={`${card.slug}-${t}`}>{t}</li>
                                ))}
                              </ul>
                            ) : null}
                            <span className="testpage__svc-card__cta btn-hero-glass">
                              Learn more
                              <IconArrowSmall />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SmartLink>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="testpage-why" className="testpage__why--ab3" aria-labelledby="testpage-why-heading">
        <div className="testpage__why-st3-rail" aria-hidden />
        <span className="ab3__wm" aria-hidden>
          GLC
        </span>

        <div className="ab3__layout">
          <div className="ab3__copy">
            <Reveal className="ab3__top-row">
              <span className="eyebrow">{about.eyebrow}</span>
              <span className="ab3__since" aria-label={`${about.mediaStat.value} ${about.mediaStat.label}`}>
                {about.mediaStat.value}&thinsp;
                <span>{about.mediaStat.label}</span>
              </span>
            </Reveal>

            <Reveal delayClass="reveal--delay-1" className="ab3__heading-wrap">
              <h2 id="testpage-why-heading" className="ab3__heading">
                {about.headingBefore}
                <em className="ab3__heading-em">{about.headingAccent}</em>
                {about.headingAfter}
              </h2>
              <span className="ab3__heading-rule" aria-hidden />
            </Reveal>

            <Reveal delayClass="reveal--delay-2">
              <p className="ab3__body">{about.body}</p>
            </Reveal>

            {about.whoWeServe ? (
              <Reveal delayClass="reveal--delay-2" className="ab3__who-serve">
                <p className="ab3__who-serve-title">{about.whoWeServe.title}</p>
                <p className="ab3__who-serve-intro">{about.whoWeServe.intro}</p>
                <ul className="ab3__who-serve-chips" aria-label="Who we work with">
                  {about.whoWeServe.chips.map((c) => (
                    <li key={c} className="ab3__who-serve-chip">
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}

            <Reveal delayClass="reveal--delay-3" className="ab3__creds">
              {about.credentials.map((c, i) => (
                <div key={c.title} className="ab3__cred">
                  <div className="ab3__cred-idx" aria-hidden>
                    0{i + 1}
                  </div>
                  <div className="ab3__cred-body">
                    <div className="ab3__cred-title">{c.title}</div>
                    <div className="ab3__cred-sub">{c.sub}</div>
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal delayClass="reveal--delay-4">
              <div className="testpage__ab3-cta-row">
                <SmartLink href={about.cta.href} className="btn-primary">
                  {about.cta.label}
                  <IconArrow />
                </SmartLink>
                <SmartLink href={ROUTES.projects} className="btn-ghost btn-ghost--dark">
                  View our work
                  <IconArrow />
                </SmartLink>
              </div>
            </Reveal>
          </div>

          <div className="ab3__media">
            <div className="ab3__badge" aria-hidden>
              <span>{about.badgeText}</span>
            </div>

            <div
              className="ab3__photo ab3__photo--has-img"
              role="img"
              aria-label="Ground Level Contracting crew on an excavation site"
            >
              <Image
                src={TESTPAGE_ABOUT_PHOTO}
                alt=""
                fill
                className="ab3__photo-img"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority={false}
              />
            </div>

            <div className="ab3__chip" aria-hidden>
              <div className="ab3__chip-num">{about.mediaStat.value}</div>
              <div className="ab3__chip-lbl">{about.mediaStat.label}</div>
            </div>

            <div className="ab3__corner-mark" aria-hidden />
          </div>
        </div>
      </section>

      <section className="testpage__process" aria-labelledby="testpage-process-heading">
        <div className="testpage__section-rail" aria-hidden />
        <div className="testpage__process-bg" aria-hidden />
        <div className="testpage__container">
          <header className="testpage__head gl-reveal">
            <p className="eyebrow eyebrow--dark">How we do it</p>
            <span className="testpage__head-rule" aria-hidden />
            <h2 id="testpage-process-heading" className="gl-h2">
              A Process You Can <em>Rely On</em>
            </h2>
            <p className="gl-prose">Our proven process ensures your project is delivered safely, on time, and right.</p>
          </header>
          <div className="testpage__process-watermark" aria-hidden>
            PROCESS
          </div>
          <ol className="testpage__process-rail">
            {[
              ["01", "Consultation", "We listen, understand your needs, and plan the right approach."],
              ["02", "Planning", "Detailed planning, scheduling and budgeting before mobilization."],
              ["03", "Construction", "Skilled execution with quality and safety at every step."],
              ["04", "Completion", "Final walkthrough and project delivery with full sign-off."],
            ].map(([num, title, body], idx) => (
              <li key={title} className={`testpage__process-step gl-reveal gl-delay-${(idx % 5) + 1}`}>
                <span className="testpage__process-num">{num}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="testpage__detail" aria-labelledby="testpage-detail-heading">
        <div className="testpage__section-rail testpage__section-rail--dark" aria-hidden />
        <div className="testpage__detail-bg" aria-hidden />
        <div className="testpage__detail-divider" aria-hidden />
        <div className="testpage__container testpage__detail-grid">
          <div className="testpage__detail-copy gl-reveal">
            <p className="eyebrow">Our services in detail</p>
            <span className="testpage__head-rule testpage__head-rule--light" aria-hidden />
            <h2 id="testpage-detail-heading" className="gl-h2">
              Solutions Built Around <em>Your Needs</em>
            </h2>
            <p className="gl-prose gl-prose--light">
              Explore our full range of construction services designed to bring your vision to life.
            </p>
            <div className="testpage__detail-accordion" role="list">
              {navCards.map((card, idx) => (
                <details
                  key={card.slug}
                  className={`testpage__detail-item gl-reveal gl-delay-${(idx % 5) + 1}`}
                  role="listitem"
                >
                  <summary>
                    <span className="testpage__detail-summary-left">
                      <span className="testpage__detail-summary-num">{String(idx + 1).padStart(2, "0")}</span>
                      <span className="testpage__detail-summary-main">{card.title}</span>
                    </span>
                    <span aria-hidden className="testpage__detail-plus">+</span>
                  </summary>
                  <p>{card.gridDescription}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="testpage__detail-media gl-reveal" aria-hidden>
            <video
              className="testpage__detail-media-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/media/commercial-snow-ctv-salt-segment.mp4" type="video/mp4" />
            </video>
            <div className="testpage__detail-media-overlay" />
          </div>
        </div>
      </section>

      <section className="testpage__proof" aria-label="Performance metrics and testimonial">
        <div className="testpage__section-rail" aria-hidden />
        <div className="testpage__proof-bg" aria-hidden />
        <div className="testpage__container testpage__proof-grid">
          <header className="testpage__proof-head gl-reveal">
            <p className="eyebrow eyebrow--dark">Performance snapshot</p>
            <h2 className="gl-h2">
              Measured Results. <em>Trusted Delivery.</em>
            </h2>
          </header>
          <div className="testpage__proof-stats">
            <StatCellAnimated target={250} afterNumber="+" label="Projects Completed" sub="Delivered across Simcoe County" />
            <StatCellAnimated target={15} afterNumber="+" label="Years of Experience" sub="Commercial field expertise" delayClass="reveal--delay-1" />
            <StatCellAnimated target={100} afterNumber="%" label="Safety Focused" sub="Committed to top standards" delayClass="reveal--delay-2" />
          </div>
          <blockquote className="testpage__proof-quote gl-reveal reveal--delay-2">
            <div className="testpage__proof-badge">
              <span>Licensed & insured</span>
            </div>
            <div className="testpage__proof-quote-mark" aria-hidden>
              &ldquo;
            </div>
            <p>&ldquo;Great team, great communication, and outstanding quality. We will hire again.&rdquo;</p>
            <footer>Client Name, Commercial Build</footer>
            <div className="testpage__proof-chip" aria-hidden>
              <div className="testpage__proof-chip-num">15+</div>
              <div className="testpage__proof-chip-lbl">YRS. FIELD EXPERIENCE</div>
            </div>
            <div className="testpage__proof-dots" aria-hidden>
              <span className="is-active" />
              <span />
              <span />
            </div>
          </blockquote>
        </div>
      </section>

      <section id="testpage-cta" className="testpage__cta" aria-labelledby="testpage-cta-heading">
        <div className="testpage__section-rail testpage__section-rail--dark" aria-hidden />
        <div className="testpage__cta-bg" aria-hidden />
        <div className="testpage__container testpage__cta-inner gl-reveal">
          <p className="eyebrow">Ready to build?</p>
          <span className="testpage__head-rule testpage__head-rule--light" aria-hidden />
          <h2 id="testpage-cta-heading" className="gl-h2">
            READY TO BUILD <em>SOMETHING GREAT?</em>
          </h2>
          <p className="gl-prose gl-prose--light">Let&apos;s discuss your project and build a better future together.</p>
          <div className="testpage__cta-actions">
            <SmartLink href={ROUTES.contact} className="btn-primary">
              GET A QUOTE TODAY <IconArrow />
            </SmartLink>
            <SmartLink href={ROUTES.projects} className="btn-ghost">
              VIEW OUR WORK <IconArrow />
            </SmartLink>
          </div>
          <div className="testpage__cta-chips" role="list" aria-label="Trust highlights">
            <span role="listitem">Licensed & insured</span>
            <span role="listitem">24hr response window</span>
            <span role="listitem">Commercial-grade crews</span>
          </div>
        </div>
      </section>
    </main>
  );
}
