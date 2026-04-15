import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { DrainageDenseText } from "@/components/services/drainage-hardscaping/drainage-typography";
import {
  DRAINAGE_HUB_COVERAGE_EXTENDED,
  DRAINAGE_HUB_COVERAGE_EYEBROW,
  DRAINAGE_HUB_COVERAGE_H2,
  DRAINAGE_HUB_COVERAGE_INTRO,
  DRAINAGE_HUB_COVERAGE_LAKESIDE,
  DRAINAGE_HUB_COVERAGE_MAP_ALT,
  DRAINAGE_HUB_COVERAGE_MAP_IMAGE,
  DRAINAGE_HUB_COVERAGE_PRIMARY,
} from "@/content/drainage-hardscaping-page";

/** Light coverage band — native `<details>` for extended territory (no max-height accordion). */
export function DrainageHubCoverage() {
  const h2Parts = (() => {
    const t = DRAINAGE_HUB_COVERAGE_H2;
    const i = t.lastIndexOf("Central Ontario");
    if (i < 0) {
      return { before: t, accent: "" as string };
    }
    return { before: t.slice(0, i).trim(), accent: t.slice(i) };
  })();

  return (
    <section
      id="coverage"
      className="glc-drain-hub__coverage glc-drain-hub__coverage--lightfx ls"
      aria-labelledby="drainage-hub-coverage-h2"
    >
      <span className="coverage__fx-radial glc-drain-hub__coverage-fx-radial" aria-hidden />
      <span className="coverage__fx-topbar glc-drain-hub__coverage-fx-topbar" aria-hidden />
      <div className="service-hub__visual-slab glc-drain-hub__coverage-slab" aria-hidden />
      <div className="coverage__inner coverage__inner--sandbox container">
        <div className="coverage__label-col glc-drain-hub__coverage-label">
          <div className="coverage__intro coverage__intro--sandbox">
            <span className="glc-motif-heading-rule coverage__band-rule about__divider" aria-hidden />
            <Reveal delayClass="reveal--delay-1">
              <div className="eyebrow eyebrow--dark glc-drain-hub__coverage-eyebrow">{DRAINAGE_HUB_COVERAGE_EYEBROW}</div>
            </Reveal>
            <Reveal delayClass="reveal--delay-1">
              <h2 id="drainage-hub-coverage-h2" className="coverage__heading glc-drain-hub__coverage-heading">
                {h2Parts.before}{" "}
                {h2Parts.accent ? <em className="glc-drain-hub__heading-accent">{h2Parts.accent}</em> : null}
              </h2>
            </Reveal>
            <div className="about__divider glc-drain-hub__coverage-head-rule" aria-hidden />
            <Reveal delayClass="reveal--delay-2">
              <DrainageDenseText
                text={DRAINAGE_HUB_COVERAGE_INTRO}
                ledeClassName="coverage__lede glc-drain-hub__coverage-lede"
                innerClassName="coverage__lede glc-drain-hub__coverage-lede-inner"
              />
            </Reveal>
            <Reveal delayClass="reveal--delay-2">
              <p className="coverage__acc-h glc-drain-hub__coverage-subh">
                <strong>Primary service areas</strong>
              </p>
              <ul className="glc-drain-hub__coverage-ul">
                {DRAINAGE_HUB_COVERAGE_PRIMARY.map((row) => (
                  <li key={row.line}>{row.line}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="coverage__acc-col glc-drain-hub__coverage-acc-wrap">
          <Reveal delayClass="reveal--delay-3" className="glc-drain-hub__coverage-figure-wrap">
            <figure className="glc-drain-hub__coverage-map-figure">
              <div className="about__media service-cap-split__media glc-drain-hub__coverage-map-media">
                <div className="service-cap-split__media-slab" aria-hidden />
                <div className="about__media-shell glc-drain-hub__media-shell--fill glc-drain-hub__coverage-map-shell">
                  <Image
                    src={DRAINAGE_HUB_COVERAGE_MAP_IMAGE}
                    alt={DRAINAGE_HUB_COVERAGE_MAP_ALT}
                    fill
                    className="glc-drain-hub__media-fill"
                    sizes="(max-width: 900px) 100vw, 44vw"
                  />
                </div>
              </div>
              <figcaption className="glc-drain-hub__coverage-map-cap">{DRAINAGE_HUB_COVERAGE_MAP_ALT}</figcaption>
            </figure>
          </Reveal>

          <details className="glc-drain-hub__coverage-extended-details">
            <summary className="glc-drain-hub__coverage-extended-summary">
              <span className="glc-drain-hub__coverage-extended-chev" aria-hidden />
              Extended service areas &amp; lakeside
            </summary>
            <div className="glc-drain-hub__coverage-extended-panel">
              <p className="coverage__acc-h">Extended service areas</p>
              <ul className="glc-drain-hub__coverage-ul glc-drain-hub__coverage-ul--acc">
                {DRAINAGE_HUB_COVERAGE_EXTENDED.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="coverage__acc-h">Lakeside &amp; cottage property service</p>
              <DrainageDenseText
                text={DRAINAGE_HUB_COVERAGE_LAKESIDE}
                ledeClassName="coverage__panel-body"
                innerClassName="coverage__panel-body glc-drain-hub__coverage-lakeside-inner"
              />
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
