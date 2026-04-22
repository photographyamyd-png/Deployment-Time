import Image from "next/image";
import { IconArrow } from "@/components/ui/icon-arrow";
import { SmartLink } from "@/components/ui/smart-link";
import { chunkSentences } from "@/lib/chunk-sentences";
import type { MegaMenuCard } from "@/content/types";
import { ROUTES } from "@/lib/routes";

type Props = {
  eyebrow: string;
  heading: string;
  intro: string;
  cards: MegaMenuCard[];
  ctaLabel: string;
};

function cardHeadline(card: MegaMenuCard) {
  return Array.isArray(card.gridTitle) && card.gridTitle.length > 0
    ? card.gridTitle.join(" ")
    : card.title;
}

/**
 * Services hub — light expanded cards: photo, scope line, short copy, link to hub.
 */
export function ServicesHubCardGrid({ eyebrow, heading, intro, cards, ctaLabel }: Props) {
  return (
    <section className="svc-hub-cardgrid" aria-labelledby="svc-hub-cardgrid-heading">
      <div className="svc-hub-cardgrid__inner">
        <header className="svc-hub-cardgrid__head">
          <p className="svc-hub-cardgrid__eyebrow">
            <span className="svc-hub-cardgrid__dash" aria-hidden />
            <span>{eyebrow}</span>
          </p>
          <h2 id="svc-hub-cardgrid-heading" className="svc-hub-cardgrid__title">
            {heading}
          </h2>
          {chunkSentences(intro, 2).map((chunk) => (
            <p key={chunk.slice(0, 24)} className="svc-hub-cardgrid__intro">
              {chunk}
            </p>
          ))}
        </header>

        <ul className="svc-hub-cardgrid__grid" role="list">
          {cards.map((card) => (
            <li key={card.slug} className="svc-hub-cardgrid__cell">
              <article className="svc-hub-cardgrid__card">
                <SmartLink
                  href={ROUTES.service(card.slug)}
                  className="svc-hub-cardgrid__media-link"
                  aria-labelledby={`svc-hub-card-title-${card.slug}`}
                >
                  <div className="svc-hub-cardgrid__media">
                    <Image
                      src={
                        card.photoSrc ??
                        "/images/excavation-and-foundations-orillia-barrie.png"
                      }
                      alt=""
                      fill
                      className="svc-hub-cardgrid__img"
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                    <span className="svc-hub-cardgrid__num" aria-hidden>
                      {card.num}
                    </span>
                  </div>
                </SmartLink>
                <div className="svc-hub-cardgrid__body">
                  <h3 id={`svc-hub-card-title-${card.slug}`} className="svc-hub-cardgrid__card-title">
                    {cardHeadline(card)}
                  </h3>
                  {chunkSentences(card.gridDescription, 2).map((line) => (
                    <p key={line.slice(0, 20)} className="svc-hub-cardgrid__desc">
                      {line}
                    </p>
                  ))}
                  {card.subTags?.length ? (
                    <ul className="svc-hub-cardgrid__tags" aria-label="Scope tags">
                      {card.subTags.map((t) => (
                        <li key={t} className="svc-hub-cardgrid__tag">
                          {t}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <SmartLink href={ROUTES.service(card.slug)} className="btn-primary svc-hub-cardgrid__cta">
                    {ctaLabel}
                    <IconArrow />
                  </SmartLink>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
