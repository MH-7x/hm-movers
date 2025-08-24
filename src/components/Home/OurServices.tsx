import React from "react";
import { Button } from "../ui/button";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import local from "../../../public/ser/local-moving.png";
import commerical from "../../../public/ser/Commercial-moving.png";
import packing from "../../../public/ser/packing-and-loading-icon.png";
import storage from "../../../public/ser/storage-service.png";
import specialy from "../../../public/ser/specialiy-moving.png";
import internaltional from "../../../public/ser/international-shipping.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
function OurServices({ title, city }: { title?: string; city?: string }) {
  const locale = useLocale();
  const t = useTranslations("services");
  const b = useTranslations("buttons");
  return (
    <div id="services" className="md:w-11/12 w-full md:mt-5">
      <h2
        className={`text-center ${
          locale === "ar" ? "font-arabic font-bold" : ""
        }`}
      >
        {title ? title : t("title")}
      </h2>
      <p
        className={`text-center mt-5 md:px-20 ${
          locale === "ar" ? "ar-p " : "md:text-[17px]"
        }`}
      >
        {t("description")}
      </p>
      <div className="w-full mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {/* Local Moving */}
        <div className="bg-white shadow-lg shadow-neutral-100 rounded-3xl py-5 px-4">
          <div className="mb-1 flex w-full justify-center">
            <div className="relative w-16 h-16">
              <Image
                alt="Local Moving"
                src={local}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h4
            className={`text-center mt-2 ${
              locale === "ar"
                ? "font-arabic font-bold text-[25px]"
                : "font-poppins"
            }`}
          >
            {t("local.title")} <br /> {city && `${city}`}
          </h4>
          <p
            className={`gr text-center ${
              locale === "ar"
                ? "font-arabic ar-p mt-3"
                : "text-[15.3px] mt-1 md:leading-5 font-poppins"
            }`}
          >
            {t("local.desc")}
          </p>
          <div className="mt-5">
            <Link href={"/services/local-residential-movers/"}>
              <Button size={"sm"} variant={"link"} className="mt-2">
                <ArrowRight strokeWidth={1.4} className=" mr-1 size-[23px]" stroke="#105572"/>  {b("Service Detail")}
              </Button>

            </Link>
          </div>
        </div>
        {/* Commercial  Moving */}
        <div className="bg-white shadow-lg shadow-neutral-100 rounded-3xl py-5 px-4">
          <div className="mb-1 flex w-full justify-center">
            <div className="relative w-16 h-16">
              <Image
                alt="Commercial Moving"
                src={commerical}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h4
            className={`text-center mt-2 ${
              locale === "ar"
                ? "font-arabic font-bold text-[25px]"
                : "font-poppins"
            }`}
          >
            {t("commercial.title")} <br /> {city && `${city}`}
          </h4>
          <p
            className={`gr text-center ${
              locale === "ar"
                ? "font-arabic ar-p mt-3"
                : "text-[15.3px] mt-1 md:leading-5 font-poppins"
            }`}
          >
            {t("commercial.desc")}
          </p>
          <div className="mt-5">
            <Link href={"/services/commerical-office-movers/"}>
              <Button size={"sm"} variant={"link"} className="mt-2">
                <ArrowRight strokeWidth={1.4} className=" mr-1 size-[23px]" stroke="#105572"/>  {b("Service Detail")}
              </Button>

            </Link>
          </div>
        </div>
        {/* Packing and Unpacking */}
        <div className="bg-white shadow-lg shadow-neutral-100 rounded-3xl py-5 px-4">
          <div className="mb-1 flex w-full justify-center">
            <div className="relative w-16 h-16">
              <Image
                alt="packing and unpacking"
                src={packing}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h4
            className={`text-center mt-2 ${
              locale === "ar"
                ? "font-arabic font-bold text-[25px]"
                : "font-poppins"
            }`}
          >
            {t("packing.title")} <br /> {city && `${city}`}
          </h4>
          <p
            className={`gr text-center ${
              locale === "ar"
                ? "font-arabic ar-p mt-3"
                : "text-[15.3px] mt-1 md:leading-5 font-poppins"
            }`}
          >
            {t("packing.desc")}
          </p>
          <div className="mt-5">
            <Link href={"/services/packing-services/"}>
              <Button size={"sm"} variant={"link"} className="mt-2">
                <ArrowRight strokeWidth={1.4} className=" mr-1 size-[23px]" stroke="#105572"/>  {b("Service Detail")}
              </Button>

            </Link>
          </div>
        </div>
        {/* Storage Soluations */}
        <div className="bg-white shadow-lg shadow-neutral-100 rounded-3xl py-5 px-4">
          <div className="mb-1 flex w-full justify-center">
            <div className="relative w-16 h-16">
              <Image
                alt="storage services"
                src={storage}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h4
            className={`text-center mt-2 ${
              locale === "ar"
                ? "font-arabic font-bold text-[25px]"
                : "font-poppins"
            }`}
          >
            {t("storage.title")} <br /> {city && `${city}`}
          </h4>
          <p
            className={`gr text-center ${
              locale === "ar"
                ? "font-arabic ar-p mt-3"
                : "text-[15.3px] mt-1 md:leading-5 font-poppins"
            }`}
          >
            {t("storage.desc")}
          </p>
          <div className="mt-5">
            <Link href={"/services/storage-services/"}>
              <Button size={"sm"} variant={"link"} className="mt-2">
                <ArrowRight strokeWidth={1.4} className=" mr-1 size-[23px]" stroke="#105572"/>  {b("Service Detail")}
              </Button>

            </Link>
          </div>
        </div>
        {/* Specialty moving */}
        <div className="bg-white shadow-lg shadow-neutral-100 rounded-3xl py-5 px-4">
          <div className="mb-1 flex w-full justify-center">
            <div className="relative w-16 h-16">
              <Image
                alt="specialty Moving"
                src={specialy}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h4
            className={`text-center mt-2 ${
              locale === "ar"
                ? "font-arabic font-bold text-[25px]"
                : "font-poppins"
            }`}
          >
            {t("specialty.title")} <br /> {city && `${city}`}
          </h4>
          <p
            className={`gr text-center ${
              locale === "ar"
                ? "font-arabic ar-p mt-3"
                : "text-[15.3px] mt-1 md:leading-5 font-poppins"
            }`}
          >
            {t("specialty.desc")}
          </p>
          <div className="mt-5">
            <Link href={"/services/speciality-moving/"}>
              <Button size={"sm"} variant={"link"} className="mt-2">
                <ArrowRight strokeWidth={1.4} className=" mr-1 size-[23px]" stroke="#105572"/>  {b("Service Detail")}
              </Button>

            </Link>
          </div>
        </div>
        {/* International Moving */}
        <div className="bg-white shadow-lg shadow-neutral-100 rounded-3xl py-5 px-4">
          <div className="mb-1 flex w-full justify-center">
            <div className="relative w-16 h-16">
              <Image
                alt="internation Moving"
                src={internaltional}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h4
            className={`text-center mt-2 ${
              locale === "ar"
                ? "font-arabic font-bold text-[25px]"
                : "font-poppins"
            }`}
          >
            {t("international.title")}
            <br /> {city && `${city}`}
          </h4>
          <p
            className={`gr text-center ${
              locale === "ar"
                ? "font-arabic ar-p mt-3"
                : "text-[15.3px] mt-1 md:leading-5 font-poppins"
            }`}
          >
            {t("international.desc")}
          </p>
          <div className="mt-5">
            <Link href={"/services/international-moving/"}>
              <Button size={"sm"} variant={"link"} className="mt-2">
                <ArrowRight strokeWidth={1.4} className=" mr-1 size-[23px]" stroke="#105572"/>  {b("Service Detail")}
              </Button>

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
