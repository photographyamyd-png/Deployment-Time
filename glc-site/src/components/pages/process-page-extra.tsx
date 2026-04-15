import { IconArrow } from "@/components/ui/icon-arrow";
import type { ProcessProps } from "@/content/types";

/** Horizontal ledger — anchor-forward overview (no duplicate body copy). */
export function ProcessPageLedger(props: Pick<ProcessProps, "steps" | "eyebrow" | "heading" | "headingAccent">) {
  return (
    <section className="proc-pg-ledger" aria-labelledby="proc-pg-ledger-heading">
      <div className="proc-pg-ledger__inner">
        <div className="proc-pg-ledger__head">
          <p className="proc-pg-ledger__eyebrow">
            <span className="proc-pg-ledger__dash" aria-hidden />
            <span>{props.eyebrow}</span>
          </p>
          <h2 id="proc-pg-ledger-heading" className="proc-pg-ledger__title">
            {props.heading}
            <em>{props.headingAccent}</em>
          </h2>
        </div>
        <ol className="proc-pg-ledger__track">
          {props.steps.map((step) => (
            <li key={step.num} className="proc-pg-ledger__cell">
              <a className="proc-pg-ledger__link" href={`#process-step-${step.num}`}>
                <span className="proc-pg-ledger__num">{step.num}</span>
                <span className="proc-pg-ledger__label">{step.title}</span>
                <span className="glc-sr-only">View step detail</span>
              </a>
            </li>
          ))}
        </ol>
        <div className="proc-pg-ledger__cta">
          <a href="tel:+17056194902" className="btn-primary">
            Request a Quote
            <IconArrow />
          </a>
        </div>
      </div>
    </section>
  );
}
