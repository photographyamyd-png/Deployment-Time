"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import { SmartLink } from "@/components/ui/smart-link";
import { IconArrow } from "@/components/ui/icon-arrow";
import { Reveal } from "@/components/ui/reveal";
import { DrainageFragmentedH2 } from "@/components/services/drainage-hardscaping/drainage-typography";
import type { HubCapabilityBlock, HubCapabilityTab } from "@/content/drainage-hub-types";
import { DRAINAGE_HUB_INTERACTIVE, DRAINAGE_HUB_MID_CTA } from "@/content/drainage-hardscaping-page";
import { splitFirstTwoSentences } from "@/lib/copy-density";
import { ROUTES } from "@/lib/routes";
import type { SiteConfig } from "@/content/types";

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

function CapabilityTabMedia({ tab }: { tab: HubCapabilityTab }) {
  return (
    <div className="about__media service-cap-split__media glc-drain-hub__cap-media">
      <div className="service-cap-split__media-slab" aria-hidden />
      <div className="about__media-shell glc-drain-hub__media-shell--fill">
        <Image
          src={tab.imageSrc}
          alt={tab.imageAlt}
          fill
          className="glc-drain-hub__media-fill"
          sizes="(max-width: 900px) 100vw, min(560px, 50vw)"
        />
      </div>
    </div>
  );
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
                  <summary>Technical depth &amp; field notes</summary>
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

function CapabilityEditorialSplit({
  tab,
  tabPrimaryCta,
  tabSecondaryCta,
  tabSecondaryHref,
}: {
  tab: HubCapabilityTab;
  tabPrimaryCta: string;
  tabSecondaryCta: string;
  tabSecondaryHref: string;
}) {
  const { h2Text, lede, readmoreBlocks } = buildTabLedeAndReadmore(tab.blocks);
  const hasReadmore = readmoreBlocks.length > 0;
  const hasH2 = Boolean(h2Text);

  if (!hasH2) {
    return (
      <section className="service-cap-block service-cap-block--split service-cap-block--editorial glc-drain-hub__cap-editorial">
        <div className="about__inner service-cap-split__grid glc-drain-hub__cap-split-grid">
          <div className="about__copy service-cap-split__copy glc-drain-hub__cap-fallback-copy">
            <Reveal>
              <HubCapabilityBlocks blocks={tab.blocks} />
            </Reveal>
          </div>
          <CapabilityTabMedia tab={tab} />
        </div>
      </section>
    );
  }

  return (
    <section className="service-cap-block service-cap-block--split service-cap-block--editorial glc-drain-hub__cap-editorial">
      <div className="about__inner service-cap-split__grid glc-drain-hub__cap-split-grid">
        <div className="about__copy service-cap-split__copy">
          <Reveal>
            <div className="eyebrow eyebrow--dark">{tab.eyebrow}</div>
          </Reveal>
          <Reveal delayClass="reveal--delay-1">
            <DrainageFragmentedH2
              text={h2Text}
              className="about__heading glc-drain-hub__cap-hero-h2"
            />
          </Reveal>
          <Reveal delayClass="reveal--delay-1">
            <div className="about__divider service-cap-split__rule" />
          </Reveal>
          {lede ? (
            <Reveal delayClass="reveal--delay-2">
              <p className="about__body service-cap-split__lede glc-drain-hub__cap-lede">{lede}</p>
            </Reveal>
          ) : null}
          {hasReadmore ? (
            <Reveal delayClass="reveal--delay-3">
              <details className="service-cap-readmore glc-drain-hub__readmore">
                <summary>Technical depth &amp; field notes</summary>
                <div className="service-cap-readmore__inner glc-drain-hub__readmore-inner">
                  <HubCapabilityBlocks blocks={readmoreBlocks} />
                </div>
              </details>
            </Reveal>
          ) : null}
          <Reveal delayClass="reveal--delay-4">
            <div className="about__credentials service-cap-split__key">
              <div className="about__credential">
                <div className="about__credential-title">{tab.credentialTitle}</div>
                <div className="about__credential-sub">{tab.credentialSub}</div>
              </div>
            </div>
          </Reveal>
          <Reveal delayClass="reveal--delay-5">
            <div className="service-cap-split__actions glc-drain-hub__cap-actions">
              <SmartLink href={ROUTES.contact} className="btn-primary">
                {tabPrimaryCta}
                <IconArrow />
              </SmartLink>
              <SmartLink href={tabSecondaryHref} className="btn-ghost-dark">
                {tabSecondaryCta} <IconArrow />
              </SmartLink>
            </div>
          </Reveal>
        </div>
        <CapabilityTabMedia tab={tab} />
      </div>
    </section>
  );
}

type Props = {
  tabs: HubCapabilityTab[];
  site: SiteConfig;
};

export function InteractiveCapabilities({ tabs, site }: Props) {
  const baseId = useId();
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

  return (
    <section
      id="field-capabilities"
      className="glc-drain-hub__interactive ls"
      aria-labelledby="drainage-hub-capabilities-h2"
    >
      <span className="glc-drain-hub__b-slot" aria-hidden />
      <div className="glc-drain-hub__interactive-inner container">
        <div className="glc-drain-hub__interactive-split">
          <aside className="glc-drain-hub__interactive-aside">
            <Reveal>
              <div className="eyebrow eyebrow--dark glc-drain-hub__interactive-eyebrow">
                {DRAINAGE_HUB_INTERACTIVE.eyebrow}
              </div>
            </Reveal>
            <Reveal delayClass="reveal--delay-1">
              <h2
                id="drainage-hub-capabilities-h2"
                className="glc-drain-hub__interactive-sticky-h"
              >
                {DRAINAGE_HUB_INTERACTIVE.stickyH2Line1}{" "}
                <em className="glc-drain-hub__heading-accent">{DRAINAGE_HUB_INTERACTIVE.stickyH2Accent}</em>
              </h2>
            </Reveal>
            <Reveal delayClass="reveal--delay-1">
              <div className="about__divider service-cap-split__rule glc-drain-hub__interactive-rule" />
            </Reveal>
            <Reveal delayClass="reveal--delay-2">
              <div className="glc-drain-hub__mid-cta">
                <p className="glc-drain-hub__mid-cta-heading">{DRAINAGE_HUB_MID_CTA.heading}</p>
                <p className="glc-drain-hub__mid-cta-support">{DRAINAGE_HUB_MID_CTA.supporting}</p>
                <div className="glc-drain-hub__mid-cta-row">
                  <SmartLink href={ROUTES.contact} className="btn-primary">
                    {DRAINAGE_HUB_MID_CTA.primaryLabel}
                    <IconArrow />
                  </SmartLink>
                  <a href={telHref} className="btn-ghost-dark">
                    {DRAINAGE_HUB_MID_CTA.secondaryLabel}: {site.telephoneDisplay}
                  </a>
                </div>
              </div>
            </Reveal>
          </aside>

          <div className="glc-drain-hub__interactive-main">
            <div className="glc-drain-hub__tablist" role="tablist" aria-label="Capability topics">
              {tabs.map((tab, index) => {
                const selected = index === activeIndex;
                const tabId = `${baseId}-${tab.tabId}`;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    id={tabId}
                    role="tab"
                    aria-selected={selected}
                    aria-controls={tab.id}
                    tabIndex={selected ? 0 : -1}
                    className={
                      selected
                        ? "glc-drain-hub__tab glc-drain-hub__tab--active"
                        : "glc-drain-hub__tab"
                    }
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={onKeyDown}
                  >
                    <span className="glc-drain-hub__tab-label">{tab.tabLabel}</span>
                  </button>
                );
              })}
            </div>

            <div className="glc-drain-hub__panels glc-drain-hub__panels--editorial">
              {tabs.map((tab, index) => {
                const selected = index === activeIndex;
                const tabId = `${baseId}-${tab.tabId}`;
                return (
                  <div
                    key={tab.id}
                    id={tab.id}
                    role="tabpanel"
                    aria-labelledby={tabId}
                    aria-hidden={!selected}
                    className={
                      selected
                        ? "glc-drain-hub__tab-panel glc-drain-hub__tab-panel--active"
                        : "glc-drain-hub__tab-panel"
                    }
                  >
                    <CapabilityEditorialSplit
                      tab={tab}
                      tabPrimaryCta={DRAINAGE_HUB_INTERACTIVE.tabPanelPrimaryCta}
                      tabSecondaryCta={DRAINAGE_HUB_INTERACTIVE.tabPanelSecondaryCta}
                      tabSecondaryHref={DRAINAGE_HUB_INTERACTIVE.tabPanelSecondaryHref}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
