import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SmartLink } from "@/components/ui/smart-link";
import { IconArrow } from "@/components/ui/icon-arrow";
import { HomeServicesExpandableList } from "@/components/sections/home-services-expandable-list";
import { ServicesFeatureParallax } from "@/components/sections/services-feature-parallax";
import { ServicesSectionDepthShell } from "@/components/sections/services-section-depth-shell";
import type { MegaMenuCard, ServicesBandCta, ServicesSectionProps } from "@/content/types";
import { ROUTES } from "@/lib/routes";
import styles from "@/components/sections/services-grid-section.module.css";

const FALLBACK_FEATURE = "/images/excavation-and-foundations-orillia-barrie.png";

type Props = ServicesSectionProps & {
  cards: MegaMenuCard[];
  /** When set (homepage), renders quote + view-all CTAs in the split bar. */
  servicesBandCta?: ServicesBandCta;
  /** Homepage-only: stats/coverage-style dark editorial surface + contrast. */
  editorialSurface?: boolean;
  /**
   * Homepage-only: light minimal band — balanced intro | specs grid, preview row,
   * accordion; charcoal for rails, dividers, and card footers only.
   */
  referenceSplitLayout?: boolean;
};

function cardHeadline(card: MegaMenuCard): string {
  if (Array.isArray(card.gridTitle) && card.gridTitle.length > 0) {
    return card.gridTitle.join(" · ");
  }
  return card.title;
}

