import { NavLink } from "react-router-dom";
import "./SideNav.css";

const SideNav = () => {
  return (
    <nav className="side-nav">
      <ul>
        <li>
          <NavLink
            to="/coach"
            className={({ isActive }) => (isActive ? "text-amber-800" : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/roster"
            className={({ isActive }) => (isActive ? "text-amber-800" : "")}
          >
            Team Roster
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/schedule"
            className={({ isActive }) => (isActive ? "text-amber-800" : "")}
          >
            Schedule
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/training"
            className={({ isActive }) => (isActive ? "text-amber-800" : "")}
          >
            Training Program
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
