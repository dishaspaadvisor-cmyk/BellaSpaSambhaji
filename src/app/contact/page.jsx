import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";
import ContactHeroSection from "@/components/ContactHero";
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <ContactHeroSection />
      <ContactSection />
      <MapSection />
      <Footer />
    </main>
  );
}
