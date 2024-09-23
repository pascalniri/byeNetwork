import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Offers from "../components/Offers";
import Join from "../components/Join";
import Latest from "../components/Latest";
import Founder from "../components/Founder";
import whole from "../assets/whole.svg"
const LandingPage = () => {
  return (
    <div>
      <Home />
      <div style={{ backgroundImage: `url(${whole})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <About />
        <Founder />
        <Offers />
        <Join />
        <Latest />
      </div>
    </div>
  );
};

export default LandingPage;
