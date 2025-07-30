import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { Menu } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();

  // State for mobile menu toggle
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 shadow-md text-white bg-white dark:bg-gray-900 z-50">
      <Link to={"/"}>
        <div className="font-bold text-xl">Theme Switcher</div>
      </Link>

      {/* Mobile menu button, only visible on small screens */}
      <div className="sm:hidden">
        <button title="Button" onClick={() => setOpen(!open)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation menu, responsive behavior */}
      <nav
        className={`gap-4 sm:flex items-center ${
          open
            ? "flex flex-col absolute top-16 right-4 bg-white dark:bg-gray-900 p-4 rounded shadow"
            : "hidden"
        } sm:static sm:bg-transparent`}
      >
        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link to="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>

        {/* Theme selector dropdown */}
        <select
          title="Themes"
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
          className="border rounded px-2 py-1 hover:bg-gray-900"
        >
          <option value="theme1">Light</option>
          <option value="theme2">Dark</option>
          <option value="theme3">Colored</option>
        </select>
      </nav>
    </header>
  );
};
export default Header;
