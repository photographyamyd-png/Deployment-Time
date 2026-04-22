"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type Variants,
} from "framer-motion";
import { SmartLink } from "@/components/ui/smart-link";
import { MotionSmartLink } from "@/components/ui/motion-smart-link";
import { IconArrow } from "@/components/ui/icon-arrow";
import { HeroServiceIcon } from "@/components/sections/service-card-icon";
import { useSandboxGpuSafe } from "@/components/sandbox/sandbox-page-shell";
import {
  DRAINAGE_HUB_HERO,
  DRAINAGE_HUB_HERO_IMAGE,
  DRAINAGE_HUB_TRUST_BAR,
} from "@/content/drainage-hardscaping-page";
import {
  FADE_UP_GPU_SAFE,
  LINE_VARIANT_GPU_SAFE,
  PHOTO_PANEL_GPU_SAFE,
} from "@/lib/motion-variants-gpu-safe";
import { ROUTES } from "@/lib/routes";
import type { MegaMenuCard, SiteConfig } from "@/content/types";

const EASE = [0.22, 1, 0.36, 1] as const;

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
      clipPath: { duration: 0.9, delay: 0.15 + i * 0.12, ease: EASE },
      opacity: { duration: 0.01, delay: 0.15 + i * 0.12 },
      y: { duration: 0.9, delay: 0.15 + i * 0.12, ease: EASE },
    },
  }),
};

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(5px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay: 0.55 + i * 0.1, ease: EASE },
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
      x: { duration: 1.1, delay: 0.2, ease: EASE },
      clipPath: { duration: 1.1, delay: 0.2, ease: EASE },
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
      type: "spring" as const,
      stiffness: 260,
      damping: 22,
      delay: 0.9 + i * 0.14,
    },
  }),
};

const TILE_VARIANT: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 1.1 + i * 0.07, ease: EASE },
  }),
};

/** Mirrors homepage `HeroSection` hero-v2 stack, motion, chips, service bar, and CTA affordances. */
const DRAINAGE_HERO_CHIP_STATS = [
  { value: "Specialists", label: DRAINAGE_HUB_TRUST_BAR[0]?.label ?? "Drainage & hardscaping" },
  { value: "9+", label: DRAINAGE_HUB_TRUST_BAR[1]?.label ?? "Communities served" },
] as const;

const DRAINAGE_HERO_COVERAGE = {
  label: "Service coverage",
  tags: ["Barrie", "Orillia", "Wasaga Beach", "Innisfil", "Simcoe County"],
} as const;

type Props = {
  site: SiteConfig;
  megaCards: MegaMenuCard[];
};

/** Three lines so `.hero-v2__headline` nth-child scales match the homepage hero. */
function drainageHubHeroTitleLines(full: string): { lines: { text: string; lineNum: 1 | 2 | 3 }[]; emphasizeLine: 1 | 2 | 3 } {
  const parts = full.split(" Serving ");
  const head = parts[0]?.trim() ?? full;
  const geoRaw = parts[1]?.trim();
  const suffix = "Contractors";
  if (geoRaw && head.endsWith(suffix)) {
    const lead = head.slice(0, head.length - suffix.length).trim();
    return {
      lines: [
        { text: lead, lineNum: 1 },
        { text: suffix, lineNum: 2 },
        { text: `Serving ${geoRaw}`, lineNum: 3 },
      ],
      emphasizeLine: 2,
    };
  }
  if (geoRaw) {
    return {
      lines: [
        { text: head, lineNum: 1 },
        { text: `Serving ${geoRaw}`, lineNum: 2 },
      ],
      emphasizeLine: 2,
    };
  }
  return { lines: [{ text: full, lineNum: 1 }], emphasizeLine: 1 };
}

