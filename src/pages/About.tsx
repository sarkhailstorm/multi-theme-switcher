import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen p-8 transition-colors duration-300 ${
        theme === "theme1"
          ? "bg-white text-gray-900"
          : theme === "theme2"
          ? "bg-gray-900 text-white"
          : "bg-amber-100 text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold mb-4 border-b pb-2">About Us</h1>
      <p className="text-lg leading-relaxed max-w-3xl">
        Welcome to our Theme Switcher App! This is a simple demonstration of how
        you can use React Context and Tailwind CSS to create dynamic theme
        switching. Try changing the theme from the dropdown to see
        the styles update in real time.
      </p>
    </div>
  );
};

export default About;
