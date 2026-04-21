"use client";

import Image from "next/image";
import { SmartLink } from "@/components/ui/smart-link";
import { IconArrowSmall } from "@/components/ui/icon-arrow";
import { useReveal } from "@/hooks/use-reveal";
import type { MegaMenuCard } from "@/content/types";
import { ROUTES } from "@/lib/routes";
import type { RevealDelayClass } from "@/components/ui/reveal";

const FALLBACK_PHOTO = "/images/excavation-and-foundations-orillia-barrie.png";

type Props = {
  card: MegaMenuCard;
  delayClass?: RevealDelayClass;
};

export function HomeServicesPhotoTile({ card, delayClass }: Props) {
  const ref = useReveal<HTMLAnchorElement>();
  const delay = delayClass ? ` ${delayClass}` : "";
  const src = card.photoSrc?.trim() || FALLBACK_PHOTO;
  const alt = [card.title, card.description].filter(Boolean).join(" — ");
  const titleLines =
    Array.isArray(card.gridTitle) && card.gridTitle.length > 0
      ? card.gridTitle
      : [card.title];

  return (
    <SmartLink
      href={ROUTES.service(card.slug)}
      className={`home-services-photo__card reveal${delay}`.trim()}
      role="listitem"
      ref={ref}
    >
      <div className="home-services-photo__card-media">
        <Image
          src={src}
          alt={alt}
          fill
          className="home-services-photo__card-img"
          sizes="(max-width: 1100px) 50vw, 33vw"
        />
        <span className="home-services-photo__card-num" aria-hidden>
          {card.num}
        </span>
      </div>
      <div className="home-services-photo__card-body">
        <h3 className="home-services-photo__card-title">
          {titleLines.map((line, i) => (
            <span key={`${card.slug}-t-${i}`}>
              {i > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </h3>
        {card.subTags && card.subTags.length > 0 ? (
          <ul className="home-services-photo__card-tags">
            {card.subTags.map((t) => (
              <li key={`${card.slug}-${t}`}>{t}</li>
            ))}
          </ul>
        ) : null}
        <p className="home-services-photo__card-desc">
          {card.gridDescription ?? ""}
        </p>
        <span className="home-services-photo__card-cta">
          View service
          <IconArrowSmall />
        </span>
      </div>
    </SmartLink>
  );
}
