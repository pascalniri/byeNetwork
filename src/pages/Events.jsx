import React, { useState } from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";

const Events = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const events = [
    {
      image: "/event1.svg",
      title: "Empowering Black Youth Through Mindful Decision-Making",
      date: "2024-03-25",
      time:"7:00 pm - 8:00 pm (EDT)",
      description:
        "Hey everyone! We're excited to invite you to a special webinar hosted by the Black Youth Empowerment Network (BYEN). Next Monday, we'll be diving into important conversations about the mental health challenges facing black youth and how we can shape a brighter future together. This is a fantastic opportunity to hear from professionals and ask questions that matter to you. Let's come together as a community to support each other and empower our youth! Don't miss out—Register now and mark your calendars. See you there!",
    },
   
  ];

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);3
  };

  return (
    <div className="font-montserrat">
      <div className="bg-[#FAFAFA] flex flex-col justify-center items-center py-[3rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] bg-[url('/transparent.svg')] bg-no-repeat h-full w-full mt-[7rem]">
        <h1 className="flex flex-row items-center gap-2 md:text-[50px] text-[#693e2d] text-[30px] font-medium">
          <MdOutlineHorizontalRule />
          <p>EVENTS</p>
          <MdOutlineHorizontalRule />
        </h1>
        <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A] md:w-[80%] mx-auto">
          Join us for an unforgettable experience! Explore our upcoming events
          designed to inspire, connect, and empower. Don’t miss the chance to be
          part of something special—check out the details below and reserve your
          spot today!
        </p>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] py-[6rem] grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-lg overflow-hidden"
          >
            <img
              src={event.image}
              alt={event.title}
              className="h-full w-full object-cover"
            />
            <div className="p-5">
              <h2 className="font-medium text-[20px] leading-[28px] text-[#693e2d] mb-2">
                {event.title}
              </h2>
              <div className="flex justify-between">
              <p className="text-[14px] mb-4">{event.date}</p>
              <p className="text-[14px] mb-4">{event.time}</p>
              </div>
              <p className="text-[15px] leading-[20px] mt-4 text-[#6C6A6A]">
                {expandedIndex === index
                  ? event.description
                  : `${event.description.slice(0, 100)}...`}
              </p>
              <button
                onClick={() => toggleReadMore(index)}
                className="text-[#693e2d] text-[14px] mt-2 font-medium hover:underline focus:outline-none transition-colors"
              >
                {expandedIndex === index ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
