import type { Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/** No clip-path / blur — avoids stacked compositor bugs over full-bleed imagery. */
export const LINE_VARIANT_GPU_SAFE: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.12 + (typeof i === "number" ? i : 0) * 0.08,
      ease: EASE,
    },
  }),
};

export const FADE_UP_GPU_SAFE: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: 0.35 + (typeof i === "number" ? i : 0) * 0.08,
      ease: EASE,
    },
  }),
};

export const PHOTO_PANEL_GPU_SAFE: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, delay: 0.2, ease: EASE },
  },
};
