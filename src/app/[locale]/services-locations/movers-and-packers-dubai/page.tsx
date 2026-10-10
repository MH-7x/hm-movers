import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import PerServiceSec from "@/components/perServiceSec";
import imageSrc from "../../../../../public/images/movers-in-dubai.jpeg";
import React from "react";
import OurServices from "@/components/Home/OurServices";
import Benifits from "@/components/Benifits";
import PickUpRentalServices from "@/components/Home/PickUpRentalServices";
import OtherMovingServices from "@/components/OtherMovingServices";
import TestimonialSection from "@/components/Testimonials";
import PricingList from "@/components/PricingList";
import WorkProcessSection from "@/components/Process";

import ServiceHire from "@/components/ServiceHire";
import hireImage from "../../../../../public/images/hire.jpeg";
import { useTranslations } from "next-intl";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import BackLinks from "@/components/BackLinks";

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
        ? "أفضل شركات النقل والتعبئة في دبي | حمدان موفرز"
        : "Best Movers & Packers in Dubai | Hamdan Movers",
    description:
      locale === "ar"
        ? "توفر حمدان موفرز حلول نقل ميسورة في دبي لمدة 6 سنوات، بما يشمل النقل المحلي والدولي، التعبئة، التخزين، والانتقالات المتخصصة"
        : "Hamdan Movers offers affordable moving solutions in Dubai for 6 years. Our services include local and long-distance moves, packing, storage, and specialty relocations.",
    alternates: {
      canonical: `${process.env.PUBLIC_URL}/${locale}/services-locations/movers-and-packers-dubai/`,
      languages: {
        ar: `${process.env.PUBLIC_URL}/ar/services-locations/movers-and-packers-dubai/`,
        en: `${process.env.PUBLIC_URL}/en/services-locations/movers-and-packers-dubai/`,
        "x-default": `${process.env.PUBLIC_URL}/en/services-locations/movers-and-packers-dubai/`,
      },
    },
    openGraph: {
      title:
        locale === "ar"
          ? "أفضل شركات النقل والتعبئة في دبي | حمدان موفرز"
          : "Best Movers & Packers in Dubai | Hamdan Movers",
      description:
        locale === "ar"
          ? "توفر حمدان موفرز حلول نقل ميسورة في دبي لمدة 6 سنوات، بما يشمل النقل المحلي والدولي، التعبئة، التخزين، والانتقالات المتخصصة"
          : "Hamdan Movers offers affordable moving solutions in Dubai for 6 years. Our services include local and long-distance moves, packing, storage, and specialty relocations.ee.",
      url: `${process.env.PUBLIC_URL}/${locale}/services-locations/movers-and-packers-dubai/`,
      siteName: t("site-Info.name"),
      locale: locale,
      type: "website",
      alternateLocale: ["ar", "en"],
      countryName: t("site-Info.country"),
      faxNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      phoneNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      images: {
        url: `${process.env.PUBLIC_URL}/images/movers-in-dubai.jpeg`,
        alt: "Movers and packers in Dubai",
      },
    },
  };
}

function MoversInDubai() {
  const t = useTranslations("moving-dubai");
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center gap-y-16">
        <PerServiceSec
          title={t("title")}
          description={t("desc")}
          image={imageSrc}
          subTitle={t("sub")}
        />

        <OurServices title={t("ser-title")} city={t("city")} />
        <OtherMovingServices />
        <div className="md:-mt-12 w-full flex justify-center">
          <Benifits city={t("city")} />
        </div>
        <PickUpRentalServices city={t("city")} />
        <ServiceHire
          title={t("hire.title")}
          desciption={t("desc")}
          image={hireImage}
          keyPoints={[t("hire.key1"), t("hire.key2")]}
        />
        <TestimonialSection />
        <PricingList city={t("city")} />
        <WorkProcessSection />
      </div>
      <BackLinks />
      <Footer />
    </>
  );
}

export default MoversInDubai;
