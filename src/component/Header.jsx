import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white text-black shadow-md dark:bg-gray-800 dark:text-white transition-colors duration-300">
      <h1 className="text-2xl font-bold tracking-wide">TripNest</h1>

      <nav className="flex items-center gap-6">
        <Link
          to="/"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/hotels"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Hotels
        </Link>
        <Link
          to="/experiences"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Experiences
        </Link>

        <button
          onClick={toggleTheme}
          className="ml-4 px-4 py-2 rounded cursor-pointer bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
