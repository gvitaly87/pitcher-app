import "./NavBar.css";
import { Link } from "react-router-dom";

import { CiUser } from "react-icons/ci";

export default function NavBar() {
  return (
    <nav className="text-text flex w-full items-center justify-between p-4">
      <Link to="/">
        <div className="navbar-logo flex flex-row items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="max-h-[40px]" />
          <span className="text-text font-emphasis text-lg">
            Green Light Labs
          </span>
        </div>
      </Link>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search..."
          className="text-text focus:border-brand-600 focus:outline-brand-500 placeholder:text-text-secondary focus:placeholder:text-text isolate w-96 rounded-full border-none bg-white/20 p-2 ring-1 shadow-lg ring-black/5 focus:outline"
        />
      </div>
      <div className="navbar-user flex items-center space-x-2">
        <span className="greeting">Hello, Coach!</span>
        <CiUser size={24} />
        {/* <img
          src="/path/to/avatar.png"
          alt="User Avatar"
          className="h-10 w-10 rounded-full"
        /> */}
      </div>
    </nav>
  );
}
