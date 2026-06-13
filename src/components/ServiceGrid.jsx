import Image from "next/image";

const services = [
  {
    name: "Full Body Massage",
    description:
      "A complete body massage designed to reduce stress, relax muscles, improve circulation, and restore energy.",
    image: "/services/1.jpg",
  },
  {
    name: "Female to Male Massage",
    description:
      "Professional massage provided by trained therapists in a comfortable, hygienic, and relaxing spa environment.",
    image: "/services/2.jpg",
  },
  {
    name: "Four Hand Massage",
    description:
      "A luxury massage performed by two therapists simultaneously for deeper relaxation and body comfort.",
    image: "/services/3.jpg",
  },
  {
    name: "Deep Tissue Massage",
    description:
      "Focused therapy that targets deep muscle layers to relieve tension and chronic pain.",
    image: "/services/5.jpg",
  },
  {
    name: "Hot Oil Massage",
    description:
      "Relaxing massage using warm aromatic oils to nourish the skin and calm the body.",
    image: "/services/6.jpg",
  },
  {
    name: "Swedish Massage",
    description:
      "Gentle and soothing massage techniques that improve circulation and promote relaxation.",
    image: "/services/7.jpg",
  },
];

export default function ServiceGrid() {
  return (
    <section className="bg-[#f8f8f8] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#FDC700]">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Premium Massage Services
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Experience professional spa therapies designed to relax
            your body, refresh your mind, and restore your wellness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.name}
              className="overflow-hidden rounded-[28px] border border-transparent bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:border-[#FDC700] hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  {service.name}
                </h3>

                <div className="mt-3 h-1 w-14 rounded-full bg-[#FDC700]" />

                <p className="mt-4 leading-8 text-slate-600">
                  {service.description}
                </p>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  <a
                    href="tel:+919371000458"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}