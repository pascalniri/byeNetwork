"use client";

import { motion } from "framer-motion";

const AdvertBar = () => (
  <div className="flex items-center space-x-8 py-2.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <div key={i} className="flex items-center space-x-8">
        <span className="font-semibold text-xs tracking-wide">
          BYEN Community Safety Fellowship • Now Accepting Applications • Four-Week Leadership Program on
          Community Safety &amp; Gun Violence Prevention •{" "}
        </span>
        <a
          href="https://forms.gle/WHFqdcfXMNkBsJ5N6"
          target="_blank"
          rel="noopener noreferrer"
          className="notch-sm bg-brand-chili hover:bg-brand-lime text-white hover:text-brand-brown px-4 py-1 text-xs font-semibold uppercase tracking-widest transition-colors duration-150"
        >
          Apply Now
        </a>
      </div>
    ))}
  </div>
);

export default function ScrollingAdvert() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[101] shadow-md overflow-hidden">
        <div
          className="relative bg-brand-brown text-brand-cream overflow-hidden whitespace-nowrap"
          style={{
            backgroundImage: 'url("/branding/SVG/Pattern_Cream.svg")',
            backgroundRepeat: "repeat-x",
            backgroundSize: "260px auto",
            backgroundPosition: "left center",
          }}
        >
          <div className="absolute inset-0 bg-brand-brown/90" />
          <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative inline-block"
          >
            <AdvertBar />
          </motion.div>
        </div>
      </div>

      {/* Invisible clone in normal flow: reserves exactly as much space as the
          fixed bar above actually renders, so the Navbar below is never
          covered even if the bar's content/padding changes later. */}
      <div className="invisible overflow-hidden whitespace-nowrap" aria-hidden="true">
        <AdvertBar />
      </div>
    </>
  );
}
