import type { ReactNode } from "react";

type Props = {
  breadcrumb: ReactNode;
  title: ReactNode;
  lede: string;
  /** Dark charcoal (default) or light mist shell */
  variant?: "dark" | "light";
};

export function MiniPageHero({ breadcrumb, title, lede, variant = "dark" }: Props) {
  const shell = variant === "dark" ? "mini-page-hero mini-page-hero--dark" : "mini-page-hero mini-page-hero--light";
  return (
    <section className={shell} aria-labelledby="mini-page-hero-heading">
      {variant === "dark" ? (
        <>
          <div className="mini-page-hero__bg" aria-hidden />
          <div className="mini-page-hero__scrim" aria-hidden />
        </>
      ) : (
        <div className="mini-page-hero__mist" aria-hidden />
      )}
      <div className="mini-page-hero__inner">
        <p className="mini-page-hero__crumb">{breadcrumb}</p>
        <h1 id="mini-page-hero-heading" className="mini-page-hero__title">
          {title}
        </h1>
        {lede ? <p className="mini-page-hero__lede">{lede}</p> : null}
      </div>
    </section>
  );
}
