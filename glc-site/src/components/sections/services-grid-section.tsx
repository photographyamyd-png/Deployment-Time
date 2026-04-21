import { Reveal } from "@/components/ui/reveal";
import { SmartLink } from "@/components/ui/smart-link";
import { ServicesGridCard } from "@/components/sections/services-grid-card";
import type { MegaMenuCard, ServicesBandCta, ServicesSectionProps } from "@/content/types";
import type { RevealDelayClass } from "@/components/ui/reveal";
import styles from "@/components/sections/services-grid-section.module.css";

type Props = ServicesSectionProps & {
  cards: MegaMenuCard[];
  /** When set (homepage), renders quote + view-all CTAs under the grid. */
  servicesBandCta?: ServicesBandCta;
};

const delayFor = (i: number): RevealDelayClass | undefined => {
  if (i % 3 === 1) return "reveal--delay-1";
  if (i % 3 === 2) return "reveal--delay-2";
  return undefined;
};

export function ServicesGridSection({ cards, servicesBandCta, ...props }: Props) {
  const lede = props.tagline?.trim() || props.intro;

  return (
    <section
      id="services"
      className={`svlayer svlayer--dse ${styles.showcase}`}
      aria-labelledby="services-heading"
    >
      <div className="cta3__diag" aria-hidden />
      <div className="services-band__top-accent" aria-hidden />
      <div className="svlayer__layers" aria-hidden>
        <span className="svlayer__sheet svlayer__sheet--back" />
        <span className="svlayer__sheet svlayer__sheet--mid" />
        <span className="svlayer__sheet svlayer__sheet--front" />
      </div>

      <div className={`svlayer__inner ${styles.inner}`}>
        <header className={styles.head}>
          <Reveal>
            <div className="eyebrow eyebrow--on-dark">{props.eyebrow}</div>
          </Reveal>
          <Reveal delayClass="reveal--delay-1">
            <h2 id="services-heading" className="services__heading svlayer__headline">
              {props.headingLine1}
              <br />
              <span>{props.headingLine2}</span>
            </h2>
          </Reveal>
          {lede ? (
            <Reveal delayClass="reveal--delay-2">
              <p className={styles.intro}>{lede}</p>
            </Reveal>
          ) : null}
        </header>

        <div className={`${styles.grid} services__grid`} role="list">
          {cards.map((card, i) => (
            <ServicesGridCard key={card.slug} card={card} delayClass={delayFor(i)} />
          ))}
        </div>

        {servicesBandCta ? (
          <Reveal delayClass="reveal--delay-3">
            <div className={styles.ctas}>
              <SmartLink href={servicesBandCta.quoteCta.href} className="btn-primary">
                {servicesBandCta.quoteCta.label}
              </SmartLink>
              <SmartLink href={servicesBandCta.servicesViewAll.href} className="btn-ghost">
                {servicesBandCta.servicesViewAll.label}
              </SmartLink>
            </div>
          </Reveal>
        ) : null}
      </div>

      <div className="cta3__bottom-bar" aria-hidden />
    </section>
  );
}
