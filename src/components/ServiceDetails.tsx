import { useLocale } from "next-intl";
import React from "react";

function ServiceDetails({
  title,
  description,
  boxs,
}: {
  title: string;
  description: string;
  boxs: { heading: string | null; desc: string }[];
}) {
  const locale = useLocale();
  return (
    <div className="w-full md:w-11/12 mt-14">
      <h2
        className={`text-center ${
          locale === "ar" ? "font-arabic font-bold mb-4" : "mb-2"
        }`}
      >
        {title}
      </h2>
      <p className={`text-center ${locale === "ar" ? "ar-p" : ""}`}>
        {description}
      </p>
      <div className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-7">
        {boxs.map((box, i) => (
          <div
            key={i}
            className="min-h-32 bg-white shadow-lg shadow-neutral-100 border border-neutral-200 py-4 px-3 rounded-2xl"
          >
            <h3
              className={` text-center mb-1 ${
                locale === "ar"
                  ? "font-arabic font-bold md:text-[25px]"
                  : "font-poppins font-medium md:text-[21px]  md:leading-6"
              }`}
            >
              {box.heading}
            </h3>
            <div className="w-full h-px bg-neutral-100 px-10"></div>
            <p
              className={`text-center mt-2 gr ${
                locale === "ar"
                  ? "font-arabic text-[17px] leading-7"
                  : "text-[15.2px]"
              }`}
            >
              {box.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceDetails;
