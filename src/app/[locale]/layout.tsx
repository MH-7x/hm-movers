import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Poppins, Amiri, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import GTM from "@/components/GTM";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--poppins",
});

const arabic = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  style: "normal",

  variable: "--arabic",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--playfair",
});

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot:
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },

  other: {
    google: "notranslate",
  },
};

export default async function RootLayout({
  params: { locale },
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <GTM />
      <body>
        <NextIntlClientProvider messages={messages}>
          <main
            className={`container px-[10px] ${
              locale === "ar"
                ? `${arabic.className}`
                : `${poppins.className} ${playfair.variable}`
            }`}
          >
            {children}
          </main>
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
