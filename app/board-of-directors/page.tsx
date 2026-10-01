import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import PageHero from "@/components/layout/PageHero";
import leaders from "@/lib/leaders";

const boardMembers = leaders.filter((leader) => leader.status === "trustee");

export default function BoardOfDirectors() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="Our Board of Directors"
        description="BYEN's Board of Directors provides governance and strategic guidance for the organization's national growth."
        accent="ocean"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-14">
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-6 border-b-2 border-brand-chili inline-block pb-2">
            Board Members
          </h2>
          <p className="text-sm text-brand-brown/70 max-w-2xl mx-auto leading-relaxed">
            Our board members provide governance, strategic guidance, and long-term support for BYEN&apos;s
            national growth and sustainability.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-14">
          {boardMembers.map((member) => (
            <div key={member.id} className="w-full sm:w-72 flex flex-col items-center text-center">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-brand-cream shadow-md">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-base sm:text-lg font-bold uppercase text-brand-brown mt-6">{member.name}</h3>
              <p className="text-sm text-brand-chili font-semibold mt-1 mb-4">{member.title}</p>
              <Link
                href={`/leadership/${member.id}`}
                className="notch-sm inline-flex items-center gap-2 bg-brand-chili hover:bg-brand-brown text-white text-xs font-semibold uppercase tracking-wide py-2.5 px-5 transition-colors"
              >
                View Profile
                <FiArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
