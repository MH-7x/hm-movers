import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import imSrc from "../../../public/images/commercial-delivery-trucks-hamdan.png";
import truck2 from "../../../public/images/3-tom.jpg";
import truck1 from "../../../public/images/1.5-ton-truck.jpg";
import { Link } from "@/i18n/routing";
import { PhoneForwardedIcon, PhoneOutgoingIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
function PickUpRentalServices({ city }: { city?: string }) {
  const t = useTranslations("pickup");
  const locale = useLocale();
  return (
    <>
      <div className="w-full  md:px-0 px-2 b-bg flex justify-center">
        <div
          dir={locale === "ar" ? "rtl" : "ltr"}
          className={`
            ${locale === "ar" ? "md:mr-16" : "md:ml-16"}
            
            md:w-11/12 md:py-14 py-8 w-full grid md:grid-cols-2 grid-cols-1 justify-evenly gap-x-5 md:gap-0 gap-y-1
            `}
        >
          <div className="">
            <h2
              className={`text-white md:text-start text-center ${
                locale === "ar" ? "font-bold font-arabic" : ""
              }`}
            >
              {t("title")} {city ? city : "UAE"}
            </h2>
            <h3
              className={`${
                locale === "ar"
                  ? "font-arabic md:text-[25px] text-[20px] text-right"
                  : "font-poppins md:text-[22px] text-[18px] text-left"
              } text-white  mt-8 font-medium `}
            >
              {t("SubTitle")} {city ? city : "UAE"}
            </h3>
            <p
              className={`text-white ${
                locale === "ar" ? "mt-4 ar-p" : "mt-3 font-light"
              }`}
            >
              {t("desc1")} {city ? city : "UAE"}? {t("desc2")}
            </p>

            <Link href={"tel:+971566651978"}>
              <Button dir="ltr" className="mt-5">
                +971 566651978 <PhoneOutgoingIcon className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="relative h-80  w-full rounded-2xl">
            <Image
              alt="Pickup rental services hamdan"
              src={imSrc}
              fill
              placeholder="blur"
              className="object-contain "
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-11/12 flex justify-center gap-y-6 flex-col items-center">
        <div className="md:w-4/5">
          <h2
            className={`text-center ${
              locale === "ar"
                ? "font-arabic font-bold leading-[45px]"
                : "font-medium font-poppins"
            }`}
          >
            {t("size")}
          </h2>
        </div>
        <div className="w-full grid lg:grid-flow-col md:grid-flow-row grid-flow-row md:grid-col-2 md:gap-x-8 gap-y-8 md:px-24 mt-8">
          <div className="min-h-32 bg-neutral-50 border border-neutral-200 rounded-3xl flex items-center flex-col py-4 px-2">
            <div className="relative md:w-[450px] w-[327px] bg-gradient-to-t from-slate-100 to-slate-300 h-64 rounded-2xl">
              <Image
                alt={"1.5 Ton Pickup Truck For Rent"}
                src={truck1}
                placeholder="blur"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <h3
              className={`text-center mt-5 mb-1 ${
                locale === "ar"
                  ? "font-arabic font-bold leading-9"
                  : "font-poppins"
              }`}
            >
              {t("one.title")} <br />
              {city
                ? city
                : locale === "ar"
                ? "الإمارات"
                : "UAE"}
            </h3>
            <p
              className={`mt-2 md:px-3 ${
                locale === "ar" ? "font-arabic text-right ar-p" : ""
              }`}
            >
              {t("one.desc")}{" "}
              {city
                ? city
                : locale === "ar"
                ? "الإمارات "
                : "UAE"}{" "}
              {t("one.desc2")}
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
                alt={"3 ton pickup truck for rent"}
                src={truck2}
                placeholder="blur"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <h3
              className={`text-center mt-5 mb-1 ${
                locale === "ar"
                  ? "font-arabic font-bold leading-9"
                  : "font-poppins"
              }`}
            >
              {t("two.title")} <br />
              {city
                ? city
                : locale === "ar"
                ? "الإمارات "
                : "UAE"}
            </h3>
            <p
              className={`mt-2 md:px-3 ${
                locale === "ar" ? "font-arabic text-right ar-p" : ""
              }`}
            >
              {t("two.desc")}{" "}
              {city
                ? city
                : locale === "ar"
                ? "الإمارات "
                : "UAE"}{" "}
              {t("two.desc2")}
            </p>
            <div className="w-full flex gap-x-3 mt-5 justify-center">
              <Link href={"tel:+971503626685"}>
                <Button dir="ltr" className="flex gap-x-2">
                  <PhoneForwardedIcon className="w-5 h-5" /> +971 503626685
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PickUpRentalServices;
