import type { ServiceDetailContent } from "@/content/types";

type Props = {
  service: ServiceDetailContent;
};

function fallbackPoints(service: ServiceDetailContent): string[] {
  return [
    `Coverage: ${service.hero.titleEmphasis || "Simcoe County commercial sites"}.`,
    "Coordination with PMs, site supers, and downstream trades.",
    "Clear scope before mobilization to avoid timeline drift.",
  ];
}

export function ServiceProjectContext({ service }: Props) {
  const config = service.projectContext;
  const heading = config?.heading ?? "Project context before boots on grade";
  const eyebrow = config?.eyebrow ?? "Project context";
  const points = config?.points?.length ? config.points : fallbackPoints(service);

  return (
    <section className="service-project-context" aria-labelledby="service-project-context-heading">
      <div className="service-project-context__inner">
        <p className="eyebrow eyebrow--dark">{eyebrow}</p>
        <h2 id="service-project-context-heading" className="service-project-context__heading">
          {heading}
        </h2>
        <ul className="service-project-context__points">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
