"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { IconArrow } from "@/components/ui/icon-arrow";
import { SmartLink } from "@/components/ui/smart-link";
import type { AboutProps } from "@/content/types";
import { ROUTES } from "@/lib/routes";

const EASE = [0.22, 1, 0.36, 1] as const;

type AboutSectionProps = AboutProps & {
  htmlSectionId?: string;
  headingDomId?: string;
};

export function AboutSection(props: AboutSectionProps) {
  const { htmlSectionId = "about", headingDomId = "about-heading", ...rest } = props;
  const homeCompact = Boolean(rest.homeTeaser);
  const bodyText = rest.homeTeaser ?? rest.body;

  return (
    <section id={htmlSectionId} aria-labelledby={headingDomId}>
      {/* Ghost GLC watermark — right-side decorative */}
      <span className="ab3__wm" aria-hidden>GLC</span>

      <div className="ab3__layout">

        {/* ══ LEFT — editorial copy column ══ */}
        <div className="ab3__copy">

          {/* Eyebrow + since marker */}
          <Reveal className="ab3__top-row">
            <span className="eyebrow">{rest.eyebrow}</span>
            <span className="ab3__since" aria-label={`${rest.mediaStat.value} ${rest.mediaStat.label}`}>
              {rest.mediaStat.value}&thinsp;
              <span>{rest.mediaStat.label}</span>
            </span>
          </Reveal>

          {/* Heading — large stacked display */}
          <Reveal delayClass="reveal--delay-1" className="ab3__heading-wrap">
            <h2 id={headingDomId} className="ab3__heading">
              {rest.headingBefore}
              <em className="ab3__heading-em">{rest.headingAccent}</em>
              {rest.headingAfter}
            </h2>
            <span className="ab3__heading-rule" aria-hidden />
          </Reveal>

          {/* Body — full copy on /about/; `homeTeaser` on homepage only */}
          <Reveal delayClass="reveal--delay-2">
            <p className="ab3__body">{bodyText}</p>
          </Reveal>

          {!homeCompact && rest.whoWeServe ? (
            <Reveal delayClass="reveal--delay-2" className="ab3__who-serve">
              <p className="ab3__who-serve-title">{rest.whoWeServe.title}</p>
              <p className="ab3__who-serve-intro">{rest.whoWeServe.intro}</p>
              <ul className="ab3__who-serve-chips" aria-label="Who we work with">
                {rest.whoWeServe.chips.map((c) => (
                  <li key={c} className="ab3__who-serve-chip">
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}

          {!homeCompact ? (
            <Reveal delayClass="reveal--delay-3" className="ab3__creds">
              {rest.credentials.map((c, i) => (
                <div key={c.title} className="ab3__cred">
                  <div className="ab3__cred-idx" aria-hidden>0{i + 1}</div>
                  <div className="ab3__cred-body">
                    <div className="ab3__cred-title">{c.title}</div>
                    <div className="ab3__cred-sub">{c.sub}</div>
                  </div>
                </div>
              ))}
            </Reveal>
          ) : null}

          <Reveal delayClass={homeCompact ? "reveal--delay-3" : "reveal--delay-4"}>
            {homeCompact ? (
              <div className="ab3__cta-row">
                <a href={rest.cta.href} className="btn-primary">
                  {rest.cta.label}
                  <IconArrow />
                </a>
                <SmartLink href={ROUTES.about} className="btn-ghost-dark">
                  About Ground Level
                  <IconArrow />
                </SmartLink>
              </div>
            ) : (
              <a href={rest.cta.href} className="btn-primary">
                {rest.cta.label}
                <IconArrow />
              </a>
            )}
          </Reveal>
        </div>

        {/* ══ RIGHT — dark photo panel ══ */}
        <div className="ab3__media">
          {/* Yellow badge — punches off the left edge */}
          <div className="ab3__badge" aria-hidden>
            <span>{rest.badgeText}</span>
          </div>

          {/* Photo fill */}
          <div className="ab3__photo" role="img" aria-label="Ground Level Contracting crew on an excavation site" />

          {/* Floating stat chip */}
          <motion.div
            className="ab3__chip"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            aria-hidden
          >
            <div className="ab3__chip-num">{rest.mediaStat.value}</div>
            <div className="ab3__chip-lbl">{rest.mediaStat.label}</div>
          </motion.div>

          {/* Bottom corner accent */}
          <div className="ab3__corner-mark" aria-hidden />
        </div>

      </div>
    </section>
  );
}
