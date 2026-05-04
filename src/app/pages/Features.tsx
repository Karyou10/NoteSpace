import { Link } from "react-router";
import LandingPageHeader from "../components/LandingPageHeader";
import Footer from "../components/Footer";

export default function Features() {
  return (
    <div className="bg-[#fefefe] flex flex-col min-h-screen w-full">
      <LandingPageHeader />
      
      <main className="flex flex-col items-center w-full flex-1 px-[112px] py-[88px]">
        <div className="max-w-[1216px] w-full">
          <h1 className="font-['General_Sans',sans-serif] font-bold text-[56px] text-[#545454] leading-[1.4] mb-[24px]">
            Features
          </h1>
          <p className="font-['General_Sans',sans-serif] font-normal text-[20px] text-[#909090] leading-[1.6] mb-[48px]">
            Explore all the powerful features that make NoteSpace the best note-taking app for students.
          </p>
          
          <div className="flex items-center justify-center py-[120px]">
            <div className="text-center">
              <p className="font-['General_Sans',sans-serif] font-medium text-[24px] text-[#909090] leading-[1.6] mb-[32px]">
                Features page coming soon
              </p>
              <Link to="/" className="bg-[#f97316] inline-flex gap-[8px] h-[48px] items-center justify-center px-[32px] py-[8px] rounded-[16px] hover:bg-[#e06814] transition-colors">
                <p className="font-['General_Sans',sans-serif] font-medium leading-[1.6] text-[#fefefe] text-[14px] whitespace-nowrap">
                  Back to Home
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
