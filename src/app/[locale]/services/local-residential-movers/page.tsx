import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import PerServiceSec from "@/components/perServiceSec";
import imageSrc from "../../../../../public/images/local-moving-service.jpg";
import hireUsImage from "../../../../../public/images/hire-us.jpg";
import React from "react";
import ServiceDetails from "@/components/ServiceDetails";
import ServiceHire from "@/components/ServiceHire";
import PricingList from "@/components/PricingList";

import ServiceMovingProcess from "@/components/ServiceMovingProcess";
import initialConts from "../../../../../public/images/Initial-Consultation-icon.png";
import packingIcon from "../../../../../public/images/packing-unpacking.png";
import moveIcon from "../../../../../public/images/safe-transportation.png";
import settingIcon from "../../../../../public/images/home-setting-icon.png";
import TestimonialSection from "@/components/Testimonials";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
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
        ? "أفضل شركات النقل بالقرب منك | خدمات نقل المنازل الاحترافية"
        : "Best Movers Near You | Professional House Moving Services",
    description:
      "تبحث عن ناقلين موثوقين؟ توفر حمدان موفرز خدمات تعبئة ونقل منازل احترافية في جميع أنحاء الإمارات، لضمان تجربة انتقال خالية من المتاعب",
    alternates: {
      canonical: `${process.env.PUBLIC_URL}/${locale}/services/local-residential-movers/`,
      languages: {
        ar: `${process.env.PUBLIC_URL}/ar/services/local-residential-movers/`,
        en: `${process.env.PUBLIC_URL}/en/services/local-residential-movers/`,
        "x-default": `${process.env.PUBLIC_URL}/en/services/local-residential-movers/`,
      },
    },
    openGraph: {
      title:
        locale === "ar"
          ? "أفضل شركات النقل بالقرب منك | خدمات نقل المنازل الاحترافية"
          : "Best Movers Near You | Professional House Moving Services",
      description:
        "تبحث عن ناقلين موثوقين؟ توفر حمدان موفرز خدمات تعبئة ونقل منازل احترافية في جميع أنحاء الإمارات، لضمان تجربة انتقال خالية من المتاعب",
      url: `${process.env.PUBLIC_URL}/${locale}/services/local-residential-movers/`,
      siteName: t("site-Info.name"),
      locale: locale,
      type: "website",
      alternateLocale: ["ar", "en"],
      countryName: t("site-Info.country"),
      faxNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      phoneNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      images: {
        url: `${process.env.PUBLIC_URL}/images/local-moving-service.jpg`,
        alt: "Professional House Moving Services",
      },
    },
  };
}
function LocalResidentailMovers() {
  const locale = useLocale();
  const t = useTranslations("local");
  const p = useTranslations("service-process");
  return (
    <>
      <Navbar />
      <div
        dir={locale === "ar" ? "rtl" : "ltr"}
        className=" w-full flex flex-col justify-center items-center gap-y-16"
      >
        <PerServiceSec
          title={t("title")}
          subTitle={t("sub")}
          description={t("desc")}
          image={imageSrc}
        />
        <ServiceDetails
          title={t("part1.title")}
          description={t("part1.sm-desc")}
          boxs={[
            {
              heading: t("part1.point1"),
              desc: t("part1.desc1"),
            },
            {
              heading: t("part1.point2"),
              desc: t("part1.desc2"),
            },
            {
              heading: t("part1.point3"),
              desc: t("part1.desc3"),
            },
          ]}
        />
        <ServiceHire
          title={t("hire.title")}
          desciption={t("hire.desc")}
          keyPoints={[t("hire.key1"), t("hire.key2")]}
          image={hireUsImage}
        />

        <div className="-mt-10 flex justify-center">
          <PricingList />
        </div>
        <ServiceMovingProcess
          boxs={[
            {
              heading: p("one.title"),
              desc: p("one.desc"),
              image: initialConts,
            },
            {
              heading: p("two.title"),
              desc: p("two.desc"),
              image: packingIcon,
            },
            {
              heading: p("three.title"),
              desc: p("three.desc"),
              image: moveIcon,
            },
            {
              heading: p("four.title"),
              desc: p("four.desc"),
              image: settingIcon,
            },
          ]}
        />
        <TestimonialSection />
      </div>
      <BackLinks />
      <Footer />
    </>
  );
}

export default LocalResidentailMovers;
