import { Link } from "react-router";
import imgImage285 from "../../assets/image 285.png";

function HeroText() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end leading-[0] not-italic relative shrink-0 text-[#545454] text-center w-full">
      <div className="flex flex-col font-['General_Sans',sans-serif] font-bold justify-center relative shrink-0 text-[56px] w-full">
        <p>
          <span className="leading-[1.4]">{`Unlock Your Study Power with `}</span>
          <span className="leading-[1.4] text-[#f97316]">NoteSpace</span>
        </p>
      </div>
      <div className="flex flex-col font-['General_Sans',sans-serif] font-normal justify-center relative shrink-0 text-[20px] w-full">
        <p className="leading-[1.6]">Join thousands of students who capture, collaborate, and conquer their classes with the simplest, fastest note-taking app built just for you</p>
      </div>
    </div>
  );
}

function HeroCTA() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
        <Link to="/signup" className="bg-[#f97316] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[8px] relative rounded-[16px] shrink-0 w-[144px] hover:bg-[#e06814] transition-colors">
          <p className="font-['General_Sans',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#fefefe] text-[14px] whitespace-nowrap">Sign up</p>
        </Link>
        <Link to="/login" className="content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[8px] relative rounded-[16px] shrink-0 w-[144px] hover:bg-gray-50 transition-colors">
          <div aria-hidden="true" className="absolute border border-[#f97316] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <p className="font-['General_Sans',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#f97316] text-[14px] whitespace-nowrap">Log in</p>
        </Link>
      </div>
      <div className="flex flex-col font-['General_Sans',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#909090] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[1.6]">{`No credit card needed. `}</p>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[88px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
        <HeroText />
        <HeroCTA />
      </div>
      <div className="h-[438px] relative rounded-[24px] shrink-0 w-full max-w-[803px]">
        <img alt="Students collaborating" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImage285} />
      </div>
    </div>
  );
}
