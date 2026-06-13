import Image from "next/image";

const offers = [
  {
    title: "20% OFF Full Body Massage",
    description:
      "Enjoy a rejuvenating full body massage session with a special discount for a limited time.",
    image: "/offers/of1.png",
  },
  {
    title: "Couple Spa Package",
    description:
      "Relax together with our premium couple spa experience and exclusive wellness therapies.",
    image: "/offers/of2.png",
  },
  {
    title: "Luxury Thai Massage Deal",
    description:
      "Experience authentic Thai massage techniques with exclusive seasonal pricing.",
    image: "/offers/of3.png",
  },
];

export default function OffersSection() {
  return (
    <section className="bg-[#f8f8f8] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#FDC700]">
            Special Offers
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Exclusive Spa Deals
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Discover luxury wellness experiences and premium massage
            packages at special prices.
          </p>
        </div>

        {/* Cards */}
  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
  {offers.map((offer, index) => (
    <article
      key={index}
      className="group overflow-hidden rounded-[30px] shadow-xl"
    >
      <div className="relative h-[420px] sm:h-[450px] lg:h-[500px] overflow-hidden">
        {/* Image */}
        <Image
          src={offer.image}
          alt={offer.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent md:opacity-60 md:group-hover:opacity-90 opacity-80 transition duration-500" />

        {/* Content */}
        <div
          className="
            absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white
          "
        >
          {/* Title */}
          <h3
            className="
              text-2xl sm:text-3xl font-bold
              md:translate-y-8 md:group-hover:translate-y-0
              transition duration-500
            "
          >
            {offer.title}
          </h3>

          {/* Description */}
          <p
            className="
              mt-4 text-white/90 leading-7
              md:max-h-0 md:overflow-hidden md:opacity-0
              md:group-hover:max-h-40 md:group-hover:opacity-100
              transition-all duration-500
            "
          >
            {offer.description}
          </p>

          {/* Buttons */}
          <div
            className="
              mt-6 flex gap-3
              md:opacity-0 md:group-hover:opacity-100
              transition-all duration-500
            "
          >
            <a
              href="tel:+919371000457"
              className="flex-1 rounded-xl bg-[#FDC700] py-3 text-center font-semibold text-black transition hover:bg-[#FACC15]"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919371000458"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl bg-[#25D366] py-3 text-center font-semibold text-white transition hover:opacity-90"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  ))}
</div>
      </div>
    </section>
  );
}