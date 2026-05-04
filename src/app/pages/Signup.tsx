import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import svgPaths from "../../imports/svg-r1xaop67hy";
import component23 from "../../assets/Component 23.png";
import component24 from "../../assets/Component 24.png";
import component25 from "../../assets/Component 25.png";

interface PasswordRequirement {
  label: string;
  test: (password: string) => boolean;
}

const passwordRequirements: PasswordRequirement[] = [
  { label: "8 - 16 characters", test: (pwd) => pwd.length >= 8 && pwd.length <= 16 },
  { label: "Uppercase letters", test: (pwd) => /[A-Z]/.test(pwd) },
  { label: "Lowercase letters", test: (pwd) => /[a-z]/.test(pwd) },
  { label: "Special characters", test: (pwd) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd) },
  { label: "Numbers", test: (pwd) => /[0-9]/.test(pwd) },
];

const carouselContent = [
  {
    title: "Capture Your Ideas Instantly",
    description: "Create and edit notes on the go, without worrying about saving. Our autosave feature keeps your work safe and up to date, even offline.",
    image: component23,
  },
  {
    title: "Collaborate in Real-Time",
    description: "Work together with your study group seamlessly. Share notes, edit simultaneously, and never miss an update with instant sync.",
    image: component24,
  },
  {
    title: "Stay Organized Effortlessly",
    description: "Keep all your notes, assignments, and study materials in one place. Search, tag, and find what you need in seconds.",
    image: component25,
  },
];

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Check if form is valid
  useEffect(() => {
    const nameFilled = name.trim().length > 0;
    const emailFilled = email.trim().length > 0;
    const passwordFilled = password.trim().length > 0;
    const confirmPasswordFilled = confirmPassword.trim().length > 0;

    setIsFormValid(nameFilled && emailFilled && passwordFilled && confirmPasswordFilled);
  }, [name, email, password, confirmPassword]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid && !isLoading) {
      setIsLoading(true);

      // Simulate API call with 2 second delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Store user data in localStorage
      localStorage.setItem('userName', name);
      localStorage.setItem('userEmail', email);
      localStorage.setItem('isNewUser', 'true');

      // Navigate to notes page
      navigate("/notes");
    }
  };

  return (
    <div className="bg-white relative size-full min-h-screen overflow-hidden">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[16px] p-[48px] flex flex-col items-center gap-[24px]">
            <Loader2 className="size-[48px] text-[#f97316] animate-spin" />
            <p className="font-['General_Sans',sans-serif] font-medium text-[18px] text-[#545454]">
              Creating your account...
            </p>
          </div>
        </div>
      )}

      <div className="absolute inset-0 flex items-center min-h-screen">
        {/* Left Side - Form */}
        <div className="w-1/2 flex flex-col items-center justify-center relative py-[88px]">
          <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full max-w-[485px]">
            <form onSubmit={handleSubmit} className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full">
              {/* Header */}
              <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full">
                <p className="font-['General_Sans',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#545454] text-[36px] w-full">
                  Get Started
                </p>
                <div className="content-stretch flex font-['General_Sans',sans-serif] font-medium gap-[20px] items-start leading-[1.6] relative shrink-0 w-full whitespace-nowrap">
                  <p className="relative shrink-0 text-[#545454] text-[20px]">Create an account</p>
                  <p className="text-[#909090] text-[10px] mt-[12px]">(All fields are required)</p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                {/* Name Field */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <label className="font-['General_Sans',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#5b5c60] text-[14px] w-full">
                    Name
                  </label>
                  <div className="group bg-[#fafafb] h-[48px] relative rounded-[8px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#d1d5db] group-focus-within:border-[#f97316] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] transition-colors duration-200" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="bg-transparent font-['General_Sans',sans-serif] font-semibold leading-[1.6] text-[#6c6c6c] text-[14px] px-[12px] w-full h-full rounded-[8px] outline-none"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <label className="font-['General_Sans',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#5b5c60] text-[14px] w-full">
                    Email Address
                  </label>
                  <div className="group bg-[#fafafb] h-[48px] relative rounded-[8px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#d1d5db] group-focus-within:border-[#f97316] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] transition-colors duration-200" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@email.com"
                      className="bg-transparent font-['General_Sans',sans-serif] font-semibold leading-[1.6] text-[#6c6c6c] text-[14px] px-[12px] w-full h-full rounded-[8px] outline-none"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <label className="font-['General_Sans',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#5b5c60] text-[14px] w-full">
                    Password
                  </label>
                  <div className="group bg-[#fafafb] h-[48px] relative rounded-[8px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#d1d5db] group-focus-within:border-[#f97316] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] transition-colors duration-200" />
                    <div className="flex flex-row items-center size-full">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
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
                </div>

                {/* Password Requirements */}
                <div className="relative shrink-0 w-full">
                  <div className="grid grid-cols-2 gap-x-[12px] gap-y-[12px] w-full">
                    {passwordRequirements.map((requirement, index) => {
                      const isMet = password.length > 0 && requirement.test(password);
                      const isNotMet = password.length > 0 && !requirement.test(password);

                      return (
                        <div key={index} className="flex items-center gap-[8px]">
                          <div className="relative shrink-0 size-[7px]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
                              <path
                                d={svgPaths.p1e610900}
                                fill={isMet ? "#10B981" : isNotMet ? "#EF4444" : "#D1D5DB"}
                                stroke={isMet ? "#10B981" : isNotMet ? "#EF4444" : "#D1D5DB"}
                                strokeWidth="0.5"
                              />
                            </svg>
                          </div>
                          <p className={`font-['General_Sans',sans-serif] font-medium leading-[1.6] text-[10px] transition-colors duration-200 ${isMet ? "text-[#10B981]" : isNotMet ? "text-[#EF4444]" : "text-[#6c6c6c]"
                            }`}>
                            {requirement.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <label className="font-['General_Sans',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#5b5c60] text-[14px] w-full">
                    Confirm Password
                  </label>
                  <div className="group bg-[#fafafb] h-[48px] relative rounded-[8px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#d1d5db] group-focus-within:border-[#f97316] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] transition-colors duration-200" />
                    <div className="flex flex-row items-center size-full">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm password"
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
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid}
                className={`h-[48px] relative rounded-[16px] shrink-0 w-full transition-all duration-200 ${isFormValid
                    ? "bg-[#f97316] hover:bg-[#e06814] cursor-pointer"
                    : "bg-[#d1d5db] cursor-not-allowed"
                  }`}
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
                    <p className={`font-['General_Sans',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[18px] whitespace-nowrap ${isFormValid ? "text-[#fefefe]" : "text-[#9ca3af]"
                      }`}>
                      Submit
                    </p>
                  </div>
                </div>
              </button>
            </form>

            {/* Login Link */}
            <p className="font-['General_Sans',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[14px] text-center w-full">
              <span className="text-[#b4b4b4]">Already have an Account?</span>
              <span>{`   `}</span>
              <Link to="/login" className="text-[#c75c12] hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side - Carousel */}
        <div className="w-1/2 h-screen relative rounded-bl-[24px] rounded-tl-[24px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-bl-[24px] rounded-tl-[24px]">
            <img
              alt=""
              className="absolute max-w-none object-cover rounded-bl-[24px] rounded-tl-[24px] size-full transition-opacity duration-700"
              src={carouselContent[currentSlide].image}
            />
            <div className="absolute bg-gradient-to-b from-1/2 from-[rgba(0,0,0,0)] inset-0 rounded-bl-[24px] rounded-tl-[24px] to-[rgba(84,84,84,0.75)]" />
          </div>
          <div className="flex flex-col justify-end size-full">
            <div className="content-stretch flex flex-col items-start justify-end px-[24px] py-[64px] relative size-full">
              <div className="content-stretch flex flex-col gap-[72px] h-[190px] items-center justify-center relative shrink-0 w-full">
                {/* Content */}
                <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.6] not-italic relative shrink-0 text-white w-full transition-all duration-500">
                  <p className="font-['General_Sans',sans-serif] font-semibold relative shrink-0 text-[20px] w-full">
                    {carouselContent[currentSlide].title}
                  </p>
                  <p className="font-['General_Sans',sans-serif] font-medium relative shrink-0 text-[14px] w-full">
                    {carouselContent[currentSlide].description}
                  </p>
                </div>

                {/* Indicators */}
                <div className="content-stretch flex gap-[10px] items-start relative shadow-[0px_8px_21.8px_0px_rgba(249,115,22,0.1)] shrink-0">
                  {carouselContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-[8px] rounded-[10px] shrink-0 w-[58px] transition-colors duration-300 ${index === currentSlide ? "bg-[#f97316]" : "bg-[#fefefe]"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}