"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import {
  DrainageDenseText,
  DrainageFragmentedH2,
} from "@/components/services/drainage-hardscaping/drainage-typography";
import {
  DRAINAGE_HUB_PROCESS_EYEBROW,
  DRAINAGE_HUB_PROCESS_STEPS,
  DRAINAGE_HUB_WHY_EYEBROW,
  DRAINAGE_HUB_WHY_H2,
  DRAINAGE_HUB_WHY_IMAGE,
  DRAINAGE_HUB_WHY_IMAGE_ALT,
  DRAINAGE_HUB_WHY_POINTS,
} from "@/content/drainage-hardscaping-page";

function parseProcessStep(title: string, index: number): { num: string; title: string } {
  const m = title.match(/^Step\s*(\d+)\s*:\s*(.+)$/i);
  if (m) {
    return { num: m[1], title: m[2] };
  }
  return { num: String(index + 1), title };
}

/** Step 5 — proc3__layout: Why (left) + process timeline (right) + framed media. */
export function DrainageHubWhyProcess() {
  return (
    <section
      id="why-process"
      className="glc-drain-hub__jk dse"
      aria-label="Why choose us and our process"
    >
      <span className="glc-drain-hub__b-slot" aria-hidden />
      <div className="proc3__layout glc-drain-hub__proc3">
        <div className="proc3__left-panel">
          <div className="proc3__left-accent" aria-hidden />

          <Reveal delayClass="reveal--delay-1">
            <div className="eyebrow eyebrow--on-dark proc3__eyebrow">{DRAINAGE_HUB_WHY_EYEBROW}</div>
          </Reveal>

          <Reveal delayClass="reveal--delay-2">
            <DrainageFragmentedH2 text={DRAINAGE_HUB_WHY_H2} className="proc3__heading glc-drain-hub__proc3-h2" />
          </Reveal>

          <div className="about__divider glc-drain-hub__proc3-rule" />

          <div className="glc-drain-hub__why-points">
            {DRAINAGE_HUB_WHY_POINTS.map((pt) => (
              <Reveal key={pt.title} className="glc-drain-hub__why-point" delayClass="reveal--delay-2">
                <p className="glc-drain-hub__why-point-title">
                  <strong>{pt.title}</strong>
                </p>
                <DrainageDenseText
                  text={pt.body}
                  ledeClassName="glc-drain-hub__why-point-body"
                  innerClassName="glc-drain-hub__why-point-body glc-drain-hub__why-point-body--inner"
                />
              </Reveal>
            ))}
          </div>

          <div className="about__media service-cap-split__media glc-drain-hub__jk-media">
            <div className="service-cap-split__media-slab" aria-hidden />
            <div className="about__media-shell glc-drain-hub__media-shell--fill">
              <Image
                src={DRAINAGE_HUB_WHY_IMAGE}
                alt={DRAINAGE_HUB_WHY_IMAGE_ALT}
                fill
                className="glc-drain-hub__media-fill"
                sizes="(max-width: 1024px) 100vw, 38vw"
              />
            </div>
          </div>

          <div className="proc3__count-mark" aria-hidden>
            0{DRAINAGE_HUB_PROCESS_STEPS.length}
          </div>
        </div>

        <div className="proc3__steps-panel">
          <div className="proc3__thread" aria-hidden />
          <Reveal delayClass="reveal--delay-1">
            <div className="glc-drain-hub__process-band-eyebrow eyebrow eyebrow--dark">
              {DRAINAGE_HUB_PROCESS_EYEBROW}
            </div>
          </Reveal>
          {DRAINAGE_HUB_PROCESS_STEPS.map((step, i) => {
            const { num, title } = parseProcessStep(step.title, i);
            return (
              <div key={step.title} className="proc3__step">
                <div className="proc3__node" aria-hidden>
                  <span>{num}</span>
                </div>
                <div className="proc3__step-content">
                  <div className="proc3__step-label">Step {num}</div>
                  <h3 className="proc3__step-title">{title}</h3>
                  <DrainageDenseText
                    text={step.body}
                    ledeClassName="proc3__step-desc"
                    innerClassName="proc3__step-desc glc-drain-hub__proc-step-desc--more"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
