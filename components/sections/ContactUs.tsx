"use client";

import { Fade } from "react-awesome-reveal";
import { BiSolidConversation } from "react-icons/bi";

const ContactUs = () => {
  return (
    <Fade triggerOnce={false}>
      <section className="relative bg-brand-cream flex flex-col justify-center items-center text-center py-20 sm:py-24 px-4 md:px-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'url("/branding/SVG/Pattern_DarkBrown.svg")',
            backgroundRepeat: "repeat",
            backgroundSize: "220px auto",
          }}
        />

        <div className="relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight text-brand-brown max-w-2xl">
            Let&apos;s Connect And Start <span className="text-brand-chili">A Conversation Today!</span>
          </h2>
          <p className="text-sm text-brand-brown/70 mt-4 max-w-lg mx-auto">
            We&apos;re here to support you every step of the way on your journey with BYEN.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=blackyouthempowermentnetwork@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="notch-md group inline-flex items-center gap-2 bg-brand-chili hover:bg-brand-brown text-white font-semibold uppercase tracking-wide text-xs py-3 px-6 mt-8 transition-colors duration-200"
          >
            Contact via E-Mail
            <BiSolidConversation className="w-4 h-4" />
          </a>
        </div>
      </section>
    </Fade>
  );
};

export default ContactUs;
