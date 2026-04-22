"use client";

import { useState, type ReactNode } from "react";

/**
 * Native disclosure with correct controlled semantics. Passing `open={bool}` without
 * `onToggle` locks `<details>` in React — panels never expand (page reads as “plain text”).
 */
export function SnowAccordion({
  heading,
  children,
  id,
  defaultOpen = false,
}: {
  heading: ReactNode;
  children: ReactNode;
  id?: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <details
      className="glc-snow-details"
      id={id}
      open={open}
      onToggle={(e) => {
        setOpen(e.currentTarget.open);
      }}
    >
      <summary className="glc-snow-details__summary">
        {/* Single child under <summary> avoids React 19 “unique key” warnings for sibling nodes. */}
        <span className="glc-snow-details__summary-inner">
          <span className="glc-snow-details__chev" aria-hidden />
          {heading}
        </span>
      </summary>
      <div className="glc-snow-details__body">{children}</div>
    </details>
  );
}
