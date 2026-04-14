"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import type { CoverageProps } from "@/content/types";

/** Dark-band coverage block — GLC tokens, 3-plane layout (see .cursorrules Part 4 / Part 5). */
export function CoverageSection(props: CoverageProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="coverage" className="coverage relative overflow-hidden" aria-labelledby="coverage-heading">
      <span aria-hidden className="coverage__fx-radial" />
      <span aria-hidden className="coverage__fx-topbar" />
      <div className="coverage__inner coverage__inner--sandbox">
        <div className="coverage__label-col">
          <div className="coverage__intro coverage__intro--sandbox">
            <span className="glc-motif-heading-rule coverage__band-rule" aria-hidden />
            <Reveal delayClass="reveal--delay-1">
              <h2 id="coverage-heading" className="coverage__heading">
                {props.headingBefore}<em>{props.headingEmphasis}</em>{props.headingAfter}
              </h2>
            </Reveal>
            <Reveal delayClass="reveal--delay-2">
              <p className="coverage__lede">
                Headquartered in Barrie with county-wide dispatch — no travel surcharges within Simcoe County.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="coverage__acc-col">
          <div className="glc-density-acc glc-density-acc--on-dark" id="coverage-coverage-acc">
            <button
              type="button"
              id="coverage-coverage-sum"
              className="glc-density-acc__trigger"
              aria-expanded={expanded}
              aria-controls="coverage-coverage-panel"
              aria-label="Full territory & market details. Opens full service territory narrative and market list."
              onClick={() => setExpanded((v) => !v)}
            >
              <span className="glc-density-acc__chev" aria-hidden />
              <span className="coverage__acc-h">Full territory & market details</span>
            </button>
            <div
              id="coverage-coverage-panel"
              role="region"
              aria-labelledby="coverage-coverage-sum"
              className="glc-density-acc__panel-outer"
              style={{ overflow: "hidden", maxHeight: expanded ? "1200px" : 0, transition: "max-height 320ms var(--ease-expo)" }}
            >
              <div className="glc-density-acc__panel-inner">
                <p className="coverage__panel-body">{props.body}</p>
                <div className="coverage__areas" role="list">
                  {props.areas.map((a) => (
                    <div key={a.name} className="coverage__area" role="listitem">
                      <div className="coverage__area-dot" aria-hidden />
                      <div className="coverage__area-text">
                        <div className="coverage__area-name">{a.name}</div>
                        <div className="coverage__area-sub">{a.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="coverage__band-cta">
        <a href="tel:+17056194902" className="glc-snow-btn glc-snow-btn--primary">
          Request a Quote
        </a>
      </div>
    </section>
  );
}
