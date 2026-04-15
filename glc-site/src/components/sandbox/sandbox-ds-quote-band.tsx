"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const QUOTE_BG =
  "/images/services/drainage-hardscaping/work-cap-retaining-timber-grading.jpg";

export function SandboxDsQuoteBand() {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const y = useSpring(yRaw, { stiffness: 140, damping: 24 });

  return (
    <section
      ref={ref}
      className="sandbox-ds-quote"
      aria-label="Design system quote band"
    >
      <motion.div
        className="sandbox-ds-quote__bg"
        style={reduceMotion ? undefined : { y }}
        aria-hidden
      >
        <Image
          src={QUOTE_BG}
          alt=""
          fill
          className="sandbox-ds-quote__bg-img"
          sizes="100vw"
        />
      </motion.div>
      <div className="sandbox-ds-quote__overlay-l" aria-hidden />
      <div className="sandbox-ds-quote__overlay-t" aria-hidden />
      <div className="sandbox-ds-quote__overlay-b" aria-hidden />
      <div className="sandbox-ds-quote__grain" aria-hidden />
      <div className="sandbox-ds-quote__content">
        <div className="sandbox-ds-quote__rule" aria-hidden />
        <blockquote className="sandbox-ds-quote__quote">
          Parity section for the static HTML prototype: full-bleed photography, charcoal scrim stack,
          and scroll-linked depth — without shipping a second cursor engine on production routes.
        </blockquote>
        <div className="sandbox-ds-quote__attr">
          <span className="sandbox-ds-quote__attr-line" aria-hidden />
          <span className="sandbox-ds-quote__attr-name">
            Sandbox note — GLC design bench
          </span>
          <span className="sandbox-ds-quote__attr-line" aria-hidden />
        </div>
      </div>
    </section>
  );
}
