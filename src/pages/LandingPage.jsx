import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Offers from "../components/Offers";
import Join from "../components/Join";
import Latest from "../components/Latest";
import Founder from "../components/Founder";
import whole from "../assets/whole.svg";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import Team from "../components/Team";

// Scale and rotate animation with delay
const scaleRotateAnimation = (delay = 0) => ({
  initial: { scale: 0.8, rotate: -15, opacity: 0 },  // Start small and rotated
  animate: { scale: 1, rotate: 0, opacity: 1 },      // Full size and upright
  transition: {
    duration: 0.8,                                   // Smooth transition
    ease: "easeInOut",                               // Easing for polished animation
    delay: delay                                     // Delay for staggering
  }
});

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Helper function to wrap each section with motion.div and apply delay
  const AnimatedSection = ({ children, delay }) => {
    const ref = React.useRef(null);

    // Trigger animation when 50% of the element is in view (middle of the screen)
    const inView = useInView(ref, { threshold: 0.5 });

    return (
      <motion.div
        ref={ref}
        initial={scaleRotateAnimation(delay).initial}
        animate={inView ? scaleRotateAnimation(delay).animate : scaleRotateAnimation(delay).initial}
        transition={scaleRotateAnimation(delay).transition}
        style={{ marginBottom: "2rem" }}  // Spacing between sections
      >
        {children}
      </motion.div>
    );
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "10px",
          backgroundColor: "#6B7280",
          transformOrigin: "0%",
          width: "100%",
          zIndex: 1000,
          scaleX,
        }}
      />
      
      {/* Home Section */}
        <Home />

      {/* Content Sections with Background Image */}
      <div
        style={{
          backgroundImage: `url(${whole})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full overflow-hidden"
      >
        <AnimatedSection delay={0.4}>
          <About />
        </AnimatedSection>
        <AnimatedSection delay={0.6}>
          <Founder />
        </AnimatedSection>
        <AnimatedSection delay={0.7}>
          <Offers />
        </AnimatedSection>
        <AnimatedSection delay={0.8}>
          <Join />
        </AnimatedSection>
        <AnimatedSection delay={0.9}>
          <Latest />
        </AnimatedSection>

        <AnimatedSection delay={0.9}>
          <Team />
        </AnimatedSection>
      </div>
    </>
  );
};

export default LandingPage;
