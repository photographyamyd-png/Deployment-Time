import { ServicesStc1Band } from "@/components/sections/services-stc1-band";
import type { MegaMenuCard, ServicesSectionProps } from "@/content/types";

type Props = ServicesSectionProps & { cards: MegaMenuCard[] };

const SCOPE_ITEMS = [
  "Site clearing & mass excavation",
  "Foundations & structural earthwork",
  "Utility & septic trenching",
  "Drainage design & grading",
  "Hauling & site logistics",
  "Commercial snow removal",
];

export function ServicesGridSection({ cards, ...props }: Props) {
  return (
    <ServicesStc1Band
      eyebrow={props.eyebrow}
      headingLine1={props.headingLine1}
      headingLine2={props.headingLine2}
      intro={props.intro}
      scopeItems={SCOPE_ITEMS}
      cards={cards}
    />
  );
}
