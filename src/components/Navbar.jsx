"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/offers", label: "Offer" },
  { href: "/contact", label: "Contact" },
];

const phone = "+919371000457";

const whatsappLink =
  "https://wa.me/919371000458?text=Hello%20I%20want%20to%20book%20a%20spa%20session";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-black shadow-lg">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex min-h-[64px] items-center justify-between py-2 md:py-0">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo4.png"
              alt="Spa Logo"
              width={150}
              height={70}
              priority
              className="h-10 w-auto object-contain md:h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex lg:gap-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    `font-medium transition duration-300 ${
                      isActive
                        ? "text-yellow-500 underline underline-offset-8 decoration-yellow-500"
                        : "text-white hover:text-yellow-500"
                    }`
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`tel:${phone}`}
              className="rounded-full border border-yellow-500 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-yellow-500 hover:text-black"
            >
              📞 Call Now
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:opacity-90"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/70 text-2xl text-white transition hover:bg-white/10 md:hidden"
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 md:hidden">
          <div className="flex flex-col gap-2 px-4 py-5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-base font-medium transition ${
                    isActive
                      ? "text-yellow-500 underline underline-offset-4 decoration-yellow-500"
                      : "text-white hover:text-yellow-500"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-3 flex flex-col gap-3 px-1">
              <a
                href={`tel:${phone}`}
                className="rounded-full border border-yellow-500 px-5 py-3 text-center font-medium text-white transition hover:bg-yellow-500 hover:text-black"
              >
                📞 Call Now
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-5 py-3 text-center font-medium text-white transition hover:opacity-90"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}