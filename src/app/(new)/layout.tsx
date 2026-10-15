import type { Metadata, Viewport } from "next";
import { Archivo, Nunito_Sans } from "next/font/google";
import ClickTracker from "@/components/new/site/ClickTracker";
import { GtmNoScript, GtmScript } from "@/components/new/site/Gtm";
import "./lp.css";

// Variable font with a width axis: headings are set slightly expanded (see lp.source.css).
const heading = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-head",
});

const body = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hamdanmoversuae.com"),
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Root layout for the Google Ads landing pages. It is a separate root
// layout from src/app/[locale]/layout.tsx, so nothing from the old site
// (globals.css, fonts, intl provider, header, footer) loads here.
export default function LandingRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${heading.variable} ${body.variable}`}>
      <body>
        <GtmNoScript />
        {children}
        <ClickTracker />
        <GtmScript />
      </body>
    </html>
  );
}
