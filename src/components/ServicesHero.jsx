import Image from "next/image";

export default function ServicesHeroSection() {
  return (
    <section className="relative h-[500px] overflow-hidden md:h-[600px]">
      {/* Background Image */}
      <Image
        src="/other/ot.jpg"
        alt="Bella Spa Services"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">
          <div className="mx-auto mb-8 h-16 w-1 bg-red-600" />

          <h1 className="text-4xl font-bold md:text-6xl">
            Our Premium Luxury Spa & Massage Services
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-200 md:text-2xl">
            Experience a complete range of luxury wellness therapies,
            relaxing massages, and rejuvenating treatments at
            <span className="font-semibold text-red-400">
              {" "}
              Bella Spa
            </span>
            . Designed to refresh your body, calm your mind,
            and restore your inner balance.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919371000457"
              className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/919371000458"
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