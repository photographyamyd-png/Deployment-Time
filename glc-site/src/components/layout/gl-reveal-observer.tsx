"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Mirrors `use-reveal` / `.reveal` for elements that use the `.gl-reveal` class
 * without the `<Reveal>` wrapper (e.g. excavation hub blocks). Without this,
 * `.gl-reveal` stays at opacity:0 forever.
 */
export function GlRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".gl-reveal"));

    if (nodes.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((el) => el.classList.add("visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    nodes.forEach((el) => {
      if (!el.classList.contains("visible")) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [pathname]);

  return null;
}
