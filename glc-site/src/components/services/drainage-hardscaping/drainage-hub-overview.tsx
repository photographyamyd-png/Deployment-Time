"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { IconArrow } from "@/components/ui/icon-arrow";
import { SmartLink } from "@/components/ui/smart-link";
import {
  DRAINAGE_HUB_HERO,
  DRAINAGE_HUB_OVERVIEW_BADGE,
  DRAINAGE_HUB_OVERVIEW_CREDENTIALS,
  DRAINAGE_HUB_OVERVIEW_EYEBROW,
  DRAINAGE_HUB_OVERVIEW_HEADING_ACCENT,
  DRAINAGE_HUB_OVERVIEW_HEADING_AFTER,
  DRAINAGE_HUB_OVERVIEW_HEADING_BEFORE,
  DRAINAGE_HUB_OVERVIEW_IMAGE,
  DRAINAGE_HUB_OVERVIEW_IMAGE_ALT,
  DRAINAGE_HUB_OVERVIEW_MEDIA_STAT,
  DRAINAGE_HUB_OVERVIEW_PARAS,
} from "@/content/drainage-hardscaping-page";
import { splitFirstTwoSentences } from "@/lib/copy-density";
import { ROUTES } from "@/lib/routes";

const EASE = [0.22, 1, 0.36, 1] as const;

const READMORE_SUMMARY = "Technical depth & field notes";

/**
 * Drainage hub overview — HOMEPAGE_SECTION_CLONE_SPEC §7 (`ab3` editorial split):
 * watermark, 55/45 layout, eyebrow + since, stacked H2 + rule, body, 2×2 creds,
 * primary CTA + arrow, media badge / photo / chip / corner mark, Reveal + chip motion.
 */
export function DrainageHubOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();
  const [firstPara, ...otherParas] = DRAINAGE_HUB_OVERVIEW_PARAS;
  const { lead, remainder } = splitFirstTwoSentences(firstPara);
  const readmoreParas = remainder ? [remainder, ...otherParas] : [...otherParas];

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rawImgY = useTransform(scrollYProgress, [0, 1], ["-5%", "8%"]);
  const imgY = useSpring(rawImgY, { stiffness: 75, damping: 28 });

  return (
    <section
      ref={sectionRef}
      id="overview"
      className="glc-drain-hub__overview"
      aria-labelledby="overview-heading"
    >
      <span className="ab3__wm" aria-hidden>
        GLC
      </span>

      <div className="ab3__layout">
        <div className="ab3__copy">
          <Reveal className="ab3__top-row">
            <span className="eyebrow">{DRAINAGE_HUB_OVERVIEW_EYEBROW}</span>
            <span
              className="ab3__since"
              aria-label={`${DRAINAGE_HUB_OVERVIEW_MEDIA_STAT.value} ${DRAINAGE_HUB_OVERVIEW_MEDIA_STAT.label}`}
            >
              {DRAINAGE_HUB_OVERVIEW_MEDIA_STAT.value}&thinsp;
              <span>{DRAINAGE_HUB_OVERVIEW_MEDIA_STAT.label}</span>
            </span>
          </Reveal>

          <Reveal delayClass="reveal--delay-1" className="ab3__heading-wrap">
            <h2 id="overview-heading" className="ab3__heading">
              {DRAINAGE_HUB_OVERVIEW_HEADING_BEFORE}
              <em className="ab3__heading-em">{DRAINAGE_HUB_OVERVIEW_HEADING_ACCENT}</em>
              {DRAINAGE_HUB_OVERVIEW_HEADING_AFTER}
            </h2>
            <span className="ab3__heading-rule" aria-hidden />
          </Reveal>

          <Reveal delayClass="reveal--delay-2">
            <p className="ab3__body">{lead}</p>
          </Reveal>

          {readmoreParas.length > 0 ? (
            <Reveal delayClass="reveal--delay-3">
              <details className="service-cap-readmore glc-drain-hub__readmore">
                <summary>{READMORE_SUMMARY}</summary>
                <div className="service-cap-readmore__inner glc-drain-hub__readmore-inner">
                  {readmoreParas.map((p, i) => (
                    <p key={`overview-readmore-${i}`}>{p}</p>
                  ))}
                </div>
              </details>
            </Reveal>
          ) : null}

          <Reveal delayClass="reveal--delay-4" className="ab3__creds">
            {DRAINAGE_HUB_OVERVIEW_CREDENTIALS.map((c, i) => (
              <div key={c.title} className="ab3__cred">
                <div className="ab3__cred-idx" aria-hidden>0{i + 1}</div>
                <div className="ab3__cred-body">
                  <div className="ab3__cred-title">{c.title}</div>
                  <div className="ab3__cred-sub">{c.sub}</div>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delayClass="reveal--delay-5">
            <SmartLink href={ROUTES.contact} className="btn-primary">
              {DRAINAGE_HUB_HERO.primaryCta}
              <IconArrow />
            </SmartLink>
          </Reveal>
        </div>

        <div className="ab3__media">
          <div className="ab3__badge" aria-hidden>
            <span>{DRAINAGE_HUB_OVERVIEW_BADGE}</span>
          </div>

          <div
            className="ab3__photo ab3__photo--has-img"
            role="img"
            aria-label={DRAINAGE_HUB_OVERVIEW_IMAGE_ALT}
          >
            <motion.div
              className="glc-drain-hub__ab3-photo-parallax"
              style={mounted && !reduceMotion ? { y: imgY } : undefined}
            >
              <Image
                src={DRAINAGE_HUB_OVERVIEW_IMAGE}
                alt=""
                fill
                className="ab3__photo-img glc-drain-hub__ab3-photo-img--parallax"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <span className="glc-drain-hub__ab3-photo-scrim" aria-hidden />
            </motion.div>
          </div>

          <motion.div
            className="ab3__chip"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            aria-hidden
          >
            <div className="ab3__chip-num">{DRAINAGE_HUB_OVERVIEW_MEDIA_STAT.value}</div>
            <div className="ab3__chip-lbl">{DRAINAGE_HUB_OVERVIEW_MEDIA_STAT.label}</div>
          </motion.div>

          <div className="ab3__corner-mark" aria-hidden />
        </div>
      </div>
    </section>
  );
}
