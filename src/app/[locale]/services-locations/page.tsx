import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import ImageSrc from "../../../../public/images/movers-in-dubai.jpeg";
import PerServiceSec from "@/components/perServiceSec";
import Benifits from "@/components/Benifits";
import hireImage from "../../../../public/images/hire.jpeg";
import ServiceHire from "@/components/ServiceHire";
import TestimonialSection from "@/components/Testimonials";
import PricingList from "@/components/PricingList";
import Locations from "@/components/Locations";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

interface Params {
  params: Promise<{
    locale: string;
  }>;
}
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const locale = (await params).locale;
  const t = await getTranslations({ locale, namespace: "meta-service" });

  return {
    title:
      locale === "ar"
        ? "نقل عفش في دبي والشارقة وعجمان والمناطق المجاورة"
        : "Movers in Dubai, Sharjah, Ajman & Nearby Areas",
    description:
      locale === "ar"
        ? "اعثر على أفضل شركات النقل بالقرب منك. قارن الخدمات للنقل السكني أو التجاري واستمتع بانتقال سلس وآمن مع مساعدة الخبراء"
        : "Find top-rated movers near you. Compare services for residential or commercial moves and enjoy a stress-free relocation with expert help and secure transportation.",
    alternates: {
      canonical: `${process.env.PUBLIC_URL}/${locale}/services-locations/`,
      languages: {
        ar: `${process.env.PUBLIC_URL}/ar/services-locations/`,
        en: `${process.env.PUBLIC_URL}/en/services-locations/`,
      },
    },
    openGraph: {
      title:
        locale === "ar"
          ? "نقل عفش في دبي والشارقة وعجمان والمناطق المجاورة"
          : "Movers in Dubai, Sharjah, Ajman & Nearby Areas",
      description:
        locale === "ar"
          ? "اعثر على أفضل شركات النقل بالقرب منك. قارن الخدمات للنقل السكني أو التجاري واستمتع بانتقال سلس وآمن مع مساعدة الخبراء"
          : "Find top-rated movers near you. Compare services for residential or commercial moves and enjoy a stress-free relocation with expert help and secure transportation.",
      url: `${process.env.PUBLIC_URL}/${locale}/services-locations/`,
      siteName: t("site-Info.name"),
      locale: locale,
      type: "website",
      alternateLocale: ["ar", "en"],
      countryName: t("site-Info.country"),
      faxNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      phoneNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      images: {
        url: `${process.env.PUBLIC_URL}/images/main-section-image.jpg`,
        alt: "Mover and packers in Dubai, Sharjah and Ajman",
      },
    },
  };
}

function ServicesLocations() {
  const t = useTranslations("moving-locations");
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center gap-y-16">
        <PerServiceSec
          image={ImageSrc}
          title={t("title")}
          subTitle={t("sub")}
          description={t("desc")}
        />
        <Benifits />
        <Locations />
        <ServiceHire
          title={t("hire.title")}
          desciption={t("hire.desc")}
          image={hireImage}
          keyPoints={[t("hire.key1"), t("hire.key2")]}
        />
        <TestimonialSection />
        <PricingList />
      </div>
      <Footer />
    </>
  );
}

export default ServicesLocations;
