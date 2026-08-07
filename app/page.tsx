import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Supporters from "@/components/sections/Supporters";
import Spotlights from "@/components/sections/Spotlights";
import Stats from "@/components/sections/Stats";
import Offers from "@/components/sections/Offers";
import Latest from "@/components/sections/Latest";
import ContactUs from "@/components/sections/ContactUs";

export default function LandingPage() {
  return (
    <>
      <Home />
      <About />
      <Supporters />
      <Spotlights />
      <div>
        <Stats />
        <Offers />
        <Latest />
        <ContactUs />
      </div>
    </>
  );
}
