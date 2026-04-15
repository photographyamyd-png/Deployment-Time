"use client";

import { useId, useState } from "react";
import { IconArrow } from "@/components/ui/icon-arrow";
import { SmartLink } from "@/components/ui/smart-link";
import { chunkSentences } from "@/lib/chunk-sentences";
import type { TestimonialsProps } from "@/content/types";

/**
 * Projects / testimonials — light band with sticky index + stage panel (unique vs other sections).
 */
export function TestimonialsSection(props: TestimonialsProps) {
  const baseId = useId();
  const [active, setActive] = useState(0);

  return (
    <section
      id="testimonials"
      className="proj4"
      aria-labelledby="testimonials-heading"
    >
      <div className="proj4__inner">
        <div className="proj4__mast">
          <p className="proj4__eyebrow">
            <span className="proj4__eyebrow-dash" aria-hidden />
            <span>{props.eyebrow}</span>
          </p>
          <h2 id="testimonials-heading" className="proj4__title">
            {props.headingBefore}
            <em>{props.headingAccent}</em>
            {props.headingAfter}
          </h2>
          {chunkSentences(props.sub, 2).map((chunk) => (
            <p key={chunk.slice(0, 28)} className="proj4__lede">
              {chunk}
            </p>
          ))}
        </div>

        <div className="proj4__stage">
          <nav className="proj4__index" aria-label="Client stories">
            <ul className="proj4__index-list" role="tablist">
              {props.items.map((t, i) => (
                <li key={t.name} role="none">
                  <button
                    type="button"
                    role="tab"
                    id={`${baseId}-tab-${i}`}
                    aria-selected={active === i}
                    aria-controls={`${baseId}-panel-${i}`}
                    tabIndex={active === i ? 0 : -1}
                    className={`proj4__index-btn${active === i ? " is-active" : ""}`}
                    onClick={() => setActive(i)}
                  >
                    <span className="proj4__index-num">0{i + 1}</span>
                    <span className="proj4__index-name">{t.name}</span>
                    <span className="proj4__index-role">{t.role}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="proj4__panels">
            {props.items.map((t, i) => {
              const on = active === i;
              return (
                <div
                  key={t.name}
                  id={`${baseId}-panel-${i}`}
                  role="tabpanel"
                  aria-labelledby={`${baseId}-tab-${i}`}
                  hidden={!on}
                  className={`proj4__panel${on ? " is-active" : ""}`}
                >
                  <div className="proj4__panel-frame" aria-hidden />
                  <div className="proj4__stars" aria-label="5 stars">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <svg
                        key={`${t.name}-s-${idx}`}
                        className="proj4__star"
                        viewBox="0 0 20 20"
                        aria-hidden
                      >
                        <path d="M10 1l2.4 7.4H20l-6.2 4.5 2.4 7.4L10 16l-6.2 4.3 2.4-7.4L0 8.4h7.6z" />
                      </svg>
                    ))}
                  </div>
                  <div className="proj4__quote-body">
                    {chunkSentences(t.quote, 2).map((chunk) => (
                      <p key={chunk.slice(0, 24)} className="proj4__quote-p">
                        &ldquo;{chunk}&rdquo;
                      </p>
                    ))}
                  </div>
                  <div className="proj4__panel-cta">
                    <a href="tel:+17056194902" className="btn-primary">
                      Book a reference call
                      <IconArrow />
                    </a>
                    {props.googleReviews ? (
                      <SmartLink
                        href={props.googleReviews.href}
                        className="btn-ghost proj4__google"
                      >
                        {props.googleReviews.label}
                        <IconArrow />
                      </SmartLink>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
