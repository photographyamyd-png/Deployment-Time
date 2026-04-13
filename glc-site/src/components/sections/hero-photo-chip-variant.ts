import type { Variants } from "framer-motion";

const EASE_SPRING = { type: "spring" as const, stiffness: 260, damping: 22 };

/** Shared spring-in for hero photo stats + coverage chip (single module — avoids cross-import chunk issues). */
export const HERO_PHOTO_CHIP_VARIANT: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.94 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...EASE_SPRING, delay: 0.9 + i * 0.14 },
  }),
};
