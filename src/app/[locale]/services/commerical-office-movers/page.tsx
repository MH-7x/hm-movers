import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import PerServiceSec from "@/components/perServiceSec";
import imageSrc from "../../../../../public/images/office-relocation.jpg";
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
import { useTranslations } from "next-intl";
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
        ? "شركات نقل المكاتب التجارية بالقرب منك | دبي، الإمارات"
        : "Commercial Office Movers Near You | Dubai, UAE",
    description:
      locale === "ar"
        ? "حمدان للم نقل: شركات نقل المكاتب المؤمنة في الإمارات. خدمة على مدار الساعة، أسطول مزود بنظام تحديد المواقع العالمي (GPS)، حلول النقل، تأمين مجاني. اتصل بنا!"
        : "Hamdan Movers: UAE's insured office movers. 24/7 service, GPS fleet, relocation solutions, free insurance. Contact us!",
    alternates: {
      canonical: `${process.env.PUBLIC_URL}/${locale}/services/commerical-office-movers/`,
      languages: {
        ar: `${process.env.PUBLIC_URL}/ar/services/commerical-office-movers/`,
        en: `${process.env.PUBLIC_URL}/en/services/commerical-office-movers/`,
      },
    },
    openGraph: {
      title:
        locale === "ar"
          ? "شركات نقل المكاتب التجارية بالقرب منك | دبي، الإمارات"
          : "Commercial Office Movers Near You | Dubai, UAE",
      description:
        locale === "ar"
          ? "حمدان للم نقل: شركات نقل المكاتب المؤمنة في الإمارات. خدمة على مدار الساعة، أسطول مزود بنظام تحديد المواقع العالمي (GPS)، حلول النقل، تأمين مجاني. اتصل بنا!"
          : "Hamdan Movers: UAE's insured office movers. 24/7 service, GPS fleet, relocation solutions, free insurance. Contact us!",
      url: `${process.env.PUBLIC_URL}/${locale}/services/commerical-office-movers/`,
      siteName: t("site-Info.name"),
      locale: locale,
      type: "website",
      alternateLocale: ["ar", "en"],
      countryName: t("site-Info.country"),
      faxNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      phoneNumbers: ["+971566651978", "+971545019655", "+971503626685"],
      images: {
        url: `${process.env.PUBLIC_URL}/images/office-relocation.jpg`,
        alt:
          locale === "ar"
            ? "شركات نقل المكاتب التجارية بالقرب منك | دبي، الإمارات"
            : "Commercial Office Movers Near You | Dubai, UAE",
      },
    },
  };
}

function CommercialOfficeMovers() {
  const p = useTranslations("service-process");
  const t = useTranslations("commerical");
  return (
    <>
      <Navbar />
      <div
        dir=""
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
            {
              heading: t("part1.point5"),
              desc: t("part1.desc5"),
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
