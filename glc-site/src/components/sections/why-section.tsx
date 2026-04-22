"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { IconArrow } from "@/components/ui/icon-arrow";
import type { WhyProps } from "@/content/types";

const EASE = [0.22, 1, 0.36, 1] as const;

type WhySectionProps = WhyProps & {
  htmlSectionId?: string;
  headingDomId?: string;
};

export function WhySection(props: WhySectionProps) {
  const { htmlSectionId = "why", headingDomId = "why-heading", ...rest } = props;
  const tags = ["Logistics", "Expertise", "Coordination", "Accountability"];

  return (
    <section
      id={htmlSectionId}
      className="why-v3-shell glc-motif-a6-watermark"
      aria-labelledby={headingDomId}
    >
      <span className="glc-motif-b2 why-v3__motif-b2" aria-hidden />
      <span className="glc-motif-b4 why-v3__motif-b4" aria-hidden />
      <div className="why-v3__container">
        <div className="why-v3__header">
          <Reveal className="eyebrow eyebrow--dark why-v3__eyebrow">{rest.eyebrow}</Reveal>
          <div className="why-v3__header-grid">
            <Reveal delayClass="reveal--delay-1">
              <h2 id={headingDomId} className="why-v3__heading">
                {rest.headingBefore}
                <em>{rest.headingEmphasis}</em>
                {rest.headingAfter}
              </h2>
            </Reveal>
            <Reveal delayClass="reveal--delay-2">
              <p className="why-v3__header-body">{rest.body}</p>
            </Reveal>
          </div>
        </div>
        <div className="why-v3__body-grid">
          <div className="why-v3__feature">
            <Reveal>
              <figure className="why-v3__media">
                <Image
                  src="/images/excavation-and-foundations-orillia-barrie.png"
                  alt="Ground Level Contracting heavy equipment on a Simcoe County commercial site"
                  fill
                  className="why-v3__media-img"
                  sizes="(max-width: 980px) 100vw, 42vw"
                />
                <figcaption className="why-v3__media-cap">
                  Commercial-grade equipment for unstable ground and tight schedules.
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delayClass="reveal--delay-1">
              <div className="why-v3__proof-chip" aria-label="Proof point">
                <span className="why-v3__chip-label">{rest.floatChip.line1}</span>
                <strong className="why-v3__chip-value">{rest.floatChip.line2}</strong>
              </div>
            </Reveal>
            <Reveal delayClass="reveal--delay-2">
              <a href={rest.cta.href} className="btn-primary">
                {rest.cta.label}
                <IconArrow />
              </a>
            </Reveal>
          </div>
          <div className="why-v3__reasons-col">
            <div className="why-v3__rail" aria-hidden />
            <div className="why-v3__rows">
              {rest.reasons.map((r, i) => (
                <motion.div
                  key={r.num}
                  className="why-v3__row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
                >
                  <div className="why-v3__row-bg" aria-hidden />
                  <div className="why-v3__num" aria-hidden>{r.num}</div>
                  <div className="why-v3__row-divide" aria-hidden />
                  <div className="why-v3__row-body">
                    <div className="why-v3__row-top">
                      <h3 className="why-v3__title">{r.title}</h3>
                      <span className="why-v3__tag">{tags[i] ?? "Field"}</span>
                    </div>
                    <p className="why-v3__text">{r.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="why-v3__proof-bar">
              <div className="why-v3__proof-item">
                <span className="why-v3__proof-value">24-Hr</span>
                <span className="why-v3__proof-label">Site Mobilization</span>
              </div>
              <div className="why-v3__proof-item">
                <span className="why-v3__proof-value">100%</span>
                <span className="why-v3__proof-label">Simcoe Coverage</span>
              </div>
              <div className="why-v3__proof-item">
                <span className="why-v3__proof-value">Full Scope</span>
                <span className="why-v3__proof-label">Single Contractor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
