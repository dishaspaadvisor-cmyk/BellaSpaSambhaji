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
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden h-full md:block">
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
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block h-full md:hidden">
        <div className="relative h-screen min-h-[700px]">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/hero/hero.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Content */}
          <div className="relative z-20 flex h-full flex-col justify-center px-6">
            <div className="w-full pt-10">
              {/* Badge */}
              <span className="mb-4 inline-flex rounded-full border border-yellow-500 bg-black/30 px-4 py-1.5 text-xs font-medium text-yellow-400 backdrop-blur">
                ✨ Luxury Spa Experience
              </span>

              {/* Headings Slider */}
              <div className="mb-6 w-full">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop
                  className="w-full"
                >
                  <SwiperSlide>
                    <h1 className="text-4xl font-bold leading-tight text-white">
                      Best Spa in
                      <br />
                      <span className="text-yellow-400">SambhajiNagar</span>
                    </h1>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h1 className="text-4xl font-bold leading-tight text-white">
                      No.1 Spa in
                      <br />
                      <span className="text-yellow-400">SambhajiNagar</span>
                    </h1>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* No Description on mobile */}

              {/* Buttons */}
              <div className="mt-8 flex flex-row gap-3">
                <Link
                  href="tel:+919371000457"
                  className="flex flex-1 items-center justify-center rounded-full bg-yellow-500 px-4 py-3.5 text-base font-semibold text-black transition hover:bg-yellow-400 sm:text-lg"
                >
                  📞 Call Now
                </Link>
                <Link
                  href="https://wa.me/919371000458?text=Hello%20I%20want%20to%20book%20a%20spa%20session"
                  className="flex flex-1 items-center justify-center rounded-full bg-[#25D366] px-4 py-3.5 text-base font-semibold text-white transition hover:bg-[#20bd5a] sm:text-lg"
                >
                  <FaWhatsapp className="mr-2 h-5 w-5 sm:h-6 sm:w-6" /> WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Buttons - Hidden on mobile because they are prominent in the mobile hero section */}
      <div className="fixed bottom-6 right-6 z-50 hidden flex-col gap-4 md:flex">
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