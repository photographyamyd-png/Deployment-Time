import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { IconArrow } from "@/components/ui/icon-arrow";
import { SmartLink } from "@/components/ui/smart-link";
import { DrainageDenseText } from "@/components/services/drainage-hardscaping/drainage-typography";
import { DRAINAGE_HUB_CAPABILITY_TABS } from "@/content/drainage-hub-capability-tabs";
import {
  DRAINAGE_HUB_SCOPE_CARDS,
  DRAINAGE_HUB_SCOPE_EYEBROW,
  DRAINAGE_HUB_SCOPE_H2,
} from "@/content/drainage-hardscaping-page";

const SCOPE_DETAILS_NAME = "drainage-hub-scope-cards";
const FIGURE_TAB = DRAINAGE_HUB_CAPABILITY_TABS[0];

function scopeHeadlineParts(): { line1: string; line2: string | null } {
  const raw = DRAINAGE_HUB_SCOPE_H2.split(" — ").map((s) => s.trim());
  if (raw.length >= 2 && raw[0] && raw[1]) {
    return { line1: raw[0], line2: raw[1] };
  }
  return { line1: DRAINAGE_HUB_SCOPE_H2.trim(), line2: null };
}

/**
 * HOMEPAGE_SECTION_CLONE_SPEC §8 — `svlayer svlayer--dse` deck + copy + figure.
 * All strings come from existing hub content (cards, capability tab0 for figure).
 */
export function DrainageHubScope() {
  const { line1, line2 } = scopeHeadlineParts();
  const introFromLinkLabels = DRAINAGE_HUB_SCOPE_CARDS.map((c) => c.linkLabel).join(" · ");
  const ctaAssessmentCard = DRAINAGE_HUB_SCOPE_CARDS.find((c) => c.id === "cta-assessment");
  const kicker = ctaAssessmentCard?.linkLabel ?? "";

  return (
    <section
      id="scope"
      className="glc-drain-hub__scope svlayer svlayer--dse"
      aria-labelledby="scope-heading"
    >
      <div className="cta3__diag" aria-hidden />
      <div className="services-band__top-accent" aria-hidden />
      <div className="svlayer__layers" aria-hidden>
        <span className="svlayer__sheet svlayer__sheet--back" />
        <span className="svlayer__sheet svlayer__sheet--mid" />
        <span className="svlayer__sheet svlayer__sheet--front" />
      </div>

      <div className="svlayer__inner">
        <div className="svlayer__copy">
          <Reveal>
            <div className="eyebrow eyebrow--on-dark">{DRAINAGE_HUB_SCOPE_EYEBROW}</div>
          </Reveal>
          <Reveal delayClass="reveal--delay-1">
            <h2 id="scope-heading" className="services__heading svlayer__headline">
              {line1}
              {line2 ? (
                <>
                  <br />
                  <em className="svlayer__headline-accent">{line2}</em>
                </>
              ) : null}
            </h2>
            <div className="about__divider glc-drain-hub__scope-head-rule" aria-hidden />
          </Reveal>
          <Reveal delayClass="reveal--delay-2">
            <DrainageDenseText
              text={introFromLinkLabels}
              ledeClassName="services__intro"
              innerClassName="services__intro glc-drain-hub__scope-intro--more"
            />
            <ul className="svlayer__scope" aria-label="Service lines on this hub">
              {DRAINAGE_HUB_SCOPE_CARDS.map((c) => (
                <li key={c.id}>{c.title}</li>
              ))}
            </ul>
            {kicker ? <p className="services__kicker">{kicker}</p> : null}
          </Reveal>
        </div>

        <figure className="svlayer__figure">
          <div className="svlayer__figure-bite" aria-hidden />
          <div className="svlayer__figure-frame">
            <div className="svlayer__figure-fill">
              <Image
                src={FIGURE_TAB.imageSrc}
                alt={FIGURE_TAB.imageAlt}
                fill
                className="svlayer__img"
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>
          </div>
          <figcaption className="svlayer__caption">{FIGURE_TAB.tabLabel}</figcaption>
        </figure>

        <div className="svlayer__deck">
          {DRAINAGE_HUB_SCOPE_CARDS.map((card, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <details key={card.id} className="svlayer__card" name={SCOPE_DETAILS_NAME}>
                <summary className="svlayer__card-summary">
                  <span className="svlayer__card-num" aria-hidden>
                    {num}
                  </span>
                  <span className="svlayer__card-titles">
                    <span className="svlayer__card-title-line">{card.title}</span>
                  </span>
                  <span className="svlayer__card-signal" aria-hidden />
                </summary>
                <div className="svlayer__card-panel">
                  <DrainageDenseText
                    text={card.body}
                    ledeClassName="svlayer__card-desc"
                    innerClassName="svlayer__card-desc glc-drain-hub__scope-card-desc--more"
                  />
                  <SmartLink href={card.href} className="svlayer__card-cta">
                    {card.linkLabel}
                    <IconArrow />
                  </SmartLink>
                </div>
              </details>
            );
          })}
        </div>
      </div>

      <div className="cta3__bottom-bar" aria-hidden />
    </section>
  );
}
