import React from "react";
import { Button } from "./ui/button";
import pricingimage from "../../public/images/pricing-icon.png";
import reliableimage from "../../public/images/reliable-services-icon.png";
import planingimg from "../../public/images/detail-planing.png";
import teamimage from "../../public/images/team.png";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
function Benifits({ city }: { city?: string }) {
  const locale = useLocale();
  const t = useTranslations("benifits");
  const b = useTranslations("buttons");
  return (
    <div
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="md:mt-14 mt-8 mb-5 w-full md:w-11/12 grid md:grid-cols-2 md:gap-x-5 gap-y-7 grid-cols-1 items-center"
    >
      <div className="px-3 md:px-0 flex flex-wrap md:gap-5 gap-y-5 md:order-1 order-2">
        <div className="bg-white shadow-lg border border-neutral-100 shadow-neutral-100 px-3 py-2 rounded-2xl basis-full md:basis-[48%] flex flex-col items-center justify-center">
          <div className=" w-8 h-8 rounded-full flex items-center justify-center relative">
            <Image
              alt="Affordable Pricing"
              src={pricingimage}
              fill
              className="object-contain"
            />
          </div>
          <p
            className={`my-2 ${
              locale === "ar"
                ? "font-arabic font-bold text-[20px] mt-3"
                : "font-medium text-[18px]"
            }`}
          >
            {t("one.title")}
          </p>
          <p
            className={`gr leading-5 text-center ${
              locale === "ar" ? "font-arabic text-[17px] mt-1" : "text-[15px]"
            }`}
          >
            {t("one.desc")}
          </p>
        </div>
        <div className="bg-white shadow-lg border border-neutral-100 shadow-neutral-100 px-3 py-2 rounded-2xl basis-full md:basis-[48%] flex flex-col items-center justify-center">
          <div className=" w-8 h-8 rounded-full flex items-center justify-center relative">
            <Image
              alt="reliable services"
              src={reliableimage}
              fill
              className="object-contain"
            />
          </div>
          <p
            className={`my-2 ${
              locale === "ar"
                ? "font-arabic font-bold text-[20px] mt-3"
                : "font-medium text-[18px]"
            }`}
          >
            {t("two.title")}
          </p>
          <p
            className={`gr leading-5 text-center ${
              locale === "ar" ? "font-arabic text-[17px] mt-1" : "text-[15px]"
            }`}
          >
            {t("two.desc")}
          </p>
        </div>
        <div className="bg-white shadow-lg border border-neutral-100 shadow-neutral-100 px-3 py-2 rounded-2xl basis-full md:basis-[48%] flex flex-col items-center justify-center">
          <div className=" w-8 h-8 rounded-full flex items-center justify-center relative">
            <Image
              alt="Detailed Planning"
              src={planingimg}
              fill
              className="object-contain"
            />
          </div>
          <p
            className={`my-2 ${
              locale === "ar"
                ? "font-arabic font-bold text-[20px] mt-3"
                : "font-medium text-[18px]"
            }`}
          >
            {t("three.title")}
          </p>
          <p
            className={`gr leading-5 text-center ${
              locale === "ar" ? "font-arabic text-[17px] mt-1" : "text-[15px]"
            }`}
          >
            {t("three.desc")}
          </p>
        </div>
        <div className="bg-white shadow-lg border border-neutral-100 shadow-neutral-100 px-3 py-2 rounded-2xl basis-full md:basis-[48%] flex flex-col items-center justify-center">
          <div className=" w-8 h-8 rounded-full flex items-center justify-center relative">
            <Image
              alt="Trained Team"
              src={teamimage}
              fill
              className="object-contain"
            />
          </div>
          <p
            className={`my-2 ${
              locale === "ar"
                ? "font-arabic font-bold text-[20px] mt-3"
                : "font-medium text-[18px]"
            }`}
          >
            {t("four.title")}
          </p>
          <p
            className={`gr leading-5 text-center ${
              locale === "ar" ? "font-arabic text-[17px] mt-1" : "text-[15px]"
            }`}
          >
            {t("four.desc")}
          </p>
        </div>
      </div>
      <div className="md:p-4 p-0 md:order-2 order-1">
        <h2 className={locale === "ar" ? "font-arabic" : ""}>{t("title")}</h2>
        <p className={`mt-5 ${locale === "ar" ? "ar-p" : ""}`}>
          {t("desc1")} {city ? city : "UAE"}, {t("desc2")}
        </p>
        <Button className="mt-4">{b("contact-now")}</Button>
      </div>
    </div>
  );
}

export default Benifits;
