import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#572808] content-stretch flex flex-col items-start relative shrink-0 w-full">
      {/* CTA Section */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[40px] items-center justify-center px-[112px] py-[24px] relative w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
              <div className="flex flex-col font-['General_Sans',sans-serif] font-bold justify-center relative shrink-0 text-[#fefefe] text-[32px] w-full">
                <p className="leading-[1.5]">Ready to start Collaborating?</p>
              </div>
              <div className="flex flex-col font-['General_Sans',sans-serif] font-medium justify-center relative shrink-0 text-[#fafafa] text-[20px] w-full">
                <p className="leading-[1.6]">Join thousands of students using NoteSpace for better teamwork</p>
              </div>
            </div>
            <Link 
              to="/signup" 
              className="bg-[#f97316] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[8px] relative rounded-[16px] shrink-0 w-[144px] hover:bg-[#e06814] transition-colors"
            >
              <p className="font-['General_Sans',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#fefefe] text-[14px] whitespace-nowrap">Sign up</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex font-['General_Sans',sans-serif] font-medium items-start justify-between leading-[1.6] not-italic px-[112px] py-[24px] relative w-full">
          {/* Product & Legal */}
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-[316px]">
            {/* Product */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[108px]">
              <p className="relative shrink-0 text-[#fafafa] text-[10px] w-full">Product</p>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#fefefe] text-[16px] w-full">
                <Link to="/features" className="relative shrink-0 w-full hover:text-[#f97316] transition-colors">Features</Link>
                <a href="#" className="relative shrink-0 w-full hover:text-[#f97316] transition-colors">Pricing</a>
                <Link to="/help" className="relative shrink-0 w-full hover:text-[#f97316] transition-colors">Support</Link>
                <a href="#" className="relative shrink-0 w-full hover:text-[#f97316] transition-colors">Security</a>
              </div>
            </div>

            {/* Legal */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[108px]">
              <p className="relative shrink-0 text-[#fafafa] text-[10px] w-full">Legal</p>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#fefefe] text-[16px] w-full">
                <a href="#" className="relative shrink-0 w-full hover:text-[#f97316] transition-colors">Terms of use</a>
                <a href="#" className="relative shrink-0 w-full hover:text-[#f97316] transition-colors">Privacy policy</a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 text-right w-[77px]">
            <p className="relative shrink-0 text-[#fafafa] text-[10px] w-full">Social</p>
            <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 text-[#fefefe] text-[16px] w-full">
              <a href="#" className="relative shrink-0 w-full hover:text-[#f97316] transition-colors">Instagram</a>
              <a href="#" className="relative shrink-0 w-full hover:text-[#f97316] transition-colors">Twitter</a>
              <a href="#" className="relative shrink-0 w-full hover:text-[#f97316] transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
