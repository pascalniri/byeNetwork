import React, { useState } from "react";
import { PiMinusBold } from "react-icons/pi";
import { PiPlusBold } from "react-icons/pi";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who can join BYEN?",
      answer:
        "We welcome young Black individuals dedicated to empowerment, community building, and leadership.",
    },
    {
      question: "What does it cost to join?",
      answer:
        "It’s free! BYEN membership at both General and Executive levels is entirely cost-free.",
    },
    {
      question: "What are the expectations for Executive Members?",
      answer:
        "Executive Members are expected to actively participate in BYEN’s leadership activities, attend exclusive events, and represent BYEN in their communities.",
    },
  ];

  return (
    <div className="font-poppins w-full flex flex-col justify-center items-center md:mt-[10rem] mt-[5rem]">
      <h1 className=" flex flex-row text-center items-center gap-2 md:text-[50px] text-black text-[30px] font-medium">
        FREQUENTLY ASKED QUESTIONS
      </h1>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="flex flex-col mt-5 justify-start w-full items-start gap-5 bg-[#F7F8F9] p-5 rounded-lg shadow-lg"
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="font-semibold">{faq.question}</h1>
            <div
              onClick={() => toggleAnswer(index)}
              className="bg-[#9e6548] text-[20px] p-2 flex items-center justify-center rounded-full text-white cursor-pointer"
            >
              {activeIndex === index ? <PiMinusBold /> : <PiPlusBold />}
            </div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-[200px] ease-in" : "max-h-0"
            }`}
          >
            <p className="text-[13px] text-[#6C6A6A] mt-3">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
