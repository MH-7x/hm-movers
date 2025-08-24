import React from "react";
import imageSrc from "../../../public/images/professional-moving-company-hamdan.jpg";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "../ui/button";
const WhyChooseUs: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("whyChooseUs");
  const b = useTranslations("buttons");
  return (
    <>
      <div className="w-full md:w-11/12 mt-5">
        <section className="bg-gray-50 rounded-3xl md:py-16 py-10 md:px-10 px-1">
          <div className="md:ml-3 container mx-auto flex flex-col md:flex-row items-center">
            {/* Left Side - Image */}
            <div className="md:w-1/2 flex  justify-center">
              <div className="md:w-96 w-[360px] h-[465px] relative ">
                <Image
                  src={imageSrc}
                  fill
                  sizes="100"
                  className="z-10 object-cover rounded-lg"
                  placeholder="blur"
                  alt="professional movers in dubai hamdan"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div
              dir={locale === "ar" ? "rtl" : "ltr"}
              className={`
                ${
                  locale === "ar"
                    ? "md:text-right md:pr-10 "
                    : "md:text-left md:pl-10"
                }
                md:-ml-28 md:-mt-0 z-20 -mt-20 rounded-lg shadow-lg shadow-neutral-100 bg-white p-4 md:w-1/2 text-center `}
            >
              <h3 className="text-[#db5e16] text-sm uppercase font-bold mb-2">
                {t("top")}
              </h3>
              <h2
                className={`text-3xl font-bold text-gray-900 mb-4 ${
                  locale === "ar" ? "leading-10 font-arabic" : ""
                }`}
              >
                {t("title")}
              </h2>
              <p
                className={`text-gray-600 mb-6 ${
                  locale === "ar" ? "font-arabic md:leading-7" : ""
                }`}
              >
                {t("description")}
              </p>

              <div className="flex item-center gap-x-4 mb-8">
                <Link href={"/contact-us/"}>
                  <Button>{b("Contact Us")}</Button>
                </Link>
                <Link href={"/about-us/"}>
                  <Button variant={"light"}>{b("Know More")}</Button>
                </Link>
              </div>

              <div className="flex justify-center md:justify-start gap-x-8 text-gray-800">
                <div className="text-center">
                  <h3 dir="ltr" className="text-3xl font-bold">
                    6+
                  </h3>
                  <p
                    className={`text-gray-600 ${
                      locale === "ar" ? "font-arabic ar-p font-bold" : ""
                    }`}
                  >
                    {t("years")}
                  </p>
                </div>
                <div className="text-center">
                  <h3 dir="ltr" className="text-3xl font-bold">
                    412+
                  </h3>
                  <p
                    className={`text-gray-600 ${
                      locale === "ar" ? "font-arabic ar-p font-bold" : ""
                    }`}
                  >
                    {t("projects")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhyChooseUs;
