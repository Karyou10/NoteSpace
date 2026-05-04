import ethLogo from "../../assets/eth 3.png";
import melbourneLogo from "../../assets/melbourne 2.png";
import nusLogo from "../../assets/nus 2.png";
import stanfordLogo from "../../assets/stanford 3.png";
import torontoLogo from "../../assets/toronto 2.png";
import uctLogo from "../../assets/uct 2.png";
import svgPaths from "../../imports/svg-81u4lsk3wh";

function TrustedBadge() {
  return (
    <div className="bg-[#fef1e8] content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[8px] relative rounded-[16px] shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="GraduationCap">
        <div className="absolute inset-[9.38%_0_3.12%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9995 20.9999">
            <path d={svgPaths.p2941e500} fill="var(--fill-0, #C75C12)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['General_Sans',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c75c12] text-[14px] whitespace-nowrap">
        <p className="leading-[1.6]">{`Trusted by 10,000+ students & educators`}</p>
      </div>
    </div>
  );
}

function SectionHeading() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['General_Sans',sans-serif] font-bold justify-center relative shrink-0 text-[#545454] text-[32px] w-full">
        <p className="leading-[1.5]">Used at top universities worldwide</p>
      </div>
      <div className="flex flex-col font-['General_Sans',sans-serif] font-medium justify-center relative shrink-0 text-[#909090] text-[20px] w-full">
        <p className="leading-[1.6]">Students and teachers from leading institutions rely on NoteSpace every day</p>
      </div>
    </div>
  );
}

function InfiniteLogoCarousel() {
  const universityLogos = [
    stanfordLogo,
    torontoLogo,
    ethLogo,
    nusLogo,
    melbourneLogo,
    uctLogo,
  ];

  return (
    <div className="relative w-[1216px] overflow-hidden">
      {/* Gradients for smooth fade at edges */}
      <div className="absolute left-0 top-0 bottom-0 w-[150px] z-10 bg-gradient-to-r from-[#fefefe] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-[150px] z-10 bg-gradient-to-l from-[#fefefe] to-transparent" />
      
      <div className="flex gap-[120px] items-center animate-[scroll_40s_linear_infinite] w-fit">
        {[...universityLogos, ...universityLogos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="University Logo"
            className="h-[48px] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
}

export default function UniversityLogos() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full max-w-[1216px]">
      <TrustedBadge />
      <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
        <SectionHeading />
        <InfiniteLogoCarousel />
      </div>
    </div>
  );
}