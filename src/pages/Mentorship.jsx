import React from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";

const Mentorship = () => {
  return (
    <div className="font-poppins">
      <div className="bg-[#FAFAFA] flex flex-col justify-center items-center py-[3rem] text-center max-w-screen-2xl mx-auto px-4 md:px-[5rem] lg:px-[6rem] bg-[url('/transparent.svg')] bg-no-repeat h-full w-full">
        <h1 className=" flex flex-row items-center gap-2 md:text-[50px] text-[#9e6548] text-[30px] font-medium">
          <MdOutlineHorizontalRule />
          <p>MENTORSHIP</p>
          <MdOutlineHorizontalRule />
        </h1>
        <p className="text-[13px] mt-3 text-[#6C6A6A] md:w-[80%] mx-auto">
          Empower your journey with the guidance and expertise of experienced
          mentors. Whether you're seeking professional growth, personal
          development, or specific skills, our mentorship program connects you
          with mentors who are dedicated to your success. Explore opportunities
          to learn, grow, and achieve your goals with tailored support and
          meaningful connections.
        </p>
      </div>

      <div className="max-w-screen-2xl flex flex-col justify-center items-center text-center mx-auto px-4 md:px-[5rem] lg:px-[6rem] py-[6rem]">
        <h1 className=" flex flex-row items-center gap-2 md:text-[50px] text-black text-[30px] font-medium">
          <p>
            Mentorship <span className="text-[#9e6548] ">Interest Form</span>
          </p>
        </h1>
        <p className="text-[13px] mt-3 text-[#6C6A6A] mx-auto mb-[5rem]">
          To become a mentor, we invite individuals aged 21 and above to join
          our mentoring program. This is an opportunity to share your
          experiences, insights, and expertise with the next generation, helping
          them navigate the challenges and opportunities that lie ahead.
        </p>
      </div>
    </div>
  );
};

export default Mentorship;
