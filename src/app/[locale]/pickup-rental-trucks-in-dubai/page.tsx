import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import serviceImage from "../../../../public/images/pickup-rent-services-3-trans.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import { Link } from "@/i18n/routing";
import truck1 from "../../../../public/images/1.5-ton-truck.jpg";
import truck2 from "../../../../public/images/3-tom.jpg";
import truck3 from "../../../../public/images/pickup-rent-services-3.jpeg";
import ServiceHire from "@/components/ServiceHire";

import { PhoneForwardedIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import TestimonialSection from "@/components/Testimonials";
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
        ? "تأجير بيك آب بأسعار معقولة للاستخدام التجاري والشخصي في دبي"
        : "Affordable Pickup Trucks for Business & Personal in Dubai",
    description:
      locale === "ar"
        ? "تبحث عن خدمات تأجير بيك آب موثوقة في دبي؟ نقدم شاحنات متنوعة لنقل البضائع، النقل أو الخدمات اللوجستية — حلول فعالة وسهلة لكل مهمة"
        : "Looking for reliable pickup rental services in Dubai? We offer versatile trucks for moving goods, transport, or logistics—efficient, hassle-free solutions for every job.",
    alternates: {
      canonical: `${process.env.PUBLIC_URL}/${locale}/pickup-rental-trucks-in-dubai/`,
      languages: {
        ar: `${process.env.PUBLIC_URL}/ar/pickup-rental-trucks-in-dubai/`,
        en: `${process.env.PUBLIC_URL}/en/pickup-rental-trucks-in-dubai/`,
        "x-default": `${process.env.PUBLIC_URL}/en/pickup-rental-trucks-in-dubai/`,
      },
    },
    openGraph: {
      title:
        locale === "ar"
          ? "تأجير بيك آب بأسعار معقولة للاستخدام التجاري والشخصي في دبي"
          : "Affordable Pickup Trucks for Business & Personal in Dubai",
      description:
        locale === "ar"
          ? "تبحث عن خدمات تأجير بيك آب موثوقة في دبي؟ نقدم شاحنات متنوعة لنقل البضائع، النقل أو الخدمات اللوجستية — حلول فعالة وسهلة لكل مهمة"
          : "Looking for reliable pickup rental services in Dubai? We offer versatile trucks for moving goods, transport, or logistics—efficient, hassle-free solutions for every job.",
      url: `${process.env.PUBLIC_URL}/${locale}/pickup-rental-trucks-in-dubai/`,
      siteName: t("site-Info.name"),
      locale: locale,
      type: "website",
      alternateLocale: ["ar", "en"],
      countryName: t("site-Info.country"),
      faxNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      phoneNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      images: {
        url: `${process.env.PUBLIC_URL}/images/pickup-rent-services-3-trans.png`,
        alt: "1.5 Ton / 3 Ton Pickup Trucks For Rent in Dubai",
      },
    },
  };
}

