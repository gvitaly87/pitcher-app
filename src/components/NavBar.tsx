import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="flex w-full items-center justify-between p-5">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-user">
        <span className="greeting">Hello, Coach!</span>
        <img src="/path/to/avatar.png" alt="User Avatar" className="avatar" />
      </div>
    </nav>
  );
}
