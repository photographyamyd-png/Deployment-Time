import hub from "@/content/pages/excavation-hub-seo.json";

const faqItems = hub.faq as Array<{ question: string; answer: string }>;

function AnswerBody({ answer, index }: { answer: string; index: number }) {
  if (index === 1) {
    const needle = "Ontario One Call (1-800-400-2255)";
    const parts = answer.split(needle);
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          Ontario One Call (
          <a href="tel:+18004002255" className="exc-faq__link">
            1-800-400-2255
          </a>
          ){parts[1]}
        </>
      );
    }
  }
  return <>{answer}</>;
}

export function ExcavationFaqEditorial() {
  return (
    <section
      id="excavation-faq"
      className="exc-faq gl-reveal"
      aria-labelledby="exc-faq-heading"
    >
      <div className="exc-faq__inner">
        <header className="exc-faq__header">
          <p className="gl-eyebrow gl-eyebrow--dark">Field notes</p>
          <h2 id="exc-faq-heading" className="gl-h2 exc-faq__heading">
            Excavation FAQs
          </h2>
        </header>

        <ul className="exc-faq__grid" role="list">
          {faqItems.map((item, index) => (
            <li key={item.question} className="exc-faq__cell gl-reveal" role="listitem">
              <article className="exc-faq__card exc-faq__card--compact" aria-labelledby={`exc-faq-q-${index}`}>
                <header className="exc-faq__card-head">
                  <span className="exc-faq__num" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 id={`exc-faq-q-${index}`} className="exc-faq__q">
                    {item.question}
                  </h3>
                </header>
                <p className="gl-prose exc-faq__a-text">
                  <AnswerBody answer={item.answer} index={index} />
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
