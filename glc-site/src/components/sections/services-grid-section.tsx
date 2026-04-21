import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SmartLink } from "@/components/ui/smart-link";
import { IconArrow } from "@/components/ui/icon-arrow";
import { HomeServicesPhotoTile } from "@/components/sections/home-services-photo-tile";
import type { MegaMenuCard, ServicesBandCta, ServicesSectionProps } from "@/content/types";
import type { RevealDelayClass } from "@/components/ui/reveal";
import styles from "@/components/sections/services-grid-section.module.css";

const FALLBACK_FEATURE = "/images/excavation-and-foundations-orillia-barrie.png";

type Props = ServicesSectionProps & {
  cards: MegaMenuCard[];
  /** When set (homepage), renders quote + view-all CTAs in the split bar. */
  servicesBandCta?: ServicesBandCta;
};

const delayFor = (i: number): RevealDelayClass | undefined => {
  if (i % 3 === 1) return "reveal--delay-1";
  if (i % 3 === 2) return "reveal--delay-2";
  return undefined;
};

export function ServicesGridSection({ cards, servicesBandCta, ...props }: Props) {
  const lede = props.tagline?.trim() || props.intro;
  const featureSrc =
    props.featureImageSrc?.trim() || cards[0]?.photoSrc?.trim() || FALLBACK_FEATURE;
  const featureAlt =
    props.featureImageAlt?.trim() ||
    "Commercial excavation and civil equipment on a Simcoe County work site";

  return (
    <section id="services" className={`home-services-photo ${styles.showcase}`} aria-labelledby="services-heading">
      <div className="home-services-photo__seam" aria-hidden />

      <div className={styles.featureBleed}>
        <Image
          src={featureSrc}
          alt={featureAlt}
          fill
          className={styles.featureImg}
          sizes="100vw"
          priority={false}
        />
        <div className={styles.featureScrim} aria-hidden />
      </div>

      <div className="home-services-photo__inner">
        <header className="home-services-photo__header">
          <Reveal>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDash} aria-hidden />
              <span className={styles.eyebrowText}>{props.eyebrow}</span>
            </div>
          </Reveal>
          <Reveal delayClass="reveal--delay-1">
            <h2 id="services-heading" className="home-services-photo__heading">
              {props.headingLine1}
              <br />
              <span>{props.headingLine2}</span>
            </h2>
          </Reveal>
          {lede ? (
            <Reveal delayClass="reveal--delay-2">
              <p className={styles.caption}>{lede}</p>
            </Reveal>
          ) : null}
        </header>

        <div className={`home-services-photo__grid ${styles.grid}`} role="list">
          {cards.map((card, i) => (
            <HomeServicesPhotoTile key={card.slug} card={card} delayClass={delayFor(i)} />
          ))}
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
    </section>
  );
}
