import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft } from "lucide-react";

export default function ResetLinkSent() {
  const [email] = useState(() => localStorage.getItem("resetEmail") || "your email");
  const [resent, setResent] = useState(false);

  const handleResend = () => {
    setResent(true);
    setTimeout(() => setResent(false), 3000);
  };

  return (
    <div className="bg-white relative min-h-screen overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] rounded-full bg-[#f9731622] blur-[80px]" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] rounded-full bg-[#f9731614] blur-[80px]" />

      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-[40px] w-full max-w-[485px] px-[24px]">
          {/* Header */}
          <div className="flex flex-col items-center gap-[12px] w-full text-center">
            <h1 className="font-['General_Sans',sans-serif] font-semibold leading-[1.5] text-[#545454] text-[36px]">
              Reset link sent!
            </h1>
            <p className="font-['General_Sans',sans-serif] font-medium leading-[1.6] text-[#545454] text-[16px] max-w-[380px]">
              We've sent a password reset link to <strong>{email}</strong>. Click the link to create a new password.
            </p>
          </div>

          {/* Simulated email link (for demo purposes) */}
          <div className="w-full bg-[#fafafb] rounded-[12px] border border-[#e5e7eb] p-[20px] flex flex-col gap-[12px]">
            <p className="font-['General_Sans',sans-serif] font-semibold text-[13px] text-[#9ca3af] uppercase tracking-wide">
              📧 Simulated Email Preview
            </p>
            <p className="font-['General_Sans',sans-serif] font-medium text-[14px] text-[#545454] leading-[1.6]">
              Hi there, click the link below to create a new password for your NoteSpace account:
            </p>
            <Link
              to="/create-new-password"
              className="font-['General_Sans',sans-serif] font-semibold text-[14px] text-[#f97316] hover:underline break-all"
            >
              https://notespace.app/create-new-password
            </Link>
          </div>

          {/* Back to Login Button */}
          <Link
            to="/login"
            className="flex items-center justify-center gap-[8px] h-[48px] rounded-[16px] w-full bg-[#f97316] hover:bg-[#e06814] transition-all duration-200"
          >
            <ChevronLeft className="size-[20px] text-white" />
            <p className="font-['General_Sans',sans-serif] font-medium leading-[1.6] text-[#fefefe] text-[18px]">
              Back to login
            </p>
          </Link>

          {/* Resend Link */}
          <p className="font-['General_Sans',sans-serif] font-medium leading-[1.6] text-[14px] text-center">
            <span className="text-[#b4b4b4]">Didn't get it? Check your spam or tap </span>
            <button
              onClick={handleResend}
              className="text-[#f97316] hover:underline cursor-pointer font-medium"
            >
              {resent ? "Link resent! ✓" : "Resend link."}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
