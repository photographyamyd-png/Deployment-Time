"use client";

import {
  useState,
  type CSSProperties,
  type MouseEventHandler,
  type SyntheticEvent,
} from "react";
import { useSandboxGpuSafe } from "@/components/sandbox/sandbox-page-shell";
import { IconArrow } from "@/components/ui/icon-arrow";
import { Reveal } from "@/components/ui/reveal";
import type { AccordionContentItem, FeaturedAccordionLayoutVariant } from "@/content/types";

type ItemProps = {
  item: AccordionContentItem;
  isActive: boolean;
  onMouseEnter: () => void;
};

function AccordionItem({ item, isActive, onMouseEnter }: ItemProps) {
  const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
    const el = e.currentTarget;
    el.onerror = null;
    el.src =
      "https://placehold.co/400x450/2E2B28/F8BE12?text=Ground+Level";
  };

  return (
    <a
      href={item.href ?? "/services/"}
      className={`glc-feat-acc__panel${isActive ? " is-active" : ""}`}
      onMouseEnter={onMouseEnter}
      onFocus={onMouseEnter}
      aria-label={`View ${item.title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- dynamic external URLs + onError fallback */}
      <img
        src={item.imageUrl}
        alt=""
        className="glc-feat-acc__panel-img"
        onError={handleImgError}
      />
      <div className="glc-feat-acc__panel-scrim" aria-hidden />
      <span className="glc-feat-acc__panel-label">{item.title}</span>
    </a>
  );
}

export type FeaturedAccordionTone = "default" | "light" | "dark" | "medium";

export type FeaturedAccordionLayoutMode =
  | "default"
  | "mirror"
  | "stack-top"
  /** Full-width rail on top, mirror copy/CTA below (sandbox / editorial). */
  | "mirror-stack-wide";

export type FeaturedAccordionProps = {
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  intro: string;
  cta: { label: string; href: string };
  items: AccordionContentItem[];
  layoutVariant?: FeaturedAccordionLayoutVariant;
  /** Surface treatment (default matches production off-white). */
  tone?: FeaturedAccordionTone;
  /** `mirror` side-by-side; `stack-top` panels above copy; `mirror-stack-wide` full-width rail then mirror copy below. */
  layoutMode?: FeaturedAccordionLayoutMode;
  /** Reverse strip order while preserving hover/active index mapping. */
  reversePanelOrder?: boolean;
  /** Unique `id` for the section H2 (required when multiple instances exist on one page). */
  headingId?: string;
  /** Number shown in the copy-column badge (default home production uses `06`). */
  sectionBadge?: string;
  /** When false, the primary button under the intro is omitted (e.g. CTA placed at section footer). */
  showCta?: boolean;
  /** Wider collapsed strips + larger active panel (more of the photo visible); sandbox / editorial use. */
  widePanels?: boolean;
  /** Inset “chassis” around the photo rail: border, watermark grid, clearer separation from section ground. */
  panelFrame?: boolean;
};

export function FeaturedAccordion({
  eyebrow,
  headingLine1,
  headingLine2,
  intro,
  cta,
  items,
  layoutVariant = "split-copy-left-strip-right",
  tone = "default",
  layoutMode = "default",
  reversePanelOrder = false,
  headingId = "accordion-services-heading",
  sectionBadge = "06",
  showCta = true,
  widePanels = false,
  panelFrame = false,
}: FeaturedAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [motifOffset, setMotifOffset] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState({ x: -9999, y: -9999 });
  const [cursorInside, setCursorInside] = useState(false);
  const sandboxGpu = useSandboxGpuSafe();
  const activeItem = items[activeIndex] ?? items[0];

  void layoutVariant;

  const rootClass = [
    "glc-feat-acc",
    tone !== "default" ? `glc-feat-acc--tone-${tone}` : "",
    layoutMode !== "default" ? `glc-feat-acc--layout-${layoutMode}` : "",
    widePanels ? "glc-feat-acc--panels-wide" : "",
    panelFrame ? "glc-feat-acc--panel-chassis" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const inactiveCount = Math.max(0, items.length - 1);
  const gapUnit = widePanels || panelFrame ? 12 : 8;
  const gapsTotalPx = inactiveCount * gapUnit;
  const panelsRowStyle = {
    "--glc-feat-acc-inactive-count": inactiveCount,
    "--glc-feat-acc-gaps": `${gapsTotalPx}px`,
    gap: `${gapUnit}px`,
  } as CSSProperties;

  const handleMove: MouseEventHandler<HTMLElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursor({ x, y });
    setMotifOffset({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 22,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 18,
    });
  };

  const sectionVars = {
    "--glc-feat-motif-x": `${motifOffset.x}px`,
    "--glc-feat-motif-y": `${motifOffset.y}px`,
    "--glc-feat-cx": `${cursor.x}px`,
    "--glc-feat-cy": `${cursor.y}px`,
  } as CSSProperties;

  const wmTransform = (
    sandboxGpu
      ? { transform: "translate3d(-50%, 0, 0)" }
      : {
          transform: `translate3d(calc(-50% + ${motifOffset.x * 0.35}px), ${motifOffset.y * 0.2}px, 0)`,
        }
  ) as CSSProperties;

  return (
    <div className={rootClass}>
      <section
        className={`glc-feat-acc__section container${cursorInside ? " is-cursor-on" : ""}`}
        style={sectionVars}
        aria-labelledby={headingId}
        onMouseMove={handleMove}
        onMouseEnter={() => setCursorInside(true)}
        onMouseLeave={() => {
          setCursorInside(false);
          setMotifOffset({ x: 0, y: 0 });
          setCursor({ x: -9999, y: -9999 });
        }}
      >
        <div className="glc-feat-acc__rail" aria-hidden />
        <div className="glc-feat-acc__cursor-ring" aria-hidden />
        <div className="glc-feat-acc__watermark-ghost" style={wmTransform} aria-hidden>
          SERVICES
        </div>
        <div className="glc-feat-acc__motif" aria-hidden />

        <div className="glc-feat-acc__layout">
          <div className="glc-feat-acc__copy">
            <Reveal className="glc-feat-acc__reveal-head">
              <div className="glc-feat-acc__sec-head">
                <span className="glc-feat-acc__badge">{sectionBadge}</span>
                <span className="glc-feat-acc__sec-rule" />
              </div>
              <p className="glc-feat-acc__act-ghost">{eyebrow}</p>
            </Reveal>

            <Reveal delayClass="reveal--delay-1">
              <h2 id={headingId} className="glc-feat-acc__title">
                <span className="glc-feat-acc__title-line glc-feat-acc__clip">
                  {headingLine1}
                </span>
                <br />
                <span className="glc-feat-acc__title-accent glc-feat-acc__clip glc-feat-acc__clip--b">
                  {headingLine2}
                </span>
              </h2>
            </Reveal>

            <Reveal delayClass="reveal--delay-2">
              <p className="glc-feat-acc__anno">{intro}</p>
            </Reveal>

            {showCta ? (
              <Reveal delayClass="reveal--delay-3">
                <div className="glc-feat-acc__cta-row">
                  <a href={cta.href} className="btn-primary glc-feat-acc__cta">
                    {cta.label}
                    <IconArrow />
                  </a>
                </div>
              </Reveal>
            ) : null}
          </div>

          <Reveal delayClass="reveal--delay-2" className="glc-feat-acc__panels-wrap">
            <div className="glc-feat-acc__panels-dse">
              <div className="glc-feat-acc__panels-meta">
                <span className="glc-feat-acc__panels-chip">Service Focus</span>
                <a
                  href={activeItem?.href ?? "/services/"}
                  className="glc-feat-acc__panels-active"
                  aria-label={`Open ${activeItem?.title ?? "service"} page`}
                >
                  {activeItem?.title ?? "Service"}
                </a>
              </div>
              <div className="glc-feat-acc__panels-stage">
              <div className="glc-feat-acc__panels-row" style={panelsRowStyle}>
                {(reversePanelOrder ? [...items].reverse() : items).map((item, displayIndex) => {
                  const index = reversePanelOrder ? items.length - 1 - displayIndex : displayIndex;
                  return (
                    <AccordionItem
                      key={item.id}
                      item={item}
                      isActive={index === activeIndex}
                      onMouseEnter={() => setActiveIndex(index)}
                    />
                  );
                })}
              </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
