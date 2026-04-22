"use client";

/**
 * VCC 3-pass audit (excavation hub hero — `.exc-hub` / `#excavation-hub-hero` only)
 *
 * 1) Layers: L1 base (--charcoal-deep), L2 blueprint SVG + eng grid, L3 diag stripe motif,
 *    L4 ghost watermark (Oswald keyword or logo), L5 photo + scrims, L6 copy/CTAs,
 *    L7 edge brackets + yellow rules + Source Code Pro spec labels on chips.
 * 2) Typography: three-act Oswald 200 / 600 / 700 on `.exc-hub__line--act*`;
 *    Barlow on dark body (`.exc-hub__*--vcc`); SCP on `.exc-hub__vert-label`, `.exc-hub__chip-spec`;
 *    body rgba caps ≤ 0.70 on dark.
 * 3) Differentiation: asymmetric service rail (featured first column); ghost index + bracket + rule
 *    on stat chips; vertical spec rail; chamfered glass chips — not a flat 50/50 template.
 *
 * Parallax rates (scroll): bg 0.3, blueprint 0.5, motif 0.7, ghost 0.6, photo 0.38; copy column not scroll-translated.
 */

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { SmartLink } from "@/components/ui/smart-link";
import { IconArrow } from "@/components/ui/icon-arrow";
import { HeroServiceIcon } from "@/components/sections/service-card-icon";
import { ROUTES } from "@/lib/routes";

const EASE_OUT = [0, 0, 0.2, 1] as const;

const DEFAULT_PANEL_IMAGE = "/images/hero-armour-stone-retaining-walls.png";

/**
 * Local shape only — mirrors the homepage hero payload without importing `HeroProps`
 * from `@/content/types` (isolation merge gate in excavation_hero_vcc_isolated.plan.md).
 */
export type ExcavationHubHeroProps = {
  eyebrow: string;
  title: {
    line1: string;
    line2: string;
    line3: string;
    emphasizeLine: 1 | 2 | 3;
  };
  subheadline?: string;
  lede: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats: Array<{ value: string; label: string }>;
  coverage: { label: string; tags: string[] };
  serviceBarSlugTitles: Array<{ slug: string; title: string }>;
  parallaxBackgroundImage?: string;
  ctaMicrocopy?: string;
  panelImage?: string;
  ghostWatermarkWord?: string;
};

/** VCC: headline motion ~600ms ease-out, stagger 100ms */
const LINE_VARIANT: Variants = {
  hidden: {
    clipPath: "inset(110% 0% -10% 0%)",
    opacity: 0,
    y: 20,
  },
  visible: (i: number) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    y: 0,
    transition: {
      clipPath: { duration: 0.6, delay: i * 0.1, ease: EASE_OUT },
      opacity: { duration: 0.01, delay: i * 0.1 },
      y: { duration: 0.6, delay: i * 0.1, ease: EASE_OUT },
    },
  }),
};

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay: 0.45 + i * 0.1, ease: EASE_OUT },
  }),
};

const PHOTO_VARIANT: Variants = {
  hidden: {
    opacity: 0,
    x: 56,
    clipPath: "polygon(14% 0%, 100% 0%, 100% 100%, 6% 100%)",
  },
  visible: {
    opacity: 1,
    x: 0,
    clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: {
      opacity: { duration: 0.1 },
      x: { duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
      clipPath: { duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
    },
  },
};

const CHIP_VARIANT: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.94 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: 0.85 + i * 0.1,
      ease: EASE_OUT,
    },
  }),
};

