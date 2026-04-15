"use client";

import Image from "next/image";
import { useState } from "react";
import { IconArrow } from "@/components/ui/icon-arrow";
import { SmartLink } from "@/components/ui/smart-link";
import { ROUTES } from "@/lib/routes";

const TABS = [
  {
    id: "scope",
    num: "01",
    label: "Scope & mobilization",
    body: (
      <>
        <p>
          Compact sticky rail keeps wayfinding visible while this column scrolls. Use it when a single chapter needs
          dense copy — permits, locates, haul routes, staging — without pushing imagery below the fold on wide screens.
        </p>
        <ul className="sandbox-ds-stabs__list">
          <li>Site call confirms access, geotech expectations, and pour windows.</li>
          <li>Line-item quote maps equipment hours to measurable units.</li>
          <li>Mobilization checklist travels with the crew lead tablet-first.</li>
          <li>Photo baseline captured before first cut for dispute insulation.</li>
        </ul>
        <p>
          Extra paragraphs intentionally stress the layout: the right rail stays photographic; the left accepts long
          procurement language, subheads, and bullet cadence typical of commercial RFP responses.
        </p>
      </>
    ),
  },
  {
    id: "execution",
    num: "02",
    label: "Field execution",
    body: (
      <>
        <p>
          Second tab simulates a runbook: who owns radio traffic, how spoil is staged, and when survey checks fire.
          Sticky tabs remain compact (numeric + short label) so the content column earns the vertical space.
        </p>
        <ul className="sandbox-ds-stabs__list">
          <li>Shift handoff uses shared photo folder + voice note.</li>
          <li>Engineer revisions logged before noon ride-along.</li>
          <li>Hydrovac on standby when utilities are tight to tolerance.</li>
        </ul>
        <p>
          Sandbox-only copy — swap for service-specific detail when promoting this pattern beyond /sandbox.
        </p>
      </>
    ),
  },
  {
    id: "closeout",
    num: "03",
    label: "Sign-off & records",
    body: (
      <>
        <p>
          Closeout tab holds warranty language, as-built references, and winterization notes. Long-form is OK: the
          split keeps imagery as the visual anchor.
        </p>
        <ul className="sandbox-ds-stabs__list">
          <li>Compaction tests filed with strata photos.</li>
          <li>Drainage flow video optional but encouraged.</li>
          <li>Keys and locks list for maintenance handoff.</li>
        </ul>
      </>
    ),
  },
];

export function SandboxDsCompactStickyTabs() {
  const [active, setActive] = useState(0);

  return (
    <section className="sandbox-ds-stabs" aria-labelledby="sandbox-ds-stabs-h">
      <div className="sandbox-ds-stabs__sticky-wrap">
        <div className="sandbox-ds-stabs__sticky">
          <div className="sandbox-ds-stabs__sticky-rail" aria-hidden />
          <p className="sandbox-ds-stabs__sticky-eyebrow">Interactive pattern</p>
          <h2 id="sandbox-ds-stabs-h" className="sandbox-ds-stabs__sticky-title">
            Compact sticky tabs + split content
          </h2>
          <div className="sandbox-ds-stabs__tabs" role="tablist" aria-label="Sandbox detail tabs">
            {TABS.map((t, i) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`sandbox-ds-stabs-tab-${t.id}`}
                aria-selected={active === i}
                aria-controls={`sandbox-ds-stabs-panel-${t.id}`}
                tabIndex={active === i ? 0 : -1}
                className={`sandbox-ds-stabs__tab${active === i ? " is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="sandbox-ds-stabs__tab-num">{t.num}</span>
                <span className="sandbox-ds-stabs__tab-label">{t.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sandbox-ds-stabs__split">
        <div
          className="sandbox-ds-stabs__content"
          role="tabpanel"
          id={`sandbox-ds-stabs-panel-${TABS[active].id}`}
          aria-labelledby={`sandbox-ds-stabs-tab-${TABS[active].id}`}
        >
          {TABS[active].body}
          <SmartLink href={ROUTES.contact} className="btn-primary sandbox-ds-stabs__cta">
            Book a walkthrough
            <IconArrow />
          </SmartLink>
        </div>
        <div className="sandbox-ds-stabs__media">
          <Image
            src="/images/services/drainage-hardscaping/work-cap-sideyard-pavers-rock-drain.jpg"
            alt="Hardscape and rock drainage channel beside a paver walkway"
            fill
            className="sandbox-ds-stabs__media-img"
            sizes="(max-width: 1024px) 100vw, 44vw"
            priority={false}
          />
          <div className="sandbox-ds-stabs__media-scrim" aria-hidden />
          <p className="sandbox-ds-stabs__media-cap">Balanced imagery column · static on scroll</p>
        </div>
      </div>
    </section>
  );
}
