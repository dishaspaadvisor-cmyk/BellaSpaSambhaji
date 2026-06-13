import Footer from "@/components/Footer";
import OffersSection from "@/components/OffersSection";
import OffersHeroSection from "@/components/OfferHero";
export default function OffersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-700 to-slate-950 text-white">
      <OffersHeroSection />
      <OffersSection />
    <Footer />
    </main>
  );
}