export function DrainageHubHeroV2({ site, megaCards }: Props) {
  const telHref = site.telephone.startsWith("tel:") ? site.telephone : `tel:${site.telephone}`;
  const h1Full = DRAINAGE_HUB_HERO.h1;
  const { lines: titleLines, emphasizeLine } = drainageHubHeroTitleLines(h1Full);
  const sandboxGpu = useSandboxGpuSafe();

  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const rawBgY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const rawPhotoY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const rawTextY = useTransform(scrollYProgress, [0, 1], ["0%", "7%"]);
  const bgY = useSpring(rawBgY, { stiffness: 80, damping: 30 });
  const photoY = useSpring(rawPhotoY, { stiffness: 80, damping: 30 });
  const textY = useSpring(rawTextY, { stiffness: 80, damping: 30 });

  const ledeMask = useTransform(
    scrollYProgress,
    [0, 0.18],
    [
      "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
      "linear-gradient(to bottom, black 0%, black 100%, transparent 100%)",
    ],
  );

  const serviceBarSlugTitles = megaCards.map((c) => ({ slug: c.slug, title: c.title }));

  return (
    <section
      id="drainage-hub-hero"
      ref={sectionRef}
      className="hero-v2 glc-drain-hub__hero-v2"
      aria-labelledby="drainage-hub-hero-title"
    >
      <div className="hero-v2__canvas">
        <motion.div
          className="hero-v2__photo-panel"
          style={mounted && !sandboxGpu ? { y: photoY } : {}}
          variants={sandboxGpu ? PHOTO_PANEL_GPU_SAFE : PHOTO_VARIANT}
          initial="hidden"
          animate="visible"
          aria-hidden
        >
          <Image
            src={DRAINAGE_HUB_HERO_IMAGE}
            alt={DRAINAGE_HUB_HERO.imageAlt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 58vw"
            style={{ objectFit: "cover", objectPosition: "center 32%" }}
          />
          <div className="hero-v2__photo-scrim" />

          <div className="hero-v2__chips">
            {DRAINAGE_HERO_CHIP_STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="hero-v2__chip"
                variants={CHIP_VARIANT}
                custom={i}
                initial="hidden"
                animate="visible"
              >
                <span className="hero-v2__chip-num">{s.value}</span>
                <span className="hero-v2__chip-label">{s.label}</span>
              </motion.div>
            ))}
            <motion.div
              className="hero-v2__chip hero-v2__chip--coverage"
              variants={CHIP_VARIANT}
              custom={2}
              initial="hidden"
              animate="visible"
            >
              <span className="hero-v2__chip-eyebrow">{DRAINAGE_HERO_COVERAGE.label}</span>
              <div className="hero-v2__chip-tags">
                {DRAINAGE_HERO_COVERAGE.tags.map((t) => (
                  <span key={t} className="hero-v2__chip-tag">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="hero-v2__content"
          style={mounted && !sandboxGpu ? { y: textY } : {}}
        >
          <motion.div
            className="hero-v2__vert-label"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          >
            {DRAINAGE_HUB_HERO.vertLabel}
          </motion.div>

          <div className="hero-v2__ghost-mark" aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element -- decorative watermark; matches homepage hero */}
            <img
              src="/images/glc-logo.png"
              alt=""
              width={360}
              height={360}
              className="hero-v2__ghost-mark-img"
              draggable={false}
              decoding="async"
            />
          </div>

          <p className="glc-drain-hub__hero-breadcrumb">
            <SmartLink href={ROUTES.home}>Home</SmartLink>
            {" · "}
            <SmartLink href={ROUTES.services}>Services</SmartLink>
            {" · "}
            <span>{DRAINAGE_HUB_HERO.breadcrumbCurrent}</span>
          </p>

          <h1
            id="drainage-hub-hero-title"
            className="hero-v2__headline"
            aria-label={h1Full}
            data-glc-hub-h1-lines={titleLines.length}
          >
            {titleLines.map(({ text, lineNum }) => (
              <span key={lineNum} className="hero-v2__line-overflow" aria-hidden>
                <motion.span
                  className={`hero-v2__line${lineNum === emphasizeLine ? " hero-v2__line--accent" : ""}`}
                  variants={sandboxGpu ? LINE_VARIANT_GPU_SAFE : LINE_VARIANT}
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
            className="hero-v2__rule"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />

          {(() => {
            const lede = DRAINAGE_HUB_HERO.subhead;
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
                className="hero-v2__lede-block"
                style={
                  mounted && !sandboxGpu
                    ? { WebkitMaskImage: ledeMask, maskImage: ledeMask }
                    : {}
                }
                variants={sandboxGpu ? FADE_UP_GPU_SAFE : FADE_UP}
                custom={0}
                initial="hidden"
                animate="visible"
              >
                <p className="hero-v2__lede-lead">
                  {hasBrand ? (
                    <>
                      <strong className="hero-v2__lede-brand">{brand}</strong>
                      {leadRemainder}
                    </>
                  ) : (
                    ledeLead
                  )}
                </p>
                {ledeBodyFormatted ? <p className="hero-v2__lede-body">{ledeBodyFormatted}</p> : null}
              </motion.div>
            );
          })()}

          <motion.div
            className="hero-v2__cta-row glc-drain-hub__hero-cta-row"
            variants={sandboxGpu ? FADE_UP_GPU_SAFE : FADE_UP}
            custom={1}
            initial="hidden"
            animate="visible"
          >
            <MotionSmartLink
              href={ROUTES.contact}
              className="btn-primary"
              whileHover={{ scale: 1.025, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
            >
              {DRAINAGE_HUB_HERO.primaryCta}
              <IconArrow />
            </MotionSmartLink>

            <MotionSmartLink
              href={ROUTES.contact}
              className="btn-hero-glass"
              whileHover={{ scale: 1.025, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
            >
              {DRAINAGE_HUB_HERO.secondaryCta}
            </MotionSmartLink>

            <motion.a
              href={telHref}
              className="btn-ghost"
              whileHover={{ scale: 1.025, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
            >
              {DRAINAGE_HUB_HERO.tertiaryCtaPrefix} {site.telephoneDisplay}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero-v2__bg-plane"
        style={sandboxGpu ? undefined : { y: bgY }}
        aria-hidden
      >
        <div
          className={`hero-v2__bg-roll${sandboxGpu ? " hero-v2__bg-roll--static" : ""}`}
          aria-hidden
        >
          <div
            className="hero-v2__bg-photo hero-v2__bg-photo--image"
            style={{ backgroundImage: `url('${DRAINAGE_HUB_HERO_IMAGE}')` }}
          />
        </div>
        <div className="hero-v2__scrim-radial" />
        <div className="hero-v2__scrim-left" />
      </motion.div>

      <div className="hero-v2__structure-plane" aria-hidden>
        <svg className="hero-v2__blueprint" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="598" height="598" stroke="white" strokeWidth="1.5" />
          <rect x="40" y="40" width="520" height="520" stroke="white" strokeWidth="0.5" strokeDasharray="3 9" />
          <line x1="300" y1="1" x2="300" y2="599" stroke="white" strokeWidth="0.5" />
          <line x1="1" y1="300" x2="599" y2="300" stroke="white" strokeWidth="0.5" />
          <circle cx="300" cy="300" r="140" stroke="white" strokeWidth="0.5" />
          <circle cx="300" cy="300" r="220" stroke="white" strokeWidth="0.5" strokeDasharray="2 10" />
          <line x1="80" y1="80" x2="520" y2="520" stroke="white" strokeWidth="0.3" strokeDasharray="4 12" />
          <line x1="520" y1="80" x2="80" y2="520" stroke="white" strokeWidth="0.3" strokeDasharray="4 12" />
        </svg>
        <div className="hero-v2__eng-grid" />
      </div>

      <div className="hero-v2__diag-stripe" aria-hidden />

      <div className="hero-v2__service-bar">
        <div className="hero-v2__service-inner">
          {serviceBarSlugTitles.map((s, i) => (
            <motion.div
              key={s.slug}
              className="hero-v2__service-tile-wrap"
              variants={TILE_VARIANT}
              custom={i}
              initial="hidden"
              animate="visible"
            >
              <SmartLink className="hero-v2__service-tile" href={ROUTES.service(s.slug)}>
                <HeroServiceIcon slug={s.slug} />
                <span className="hero-v2__service-label">{s.title}</span>
              </SmartLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
