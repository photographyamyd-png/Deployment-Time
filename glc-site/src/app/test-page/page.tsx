import type { Metadata } from "next";
import "./test-page.css";
import navigation from "@/content/navigation.json";
import type { NavigationConfig } from "@/content/types";
import { SmartLink } from "@/components/ui/smart-link";
import { HeroServiceIcon } from "@/components/sections/service-card-icon";
import { StatCellAnimated } from "@/components/ui/stat-cell-animated";
import { IconArrow } from "@/components/ui/icon-arrow";
import { ROUTES } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

const seo = pageMetadata({
  title: "Landing Page Test | Ground Level Contracting",
  description:
    "Internal wireframe-compliance landing page test. Not linked in site navigation.",
  path: ROUTES.testPage,
});

const navData = navigation as NavigationConfig;
const navCards = navData.megaMenu.cards.slice(0, 6);

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

const SERVICE_CARD_MOTIF_CLASS = [
  "testpage__service-card--motif-a",
  "testpage__service-card--motif-b",
  "testpage__service-card--motif-c",
  "testpage__service-card--motif-a",
  "testpage__service-card--motif-b",
  "testpage__service-card--motif-c",
] as const;

function ServiceCardHeading({ slug, title }: { slug: string; title: string }) {
  const cfg = SERVICE_CARD_TITLE_ACCENT[slug] ?? { mode: "none" as const };
  const t = title.trim();
  if (cfg.mode === "all") {
    return (
      <h3 className="testpage__service-title">
        <span className="testpage__service-title-accent">{t.toUpperCase()}</span>
      </h3>
    );
  }
  if (cfg.mode === "word" && cfg.word) {
    const lower = t.toLowerCase();
    const w = cfg.word.toLowerCase();
    const i = lower.indexOf(w);
    if (i < 0) {
      return <h3 className="testpage__service-title">{t.toUpperCase()}</h3>;
    }
    const before = t.slice(0, i).toUpperCase();
    const mid = t.slice(i, i + cfg.word.length).toUpperCase();
    const after = t.slice(i + cfg.word.length).toUpperCase();
    return (
      <h3 className="testpage__service-title">
        {before}
        <span className="testpage__service-title-accent">{mid}</span>
        {after}
      </h3>
    );
  }
  return <h3 className="testpage__service-title">{t.toUpperCase()}</h3>;
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

      <section id="testpage-services" className="testpage__services" aria-labelledby="testpage-services-heading">
        <div className="testpage__section-rail" aria-hidden />
        <div className="testpage__section-noise" aria-hidden />
        <div className="testpage__container">
          <header className="testpage__head gl-reveal">
            <p className="eyebrow eyebrow--dark">What we do</p>
            <span className="testpage__head-rule" aria-hidden />
            <h2 id="testpage-services-heading" className="gl-h2">
              Complete Construction <em>Services</em>
            </h2>
            <p className="gl-prose">
              From start to finish, we deliver quality craftsmanship and reliable solutions.
            </p>
          </header>
          <div className="testpage__services-grid">
            {navCards.map((card, idx) => (
              <SmartLink
                key={card.slug}
                href={ROUTES.service(card.slug)}
                className={`testpage__service-card ${SERVICE_CARD_MOTIF_CLASS[idx] ?? ""} ${idx === 0 ? "testpage__service-card--featured" : ""} gl-reveal gl-delay-${(idx % 5) + 1}`}
              >
                {idx === 0 ? <span className="testpage__service-feature-corner" aria-hidden /> : null}
                <span className="testpage__service-motif-ghost" aria-hidden />
                <div className="testpage__service-card-body">
                  <div className="testpage__service-icon" aria-hidden>
                    <HeroServiceIcon slug={card.slug} />
                  </div>
                  <ServiceCardHeading slug={card.slug} title={card.title} />
                  <div
                    className="testpage__service-media"
                    style={{
                      backgroundImage: `url('${card.photoSrc ?? "/images/excavation-and-foundations-orillia-barrie.png"}')`,
                    }}
                    aria-hidden
                  />
                  <p className="testpage__service-desc">{card.gridDescription}</p>
                  <span className="testpage__service-cta btn-primary">
                    LEARN MORE <IconArrow />
                  </span>
                </div>
              </SmartLink>
            ))}
          </div>
        </div>
      </section>

      <section className="testpage__why" aria-labelledby="testpage-why-heading">
        <div className="testpage__section-rail testpage__section-rail--dark" aria-hidden />
        <div className="testpage__container testpage__why-grid">
          <div className="testpage__why-media gl-reveal" aria-hidden>
            <div
              className="testpage__why-media-bg"
              style={{
                backgroundImage:
                  "url('/images/services/drainage-hardscaping/work-cap-foundation-trench.jpg')",
              }}
            />
            <div className="testpage__why-media-overlay" />
            <div className="testpage__why-media-badge">Licensed & insured</div>
          </div>
          <div className="testpage__why-copy gl-reveal">
            <p className="eyebrow">Why we do it</p>
            <span className="testpage__head-rule testpage__head-rule--light" aria-hidden />
            <h2 id="testpage-why-heading" className="gl-h2">
              Building Better. <em>Building Trust.</em>
            </h2>
            <p className="gl-prose gl-prose--light">
              We believe every project is more than construction - it is about creating lasting value and strong relationships.
            </p>
            <div className="testpage__why-points">
              <article>
                <h3>Quality First</h3>
                <p>We never compromise on quality.</p>
              </article>
              <article>
                <h3>Built on Integrity</h3>
                <p>Honest communication and transparent process.</p>
              </article>
              <article>
                <h3>Commitment</h3>
                <p>Dedicated to delivering on our promises.</p>
              </article>
            </div>
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
