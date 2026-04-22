"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { SmartLink } from "@/components/ui/smart-link";
import { IconArrowSmall } from "@/components/ui/icon-arrow";
import type { MegaMenuCard } from "@/content/types";
import { ROUTES } from "@/lib/routes";
import styles from "@/components/sections/services-grid-section.module.css";

const FALLBACK_PHOTO = "/images/excavation-and-foundations-orillia-barrie.png";

type Props = {
  cards: MegaMenuCard[];
};

export function HomeServicesStickyTabs({ cards }: Props) {
  const baseId = useId();
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const safeIndex = Math.min(Math.max(0, active), Math.max(0, cards.length - 1));
  const card = cards[safeIndex];
  const tabId = (i: number) => `${baseId}-tab-${i}`;
  const panelId = `${baseId}-panel`;

  const focusTab = useCallback((i: number) => {
    const next = Math.max(0, Math.min(cards.length - 1, i));
    setActive(next);
    requestAnimationFrame(() => {
      tabRefs.current[next]?.focus();
    });
  }, [cards.length]);

  useEffect(() => {
    const el = tabRefs.current[safeIndex];
    if (!el) return;
    const reduce =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest", inline: "center" });
  }, [safeIndex]);

  const onTabKeyDown = useCallback(
    (e: ReactKeyboardEvent<HTMLDivElement>) => {
      if (cards.length === 0) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        focusTab(safeIndex + 1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        focusTab(safeIndex - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        focusTab(0);
      } else if (e.key === "End") {
        e.preventDefault();
        focusTab(cards.length - 1);
      }
    },
    [cards.length, focusTab, safeIndex],
  );

  if (!card || cards.length === 0) {
    return null;
  }

  const src = card.photoSrc?.trim() || FALLBACK_PHOTO;
  const alt = [card.title, card.description].filter(Boolean).join(" — ");
  const headline =
    Array.isArray(card.gridTitle) && card.gridTitle.length > 0
      ? card.gridTitle.join(" ")
      : card.title;

  return (
    <div className={styles.refTabRoot}>
      <div className={styles.refTabBand}>
        <div className={styles.refTabBandInner}>
          <p className={styles.refTabBandLabel} id={`${baseId}-tablist-label`}>
            Service lines
          </p>
          <div
            className={styles.refTabScroll}
            role="tablist"
            aria-labelledby={`${baseId}-tablist-label`}
            onKeyDown={onTabKeyDown}
          >
            {cards.map((c, i) => {
              const selected = i === safeIndex;
              return (
                <button
                  key={c.slug}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={tabId(i)}
                  aria-selected={selected}
                  aria-controls={panelId}
                  tabIndex={selected ? 0 : -1}
                  className={`${styles.refTab} ${selected ? styles.refTabActive : ""}`}
                  onClick={() => setActive(i)}
                >
                  <span className={styles.refTabNum} aria-hidden>
                    {c.num}
                  </span>
                  <span className={styles.refTabTitle}>{c.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={tabId(safeIndex)}
        className={styles.refTabPanel}
      >
        <div className={styles.refTabPanelGrid}>
          <div className={styles.refTabPanelMedia}>
            <Image
              src={src}
              alt={alt}
              fill
              className={styles.refTabPanelImg}
              sizes="(max-width: 768px) 100vw, min(560px, 52vw)"
              priority={safeIndex === 0}
            />
            <span className={styles.refTabPanelMediaRule} aria-hidden />
          </div>
          <div className={styles.refTabPanelCopy}>
            <h3 className={styles.refTabPanelHeadline}>{headline}</h3>
            <p className={styles.refTabPanelDesc}>{card.gridDescription ?? ""}</p>
            {card.subTags && card.subTags.length > 0 ? (
              <ul className={styles.refTabPanelTags}>
                {card.subTags.map((t) => (
                  <li key={`${card.slug}-${t}`}>{t}</li>
                ))}
              </ul>
            ) : null}
            <SmartLink href={ROUTES.service(card.slug)} className={styles.refTabPanelCta}>
              View service
              <IconArrowSmall />
            </SmartLink>
          </div>
        </div>
      </div>
    </div>
  );
}
