import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import GalleryHeroSection from "@/components/GalleryHero";
export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <GalleryHeroSection />  
      <GallerySection />
      <Footer />
    </main>
  );
}
