import { Reveal } from "@/components/ui/reveal";
import { SmartLink } from "@/components/ui/smart-link";
import { IconArrow } from "@/components/ui/icon-arrow";
import { HomeServicesExpandableList } from "@/components/sections/home-services-expandable-list";
import { ServicesFeatureParallax } from "@/components/sections/services-feature-parallax";
import { ServicesSectionDepthShell } from "@/components/sections/services-section-depth-shell";
import type { MegaMenuCard, ServicesBandCta, ServicesSectionProps } from "@/content/types";
import styles from "@/components/sections/services-grid-section.module.css";

const FALLBACK_FEATURE = "/images/excavation-and-foundations-orillia-barrie.png";

type Props = ServicesSectionProps & {
  cards: MegaMenuCard[];
  /** When set (homepage), renders quote + view-all CTAs in the split bar. */
  servicesBandCta?: ServicesBandCta;
};

export function ServicesGridSection({ cards, servicesBandCta, ...props }: Props) {
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

  return (
    <section id="services" className={`home-services-photo ${styles.showcase}`} aria-labelledby="services-heading">
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
          <div className={styles.topBand}>
            <header className={styles.topBandHeader}>
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
            </header>
          </div>

          <div className="home-services-photo__seam" aria-hidden />

          <div className={styles.splitMain}>
            <div className={styles.splitCopy}>
              {specs && specs.length > 0 ? (
                <Reveal delayClass="reveal--delay-1">
                  <ol className={styles.specNumberedList}>
                    {specs.map((row, i) => (
                      <li key={`${row.label}-${row.value}-${i}`} className={styles.specNumberedItem}>
                        <span className={styles.specOrdinal} aria-hidden>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className={styles.specNumberedBody}>
                          <span className={styles.specLabel}>{row.label}</span>
                          <span className={styles.specValue}>{row.value}</span>
                        </div>
                      </li>
                    ))}
                  </ol>
                </Reveal>
              ) : null}
            </div>

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
        </div>
      </ServicesSectionDepthShell>
    </section>
  );
}
