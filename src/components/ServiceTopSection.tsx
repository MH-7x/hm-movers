import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import serviceImage from "../../public/images/services-image.jpg";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { PhoneForwarded } from "lucide-react";
function ServiceTopSection() {
  const locale = useLocale();
  const t = useTranslations("service");
  const b = useTranslations("buttons");
  return (
    <div className="w-full md:w-11/12 md:mt-48 mt-32">
      <div
        dir={locale === "ar" ? "rtl" : "ltr"}
        className={`grid md:grid-cols-2 grid-cols-1 md:gap-x-4 gap-y-9 items-center ${
          locale === "ar" ? "md:mr-[60px]" : "md:ml-[60px]"
        }`}
      >
        <div className="min-h-40 ">
          <h1 className={locale === "ar" ? "font-arabic font-bold" : ""}>
            {t("title")}
          </h1>
          <h3
            className={`   ${
              locale === "ar"
                ? "font-arabic text-[26px] md:mt-4 mt-6"
                : "font-poppins text-[22px] mt-4"
            }`}
          >
            {t("sub")}
          </h3>
          <p className={locale === "ar" ? "ar-p mt-3" : "mt-2"}>{t("desc")}</p>
          <div className="w-full flex gap-x-5 mt-5">
            <Link className="" href={"tel:+971566651978"}>
              <Button dir="ltr">
                <PhoneForwarded className="mr-2 w-5 h-5" />{" "}
                <span dir="ltr"> {b("call now")} </span>
              </Button>
            </Link>
            <Link href={"#services"}>
              <Button variant={"secondary"}>{b("Our Services")}</Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="md:w-[450px] w-80 md:h-96 h-96 relative">
            <Image
              src={serviceImage}
              fill
              loading="eager"
              quality={"60"}
              placeholder="blur"
              className="object-cover drop-shadow-lg"
              style={{
                borderRadius: "30% 70% 70% 30% / 29% 23% 77% 71% ",
              }}
              alt="Services hamdan movers"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceTopSection;
