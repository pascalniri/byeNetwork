"use client";

import { useState } from "react";
import { PiMinusBold, PiPlusBold } from "react-icons/pi";

const faqs = [
  {
    question: "Who can join BYEN?",
    answer: "We welcome young Black individuals dedicated to empowerment, community building, and leadership.",
  },
  {
    question: "What does it cost to join?",
    answer: "It's free! BYEN membership at both General and Executive levels is entirely cost-free.",
  },
  {
    question: "What are the expectations for Executive Members?",
    answer:
      "Executive Members are expected to actively participate in BYEN's leadership activities, attend exclusive events, and represent BYEN in their communities.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="text-center mb-8 text-xl sm:text-2xl font-bold uppercase text-brand-brown">
        Frequently Asked Questions
      </h2>

      <div className="w-full space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="notch-md bg-white shadow-sm">
            <button
              onClick={() => toggleAnswer(index)}
              className="flex flex-row justify-between items-center w-full gap-4 p-5 text-left"
            >
              <h3 className="text-sm font-semibold text-brand-brown">{faq.question}</h3>
              <div className="notch-sm bg-brand-chili text-white p-2 flex items-center justify-center flex-shrink-0">
                {activeIndex === index ? <PiMinusBold /> : <PiPlusBold />}
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 px-5 ${
                activeIndex === index ? "max-h-[200px] pb-5" : "max-h-0"
              }`}
            >
              <p className="text-sm leading-relaxed text-brand-brown/70">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
