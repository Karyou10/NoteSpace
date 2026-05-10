import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Search, Bell, Plus, Share2, Bold, Italic, Underline, Strikethrough, AlignLeft, AlignCenter, AlignRight, AlignJustify, List, ListOrdered, Save } from "lucide-react";
import DashboardSidebar from "../components/DashboardSidebar";
import svgPaths from "../../imports/svg-0512yemt0y";

const imgAvatar = "https://placehold.co/400";

export default function NoteWriting() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [title, setTitle] = useState("Untitled Note");
  const [content, setContent] = useState("");

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleToolbarClick = (command: string, value?: string) => {
    document.execCommand(command, false, value);
  };

  const handleSave = () => {
    const newNote = {
      id: Date.now().toString(),
      title,
      content,
      lastEdited: new Date().toISOString(),
      category: "today"
    };

    const existingNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    localStorage.setItem("notes", JSON.stringify([newNote, ...existingNotes]));
    
    // Also mark user as not new
    localStorage.setItem("isNewUser", "false");
    
    navigate("/notes");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="bg-white flex h-screen w-full overflow-hidden">
      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-[16px] p-[32px] flex flex-col items-center gap-[24px] w-full max-w-[320px]">
            <div className="relative shrink-0 size-[48px]">
              <div className="absolute inset-[12.5%_9.37%_12.5%_15.63%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
                  <path d={svgPaths.pc986e0} fill="#E61717" />
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

      {/* Sidebar */}
      <DashboardSidebar activeTab="Dashboard" onLogout={() => setShowLogoutModal(true)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Bar */}
        <div className="bg-[#fefefe] h-[64px] shadow-[0px_8px_21.8px_0px_rgba(249,115,22,0.1)] flex items-center justify-between px-[32px] pr-[112px] z-10">
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
              onClick={() => navigate("/notes")}
              className="flex gap-[8px] items-center px-[16px] py-[8px] h-[48px] border border-[#f97316] rounded-[16px] hover:bg-[#fff7ed] transition-colors"
            >
              <Plus className="size-[20px] text-[#f97316]" />
              <p className="font-['General_Sans',sans-serif] font-medium text-[14px] text-[#f97316]">New Note</p>
            </button>
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col overflow-hidden relative bg-[#fefefe]">
          {/* Note Header */}
          <div className="px-[32px] py-[24px] flex items-center justify-between">
            <div className="flex flex-col gap-[4px]">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="font-['General_Sans',sans-serif] font-semibold text-[24px] text-[#545454] outline-none bg-transparent"
              />
              <p className="font-['General_Sans',sans-serif] font-medium text-[12px] text-[#909090]">
                last edited 3 mins ago
              </p>
            </div>

            <div className="flex items-center gap-[16px]">
              <div className="flex items-center">
                <button type="button" className="size-[32px] rounded-full border-2 border-white flex items-center justify-center bg-[#f0f0f0] text-[#f97316] z-10 transition-transform hover:scale-110">
                  <Plus className="size-[16px]" />
                </button>
                <div className="flex -ml-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/150?u=${i + 10}`}
                      alt=""
                      className="size-[32px] rounded-full border-2 border-white -ml-2 first:ml-0 object-cover"
                    />
                  ))}
                  <div className="size-[32px] rounded-full border-2 border-white bg-[#f0f0f0] flex items-center justify-center -ml-2">
                    <p className="text-[12px] font-semibold text-[#545454]">+6</p>
                  </div>
                </div>
              </div>
              <button type="button" className="flex gap-[8px] items-center px-[16px] py-[8px] border border-[#f97316] rounded-[12px] text-[#f97316] hover:bg-[#fff7ed] transition-colors">
                <Share2 className="size-[18px]" />
                <p className="font-medium text-[14px]">Share</p>
              </button>
            </div>
          </div>

          {/* Toolbar */}
          <div className="px-[32px] pb-[16px] border-b border-[#f0f0f0] flex items-center gap-[12px]">
            <div className="flex items-center gap-[4px] bg-[#f8f9fa] p-[4px] rounded-[8px]">
              <button onClick={() => handleToolbarClick("bold")} className="p-[6px] hover:bg-white rounded-[4px] text-[#6c6c6c] hover:text-[#f97316] transition-all"><Bold className="size-[18px]" /></button>
              <button onClick={() => handleToolbarClick("italic")} className="p-[6px] hover:bg-white rounded-[4px] text-[#6c6c6c] hover:text-[#f97316] transition-all"><Italic className="size-[18px]" /></button>
              <button onClick={() => handleToolbarClick("underline")} className="p-[6px] hover:bg-white rounded-[4px] text-[#6c6c6c] hover:text-[#f97316] transition-all"><Underline className="size-[18px]" /></button>
              <button onClick={() => handleToolbarClick("strikeThrough")} className="p-[6px] hover:bg-white rounded-[4px] text-[#6c6c6c] hover:text-[#f97316] transition-all"><Strikethrough className="size-[18px]" /></button>
            </div>

            <div className="h-[24px] w-[1px] bg-[#e5e7eb]" />

            <div className="flex items-center gap-[4px] bg-[#f8f9fa] p-[4px] rounded-[8px]">
              <button onClick={() => handleToolbarClick("justifyLeft")} className="p-[6px] hover:bg-white rounded-[4px] text-[#6c6c6c] hover:text-[#f97316] transition-all"><AlignLeft className="size-[18px]" /></button>
              <button onClick={() => handleToolbarClick("justifyCenter")} className="p-[6px] hover:bg-white rounded-[4px] text-[#6c6c6c] hover:text-[#f97316] transition-all"><AlignCenter className="size-[18px]" /></button>
              <button onClick={() => handleToolbarClick("justifyRight")} className="p-[6px] hover:bg-white rounded-[4px] text-[#6c6c6c] hover:text-[#f97316] transition-all"><AlignRight className="size-[18px]" /></button>
              <button onClick={() => handleToolbarClick("justifyFull")} className="p-[6px] hover:bg-white rounded-[4px] text-[#6c6c6c] hover:text-[#f97316] transition-all"><AlignJustify className="size-[18px]" /></button>
            </div>

            <div className="h-[24px] w-[1px] bg-[#e5e7eb]" />

            <div className="flex items-center gap-[4px] bg-[#f8f9fa] p-[4px] rounded-[8px]">
              <button onClick={() => handleToolbarClick("insertUnorderedList")} className="p-[6px] hover:bg-white rounded-[4px] text-[#6c6c6c] hover:text-[#f97316] transition-all"><List className="size-[18px]" /></button>
              <button onClick={() => handleToolbarClick("insertOrderedList")} className="p-[6px] hover:bg-white rounded-[4px] text-[#6c6c6c] hover:text-[#f97316] transition-all"><ListOrdered className="size-[18px]" /></button>
            </div>

            <div className="h-[24px] w-[1px] bg-[#e5e7eb]" />

            <div className="flex items-center gap-[4px] bg-[#f8f9fa] p-[4px] rounded-[8px]">
              <button onClick={() => handleToolbarClick("formatBlock", "H1")} className="px-[8px] py-[4px] hover:bg-white rounded-[4px] text-[#6c6c6c] hover:text-[#f97316] font-semibold text-[14px] transition-all">H1</button>
              <button onClick={() => handleToolbarClick("formatBlock", "H2")} className="px-[8px] py-[4px] hover:bg-white rounded-[4px] text-[#6c6c6c] hover:text-[#f97316] font-semibold text-[14px] transition-all">H2</button>
            </div>

            <div className="h-[24px] w-[1px] bg-[#e5e7eb]" />

            <button onClick={handleSave} className="ml-auto flex gap-[8px] items-center px-[16px] py-[8px] bg-[#f97316] rounded-[8px] text-white hover:bg-[#e06814] transition-colors">
              <Save className="size-[18px]" />
              <p className="font-medium text-[14px]">Save</p>
            </button>
          </div>

          {/* Text Area */}
          <div className="flex-1 overflow-y-auto px-[32px] py-[24px]">
            <div className="max-w-[800px] mx-auto h-full flex flex-col">
              <div
                contentEditable
                onInput={(e) => setContent(e.currentTarget.innerHTML)}
                className="rich-text-content w-full flex-1 outline-none bg-transparent font-['General_Sans',sans-serif] text-[18px] text-[#545454] leading-[1.6] empty:before:content-[attr(placeholder)] empty:before:text-[#909090]"
                placeholder="Start typing something..."
              />
            </div>
          </div>

          {/* Loader Overlay */}
          {isLoading && (
            <div className="absolute inset-0 bg-[#e5e5e5]/80 flex items-center justify-center z-20 backdrop-blur-[2px] transition-opacity duration-500">
              <div className="relative size-[100px]">
                <div className="absolute inset-0 border-[8px] border-[#f0f0f0] rounded-full" />
                <div className="absolute inset-0 border-[8px] border-[#f97316] border-t-transparent rounded-full animate-spin" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
