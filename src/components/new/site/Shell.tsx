import Footer from "./Footer";
import Header from "./Header";
import JsonLd from "./JsonLd";
import MobileCallBar from "./MobileCallBar";
import NavMenus from "./NavMenus";

const business = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Hamdan Movers and Packers",
  url: "https://hamdanmoversuae.com/",
  telephone: ["+971566651978", "+971503626685"],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Office No. 3-064M, King Saeed Majid Al Shamsi Building, Al Zahra Street, Al Nasiriyah",
    addressLocality: "Sharjah",
    addressCountry: "AE",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah"],
};

export default function Shell({
  whatsappMessage,
  children,
}: {
  whatsappMessage: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div id="top" />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-btn focus:bg-brand focus:px-4 focus:py-3 focus:font-bold focus:text-ink"
      >
        Skip to content
      </a>
      <Header whatsappMessage={whatsappMessage} />
      <nav aria-label="Services and locations" className="relative z-30 border-b border-line bg-white lg:hidden">
        <NavMenus variant="mobile" />
      </nav>
      <main id="main">{children}</main>
      <Footer />
      <MobileCallBar whatsappMessage={whatsappMessage} />
      <JsonLd data={business} />
    </>
  );
}
