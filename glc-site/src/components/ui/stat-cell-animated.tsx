"use client";

import { useEffect, useRef, useState } from "react";
import type { StatCellProps } from "@/content/types";
import type { RevealDelayClass } from "@/components/ui/reveal";

type Props = StatCellProps & {
  delayClass?: RevealDelayClass;
};

/** Matches GLC master counter feel (~1.8s, ease-out). */
const DURATION_MS = 1800;

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

export function StatCellAnimated({
  target,
  afterNumber,
  format,
  label,
  sub,
  delayClass,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const ranRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(target);
      el.classList.add("visible");
      el.classList.add("stat-cell--done");
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || ranRef.current) return;
          ranRef.current = true;
          el.classList.add("visible");

          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / DURATION_MS, 1);
            const eased = easeOutCubic(t);
            setDisplay(Math.round(target * eased));
            if (t < 1) {
              rafRef.current = requestAnimationFrame(tick);
            } else {
              setDisplay(target);
              el.classList.add("stat-cell--done");
            }
          };
          rafRef.current = requestAnimationFrame(tick);
          obs.disconnect();
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    obs.observe(el);
    return () => {
      obs.disconnect();
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [target]);

  const delay = delayClass ? ` ${delayClass}` : "";

  return (
    <div ref={rootRef} className={`reveal${delay} stat-cell`.trim()}>
      <span
        className="stat-cell__num"
        data-target={target}
        data-format={format ?? afterNumber}
      >
        <span className="stat-cell__num-val">{display}</span>
        <span className="stat-cell__suffix">{afterNumber}</span>
      </span>
      <span className="stat-cell__label">{label}</span>
      <span className="stat-cell__sub">{sub}</span>
    </div>
  );
}
