import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Features from "./pages/Features";
import HelpCentre from "./pages/HelpCentre";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notes from "./pages/Notes";
import ForgotPassword from "./pages/ForgotPassword";
import ResetLinkSent from "./pages/ResetLinkSent";
import CreateNewPassword from "./pages/CreateNewPassword";
import NoteWriting from "./pages/NoteWriting";

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
  {
    path: "/forgot-password",
    Component: ForgotPassword,
  },
  {
    path: "/reset-link-sent",
    Component: ResetLinkSent,
  },
  {
    path: "/create-new-password",
    Component: CreateNewPassword,
  },
  {
    path: "/notes/write",
    Component: NoteWriting,
  },
]);