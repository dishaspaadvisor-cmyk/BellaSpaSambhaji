import Image from "next/image";

export default function OffersHeroSection() {
  return (
    <section className="relative h-[500px] overflow-hidden md:h-[600px]">
      {/* Background Image */}
      <Image
        src="/other/ot.jpg"
        alt="Bella Spa Offers"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">
          

          {/* Heading */}
          <h1 className="text-4xl font-bold md:text-6xl">
            Exclusive Spa Offers & Packages
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-200 md:text-2xl">
            Discover special discounts, luxury wellness packages,
            and exclusive spa deals at
            <span className="font-semibold text-yellow-400">
              {" "}Bella Spa
            </span>
            . Enjoy premium massage therapies and rejuvenating
            treatments at exceptional value.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919371000457"
              className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919371000458"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5a]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}