import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Features from "./pages/Features";
import HelpCentre from "./pages/HelpCentre";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notes from "./pages/Notes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/features",
    Component: Features,
  },
  {
    path: "/help",
    Component: HelpCentre,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/notes",
    Component: Notes,
  },
]);