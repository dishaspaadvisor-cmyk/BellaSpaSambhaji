"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top Golden Border */}
      <div className="h-1 w-full bg-yellow-500"></div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-6 text-3xl font-bold text-yellow-500">
              Bella Spa
            </h3>

            <p className="leading-8 text-gray-300">
              Premium spa and wellness experience in Chhatrapati Sambhaji
              Nagar. Enjoy luxury massage therapies, peaceful ambience,
              professional care, and complete relaxation.
            </p>

            {/* Social Media */}
            <div className="mt-8 flex gap-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61576050772174"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition hover:bg-[#1877F2] hover:text-white"
              >
                <FaFacebookF />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/bellaspa_aurangabad/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:text-white"
              >
                <FaInstagram />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919371000458"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition hover:bg-[#25D366] hover:text-white"
              >
                <FaWhatsapp />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@BellaSpaAurangabad"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition hover:bg-[#FF0000] hover:text-white"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-2xl font-semibold text-yellow-500">
              Quick Links
            </h4>

            <ul className="space-y-4 text-gray-300">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-yellow-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-yellow-500"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="transition hover:text-yellow-500"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="transition hover:text-yellow-500"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/offers"
                  className="transition hover:text-yellow-500"
                >
                  Offers
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-yellow-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-2xl font-semibold text-yellow-500">
              Our Services
            </h4>

            <ul className="space-y-4 text-gray-300">
              <li>Full Body Massage</li>
              <li>Female to Male Massage</li>
              <li>Four Hand Massage</li>
              <li>Thai Massage</li>
              <li>Deep Tissue Massage</li>
              <li>Hot Oil Massage</li>
              <li>Swedish Massage</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-2xl font-semibold text-yellow-500">
              Contact Info
            </h4>

            <div className="space-y-5 text-gray-300">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="mt-1 text-yellow-500" />
                <p>
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

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-yellow-500" />
                <a
                  href="tel:+919371000458"
                  className="transition hover:text-yellow-500"
                >
                  +91 9371000458
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-yellow-500" />
                <a
                  href="mailto:bellaspa.aurangabad@gmail.com"
                  className="transition hover:text-yellow-500"
                >
                  bellaspa.aurangabad@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaClock className="text-yellow-500" />
                <span>Monday - Sunday: 10:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-gray-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} Bella Spa. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="transition hover:text-yellow-500"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-yellow-500"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}