export function ServicesGridSection({
  cards,
  servicesBandCta,
  editorialSurface = false,
  referenceSplitLayout = false,
  ...props
}: Props) {
  const tagline = props.tagline?.trim();
  const intro = props.intro?.trim();
  const hasDistinctIntro = Boolean(tagline && intro && tagline !== intro);
  const featureSrc =
    props.featureImageSrc?.trim() || cards[0]?.photoSrc?.trim() || FALLBACK_FEATURE;
  const featureAlt =
    props.featureImageAlt?.trim() ||
    "Commercial excavation and civil equipment on a Simcoe County work site";
  const lineCount = String(cards.length).padStart(2, "0");
  const specs = props.technicalSpecs;

  const effectiveEditorial = Boolean(editorialSurface && !referenceSplitLayout);
  const sectionSurface = referenceSplitLayout
    ? "light"
    : effectiveEditorial
      ? "editorial"
      : undefined;

  const previewCount = Math.min(3, cards.length);
  const previewCards = cards.slice(0, previewCount);
  const accordionCards = cards.length > previewCount ? cards.slice(previewCount) : [];

  const introBlock = (
    <>
      <Reveal>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDash} aria-hidden />
          <span className={styles.eyebrowText}>{props.eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delayClass="reveal--delay-1">
        <h2 id="services-heading" className={`home-services-photo__heading ${styles.heading}`}>
          {props.headingLine1}
          <br />
          <span>{props.headingLine2}</span>
        </h2>
      </Reveal>
      {tagline ? (
        <Reveal delayClass="reveal--delay-2">
          <p className={styles.microLede}>{tagline}</p>
        </Reveal>
      ) : null}
      {hasDistinctIntro ? (
        <Reveal delayClass="reveal--delay-3">
          <p className={styles.microLedeSecondary}>{intro}</p>
        </Reveal>
      ) : null}
      {!tagline && intro ? (
        <Reveal delayClass="reveal--delay-2">
          <p className={styles.microLede}>{intro}</p>
        </Reveal>
      ) : null}
    </>
  );

  const hasSpecs = Boolean(specs && specs.length > 0);
  const specItems = hasSpecs
    ? specs!.map((row, i) => (
        <li key={`${row.label}-${row.value}-${i}`} className={styles.specNumberedItem}>
          <span className={styles.specOrdinal} aria-hidden>
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className={styles.specNumberedBody}>
            <span className={styles.specLabel}>{row.label}</span>
            <span className={styles.specValue}>{row.value}</span>
          </div>
        </li>
      ))
    : null;

  const specsBlockDefault = hasSpecs ? (
    <Reveal delayClass="reveal--delay-1">
      <ol className={styles.specNumberedList}>{specItems}</ol>
    </Reveal>
  ) : null;

  const specsBlockReference = hasSpecs ? (
    <Reveal delayClass="reveal--delay-1">
      <ol className={`${styles.specNumberedList} ${styles.specNumberedListCompact}`}>{specItems}</ol>
    </Reveal>
  ) : null;

  return (
    <section
      id="services"
      className={`home-services-photo ${styles.showcase}${effectiveEditorial ? ` ${styles.surfaceEditorial}` : ""}${referenceSplitLayout ? ` ${styles.referenceOstech}` : ""}`}
      data-glc-services-surface={sectionSurface}
      aria-labelledby="services-heading"
    >
      {effectiveEditorial || referenceSplitLayout ? <div className="st3__top-rail" aria-hidden /> : null}
      <ServicesSectionDepthShell>
        <div className={styles.layerGround} aria-hidden />

        <span className={styles.wm} aria-hidden>
          GLC
        </span>

        <div className={styles.structure} aria-hidden>
          <span className={styles.structureSheet} />
          <span className={styles.structureSpine} />
          <span className={styles.structureTrace} />
        </div>

        <div className={styles.body}>
          {referenceSplitLayout ? (
            <>
              <header className={styles.referenceHeader}>
                <div className={styles.referenceHeaderIntro}>{introBlock}</div>
                {specs && specs.length > 0 ? (
                  <div className={styles.referenceHeaderSpecs}>{specsBlockReference}</div>
                ) : null}
                <div className={styles.referenceHeaderRule} aria-hidden>
                  <span className={styles.referenceAccentBar} />
                </div>
              </header>

              <ul className={styles.previewStrip} aria-label="Featured service lines">
                {previewCards.map((card) => {
                  const src = card.photoSrc?.trim() || FALLBACK_FEATURE;
                  const alt = [card.title, card.description].filter(Boolean).join(" — ");
                  return (
                    <li key={card.slug} className={styles.previewStripItem}>
                      <SmartLink href={ROUTES.service(card.slug)} className={styles.previewCardOstech}>
                        <div className={styles.previewCardMedia}>
                          <Image
                            src={src}
                            alt={alt}
                            fill
                            className={styles.previewCardImg}
                            sizes="(max-width: 700px) 100vw, (max-width: 1024px) 33vw, 320px"
                          />
                          <div className={styles.previewCardIconBadge} aria-hidden>
                            <svg
                              className={styles.previewCardIconSvg}
                              viewBox="0 0 24 24"
                              width={16}
                              height={16}
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 2 2 7l10 5 10-5-10-5ZM2 17l10 5 10-5M2 12l10 5 10-5"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className={styles.previewCardFooterBar}>
                          <span className={styles.previewCardFooterTitle}>{cardHeadline(card)}</span>
                          <span className={styles.previewCardFooterPlus} aria-hidden>
                            +
                          </span>
                        </div>
                      </SmartLink>
                    </li>
                  );
                })}
              </ul>

              <div className={styles.referenceOstechSeam} aria-hidden />

              {accordionCards.length > 0 ? (
                <div className={`${styles.accordionRegion} ${styles.accordionRegionOstech}`}>
                  <HomeServicesExpandableList cards={accordionCards} />
                </div>
              ) : null}

              {servicesBandCta ? (
                <Reveal delayClass="reveal--delay-2">
                  <div className={styles.referenceFooterCtas}>
                    <SmartLink href={servicesBandCta.quoteCta.href} className="gl-btn gl-btn--primary">
                      {servicesBandCta.quoteCta.label}
                    </SmartLink>
                    <SmartLink href={servicesBandCta.servicesViewAll.href} className="gl-btn gl-btn--ghost-dark">
                      {servicesBandCta.servicesViewAll.label}
                    </SmartLink>
                  </div>
                </Reveal>
              ) : null}
            </>
          ) : (
            <>
              <div className={styles.topBand}>
                <header className={styles.topBandHeader}>{introBlock}</header>
              </div>

              <div className="home-services-photo__seam" aria-hidden />

              <div className={styles.splitMain}>
                <div className={styles.splitCopy}>{specsBlockDefault}</div>

                <div className={styles.splitMedia}>
                  <div className={styles.splitMediaInner}>
                    <ServicesFeatureParallax
                      src={featureSrc}
                      alt={featureAlt}
                      imageSizes="(max-width: 960px) 100vw, min(600px, 50vw)"
                    />
                    <span className={styles.featureForeCorner} aria-hidden />
                    <span className={styles.splitMediaIndex} aria-hidden>
                      {lineCount}
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.accordionRegion}>
                <HomeServicesExpandableList cards={cards} />
              </div>

              {servicesBandCta ? (
                <Reveal delayClass="reveal--delay-3">
                  <div className={styles.ctaBar}>
                    <SmartLink href={servicesBandCta.quoteCta.href} className={styles.ctaMain}>
                      <span className={styles.ctaMainText}>{servicesBandCta.quoteCta.label}</span>
                      <span className={styles.ctaMainAction}>
                        <span className={styles.ctaMainRule} aria-hidden />
                        <span className={styles.ctaMainIcon}>
                          <IconArrow />
                        </span>
                      </span>
                    </SmartLink>
                    <SmartLink href={servicesBandCta.servicesViewAll.href} className={styles.ctaSec}>
                      <IconArrow />
                      <span className={styles.ctaSecTxt}>{servicesBandCta.servicesViewAll.label}</span>
                    </SmartLink>
                  </div>
                </Reveal>
              ) : null}
            </>
          )}
        </div>
      </ServicesSectionDepthShell>
    </section>
  );
}
