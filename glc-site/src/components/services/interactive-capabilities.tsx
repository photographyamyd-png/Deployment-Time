"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { SmartLink } from "@/components/ui/smart-link";
import { IconArrow } from "@/components/ui/icon-arrow";
import { Reveal } from "@/components/ui/reveal";
import {
  DrainageDenseText,
  DrainageFragmentedH2,
} from "@/components/services/drainage-hardscaping/drainage-typography";
import type { HubCapabilityBlock, HubCapabilityTab } from "@/content/drainage-hub-types";
import {
  DRAINAGE_HUB_INTERACTIVE,
  DRAINAGE_HUB_MID_CTA,
  DRAINAGE_HUB_OVERVIEW_MEDIA_STAT,
} from "@/content/drainage-hardscaping-page";
import { splitFirstTwoSentences } from "@/lib/copy-density";
import { ROUTES } from "@/lib/routes";
import type { SiteConfig } from "@/content/types";

const EASE = [0.22, 1, 0.36, 1] as const;
const FEATURES_MAX = 6;
const READMORE_SUMMARY = "Technical depth & field notes";

function buildTabLedeAndReadmore(blocks: HubCapabilityBlock[]): {
  h2Text: string;
  lede: string;
  readmoreBlocks: HubCapabilityBlock[];
} {
  const [h2b, ...rest] = blocks;
  if (h2b?.kind !== "h2") {
    return { h2Text: "", lede: "", readmoreBlocks: blocks };
  }
  const h2Text = h2b.text;
  const firstPIdx = rest.findIndex((b) => b.kind === "p");
  if (firstPIdx === -1) {
    return { h2Text, lede: "", readmoreBlocks: rest };
  }
  const firstP = rest[firstPIdx] as { kind: "p"; text: string };
  const { lead, remainder } = splitFirstTwoSentences(firstP.text);
  const readmoreBlocks: HubCapabilityBlock[] = [];
  if (remainder) {
    readmoreBlocks.push({ kind: "p", text: remainder });
  }
  readmoreBlocks.push(...rest.slice(firstPIdx + 1));
  return { h2Text, lede: lead, readmoreBlocks };
}

function firstUlItems(blocks: HubCapabilityBlock[], maxItems: number): string[] {
  const ul = blocks.find((b): b is Extract<HubCapabilityBlock, { kind: "ul" }> => b.kind === "ul");
  if (!ul) return [];
  return ul.items.slice(0, maxItems);
}

function HubCapabilityBlocks({ blocks }: { blocks: HubCapabilityBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        const key = `${block.kind}-${i}`;
        switch (block.kind) {
          case "h2":
            return (
              <h2 key={key} className="glc-drain-hub__cap-h2">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={key} className="glc-drain-hub__cap-h3">
                {block.text}
              </h3>
            );
          case "p": {
            const { lead, remainder } = splitFirstTwoSentences(block.text);
            if (!remainder) {
              return (
                <p key={key} className="about__body glc-drain-hub__cap-readmore-p">
                  {lead}
                </p>
              );
            }
            return (
              <div key={key} className="glc-drain-hub__cap-dense-wrap">
                <p className="about__body glc-drain-hub__cap-readmore-p glc-drain-hub__cap-readmore-lede">
                  {lead}
                </p>
                <details className="service-cap-readmore glc-drain-hub__readmore glc-drain-hub__readmore--nested">
                  <summary>{READMORE_SUMMARY}</summary>
                  <div className="service-cap-readmore__inner">
                    <p className="about__body glc-drain-hub__cap-readmore-p">{remainder}</p>
                  </div>
                </details>
              </div>
            );
          }
          case "p_rich":
            return (
              <p key={key} className="about__body glc-drain-hub__cap-readmore-p">
                {block.segments.map((seg, j) =>
                  typeof seg === "string" ? (
                    <span key={j}>{seg}</span>
                  ) : (
                    <SmartLink key={j} href={seg.link.href} className="glc-drain-hub__inline-link">
                      {seg.link.label}
                    </SmartLink>
                  ),
                )}
              </p>
            );
          case "p_lead":
            if (!block.rest) {
              return (
                <p key={key} className="about__body glc-drain-hub__cap-readmore-p">
                  <strong>{block.lead}</strong>
                </p>
              );
            }
            return (
              <p key={key} className="about__body glc-drain-hub__cap-readmore-p">
                <strong>{block.lead}</strong>
                {block.rest}
              </p>
            );
          case "hr":
            return <hr key={key} className="glc-drain-hub__cap-hr" />;
          case "ul":
            return (
              <ul key={key} className="glc-drain-hub__cap-ul">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "ol_step":
            return (
              <ol key={key} className="glc-drain-hub__cap-ol">
                {block.items.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    {item.rest}
                  </li>
                ))}
              </ol>
            );
          case "ul_lead":
            return (
              <ul key={key} className="glc-drain-hub__cap-ul">
                {block.items.map((item) => (
                  <li key={item.lead}>
                    <strong>{item.lead}</strong>
                    {item.rest}
                  </li>
                ))}
              </ul>
            );
          case "figures":
            return (
              <div key={key} className="glc-drain-hub__cap-figures">
                {block.alts.map((alt) => (
                  <figure key={alt} className="glc-drain-hub__cap-figure">
                    <div className="glc-drain-hub__cap-figure-slot" aria-hidden />
                    <figcaption className="glc-drain-hub__cap-figcap">{alt}</figcaption>
                  </figure>
                ))}
              </div>
            );
          case "closing_link":
            return (
              <p key={key} className="about__body glc-drain-hub__cap-readmore-p glc-drain-hub__cap-closing">
                {block.before}
                <SmartLink href={block.href} className="glc-drain-hub__inline-link">
                  {block.label}
                </SmartLink>
              </p>
            );
          default:
            return null;
        }
      })}
    </>
  );
}

