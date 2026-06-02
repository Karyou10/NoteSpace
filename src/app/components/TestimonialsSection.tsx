interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

function TestimonialCard({ quote, name, title, avatar }: TestimonialCardProps) {
  return (
    <div className="flex flex-col items-center text-center bg-white border border-[#e8e8e8] rounded-[24px] p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-3 hover:rotate-[-2.5deg] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-[#f97316]/30">
      <img
        src={avatar}
        alt={name}
        className="w-[72px] h-[72px] rounded-full object-cover border border-[#e8e8e8] shadow-sm mb-4"
      />
      <h3 className="font-['General_Sans',sans-serif] font-semibold text-[#1a1a1a] text-lg leading-tight mb-1">
        {name}
      </h3>
      <p className="font-['General_Sans',sans-serif] font-medium text-[#909090] text-sm mb-5">
        {title}
      </p>
      <p className="font-['General_Sans',sans-serif] font-normal text-[#545454] text-[15px] leading-[1.6]">
        "{quote}"
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "NoteSpace replaced our messy WhatsApp study groups. We actually have organized notes now!",
      name: "Amara K.",
      title: "Computer Science, Stanford",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "I went from drowning in Google Docs to having all my lecture notes synced and searchable. Game changer.",
      name: "Marcus L.",
      title: "Engineering, MIT",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "Finally, a note app that doesn't feel like it was built by people who never went to college.",
      name: "Sofia R.",
      title: "Biology, University of Toronto",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "My study group lives in NoteSpace now. We can all edit notes during lectures and it just works.",
      name: "James W.",
      title: "Business, Oxford",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "The real-time collaboration is insane. It's like Google Docs but actually designed for students.",
      name: "Priya S.",
      title: "Medicine, NUS",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "I used to lose my notes between devices. Now everything syncs instantly. My GPA thanks you.",
      name: "Alex T.",
      title: "Physics, ETH Zurich",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[1216px] mx-auto px-4 md:px-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            name={testimonial.name}
            title={testimonial.title}
            avatar={testimonial.avatar}
          />
        ))}
      </div>
    </div>
  );
}