import React from "react";
import '../App.css'
import resources from "../assets/resources.webp";
import event from "../assets/event.jpg";
import mentor from "../assets/mentor.png";
import community from "../assets/community.jpg";
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 50 }
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="custom-swiper"
      >
        <SwiperSlide
          className="relative rounded-lg shadow-lg w-full h-[250px] bg-cover bg-center"
        >
           <img src={resources} alt="Resources" className="w-full h-[250px] object-cover rounded-lg shadow-lg" />
          <div className="absolute inset-0 rounded-lg bg-black bg-opacity-50 backdrop-blur-[2px] flex items-center justify-center">
            <p className="text-white text-[30px] font-medium">Resources</p>
          </div>
        </SwiperSlide>
         <SwiperSlide
          className="relative rounded-lg shadow-lg w-full h-[250px] bg-cover bg-center"
        >
           <img src={event} alt="Resources" className="w-full h-[250px] object-cover rounded-lg shadow-lg" />
          <div className="absolute inset-0 rounded-lg bg-black bg-opacity-50 backdrop-blur-[2px] flex items-center justify-center">
            <p className="text-white text-[30px] font-medium">Events</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="relative rounded-lg shadow-lg w-full h-[250px] bg-cover bg-center"
        >
           <img src={mentor} alt="Resources" className="w-full h-[250px] object-cover rounded-lg shadow-lg" />
          <div className="absolute inset-0 rounded-lg bg-black bg-opacity-50 backdrop-blur-[2px] flex items-center justify-center">
            <p className="text-white text-[30px] font-medium">Mentorship</p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="relative rounded-lg shadow-lg w-full h-[250px] bg-cover bg-center"
        >
           <img src={community} alt="Resources" className="w-full h-[250px] object-cover rounded-lg shadow-lg" />
          <div className="absolute inset-0 rounded-lg bg-black bg-opacity-50 backdrop-blur-[2px] flex items-center justify-center">
            <p className="text-white text-[30px] font-medium">Community</p>
          </div>
        </SwiperSlide>
      </Swiper>
      </Fade>
    </div>
  );
};

export default Offers;
