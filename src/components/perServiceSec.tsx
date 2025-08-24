import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { PhoneForwarded } from "lucide-react";
function PerServiceSec({
  title,
  subTitle,
  description,
  image,
}: {
  title: string;
  subTitle: string;
  description: string;
  image: StaticImageData;
}) {
  const locale = useLocale();
  const b = useTranslations("buttons");
  return (
    <div className="w-full md:w-11/12 md:mt-48 mt-36">
      <div
        dir={locale === "ar" ? "rtl" : "ltr"}
        className={`grid md:grid-cols-2 grid-cols-1 md:gap-x-4 gap-y-9 items-center ${
          locale === "ar" ? "md:mr-[60px]" : "md:ml-[60px]"
        }`}
      >
        <div className="min-h-40 ">
          <h1
            className={
              locale === "ar"
                ? "font-arabic font-bold md:leading-[60px] leading-[48px]"
                : ""
            }
          >
            {title}
          </h1>
          <h3
            className={` ${
              locale === "ar"
                ? "font-arabic font-[25px] mt-5"
                : "font-poppins text-[22px] mt-4"
            }`}
          >
            {subTitle}
          </h3>
          <p className={locale === "ar" ? "ar-p mt-3" : "mt-2"}>
            {description}
          </p>
          <div className="w-full flex gap-x-5 mt-5">
            <Link href={"#contact"}>
              <Button>{b("contact-now")}</Button>
            </Link>
            <Link className="" href={"tel:+971566651978"}>
              <Button dir="ltr" variant={"light"}>
                <PhoneForwarded className="mr-2 w-5 h-5" />{" "}
                <span dir="ltr">{b("call now")} </span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="md:w-[450px] w-80 md:h-96 h-96 relative">
            <Image
              src={image}
              fill
              loading="eager"
              quality={60}
              placeholder="blur"
              className="object-cover drop-shadow-lg"
              style={{
                borderRadius: "30% 70% 70% 30% / 29% 23% 77% 71% ",
              }}
              alt={title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerServiceSec;
