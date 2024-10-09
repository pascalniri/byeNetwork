import React from "react";
import founder from "../assets/founder.svg"
import { Fade, Slide } from "react-awesome-reveal";
const Founder = () => {
  return (
    <div className="mx-auto px-4 mt-[100px] font-light md:mt-[150px] flex flex-col justify-center items-center font-outfit md:px-0 md:w-[80%] 2xl:w-[70%]">
      <h1 className="font-bold text-[60px] relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-black">
        Our Team
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-[50px] items-center text-center md:text-left mt-[50px]">
        <Fade>
        <img
          src={founder}
          alt="Jay'Shun"
          className=""
        />
        </Fade>
        <Fade delay={200} className="">
          Jay'Shun vision for the Black Youth Empowerment Network (BYEN) was
          born out of his own experiences facing racial disparities, academic
          setbacks, and a lack of community support. Growing up, Jay'Shun
          encountered the harsh realities of inequality, whether it was seeing
          limited opportunities for young Black individuals in leadership
          positions or navigating academic environments that weren't built for
          his success.
        </Fade>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center md:items-start text-center md:text-left gap-[50px] mt-[50px] ">
        <Slide delay={100} direction="left">
        Despite these challenges, Jay'Shun refused to be defined by them. Early on, he realized that while talent and drive are essential, having a supportive network and access to resources is just as crucial. Without a community that understood his struggles or empowered him, Jay'Shun learned the importance of building his own path forward. These experiences shaped his belief in creating a space where young Black leaders, entrepreneurs, and creatives could find the guidance and support that he wished he had.
        </Slide>

        <Slide delay={100} direction="right">
        Through BYEN, Jay'Shun is committed to ensuring that the next generation doesn't face the same obstacles alone. BYEN is more than an organization, it's a movement to uplift and connect young Black individuals, giving them the tools and community they need to succeed. With a focus on leadership, entrepreneurship, and creative expression, Jay'Shun continues to turn his personal challenges into a force for change, building a network that champions every young person's potential.
        </Slide>
      </div>
    </div>
  );
};

export default Founder;
