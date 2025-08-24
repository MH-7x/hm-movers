import React from "react";
import Image, { StaticImageData } from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { Link } from "@/i18n/routing";
const ServiceHire = ({
  title,
  desciption,
  keyPoints,
  image,
}: {
  title: string;
  desciption: string;
  keyPoints: string[];
  image: StaticImageData;
}) => {
  const locale = useLocale();
  const b = useTranslations("buttons");
  return (
    <>
      <div className="w-full md:w-11/12 mt-5">
        <section className="bg-gray-50 rounded-3xl md:py-16 py-10 md:px-10 px-1">
          <div className="md:ml-3 container mx-auto flex flex-col md:flex-row items-center">
            {/* Left Side - Image */}
            <div className="md:w-1/2 flex justify-center">
              <div className="md:w-96 w-[360px] h-[465px] relative ">
                <Image
                  src={image}
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
              className={`md:-ml-28 md:-mt-0 z-20 -mt-20 rounded-lg shadow-lg shadow-neutral-100 bg-white p-4 md:w-1/2  text-center  ${
                locale === "ar"
                  ? "md:pr-10 md:text-right"
                  : "md:pl-10 md:text-left"
              }`}
            >
              <h3
                className={`text-[#FF5F00]  uppercase font-bold mb-2 ${
                  locale === "ar" ? "font-arabic text-base" : "text-sm"
                }`}
              >
                {locale === "ar" ? "استأجر محترفين" : "Hire A Professionals"}
              </h3>
              <h2
                className={`text-3xl font-bold text-gray-900 mb-4 ${
                  locale === "ar" ? "font-arabic mt-2 leading-[43px]" : ""
                }`}
              >
                {title}
              </h2>
              <p
                className={`text-gray-600 mb-2 text-start ${
                  locale === "ar" ? "ar-p" : ""
                }`}
              >
                {desciption}
              </p>
              <ol className="custom-symbol my-4">
                {keyPoints.map((keyPoint, index) => (
                  <li
                    key={index}
                    className={`text-black text-start mb-3 ${
                      locale === "ar"
                        ? "font-bold font-arabic text-[20px]"
                        : "font-medium"
                    }`}
                  >
                    {keyPoint}
                  </li>
                ))}
              </ol>
              <div className="mt-8 mb-8">
                <Link href={"/contact-us/"}>
                  <Button>{b("Contact Us")}</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceHire;
