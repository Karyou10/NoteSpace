import svgPaths from "../../imports/svg-81u4lsk3wh";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-[16px] items-start relative w-full">
      <div className="bg-[#fef1e8] content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[16px] py-[8px] relative rounded-[16px] shrink-0 w-[48px]">
        {icon}
      </div>
      <div className="flex flex-col gap-[8px] items-start relative w-full">
        <div className="flex flex-col font-['General_Sans',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#545454] text-[20px] w-full">
          <p className="leading-[1.6]">{title}</p>
        </div>
        <div className="flex flex-col font-['General_Sans',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#909090] text-[16px] w-full">
          <p className="leading-[1.6]">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full max-w-[1216px] mx-auto px-[112px]">
      <div className="flex flex-col gap-[16px] items-center leading-[0] not-italic relative shrink-0 text-center w-full">
        <div className="flex flex-col font-['General_Sans',sans-serif] font-bold justify-center relative shrink-0 text-[#545454] text-[40px] w-full">
          <p className="leading-[1.5]">Everything you need to collaborate</p>
        </div>
        <div className="flex flex-col font-['General_Sans',sans-serif] font-normal justify-center relative shrink-0 text-[#909090] text-[20px] w-full">
          <p className="leading-[1.6]">Simple tools for powerful for teamwork</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-[48px] w-full">
        <FeatureCard
          title="Lightning Fast"
          description="Capture notes instantly with no lag. Real-time sync means your notes are ready before you finish your thought."
          icon={
            <div className="relative shrink-0 size-[24px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 29">
                <path d={svgPaths.p761e600} fill="var(--fill-0, #C75C12)" />
              </svg>
            </div>
          }
        />
        
        <FeatureCard
          title="Real-time Sync"
          description="Your updates instantly for everyone with comments that flow like a real conversation wherever you are."
          icon={
            <div className="relative shrink-0 size-[24px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 26">
                <path d={svgPaths.p33a0d900} fill="var(--fill-0, #C75C12)" />
              </svg>
            </div>
          }
        />
        
        <FeatureCard
          title="Secure & Private"
          description="Your notes are encrypted and secure, accessible only to you and those you choose to share with."
          icon={
            <div className="relative shrink-0 size-[24px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 27">
                <path d={svgPaths.pd016600} fill="var(--fill-0, #C75C12)" />
              </svg>
            </div>
          }
        />
        
        <FeatureCard
          title="Simple Organization"
          description="Keep all your notes organized with our intuitive tagging and folder system that adapts to your workflow."
          icon={
            <div className="relative shrink-0 size-[24px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 30">
                <path d={svgPaths.p407ad00} fill="var(--fill-0, #C75C12)" />
              </svg>
            </div>
          }
        />
      </div>
    </div>
  );
}