function Stc1RailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <rect x="0" y="0" width="6" height="6" fill="var(--yellow-core)" opacity="0.7" />
      <rect x="8" y="0" width="6" height="6" fill="var(--yellow-core)" opacity="0.3" />
      <rect x="0" y="8" width="6" height="6" fill="var(--yellow-core)" opacity="0.3" />
      <rect x="8" y="8" width="6" height="6" fill="var(--yellow-core)" opacity="0.15" />
    </svg>
  );
}

function Stc1PanelMotif({ index }: { index: number }) {
  const v = index % 4;
  if (v === 0) {
    return (
      <svg
        className="stc1__motif motif-corner"
        viewBox="0 0 200 200"
        fill="none"
        stroke="var(--yellow-core)"
        strokeWidth="1"
        aria-hidden
      >
        <path d="M200 0 L0 0 L0 200" />
        <path d="M200 20 L20 20 L20 200" />
        <path d="M200 40 L40 40 L40 200" opacity="0.5" />
      </svg>
    );
  }
  if (v === 1) {
    return (
      <svg
        className="stc1__motif motif-slash"
        viewBox="0 0 160 160"
        fill="none"
        stroke="var(--yellow-core)"
        strokeWidth="1"
        aria-hidden
      >
        <line x1="0" y1="160" x2="160" y2="0" />
        <line x1="20" y1="160" x2="160" y2="20" />
        <line x1="40" y1="160" x2="160" y2="40" />
        <line x1="60" y1="160" x2="160" y2="60" />
        <line x1="80" y1="160" x2="160" y2="80" />
      </svg>
    );
  }
  if (v === 2) {
    return (
      <svg
        className="stc1__motif motif-cross"
        viewBox="0 0 120 120"
        fill="none"
        stroke="var(--yellow-core)"
        strokeWidth="1"
        aria-hidden
      >
        <circle cx="60" cy="60" r="55" />
        <circle cx="60" cy="60" r="35" />
        <circle cx="60" cy="60" r="15" />
        <line x1="0" y1="60" x2="120" y2="60" />
        <line x1="60" y1="0" x2="60" y2="120" />
      </svg>
    );
  }
  return (
    <svg
      className="stc1__motif motif-triangle"
      viewBox="0 0 100 100"
      fill="none"
      stroke="var(--yellow-core)"
      strokeWidth="1"
      aria-hidden
    >
      <polygon points="50,0 100,100 0,100" />
      <polygon points="50,20 80,80 20,80" opacity="0.5" />
      <polygon points="50,40 65,65 35,65" opacity="0.3" />
    </svg>
  );
}

type Props = {
  tabs: HubCapabilityTab[];
  site: SiteConfig;
};

