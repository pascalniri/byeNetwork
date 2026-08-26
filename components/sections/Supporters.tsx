const partners: { name: string; image?: string }[] = [
  { name: "Civics Unplugged", image: "/images/logo-1.png" },
  { name: "Everytown Community Safety Fund", image: "/images/logo-2.png" },
  { name: "ONYX IMPACT", image: "/images/logo-4.png" },
  { name: "Center for Strong Public Schools", image: "/images/logo-5.png" },
];

const Supporters = () => {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <p className="text-center text-sm sm:text-base font-bold uppercase tracking-widest text-brand-brown/40 mb-8">
          Supported By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
          {partners.map((partner) =>
            partner.image ? (
              <img
                key={partner.name}
                src={partner.image}
                alt={partner.name}
                className="h-12 sm:h-16 object-contain w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
              />
            ) : (
              <span
                key={partner.name}
                className="text-base sm:text-lg font-bold uppercase tracking-wide text-brand-brown/40 hover:text-brand-brown/70 transition-colors duration-200 whitespace-nowrap"
              >
                {partner.name}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Supporters;
