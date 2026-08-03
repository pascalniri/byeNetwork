"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { chapters } from "@/lib/chapters";

const US_STATES_GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export default function ChaptersMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = chapters.find((c) => c.id === activeId) ?? null;

  const scrollToChapter = (id: string) => {
    document.getElementById(`chapter-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="notch-lg bg-brand-brown relative overflow-hidden p-6 sm:p-10">
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: 'url("/branding/SVG/Pattern_Cream.svg")',
          backgroundRepeat: "repeat",
          backgroundSize: "220px auto",
        }}
      />

      <p className="relative text-xs font-bold uppercase tracking-widest text-brand-lime mb-4 text-center">
        BYEN Chapters — Southeast &amp; East Coast
      </p>

      <div className="relative w-full max-w-2xl mx-auto">
        <ComposableMap projection="geoAlbersUsa" className="w-full h-auto">
          <Geographies geography={US_STATES_GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: { fill: "#F7EFE4", stroke: "#2D1807", strokeWidth: 0.5, outline: "none" },
                    hover: { fill: "#F7EFE4", stroke: "#2D1807", strokeWidth: 0.5, outline: "none" },
                    pressed: { fill: "#F7EFE4", stroke: "#2D1807", strokeWidth: 0.5, outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {chapters.map((chapter) => (
            <Marker key={chapter.id} coordinates={chapter.coordinates}>
              <g
                onClick={() => setActiveId(chapter.id)}
                role="button"
                tabIndex={0}
                aria-label={`${chapter.chapterName} at ${chapter.college}`}
                className="cursor-pointer"
              >
                {chapter.id === activeId && <circle r={9} className="fill-brand-lime/50 animate-ping" />}
                <circle
                  r={chapter.id === activeId ? 6 : 4.5}
                  className={`transition-all ${
                    chapter.id === activeId ? "fill-brand-lime stroke-white" : "fill-brand-chili hover:fill-brand-lime"
                  }`}
                  strokeWidth={chapter.id === activeId ? 1.5 : 0}
                />
              </g>
            </Marker>
          ))}
        </ComposableMap>
      </div>

      <div className="relative min-h-[96px] mt-6">
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="notch-md bg-white p-5 max-w-md mx-auto text-center shadow-xl"
            >
              <h3 className="text-sm font-bold uppercase text-brand-brown">{active.chapterName}</h3>
              <p className="text-xs text-brand-brown/60 mt-1">{active.college}</p>
              <p className="text-xs text-brand-brown/60">
                {active.city}, {active.state}
              </p>
              <button
                onClick={() => scrollToChapter(active.id)}
                className="notch-sm inline-flex items-center gap-1.5 mt-4 bg-brand-chili hover:bg-brand-brown text-white text-xs font-semibold uppercase tracking-wide py-2 px-4 transition-colors"
              >
                Learn More
                <FiArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
