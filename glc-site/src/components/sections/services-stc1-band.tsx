"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { IconArrow } from "@/components/ui/icon-arrow";
import { SmartLink } from "@/components/ui/smart-link";
import type { MegaMenuCard } from "@/content/types";
import {
  serviceStcBackground,
  serviceStcFeatures,
  serviceStcStats,
} from "@/content/home-services-stc-panels";
import { ROUTES } from "@/lib/routes";

type Props = {
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  intro: string;
  scopeItems: string[];
  cards: MegaMenuCard[];
};

function StcMotif({ variant }: { variant: number }) {
  const v = variant % 5;
  if (v === 0) {
    return (
      <svg
        className="home-services-stc1__motif home-services-stc1__motif--corner"
        viewBox="0 0 200 200"
        fill="none"
        stroke="var(--yellow-core)"
        strokeWidth="1"
        aria-hidden
      >
        <path d="M200 0 L0 0 L0 200" opacity="0.35" />
        <path d="M200 20 L20 20 L20 200" opacity="0.22" />
      </svg>
    );
  }
  if (v === 1) {
    return (
      <svg
        className="home-services-stc1__motif home-services-stc1__motif--slash"
        viewBox="0 0 160 160"
        fill="none"
        stroke="var(--yellow-core)"
        strokeWidth="1"
        aria-hidden
      >
        <line x1="0" y1="160" x2="160" y2="0" opacity="0.3" />
        <line x1="40" y1="160" x2="160" y2="40" opacity="0.2" />
      </svg>
    );
  }
  if (v === 2) {
    return (
      <svg
        className="home-services-stc1__motif home-services-stc1__motif--cross"
        viewBox="0 0 120 120"
        fill="none"
        stroke="var(--yellow-core)"
        strokeWidth="1"
        aria-hidden
      >
        <circle cx="60" cy="60" r="50" opacity="0.2" />
        <line x1="0" y1="60" x2="120" y2="60" opacity="0.2" />
        <line x1="60" y1="0" x2="60" y2="120" opacity="0.2" />
      </svg>
    );
  }
  if (v === 3) {
    return (
      <svg
        className="home-services-stc1__motif home-services-stc1__motif--tri"
        viewBox="0 0 100 100"
        fill="none"
        stroke="var(--yellow-core)"
        strokeWidth="1"
        aria-hidden
      >
        <polygon points="50,5 95,95 5,95" opacity="0.25" />
      </svg>
    );
  }
  return (
    <svg
      className="home-services-stc1__motif home-services-stc1__motif--corner home-services-stc1__motif--flip"
      viewBox="0 0 200 200"
      fill="none"
      stroke="var(--yellow-core)"
      strokeWidth="1"
      aria-hidden
    >
      <path d="M200 0 L0 0 L0 200" opacity="0.28" />
    </svg>
  );
}

