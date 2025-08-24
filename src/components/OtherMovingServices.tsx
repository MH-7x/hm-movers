"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const HealthcareSlider: React.FC = () => {
  const t = useTranslations("otherMovingServices");
  const locale = useLocale();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3); // Default for desktop
  const [autoScroll, setAutoScroll] = useState(true);
  const cardData = [
    { imgSrc: "/images/apartement-moving.jpg", title: t("apartment") },
    { imgSrc: "/images/villa-moving.jpg", title: t("villa") },
    {
      imgSrc: "/images/office-relocation.jpg",
      title: t("office"),
    },
    { imgSrc: "/images/home-cleaning.webp", title: t("home") },
    { imgSrc: "/images/furniture-cleaning.webp", title: t("furniture") },
  ];
  // Handle resizing for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleSlides(3); // Show 3 slides in desktop view
      } else {
        setVisibleSlides(1); // Show 1 slide in mobile view
      }
    };

    handleResize(); // Set on initial render

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoScroll) {
        setCurrentSlide((prev) =>
          prev === cardData.length - visibleSlides ? 0 : prev + 1
        );
      }
    }, 2000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentSlide, visibleSlides, autoScroll]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="font-semibold text-center mb-8">{t("title")}</h2>
      <div className="relative overflow-hidden  py-5">
        {/* Slider container */}
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{
            transform: `translateX(-${(currentSlide / visibleSlides) * 100}%)`,
          }}
        >
          {cardData.map((slide, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 px-2 ${
                visibleSlides === 1 ? "sm:w-full" : "lg:w-1/3"
              }`}
            >
              <div className="bg-white rounded-lg shadow-lg shadow-neutral-100 overflow-hidden">
                <div className="w-full md:h-56 h-48 bg-slate-100 relative">
                  <Image
                    alt={slide.title}
                    src={slide.imgSrc}
                    fill
                    className="absolute object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3
                    className={` ${
                      locale === "ar"
                        ? "font-arabic font-bold text-xl"
                        : "font-semibold text-lg"
                    }`}
                  >
                    {slide.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
      </div>

      {/* Pagination indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {cardData
          .slice(0, cardData.length - visibleSlides + 1)
          .map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-black" : "bg-gray-400"
              }`}
              onClick={() => {
                setAutoScroll(false); // Pause auto-scroll when clicking on pagination
                setCurrentSlide(index);
              }}
            ></span>
          ))}
      </div>
    </div>
  );
};

export default HealthcareSlider;
