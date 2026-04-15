"use client";

import Image from "next/image";
import { useState } from "react";
import { IconArrow } from "@/components/ui/icon-arrow";
import { SmartLink } from "@/components/ui/smart-link";
import { ROUTES } from "@/lib/routes";
import { chunkSentences } from "@/lib/chunk-sentences";
import type { MegaMenuCard } from "@/content/types";

const GALLERY_IMAGES = [
  "/images/drainage-hardscaping/work-overview-dry-creek-steps.jpg",
  "/images/drainage-hardscaping/work-cap-concrete-stairs-rock-channel.jpg",
  "/images/drainage-hardscaping/work-cap-french-drain-fabric.jpg",
  "/images/drainage-hardscaping/work-cap-foundation-trench.jpg",
  "/images/drainage-hardscaping/work-why-boulder-pergola-patio.jpg",
] as const;

type Props = {
  cards: MegaMenuCard[];
  cardDesc: string;
  kicker: string;
  heading: string;
};

/**
 * Expandable gallery — pairs each service line with project photography.
 */
export function SvcOverviewExpandGallery({ cards, cardDesc, kicker, heading }: Props) {
  const [open, setOpen] = useState(0);

  return (
    <section className="svc-hub-gallery" aria-labelledby="svc-hub-gallery-heading">
      <div className="svc-hub-gallery__inner">
        <header className="svc-hub-gallery__head">
          <p className="svc-hub-gallery__eyebrow">
            <span className="svc-hub-gallery__dash" aria-hidden />
            <span>{kicker}</span>
          </p>
          <h2 id="svc-hub-gallery-heading" className="svc-hub-gallery__title">
            {heading}
          </h2>
          {chunkSentences(cardDesc, 2).map((chunk) => (
            <p key={chunk.slice(0, 24)} className="svc-hub-gallery__lede">
              {chunk}
            </p>
          ))}
        </header>

        <div className="svc-hub-gallery__layout">
          <ul className="svc-hub-gallery__tabs" role="tablist" aria-label="Service line imagery">
            {cards.map((card, i) => (
              <li key={card.slug} role="none">
                <button
                  type="button"
                  role="tab"
                  aria-selected={open === i}
                  aria-controls={`svc-gallery-panel-${card.slug}`}
                  id={`svc-gallery-tab-${card.slug}`}
                  tabIndex={open === i ? 0 : -1}
                  className={`svc-hub-gallery__tab${open === i ? " is-active" : ""}`}
                  onClick={() => setOpen(i)}
                >
                  <span className="svc-hub-gallery__tab-num">{card.num}</span>
                  <span className="svc-hub-gallery__tab-txt">{card.title}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="svc-hub-gallery__stage">
            {cards.map((card, i) => {
              const src = GALLERY_IMAGES[i % GALLERY_IMAGES.length];
              const on = open === i;
              return (
                <div
                  key={card.slug}
                  id={`svc-gallery-panel-${card.slug}`}
                  role="tabpanel"
                  aria-labelledby={`svc-gallery-tab-${card.slug}`}
                  hidden={!on}
                  className={`svc-hub-gallery__panel${on ? " is-active" : ""}`}
                >
                  <div className="svc-hub-gallery__frame">
                    <div className="svc-hub-gallery__media">
                      <Image
                        src={src}
                        alt=""
                        fill
                        className="svc-hub-gallery__img"
                        sizes="(max-width: 900px) 100vw, 60vw"
                      />
                    </div>
                    <div className="svc-hub-gallery__caption">
                      <div className="svc-hub-gallery__cap-lines">
                        {chunkSentences(card.gridDescription, 2).map((line) => (
                          <p key={line.slice(0, 20)} className="svc-hub-gallery__cap-line">
                            {line}
                          </p>
                        ))}
                      </div>
                      <SmartLink href={ROUTES.service(card.slug)} className="btn-primary svc-hub-gallery__panel-cta">
                        Open service line
                        <IconArrow />
                      </SmartLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
