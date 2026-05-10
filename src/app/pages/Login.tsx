import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import component23 from "../../assets/Component 23.png";
import component24 from "../../assets/Component 24.png";
import component25 from "../../assets/Component 25.png";

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

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
    const emailFilled = email.trim().length > 0;
    const passwordFilled = password.trim().length > 0;
    
    setIsFormValid(emailFilled && passwordFilled);
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid && !isLoading) {
      setIsLoading(true);
      
      // Simulate API call with 2 second delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Store user data in localStorage
      localStorage.setItem('userEmail', email);
      localStorage.setItem('isNewUser', 'false');
      
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
              Signing you in...
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
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['General_Sans',sans-serif] font-semibold leading-[1.5] not-italic relative shrink-0 text-[#545454] text-[36px] w-full">
                Welcome Back!
              </p>
              <div className="content-stretch flex items-start relative shrink-0 w-full">
                <p className="flex-[1_0_0] font-['General_Sans',sans-serif] font-medium leading-[1.6] min-h-px min-w-px not-italic relative text-[#545454] text-[20px]">
                  Sign in to effortlessly create, organize, and share your notes anytime, anywhere.
                </p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
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
                      placeholder="xyz@example.com"
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
                </div>
              </div>

              {/* Forgot Password Link */}
              <Link
                to="/forgot-password"
                className="font-['General_Sans',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#6c6c6c] text-[14px] text-right w-full hover:text-[#f97316] transition-colors block"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid || isLoading}
              className={`h-[48px] relative rounded-[16px] shrink-0 w-full transition-all duration-200 ${
                isFormValid && !isLoading
                  ? "bg-[#f97316] hover:bg-[#e06814] cursor-pointer"
                  : "bg-[#d1d5db] cursor-not-allowed"
              }`}
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
                  <p className={`font-['General_Sans',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[18px] whitespace-nowrap ${
                    isFormValid && !isLoading ? "text-[#fefefe]" : "text-[#9ca3af]"
                  }`}>
                    Submit
                  </p>
                </div>
              </div>
            </button>
          </form>

          {/* Signup Link */}
          <p className="font-['General_Sans',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[14px] text-center w-full">
            <span className="text-[#b4b4b4]">Don't have an Account?</span>
            <span>{`   `}</span>
            <Link to="/signup" className="text-[#c75c12] hover:underline">
              Sign up
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
                      className={`h-[8px] rounded-[10px] shrink-0 w-[58px] transition-colors duration-300 ${
                        index === currentSlide ? "bg-[#f97316]" : "bg-[#fefefe]"
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