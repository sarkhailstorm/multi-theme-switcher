import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { Menu } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const location = useLocation(); // To detect current route

  const getNavLinkClass = (path: string) => {
    const base = "relative px-2 py-1 transition-all duration-300";
    const active =
      "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current";
    return `${base} ${
      location.pathname === path
        ? active
        : "hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-current"
    }`;
  };

  const selectClass = `
    border rounded px-2 py-1 transition-colors duration-200
    ${
      theme === "theme1"
        ? "bg-white text-gray-900 border-gray-300"
        : theme === "theme2"
        ? "bg-gray-900 text-white border-gray-700"
        : "bg-indigo-600 text-white border-white"
    }
  `;

  return (
    <header
      className={`fixed top-0 left-0 right-0 flex items-center justify-between p-4 shadow-md z-50
      ${
        theme === "theme1"
          ? "bg-white text-gray-900"
          : theme === "theme2"
          ? "bg-gray-900 text-white"
          : "bg-indigo-600 text-white"
      }`}
    >
      <Link to={"/"}>
        <div className="font-bold text-xl">Theme Switcher</div>
      </Link>

      <div className="sm:hidden">
        <button title="Menu Button" onClick={() => setOpen(!open)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <nav
        className={`gap-4 sm:flex items-center ${
          open
            ? `${
                theme === "theme1"
                  ? "bg-white text-gray-900"
                  : theme === "theme2"
                  ? "bg-gray-900 text-white"
                  : "bg-indigo-600 text-white"
              } flex flex-col absolute top-16 right-4 p-4 rounded shadow`
            : "hidden"
        } sm:static sm:bg-transparent`}
      >
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className={getNavLinkClass("/")}
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => setOpen(false)}
          className={getNavLinkClass("/about")}
        >
          About
        </Link>
        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className={getNavLinkClass("/contact")}
        >
          Contact
        </Link>

        <select
          title="Themes"
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
          className={selectClass}
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </nav>
    </header>
  );
};
export default Header;
