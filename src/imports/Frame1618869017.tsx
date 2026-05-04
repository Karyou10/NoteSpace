function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
      <div className="flex flex-col font-['General_Sans',sans-serif] font-bold justify-center relative shrink-0 text-[#fefefe] text-[32px] w-full">
        <p className="leading-[1.5]">Ready to start Collaborating?</p>
      </div>
      <div className="flex flex-col font-['General_Sans',sans-serif] font-medium justify-center relative shrink-0 text-[#fafafa] text-[20px] w-full">
        <p className="leading-[1.6]">Join thousands of students using NoteSpace for better teamwork</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center px-[112px] py-[24px] relative w-full">
          <Frame />
          <div className="bg-[#f97316] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[8px] relative rounded-[16px] shrink-0 w-[144px]" data-name="Buttons">
            <p className="font-['General_Sans',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#fefefe] text-[14px] whitespace-nowrap">Sign up</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#fefefe] text-[16px] w-full">
      <p className="relative shrink-0 w-full">Features</p>
      <p className="relative shrink-0 w-full">Pricing</p>
      <p className="relative shrink-0 w-full">Support</p>
      <p className="relative shrink-0 w-full">Security</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[108px]">
      <p className="relative shrink-0 text-[#fafafa] text-[10px] w-full">Product</p>
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#fefefe] text-[16px] w-full">
      <p className="relative shrink-0 w-full">{`Terms of use `}</p>
      <p className="relative shrink-0 w-full">Privacy policy</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[108px]">
      <p className="relative shrink-0 text-[#fafafa] text-[10px] w-full">Legal</p>
      <Frame3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[316px]">
      <Frame5 />
      <Frame4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 text-[#fefefe] text-[16px] w-full">
      <p className="relative shrink-0 w-full">Instagram</p>
      <p className="relative shrink-0 w-full">Twitter</p>
      <p className="relative shrink-0 w-full">Facebook</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 text-right w-[77px]">
      <p className="relative shrink-0 text-[#fafafa] text-[10px] w-full">Social</p>
      <Frame10 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex font-['General_Sans',sans-serif] font-medium items-start justify-between leading-[1.6] not-italic px-[112px] py-[24px] relative w-full">
        <Frame6 />
        <Frame9 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#572808] content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame7 />
    </div>
  );
}

export default function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Frame8 />
    </div>
  );
}