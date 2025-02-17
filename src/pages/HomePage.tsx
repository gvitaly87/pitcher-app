import { NavLink } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <main>
      <NavLink to="/coach">Coach Dashboard</NavLink>
    </main>
  );
}
