import React from "react";
import resources from "../assets/resources.webp";
import event from "../assets/event.jpg";
import mentor from "../assets/mentor.png";
import community from "../assets/community.jpg";
const Offers = () => {
  return (
    <div className="mt-[80px] md:mt-[150px] flex flex-col font-outfit font-light w-full mx-auto px-4 md:px-0 md:w-[80%]">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="font-bold text-[60px] relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black">
          What BYEN Offers!
        </h1>
        <p className="mt-[30px] text-[#474747] w-full md:w-[70%]">
          Black Youth Empowerment Network (BYEN) provides mentorship, leadership
          training, and resources to help young Black individuals excel
          personally and professionally. Through educational workshops,
          community projects, and networking opportunities, BYEN fosters growth,
          confidence, and empowerment for the next generation of leaders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[20px] mt-[60px]">
        <div
          className="relative rounded-lg shadow-lg w-full h-[250px] bg-cover bg-center"
          style={{ backgroundImage: `url(${resources})` }}
        >
          {/* Dark blur overlay with always-visible text */}
          <div className="absolute inset-0 rounded-lg bg-black bg-opacity-50 backdrop-blur-[2px] flex items-center justify-center">
            <p className="text-white text-[30px] font-medium">Resources</p>
          </div>
        </div>
        <div
          className="relative rounded-lg  shadow-lg group w-full h-[250px] bg-cover bg-center"
          style={{ backgroundImage: `url(${event})` }}
        >
          {/* Dark blur overlay with words, initially hidden */}
          <div className="absolute inset-0 rounded-lg bg-black bg-opacity-50 backdrop-blur-[2px] flex items-center justify-center">
            <p className="text-white text-[30px] font-medium">Events</p>
          </div>
        </div>
        <div
          className="relative rounded-lg shadow-lg group w-full h-[250px] bg-cover bg-center"
          style={{ backgroundImage: `url(${mentor})` }}
        >
          {/* Dark blur overlay with words, initially hidden */}
          <div className="absolute inset-0 rounded-lg bg-black bg-opacity-50 backdrop-blur-[2px] flex items-center justify-center">
            <p className="text-white text-[30px] font-medium">Mentorship</p>
          </div>
        </div>
        <div
          className="relative rounded-lg shadow-lg group w-full h-[250px] bg-cover bg-center"
          style={{ backgroundImage: `url(${community})` }}
        >
          {/* Dark blur overlay with words, initially hidden */}
          <div className="absolute inset-0 rounded-lg bg-black bg-opacity-50 backdrop-blur-[2px] flex items-center justify-center">
            <p className="text-white text-[30px] font-medium">Community</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
