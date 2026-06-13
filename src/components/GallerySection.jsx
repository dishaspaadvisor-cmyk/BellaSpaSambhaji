import Image from "next/image";

const galleryItems = [
  {
    image: "/gallery/1.png",
    title: "Luxury Spa Room",
  },
  {
    image: "/gallery/2.png",
    title: "Thai Massage Therapy",
  },
  {
    image: "/gallery/3.png",
    title: "Relaxing Spa Ambience",
  },
  {
    image: "/gallery/4.png",
    title: "Jacuzzi & Wellness",
  },
  {
    image: "/gallery/5.png",
    title: "Premium Treatment Room",
  },
  {
    image: "/gallery/6.png",
    title: "Luxury Body Massage",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
            Our Gallery
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-5xl">
            Explore Our Spa Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Discover luxurious treatment rooms, peaceful interiors,
            professional therapies, and premium wellness experiences.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[28px] shadow-lg"
            >
              {/* Image */}
              <div className="relative h-[320px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent" />

              {/* Title */}
              <div className="absolute bottom-6 left-6 z-10">
                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}