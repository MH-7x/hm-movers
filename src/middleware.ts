import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const ARABIC_COUNTRIES = [
  "AE",
  "SA",
  "EG",
  "QA",
  "KW",
  "OM",
  "BH",
  "LB",
  "JO",
  "IQ",
  "SY",
  "MA",
  "DZ",
  "TN",
  "YE",
];

export default async function customMiddleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // if the locale is alerady "en" or "ar" return the request
  if (pathname.includes("/en") || pathname.includes("/ar")) {
    return createMiddleware(routing)(req);
  }

  // logic to checking requests that is coming from arabic country
  async function getLocale(req: NextRequest): Promise<string> {
    const ip = req.headers.get("x-forwarded-for");

    const geoResponse = await fetch(
      `https://ipinfo.io/${ip}?token=979f9b266e141e`
    );
    const data = await geoResponse.json();
    console.log({ ...data });

    return data.country;
  }

  const isArabic = await getLocale(req);

  // checking is araibc country
  if (ARABIC_COUNTRIES.includes(isArabic)) {
    return NextResponse.redirect(new URL(`/ar${pathname}`, req.url));
  }

  //in case of non arabic country
  return NextResponse.redirect(new URL(`/en${pathname}`, req.url));
}
export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|en)/:path*"],
};
