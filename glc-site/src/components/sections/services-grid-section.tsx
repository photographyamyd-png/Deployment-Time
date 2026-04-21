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

function HeaderBlueprintGhost() {
  return (
    <svg
      className={styles.headerGhostBp}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="1" y="1" width="198" height="198" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      <rect x="24" y="24" width="152" height="152" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 8" opacity="0.3" />
      <line x1="100" y1="1" x2="100" y2="199" stroke="currentColor" strokeWidth="0.5" opacity="0.22" />
      <line x1="1" y1="100" x2="199" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.22" />
      <circle cx="100" cy="100" r="48" stroke="currentColor" strokeWidth="0.5" opacity="0.2" strokeDasharray="2 6" />
    </svg>
  );
}

export function ServicesGridSection({ cards, servicesBandCta, ...props }: Props) {
  const lede = props.tagline?.trim() || props.intro;
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

        <div className="home-services-photo__seam" aria-hidden />

        <div className={styles.featureShell}>
          <div className={styles.featureClip}>
            <ServicesFeatureParallax src={featureSrc} alt={featureAlt} />
            <span className={styles.featureForeCorner} aria-hidden />
            <span className={styles.featureForeIndex} aria-hidden>
              {lineCount}
            </span>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.overhaulMain}>
            <div className={styles.overhaulRight}>
              <div className={styles.floatingReadCard}>
                <HeaderBlueprintGhost />
                <header className={styles.header}>
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
                  {specs && specs.length > 0 ? (
                    <Reveal delayClass="reveal--delay-2">
                      <dl className={styles.technicalSpecs}>
                        {specs.map((row) => (
                          <div key={`${row.label}-${row.value}`} className={styles.specItem}>
                            <dt className={styles.specLabel}>{row.label}</dt>
                            <dd className={styles.specValue}>{row.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </Reveal>
                  ) : null}
                  {lede ? (
                    <Reveal delayClass="reveal--delay-3">
                      <p className={styles.microLede}>{lede}</p>
                    </Reveal>
                  ) : null}
                </header>
              </div>
            </div>

            <div className={styles.overhaulLeft}>
              <aside className={styles.asideTech} aria-label="Service index">
                <span className={styles.asideVert}>Field lines</span>
                <span className={styles.asideNum}>{lineCount}</span>
              </aside>

              <div className={styles.gridRail}>
                <div className={styles.rail} aria-hidden />
                <div className={styles.expandListShell}>
                  <span className={styles.glWatermark} aria-hidden>
                    GL
                  </span>
                  <HomeServicesExpandableList cards={cards} />
                </div>
              </div>
            </div>
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
