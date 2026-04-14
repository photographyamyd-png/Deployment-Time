import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { IconArrow } from "@/components/ui/icon-arrow";
import { ServiceCardIcon } from "@/components/sections/service-card-icon";
import type { MegaMenuCard, ServicesSectionProps } from "@/content/types";
import { ROUTES } from "@/lib/routes";

type Props = ServicesSectionProps & { cards: MegaMenuCard[] };

export function ServicesGridSection({ cards, ...props }: Props) {
  const scopeItems = [
    "Site clearing & mass excavation",
    "Foundations & structural earthwork",
    "Utility & septic trenching",
    "Drainage design & grading",
    "Hauling & site logistics",
    "Commercial snow removal",
  ];

  return (
    <section id="services" className="svlayer svlayer--dse" aria-labelledby="services-heading">
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
            <div className="eyebrow eyebrow--on-dark">{props.eyebrow}</div>
          </Reveal>
          <Reveal delayClass="reveal--delay-1">
            <h2 id="services-heading" className="services__heading svlayer__headline">
              {props.headingLine1}
              <br />
              <span>{props.headingLine2}</span>
            </h2>
          </Reveal>
          <Reveal delayClass="reveal--delay-2">
            <p className="services__intro">{props.intro}</p>
            <ul className="svlayer__scope" aria-label="What we cover">
              {scopeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="services__kicker">One contractor, one point of contact, zero handoff delays.</p>
          </Reveal>
        </div>

        <figure className="svlayer__figure">
          <div className="svlayer__figure-bite" aria-hidden />
          <div className="svlayer__figure-frame">
            <div className="svlayer__figure-fill">
              <Image
                src="/images/excavation-and-foundations-orillia-barrie.png"
                alt="Commercial excavation and civil work in progress in Simcoe County"
                fill
                className="svlayer__img"
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>
          </div>
          <figcaption className="svlayer__caption">
            Field-led crews across Barrie & Simcoe County
          </figcaption>
        </figure>

        <div className="svlayer__deck">
          {cards.map((card) => (
            <details key={card.slug} className="svlayer__card" name="home-service-lines">
              <summary className="svlayer__card-summary">
                <span className="svlayer__card-num" aria-hidden>{card.num}</span>
                <span className="svlayer__card-titles">
                  {card.gridTitle.map((line) => (
                    <span key={line} className="svlayer__card-title-line">{line}</span>
                  ))}
                </span>
                <span className="svlayer__card-signal" aria-hidden />
              </summary>
              <div className="svlayer__card-panel">
                <ServiceCardIcon slug={card.slug} />
                <p className="svlayer__card-desc">{card.gridDescription}</p>
                <a className="svlayer__card-cta" href={ROUTES.service(card.slug)}>
                  Learn more
                  <IconArrow />
                </a>
              </div>
            </details>
          ))}
        </div>
      </div>

      <div className="cta3__bottom-bar" aria-hidden />
    </section>
  );
}