const TILE_VARIANT: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 1.05 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ChipBracket({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
    >
      <path
        d="M1 6V1H6"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M17 12V17H12"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function ExcavationHubHero(props: ExcavationHubHeroProps) {
  const {
    title,
    eyebrow,
    subheadline,
    lede,
    primaryCta,
    secondaryCta: secondaryCtaProp,
    stats,
    coverage,
    serviceBarSlugTitles,
    parallaxBackgroundImage,
    panelImage,
    ghostWatermarkWord,
    ctaMicrocopy,
  } = props;

  const secondaryCta = secondaryCtaProp;

  const isTelOrMail = (href: string) =>
    href.startsWith("tel:") || href.startsWith("mailto:");

  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const maxPx = prefersReducedMotion === true ? 0 : 110;
  const rawBg = useTransform(scrollYProgress, [0, 1], [0, maxPx * 0.3]);
  const rawTexture = useTransform(scrollYProgress, [0, 1], [0, maxPx * 0.5]);
  const rawMotif = useTransform(scrollYProgress, [0, 1], [0, maxPx * 0.7]);
  const rawGhost = useTransform(scrollYProgress, [0, 1], [0, maxPx * 0.6]);
  const rawPhoto = useTransform(scrollYProgress, [0, 1], [0, maxPx * 0.38]);

  const spring = { stiffness: 90, damping: 32 };
  const bgY = useSpring(rawBg, spring);
  const textureY = useSpring(rawTexture, spring);
  const motifY = useSpring(rawMotif, spring);
  const ghostY = useSpring(rawGhost, spring);
  const photoY = useSpring(rawPhoto, spring);

  const panelSrc = panelImage ?? DEFAULT_PANEL_IMAGE;

  const ledeMask = useTransform(
    scrollYProgress,
    [0, 0.18],
    [
      "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
      "linear-gradient(to bottom, black 0%, black 100%, transparent 100%)",
    ],
  );

  const lines: { text: string; lineNum: 1 | 2 | 3 }[] = [
    { text: title.line1, lineNum: 1 },
    { text: title.line2, lineNum: 2 },
    { text: title.line3, lineNum: 3 },
  ];

  return (
    <section
      id="excavation-hub-hero"
      ref={sectionRef}
      aria-label="Excavation hub hero"
      className="exc-hub"
    >
      {/* Layer 7: corner bracket motifs (edge-anchored) */}
      <div className="exc-hub__corner exc-hub__corner--tl" aria-hidden>
        <svg viewBox="0 0 120 120" fill="none" className="exc-hub__corner-svg">
          <path d="M0 40V0H40" stroke="var(--yellow-core)" strokeWidth="1.2" opacity="0.18" />
        </svg>
      </div>
      <div className="exc-hub__corner exc-hub__corner--br" aria-hidden>
        <svg viewBox="0 0 120 120" fill="none" className="exc-hub__corner-svg">
          <path d="M120 80V120H80" stroke="var(--yellow-core)" strokeWidth="1.2" opacity="0.18" />
        </svg>
      </div>

      <motion.div className="exc-hub__bg-plane" style={{ y: bgY }} aria-hidden>
        {parallaxBackgroundImage ? (
          <div className="exc-hub__bg-roll" aria-hidden>
            <div
              className="exc-hub__bg-photo exc-hub__bg-photo--image"
              style={{
                backgroundImage: `url('${parallaxBackgroundImage}')`,
              }}
            />
          </div>
        ) : (
          <div className="exc-hub__bg-photo" />
        )}
        <div className="exc-hub__scrim-radial" />
        <div className="exc-hub__scrim-left" />
      </motion.div>

      <motion.div className="exc-hub__structure-plane" style={{ y: textureY }} aria-hidden>
        <svg className="exc-hub__blueprint" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="598" height="598" stroke="white" strokeWidth="1.5" />
          <rect x="40" y="40" width="520" height="520" stroke="white" strokeWidth="0.5" strokeDasharray="3 9" />
          <line x1="300" y1="1" x2="300" y2="599" stroke="white" strokeWidth="0.5" />
          <line x1="1" y1="300" x2="599" y2="300" stroke="white" strokeWidth="0.5" />
          <circle cx="300" cy="300" r="140" stroke="white" strokeWidth="0.5" />
          <circle cx="300" cy="300" r="220" stroke="white" strokeWidth="0.5" strokeDasharray="2 10" />
          <line x1="80" y1="80" x2="520" y2="520" stroke="white" strokeWidth="0.3" strokeDasharray="4 12" />
          <line x1="520" y1="80" x2="80" y2="520" stroke="white" strokeWidth="0.3" strokeDasharray="4 12" />
        </svg>
        <div className="exc-hub__eng-grid" />
      </motion.div>

      <motion.div className="exc-hub__diag-stripe" style={{ y: motifY }} aria-hidden />

      <div className="exc-hub__canvas">
        <motion.div
          className="exc-hub__photo-panel"
          style={mounted ? { y: photoY } : {}}
          variants={PHOTO_VARIANT}
          initial="hidden"
          animate="visible"
          aria-hidden
        >
          <Image
            src={panelSrc}
            alt=""
            fill
            priority
            sizes="(max-width: 900px) 100vw, 58vw"
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
          <div className="exc-hub__photo-scrim" />

          <div className="exc-hub__chips" role="list" aria-label="Hero proof metrics">
            <div className="exc-hub__chips-stack">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="exc-hub__chip exc-hub__chip--stat"
                  variants={CHIP_VARIANT}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  role="listitem"
                >
                  <span className="exc-hub__chip-ghost-num" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ChipBracket className="exc-hub__chip-bracket" />
                  <span className="exc-hub__chip-spec">Field metric</span>
                  <span className="exc-hub__chip-num">{s.value}</span>
                  <span className="exc-hub__chip-label">{s.label}</span>
                </motion.div>
              ))}

              <motion.div
                className="exc-hub__chip exc-hub__chip--coverage"
                variants={CHIP_VARIANT}
                custom={stats.length}
                initial="hidden"
                animate="visible"
                role="listitem"
              >
                <span className="exc-hub__chip-ghost-num" aria-hidden>
                  {String(stats.length + 1).padStart(2, "0")}
                </span>
                <ChipBracket className="exc-hub__chip-bracket" />
                <span className="exc-hub__chip-spec">Service territory</span>
                <span className="exc-hub__chip-eyebrow">{coverage.label}</span>
                <div className="exc-hub__chip-tags">
                  {coverage.tags.map((t) => (
                    <span key={t} className="exc-hub__chip-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="exc-hub__content">
          <motion.div
            className="exc-hub__vert-label"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          >
            {eyebrow}
          </motion.div>

          <motion.div
            className={`exc-hub__ghost-mark${ghostWatermarkWord ? " exc-hub__ghost-mark--word" : ""}`}
            style={{ y: mounted ? ghostY : 0 }}
            aria-hidden
          >
            {ghostWatermarkWord ? (
              <span className="exc-hub__ghost-word-inner">{ghostWatermarkWord}</span>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element -- decorative watermark
              <img
                src="/images/glc-logo.png"
                alt=""
                width={360}
                height={360}
                className="exc-hub__ghost-mark-img"
                draggable={false}
                decoding="async"
              />
            )}
          </motion.div>

          <h1
            className="exc-hub__headline exc-hub__headline--vcc"
            aria-label={`${title.line1} ${title.line2} ${title.line3}`}
          >
            {lines.map(({ text, lineNum }) => (
              <span key={lineNum} className="exc-hub__line-overflow" aria-hidden>
                <motion.span
                  className={
                    lineNum === title.emphasizeLine
                      ? "exc-hub__line exc-hub__line--accent"
                      : lineNum === 1
                        ? "exc-hub__line exc-hub__line--act1"
                        : lineNum === 2
                          ? "exc-hub__line exc-hub__line--act2"
                          : "exc-hub__line exc-hub__line--act3"
                  }
                  variants={LINE_VARIANT}
                  custom={lineNum}
                  initial="hidden"
                  animate="visible"
                >
                  {text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            className="exc-hub__rule"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease: EASE_OUT }}
          />

          {subheadline ? (
            <motion.h2
              className="exc-hub__subheadline exc-hub__subheadline--vcc"
              variants={FADE_UP}
              custom={0}
              initial="hidden"
              animate="visible"
            >
              {subheadline}
            </motion.h2>
          ) : null}

          {(() => {
            const [ledeLead = lede, ledeBody] = lede.split(" — ");
            const brand = "Ground Level Contracting";
            const hasBrand = ledeLead.startsWith(brand);
            const leadRemainder = hasBrand ? ledeLead.slice(brand.length) : ledeLead;
            const ledeBodyTrimmed = ledeBody?.trimStart() ?? "";
            const ledeBodyFormatted =
              ledeBody && ledeBodyTrimmed.length > 0
                ? ledeBodyTrimmed.charAt(0).toUpperCase() + ledeBodyTrimmed.slice(1)
                : ledeBody;

            return (
              <motion.div
                className="exc-hub__lede-block"
                style={mounted ? { WebkitMaskImage: ledeMask, maskImage: ledeMask } : {}}
                variants={FADE_UP}
                custom={0}
                initial="hidden"
                animate="visible"
              >
                <p className="exc-hub__lede-lead exc-hub__lede-lead--vcc">
                  {hasBrand ? (
                    <>
                      <strong className="exc-hub__lede-brand">{brand}</strong>
                      {leadRemainder}
                    </>
                  ) : (
                    ledeLead
                  )}
                </p>
                {ledeBodyFormatted ? (
                  <p className="exc-hub__lede-body exc-hub__lede-body--vcc">{ledeBodyFormatted}</p>
                ) : null}
              </motion.div>
            );
          })()}

          <motion.div
            className="exc-hub__cta-stack"
            variants={FADE_UP}
            custom={1}
            initial="hidden"
            animate="visible"
          >
            <div className="exc-hub__cta-row">
              {isTelOrMail(primaryCta.href) ? (
                <a href={primaryCta.href} className="btn-primary">
                  {primaryCta.label}
                  <IconArrow />
                </a>
              ) : (
                <SmartLink href={primaryCta.href} className="btn-primary">
                  {primaryCta.label}
                  <IconArrow />
                </SmartLink>
              )}

              {secondaryCta ? (
                isTelOrMail(secondaryCta.href) ? (
                  <a href={secondaryCta.href} className="btn-hero-glass">
                    {secondaryCta.label}
                  </a>
                ) : (
                  <SmartLink href={secondaryCta.href} className="btn-hero-glass">
                    {secondaryCta.label}
                  </SmartLink>
                )
              ) : null}
            </div>
            {ctaMicrocopy ? (
              <p className="exc-hub__cta-microcopy exc-hub__cta-microcopy--vcc">{ctaMicrocopy}</p>
            ) : null}
          </motion.div>
        </div>
      </div>

      <div className="exc-hub__service-bar">
        {/*
         * Credentials live in the hub page marquee immediately below this section
         * (`.marquee-band` — approved-sections / homepage trust ticker DNA).
         */}
        <div className="exc-hub__service-inner exc-hub__service-inner--asymmetric">
          {serviceBarSlugTitles.map((s, i) => (
            <motion.div
              key={s.slug}
              className={
                i === 0
                  ? "exc-hub__service-tile-wrap exc-hub__service-tile-wrap--feature"
                  : "exc-hub__service-tile-wrap"
              }
              variants={TILE_VARIANT}
              custom={i}
              initial="hidden"
              animate="visible"
            >
              <SmartLink className="exc-hub__service-tile" href={ROUTES.service(s.slug)}>
                <HeroServiceIcon slug={s.slug} />
                <span className="exc-hub__service-label">
                  {i === 0 ? <span className="exc-hub__service-kicker">Primary line</span> : null}
                  {s.title}
                </span>
              </SmartLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
