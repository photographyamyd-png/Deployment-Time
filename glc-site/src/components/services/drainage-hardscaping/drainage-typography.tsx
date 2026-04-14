import { splitFirstTwoSentences, splitHeadingForDisplay } from "@/lib/copy-density";

const READMORE_SUMMARY = "Technical depth & field notes";

type DenseProps = {
  paragraphs: string[];
  ledeClassName: string;
  innerClassName: string;
};

/** First paragraph: two-sentence lede; remainder of first para + following paras in readmore. */
export function DrainageDenseParagraphStack({
  paragraphs,
  ledeClassName,
  innerClassName,
}: DenseProps) {
  if (paragraphs.length === 0) {
    return null;
  }
  const [first, ...rest] = paragraphs;
  const { lead, remainder } = splitFirstTwoSentences(first);
  const hasReadmore = Boolean(remainder) || rest.length > 0;

  return (
    <>
      <p className={ledeClassName}>{lead}</p>
      {hasReadmore ? (
        <details className="service-cap-readmore glc-drain-hub__readmore">
          <summary>{READMORE_SUMMARY}</summary>
          <div className="service-cap-readmore__inner">
            {remainder ? <p className={innerClassName}>{remainder}</p> : null}
            {rest.map((p) => (
              <p key={p.slice(0, 40)} className={innerClassName}>
                {p}
              </p>
            ))}
          </div>
        </details>
      ) : null}
    </>
  );
}

/** Single string → lede + readmore (one paragraph split only). */
export function DrainageDenseText({
  text,
  ledeClassName,
  innerClassName,
}: {
  text: string;
  ledeClassName: string;
  innerClassName: string;
}) {
  const { lead, remainder } = splitFirstTwoSentences(text);
  if (!remainder) {
    return <p className={ledeClassName}>{lead}</p>;
  }
  return (
    <>
      <p className={ledeClassName}>{lead}</p>
      <details className="service-cap-readmore glc-drain-hub__readmore">
        <summary>{READMORE_SUMMARY}</summary>
        <div className="service-cap-readmore__inner">
          <p className={innerClassName}>{remainder}</p>
        </div>
      </details>
    </>
  );
}

type HeadingProps = {
  id?: string;
  text: string;
  className: string;
  accentClassName?: string;
};

export function DrainageFragmentedH2({
  id,
  text,
  className,
  accentClassName = "glc-drain-hub__heading-accent",
}: HeadingProps) {
  const { line1, accent } = splitHeadingForDisplay(text);
  if (!accent) {
    return (
      <h2 id={id} className={className}>
        {line1}
      </h2>
    );
  }
  return (
    <h2 id={id} className={className}>
      {line1}
      <br />
      <em className={accentClassName}>{accent}</em>
    </h2>
  );
}
