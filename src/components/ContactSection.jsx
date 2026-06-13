"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function ContactSection() {
  const handleWhatsApp = () => {
    const message =
      "Hello Bella Spa, I would like to enquire about your spa services.";

    window.open(
      `https://wa.me/919371000458?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
              Contact Us
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              Visit
              <span className="text-yellow-600"> Bella Spa</span>
            </h2>

            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Experience premium spa therapies, wellness treatments,
              and complete relaxation in a luxurious environment.
            </p>

            {/* Contact Cards */}
            <div className="mt-10 space-y-6">
              <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-md transition hover:shadow-xl">
                <div className="flex gap-4">
                  <MapPin className="mt-1 text-yellow-600" size={28} />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Address
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      Shop No.5-9, Ground Floor,
                      <br />
                      Rathi Planet, MIDC Industrial Area,
                      <br />
                      Chilkalthana,
                      <br />
                      Chhatrapati Sambhaji Nagar,
                      <br />
                      Maharashtra 431007
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-md transition hover:shadow-xl">
                <div className="flex gap-4">
                  <Phone className="text-yellow-600" size={28} />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Phone
                    </h3>

                    <a
                      href="tel:+919371000457"
                      className="mt-2 block text-slate-600 hover:text-yellow-600"
                    >
                      +91 9371000457
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-md transition hover:shadow-xl">
                <div className="flex gap-4">
                  <Mail className="text-yellow-600" size={28} />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Email
                    </h3>

                    <a
                      href="mailto:bellaspa.aurangabad@gmail.com"
                      className="mt-2 block text-slate-600 hover:text-yellow-600"
                    >
                      bellaspa.aurangabad@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-yellow-200 bg-white p-6 shadow-md transition hover:shadow-xl">
                <div className="flex gap-4">
                  <Clock className="text-yellow-600" size={28} />

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Opening Hours
                    </h3>

                    <p className="mt-2 text-slate-600">
                      Monday - Sunday
                      <br />
                      10:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+919371000457"
                className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-600"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919371000458"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-[#25D366] px-8 py-4 font-semibold text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="rounded-[32px] border border-yellow-200 bg-white p-8 shadow-xl">
            <h3 className="mb-8 text-3xl font-bold text-slate-900">
              Book Appointment
            </h3>

            <form className="space-y-6">
              <div>
                <label className="mb-2 block font-medium text-slate-800">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-800">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-800">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-800">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message"
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-600 py-4 text-lg font-semibold text-black transition hover:from-yellow-600 hover:to-yellow-700"
              >
                <MessageCircle size={22} />
                Enquiry on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}