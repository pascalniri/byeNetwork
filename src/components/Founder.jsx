import React from "react";
import founder from "../assets/founder.svg"
const Founder = () => {
  return (
    <div className="mx-auto px-4 mt-[100px] font-nunito md:px-0 md:w-[80%]">
      <h1 className="mb-[50px] font-light text-[60px] font-bangers">
        BYEN <span className="font-bold">Founder</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-[50px] items-center text-center md:text-left ">
        <img
          src={founder}
          alt="Jay'Shun"
          className=""
        />
        <p className="">
          Jay'Shun vision for the Black Youth Empowerment Network (BYEN) was
          born out of his own experiences facing racial disparities, academic
          setbacks, and a lack of community support. Growing up, Jay'Shun
          encountered the harsh realities of inequality, whether it was seeing
          limited opportunities for young Black individuals in leadership
          positions or navigating academic environments that weren't built for
          his success.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center md:items-start text-center md:text-left gap-[50px] mt-[50px] ">
        <p>
        Despite these challenges, Jay'Shun refused to be defined by them. Early on, he realized that while talent and drive are essential, having a supportive network and access to resources is just as crucial. Without a community that understood his struggles or empowered him, Jay'Shun learned the importance of building his own path forward. These experiences shaped his belief in creating a space where young Black leaders, entrepreneurs, and creatives could find the guidance and support that he wished he had.
        </p>

        <p>
        Through BYEN, Jay'Shun is committed to ensuring that the next generation doesn't face the same obstacles alone. BYEN is more than an organization, it's a movement to uplift and connect young Black individuals, giving them the tools and community they need to succeed. With a focus on leadership, entrepreneurship, and creative expression, Jay'Shun continues to turn his personal challenges into a force for change, building a network that champions every young person's potential.
        </p>
      </div>
    </div>
  );
};

export default Founder;
