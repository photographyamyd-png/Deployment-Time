/**
 * Pre-template commercial snow hub (hero + CommercialSnowPageMain). Sandbox reference only.
 */
import { CommercialSnowHero } from "@/components/services/commercial-snow-hero";
import { CommercialSnowPageMain } from "@/components/services/commercial-snow-page-main";

export function SnowServicePageLegacy() {
  return (
    <main id="main-content" className="glc-snow-hub">
      <CommercialSnowHero />
      <CommercialSnowPageMain />
    </main>
  );
}
