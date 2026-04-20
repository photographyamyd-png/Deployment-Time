import hub from "@/content/pages/site-prep-grading-seo.json";
import type { SiteConfig } from "@/content/types";
import { buildSitePrepGradingHubGraphSchema } from "@/lib/schema";
import { canonicalUrl } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";

const faq = hub.faq as Array<{ question: string; answer: string }>;

type Props = {
  site: SiteConfig;
};

export function JsonLdSitePrepGradingHub({ site: siteProp }: Props) {
  const pageUrl = canonicalUrl(ROUTES.service("site-preparation-grading"));
  const data = buildSitePrepGradingHubGraphSchema(
    siteProp,
    pageUrl,
    faq,
    hub.meta.description as string,
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
