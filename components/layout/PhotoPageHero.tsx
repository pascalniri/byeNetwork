import type { ReactNode } from "react";
import type { PageHeroAccent } from "./PageHero";

const ACCENT_CLASSES: Record<PageHeroAccent, { bg: string; text: string }> = {
  chili: { bg: "bg-brand-chili", text: "text-white" },
  ocean: { bg: "bg-brand-ocean", text: "text-white" },
  lime: { bg: "bg-brand-lime", text: "text-brand-brown" },
  yellow: { bg: "bg-brand-yellow", text: "text-brand-brown" },
  pink: { bg: "bg-brand-pink", text: "text-white" },
  green: { bg: "bg-brand-green", text: "text-white" },
};

/**
 * Photo-backed variant of PageHero, for inner pages that have a fitting real
 * photo instead of the flat brand-brown + pattern banner.
 */
export default function PhotoPageHero({
  image,
  imagePosition = "center",
  eyebrow,
  title,
  description,
  accent = "chili",
}: {
  image: string;
  imagePosition?: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  accent?: PageHeroAccent;
}) {
  const a = ACCENT_CLASSES[accent];

  return (
    <section className="relative w-full h-[46vh] sm:h-[52vh] min-h-[340px] sm:min-h-[400px] overflow-hidden">
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: imagePosition, filter: "grayscale(1) contrast(1.1) brightness(0.85)" }}
      />
      <div className="absolute inset-0 bg-brand-brown mix-blend-multiply opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-brown via-brand-brown/40 to-transparent" />

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 text-center">
          <span className={`notch-sm inline-block ${a.bg} ${a.text} text-xs font-medium uppercase tracking-widest px-4 py-2`}>
            {eyebrow}
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight text-white mt-4">
            {title}
          </h1>

          {description && (
            <p className="text-sm text-brand-cream/90 leading-relaxed mt-4 max-w-2xl mx-auto">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
