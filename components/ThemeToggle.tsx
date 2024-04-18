"use client";
import React from "react";

import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useState } from "react";

type Theme = "winter" | "dracula";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>("winter");
  const toggleTheme = () => {
    const newTheme: Theme = theme === "winter" ? "dracula" : "winter";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  return (
    <button className="btn btn-sm btn-outline" onClick={toggleTheme}>
      {theme === "winter" ? <BsMoonFill className="h-4 w-4" /> : <BsSunFill className="h-4 w-4" />}
    </button>
  );
};

export default ThemeToggle;
