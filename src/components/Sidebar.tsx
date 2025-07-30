import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { Menu } from "lucide-react";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  // State to manage mobile sidebar visibility
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile menu toggle button, only visible on small screens */}
      <div className="sm:hidden fixed top-0 left-0 p-4 z-50">
        <button title="Button" onClick={() => setOpen(!open)}>
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-4 flex flex-col gap-4 transition-transform duration-300 z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 sm:w-48 sm:static sm:h-auto`}
      >
        <div className="text-xl font-bold mb-4">MyApp</div>

        {/* Navigation links that close mobile sidebar when clicked */}
        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link to="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>

        {/* Theme selector positioned at the bottom of the sidebar */}
        <select
          title="Themes"
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
          className="mt-auto bg-gray-700 text-white rounded px-2 py-1"
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
