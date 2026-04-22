type Props = {
  /** Short urgency line — keep to one sentence for the 60px band */
  text?: string;
};

const DEFAULT_TEXT =
  "24-hour storm response when contracted — limited commercial route capacity; secure your site before freeze-up.";

/**
 * Thin yellow band directly under the snow service hero (not a full section).
 */
export function ServiceSnowUrgencyStrip({ text = DEFAULT_TEXT }: Props) {
  return (
    <aside className="glc-snow-quote-urgency" aria-label="Winter service urgency">
      <p className="glc-snow-quote-urgency__text">{text}</p>
    </aside>
  );
}
