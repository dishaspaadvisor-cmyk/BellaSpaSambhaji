import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServiceGrid from "@/components/ServiceGrid";
import OffersSection from "@/components/OffersSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/Testimonial";
import Footer from "@/components/Footer";
import FAQSection from "@/components/F&Q";

export default function Home() {
  return (
    <>
      <main className="overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.98),_rgba(255,255,255,1))] text-slate-950 antialiased min-h-screen">
        <HeroSection />
        <AboutSection />
        <ServiceGrid />
        <OffersSection />
        <GallerySection />
        <FAQSection />
        <TestimonialsSection  />
        <Footer />
      </main>
    </>
  );
}