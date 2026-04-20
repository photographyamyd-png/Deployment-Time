import hub from "@/content/pages/site-prep-grading-seo.json";

const faqItems = hub.faq as Array<{ question: string; answer: string }>;

export function SitePrepGradingFaqEditorial() {
  return (
    <section
      id="site-prep-faq"
      className="exc-faq gl-reveal"
      aria-labelledby="site-prep-faq-heading"
    >
      <div className="exc-faq__inner">
        <header className="exc-faq__header">
          <p className="gl-eyebrow gl-eyebrow--dark">Field notes</p>
          <h2 id="site-prep-faq-heading" className="gl-h2 exc-faq__heading">
            Site prep & grading FAQs
          </h2>
        </header>

        <ol className="exc-faq__rail">
          {faqItems.map((item, index) => (
            <li key={item.question} className="exc-faq__item gl-reveal">
              <div className="exc-faq__marker">
                <span className="exc-faq__num">{String(index + 1).padStart(2, "0")}</span>
                <span className="exc-faq__rail-line" aria-hidden />
              </div>
              <div className="exc-faq__card">
                <h3 className="exc-faq__q">{item.question}</h3>
                <div className="exc-faq__a">
                  <p className="gl-prose exc-faq__a-text">{item.answer}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
