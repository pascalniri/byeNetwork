import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import PageHero from "@/components/layout/PageHero";

const quickLinks = [
  {
    title: "History & Background",
    description: "From a group chat to a national movement — the story of how BYEN came to be.",
    href: "/history-and-background",
  },
  {
    title: "Leadership Team",
    description: "Meet the youth-led team steering BYEN's national vision and programs.",
    href: "/leadership",
  },
  {
    title: "Partners",
    description: "The organizations and institutions standing behind BYEN's mission.",
    href: "/partners",
  },
];

export default function AllAbout() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="About BYEN"
        description="A youth-led movement building leadership, opportunity, and community power for Black youth nationwide."
        accent="ocean"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="notch-lg bg-white p-8 sm:p-10 shadow-lg mb-8">
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-6">Who We Are</h2>
          <p className="text-sm text-brand-brown/70 leading-relaxed mb-4">
            The Black Youth Empowerment Network (BYEN) is a national, youth-led organization committed to leadership
            development, community service, and advocacy. We are a community of advocates, changemakers, and
            trailblazers united not by status or title, but by a shared energy for change, growth, and leadership —
            a home for young Black people ready to build, lead, and push their communities forward.
          </p>
          <p className="text-sm text-brand-brown/70 leading-relaxed">
            Since relaunching in spring 2025, BYEN has grown to over 200 members across 25 states, with a dual model
            of national membership and local chapters that reaches youth where they are while building a unified
            platform for impact, advocacy, and opportunity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          <div className="notch-md bg-brand-cream border-t-4 border-brand-chili p-6 shadow-sm">
            <span className="notch-sm inline-block bg-brand-chili text-white text-xs font-medium uppercase tracking-widest px-3 py-1 mb-4">
              Mission
            </span>
            <p className="text-sm text-brand-brown/80 leading-relaxed">
              BYEN connects Black youth to opportunities, resources, and a supportive community, strengthening their
              personal and professional development and equipping them to create meaningful change.
            </p>
          </div>

          <div className="notch-md bg-brand-cream border-t-4 border-brand-ocean p-6 shadow-sm">
            <span className="notch-sm inline-block bg-brand-ocean text-white text-xs font-medium uppercase tracking-widest px-3 py-1 mb-4">
              Vision
            </span>
            <p className="text-sm text-brand-brown/80 leading-relaxed">
              A future where Black youth are fully supported in becoming leaders who thrive professionally, socially,
              intellectually, and beyond.
            </p>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-8 text-center">Learn More</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="notch-md bg-brand-brown/10 p-0.5 shadow-md hover:shadow-xl transition-shadow duration-300 group flex"
            >
              <div className="notch-md-inner bg-white p-6 flex flex-col flex-1">
                <h3 className="text-base font-bold text-brand-brown mb-2 group-hover:text-brand-chili transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-brand-brown/70 mb-4 flex-grow">{link.description}</p>
                <span className="text-brand-chili text-xs font-bold uppercase tracking-wide flex items-center">
                  Explore
                  <FiArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
