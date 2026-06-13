"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/hero/1.jpg",
    title: "Best Spa in Aurangabad",
    description:
      "Relax, refresh, and rejuvenate with premium spa therapies, body massage, skincare treatments, and wellness experiences.",
  },
  {
    image: "/hero/2.jpg",
    title: "Luxury Spa Experience",
    description:
      "Discover a peaceful atmosphere with professional therapists, relaxing treatments, and complete wellness care.",
  },
];

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen min-h-[700px]">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6">
                <div className="max-w-3xl">
                  {/* Badge */}
                  <span className="mb-6 inline-flex rounded-full border border-yellow-500 bg-black/30 px-5 py-2 text-sm font-medium text-yellow-400 backdrop-blur">
                    ✨ Luxury Spa Experience
                  </span>

                  {/* Updated Heading Size */}
                  <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                    {slide.title.split("Aurangabad")[0]}
                    <br />
                    <span className="text-yellow-400">
                      {slide.title.includes("Aurangabad")
                        ? "SambhajiNagar"
                        : "Premium Care"}
                    </span>
                  </h1>

                  <p className="mb-8 max-w-2xl text-lg leading-9 text-gray-200 md:text-xl">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="https://wa.me/919371000458?text=Hello%20I%20want%20to%20book%20a%20spa%20session"
                      className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
                    >
                      Book Now
                    </Link>

                    <Link
                      href="/services"
                      className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
                    >
                      View Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <Link
          href="tel:+919371000457"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-xl shadow-lg transition hover:scale-110"
        >
          📞
        </Link>

        <Link
          href="https://wa.me/919371000458"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-xl text-white shadow-lg transition hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="h-6 w-6" />
        </Link>
      </div>
    </section>
  );
}