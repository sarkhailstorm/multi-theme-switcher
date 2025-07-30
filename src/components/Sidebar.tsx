import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { Menu } from "lucide-react";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const getNavLinkClasses = (path: string) =>
    `relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:transition-all after:duration-300 ${
      location.pathname === path
        ? "after:bg-white font-semibold"
        : "after:bg-transparent hover:after:bg-white"
    }`;

  const selectStyles =
    theme === "theme1"
      ? "bg-white text-black"
      : theme === "theme2"
      ? "bg-gray-900 text-white"
      : "bg-amber-500 text-neutral-800";

  // Background color for navbar
  const navbarBg =
    theme === "theme1"
      ? "bg-white text-black border-b border-gray-200"
      : theme === "theme2"
      ? "bg-gray-900 text-white border-b border-gray-800"
      : "bg-amber-500 text-neutral-800 border-b border-yellow-600";

  return (
    <>
      {/* Navbar for small screens */}
      <div
        className={`sm:hidden fixed top-0 left-0 w-full p-4 z-50 py-4 ${navbarBg}`}
      >
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">Theme Switcher</div>
          <button title="Toggle Menu" onClick={() => setOpen(!open)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full p-4 flex flex-col gap-4 transition-transform duration-300 z-40
        ${
          theme === "theme1"
            ? "bg-white text-gray-900"
            : theme === "theme2"
            ? "bg-gray-900 text-white"
            : "bg-amber-500 text-neutral-800"
        }
        ${
          open ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:w-48 sm:static sm:h-auto pt-16 sm:pt-4`}
      >
        {/* Theme Switcher brand hidden on mobile (already in navbar) */}
        <div className="text-lg font-bold mb-2 hidden sm:block">Theme Switcher</div>

        <Link
          to="/"
          onClick={() => setOpen(false)}
          className={getNavLinkClasses("/")}
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => setOpen(false)}
          className={getNavLinkClasses("/about")}
        >
          About
        </Link>
        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className={getNavLinkClasses("/contact")}
        >
          Contact
        </Link>

        <select
          title="Themes"
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
          className={`rounded px-2 py-1 mt-4 border ${selectStyles}`}
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </aside>
    </>
  );
};

export default Sidebar;