function PerServiceSec() {
  const locale = useLocale();
  const t = useTranslations("pickup-dubai");
  const tt = useTranslations("pickup");
  const b = useTranslations("buttons");
  const boxData = [
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
  ];
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center gap-y-16">
        <div dir={locale === "ar" ? "rtl" : "ltr"} className="md:mt-48 mt-36">
          <div
            className={`grid md:grid-cols-2 grid-cols-1 md:gap-x-4 gap-y-9 items-center ${
              locale === "ar" ? "md:mr-[60px]" : "md:ml-[60px]"
            }`}
          >
            <div className="min-h-40 ">
              <h1 className={locale === "ar" ? "font-bold" : ""}>
                {t("title")}
              </h1>
              <h3
                className={`mt-4 ${
                  locale === "ar"
                    ? "font-arabic md:text-[27px] leading-9"
                    : "font-poppins md:text-[22px]"
                }`}
              >
                {t("sub")}
              </h3>
              <p className={`mt-2 ${locale === "ar" ? "ar-p" : ""}`}>
                {t("desc")}
              </p>
              <div className="mt-5">
                <Link href={"tel:+971503626685"}>
                  <Button>
                    {b("call now")}: <span dir="ltr">+971 503626685</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="md:w-[550px] w-[350px] md:h-80 h-60 relative">
                <Image
                  src={serviceImage}
                  fill
                  placeholder="blur"
                  className="object-contain drop-shadow-lg"
                  alt={"Cheap Pickup Rental Services In UAE"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-11/12 mt-14">
          <h2
            className={`text-center mb-4 ${
              locale === "ar" ? "font-arabic font-bold" : ""
            }`}
          >
            {t("part1.title")}
          </h2>
          <p className={`text-center ${locale === "ar" ? "ar-p" : ""}`}>
            {t("part1.desc")}
          </p>
          <div className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-7">
            {boxData.map((box, i) => (
              <div
                key={i}
                className="min-h-32 bg-white shadow-lg shadow-neutral-100 border border-neutral-200 py-4 px-3 rounded-2xl"
              >
                <h3
                  className={`md:text-[21px]  md:leading-6 text-center mb-1 ${
                    locale === "ar"
                      ? "font-arabic font-bold"
                      : "font-poppins font-medium"
                  }`}
                >
                  {box.heading}
                </h3>
                <div className="w-full h-px bg-neutral-100 px-10"></div>
                <p
                  className={`text-center mt-2 gr ${
                    locale === "ar" ? "ar-p" : "text-[15.2px]"
                  }`}
                >
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-11/12 min-h-32 mt-8">
          <h2
            className={`text-center mb-5 ${locale === "ar" ? "font-bold" : ""}`}
          >
            {tt("size")}
          </h2>
          <p
            className={`text-center md:px-16 mt-3 ${
              locale === "ar" ? "ar-p" : ""
            }`}
          >
            {t("part1.truckdesc")}
          </p>
          <div className="w-full grid lg:grid-flow-col md:grid-flow-row grid-flow-row md:grid-col-2 md:gap-x-8 gap-y-8 md:px-24 mt-8">
            <div className="min-h-32 bg-neutral-50 border border-neutral-200 rounded-3xl flex items-center flex-col py-4 px-2">
              <div className="relative md:w-[450px] w-[327px] bg-gradient-to-t from-slate-100 to-slate-300 h-64 rounded-2xl">
                <Image
                  alt={"long term storage"}
                  src={truck1}
                  placeholder="blur"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3
                className={`text-center mt-5 mb-1 ${
                  locale === "ar" ? "font-bold" : "font-poppins"
                }`}
              >
                {tt("one.title")} <br /> {locale !== "ar" ? ` UAE` : `UAE `}
              </h3>
              <p
                className={`mt-2 md:px-3 ${
                  locale === "ar" ? "ar-p text-right" : "text-left"
                }`}
              >
                {t("part1.truck-desc1")}
              </p>
              <div className="w-full flex gap-x-3 mt-5 justify-center">
                <Link href={"tel:+971545019655"}>
                  <Button dir="ltr" variant={"light"} className="flex gap-x-2">
                    <PhoneForwardedIcon className="w-5 h-5" /> +971 54 501 9655
                  </Button>
                </Link>
              </div>
            </div>
            <div className="min-h-32 bg-neutral-50 border border-neutral-200 rounded-3xl flex items-center col-span-1 flex-col py-4 px-2">
              <div className="relative md:w-[450px] w-[327px] bg-gradient-to-t from-slate-100 to-slate-300 h-64 rounded-2xl">
                <Image
                  alt={"long term storage"}
                  src={truck2}
                  placeholder="blur"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <h3
                className={`text-center mt-5 mb-1 ${
                  locale === "ar" ? "font-bold" : "font-poppins"
                }`}
              >
                {tt("two.title")} <br /> {locale !== "ar" ? ` UAE` : `UAE `}
              </h3>
              <p
                className={`mt-2 md:px-3 ${
                  locale === "ar" ? "ar-p text-right" : "text-left"
                }`}
              >
                {t("part1.truck-desc-2")}
              </p>
              <div
                dir="ltr"
                className="w-full flex gap-x-3 mt-5 justify-center"
              >
                <Link href={"tel:+971503626685"}>
                  <Button className="flex gap-x-2">
                    <PhoneForwardedIcon className="w-5 h-5" /> +971 503626685
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-full text-center flex flex-col items-center justify-center mt-5">
            <p className="">
              Looking for{" "}
              <a href="https://moversandpackersinuae.com/movers-and-packers-in-dubai">
                professional movers in dubai
              </a>
              , contact us today for{" "}
              <a href="https://moversandpackersinuae.com/movers-and-packers-in-dubai">
                moving and packing services in dubai
              </a>{" "}
              at affordable prices.
            </p>
            <Button className="mt-5" variant={"secondary"}>
              <Link href={"/services-locations/movers-and-packers-dubai/"}>
                {b("Contact Us")}
              </Link>
            </Button>
          </div>
        </div>
        <ServiceHire
          title={t("hire")}
          desciption={t("hire-desc")}
          image={truck3}
          keyPoints={[t("key1"), t("key2"), t("key3"), t("key4")]}
        />
        <TestimonialSection />
      </div>
      <BackLinks />
      <Footer />
    </>
  );
}

export default PerServiceSec;
