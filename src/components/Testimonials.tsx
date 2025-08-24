"use client";
import React from "react";
import CardSlider from "./testSlider";
import Image from "next/image";
import testimonialImage from "../../public/images/testimonels.jpg";
import { useLocale, useTranslations } from "next-intl";
export const testimonials: {
  name: string;
  location: string;
  date: string;
  testimonial: string;
  rating: number;
}[] = [
  {
    name: "Ahmed Al Zarooni",
    location: "Dubai Marina, Dubai",
    date: "15 March 2021",
    rating: 5,
    testimonial:
      "Hamdan Movers were fantastic! Moving is always stressful, but they made the whole process so easy. They were on time, packed everything securely, and moved us without any hassle. I couldn't have asked for a better team.",
  },
  {
    name: "Fatima Al Ali",
    location: "Al Nahda, Sharjah",
    date: "22 August 2020",
    rating: 4.5,
    testimonial:
      "I’ve moved several times in the past, but this was by far the easiest experience. The movers were so professional and efficient. They took great care of my belongings and made sure everything arrived safely. Highly recommend them!",
  },
  {
    name: "Saeed Al Mulla",
    location: "Khalifa City, Abu Dhabi",
    date: "5 September 2019",
    rating: 4,
    testimonial:
      "I was really worried about moving to a new villa, especially with all the furniture, but Hamdan Movers handled it all. They packed everything up so quickly, and when we got to the new house, they set it all up perfectly. It was a huge relief.",
  },
  {
    name: "Mariam Al Suwaidi",
    location: "Al Barsha, Dubai",
    date: "12 July 2022",
    rating: 5,
    testimonial:
      "I’ve never seen such organized and careful movers. The team was polite, worked hard, and treated my things like their own. It made my move so much less stressful, and I can’t thank them enough for that.",
  },
  {
    name: "Omar Bin Ali",
    location: "Corniche, Abu Dhabi",
    date: "30 November 2021",
    rating: 5,
    testimonial:
      "I had to move my office, and I was really stressed about how it would go, but Hamdan Movers were a godsend. They were super efficient, and the entire move was done faster than I expected. Nothing was damaged, and they even helped organize things at the new place.",
  },
  {
    name: "Layla Al Mazrouei",
    location: "Al Qusais, Dubai",
    date: "17 February 2022",
    rating: 3,
    testimonial:
      "We had to move suddenly, and Hamdan Movers came through for us. They were quick, careful, and really friendly. Everything arrived in perfect condition, and they even helped with some unpacking. I’m so grateful for their help!",
  },
  {
    name: "Mohammed Al Mansoori",
    location: "Al Taawun, Sharjah",
    date: "3 May 2020",
    rating: 5,
    testimonial:
      "We moved our business to a new office space, and these guys were fantastic. They were so organized and made sure everything was packed and transported safely. The whole team was professional, and the move went off without a hitch.",
  },
  {
    name: "Noor Al Shamsi",
    location: "Jumeirah, Dubai",
    date: "27 October 2022",
    rating: 4,
    testimonial:
      "Hamdan Movers made moving my family so much easier than I expected. They handled everything with care, especially our fragile items, and the storage options they offered were a real lifesaver. I’m really happy with their service.",
  },
  {
    name: "Khalid Al Darmaki",
    location: "Muweilah, Sharjah",
    date: "8 June 2021",
    rating: 3.5,
    testimonial:
      "The team at Hamdan Movers did a great job! They took the stress out of moving, and everything was handled with such care. They were on time, friendly, and super efficient. It made the whole process much easier for us.",
  },
  {
    name: "Salma Al Habsi",
    location: "Yas Island, Abu Dhabi",
    date: "19 December 2019",
    rating: 5,
    testimonial:
      "We used Hamdan Movers to relocate our office, and I couldn’t be happier. They were on time, careful with our equipment, and really organized. I didn’t have to worry about anything. I would definitely use them again!",
  },
];

const TestimonialSection: React.FC = () => {
  const t = useTranslations("testimonials");
  const locale = useLocale();
  return (
    <section className="w-full md:w-11/12 py-12 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Side: Image */}
        <div className="lg:w-1/2 flex md:justify-end justify-center">
          <div className="md:w-96 w-[360px] md:h-[500px] h-[430px] rounded-lg relative">
            <Image
              src={testimonialImage}
              fill
              sizes="100"
              className="z-10 object-cover rounded-lg absolute"
              placeholder="blur"
              alt="feedback image | hamdan movers"
            />
          </div>
        </div>

        {/* Right Side: Testimonial Content */}
        <div
          className={`md:mr-20  mr-0 md:pl-4 pl-0 lg:w-1/2 lg:ml-12 ml-0 mt-8 lg:mt-0`}
        >
          <h2
            className={
              locale === "ar"
                ? "font-arabic md:text-right text-center font-bold"
                : "mb-4 md:text-left text-center"
            }
          >
            {t("title")}
          </h2>

          <div
            dir={locale === "ar" ? "rtl" : "ltr"}
            className={`mb-6 flex md:flex-row flex-col md-gap-10 gap-5 md:px-0 px-10 text-gray-700 mt-10`}
          >
            <ul className="list-disc flex flex-col gap-y-2 text-lg md:ml-2">
              <li className={locale === "ar" ? "ar-p" : ""}>{t("key1")}</li>
              <li className={locale === "ar" ? "ar-p" : ""}>{t("key2")}</li>
              <li className={locale === "ar" ? "ar-p" : ""}>{t("key3")}</li>
            </ul>
            <ul className="list-disc flex flex-col gap-y-2 text-lg md:ml-6">
              <li className={locale === "ar" ? "ar-p" : ""}>{t("key4")}</li>
              <li className={locale === "ar" ? "ar-p" : ""}>{t("key5")}</li>
              <li className={locale === "ar" ? "ar-p" : ""}>{t("key6")}</li>
            </ul>
          </div>

          <CardSlider cards={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
