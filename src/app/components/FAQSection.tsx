import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#e5e5e5] pb-[24px] pt-[24px] w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left hover:opacity-70 transition-opacity"
      >
        <div className="flex flex-col font-['General_Sans',sans-serif] font-medium justify-center leading-[0] not-italic relative text-[#545454] text-[18px]">
          <p className="leading-[1.6]">{question}</p>
        </div>
        <div className={`relative shrink-0 size-[24px] transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="size-full text-[#545454]" />
        </div>
      </button>
      {isOpen && (
        <div className="mt-[16px] flex flex-col font-['General_Sans',sans-serif] font-normal leading-[0] not-italic relative text-[#909090] text-[16px]">
          <p className="leading-[1.6]">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full max-w-full max-w-[800px] mx-auto px-4 md:px-[112px]">
      <div className="flex flex-col font-['General_Sans',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#545454] text-[40px] text-center w-full">
        <p className="leading-[1.5]">Frequently Asked Questions</p>
      </div>
      
      <div className="flex flex-col w-full">
        <FAQItem
          question="Is NoteSpace free for students?"
          answer="Yes! NoteSpace is completely free for all students. Simply sign up with your .edu email address to get started. No credit card required, grades not sold to third-parties."
        />
        <FAQItem
          question="How does real-time collaboration work?"
          answer="When you share a note with classmates, everyone can edit simultaneously. You'll see their cursors and changes appear instantly, just like Google Docs but specifically designed for note-taking."
        />
        <FAQItem
          question="How are my notes kept secure?"
          answer="All notes are encrypted in transit and at rest. We use industry-standard security practices, and you can control exactly who has access to each note. Your data is yours alone."
        />
        <FAQItem
          question="What makes NoteSpace different from other note-taking tools on Reddit?"
          answer="NoteSpace is built specifically for students. It's faster, simpler, and designed around how students actually study—with real-time collaboration, instant sync, and an interface that gets out of your way."
        />
      </div>
    </div>
  );
}