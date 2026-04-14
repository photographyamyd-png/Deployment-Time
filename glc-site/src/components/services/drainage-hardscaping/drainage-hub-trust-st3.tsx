"use client";

import { Reveal, type RevealDelayClass } from "@/components/ui/reveal";
import { DRAINAGE_HUB_TRUST_BAR, DRAINAGE_HUB_TRUST_ST3 } from "@/content/drainage-hardscaping-page";

const DELAYS: (RevealDelayClass | undefined)[] = [
  undefined,
  "reveal--delay-1",
  "reveal--delay-2",
  "reveal--delay-3",
];

/** Step 1b — st3 trust rail + grid (text cells, not counters). */
export function DrainageHubTrustSt3() {
  return (
    <section id="stats" className="st3" aria-label={DRAINAGE_HUB_TRUST_ST3.ariaLabel}>
      <div className="st3__top-rail" aria-hidden />
      <div className="st3__inner">
        <div className="st3__side-label" aria-hidden>
          <span>{DRAINAGE_HUB_TRUST_ST3.sideLabel}</span>
        </div>
        <div className="st3__grid">
          {DRAINAGE_HUB_TRUST_BAR.map((cell, i) => (
            <Reveal
              key={cell.stat}
              className="stat-cell stat-cell--drain-trust"
              delayClass={DELAYS[i]}
            >
              <span className="stat-cell__num stat-cell__num--text">{cell.stat}</span>
              <span className="stat-cell__label">{cell.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
