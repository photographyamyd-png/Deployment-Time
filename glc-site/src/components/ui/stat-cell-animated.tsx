"use client";

import { Reveal, type RevealDelayClass } from "@/components/ui/reveal";
import type { StatCellProps } from "@/content/types";

type Props = StatCellProps & {
  delayClass?: RevealDelayClass;
};

export function StatCellAnimated({
  target,
  afterNumber,
  format,
  label,
  sub,
  delayClass,
}: Props) {
  return (
    <Reveal delayClass={delayClass} className="stat-cell">
      <span
        className="stat-cell__num"
        data-target={target}
        data-format={format ?? afterNumber}
      >
        <span>{target}</span>
        <span style={{ color: "var(--yellow-core)" }}>{afterNumber}</span>
      </span>
      <span className="stat-cell__label">{label}</span>
      <span className="stat-cell__sub">{sub}</span>
    </Reveal>
  );
}
