import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().length > 0) {
      // Store email so ResetLinkSent can display it
      localStorage.setItem("resetEmail", email);
      navigate("/reset-link-sent");
    }
  };

  return (
    <div className="bg-white relative min-h-screen overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] rounded-full bg-[#f9731622] blur-[80px]" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] rounded-full bg-[#f9731614] blur-[80px]" />

      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-[40px] w-full max-w-[485px] px-[24px]">
          {/* Header */}
          <div className="flex flex-col items-center gap-[8px] w-full text-center">
            <h1 className="font-['General_Sans',sans-serif] font-semibold leading-[1.5] text-[#545454] text-[36px]">
              Reset Password
            </h1>
            <p className="font-['General_Sans',sans-serif] font-medium leading-[1.6] text-[#545454] text-[16px]">
              We'll email you a link to reset your password
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-[32px] items-center w-full">
            {/* Email Field */}
            <div className="flex flex-col gap-[8px] items-start w-full">
              <label className="font-['General_Sans',sans-serif] font-semibold leading-[1.6] text-[#5b5c60] text-[14px]">
                Email Address
              </label>
              <div className="group bg-[#fafafb] h-[48px] relative rounded-[8px] w-full">
                <div
                  aria-hidden="true"
                  className="absolute border-[#d1d5db] group-focus-within:border-[#f97316] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] transition-colors duration-200"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Olaoluwa@example.com"
                  className="bg-transparent font-['General_Sans',sans-serif] font-semibold leading-[1.6] text-[#6c6c6c] text-[14px] px-[12px] w-full h-full rounded-[8px] outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={email.trim().length === 0}
              className={`h-[48px] rounded-[16px] w-full transition-all duration-200 ${
                email.trim().length > 0
                  ? "bg-[#f97316] hover:bg-[#e06814] cursor-pointer"
                  : "bg-[#d1d5db] cursor-not-allowed"
              }`}
            >
              <p
                className={`font-['General_Sans',sans-serif] font-medium leading-[1.6] text-[18px] ${
                  email.trim().length > 0 ? "text-[#fefefe]" : "text-[#9ca3af]"
                }`}
              >
                Submit
              </p>
            </button>

            {/* Back to Login */}
            <Link
              to="/login"
              className="font-['General_Sans',sans-serif] font-medium leading-[1.6] text-[#b4b4b4] text-[14px] hover:text-[#f97316] transition-colors"
            >
              Back to Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
