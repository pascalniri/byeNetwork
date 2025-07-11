import React from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { motion } from "framer-motion";

const Events = () => {
  // 2024 Events
  const events2024 = [
    {
      image: "/event1.svg",
      title: "Empowering Black Youth Through Mindful Decision-Making",
      date: "2024-03-25",
      time: "7:00 pm - 8:00 pm (EDT)",
      description:
        "Hey everyone! We're excited to invite you to a special webinar hosted by the Black Youth Empowerment Network (BYEN). Next Monday, we'll be diving into important conversations about the mental health challenges facing black youth and how we can shape a brighter future together. This is a fantastic opportunity to hear from professionals and ask questions that matter to you. Let's come together as a community to support each other and empower our youth! Don't miss out—Register now and mark your calendars. See you there!",
    },
  ];

  // Jan-May 2025 Events
  const eventsJanMay2025 = [
    {
      image: "/hot-coco-run.png",
      title: "Hot Coco Run",
      date: "2025-01-31",
      time: "9:00 am - 12:00 pm (EDT)",
      description:
        "Miles Darby, BYEN Morehouse Chapter President, saw an opportunity to give back and took the lead in organizing a day of service for Hot Today's annual Hot Chocolate Run. Our members stepped up, preparing race packages, assisting with merchandise, and ensuring a welcoming experience for all.",
    },
    {
      image: "/financial-literacy.png",
      title: "Financial Literacy 101 Ft. Luvswallet",
      date: "2025-02-06",
      time: "6:00 pm - 8:00 pm (EDT)",
      description:
        "Black Youth Empowerment Network is thrilled to present Financial Literacy 101, featuring insights and actionable advice from the expert LuvsWallet. Whether you're a budgeting beginner or looking to grow your wealth, this event is tailored to equip you with the tools and knowledge to make smart money moves.",
    },
    {
      image: "/advocacy-day.gif",
      title: "Georgia Advocacy Day W/ Students Demand Action",
      date: "2025-02-18",
      time: "10:00 am - 3:00 pm (EDT)",
      description:
        "Through our partnership with Students Demand Action, members of the Black Youth Empowerment Network took bold steps to advocate for stronger gun safety laws, using their voices and stories to push for change in communities that are too often overlooked.",
    },
    {
      image: "/gun-violence-awareness.jpg",
      title: "Gun Violence Awareness Day",
      date: "2025-03-29",
      time: "2:00 pm - 5:00 pm (EDT)",
      description:
        "The Black Youth Empowerment Network hosted a powerful event at Morehouse College to raise awareness about gun violence and its impact on communities across Atlanta.",
    },
    {
      image: "/feed-homeless.jpg",
      title: "Feed The Homeless",
      date: "2025-04-27",
      time: "11:00 am - 2:00 pm (EDT)",
      description:
        "The Black Youth Empowerment Network partnered with Destined for Greatness to provide meals and support to individuals experiencing homelessness across Atlanta.",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Event Card Component for reuse
  const EventCard = ({ event, index }) => {
    return (
      <motion.div
        variants={fadeIn}
        className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <div className="h-[200px] overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h2 className="font-semibold text-[20px] leading-[28px] text-[#693e2d] mb-2">
            {event.title}
          </h2>
          <div className="flex justify-between mb-4 text-[14px] text-gray-600">
            <p>{event.date}</p>
          </div>
          <div className="text-[15px] leading-[22px] text-[#6C6A6A]">
            {event.description}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="font-montserrat">
      <div className="bg-[#FAFAFA] flex flex-col justify-center items-center py-[3rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] bg-[url('/transparent.svg')] bg-no-repeat h-full w-full mt-[7rem]">
        <h1 className="flex flex-row items-center gap-2 md:text-[50px] text-[#693e2d] text-[30px] font-medium">
          <MdOutlineHorizontalRule />
          <p>EVENTS</p>
          <MdOutlineHorizontalRule />
        </h1>
        <p className="text-[15px] leading-[22px] mt-4 text-[#6C6A6A] md:w-[80%] mx-auto">
          Join us for unforgettable experiences! Explore our events designed to inspire, connect, and empower. 
          Don't miss the chance to be part of something special—check out the details below and reserve your spot today!
        </p>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] py-[6rem]">
         {/* Jan-May 2025 Events */}
         <div className="mb-16">
          <h2 className="text-[28px] font-bold mb-8 text-center border-b-2 border-[#693e2d] pb-2 inline-block">
            Jan-May 2025
          </h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {eventsJanMay2025.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </motion.div>
        </div>
        {/* 2024 Events */}
        <div className="mb-16">
          <h2 className="text-[28px] font-bold mb-8 text-center border-b-2 border-[#693e2d] pb-2 inline-block">
            2024
          </h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {events2024.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </motion.div>
        </div>

       
      </div>
    </div>
  );
};

export default Events;