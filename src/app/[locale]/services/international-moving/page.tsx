import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import PerServiceSec from "@/components/perServiceSec";
import imageSrc from "../../../../../public/images/international-service.jpg";
import hireUsImage from "../../../../../public/images/hire-us.jpg";
import React from "react";
import ServiceDetails from "@/components/ServiceDetails";
import ServiceHire from "@/components/ServiceHire";
import interMovingPrice from "../../../../../public/images/international-moving-pricing.jpg";

import ServiceMovingProcess from "@/components/ServiceMovingProcess";
import initialConts from "../../../../../public/images/Initial-Consultation-icon.png";
import packingIcon from "../../../../../public/images/packing-unpacking.png";
import moveIcon from "../../../../../public/images/safe-transportation.png";
import settingIcon from "../../../../../public/images/home-setting-icon.png";
import Image from "next/image";
import TestimonialSection from "@/components/Testimonials";
import { useLocale, useTranslations } from "next-intl";
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
        ? "شركات نقل دولي آمنة ومناسبة في الإمارات"
        : "Safe and Timely International Movers in UAE",
    description:
      locale === "ar"
        ? "حمدان للم نقل: نقل دولي سهل. تعبئة وتغليف، شحن، جمارك، تسليم حتى الباب. انتقال بدون ضغوط. ثق بنا!"
        : "Hamdan Movers: Global moving made easy. Expert packing, shipping, customs, door-to-door. Stress-free relocation. Trust us!",
    alternates: {
      canonical: `${process.env.PUBLIC_URL}/${locale}/services/international-moving/`,
      languages: {
        ar: `${process.env.PUBLIC_URL}/ar/services/international-moving/`,
        en: `${process.env.PUBLIC_URL}/en/services/international-moving/`,
        "x-default": `${process.env.PUBLIC_URL}/en/services/international-moving/`,
      },
    },
    openGraph: {
      title:
        locale === "ar"
          ? "شركات نقل دولي آمنة ومناسبة في الإمارات"
          : "Safe and Timely International Movers in UAE",
      description:
        locale === "ar"
          ? "حمدان للم نقل: نقل دولي سهل. تعبئة وتغليف، شحن، جمارك، تسليم حتى الباب. انتقال بدون ضغوط. ثق بنا!"
          : "Hamdan Movers: Global moving made easy. Expert packing, shipping, customs, door-to-door. Stress-free relocation. Trust us!",
      url: `${process.env.PUBLIC_URL}/${locale}/services/international-moving/`,
      siteName: t("site-Info.name"),
      locale: locale,
      type: "website",
      alternateLocale: ["ar", "en"],
      countryName: t("site-Info.country"),
      faxNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      phoneNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      images: {
        url: `${process.env.PUBLIC_URL}/images/international-service.jpg`,
        alt: "International Movers In Dubai, UAE",
      },
    },
  };
}

function InternationalMovingService() {
  const p = useTranslations("service-process");
  const t = useTranslations("international");
  const locale = useLocale();
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
            {
              heading: t("part1.point4"),
              desc: t("part1.desc4"),
            },
          ]}
        />
        <ServiceHire
          title={t("hire.title")}
          desciption={t("hire.desc")}
          keyPoints={[t("hire.key1"), t("hire.key2"), t("hire.key3")]}
          image={hireUsImage}
        />
        <div className="-mt-10 flex justify-center">
          <div className="w-full md:w-11/12">
            <section className=" rounded-3xl md:py-10 md:px-10 px-1">
              <div className="md:ml-9 container mx-auto flex flex-col md:flex-row items-center justify-center">
                {/* Right Side - Content */}
                <div
                  dir={locale === "ar" ? "rtl" : "ltr"}
                  className={`md:-mr-28 md:-mt-0 z-20 rounded-lg shadow-lg shadow-neutral-100 bg-white p-4 md:w-1/2 text-center ${
                    locale === "ar"
                      ? "md:text-right md:pr-10 "
                      : "md:text-left md:pl-10 "
                  }`}
                >
                  <h3
                    className={`text-[#FF5F00] font-bold mb-2 ${
                      locale === "ar"
                        ? "font-arabic text-base"
                        : "text-sm uppercase"
                    }`}
                  >
                    {locale === "ar" ? "أسعار النقل" : "moving Pricing"}
                  </h3>
                  <h2
                    className={`text-3xl ${
                      locale === "ar" ? "font-arabic" : ""
                    } font-bold text-gray-900 mb-4`}
                  >
                    {t("pricing.title")}
                  </h2>
                  <p
                    className={`text-gray-600 mb-6 ${
                      locale === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {t("pricing.desc")}
                  </p>
                </div>

                {/* Left Side - Image */}
                <div className="md:w-1/2 flex  justify-center">
                  <div className="md:w-96 w-[350px] h-[420px] relative ">
                    <Image
                      src={interMovingPrice}
                      fill
                      sizes="100"
                      className="z-10 object-cover rounded-lg"
                      placeholder="blur"
                      alt="professional movers in dubai hamdan"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
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

      <Footer />
    </>
  );
}

export default InternationalMovingService;
