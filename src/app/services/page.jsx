import Footer from "@/components/Footer";
import ServiceGrid from "@/components/ServiceGrid";
import ServicesHeroSection from "@/components/ServicesHero";
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <ServicesHeroSection /> 
      <ServiceGrid />
      <Footer />
    </main>
  );
}
