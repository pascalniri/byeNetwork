import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Who can join BYEN?',
      answer: 'We welcome young Black individuals dedicated to empowerment, community building, and leadership.',
    },
    {
      question: 'What does it cost to join?',
      answer: 'It’s free! BYEN membership at both General and Executive levels is entirely cost-free.',
    },
    {
      question: 'What are the expectations for Executive Members?',
      answer: 'Executive Members are expected to actively participate in BYEN’s leadership activities, attend exclusive events, and represent BYEN in their communities.',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto py-10 px-6 bg-gray-100 rounded-lg shadow-md mt-[8rem]">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="flex justify-between items-center w-full py-4 text-lg font-medium text-gray-800 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span className="text-gray-500">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
