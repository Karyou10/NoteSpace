import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Plus, Search, Bell } from "lucide-react";
import svgPaths from "../../imports/svg-0512yemt0y";
import DashboardSidebar from "../components/DashboardSidebar";
const imgAvatar = "https://placehold.co/400";
const imgFrame1618868958 = "https://placehold.co/400";
interface Note {
  id: string;
  title: string;
  content: string;
  lastEdited: Date;
  category: "today" | "yesterday";
}

export default function Notes() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [isNewUser, setIsNewUser] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  useEffect(() => {
    // Get user data from localStorage
    const storedName = localStorage.getItem("userName") || "User";
    const storedIsNewUser = localStorage.getItem("isNewUser") === "true";

    setUserName(storedName);
    setIsNewUser(storedIsNewUser);

    // Load notes from localStorage
    const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]").map((n: any) => ({
      ...n,
      lastEdited: new Date(n.lastEdited)
    }));

    // If returning user and no saved notes, load sample notes
    if (!storedIsNewUser && savedNotes.length === 0) {
      const sampleNotes: Note[] = [
        {
          id: "1",
          title: "Untitled Note",
          content: "Sample content",
          lastEdited: new Date(),
          category: "today",
        },
        // ... other samples
      ];
      setNotes(sampleNotes);
    } else {
      setNotes(savedNotes);
    }
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const createNewNote = () => {
    navigate("/notes/write");
    
    // Mark user as no longer new after creating first note
    if (isNewUser) {
      setIsNewUser(false);
      localStorage.setItem("isNewUser", "false");
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" }) +
      " " + date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
  };

  const todayNotes = notes.filter((note) => note.category === "today");
  const yesterdayNotes = notes.filter((note) => note.category === "yesterday");

  return (
    <div className="bg-white flex h-screen w-full overflow-hidden">
      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[16px] p-[32px] flex flex-col items-center gap-[24px] w-full max-w-[320px]">
            <div className="relative shrink-0 size-[48px]">
              <div className="absolute inset-[12.5%_9.37%_12.5%_15.63%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
                  <path d={svgPaths.pc986e0} fill="var(--fill-0, #E61717)" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-center text-center">
              <p className="font-['General_Sans',sans-serif] font-semibold text-[20px] text-[#545454]">
                Leaving already?
              </p>
              <p className="font-['General_Sans',sans-serif] font-medium text-[14px] text-[#909090]">
                You're about to log out. Do you want to continue?
              </p>
            </div>
            <div className="flex flex-col gap-[12px] w-full">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="h-[48px] bg-transparent hover:bg-[#fff7ed] border border-[#f97316] rounded-[16px] font-['General_Sans',sans-serif] font-medium text-[16px] text-[#f97316] transition-colors"
              >
                Stay logged in
              </button>
              <button
                onClick={handleLogout}
                className="h-[48px] bg-[#fee2e2] hover:bg-[#fecaca] rounded-[16px] font-['General_Sans',sans-serif] font-medium text-[16px] text-[#e61717] transition-colors"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      )}

      <DashboardSidebar activeTab="Dashboard" onLogout={() => setShowLogoutModal(true)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Bar */}
        <div className="bg-[#fefefe] h-[64px] shadow-[0px_8px_21.8px_0px_rgba(249,115,22,0.1)] flex items-center justify-between px-[32px] pr-[112px]">
          <div className="flex items-center">
            <p className="font-['General_Sans',sans-serif] font-semibold text-[18px]">
              <span className="text-[#95450d]">Note</span>
              <span className="text-[#f97316]">Space</span>
            </p>
          </div>

          <div className="bg-[#f0f0f0] flex gap-[8px] items-center px-[16px] py-[8px] rounded-[16px] w-full max-w-[418px]">
            <Search className="size-[20px] text-[#6c6c6c]" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent font-['General_Sans',sans-serif] font-medium text-[14px] text-[#6c6c6c] outline-none w-full"
            />
          </div>

          <div className="flex gap-[16px] items-center">
            <Bell className="size-[24px] text-[#6c6c6c]" />
            <div className="flex gap-[12px] items-center">
              <img
                alt="Avatar"
                className="rounded-full size-[30px] object-cover border border-[#f0f0f0]"
                src={imgAvatar}
              />
            </div>
            <button
              onClick={createNewNote}
              className="flex gap-[8px] items-center px-[16px] py-[8px] h-[48px] border border-[#f97316] rounded-[16px] hover:bg-[#fff7ed] transition-colors"
            >
              <Plus className="size-[20px] text-[#f97316]" />
              <p className="font-['General_Sans',sans-serif] font-medium text-[14px] text-[#f97316]">New Note</p>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-[32px] py-[40px]">
          {isNewUser || notes.length === 0 ? (
            // Empty State
            <div className="flex flex-col gap-[58px] items-center max-w-full max-w-[1152px] mx-auto">
              <div className="flex flex-col gap-[8px] items-center text-center w-full">
                <p className="font-['General_Sans',sans-serif] font-semibold text-[28px] text-[#545454]">
                  {getGreeting()}, {userName}
                </p>
                <p className="font-['General_Sans',sans-serif] font-medium text-[16px] text-[#545454]">
                  Let's capture something brilliant today!
                </p>
              </div>

              <div className="flex flex-col gap-[39px] items-start w-full">
                <button
                  onClick={createNewNote}
                  className="flex flex-col gap-[16px] h-[195px] items-center justify-center p-[8px] rounded-[8px] w-[174px] border-[0.5px] border-[#f97316] hover:bg-[#fff7ed] transition-colors"
                >
                  <Plus className="size-[32px] text-[#bb5611]" />
                  <p className="font-['General_Sans',sans-serif] font-medium text-[14px] text-[#bb5611]">
                    Create note
                  </p>
                </button>

                <p className="font-['General_Sans',sans-serif] font-medium text-[10px] text-black w-full">
                  Recent notes
                </p>
              </div>

              <div className="flex flex-col gap-[16px] items-center text-center">
                <p className="font-['General_Sans',sans-serif] font-semibold text-[18px] text-[#545454]">
                  It's a little quiet here…
                </p>
                <p className="font-['General_Sans',sans-serif] font-medium text-[14px] text-[#909090]">
                  Create your first note and fill this space with ideas.
                </p>
              </div>
            </div>
          ) : (
            // Populated State
            <div className="flex flex-col gap-[32px] max-w-full max-w-[1152px] mx-auto w-full">
              <div className="flex flex-col gap-[8px] items-center text-center w-full">
                <p className="font-['General_Sans',sans-serif] font-semibold text-[28px] text-[#545454]">
                  {getGreeting()}, {userName}
                </p>
                <p className="font-['General_Sans',sans-serif] font-medium text-[16px] text-[#545454]">
                  Let's capture something brilliant today!
                </p>
              </div>

              <div className="flex flex-col gap-[16px]">
                <button
                  onClick={createNewNote}
                  className="flex flex-col gap-[16px] h-[195px] items-center justify-center p-[8px] rounded-[8px] w-[174px] border-[0.5px] border-[#f97316] hover:bg-[#fff7ed] transition-colors"
                >
                  <Plus className="size-[32px] text-[#bb5611]" />
                  <p className="font-['General_Sans',sans-serif] font-medium text-[14px] text-[#bb5611]">
                    Create note
                  </p>
                </button>
              </div>

              {/* Today Notes */}
              {todayNotes.length > 0 && (
                <div className="flex flex-col gap-[16px]">
                  <p className="font-['General_Sans',sans-serif] font-semibold text-[14px] text-[#545454]">
                    Today
                  </p>
                  <div className="grid grid-cols-4 gap-[16px]">
                    {todayNotes.map((note) => (
                      <button
                        key={note.id}
                        onClick={() => setSelectedNote(note)}
                        className="relative h-[195px] rounded-[8px] overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <img
                          src={imgFrame1618868958}
                          alt=""
                          className="absolute inset-0 size-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-[16px] flex flex-col gap-[8px]">
                          <p className="font-['General_Sans',sans-serif] font-semibold text-[14px] text-white text-left">
                            {note.title}
                          </p>
                          <div className="flex gap-[8px] items-center">
                            <img
                              src={imgAvatar}
                              alt=""
                              className="size-[16px] rounded-full"
                            />
                            <p className="font-['General_Sans',sans-serif] font-normal text-[10px] text-white">
                              {formatDate(note.lastEdited)}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Yesterday Notes */}
              {yesterdayNotes.length > 0 && (
                <div className="flex flex-col gap-[16px]">
                  <p className="font-['General_Sans',sans-serif] font-semibold text-[14px] text-[#545454]">
                    Yesterday
                  </p>
                  <div className="grid grid-cols-4 gap-[16px]">
                    {yesterdayNotes.map((note) => (
                      <button
                        key={note.id}
                        onClick={() => setSelectedNote(note)}
                        className="relative h-[195px] rounded-[8px] overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <img
                          src={imgFrame1618868958}
                          alt=""
                          className="absolute inset-0 size-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-[16px] flex flex-col gap-[8px]">
                          <p className="font-['General_Sans',sans-serif] font-semibold text-[14px] text-white text-left">
                            {note.title}
                          </p>
                          <div className="flex gap-[8px] items-center">
                            <img
                              src={imgAvatar}
                              alt=""
                              className="size-[16px] rounded-full"
                            />
                            <p className="font-['General_Sans',sans-serif] font-normal text-[10px] text-white">
                              {formatDate(note.lastEdited)}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
