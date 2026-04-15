"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { DrainageFragmentedH2 } from "@/components/services/drainage-hardscaping/drainage-typography";
import {
  DRAINAGE_HUB_PROCESS_EYEBROW,
  DRAINAGE_HUB_PROCESS_STEPS,
  DRAINAGE_HUB_WHY_EYEBROW,
  DRAINAGE_HUB_WHY_H2,
  DRAINAGE_HUB_WHY_FIG_CAPTION,
  DRAINAGE_HUB_WHY_IMAGE,
  DRAINAGE_HUB_WHY_IMAGE_ALT,
  DRAINAGE_HUB_WHY_POINTS,
} from "@/content/drainage-hardscaping-page";
import { useIsClient } from "@/lib/use-is-client";

function parseProcessStep(title: string, index: number): { num: string; title: string } {
  const m = title.match(/^Step\s*(\d+)\s*:\s*(.+)$/i);
  if (m) {
    return { num: m[1], title: m[2] };
  }
  return { num: String(index + 1), title };
}

/**
 * Compact proc3-style band: left = headline + native disclosure stack (why);
 * right = capped hero image + process steps as disclosures (HOMEPAGE_SECTION_CLONE_SPEC §10 density).
 */
export function DrainageHubWhyProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const mounted = useIsClient();
  const reduceMotion = useReducedMotion();
  const [whyOpen, setWhyOpen] = useState<number | null>(0);
  const [procOpen, setProcOpen] = useState<number | null>(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rawHeroY = useTransform(scrollYProgress, [0, 1], ["-4%", "6%"]);
  const heroY = useSpring(rawHeroY, { stiffness: 80, damping: 30 });

  return (
    <section
      ref={sectionRef}
      id="why-process"
      className="glc-drain-hub__jk dse"
      aria-label="Why choose us and our process"
    >
      <span className="glc-drain-hub__b-slot" aria-hidden />
      <div className="cta3__diag glc-drain-hub__proc3-diag" aria-hidden />
      <div className="proc3__layout glc-drain-hub__proc3 glc-drain-hub__proc3--compact">
        <div className="proc3__left-panel glc-drain-hub__proc3-left--compact">
          <div className="proc3__left-accent" aria-hidden />

          <Reveal delayClass="reveal--delay-1">
            <div className="eyebrow eyebrow--on-dark proc3__eyebrow">{DRAINAGE_HUB_WHY_EYEBROW}</div>
          </Reveal>

          <Reveal delayClass="reveal--delay-2">
            <DrainageFragmentedH2 text={DRAINAGE_HUB_WHY_H2} className="proc3__heading glc-drain-hub__proc3-h2" />
          </Reveal>

          <div className="about__divider glc-drain-hub__proc3-rule" />

          <div className="glc-drain-hub__why-acc-stack">
            {DRAINAGE_HUB_WHY_POINTS.map((pt, i) => {
              const num = String(i + 1).padStart(2, "0");
              return (
                <details
                  key={pt.title}
                  className="glc-drain-hub__why-acc"
                  open={whyOpen === i}
                  onToggle={(e) => {
                    const next = e.currentTarget.open;
                    setWhyOpen(next ? i : null);
                  }}
                >
                  <summary className="glc-drain-hub__why-acc-summary">
                    <span className="glc-drain-hub__why-acc-idx" aria-hidden>
                      {num}
                    </span>
                    <span className="glc-drain-hub__why-acc-title">{pt.title}</span>
                  </summary>
                  <div className="glc-drain-hub__why-acc-panel">
                    <p className="glc-drain-hub__why-acc-body">{pt.body}</p>
                  </div>
                </details>
              );
            })}
          </div>
        </div>

        <div className="proc3__steps-panel glc-drain-hub__proc3-steps--compact">
          <figure className="glc-drain-hub__proc3-hero-fig">
            <div className="glc-drain-hub__proc3-hero-frame">
              <motion.div
                className="glc-drain-hub__proc3-hero-parallax"
                style={mounted && !reduceMotion ? { y: heroY } : undefined}
              >
                <Image
                  src={DRAINAGE_HUB_WHY_IMAGE}
                  alt={DRAINAGE_HUB_WHY_IMAGE_ALT}
                  fill
                  className="glc-drain-hub__proc3-hero-img glc-drain-hub__proc3-hero-img--parallax"
                  sizes="(max-width: 1024px) 100vw, 62vw"
                />
                <span className="glc-drain-hub__proc3-hero-scrim" aria-hidden />
              </motion.div>
            </div>
            <figcaption className="glc-drain-hub__proc3-hero-cap">{DRAINAGE_HUB_WHY_FIG_CAPTION}</figcaption>
          </figure>

          <Reveal delayClass="reveal--delay-1">
            <div className="glc-drain-hub__process-band-eyebrow eyebrow eyebrow--dark">
              {DRAINAGE_HUB_PROCESS_EYEBROW}
            </div>
          </Reveal>

          <p className="glc-drain-hub__proc3-steps-kicker">
            <span className="glc-drain-hub__proc3-steps-count">0{DRAINAGE_HUB_PROCESS_STEPS.length}</span> steps — expand each for scope detail
          </p>

          <div className="glc-drain-hub__proc-acc-stack">
            {DRAINAGE_HUB_PROCESS_STEPS.map((step, i) => {
              const { num, title } = parseProcessStep(step.title, i);
              return (
                <details
                  key={step.title}
                  className="glc-drain-hub__proc-step-acc"
                  open={procOpen === i}
                  onToggle={(e) => {
                    const next = e.currentTarget.open;
                    setProcOpen(next ? i : null);
                  }}
                >
                  <summary className="glc-drain-hub__proc-step-acc-summary">
                    <span className="glc-drain-hub__proc-step-acc-node" aria-hidden>
                      {num}
                    </span>
                    <span className="glc-drain-hub__proc-step-acc-titles">
                      <span className="glc-drain-hub__proc-step-acc-label">Step {num}</span>
                      <span className="glc-drain-hub__proc-step-acc-title">{title}</span>
                    </span>
                  </summary>
                  <div className="glc-drain-hub__proc-step-acc-panel">
                    <p className="glc-drain-hub__proc-step-acc-body">{step.body}</p>
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
