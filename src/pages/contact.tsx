import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen p-8 transition-colors duration-300 ${
        theme === "theme1"
          ? "bg-white text-gray-900"
          : theme === "theme2"
          ? "bg-gray-900 text-white"
          : "bg-indigo-600 text-white"
      }`}
    >
      <h1 className="text-3xl font-bold mb-4 border-b pb-2">Contact Us</h1>
      <form className="max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
        />
        <textarea
          rows={5}
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
        ></textarea>
        <button
          type="submit"
          className={`${
            theme === "theme1"
              ? "bg-black text-white hover:bg-[#121212]"
              : theme === "theme2"
              ? "bg-gray-900 text-white border border-white hover:bg-gray-800"
              : "bg-indigo-700 text-white border border-white hover:bg-indigo-600"
          } text-white px-4 py-2 rounded transition cursor-pointer`}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
