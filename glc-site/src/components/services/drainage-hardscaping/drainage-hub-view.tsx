import { InteractiveCapabilities } from "@/components/services/interactive-capabilities";
import { DrainageDenseText, DrainageFragmentedH2 } from "@/components/services/drainage-hardscaping/drainage-typography";
import { DrainageHubCoverage } from "@/components/services/drainage-hardscaping/drainage-hub-coverage";
import { DrainageHubHeroV2 } from "@/components/services/drainage-hardscaping/drainage-hub-hero-v2";
import { DrainageHubOverview } from "@/components/services/drainage-hardscaping/drainage-hub-overview";
import { DrainageHubScope } from "@/components/services/drainage-hardscaping/drainage-hub-scope";
import { DrainageHubTrustSt3 } from "@/components/services/drainage-hardscaping/drainage-hub-trust-st3";
import { DrainageHubWhyProcess } from "@/components/services/drainage-hardscaping/drainage-hub-why-process";
import { SmartLink } from "@/components/ui/smart-link";
import { IconArrow } from "@/components/ui/icon-arrow";
import { DRAINAGE_HUB_CAPABILITY_TABS } from "@/content/drainage-hub-capability-tabs";
import {
  DRAINAGE_HUB_FAQ,
  DRAINAGE_HUB_FAQ_EYEBROW,
  DRAINAGE_HUB_FAQ_H2,
  DRAINAGE_HUB_FINAL,
  DRAINAGE_HUB_RELATED,
  DRAINAGE_HUB_RELATED_SECTION,
  DRAINAGE_HUB_TRUST_SIGNALS,
  DRAINAGE_HUB_TRUST_SIGNALS_EYEBROW,
  DRAINAGE_HUB_TRUST_SIGNALS_H2,
} from "@/content/drainage-hardscaping-page";
import navigation from "@/content/navigation.json";
import { splitFirstTwoSentences } from "@/lib/copy-density";
import { ROUTES } from "@/lib/routes";
import type { NavigationConfig, SiteConfig } from "@/content/types";

type Props = { site: SiteConfig };

function FaqAnswerDense({ answer }: { answer: string }) {
  const { lead, remainder } = splitFirstTwoSentences(answer);
  if (!remainder) {
    return <p className="glc-drain-hub__faq-answer-p">{answer}</p>;
  }
  return (
    <>
      <p className="glc-drain-hub__faq-answer-p">{lead}</p>
      <details className="service-cap-readmore glc-drain-hub__readmore glc-drain-hub__faq-readmore">
        <summary>Technical depth &amp; field notes</summary>
        <div className="service-cap-readmore__inner glc-drain-hub__readmore-inner">
          <p className="glc-drain-hub__faq-answer-p">{remainder}</p>
        </div>
      </details>
    </>
  );
}

/**
 * Drainage & hardscaping hub — L/D rhythm per HOMEPAGE_SECTION_CLONE_SPEC + `.cursor/rules/service-hub-section-rhythm.mdc`.
 * Tone boundaries use `.glc-drain-page__mist-seam` (A3-class); outer `--section-v` on band sections is in `glc-base.css`
 * under `.service-page--drainage-v2` / `glc-drain-hub__*`.
 */
