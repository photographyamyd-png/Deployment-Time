"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { SmartLink, type SmartLinkProps } from "@/components/ui/smart-link";

type MotionSpanProps = Pick<
  HTMLMotionProps<"span">,
  "whileHover" | "whileTap" | "transition"
>;

export type MotionSmartLinkProps = SmartLinkProps & MotionSpanProps;

/**
 * Framer hover/tap on a SmartLink without `motion.create(SmartLink)`, which can
 * trigger brittle webpack/runtime resolution with forwardRef + next/link.
 */
export function MotionSmartLink({
  whileHover,
  whileTap,
  transition,
  ...linkProps
}: MotionSmartLinkProps) {
  return (
    <motion.span
      style={{
        display: "inline-flex",
        maxWidth: "100%",
        verticalAlign: "middle",
      }}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
    >
      <SmartLink {...linkProps} />
    </motion.span>
  );
}
