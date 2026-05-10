import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff } from "lucide-react";

function getPasswordStrength(password: string) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  if (score <= 1) return { label: "Weak", color: "#ef4444", bars: 1 };
  if (score === 2) return { label: "Fair", color: "#f59e0b", bars: 2 };
  if (score === 3) return { label: "Strong", color: "#22c55e", bars: 3 };
  return { label: "Very Strong", color: "#0d9488", bars: 4 };
}

export default function CreateNewPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const strength = useMemo(() => getPasswordStrength(password), [password]);

  const isFormValid =
    password.length >= 8 &&
    confirmPassword.length > 0 &&
    password === confirmPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/login");
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
          <h1 className="font-['General_Sans',sans-serif] font-semibold leading-[1.5] text-[#545454] text-[36px] text-center">
            Create a New password
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-[32px] items-center w-full">
            {/* New Password Field */}
            <div className="flex flex-col gap-[8px] items-start w-full">
              <label className="font-['General_Sans',sans-serif] font-semibold leading-[1.6] text-[#5b5c60] text-[14px]">
                Enter New Password
              </label>
              <div className="group bg-[#fafafb] h-[48px] relative rounded-[8px] w-full">
                <div
                  aria-hidden="true"
                  className="absolute border-[#d1d5db] group-focus-within:border-[#f97316] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] transition-colors duration-200"
                />
                <div className="flex flex-row items-center size-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                    className="bg-transparent font-['General_Sans',sans-serif] font-semibold leading-[1.6] text-[#6c6c6c] text-[14px] px-[12px] flex-1 h-full rounded-[8px] outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="px-[12px] h-full flex items-center justify-center"
                  >
                    {showPassword ? (
                      <Eye className="size-[20px] text-[#6c6c6c]" />
                    ) : (
                      <EyeOff className="size-[20px] text-[#6c6c6c]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Strength Indicator */}
              {password.length > 0 && (
                <div className="flex flex-col gap-[4px] w-full mt-[4px]">
                  <div className="flex gap-[6px] w-full">
                    {[1, 2, 3, 4].map((bar) => (
                      <div
                        key={bar}
                        className="h-[4px] rounded-full flex-1 transition-colors duration-300"
                        style={{
                          backgroundColor:
                            bar <= strength.bars ? strength.color : "#e5e7eb",
                        }}
                      />
                    ))}
                  </div>
                  <p
                    className="font-['General_Sans',sans-serif] font-medium text-[12px] italic text-right"
                    style={{ color: strength.color }}
                  >
                    {strength.label}
                  </p>
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col gap-[8px] items-start w-full">
              <label className="font-['General_Sans',sans-serif] font-semibold leading-[1.6] text-[#5b5c60] text-[14px]">
                Confirm New Password
              </label>
              <div className="group bg-[#fafafb] h-[48px] relative rounded-[8px] w-full">
                <div
                  aria-hidden="true"
                  className="absolute border-[#d1d5db] group-focus-within:border-[#f97316] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] transition-colors duration-200"
                />
                <div className="flex flex-row items-center size-full">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="********"
                    className="bg-transparent font-['General_Sans',sans-serif] font-semibold leading-[1.6] text-[#6c6c6c] text-[14px] px-[12px] flex-1 h-full rounded-[8px] outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="px-[12px] h-full flex items-center justify-center"
                  >
                    {showConfirmPassword ? (
                      <Eye className="size-[20px] text-[#6c6c6c]" />
                    ) : (
                      <EyeOff className="size-[20px] text-[#6c6c6c]" />
                    )}
                  </button>
                </div>
              </div>
              {confirmPassword.length > 0 && password !== confirmPassword && (
                <p className="font-['General_Sans',sans-serif] font-medium text-[12px] text-[#ef4444]">
                  Passwords do not match
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`h-[48px] rounded-[16px] w-full transition-all duration-200 ${
                isFormValid
                  ? "bg-[#f97316] hover:bg-[#e06814] cursor-pointer"
                  : "bg-[#d1d5db] cursor-not-allowed"
              }`}
            >
              <p
                className={`font-['General_Sans',sans-serif] font-medium leading-[1.6] text-[18px] ${
                  isFormValid ? "text-[#fefefe]" : "text-[#9ca3af]"
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
