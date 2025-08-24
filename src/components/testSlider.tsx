"use client";
import React, { useEffect, useState } from "react";
interface CardSliderProps {
  cards: {
    name: string;
    location: string;
    date: string;
    testimonial: string;
    rating: number;
  }[];
  autoScroll?: boolean; // Optional prop to enable auto-scrolling
  scrollInterval?: number; // Optional prop to set the scroll interval time in milliseconds
}
const CardSlider: React.FC<CardSliderProps> = ({
  cards,
  autoScroll = true,
  scrollInterval = 6000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        nextSlide();
      }, scrollInterval);

      // Clear the interval when the component unmounts
      return () => clearInterval(interval);
    }
  }, [currentIndex, autoScroll, scrollInterval]);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((star, index) => (
      <span
        key={index}
        className={`inline-block ${
          index < rating ? "text-[#FF5F00] " : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <div
          className="slider md:w-full w-[350px]"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {cards.map((card) => (
            <div className="card md:w-full h-auto" key={card.name}>
              <div className="card-header">
                {renderStars(card.rating)}{" "}
                <span className="text-[11px] gr ml-2 font-poppins">
                  {card.rating} / 5
                </span>
              </div>
              <div className="card-body ">
                <div>
                  <h3 className="font-semibold">{card.name}</h3>
                  <p className="text-sm text-gray-500">{card.location}</p>
                </div>
                <div className="ml-auto text-4xl text-gray-300">❝</div>
              </div>
              <p className="card-description mt-1 text-gray-600">
                {card.testimonial}
              </p>
              <small className="text-[#FF5F00]">Moved On: {card.date}</small>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4">
        {cards.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
