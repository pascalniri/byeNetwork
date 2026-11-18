"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageHero from "@/components/layout/PageHero";

const images = [
  { id: 1, src: "/1.jpeg", alt: "Team member 1", width: 1600, height: 1067 },
  { id: 2, src: "/2.jpg", alt: "Team member 2", width: 1440, height: 1748 },
  { id: 3, src: "/3.jpg", alt: "Team member 3", width: 1440, height: 1799 },
  { id: 4, src: "/4.jpg", alt: "Team member 4", width: 1318, height: 1600 },
  { id: 5, src: "/5.jpg", alt: "Team member 5", width: 1440, height: 1748 },
  { id: 6, src: "/6.jpg", alt: "Team member 6", width: 1440, height: 1799 },
  { id: 7, src: "/7.jpg", alt: "Team member 7", width: 1440, height: 1799 },
];

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="Gallery"
        description="Step into our gallery and relive the moments that define our journey. From inspiring events to impactful collaborations, explore the visuals that capture the essence of our mission and the vibrant community we've built together."
        accent="ocean"
      />

      <div className="max-w-screen-2xl mx-auto px-4 md:px-16 lg:px-24 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <motion.div
              key={image.id}
              layoutId={image.id.toString()}
              onClick={() => setSelectedId(image.id)}
              className="cursor-pointer notch-md overflow-hidden shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId.toString()}
              className="fixed inset-0 bg-brand-brown/95 flex justify-center items-center z-50"
              onClick={() => setSelectedId(null)}
            >
              <motion.img
                src={images.find((img) => img.id === selectedId)?.src}
                className="w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] notch-lg"
                alt="Selected"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
