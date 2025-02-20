import { NavLink } from "react-router-dom";

//icons
import { MdDashboard } from "react-icons/md";
import { GiBaseballGlove } from "react-icons/gi";
import { IoCalendar } from "react-icons/io5";
import { IoBarbell } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";

const ICON_SIZE = 24;

type SidebarItem = {
  name: string;
  Icon: any;
  path: string;
};

const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    name: "Dashboard",
    Icon: MdDashboard,
    path: "/coach/",
  },
  {
    name: "Team Roster",
    Icon: GiBaseballGlove,
    path: "/coach/roster",
  },
  {
    name: "Schedule",
    Icon: IoCalendar,
    path: "/coach/schedule",
  },
  {
    name: "Training Programs",
    Icon: IoBarbell,
    path: "/coach/training",
  },
];

const SIDEBAR_UTILS: SidebarItem[] = [
  {
    name: "Settings",
    Icon: IoSettingsSharp,
    path: "/coach/settings",
  },
  {
    name: "Notifications",
    Icon: IoNotifications,
    path: "/coach/notifications",
  },
];

const LOGOUT: SidebarItem = {
  name: "Logout",
  Icon: IoLogOut,
  path: "/logout",
};

export default function Sidebar() {
  return (
    <aside className="flex w-64 justify-center p-5 pt-8">
      <nav className="flex flex-col space-y-6">
        <div className="bg-brand-800 flex w-12 flex-col items-center justify-center rounded-full opacity-90">
          <ul>{SIDEBAR_ITEMS.map((item) => RenderSidebarLink({ item }))}</ul>
        </div>
        <div className="bg-brand-800 flex w-12 flex-col items-center justify-center rounded-full opacity-90">
          <ul>{SIDEBAR_UTILS.map((item) => RenderSidebarLink({ item }))}</ul>
        </div>
        <div className="bg-brand-800 flex w-12 flex-col items-center justify-center self-end rounded-full opacity-90">
          <ul>
            <RenderSidebarLink item={LOGOUT} />
          </ul>
        </div>
      </nav>
    </aside>
  );
}

function RenderSidebarLink(props: { item: SidebarItem }) {
  const item = props.item;
  return (
    <li
      key={item.name}
      className="transform transition-transform duration-300 ease-in-out hover:animate-pulse"
    >
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          isActive
            ? "text-primary block w-12 rounded-full bg-white p-3 text-2xl"
            : "block w-12 bg-none p-3 text-2xl text-white"
        }
        end
      >
        <item.Icon size={ICON_SIZE} aria-label={item.name} focusable="false" />
        <label
          className="absolute left-20 hidden group-hover:inline"
          htmlFor={item.name}
        >
          {item.name}
        </label>
      </NavLink>
    </li>
  );
}
