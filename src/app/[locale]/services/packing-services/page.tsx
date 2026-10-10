import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import PerServiceSec from "@/components/perServiceSec";
import imageSrc from "../../../../../public/images/packing-unpacking.jpg";
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
import { Button } from "@/components/ui/button";
import TestimonialSection from "@/components/Testimonials";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
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
        ? "أفضل خدمات التعبئة في دبي | حمدان موفرز"
        : "Best Packing Services in Dubai, UAE | Hamdan Movers",
    description:
      locale === "ar"
        ? "توفر حمدان موفرز خدمات تعبئة احترافية في جميع أنحاء الإمارات، لضمان تعبئة آمنة لممتلكاتك باستخدام مواد عالية الجودة للنقل المحلي والدولي"
        : "Hamdan Movers offers expert packing services across the UAE, ensuring your belongings are safely packed using top-quality materials for local and long-distance moves.",
    alternates: {
      canonical: `${process.env.PUBLIC_URL}/${locale}/services/packing-services/`,
      languages: {
        ar: `${process.env.PUBLIC_URL}/ar/services/packing-services/`,
        en: `${process.env.PUBLIC_URL}/en/services/packing-services/`,
        "x-default": `${process.env.PUBLIC_URL}/en/services/packing-services/`,
      },
    },
    openGraph: {
      title:
        locale === "ar"
          ? "أفضل خدمات التعبئة في دبي | حمدان موفرز"
          : "Best Packing Services in Dubai, UAE | Hamdan Movers",
      description:
        locale === "ar"
          ? "توفر حمدان موفرز خدمات تعبئة احترافية في جميع أنحاء الإمارات، لضمان تعبئة آمنة لممتلكاتك باستخدام مواد عالية الجودة للنقل المحلي والدولي"
          : "Hamdan Movers offers expert packing services across the UAE, ensuring your belongings are safely packed using top-quality materials for local and long-distance moves.",
      url: `${process.env.PUBLIC_URL}/${locale}/services/packing-services/`,
      siteName: t("site-Info.name"),
      locale: locale,
      type: "website",
      alternateLocale: ["ar", "en"],
      countryName: t("site-Info.country"),
      faxNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      phoneNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      images: {
        url: `${process.env.PUBLIC_URL}/images/packing-unpacking.jpg`,
        alt: "Packing Services in Dubai, UAE | Hamdan Movers",
      },
    },
  };
}

function CommercialOfficeMovers() {
  const locale = useLocale();
  const t = useTranslations("packing");
  const p = useTranslations("service-process");
  const b = useTranslations("buttons");
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
        <div className="w-full md:w-11/12 mt-5">
          <section className="rounded-3xl md:py-16 pt-10  md:px-10 px-0">
            <div className="md:mr-3 container mx-auto flex flex-col md:flex-row items-center">
              {/* Left Side - Image */}
              <div className="md:w-1/2 flex order-2  justify-center">
                <div className=" flex items-center justify-start md:px-8 px-8 rounded-3xl shadow-xl shadow-neutral-100 lg:w-[480px] md:w-[80%] w-full h-[400px] bg-gradient-to-b from-yellow-100 via-white to-white">
                  <div className="flex flex-col md:gap-y-5 gap-y-3">
                    <div className="">
                      <h3
                        className={`text-black ${
                          locale === "ar"
                            ? "font-arabic font-bold text-right md:text-[20px] leading-8 text-[17px]"
                            : "font-poppins font-semibold md:text-[18px] text-[16px]"
                        }`}
                      >
                        {t("plus.one.bold")}:{" "}
                        <span className="font-normal">
                          {t("plus.one.cont")}
                        </span>
                      </h3>
                    </div>
                    <div className="">
                      <h3
                        className={`text-black ${
                          locale === "ar"
                            ? "font-arabic font-bold text-right md:text-[20px] leading-8 text-[17px]"
                            : "font-poppins font-semibold md:text-[18px] text-[16px]"
                        }`}
                      >
                        {t("plus.two.bold")}:{" "}
                        <span className="font-normal">
                          {t("plus.two.cont")}
                        </span>
                      </h3>
                    </div>
                    <div className="">
                      <h3
                        className={`text-black ${
                          locale === "ar"
                            ? "font-arabic font-bold text-right md:text-[20px] leading-8 text-[17px]"
                            : "font-poppins font-semibold md:text-[18px] text-[16px]"
                        }`}
                      >
                        {t("plus.three.bold")}:{" "}
                        <span className="font-normal">
                          {t("plus.three.cont")}
                        </span>
                      </h3>
                    </div>
                    <div className="">
                      <h3
                        className={`text-black ${
                          locale === "ar"
                            ? "font-arabic font-bold text-right md:text-[20px] leading-8 text-[17px]"
                            : "font-poppins font-semibold md:text-[18px] text-[16px]"
                        }`}
                      >
                        {t("plus.four.bold")}:{" "}
                        <span className="font-normal">
                          {t("plus.four.cont")}
                        </span>
                      </h3>
                    </div>
                    <div className="">
                      <h3
                        className={`text-black ${
                          locale === "ar"
                            ? "font-arabic font-bold text-right md:text-[20px] leading-8 text-[17px]"
                            : "font-poppins font-semibold md:text-[18px] text-[16px]"
                        }`}
                      >
                        {t("plus.five.bold")}:{" "}
                        <span className="font-normal">
                          {t("plus.five.cont")}
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div
                className={`order-1 md:-mt-0 -mt-10 p-4 md:w-1/2 md:pl-10 text-center  ${
                  locale === "ar" ? "md:text-right" : "md:text-left"
                }`}
              >
                <h2
                  className={
                    locale === "ar"
                      ? "font-arabic font-bold leading-[45px]"
                      : ""
                  }
                >
                  {t("plus.title")}
                </h2>
                <p
                  className={`text-gray-600 mb-6 md:mt-2 mt-3 ${
                    locale === "ar" ? "ar-p" : ""
                  }`}
                >
                  {t("plus.desc")}
                </p>

                <Link href={"/contact-us/"}>
                  <Button>{b("Contact Us")}</Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
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
              desc: t("part1.desc2"),
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

export default CommercialOfficeMovers;
