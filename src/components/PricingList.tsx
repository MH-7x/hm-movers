import React from "react";
import imageSrc from "../../public/images/pricing-image.jpg";
import Image from "next/image";
import PricingTable from "./PricingTable";
import { Button } from "./ui/button";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
function PricingList({
  city,
  isHome = false,
}: {
  city?: string;
  isHome?: boolean;
}) {
  const t = useTranslations("pricingContent");
  const b = useTranslations("buttons");
  const c = useTranslations("content");
  const locale = useLocale();
  const lis = [
    {
      title: c("sub2-li1.title"),
      desc: c("sub2-li1.desc"),
    },
    {
      title: c("sub2-li2.title"),
      desc: c("sub2-li2.desc"),
    },
    {
      title: c("sub2-li3.title"),
      desc: c("sub2-li3.desc"),
    },
    {
      title: c("sub2-li4.title"),
      desc: c("sub2-li4.desc"),
    },
    {
      title: c("sub2-li5.title"),
      desc: c("sub2-li5.desc"),
    },
    {
      title: c("sub2-li6.title"),
      desc: c("sub2-li6.desc"),
    },
    {
      title: c("sub2-li7.title"),
      desc: c("sub2-li7.desc"),
    },
  ];
  const lis2 = [
    {
      title: c("sub2-li8.title"),
      desc: c("sub2-li8.desc"),
    },
    {
      title: c("sub2-li9.title"),
      desc: c("sub2-li9.desc"),
    },
    {
      title: c("sub2-li10.title"),
      desc: c("sub2-li10.desc"),
    },
    {
      title: c("sub2-li11.title"),
      desc: c("sub2-li11.desc"),
    },
  ];
  return (
    <div className="w-full md:w-11/12 mt-5">
      <section className=" rounded-3xl md:py-10 md:px-10">
        <div className="md:ml-9 container mx-auto flex flex-col md:flex-row items-center justify-center ">
          {/* Right Side - Content */}
          <div
            className={`md:-mr-28 md:-mt-0 z-20 rounded-lg shadow-lg shadow-neutral-100 bg-white p-4 md:w-1/2 text-center ${
              locale === "ar"
                ? "md:text-right md:pr-10"
                : "md:text-left md:pl-10"
            }`}
          >
            <h3
              className={`text-[#db5e16] uppercase ${
                locale === "ar" ? " mb-4 text-base " : "text-sm font-bold mb-2"
              }`}
            >
              {t("top")}
            </h3>
            <h2
              className={`text-3xl font-bold text-gray-900 mb-4 ${
                locale === "ar" ? "" : ""
              }`}
            >
              {t("title")}
            </h2>
            <p
              className={`text-gray-600 mb-6 ${locale === "ar" ? "ar-p" : ""}`}
            >
              {t("desc")}
            </p>

            <div
              dir={locale === "ar" ? "rtl" : "ltr"}
              className="flex justify-center md:justify-start mb-8"
            >
              <Link href={"#pricingList"}>
                <Button variant={"light"}>{b("pricing")}</Button>
              </Link>
            </div>
          </div>

          {/* Left Side - Image */}
          <div className="md:w-1/2 flex  justify-center">
            <div className="md:w-96 w-[350px] h-[420px] relative ">
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
        </div>
      </section>
      <div
        dir={locale === "ar" ? "rtl" : "ltr"}
        className=" mt-5  flex justify-center"
      >
        <div className=" w-full md:w-10/12 rounded-3xl md:p-5 py-5 px-0">
          <div>
            <h2
              className={`${locale === "ar" ? " font-bold" : "font-poppins"}`}
            >
              {t("list.title")}
            </h2>
            <p className={locale === "ar" ? "ar-p mt-4" : "my-4"}>
              {t("list.desc")}
            </p>
            <h3 className={locale === "ar" ? "mt-4  text-2xl" : "font-poppins"}>
              {t("list.sub-heading")}
            </h3>
            <ol className={`custom-symbol mt-4 flex flex-col gap-y-2 `}>
              <li className={locale === "ar" ? "ar-p" : ""}>{t("list.one")}</li>
              <li className={locale === "ar" ? "ar-p" : ""}>{t("list.two")}</li>
              <li className={locale === "ar" ? "ar-p" : ""}>
                {t("list.three")}
              </li>
              <li className={locale === "ar" ? "ar-p" : ""}>
                {t("list.four")}
              </li>
              <li className={locale === "ar" ? "ar-p" : ""}>
                {t("list.five")}
              </li>
              <li className={locale === "ar" ? "ar-p" : ""}>{t("list.six")}</li>
            </ol>
          </div>
          <div id="pricingList" className="mt-10">
            <h2 className="text-center">{t("list.table-title")}</h2>
            <div className="mt-8 w-full">
              <PricingTable />
            </div>
          </div>
          {!isHome && (
            <div className="md:mt-16 mt-10 font-poppins">
              <h2 className={`${locale === "ar" ? " font-bold" : ""}`}>
                {c("title")} {city ? city : "UAE"}
              </h2>
              <p className={`${locale === "ar" ? "ar-p" : ""} my-4`}>
                {c("desc1")} {city ? city : "UAE"}, {c("desc2")}
              </p>
              <h3 className={locale === "ar" ? " text-2xl" : "font-poppins"}>
                {c("sub1")}
              </h3>
              <p className={`${locale === "ar" ? "ar-p" : ""} mt-2`}>
                {c("sub-desc1")}
              </p>
              <h3
                className={`${
                  locale === "ar" ? " text-2xl" : "font-poppins"
                } mt-3`}
              >
                {c("sub2")}
              </h3>
              <p className={`${locale === "ar" ? "ar-p" : ""} mt-2`}>
                {c("sub-desc2")}
              </p>
              <h3
                className={`${
                  locale === "ar" ? " text-3xl" : "font-poppins"
                } mt-2`}
              >
                {c("sub2-sub-title")}
              </h3>
              <ul
                style={{
                  listStyleType: "circle",
                }}
                className={`my-4 flex flex-col gap-y-1 ${
                  locale === "ar" ? "mr-5" : "ml-5"
                }`}
              >
                {lis.map((li, i) => (
                  <li className={locale === "ar" ? "ar-p gr" : ""} key={i}>
                    {li.title} : {li.desc}
                  </li>
                ))}
              </ul>
              <h3
                className={`${
                  locale === "ar" ? " text-3xl" : "font-poppins"
                } mt-2`}
              >
                {c("sub2-sub-title2")}
              </h3>
              <ul
                style={{
                  listStyleType: "circle",
                }}
                className={`my-4 flex flex-col gap-y-1 ${
                  locale === "ar" ? "mr-5" : "ml-5"
                }`}
              >
                {lis2.map((li, i) => (
                  <li className={locale === "ar" ? "ar-p gr" : ""} key={i}>
                    {li.title} : {li.desc}
                  </li>
                ))}
              </ul>
              <h3
                className={`mt-3 ${
                  locale === "ar" ? " text-2xl" : "font-poppins"
                }`}
              >
                {c("sub3")}
              </h3>
              <p className={`${locale === "ar" ? "ar-p" : ""} mt-2`}>
                {c("sub-desc3-1")} {city ? city : "UAE"} {c("sub-desc3-2")}
              </p>
              <h3
                className={`mt-3 ${
                  locale === "ar" ? " text-2xl" : "font-poppins"
                }`}
              >
                {c("sub4")}
              </h3>
              <p className={`${locale === "ar" ? "ar-p" : ""} mt-2`}>
                {c("sub-desc4")}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PricingList;
