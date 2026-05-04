interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

function TestimonialCard({ quote, name, title }: TestimonialCardProps) {
  return (
    <div className="group relative h-[263px] w-full [perspective:1000px]">
      <div className="relative size-full transition-transform duration-300 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Face - Blank with light grey */}
        <div className="absolute inset-0 bg-[#f8f8f8] border-[#e8e8e8] border-[0.5px] border-solid transition-all duration-300 ease-in-out group-hover:rounded-[16px] [backface-visibility:hidden]" />
        
        {/* Back Face - Testimonials */}
        <div className="absolute inset-0 flex items-center justify-center p-[32px] [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="absolute bg-[#fdfdfd] border-[#f97316] border-[0.5px] border-solid inset-0 rounded-[16px] shadow-lg transition-all duration-300 ease-in-out" />
          <div className="relative flex flex-col gap-[72px] items-center justify-center size-full">
            <div className="flex items-center justify-center relative shrink-0 w-full">
              <div className="flex flex-col font-['General_Sans',sans-serif] font-normal justify-center leading-[0] not-italic relative text-[#545454] text-[16px] w-full text-center">
                <p className="leading-[1.6]">{quote}</p>
              </div>
            </div>
            <div className="flex items-center justify-center relative shrink-0 w-full">
              <div className="flex flex-col items-center leading-[0] not-italic relative w-full">
                <div className="flex flex-col font-['General_Sans',sans-serif] font-normal justify-center relative shrink-0 text-[#545454] text-[16px] w-full text-center">
                  <p className="leading-[1.6]">{name}</p>
                </div>
                <div className="flex flex-col font-['General_Sans',sans-serif] font-medium justify-center relative shrink-0 text-[#909090] text-[14px] w-full text-center">
                  <p className="leading-[1.6]">{title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "NoteSpace replaced our messy WhatsApp study groups. We actually have organized notes now!",
      name: "Amara K.",
      title: "Computer Science, Stanford"
    },
    {
      quote: "I went from drowning in Google Docs to having all my lecture notes synced and searchable. Game changer.",
      name: "Marcus L.",
      title: "Engineering, MIT"
    },
    {
      quote: "Finally, a note app that doesn't feel like it was built by people who never went to college.",
      name: "Sofia R.",
      title: "Biology, University of Toronto"
    },
    {
      quote: "My study group lives in NoteSpace now. We can all edit notes during lectures and it just works.",
      name: "James W.",
      title: "Business, Oxford"
    },
    {
      quote: "The real-time collaboration is insane. It's like Google Docs but actually designed for students.",
      name: "Priya S.",
      title: "Medicine, NUS"
    },
    {
      quote: "I used to lose my notes between devices. Now everything syncs instantly. My GPA thanks you.",
      name: "Alex T.",
      title: "Physics, ETH Zurich"
    }
  ];

  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-full max-w-[1216px] mx-auto px-4 md:px-[112px]">
      <div className="grid grid-cols-3 gap-0 w-full">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            name={testimonial.name}
            title={testimonial.title}
          />
        ))}
      </div>
    </div>
  );
}