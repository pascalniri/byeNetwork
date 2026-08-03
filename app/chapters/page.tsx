import Link from "next/link";
import { FaQuoteLeft } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import ChaptersMap from "@/components/chapters/ChaptersMap";
import { chapters } from "@/lib/chapters";

const stateCount = new Set(chapters.map((c) => c.state)).size;

const stats = [
  { value: `${chapters.length}`, label: "Active Chapters", bg: "bg-brand-chili", text: "text-white" },
  { value: `${stateCount}`, label: "States Reached", bg: "bg-brand-ocean", text: "text-white" },
  { value: "700+", label: "Members Connected", bg: "bg-brand-lime", text: "text-brand-brown" },
  { value: "2026", label: "Next Chapters Launching", bg: "bg-brand-yellow", text: "text-brand-brown" },
];

const cardAccents = ["border-brand-chili", "border-brand-ocean", "border-brand-lime", "border-brand-yellow", "border-brand-pink", "border-brand-green"];

const heroCtas = [
  {
    label: "Explore Our Chapters",
    description: "See every chapter on the map below",
    href: "#explore",
    bg: "bg-brand-chili",
    text: "text-white",
  },
  {
    label: "Start a Chapter",
    description: "Bring BYEN to your campus",
    href: "/start-chapter",
    bg: "bg-brand-lime",
    text: "text-brand-brown",
  },
  {
    label: "Join the Network",
    description: "Become a BYEN member",
    href: "/membership",
    bg: "bg-brand-cream",
    text: "text-brand-brown",
  },
];

export default function OurChapters() {
  return (
    <div>
      {/* Hero */}
      <section className="relative w-full h-[56vh] sm:h-[64vh] min-h-[380px] sm:min-h-[440px] overflow-hidden">
        <img
          src="/community.jpg"
          alt="BYEN members connecting on campus"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "grayscale(1) contrast(1.1) brightness(0.85)" }}
        />
        <div className="absolute inset-0 bg-brand-brown mix-blend-multiply opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown via-brand-brown/40 to-transparent" />

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-10">
            <span className="notch-sm inline-block bg-brand-ocean text-white text-xs font-medium uppercase tracking-widest px-4 py-2">
              About Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-tight text-white mt-4 max-w-2xl">
              Our <span className="text-brand-lime">Chapters</span>
            </h1>
            <p className="text-sm sm:text-base text-brand-cream/90 max-w-xl mt-4">
              Youth-led extensions of our national movement, growing across the Southeast and East Coast.
            </p>
          </div>
        </div>
      </section>

      {/* Overlapping CTA cards */}
      <div className="relative z-20 -mt-10 sm:-mt-14">
        <div className="container mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {heroCtas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                className={`group notch-md ${cta.bg} ${cta.text} p-5 sm:p-6 shadow-xl hover:-translate-y-1 transition-transform duration-200`}
              >
                <span className="flex items-center justify-between font-bold uppercase text-sm sm:text-base">
                  {cta.label}
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="block text-xs opacity-80 mt-1">{cta.description}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Stat band */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 mt-16 sm:mt-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className={`notch-md ${stat.bg} ${stat.text} p-6 sm:p-8`}>
              <span className="block text-3xl sm:text-4xl font-bold">{stat.value}</span>
              <span className="block text-xs sm:text-sm font-medium uppercase tracking-wide mt-2 opacity-80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown">Find a Chapter Near You</h2>
          <p className="text-sm text-brand-brown/70 mt-3 max-w-xl mx-auto">
            Tap a dot on the map to preview a chapter, then jump straight to its full profile below.
          </p>
        </div>

        <ChaptersMap />

        <div id="explore" className="mt-20 scroll-mt-10">
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-10 text-center">
            Explore Our Chapters
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {chapters.map((chapter, index) => (
              <div
                key={chapter.id}
                id={`chapter-${chapter.id}`}
                className={`notch-lg bg-white shadow-md border-t-4 ${cardAccents[index % cardAccents.length]} p-6 scroll-mt-10`}
              >
                <h3 className="text-base font-bold uppercase text-brand-brown">{chapter.chapterName}</h3>
                <p className="text-sm text-brand-chili font-semibold mt-1">{chapter.college}</p>
                <p className="text-sm text-brand-brown/60 mt-1">
                  {chapter.city}, {chapter.state}
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-xs text-brand-brown/60">
                  <span>
                    <span className="font-semibold text-brand-brown">Year:</span> {chapter.yearLabel}
                  </span>
                  <span>
                    <span className="font-semibold text-brand-brown">Founded by:</span> {chapter.foundingPresident}
                  </span>
                </div>

                <div className="notch-md bg-brand-cream p-4 mt-4">
                  <FaQuoteLeft className="text-brand-chili/30 text-lg mb-1" />
                  <p className="text-sm italic text-brand-brown/80">{chapter.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing CTA band */}
      <section className="relative w-full py-20 sm:py-28 overflow-hidden">
        <img
          src="/join.jpg"
          alt="BYEN members"
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{ filter: "grayscale(1) contrast(1.1) brightness(0.7)" }}
        />
        <div className="absolute inset-0 bg-brand-brown/85" />

        <div className="relative container mx-auto px-4 sm:px-6 md:px-10 text-center max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white mb-4">
            Don&apos;t See a Chapter Near You?
          </h2>
          <p className="text-sm sm:text-base text-brand-cream/90 mb-8">
            Every chapter starts with one committed student. Bring BYEN&apos;s network of young Black leaders to
            your campus.
          </p>
          <Link
            href="/start-chapter"
            className="notch-md inline-flex items-center gap-2 bg-brand-chili hover:bg-white text-white hover:text-brand-brown font-semibold uppercase tracking-wide text-xs sm:text-sm py-3 px-6 transition-colors duration-200"
          >
            Start a Chapter
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
