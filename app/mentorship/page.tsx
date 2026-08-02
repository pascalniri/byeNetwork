import PageHero from "@/components/layout/PageHero";

export default function Mentorship() {
  return (
    <div>
      <PageHero
        eyebrow="Get Involved"
        title="Mentorship"
        description="Empower your journey with the guidance and expertise of experienced mentors. Whether you're seeking professional growth, personal development, or specific skills, our mentorship program connects you with mentors who are dedicated to your success. Explore opportunities to learn, grow, and achieve your goals with tailored support and meaningful connections."
        accent="pink"
      />

      <div className="max-w-screen-2xl flex flex-col justify-center items-center text-center mx-auto px-4 md:px-16 lg:px-24 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase text-brand-brown">
          Mentorship <span className="text-brand-chili">Interest Form</span>
        </h2>
        <p className="text-sm leading-relaxed mt-4 text-brand-brown/70 md:w-[80%] mx-auto">
          To become a mentor, we invite individuals aged 21 and above to join our mentoring program. This is an
          opportunity to share your experiences, insights, and expertise with the next generation, helping them
          navigate the challenges and opportunities that lie ahead.
        </p>
      </div>
    </div>
  );
}
