import "./Coach.css";

import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Coach() {
  return (
    <div className="main-bg">
      <header className="text-text w-full">
        <NavBar />
      </header>
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
