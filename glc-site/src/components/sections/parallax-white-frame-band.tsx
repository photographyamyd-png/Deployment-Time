"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IconArrow } from "@/components/ui/icon-arrow";

export type ParallaxWhiteFrameBandProps = {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  cta?: { label: string; href: string };
};

/**
 * Mid-page full-bleed parallax field with a centered white editorial frame (Awesome CTA–style rhythm).
 */
export function ParallaxWhiteFrameBand({
  id = "parallax-white-frame",
  eyebrow,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  cta,
}: ParallaxWhiteFrameBandProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawImgY = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);
  const imgY = useSpring(rawImgY, { stiffness: 65, damping: 28 });

  return (
    <section
      ref={sectionRef}
      id={id}
      className="gl-parallax-wf"
      aria-labelledby={`${id}-heading`}
    >
      <div className="gl-parallax-wf__frame-outer">
        <motion.div
          className="gl-parallax-wf__media"
          style={mounted ? { y: imgY } : undefined}
          aria-hidden
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="gl-parallax-wf__img"
            sizes="100vw"
            priority={false}
          />
          <div className="gl-parallax-wf__scrim" />
          <div className="gl-parallax-wf__grain" aria-hidden />
        </motion.div>

        <div className="gl-parallax-wf__accent-bar" aria-hidden />

        <div className="gl-parallax-wf__plate">
          <p className="gl-parallax-wf__eyebrow">
            <span className="gl-parallax-wf__eyebrow-dash" aria-hidden />
            <span>{eyebrow}</span>
          </p>
          <h2 id={`${id}-heading`} className="gl-parallax-wf__title">
            {title}
          </h2>
          {subtitle ? <p className="gl-parallax-wf__sub">{subtitle}</p> : null}
          {cta ? (
            <div className="gl-parallax-wf__cta">
              <a href={cta.href} className="btn-primary">
                {cta.label}
                <IconArrow />
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
