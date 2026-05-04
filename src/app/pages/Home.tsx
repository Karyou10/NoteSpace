import LandingPageHeader from "../components/LandingPageHeader";
import HeroSection from "../components/HeroSection";
import UniversityLogos from "../components/UniversityLogos";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#fefefe] flex flex-col min-h-screen w-full">
      <LandingPageHeader />
      
      <main className="flex flex-col items-center w-full">
        <div className="content-stretch flex flex-col gap-[88px] items-center px-[112px] py-[88px] relative w-full">
          <HeroSection />
        </div>

        <div className="content-stretch flex flex-col items-center py-[88px] relative w-full">
          <UniversityLogos />
        </div>

        <div className="content-stretch flex flex-col items-center py-[88px] relative w-full">
          <TestimonialsSection />
        </div>

        <div className="content-stretch flex flex-col items-center py-[88px] relative w-full">
          <FeaturesSection />
        </div>

        <div className="content-stretch flex flex-col items-center py-[88px] relative w-full">
          <FAQSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}