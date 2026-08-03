import PageHero from "@/components/layout/PageHero";

export default function BoardOfDirectors() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="Our Board of Directors"
        description="BYEN's Board of Directors provides governance and strategic guidance for the organization's national growth."
        accent="ocean"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <div className="notch-lg bg-brand-cream p-10 sm:p-14">
          <h2 className="text-xl sm:text-2xl font-bold uppercase text-brand-brown mb-4">Announcement Coming Soon</h2>
          <p className="text-sm text-brand-brown/70 leading-relaxed">
            We&apos;re preparing to introduce BYEN&apos;s Board of Directors. Check back soon for the official
            announcement.
          </p>
        </div>
      </div>
    </div>
  );
}
