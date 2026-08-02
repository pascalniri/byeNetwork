import type { ReactNode } from "react";

export type PageHeroAccent = "chili" | "ocean" | "lime" | "yellow" | "pink" | "green";

const ACCENT_CLASSES: Record<PageHeroAccent, { bg: string; text: string }> = {
  chili: { bg: "bg-brand-chili", text: "text-white" },
  ocean: { bg: "bg-brand-ocean", text: "text-white" },
  lime: { bg: "bg-brand-lime", text: "text-brand-brown" },
  yellow: { bg: "bg-brand-yellow", text: "text-brand-brown" },
  pink: { bg: "bg-brand-pink", text: "text-white" },
  green: { bg: "bg-brand-green", text: "text-white" },
};

/**
 * Shared page-header banner for every inner page. Gives every section of the
 * site its own accent color, reusing the same color-to-section mapping as the
 * nav dropdowns.
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  accent = "chili",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  accent?: PageHeroAccent;
}) {
  const a = ACCENT_CLASSES[accent];

  return (
    <section className="relative bg-brand-brown overflow-hidden pt-14 sm:pt-16 pb-14 sm:pb-16">
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: 'url("/branding/SVG/Pattern_Cream.svg")',
          backgroundRepeat: "repeat",
          backgroundSize: "220px auto",
        }}
      />
      <img
        src="/branding/02_ Logos/Primary_Logo/SVG/Primary_Logo_White.svg"
        alt=""
        aria-hidden
        className="hidden md:block absolute -right-10 -bottom-16 w-64 opacity-[0.06] pointer-events-none select-none rotate-[8deg]"
      />

      <div className="relative container mx-auto px-4 sm:px-6 md:px-10 text-center">
        <span className={`notch-sm inline-block ${a.bg} ${a.text} text-xs font-medium uppercase tracking-widest px-4 py-2`}>
          {eyebrow}
        </span>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight text-white mt-4">
          {title}
        </h1>

        {description && (
          <p className="text-sm text-brand-cream/80 leading-relaxed mt-4 max-w-2xl mx-auto">{description}</p>
        )}
      </div>
    </section>
  );
}
