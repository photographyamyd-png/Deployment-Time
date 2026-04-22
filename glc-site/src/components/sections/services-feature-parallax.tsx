"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import styles from "@/components/sections/services-grid-section.module.css";

type Props = {
  src: string;
  alt: string;
  /** Passed to next/image `sizes` when the hero sits in a split column. */
  imageSizes?: string;
};

/**
 * Pointer-driven layer drift (slow bg / faster overlay) — respects reduced motion via CSS.
 */
export function ServicesFeatureParallax({ src, alt, imageSizes = "100vw" }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  const onPointerMove = useCallback((e: ReactPointerEvent<HTMLDivElement>) => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const w = r.width;
    const h = r.height;
    if (w <= 0 || h <= 0) return;
    const x = (e.clientX - r.left) / w - 0.5;
    const y = (e.clientY - r.top) / h - 0.5;
    el.style.setProperty("--svc-px", x.toFixed(5));
    el.style.setProperty("--svc-py", y.toFixed(5));
  }, []);

  const onPointerLeave = useCallback(() => {
    rootRef.current?.style.setProperty("--svc-px", "0");
    rootRef.current?.style.setProperty("--svc-py", "0");
  }, []);

  return (
    <div
      ref={rootRef}
      className={styles.parallaxRoot}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div className={styles.parallaxZoomLayer} aria-hidden>
        <Image src={src} alt={alt} fill className={styles.parallaxImg} sizes={imageSizes} priority={false} />
      </div>
      <div className={styles.parallaxScrim} aria-hidden />
      <div className={styles.parallaxBlueprint} aria-hidden />
      <div className={styles.parallaxFrame} aria-hidden />
      <div className={styles.parallaxFloor} aria-hidden />
    </div>
  );
}
