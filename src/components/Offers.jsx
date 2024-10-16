import React from "react";
import "../App.css";
import resources from "../assets/resources.webp";
import event from "../assets/event.jpg";
import mentor from "../assets/mentor.png";
import community from "../assets/community.jpg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Fade } from "react-awesome-reveal";

const Offers = () => {
  return (
    <div className="mt-[80px] md:mt-[150px] flex flex-col font-outfit font-light w-full mx-auto px-4 md:px-0 md:w-[80%] 2xl:w-[70%]">
      <div className="flex flex-col justify-center items-center text-center">
        <Fade className="font-bold text-[60px] relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black">
          What BYEN Offers!
        </Fade>
        <p className="mt-[30px] text-[#474747] w-full md:w-[70%]">
          Black Youth Empowerment Network (BYEN) provides mentorship, leadership
          training, and resources to help young Black individuals excel
          personally and professionally. Through educational workshops,
          community projects, and networking opportunities, BYEN fosters growth,
          confidence, and empowerment for the next generation of leaders.
        </p>
      </div>

      <Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[50px]">
        <div className="relative rounded-lg shadow-lg w-full h-[250px] bg-cover bg-center">
          <img
            src="/resources.jpg"
            alt="Resources"
            className="w-full h-[250px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black to-[#00000000] flex items-end justify-start">
            <p className="text-white text-[20px] font-medium mb-5 mx-5">Resources <br />
            <span className="font-extralight text-[14px] line-clamp-none">
            A comprehensive collection of tools, educational materials, and opportunities designed to equip you with the knowledge and skills needed to excel in your leadership, entrepreneurial, and creative pursuits.
              </span></p>
          </div>
        </div>
        <div className="relative rounded-lg shadow-lg w-full h-[250px] bg-cover bg-center">
          <img
            src="/events.jpg"
            alt="Events"
            className="w-full h-[250px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black to-[#00000000] flex items-end justify-start">
            <p className="text-white text-[20px] font-medium mb-5 mx-5">Events <br />
            <span className="font-extralight text-[14px] line-clamp-none">
            Immersive events that unite our community, offering powerful opportunities to connect, exchange ideas, and engage in meaningful dialogue through workshops, summits, and networking experiences tailored to inspire leadership and innovation.
              </span></p>
          </div>
        </div>
        <div className="relative rounded-lg shadow-lg w-full h-[250px] bg-cover bg-center">
          <img
            src="collaboration.jpg"
            alt="Collaboration"
            className="w-full h-[250px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black to-[#00000000] flex items-end justify-start">
            <p className="text-white text-[20px] font-medium mb-5 mx-5">Collaboration<br />
            <span className="font-extralight text-[14px] line-clamp-none">
            Collaborative opportunities with experienced professionals, fostering mutual growth and guidance to help you navigate challenges, unlock new possibilities, and accelerate your journey to success..
              </span></p>
          </div>
        </div>
        <div className="relative rounded-lg shadow-lg w-full h-[250px] bg-cover bg-center">
          <img
            src="community.jpg"
            alt="Community"
            className="w-full h-[250px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black to-[#00000000] flex items-end justify-start">
            <p className="text-white text-[20px] font-medium mb-5 mx-5">Community <br />
            <span className="font-extralight text-[14px] line-clamp-none">
            A vibrant community of young Black leaders and changemakers, where collaboration, support, and shared experiences create a foundation for personal growth and collective empowerment.
              </span></p>
          </div>
        </div>
        </div>
      </Fade>
    </div>
  );
};

export default Offers;
