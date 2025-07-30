import { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);
  const { theme } = useTheme();

  /* Initially, display only 4 cards */
  const [view, setView] = useState(4);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <h1
        className={`text-2xl font-bold mb-4 ${
          theme === "theme2" ? "mt-16 md:mt-0" : ""
        }`}
      >
        Welcome to the Multi-Theme Switcher App
      </h1>
      <p className="mb-4">
        How it works: To get started, select one of the three available themes
        from the top right corner of the navbar. The page will automatically
        update based on your selected theme.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.slice(0, view).map((p) => (
          <div
            key={p.id}
            className="border rounded-lg p-4 shadow-xl flex flex-col text-center hover:scale-103 duration-300 hover:cursor-pointer"
          >
            <img
              src={p.image}
              alt={p.title}
              className="h-40 object-contain mb-2"
            />
            <h2 className="font-bold text-lg">{p.title}</h2>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        {view < products.length && (
          <button
            type="button"
            onClick={() => setView((prev) => prev + 4)}
            className="bg-gray-900 text-white px-4 py-2 rounded cursor-pointer"
          >
            See More
          </button>
        )}

        {view > 4 && (
          <button
            type="button"
            onClick={() => setView(4)}
            className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            See Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
