import AboutHeroSection from "@/components/Abouthero";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/Testimonial";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
        <AboutHeroSection />
      <AboutSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