export function DrainageHubView({ site }: Props) {
  const telHref = site.telephone.startsWith("tel:")
    ? site.telephone
    : `tel:${site.telephone}`;
  const year = String(site.copyrightYear);
  const navData = navigation as NavigationConfig;

  return (
    <main id="main-content" className="service-page--drainage-v2 glc-drain-hub">
      <DrainageHubHeroV2 site={site} megaCards={navData.megaMenu.cards} />
      <DrainageHubTrustSt3 />

      <DrainageHubOverview />

      <div className="glc-drain-page__mist-seam glc-drain-hub__tone-seam glc-drain-hub__overview-to-scope-seam" aria-hidden />

      <DrainageHubScope />

      <div className="glc-drain-page__mist-seam glc-drain-hub__tone-seam glc-drain-hub__scope-to-interactive-seam" aria-hidden />

      <div className="glc-drain-hub__interactive">
        <InteractiveCapabilities tabs={DRAINAGE_HUB_CAPABILITY_TABS} site={site} />
      </div>

      <div className="glc-drain-page__mist-seam glc-drain-hub__tone-seam glc-drain-hub__interactive-to-why-seam" aria-hidden />

      <DrainageHubWhyProcess />

      <div className="glc-drain-page__mist-seam glc-drain-hub__tone-seam glc-drain-hub__why-to-faq-seam" aria-hidden />

      <section id="faq" className="glc-drain-hub__faq ls" aria-labelledby="drainage-hub-faq-h2">
        <span className="glc-drain-hub__b-slot" aria-hidden />
        <div className="cta3__diag glc-drain-hub__faq-diag" aria-hidden />
        <div className="container glc-drain-hub__faq-inner ls-c">
          <div className="eyebrow eyebrow--dark glc-drain-hub__faq-eyebrow">{DRAINAGE_HUB_FAQ_EYEBROW}</div>
          <DrainageFragmentedH2
            id="drainage-hub-faq-h2"
            text={DRAINAGE_HUB_FAQ_H2}
            className="glc-drain-hub__faq-h2"
          />
          <div className="about__divider glc-drain-hub__faq-rule" />
          <div className="glc-drain-hub__faq-list">
            {DRAINAGE_HUB_FAQ.map((item) => (
              <details key={item.question} className="glc-drain-hub__faq-details">
                <summary className="glc-drain-hub__faq-summary">
                  <h3 className="glc-drain-hub__faq-q">{item.question}</h3>
                </summary>
                <div className="glc-drain-hub__faq-answer">
                  <FaqAnswerDense answer={item.answer} />
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="glc-drain-page__mist-seam glc-drain-hub__tone-seam glc-drain-hub__faq-to-trust-seam" aria-hidden />

      <section
        id="trust-signals"
        className="glc-drain-hub__trust-signals dse glc-drain-hub__trust-signals--layered"
        aria-labelledby="drainage-hub-trust-h2"
      >
        <span className="glc-drain-hub__b-slot" aria-hidden />
        <div className="service-trust-shell__visual glc-drain-hub__trust-signals-visual" aria-hidden>
          <div className="service-trust-shell__visual-pin" />
        </div>
        <div className="container glc-drain-hub__trust-signals-inner">
          <div className="eyebrow eyebrow--on-dark glc-drain-hub__trust-signals-eyebrow">
            {DRAINAGE_HUB_TRUST_SIGNALS_EYEBROW}
          </div>
          <DrainageFragmentedH2
            id="drainage-hub-trust-h2"
            text={DRAINAGE_HUB_TRUST_SIGNALS_H2}
            className="glc-drain-hub__section-h2"
          />
          <div className="about__divider glc-drain-hub__trust-signals-rule" />
          <ul className="glc-drain-hub__trust-signals-grid">
            {DRAINAGE_HUB_TRUST_SIGNALS.map((row) => (
              <li key={row.title} className="glc-drain-hub__trust-signal">
                <span className="glc-drain-hub__trust-signal-check" aria-hidden>
                  {"\u2713"}
                </span>
                <div className="glc-drain-hub__trust-signal-copy">
                  <strong className="glc-drain-hub__trust-signal-title">{row.title}</strong>
                  <DrainageDenseText
                    text={row.body.replace("[YEAR]", year)}
                    ledeClassName="glc-drain-hub__trust-signal-body"
                    innerClassName="glc-drain-hub__trust-signal-body glc-drain-hub__trust-signal-body--inner"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="glc-drain-page__mist-seam glc-drain-hub__tone-seam glc-drain-hub__trust-to-coverage-seam" aria-hidden />

      <DrainageHubCoverage />

      <div className="glc-drain-page__mist-seam glc-drain-hub__tone-seam glc-drain-hub__coverage-to-related-seam" aria-hidden />

      <section id="related-services" className="glc-drain-hub__related dse" aria-label="Related services">
        <span className="glc-drain-hub__b-slot" aria-hidden />
        <div className="cta3__diag glc-drain-hub__related-diag" aria-hidden />
        <div className="container glc-drain-hub__related-inner">
          <div className="eyebrow eyebrow--on-dark glc-drain-hub__related-eyebrow">
            {DRAINAGE_HUB_RELATED_SECTION.eyebrow}
          </div>
          <h2 className="glc-drain-hub__section-h2 glc-drain-hub__related-h2">
            {DRAINAGE_HUB_RELATED_SECTION.titleBefore}{" "}
            <em className="glc-drain-hub__heading-accent">{DRAINAGE_HUB_RELATED_SECTION.titleAccent}</em>
          </h2>
          <div className="about__divider glc-drain-hub__related-rule" />
          <div className="glc-drain-hub__related-grid">
            {DRAINAGE_HUB_RELATED.map((card) => (
              <article key={card.href} className="glc-drain-hub__related-card">
                <h3 className="glc-drain-hub__related-card-title">
                  <SmartLink href={card.href}>{card.title}</SmartLink>
                </h3>
                <DrainageDenseText
                  text={card.body}
                  ledeClassName="glc-drain-hub__related-card-body"
                  innerClassName="glc-drain-hub__related-card-body glc-drain-hub__related-card-body--inner"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="request-site-visit"
        className="glc-drain-hub__final ls glc-drain-hub__final--cta3"
        aria-label={DRAINAGE_HUB_FINAL.sectionAriaLabel}
      >
        <span className="glc-drain-hub__b-slot" aria-hidden />
        <div className="cta3__diag" aria-hidden />
        <div className="cta3__inner glc-drain-hub__final-cta3">
          <div className="cta3__copy">
            <div className="cta3__eyebrow-bar" aria-hidden>
              <span className="cta3__eyebrow">{DRAINAGE_HUB_FINAL.ctaEyebrow}</span>
              <span className="cta3__eyebrow-line" />
            </div>
            <h2 className="cta3__heading" aria-label={DRAINAGE_HUB_FINAL.headline}>
              {DRAINAGE_HUB_FINAL.headlineLine1}
              <br />
              <em>{DRAINAGE_HUB_FINAL.headlineAccent}</em>
            </h2>
            <DrainageDenseText
              text={`${DRAINAGE_HUB_FINAL.line1} ${DRAINAGE_HUB_FINAL.line2}`}
              ledeClassName="cta3__sub"
              innerClassName="cta3__sub glc-drain-hub__final-sub--more"
            />
          </div>
          <div className="glc-drain-hub__final-actions-col">
            <SmartLink href={ROUTES.contact} className="btn-primary">
              {DRAINAGE_HUB_FINAL.primaryCta}
              <IconArrow />
            </SmartLink>
            <SmartLink href={ROUTES.contact} className="btn-ghost-dark">
              {DRAINAGE_HUB_FINAL.secondaryCta}
            </SmartLink>
            <a href={telHref} className="btn-ghost-dark">
              {DRAINAGE_HUB_FINAL.tertiaryCtaPrefix}: {site.telephoneDisplay}
            </a>
          </div>
        </div>
        <div className="cta3__bottom-bar" aria-hidden />
        <p className="glc-drain-hub__final-foot container">
          {DRAINAGE_HUB_FINAL.footTemplate.replace("[YEAR]", year)}
        </p>
      </section>
    </main>
  );
}
