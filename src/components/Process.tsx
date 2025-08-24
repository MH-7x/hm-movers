import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const WorkProcessSection: React.FC = () => {
  const t = useTranslations("workProcess");
  const locale = useLocale();
  return (
    <div className="w-full md:w-11/12">
      <section className="work-process-section">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-800">
            <span className="text-[#FF5F00]">{t("heading")}</span>
          </h2>
          <h2 className={`my-4 ${locale === "ar" ? "font-bold" : ""}`}>
            {t("title")}
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-12">
            {/* Step 1 */}
            <div className="step flex flex-col items-center shadow-xl shadow-neutral-50 p-2 rounded-2xl">
              <div className="icon p-6 border border-yellow-400 rounded-full mb-4">
                {/* Replace with proper icon */}
                <Image
                  src="/images/Initial-Consultation-icon.png"
                  alt="Book Service"
                  width={60}
                  height={60}
                />
              </div>
              <span
                className={` ${
                  locale === "ar"
                    ? "font-arabic text-2xl"
                    : "text-lg font-semibold font-poppins"
                }`}
              >
                {t("one.tit")}
              </span>
              <p
                className={` text-gray-500 mt-2 ${
                  locale === "ar" ? "ar-p" : "text-sm"
                }`}
              >
                {t("one.desc")}
              </p>
            </div>
            <div className="step flex flex-col items-center shadow-xl shadow-neutral-50 p-2 rounded-2xl">
              <div className="icon p-6 border border-yellow-400 rounded-full mb-4">
                {/* Replace with proper icon */}
                <Image
                  src="/images/before-we-move-icon.png"
                  alt="Book Service"
                  width={60}
                  height={60}
                />
              </div>
              <span
                className={` ${
                  locale === "ar"
                    ? "font-arabic text-2xl"
                    : "text-lg font-semibold font-poppins"
                }`}
              >
                {t("two.tit")}
              </span>
              <p
                className={` text-gray-500 mt-2 ${
                  locale === "ar" ? "ar-p" : "text-sm"
                }`}
              >
                {t("two.desc")}
              </p>
            </div>
            <div className="step flex flex-col items-center shadow-xl shadow-neutral-50 p-2 rounded-2xl">
              <div className="icon p-6 border border-yellow-400 rounded-full mb-4">
                {/* Replace with proper icon */}
                <Image
                  src="/images/moving-plan-icon.png"
                  alt="Book Service"
                  width={60}
                  height={60}
                />
              </div>
              <span
                aria-label="Icon Button"
                className={` ${
                  locale === "ar"
                    ? "font-arabic text-2xl"
                    : "text-lg font-semibold font-poppins"
                }`}
              >
                {t("three.tit")}
              </span>
              <p
                className={` text-gray-500 mt-2 ${
                  locale === "ar" ? "ar-p" : "text-sm"
                }`}
              >
                {t("three.desc")}
              </p>
            </div>
            <div className="step flex flex-col items-center shadow-xl shadow-neutral-50 p-2 rounded-2xl">
              <div className="icon p-6 border border-yellow-400 rounded-full mb-4">
                {/* Replace with proper icon */}
                <Image
                  src="/images/packing-and-loading-icon.png"
                  alt="Book Service"
                  width={60}
                  height={60}
                />
              </div>
              <span
                className={` ${
                  locale === "ar"
                    ? "font-arabic text-2xl"
                    : "text-lg font-semibold font-poppins"
                }`}
              >
                {t("four.tit")}
              </span>
              <p
                className={` text-gray-500 mt-2 ${
                  locale === "ar" ? "ar-p" : "text-sm"
                }`}
              >
                {t("four.desc")}
              </p>
            </div>
            <div className="step flex flex-col items-center shadow-xl shadow-neutral-50 p-2 rounded-2xl">
              <div className="icon p-6 border border-yellow-400 rounded-full mb-4">
                {/* Replace with proper icon */}
                <Image
                  src="/images/safe-transportation.png"
                  alt="Book Service"
                  width={60}
                  height={60}
                />
              </div>
              <span
                className={` ${
                  locale === "ar"
                    ? "font-arabic text-2xl"
                    : "text-lg font-semibold font-poppins"
                }`}
              >
                {t("five.tit")}
              </span>
              <p
                className={` text-gray-500 mt-2 ${
                  locale === "ar" ? "ar-p" : "text-sm"
                }`}
              >
                {t("five.desc")}
              </p>
            </div>
            <div className="step flex flex-col items-center shadow-xl shadow-neutral-50 p-2 rounded-2xl">
              <div className="icon p-6 border border-yellow-400 rounded-full mb-4">
                {/* Replace with proper icon */}
                <Image
                  src="/images/home-setting-icon.png"
                  alt="Book Service"
                  width={60}
                  height={60}
                />
              </div>
              <span
                className={` ${
                  locale === "ar"
                    ? "font-arabic text-2xl"
                    : "text-lg font-semibold font-poppins"
                }`}
              >
                {t("six.tit")}
              </span>
              <p
                className={` text-gray-500 mt-2 ${
                  locale === "ar" ? "ar-p" : "text-sm"
                }`}
              >
                {t("six.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkProcessSection;
