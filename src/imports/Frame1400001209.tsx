export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end leading-[0] not-italic relative size-full text-[#545454] text-center">
      <div className="flex flex-col font-['General_Sans',sans-serif] font-bold justify-center relative shrink-0 text-[56px] w-full">
        <p>
          <span className="leading-[1.4]">{`Unlock Your Study Power with `}</span>
          <span className="leading-[1.4] text-[#f97316]">NoteSpace</span>
        </p>
      </div>
      <div className="flex flex-col font-['General_Sans',sans-serif] font-normal justify-center relative shrink-0 text-[20px] w-full">
        <p className="leading-[1.6]">Join thousands of students who capture, collaborate, and conquer their classes with the simplest, fastest note-taking app built just for you</p>
      </div>
    </div>
  );
}