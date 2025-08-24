"use client";
import React, { useState } from "react";
import { ArrowDown } from "lucide-react";

interface FAQ {
  ques: string;
  ans: string;
}

interface AccordionProps {
  data: FAQ[];
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border-b border-gray-200 rounded-lg w-full md:w-3/4">
      {data.map((faq, index) => (
        <div key={index} className="relative">
          <button
            className="w-full text-left p-4 border-b border-gray-200 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="font-semibold">{faq.ques}</h3>
          </button>
          <div
            className={`overflow-hidden transition-all  duration-300 ease-in-out ${
              openIndex === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <p className="max-w-4xl p-4">{faq.ans}</p>
          </div>
          <ArrowDown
            className={`absolute transition-transform duration-300 md:right-3 -right-1 top-5 ${
              openIndex === index ? "rotate-180" : ""
            }`}
            strokeWidth={1}
          />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
