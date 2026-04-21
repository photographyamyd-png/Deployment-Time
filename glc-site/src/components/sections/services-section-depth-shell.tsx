"use client";

import type { PointerEvent as ReactPointerEvent, ReactNode } from "react";
import { useCallback, useRef } from "react";
import styles from "@/components/sections/services-grid-section.module.css";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * Section-wide pointer depth: drives --depth-pull (stronger near bottom / CTA zone),
 * --depth-x / --depth-y for blueprint counter-drift. Descendants read vars via inheritance.
 */
export function ServicesSectionDepthShell({ children, className }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  const onPointerMove = useCallback((e: ReactPointerEvent<HTMLDivElement>) => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const w = r.width;
    const h = r.height;
    if (w <= 0 || h <= 0) return;
    const nx = (e.clientX - r.left) / w - 0.5;
    const ny = (e.clientY - r.top) / h - 0.5;
    const yNorm = (e.clientY - r.top) / h;
    const pull = Math.max(0, Math.min(1, (yNorm - 0.42) / 0.58));
    el.style.setProperty("--depth-x", nx.toFixed(5));
    el.style.setProperty("--depth-y", ny.toFixed(5));
    el.style.setProperty("--depth-pull", pull.toFixed(5));
  }, []);

  const onPointerLeave = useCallback(() => {
    const el = rootRef.current;
    if (!el) return;
    el.style.setProperty("--depth-x", "0");
    el.style.setProperty("--depth-y", "0");
    el.style.setProperty("--depth-pull", "0");
  }, []);

  return (
    <div
      ref={rootRef}
      className={[styles.depthShell, className].filter(Boolean).join(" ")}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </div>
  );
}
