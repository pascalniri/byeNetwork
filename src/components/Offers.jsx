import React from "react";

const Offers = () => {
  return (
    <div className="mt-[150px] flex flex-col font-poppins w-full mx-auto px-4 md:w-[80%]">
      <div className="flex flex-col justify-center text-center md:text-left">
        <h1 className="text-[35px] font-light">
          Want <span className="font-bold">BYEN</span> Offers:
        </h1>
        <p className="mt-[30px] text-[#474747] md:pr-[60px] w-full md:w-[70%]">
          Black Youth Empowerment Network (BYEN) provides mentorship, leadership
          training, and resources to help young Black individuals excel
          personally and professionally. Through educational workshops,
          community projects, and networking opportunities, BYEN fosters growth,
          confidence, and empowerment for the next generation of leaders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[20px] mt-[60px]">
        <div
          className="relative rounded-lg shadow-lg group w-full h-[250px] bg-cover bg-center"
          style={{ backgroundImage: "url(https://www.euroschoolindia.com/wp-content/uploads/2024/01/renewable-natural-source-jpg.webp)" }}
        >
          {/* Dark blur overlay with words, initially hidden */}
          <div className="absolute rounded-lg inset-0 bg-black bg-opacity-50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <p className="text-white text-xl font-bold">Resources</p>
          </div>
        </div>

        <div
          className="relative rounded-lg  shadow-lg group w-full h-[250px] bg-cover bg-center"
          style={{ backgroundImage: "url(https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg)" }}
        >
          {/* Dark blur overlay with words, initially hidden */}
          <div className="absolute rounded-lg inset-0 bg-black bg-opacity-50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <p className="text-white text-xl font-bold">Events</p>
          </div>
        </div>

        <div
          className="relative rounded-lg shadow-lg group w-full h-[250px] bg-cover bg-center"
          style={{ backgroundImage: "url(https://blog.palpensions.com:8036/wp-content/uploads/2023/08/Importance-of-Mentorship.png)" }}
        >
          {/* Dark blur overlay with words, initially hidden */}
          <div className="absolute rounded-lg inset-0 bg-black bg-opacity-50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <p className="text-white text-xl font-bold">Mentorship</p>
          </div>
        </div>

        <div
          className="relative rounded-lg shadow-lg group w-full h-[250px] bg-cover bg-center"
          style={{ backgroundImage: "url(https://www.wfco.org/image/photos/18374-fitandcrop-1200x681.jpg)" }}
        >
          {/* Dark blur overlay with words, initially hidden */}
          <div className="absolute rounded-lg inset-0 bg-black bg-opacity-50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <p className="text-white text-xl font-bold">Community</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
