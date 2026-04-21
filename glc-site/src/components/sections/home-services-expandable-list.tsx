"use client";

import Image from "next/image";
import { useCallback, useId, useState } from "react";
import { SmartLink } from "@/components/ui/smart-link";
import { IconArrowSmall } from "@/components/ui/icon-arrow";
import { useReveal } from "@/hooks/use-reveal";
import type { MegaMenuCard } from "@/content/types";
import { ROUTES } from "@/lib/routes";
import type { RevealDelayClass } from "@/components/ui/reveal";
import styles from "@/components/sections/services-grid-section.module.css";

const FALLBACK_PHOTO = "/images/excavation-and-foundations-orillia-barrie.png";

type Props = {
  cards: MegaMenuCard[];
};

function chevronClass(open: boolean) {
  return `${styles.expandChevron}${open ? ` ${styles.expandChevronOpen}` : ""}`;
}

function ExpandRow({
  card,
  isOpen,
  onToggle,
  variant,
  delayClass,
}: {
  card: MegaMenuCard;
  isOpen: boolean;
  onToggle: () => void;
  variant: boolean;
  delayClass?: RevealDelayClass;
}) {
  const ref = useReveal<HTMLLIElement>();
  const baseId = useId();
  const panelId = `${baseId}-panel`;
  const btnId = `${baseId}-btn`;

  const src = card.photoSrc?.trim() || FALLBACK_PHOTO;
  const alt = [card.title, card.description].filter(Boolean).join(" — ");
  const headline =
    Array.isArray(card.gridTitle) && card.gridTitle.length > 0
      ? card.gridTitle.join(" · ")
      : card.title;
  const delay = delayClass ? ` ${delayClass}` : "";

  return (
    <li
      ref={ref}
      className={`${styles.expandItem}${variant ? ` ${styles.expandItemAlt}` : ""}${isOpen ? ` ${styles.expandItemOpen}` : ""} reveal${delay}`.trim()}
    >
      <div className={styles.expandRow}>
        <div className={styles.expandHero}>
          <Image
            src={src}
            alt={alt}
            fill
            className={styles.expandHeroImg}
            sizes="(max-width: 699px) 100vw, (max-width: 1179px) 50vw, 34vw"
          />
          <span className={styles.expandHeroNum} aria-hidden>
            {card.num}
          </span>
        </div>

        <div className={styles.expandMain}>
          <button
            id={btnId}
            type="button"
            className={styles.expandToggle}
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => {
              onToggle();
            }}
          >
            <span className={styles.expandToggleText} id={`${btnId}-label`}>
              <span className={styles.expandHeadline}>{headline}</span>
            </span>
            <svg
              className={chevronClass(isOpen)}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              aria-hidden
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <div
            id={panelId}
            role="region"
            aria-labelledby={`${btnId}-label`}
            className={styles.expandPanel}
            data-open={isOpen ? "true" : "false"}
            aria-hidden={!isOpen}
          >
            <div className={styles.expandPanelInner}>
              <p className={styles.expandDesc}>{card.gridDescription ?? ""}</p>
              {card.subTags && card.subTags.length > 0 ? (
                <ul className={styles.expandTags}>
                  {card.subTags.map((t) => (
                    <li key={`${card.slug}-${t}`}>{t}</li>
                  ))}
                </ul>
              ) : null}
              <SmartLink
                href={ROUTES.service(card.slug)}
                className={styles.expandCta}
                tabIndex={isOpen ? undefined : -1}
                aria-hidden={!isOpen}
              >
                View service
                <IconArrowSmall />
              </SmartLink>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

const delayFor = (i: number): RevealDelayClass | undefined => {
  if (i % 3 === 1) return "reveal--delay-1";
  if (i % 3 === 2) return "reveal--delay-2";
  return undefined;
};

export function HomeServicesExpandableList({ cards }: Props) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const toggle = useCallback((slug: string) => {
    setOpenSlug((prev) => (prev === slug ? null : slug));
  }, []);

  return (
    <ul className={styles.expandList} role="list">
      {cards.map((card, i) => (
        <ExpandRow
          key={card.slug}
          card={card}
          isOpen={openSlug === card.slug}
          onToggle={() => toggle(card.slug)}
          variant={i % 2 === 1}
          delayClass={delayFor(i)}
        />
      ))}
    </ul>
  );
}
