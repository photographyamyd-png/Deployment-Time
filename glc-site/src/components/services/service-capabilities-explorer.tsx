"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { SmartLink } from "@/components/ui/smart-link";
import { IconArrow } from "@/components/ui/icon-arrow";
import type { SubServiceSection } from "@/components/services/service-layout-variants";
import type { ServiceDetailContent } from "@/content/types";

const DEFAULT_IMG =
  "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1400&q=80&auto=format";

type ExplorerCopy = NonNullable<ServiceDetailContent["capabilitiesExplorer"]>;

type Props = {
  sections: SubServiceSection[];
  explorer: ExplorerCopy;
};

function defaultAlt(heading: string): string {
  return `${heading} — commercial drainage and civil prep, Simcoe County Ontario`;
}

export function ServiceCapabilitiesExplorer({ sections, explorer }: Props) {
  const firstId = sections[0]?.id ?? "";
  const [activeId, setActiveId] = useState(firstId);

  const syncHash = useCallback(() => {
    const raw =
      typeof window !== "undefined" ? window.location.hash.replace(/^#/, "") : "";
    if (raw && sections.some((s) => s.id === raw)) {
      setActiveId(raw);
    }
  }, [sections]);

  useEffect(() => {
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [syncHash]);

  useEffect(() => {
    const raw =
      typeof window !== "undefined" ? window.location.hash.replace(/^#/, "") : "";
    if (!raw || !sections.some((s) => s.id === raw)) return;
    const el = document.getElementById(raw);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [activeId, sections]);

  const active = sections.find((s) => s.id === activeId) ?? sections[0];
  const ctaHref = explorer.ctaHref ?? "#request-site-visit";

  const onTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const next = sections[Math.min(index + 1, sections.length - 1)];
      if (next) {
        setActiveId(next.id);
        window.history.replaceState(null, "", `#${next.id}`);
      }
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = sections[Math.max(index - 1, 0)];
      if (prev) {
        setActiveId(prev.id);
        window.history.replaceState(null, "", `#${prev.id}`);
      }
    } else if (e.key === "Home") {
      e.preventDefault();
      const f = sections[0];
      if (f) {
        setActiveId(f.id);
        window.history.replaceState(null, "", `#${f.id}`);
      }
    } else if (e.key === "End") {
      e.preventDefault();
      const last = sections[sections.length - 1];
      if (last) {
        setActiveId(last.id);
        window.history.replaceState(null, "", `#${last.id}`);
      }
    }
  };

  if (sections.length === 0) return null;

  return (
    <div className="svc-cap-explorer">
      <div className="svc-cap-sticky-split__inner">
        <aside className="svc-cap-sticky-split__aside svc-cap-explorer__aside">
          <div className="eyebrow eyebrow--dark svc-cap-explorer__aside-eyebrow">Field capabilities</div>
          <h2 className="svc-cap-explorer__aside-heading">{explorer.headline}</h2>
          <p className="svc-cap-explorer__aside-lede">{explorer.lede}</p>
          <SmartLink href={ctaHref} className="btn-primary">
            {explorer.ctaLabel}
            <IconArrow />
          </SmartLink>
        </aside>

        <div className="svc-cap-explorer__main">
          <div
            className="svc-cap-explorer__tablist"
            role="tablist"
            aria-label="Capability detail"
          >
            {sections.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                id={`svc-cap-tab-${s.id}`}
                aria-selected={activeId === s.id}
                aria-controls={s.id}
                tabIndex={activeId === s.id ? 0 : -1}
                className={
                  activeId === s.id
                    ? "svc-cap-explorer__tab svc-cap-explorer__tab--active"
                    : "svc-cap-explorer__tab"
                }
                onClick={() => {
                  setActiveId(s.id);
                  window.history.replaceState(null, "", `#${s.id}`);
                }}
                onKeyDown={(e) => onTabKeyDown(e, i)}
              >
                <span className="svc-cap-explorer__tab-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="svc-cap-explorer__tab-label">{s.heading}</span>
              </button>
            ))}
          </div>

          <div className="svc-cap-explorer__detail">
            {active ? (
              <div className="svc-cap-explorer__media" aria-live="polite">
                <Image
                  key={active.id}
                  src={active.image || DEFAULT_IMG}
                  alt={active.imageAlt ?? defaultAlt(active.heading)}
                  fill
                  className="svc-cap-explorer__img"
                  sizes="(max-width: 900px) 100vw, 50vw"
                  priority={active.id === firstId}
                />
              </div>
            ) : null}

            {sections.map((s) => (
              <div
                key={s.id}
                id={s.id}
                role="tabpanel"
                aria-labelledby={`svc-cap-tab-${s.id}`}
                hidden={activeId !== s.id}
                className="svc-cap-explorer__panel"
                tabIndex={activeId === s.id ? 0 : -1}
              >
                <div className="svc-cap-explorer__panel-rule" aria-hidden />
                <h3 className="svc-cap-explorer__panel-heading">{s.heading}</h3>
                <div className="svc-cap-explorer__panel-body">
                  {s.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {s.closing ? (
                    <p className="svc-cap-explorer__panel-closing">
                      <strong>Key work:</strong> {s.closing}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
