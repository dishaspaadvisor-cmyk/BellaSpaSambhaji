"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    review:
      "One of the best spa experiences in Chhatrapati Sambhaji Nagar. The ambience is peaceful, the staff is professional, and the massage therapy helped me relax completely.",
  },
  {
    name: "Priya Deshmukh",
    review:
      "Bella Spa offers excellent service and a very clean environment. The therapists are skilled and make you feel comfortable throughout the session.",
  },
  {
    name: "Amit Verma",
    review:
      "I booked a Deep Tissue Massage and was impressed by the professionalism. The treatment relieved my muscle tension and left me feeling refreshed.",
  },
  {
    name: "Sneha Patil",
    review:
      "Beautiful interiors, hygienic rooms, and amazing customer service. I highly recommend Bella Spa to anyone looking for relaxation and wellness.",
  },
  {
    name: "Vikram Singh",
    review:
      "The Thai Massage was exceptional. The atmosphere is luxurious yet peaceful. Definitely one of the finest spa experiences I've had.",
  },
  {
    name: "Neha Kulkarni",
    review:
      "From booking to treatment, everything was smooth and professional. Bella Spa truly focuses on customer comfort and satisfaction.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f8f8f8] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Hear from guests who have experienced relaxation,
            rejuvenation, and wellness at Bella Spa.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-[28px] bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>

              <p className="leading-8 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-6 border-t pt-5">
                <h3 className="font-semibold text-slate-900">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-500">
                  Verified Customer
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}