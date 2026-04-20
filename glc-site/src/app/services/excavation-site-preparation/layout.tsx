import type { ReactNode } from "react";
import { Barlow, Oswald, Source_Code_Pro } from "next/font/google";

/** VCC fonts for excavation hub only — does not modify root layout. */
const oswaldExc = Oswald({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
  variable: "--font-exc-hub-oswald",
  display: "swap",
});

const barlowExc = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-exc-hub-barlow",
  display: "swap",
});

const sourceCodeExc = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-exc-hub-scp",
  display: "swap",
});

export default function ExcavationSitePreparationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className={`${oswaldExc.variable} ${barlowExc.variable} ${sourceCodeExc.variable} exc-hub-font-root`}
    >
      {children}
    </div>
  );
}
