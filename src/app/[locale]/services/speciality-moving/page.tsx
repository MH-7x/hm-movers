import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import PerServiceSec from "@/components/perServiceSec";
import imageSrc from "../../../../../public/images/speciality-moving.jpg";
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
import artImg from "../../../../../public/images/art-moving.jpg";
import pianoImg from "../../../../../public/images/piano-moving.jpg";
import cratingImg from "../../../../../public/images/crating.jpg";
import specialtyImg from "../../../../../public/images/Specialty.jpg";

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
    title: "Specialty Movers for Unique Items in the UAE | Hamdan Movers",
    description:
      "Specialty moving requires expert care for fragile, valuable, or bulky items. Hamdan Movers ensures safe transport for everything from art to pianos with professional handling and the right equipment. Trust us to protect your valuables during the move",
    alternates: {
      canonical: `${process.env.PUBLIC_URL}/${locale}/services/speciality-moving/`,
      languages: {
        ar: `${process.env.PUBLIC_URL}/ar/services/speciality-moving/`,
        en: `${process.env.PUBLIC_URL}/en/services/speciality-moving/`,
        "x-default": `${process.env.PUBLIC_URL}/en/services/speciality-moving/`,
      },
    },
    openGraph: {
      title: "Specialty Movers for Unique Items in the UAE | Hamdan Movers",
      description:
        "Specialty moving requires expert care for fragile, valuable, or bulky items. Hamdan Movers ensures safe transport for everything from art to pianos with professional handling and the right equipment. Trust us to protect your valuables during the move",
      url: `${process.env.PUBLIC_URL}/${locale}/services/speciality-moving/`,
      siteName: t("site-Info.name"),
      locale: locale,
      type: "website",
      alternateLocale: ["ar", "en"],
      countryName: t("site-Info.country"),
      faxNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      phoneNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      images: {
        url: `${process.env.PUBLIC_URL}/${locale}/services/speciality-moving.jpg`,
        alt: "Specialty Movers for Unique Items in Dubai, UAE",
      },
    },
  };
}

function SpecialityMovingService() {
  const p = useTranslations("service-process");
  const t = useTranslations("speciality");
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
        <div className="w-full md:w-11/12 min-h-32 mt-8">
          <h2
            className={`text-center ${
              locale === "ar" ? "font-arabic font-bold" : ""
            }`}
          >
            {t("plus.title")} <br />
            {t("plus.title2")}
          </h2>
          <p
            className={`text-center md:px-16 mt-3 ${
              locale === "ar" ? "ar-p" : ""
            }`}
          >
            {t("plus.desc")}
          </p>
          <div className="w-full md:grid-flow-col grid-flow-row grid md:grid-col-2 md:gap-x-8 gap-y-8 md:px-24 mt-8">
            <div className="min-h-32 bg-neutral-50 border border-neutral-200 rounded-3xl flex items-center flex-col py-4 px-2">
              <div className="relative md:w-[450px] w-[327px] bg-gradient-to-t from-slate-100 to-slate-300 h-64 rounded-2xl">
                <Image
                  alt={"Art and Antique Moving"}
                  src={artImg}
                  placeholder="blur"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3
                className={`text-center mt-4 ${
                  locale === "ar"
                    ? "font-arabic font-bold mb-1"
                    : "font-poppins"
                }`}
              >
                {t("plus.one.bold")}
              </h3>
              <p
                className={`mt-2 md:px-3 ${
                  locale === "ar" ? "ar-p text-right" : ""
                }`}
              >
                {t("plus.one.cont")}
              </p>
            </div>
            <div className="min-h-32 bg-neutral-50 border border-neutral-200 rounded-3xl flex items-center col-span-1 flex-col py-4 px-2">
              <div className="relative md:w-[450px] w-[327px] bg-gradient-to-t from-slate-100 to-slate-300 h-64 rounded-2xl">
                <Image
                  alt={"piano moving hamdan movers"}
                  src={pianoImg}
                  placeholder="blur"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3
                className={`text-center mt-4 ${
                  locale === "ar"
                    ? "font-arabic font-bold mb-1"
                    : "font-poppins"
                }`}
              >
                {t("plus.two.bold")}
              </h3>
              <p
                className={`mt-2 md:px-3 ${
                  locale === "ar" ? "ar-p text-right" : ""
                }`}
              >
                {t("plus.two.cont")}
              </p>
            </div>
          </div>
          <div className="w-full md:grid-flow-col grid-flow-row grid md:grid-col-2 md:gap-x-8 gap-y-8 md:px-24 mt-8">
            <div className="min-h-32 bg-neutral-50 border border-neutral-200 rounded-3xl flex items-center flex-col py-4 px-2">
              <div className="relative md:w-[450px] w-[327px] bg-gradient-to-t from-slate-100 to-slate-300 h-64 rounded-2xl">
                <Image
                  alt={"creating packing"}
                  src={cratingImg}
                  placeholder="blur"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3
                className={`text-center mt-4 ${
                  locale === "ar"
                    ? "font-arabic font-bold mb-1"
                    : "font-poppins"
                }`}
              >
                {t("plus.three.bold")}
              </h3>
              <p
                className={`mt-2 md:px-3 ${
                  locale === "ar" ? "ar-p text-right" : ""
                }`}
              >
                {t("plus.three.cont")}
              </p>
            </div>
            <div className="min-h-32 bg-neutral-50 border border-neutral-200 rounded-3xl flex items-center col-span-1 flex-col py-4 px-2">
              <div className="relative md:w-[450px] w-[327px] bg-gradient-to-t from-slate-100 to-slate-300 h-64 rounded-2xl">
                <Image
                  alt={"Specialty Appliance"}
                  src={specialtyImg}
                  placeholder="blur"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3
                className={`text-center mt-4 ${
                  locale === "ar"
                    ? "font-arabic font-bold mb-1"
                    : "font-poppins"
                }`}
              >
                {t("plus.four.bold")}
              </h3>
              <p
                className={`mt-2 md:px-3 ${
                  locale === "ar" ? "ar-p text-right" : ""
                }`}
              >
                {t("plus.four.cont")}
              </p>
            </div>
          </div>
        </div>
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

      <Footer />
    </>
  );
}

export default SpecialityMovingService;
