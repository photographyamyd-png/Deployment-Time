"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useState,
  type CSSProperties,
  type MouseEvent,
} from "react";

type Props = {
  imageUrl: string;
  title: string;
  sizes: string;
};

/** Parallax shift inside the photo rail — disabled when prefers-reduced-motion. */
export function SandboxAccgridMotionFig({ imageUrl, title, sizes }: Props) {
  const [reduceMotion, setReduceMotion] = useState(true);
  const [n, setN] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const onMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (reduceMotion) return;
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      setN({ x, y });
    },
    [reduceMotion],
  );

  const onLeave = useCallback(() => {
    setN({ x: 0, y: 0 });
  }, []);

  const shift = 14;
  const tx = n.x * shift;
  const ty = n.y * shift;
  const innerStyle: CSSProperties | undefined = reduceMotion
    ? undefined
    : {
        transform: `translate(${tx}px, ${ty}px) scale(1.06)`,
        transition:
          n.x === 0 && n.y === 0 ? "transform 0.45s var(--ease-expo, cubic-bezier(0.22, 1, 0.36, 1))" : "none",
      };

  return (
    <div
      className="sandbox-svc-accgrid__fig"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      role="presentation"
    >
      <div className="sandbox-svc-accgrid__fig-inner" style={innerStyle}>
        <Image src={imageUrl} alt={title} fill className="sandbox-svc-accgrid__img" sizes={sizes} />
      </div>
    </div>
  );
}
