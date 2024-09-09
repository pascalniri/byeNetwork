import React from "react";

const Join = () => {
  return (
    <div className="font-poppins mt-[150px] mx-auto px-4 md:w-[80%]">
      <h1 className="text-[35px] font-light">
        Want <span className="font-bold">To Join</span> The Network?
      </h1>
      <p className="mt-[30px] text-[#474747] md:pr-[60px] w-full md:w-[70%]">
        Discover the benefits of being part of our network. Join us to connect,
        collaborate, and grow with like-minded individuals.
      </p>

      <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 gap-[50px]">
        {/* first container of joining */}
        <div className="bg-gray-100 rounded-[10px] shadow-lg">
          <img
            src="https://blog.palpensions.com:8036/wp-content/uploads/2023/08/Importance-of-Mentorship.png"
            alt=""
            className="rounded-t-[10px] w-full h-[250px]"
          />

          <div className="px-[10px] py-[20px]">
            <h1 className="font-semibold text-[20px]">
              Want to become a mentor?
            </h1>
            <p className="text-[13px] text-[#474747]">
            BYEN uses the Mighty App to manage and streamline our organization. Click below to learn more about its features and benefits.
            </p>
            <button className=" w-full mt-[20px] font-normal text-black bg-[#FFA700] px-[30px] py-[10px] rounded-full">
              CLICK HERE
            </button>
          </div>
        </div>

        {/* second container of joining */}

        <div className="bg-gray-100 rounded-[10px] shadow-lg">
          <img
            src="https://blog.palpensions.com:8036/wp-content/uploads/2023/08/Importance-of-Mentorship.png"
            alt=""
            className="rounded-t-[10px] w-full h-[250px]"
          />

          <div className="px-[10px] py-[20px]">
            <h1 className="font-semibold text-[20px]">
              Want to join the network?
            </h1>
            <p className="text-[13px] text-[#474747]">
              Inspire and guide our youth by becoming a mentor. Click below for
              more details on how you can make a positive impact.
            </p>
            <button className=" w-full mt-[20px] font-normal text-black bg-[#FFA700] px-[30px] py-[10px] rounded-full">
              CLICK HERE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
