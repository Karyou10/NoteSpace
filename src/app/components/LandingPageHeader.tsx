import { Link } from "react-router";
import svgPaths from "../../imports/svg-81u4lsk3wh";

function Logo() {
  return (
    <div className="col-1 h-[19.615px] ml-0 mt-0 relative row-1 w-[51px]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 19.6154">
        <g clipPath="url(#clip0_2_904)" id="Logo">
          <path d={svgPaths.p23472a80} fill="var(--fill-0, #E06814)" id="Vector" />
          <path d={svgPaths.p2f3e9c00} fill="var(--fill-0, #95450D)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2_904">
            <rect fill="white" height="19.6154" width="51" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <Link to="/" className="content-stretch flex gap-[12px] items-center justify-center leading-[0] relative shrink-0 hover:opacity-80 transition-opacity">
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
        <Logo />
      </div>
      <div className="flex flex-col font-['General_Sans',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#95450d] text-[0px] whitespace-nowrap">
        <p className="text-[18px]">
          <span className="leading-[1.6]">Note</span>
          <span className="leading-[1.6] text-[#f97316]">Space</span>
        </p>
      </div>
    </Link>
  );
}

function NavLinks() {
  return (
    <div className="content-stretch flex gap-[26px] items-center relative shrink-0">
      <Link to="/features" className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0 hover:bg-gray-50 rounded-lg transition-colors">
        <div className="flex flex-col font-['General_Sans',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#545454] text-[14px] whitespace-nowrap">
          <p className="leading-[1.6]">Features</p>
        </div>
      </Link>
      <Link to="/help" className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0 hover:bg-gray-50 rounded-lg transition-colors">
        <div className="flex flex-col font-['General_Sans',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#545454] text-[14px] whitespace-nowrap">
          <p className="leading-[1.6]">Help Centre</p>
        </div>
      </Link>
      <Link to="/about" className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0 hover:bg-gray-50 rounded-lg transition-colors">
        <div className="flex flex-col font-['General_Sans',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#545454] text-[14px] whitespace-nowrap">
          <p className="leading-[1.6]">About us</p>
        </div>
      </Link>
    </div>
  );
}

function AuthButtons() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Link to="/login" className="content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[8px] relative rounded-[16px] shrink-0 hover:bg-gray-50 transition-colors">
        <p className="font-['General_Sans',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#f97316] text-[14px] whitespace-nowrap">Log in</p>
      </Link>
      <Link to="/signup" className="bg-[#f97316] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[8px] relative rounded-[16px] shrink-0 hover:bg-[#e06814] transition-colors">
        <p className="font-['General_Sans',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#fefefe] text-[14px] whitespace-nowrap">Sign up</p>
      </Link>
    </div>
  );
}

export default function LandingPageHeader() {
  return (
    <header className="bg-[#fefefe] sticky top-0 z-50 shadow-[0px_8px_21.8px_0px_rgba(249,115,22,0.1)] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-4 md:px-[112px] py-[8px] relative w-full">
          <Frame />
          <NavLinks />
          <AuthButtons />
        </div>
      </div>
    </header>
  );
}
