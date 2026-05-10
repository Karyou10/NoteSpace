import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-0512yemt0y";

interface DashboardSidebarProps {
  activeTab?: string;
  onLogout: () => void;
}

export default function DashboardSidebar({ activeTab = "Dashboard", onLogout }: DashboardSidebarProps) {
  const navigate = useNavigate();

  const navItems = [
    { name: "Dashboard", path: "/notes", icon: svgPaths.p2e5cec80 },
    { name: "Shared Notes", path: "#", icon: svgPaths.p20cbd180 },
    { name: "Drafts", path: "#", icon: svgPaths.p257c6f00 },
    { name: "Tags", path: "#", icon: svgPaths.p2e6fc800 },
    { name: "Favorites", path: "#", icon: svgPaths.p102c9e00 },
    { name: "Settings", path: "#", icon: svgPaths.pbda2c00 },
    { name: "Trash", path: "#", icon: svgPaths.p13b2a100 },
  ];

  return (
    <div className="bg-[#f0f0f0] flex flex-col h-full justify-between p-[32px] shrink-0 w-[288px]">
      <div className="flex flex-col gap-[40px]">
        {/* Logo */}
        <div className="flex items-center justify-between w-full">
          <div className="h-[19.615px] w-[51px] cursor-pointer" onClick={() => navigate("/")}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 19.6154">
              <g clipPath="url(#clip0_18_1463)">
                <path d={svgPaths.p23472a80} fill="#E06814" />
                <path d={svgPaths.p2f3e9c00} fill="#95450D" />
              </g>
              <defs>
                <clipPath id="clip0_18_1463">
                  <rect fill="white" height="19.6154" width="51" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <button className="text-[#6c6c6c]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-[16px]">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => item.path !== "#" && navigate(item.path)}
              className={`flex gap-[8px] items-center p-[8px] w-full rounded-[8px] transition-colors ${
                activeTab === item.name ? "bg-white shadow-sm" : "hover:bg-white/50"
              }`}
            >
              <div className="size-[20px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={item.icon} fill={activeTab === item.name ? "#f97316" : "#6C6C6C"} />
                </svg>
              </div>
              <p className={`font-['General_Sans',sans-serif] font-medium text-[16px] ${
                activeTab === item.name ? "text-[#f97316]" : "text-[#6c6c6c]"
              }`}>
                {item.name}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col gap-[16px]">
        <button className="flex gap-[8px] items-center p-[8px] w-full hover:bg-white/50 rounded-[8px] transition-colors">
          <div className="size-[20px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p842a692} fill="#6C6C6C" />
            </svg>
          </div>
          <p className="font-['General_Sans',sans-serif] font-medium text-[16px] text-[#6c6c6c]">Profile</p>
        </button>

        <button
          onClick={onLogout}
          className="flex gap-[8px] items-center p-[8px] w-full hover:bg-red-50 rounded-[8px] transition-colors"
        >
          <div className="size-[20px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.pc986e0} fill="#E61717" />
            </svg>
          </div>
          <p className="font-['General_Sans',sans-serif] font-medium text-[16px] text-[#e61717]">Log out</p>
        </button>
      </div>
    </div>
  );
}
