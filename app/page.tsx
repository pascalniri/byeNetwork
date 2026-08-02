import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Offers from "@/components/sections/Offers";
import Latest from "@/components/sections/Latest";
import ContactUs from "@/components/sections/ContactUs";

export default function LandingPage() {
  return (
    <>
      <Home />
      <div>
        <About />
        <Stats />
        <Offers />
        <Latest />
        <ContactUs />
      </div>
    </>
  );
}
