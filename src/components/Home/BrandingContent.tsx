import {
  IconTruckDelivery,
  IconZoomMoney,
  IconClock24,
  IconUsersGroup,
} from "@tabler/icons-react";
import { HeartHandshake, PartyPopperIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
function BrandingContent() {
  const locale = useLocale();
  const t = useTranslations("BrandingContent");
  const b = useTranslations("buttons");
  return (
    <>
      <div className="w-full md:w-11/12 mt-5">
        <section
          dir={locale === "ar" ? "rtl" : "ltr"}
          className="rounded-3xl md:py-16 pt-10  md:px-10 px-0"
        >
          <div className="md:mr-3 container mx-auto flex flex-col md:flex-row items-center">
            {/* Left Side - Image */}
            <div className="md:w-1/2 flex order-2  justify-center">
              <div className=" flex items-center justify-start md:px-8 px-8 rounded-3xl shadow-xl shadow-neutral-100 lg:w-[420px] md:w-[80%] w-full h-[400px] bg-white">
                <div
                  className={`${
                    locale === "ar" ? "font-arabic" : "font-poppins"
                  } flex flex-col md:gap-y-7 gap-y-5`}
                >
                  <div className="flex gap-x-5 items-center border-b border-[#105572] pb-2">
                    <IconTruckDelivery strokeWidth={1.5} className="text-[#105572]" />
                    <h3
                      className={`md:text-[21px] text-[18px] text-black ${
                        locale === "ar"
                          ? "font-bold font-arabic"
                          : "font-semibold font-poppins"
                      }`}
                    >
                      {t("one")}
                    </h3>
                  </div>
                  <div className="flex gap-x-5 items-center border-b border-[#105572] pb-2">
                    <IconZoomMoney strokeWidth={1.5} className="text-[#105572]" />
                    <h3
                      className={`md:text-[21px] text-[18px] text-black ${
                        locale === "ar"
                          ? "font-bold font-arabic"
                          : "font-semibold font-poppins"
                      }`}
                    >
                      {t("two")}
                    </h3>
                  </div>
                  <div className="flex gap-x-5 items-center border-b border-[#105572] pb-2">
                    <PartyPopperIcon strokeWidth={1.5} className="text-[#105572]" />
                    <h3
                      className={`md:text-[21px] text-[18px] text-black ${
                        locale === "ar"
                          ? "font-bold font-arabic"
                          : "font-semibold font-poppins"
                      }`}
                    >
                      {t("three")}
                    </h3>
                  </div>
                  <div className="flex gap-x-5 items-center border-b border-[#105572] pb-2">
                    <IconClock24 strokeWidth={1.5} className="text-[#105572]" />
                    <h3
                      className={`md:text-[21px] text-[18px] text-black ${
                        locale === "ar"
                          ? "font-bold font-arabic"
                          : "font-semibold font-poppins"
                      }`}
                    >
                      {t("four")}
                    </h3>
                  </div>
                  <div className="flex gap-x-5 items-center border-b border-[#105572] pb-2">
                    <IconUsersGroup strokeWidth={1.5} className="text-[#105572]" />
                    <h3
                      className={`md:text-[21px] text-[18px] text-black ${
                        locale === "ar"
                          ? "font-bold font-arabic"
                          : "font-semibold font-poppins"
                      }`}
                    >
                      {t("five")}
                    </h3>
                  </div>
                  <div className="flex gap-x-5 items-center border-b border-[#105572] pb-2">
                    <HeartHandshake strokeWidth={1.5} className="text-[#105572]" />
                    <h3
                      className={`md:text-[21px] text-[18px] text-black ${
                        locale === "ar"
                          ? "font-bold font-arabic"
                          : "font-semibold font-poppins"
                      }`}
                    >
                      {t("six")}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div
              className={`${
                locale === "ar" ? "md:text-right" : "md:text-left"
              } order-1 md:-mt-0 -mt-10 md:p-4 py-4 px-2 md:w-1/2 md:pl-10 text-center`}
            >
              <h2
                className={
                  locale === "ar"
                    ? "md:leading-[45px] font-arabic font-bold leading-10"
                    : ""
                }
              >
                {t("title")}
              </h2>
              <p
                className={`${
                  locale === "ar" ? "font-arabic ar-p mt-4" : "md:mt-6 mt-3"
                } mb-6`}
              >
                {t("description")}
              </p>

              <div className="flex justify-center md:justify-start space-x-4 md:mb-8 mb-4">
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
}

export default BrandingContent;
