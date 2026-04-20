import { SmartLink } from "@/components/ui/smart-link";
import { ROUTES } from "@/lib/routes";

export function CommercialSnowSeasonalBanner() {
  return (
    <aside
      className="glc-snow-season-banner"
      aria-label="Seasonal commercial snow contracts"
    >
      <div className="glc-snow-season-banner__inner">
        <p className="glc-snow-season-banner__text">
          <strong>Accepting winter season contracts</strong> — limited route capacity for commercial sites.
        </p>
        <SmartLink href={ROUTES.contact} className="glc-snow-season-banner__cta">
          Secure your site
        </SmartLink>
      </div>
    </aside>
  );
}
