import { useState, useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import MobileNotSupported from "./components/MobileNotSupported";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return <MobileNotSupported />;
  }

  return <RouterProvider router={router} />;
}
