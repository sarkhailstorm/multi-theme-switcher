import { useTheme } from "../context/ThemeContext";

const Spinner = () => {
  const { theme } = useTheme();

  const borderColor = theme === "theme1" ? "border-black" : "border-white";

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className={`w-12 h-12 border-4 border-t-transparent rounded-full animate-spin ${borderColor}`}
      />
    </div>
  );
};

export default Spinner;
