import React from "react";

const imgIllustration = "https://i.ibb.co/LzdYpQD/desktop-only-illustration.png"; // Fallback placeholder if local not found yet

export default function MobileNotSupported() {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center p-[24px] text-center">
      <div className="flex flex-col items-center gap-[40px] max-w-[400px]">
        {/* Illustration */}
        <div className="relative w-full aspect-square max-w-[320px]">
          <img 
            src="/mobile-not-supported.png" 
            alt="Designed for Desktop"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-[16px]">
          <h1 className="font-['General_Sans',sans-serif] font-bold text-[32px] text-[#545454] leading-[1.2]">
            Designed for desktop.
          </h1>
          <p className="font-['General_Sans',sans-serif] font-medium text-[16px] text-[#909090] leading-[1.6]">
            For the best experience, view this on a desktop, mobile coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
