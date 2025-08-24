import BrandingContent from "@/components/Home/BrandingContent";
import Footer from "@/components/Home/Footer";
import HeroSection from "@/components/Home/HeroSection";
import OurServices from "@/components/Home/OurServices";
import PickUpRentalServices from "@/components/Home/PickUpRentalServices";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Locations from "@/components/Locations";
import Navbar from "@/components/Navbar";
import OtherMovingServices from "@/components/OtherMovingServices";
import PricingList from "@/components/PricingList";
import WorkProcessSection from "@/components/Process";
import TestimonialSection from "@/components/Testimonials";
import { getTranslations } from "next-intl/server";
import { type Metadata } from "next";
import Script from "next/script";
import { GenerateJsonLd } from "@/lib/generateJsonLD";
import { useLocale } from "next-intl";
import BackLinks from "@/components/BackLinks";
interface Params {
  params: Promise<{
    locale: string;
  }>;
}
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const locale = (await params).locale;
  const t = await getTranslations({ locale, namespace: "meta-home" });

  return {
    title: t("title"),
    description: t("desc"),
    alternates: {
      canonical: `${process.env.PUBLIC_URL}/${locale}/`,
      languages: {
        ar: `${process.env.PUBLIC_URL}/ar/`,
        en: `${process.env.PUBLIC_URL}/en/`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("desc"),
      url: `${process.env.PUBLIC_URL}/${locale}/`,
      siteName: t("site-Info.name"),
      locale: locale,
      type: "website",
      alternateLocale: ["ar", "en"],
      countryName: t("site-Info.country"),
      faxNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      phoneNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      images: {
        url: `${process.env.PUBLIC_URL}/images/hamdan-mover-logo.png`,
        alt: "Hamdan Movers Logo",
      },
    },
  };
}

function Home() {
  const locale = useLocale();
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: GenerateJsonLd(locale) }}
      />
      <Navbar />
      <div
        dir=""
        className=" w-full flex flex-col justify-center items-center gap-y-16"
      >
        <HeroSection />
        <BrandingContent />
        <OurServices />
        <OtherMovingServices />
        <WhyChooseUs />
        <PickUpRentalServices />
        <Locations />
        <WorkProcessSection />
        <PricingList isHome={true} />
        <TestimonialSection />
      </div>
      <BackLinks />

      <Footer />
    </>
  );
}

export default Home;
