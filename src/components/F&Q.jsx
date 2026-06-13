"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What massage services do you offer?",
    answer:
      "We offer Full Body Massage, Female to Male Massage, Four Hand Massage, Thai Massage, Deep Tissue Massage, Hot Oil Massage, and Swedish Massage.",
  },
  {
    question: "Do I need to book an appointment in advance?",
    answer:
      "While walk-ins are welcome, we recommend booking in advance to ensure your preferred time slot is available.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "Bella Spa is open every day from 10:00 AM to 10:00 PM.",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes, parking facilities are available near our location at Rathi Planet, MIDC Industrial Area, Chilkalthana.",
  },
  {
    question: "Are your therapists professionally trained?",
    answer:
      "Yes, all our therapists are experienced professionals trained in various massage and wellness therapies.",
  },
  {
    question: "How can I book a spa session?",
    answer:
      "You can call us directly at +91 9371000458 or book instantly through WhatsApp.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Got Questions?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know about Bella Spa and our services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-yellow-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`text-yellow-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={22}
                />
              </button>

              {openIndex === index && (
                <div className="border-t border-yellow-100 px-6 py-5">
                  <p className="leading-8 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/919371000458"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-500"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}