"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SmartLink } from "@/components/ui/smart-link";
import { useSandboxGpuSafe } from "@/components/sandbox/sandbox-page-shell";
import type { ServiceDetailContent } from "@/content/types";
import { splitFirstSentence } from "@/lib/copy-density";
import { ROUTES } from "@/lib/routes";

const DEFAULT_HERO_IMG =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&auto=format";

type Props = {
  service: ServiceDetailContent;
};

export function ServicePageHero({ service }: Props) {
  const bg = service.heroImage ?? DEFAULT_HERO_IMG;
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const sandboxGpu = useSandboxGpuSafe();

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const rawBgY = useTransform(scrollYProgress, [0, 1], ["0%", "32%"]);
  const bgY = useSpring(rawBgY, { stiffness: 90, damping: 32 });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="service-hero-title"
      className="service-page-hero service-page-hero--parallax"
      id="service-hero"
    >
      <motion.div
        className="service-page-hero__bg-plane"
        style={mounted && !sandboxGpu ? { y: bgY } : undefined}
        aria-hidden
      >
        <div
          className={`service-page-hero__bg-roll${sandboxGpu ? " service-page-hero__bg-roll--static" : ""}`}
        >
          <div
            className="service-page-hero__bg"
            style={{ backgroundImage: `url('${bg}')` }}
          />
        </div>
      </motion.div>
      <div className="service-page-hero__scrim" aria-hidden />
      <div className="service-page-hero__inner">
        <p className="service-page-hero__breadcrumb">
          <SmartLink href={ROUTES.home}>Home</SmartLink>
          {" · "}
          <SmartLink href={ROUTES.services}>{service.hero.breadcrumbParent}</SmartLink>
        </p>
        <h1 id="service-hero-title" className="service-page-hero__title">
          {service.hero.titleBefore}
          <em>{service.hero.titleEmphasis}</em>
        </h1>
        <p className="service-page-hero__lede">{splitFirstSentence(service.hero.lede)}</p>
      </div>
    </section>
  );
}