export function ServicesStc1Band({
  eyebrow,
  headingLine1,
  headingLine2,
  intro,
  scopeItems,
  cards,
}: Props) {
  const baseId = useId();
  const [active, setActive] = useState(0);

  return (
    <section
      id="services"
      className="home-services-stc1"
      aria-labelledby="services-heading"
    >
      <div className="home-services-stc1__rail-top" aria-hidden />
      <div className="home-services-stc1__bp" aria-hidden />

      <header className="home-services-stc1__intro">
        <p className="eyebrow eyebrow--on-dark">
          <span>{eyebrow}</span>
        </p>
        <h2 id="services-heading" className="home-services-stc1__title">
          {headingLine1}
          <br />
          <span className="home-services-stc1__title-accent">{headingLine2}</span>
        </h2>
        <p className="home-services-stc1__lede">{intro}</p>
        <p className="home-services-stc1__scope-label">Five coordinated service lines cover:</p>
        <ul className="home-services-stc1__scope" aria-label="Service coverage overview">
          {scopeItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="home-services-stc1__kicker">
          One contractor, one point of contact, zero handoff delays.
        </p>
      </header>

      <div className="home-services-stc1__stc">
        <nav className="home-services-stc1__rail" aria-label="Service lines">
          <div className="home-services-stc1__rail-label">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <rect x="0" y="0" width="6" height="6" fill="var(--yellow-core)" opacity="0.7" />
              <rect x="8" y="0" width="6" height="6" fill="var(--yellow-core)" opacity="0.3" />
              <rect x="0" y="8" width="6" height="6" fill="var(--yellow-core)" opacity="0.3" />
              <rect x="8" y="8" width="6" height="6" fill="var(--yellow-core)" opacity="0.15" />
            </svg>
            <span>Lines</span>
          </div>
          <ul className="home-services-stc1__tabs" role="tablist">
            {cards.map((card, i) => (
              <li key={card.slug} role="none">
                <button
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${i}`}
                  aria-selected={active === i}
                  aria-controls={`${baseId}-panel-${i}`}
                  tabIndex={active === i ? 0 : -1}
                  className={`home-services-stc1__tab${active === i ? " is-active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  <span className="home-services-stc1__tab-num">{card.num}</span>
                  <span className="home-services-stc1__tab-txt">{card.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="home-services-stc1__panels">
          {cards.map((card, i) => {
            const isActive = active === i;
            const feats = serviceStcFeatures(card.slug);
            const stats = serviceStcStats(card.slug);
            const bg = serviceStcBackground(card.slug);
            return (
              <div
                key={card.slug}
                id={`${baseId}-panel-${i}`}
                role="tabpanel"
                aria-labelledby={`${baseId}-tab-${i}`}
                hidden={!isActive}
                className={`home-services-stc1__panel${isActive ? " is-active" : ""}`}
              >
                <div className="home-services-stc1__panel-bg" aria-hidden>
                  <Image
                    src={bg}
                    alt=""
                    fill
                    className="home-services-stc1__panel-img"
                    sizes="100vw"
                    priority={i === 0}
                  />
                </div>
                <div className="home-services-stc1__panel-overlay" aria-hidden />
                <div className="home-services-stc1__panel-gridlines" aria-hidden />
                <StcMotif variant={i} />
                <div className="home-services-stc1__panel-inner">
                  <div className="home-services-stc1__panel-copy">
                    <div className="eyebrow eyebrow--on-dark">
                      <span>
                        {card.num} / {card.title}
                      </span>
                    </div>
                    <h3 className="home-services-stc1__panel-h">
                      {card.gridTitle.map((line, li) => (
                        <span key={`${card.slug}-h-${li}`}>
                          {li > 0 ? <br /> : null}
                          {li === card.gridTitle.length - 1 ? (
                            <span className="home-services-stc1__panel-h-accent">{line}</span>
                          ) : (
                            line
                          )}
                        </span>
                      ))}
                    </h3>
                    <div className="home-services-stc1__panel-rule" aria-hidden />
                    <p className="home-services-stc1__panel-body">{card.gridDescription}</p>
                    <ul className="home-services-stc1__panel-features">
                      {feats.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    <div className="home-services-stc1__panel-ctas">
                      <SmartLink href={ROUTES.service(card.slug)} className="btn-primary">
                        View service line
                        <IconArrow />
                      </SmartLink>
                      <SmartLink href={ROUTES.contact} className="btn-ghost">
                        Request a quote
                      </SmartLink>
                    </div>
                  </div>
                  <aside className="home-services-stc1__card" aria-label="Service snapshot">
                    <span className="home-services-stc1__card-badge">{stats.badge}</span>
                    <div className="home-services-stc1__stat">
                      <div className="home-services-stc1__stat-num">{stats.primary.num}</div>
                      <div className="home-services-stc1__stat-label">{stats.primary.label}</div>
                      {stats.primary.sub ? (
                        <div className="home-services-stc1__stat-sub">{stats.primary.sub}</div>
                      ) : null}
                    </div>
                    <div className="home-services-stc1__stat">
                      <div className="home-services-stc1__stat-num">{stats.secondary.num}</div>
                      <div className="home-services-stc1__stat-label">{stats.secondary.label}</div>
                      {stats.secondary.sub ? (
                        <div className="home-services-stc1__stat-sub">{stats.secondary.sub}</div>
                      ) : null}
                    </div>
                  </aside>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="home-services-stc1__bar" aria-hidden />
    </section>
  );
}
