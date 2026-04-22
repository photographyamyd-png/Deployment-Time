/**
 * #services band — Industrial Authority interaction patterns (tab density gate, dark sticky rail,
 * 7/5 split, gold media rails, motion) implemented with GLC tokens from `.cursorrules` (no Tailwind).
 */
import { Reveal } from "@/components/ui/reveal";
import { SmartLink } from "@/components/ui/smart-link";
import { IconArrow } from "@/components/ui/icon-arrow";
import { HomeServicesExpandableList } from "@/components/sections/home-services-expandable-list";
import { HomeServicesStickyTabs } from "@/components/sections/home-services-sticky-tabs";
import { ServicesFeatureParallax } from "@/components/sections/services-feature-parallax";
import { ServicesSectionDepthShell } from "@/components/sections/services-section-depth-shell";
import type { MegaMenuCard, ServicesBandCta, ServicesSectionProps } from "@/content/types";
import {
  countServicesSectionWords,
  SERVICES_INDUSTRIAL_TAB_WORD_THRESHOLD,
} from "@/lib/count-services-section-words";
import styles from "@/components/sections/services-grid-section.module.css";

const FALLBACK_FEATURE = "/images/excavation-and-foundations-orillia-barrie.png";

type Props = ServicesSectionProps & {
  cards: MegaMenuCard[];
  /** When set (homepage), renders quote + view-all CTAs in the split bar. */
  servicesBandCta?: ServicesBandCta;
  /** Homepage-only: stats/coverage-style dark editorial surface + contrast. */
  editorialSurface?: boolean;
  /**
   * Homepage-only: light band — intro | specs, sticky service tabs + single detail panel,
   * CTAs; charcoal used for rails and contrast only.
   */
  referenceSplitLayout?: boolean;
};

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

  const servicesWordCount = countServicesSectionWords(props, cards);
  const useIndustrialTabs =
    referenceSplitLayout && servicesWordCount > SERVICES_INDUSTRIAL_TAB_WORD_THRESHOLD;

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
            <div className={styles.svcStage}>
              <div className={styles.svcStageBleed}>
                <div className="glc-motif-divider-a3--to-dark" aria-hidden />
              </div>

              <header className={`${styles.svcStageLead} gl-reveal`}>
                <div className={styles.svcStageLeadInner}>
                  <div className={styles.svcStageCopy}>{introBlock}</div>
                  {servicesBandCta ? (
                    <Reveal delayClass="reveal--delay-1">
                      <div className={styles.svcStageActions}>
                        <SmartLink
                          href={servicesBandCta.quoteCta.href}
                          className="gl-btn gl-btn--primary"
                        >
                          {servicesBandCta.quoteCta.label}
                        </SmartLink>
                        <SmartLink
                          href={servicesBandCta.servicesViewAll.href}
                          className="gl-btn gl-btn--ghost-dark"
                        >
                          {servicesBandCta.servicesViewAll.label}
                        </SmartLink>
                      </div>
                    </Reveal>
                  ) : null}
                </div>
              </header>

              {hasSpecs ? (
                <>
                  <div className={styles.svcStageBleed}>
                    <div className="glc-motif-divider-a3--to-light" aria-hidden />
                  </div>
                  <div className={`${styles.svcStageSpecBand} gl-reveal`}>
                    <div className={styles.svcStageSpecInner}>
                      <ol className={styles.svcStageSpecGrid} aria-label="Service dispatch snapshot">
                        {specs!.map((row, i) => (
                          <li key={`${row.label}-${row.value}-${i}`} className={styles.svcStageSpecCell}>
                            <span className={styles.svcStageSpecOrd} aria-hidden>
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className={styles.svcStageSpecLbl}>{row.label}</span>
                            <span className={styles.svcStageSpecVal}>{row.value}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </>
              ) : null}

              <div className={styles.svcStageBleed}>
                <div className="glc-motif-divider-a3--to-dark" aria-hidden />
              </div>

              <div className={`${styles.svcStageListDeck} gl-reveal`}>
                {useIndustrialTabs ? (
                  <HomeServicesStickyTabs cards={cards} />
                ) : (
                  <div className={`${styles.accordionRegion} ${styles.accordionRegionOstech}`}>
                    <HomeServicesExpandableList cards={cards} />
                  </div>
                )}
              </div>
            </div>
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