export function InteractiveCapabilities({ tabs, site }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const raw = typeof window !== "undefined" ? window.location.hash.replace(/^#/, "") : "";
    if (!raw) return;
    const ix = tabs.findIndex((t) => t.id === raw);
    if (ix >= 0) setActiveIndex(ix);
  }, [tabs]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, tabs.length - 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Home") {
        e.preventDefault();
        setActiveIndex(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setActiveIndex(tabs.length - 1);
      }
    },
    [tabs.length],
  );

  const telHref = site.telephone.startsWith("tel:")
    ? site.telephone
    : `tel:${site.telephone}`;

  const activeTab = tabs[activeIndex] ?? tabs[0];
  const {
    h2Text: detailH2,
    lede: detailLede,
    readmoreBlocks: detailReadmoreBlocks,
  } = buildTabLedeAndReadmore(activeTab.blocks);
  const detailHeading = detailH2 || activeTab.tabLabel;
  const hasDetailReadmore = detailReadmoreBlocks.length > 0;

  return (
    <>
    <div className="glc-drain-site-stc1 glc-drain-hub__stc1">
      <section
        id="field-capabilities"
        className="stc1"
        aria-labelledby="drainage-hub-capabilities-h2"
      >
        <header className="glc-drain-hub__stc1-intro">
          <div className="glc-drain-hub__stc1-intro-inner">
            <Reveal>
              <div className="eyebrow eyebrow--on-dark glc-drain-hub__stc1-intro-eyebrow">
                <span>{DRAINAGE_HUB_INTERACTIVE.eyebrow}</span>
              </div>
            </Reveal>
            <Reveal delayClass="reveal--delay-1">
              <h2 id="drainage-hub-capabilities-h2" className="glc-drain-hub__stc1-intro-h2">
                {DRAINAGE_HUB_INTERACTIVE.stickyH2Line1}
                <br />
                <em className="glc-drain-hub__stc1-intro-h2-em">{DRAINAGE_HUB_INTERACTIVE.stickyH2Accent}</em>
              </h2>
              <div className="stc1__panel-rule glc-drain-hub__stc1-intro-rule" aria-hidden />
            </Reveal>
            <Reveal delayClass="reveal--delay-2">
              <div className="glc-drain-hub__stc1-intro-body">
                <p className="glc-drain-hub__stc1-intro-lead">
                  <strong>{DRAINAGE_HUB_MID_CTA.heading}</strong>
                </p>
                <DrainageDenseText
                  text={DRAINAGE_HUB_MID_CTA.supporting}
                  ledeClassName="glc-drain-hub__stc1-intro-support"
                  innerClassName="glc-drain-hub__stc1-intro-support glc-drain-hub__stc1-intro-support--more"
                />
              </div>
            </Reveal>
          </div>
        </header>

        <nav className="stc1__rail" aria-label="Capability topics">
          <div className="stc1__rail-label">
            <Stc1RailIcon />
            <span>Capabilities</span>
          </div>
          <ul className="stc1__tabs" role="tablist">
            {tabs.map((tab, i) => {
              const selected = i === activeIndex;
              return (
                <li key={tab.id}>
                  <button
                    type="button"
                    id={tab.id}
                    role="tab"
                    aria-selected={selected}
                    aria-controls={tab.panelId}
                    tabIndex={selected ? 0 : -1}
                    className={`stc1__tab${selected ? " active" : ""}`}
                    onClick={() => setActiveIndex(i)}
                    onKeyDown={onKeyDown}
                  >
                    <span className="stc1__tab-num">{String(i + 1).padStart(2, "0")}</span>
                    {tab.tabLabel}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="stc1__panels">
          {tabs.map((tab, i) => {
            const selected = i === activeIndex;
            const { h2Text, lede } = buildTabLedeAndReadmore(tab.blocks);
            const headingText = h2Text || tab.tabLabel;
            const features = firstUlItems(tab.blocks, FEATURES_MAX);
            const bgUrl = tab.imageSrc.replace(/'/g, "%27");

            return (
              <div
                key={tab.id}
                id={tab.panelId}
                role="tabpanel"
                aria-labelledby={tab.id}
                className={`stc1__panel${selected ? " active" : ""}`}
              >
                <div
                  className="stc1__panel-bg"
                  style={{ backgroundImage: `url('${bgUrl}')` }}
                  aria-hidden
                />
                <div className="stc1__panel-overlay" aria-hidden />
                <div className="stc1__panel-grid" aria-hidden />
                <Stc1PanelMotif index={i} />

                <div className="stc1__panel-content">
                  <div>
                    <div className="eyebrow eyebrow--on-dark">
                      <span>
                        {String(i + 1).padStart(2, "0")} / {tab.eyebrow}
                      </span>
                    </div>
                    <DrainageFragmentedH2
                      text={headingText}
                      className="stc1__panel-heading"
                      accentClassName="glc-drain-hub__heading-accent"
                    />
                    <div className="stc1__panel-rule" aria-hidden />
                    {lede ? <p className="stc1__panel-body">{lede}</p> : null}
                    {features.length > 0 ? (
                      <ul className="stc1__panel-features">
                        {features.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                    <div className="glc-drain-hub__stc1-panel-actions">
                      <SmartLink href={ROUTES.contact} className="btn-primary">
                        {DRAINAGE_HUB_INTERACTIVE.tabPanelPrimaryCta}
                        <IconArrow />
                      </SmartLink>
                      <a href={telHref} className="btn-ghost">
                        {DRAINAGE_HUB_INTERACTIVE.tabPanelSecondaryCta}: {site.telephoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="stc1__card">
                    <span className="stc1__card-badge">Capability focus</span>
                    <div className="stc1__stat">
                      <span className="stc1__stat-label">{tab.credentialTitle}</span>
                      <p className="stc1__stat-sub">{tab.credentialSub}</p>
                    </div>
                    <div className="stc1__stat">
                      <div className="stc1__stat-num">
                        48<em>Hr</em>
                      </div>
                      <span className="stc1__stat-label">Written quotes</span>
                      <p className="stc1__stat-sub">Free site assessments · {DRAINAGE_HUB_OVERVIEW_MEDIA_STAT.value} {DRAINAGE_HUB_OVERVIEW_MEDIA_STAT.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>

      {/* HOMEPAGE_SECTION_CLONE_SPEC §7 — ab3 editorial split, mirrored (media column first / 45–55) */}
      <section
        id="field-capability-detail"
        className="glc-drain-hub__cap-detail-mirror"
        aria-labelledby="drainage-hub-cap-detail-h2"
      >
        <span className="ab3__wm" aria-hidden>
          GLC
        </span>

        <div className="ab3__layout glc-drain-hub__ab3-mirror">
          <div className="ab3__media">
            <div className="ab3__badge" aria-hidden>
              <span>{activeTab.tabLabel}</span>
            </div>

            <div
              className="ab3__photo ab3__photo--has-img"
              role="img"
              aria-label={activeTab.imageAlt}
            >
              <Image
                key={activeTab.id}
                src={activeTab.imageSrc}
                alt=""
                fill
                className="ab3__photo-img glc-drain-hub__cap-detail-photo-img"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <span
                className="glc-drain-hub__ab3-photo-scrim glc-drain-hub__ab3-photo-scrim--cap-detail"
                aria-hidden
              />
            </div>

            <motion.div
              className="ab3__chip"
              initial={{ opacity: 0, x: -24, y: 8 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, delay: 0.35, ease: EASE }}
              aria-hidden
            >
              <div className="ab3__chip-num">{String(activeIndex + 1).padStart(2, "0")}</div>
              <div className="ab3__chip-lbl">{activeTab.tabLabel}</div>
            </motion.div>

            <div className="ab3__corner-mark glc-drain-hub__ab3-mirror__corner" aria-hidden />
          </div>

          <div className="ab3__copy">
            <Reveal className="ab3__top-row">
              <span className="eyebrow">Capability depth</span>
              <span
                className="ab3__since"
                aria-label={`${activeTab.eyebrow} — ${activeTab.tabLabel}`}
              >
                {activeTab.eyebrow}
                <span> · {String(activeIndex + 1).padStart(2, "0")}</span>
              </span>
            </Reveal>

            <Reveal delayClass="reveal--delay-1" className="ab3__heading-wrap">
              <DrainageFragmentedH2
                id="drainage-hub-cap-detail-h2"
                text={detailHeading}
                className="ab3__heading"
                accentClassName="ab3__heading-em"
              />
              <span className="ab3__heading-rule" aria-hidden />
            </Reveal>

            {detailLede ? (
              <Reveal delayClass="reveal--delay-2">
                <p className="ab3__body">{detailLede}</p>
              </Reveal>
            ) : null}

            {hasDetailReadmore ? (
              <Reveal delayClass="reveal--delay-3">
                <details className="service-cap-readmore glc-drain-hub__readmore glc-drain-hub__cap-detail-readmore">
                  <summary>{READMORE_SUMMARY}</summary>
                  <div className="service-cap-readmore__inner glc-drain-hub__readmore-inner">
                    <HubCapabilityBlocks blocks={detailReadmoreBlocks} />
                  </div>
                </details>
              </Reveal>
            ) : null}

            <Reveal delayClass="reveal--delay-4" className="ab3__creds glc-drain-hub__cap-detail-creds">
              <div className="ab3__cred">
                <div className="ab3__cred-idx" aria-hidden>
                  01
                </div>
                <div className="ab3__cred-body">
                  <div className="ab3__cred-title">{activeTab.credentialTitle}</div>
                  <div className="ab3__cred-sub">{activeTab.credentialSub}</div>
                </div>
              </div>
              <div className="ab3__cred">
                <div className="ab3__cred-idx" aria-hidden>
                  02
                </div>
                <div className="ab3__cred-body">
                  <div className="ab3__cred-title">Written quotes</div>
                  <div className="ab3__cred-sub">48-hour turnaround · Free site assessments</div>
                </div>
              </div>
            </Reveal>

            <Reveal delayClass="reveal--delay-5">
              <div className="glc-drain-hub__cap-detail-actions">
                <SmartLink href={ROUTES.contact} className="btn-primary">
                  {DRAINAGE_HUB_INTERACTIVE.tabPanelPrimaryCta}
                  <IconArrow />
                </SmartLink>
                <a href={telHref} className="btn-ghost-dark">
                  {DRAINAGE_HUB_MID_CTA.secondaryLabel}: {site.telephoneDisplay} <IconArrow />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
