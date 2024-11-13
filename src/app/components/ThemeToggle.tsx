"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full p-2 flex items-center transition duration-300 ease-in-out focus:outline-none"
    >
      <div className="relative w-10 h-5 transition duration-300 ease-in-out rounded-full bg-gray-300 dark:bg-gray-600">
        <div
          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-all duration-300 ${
            theme === "dark" ? "transform translate-x-5" : ""
          }`}
        ></div>
      </div>
    </button>
  );
};

export default ThemeToggle;
