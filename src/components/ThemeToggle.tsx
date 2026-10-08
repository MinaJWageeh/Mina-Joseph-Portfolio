"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-all duration-200 flex items-center justify-center border ${
        theme === "dark"
          ? "bg-[#1d242d] hover:bg-[#252e3a] text-[#84b8ad] border-[#27313d] hover:border-[#354353]"
          : "bg-[#ffffff] hover:bg-[#eaeff5] text-[#2a7366] border-[#d9e1ea] hover:border-[#c5d0dc] shadow-sm"
      } ${className}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 transition-transform hover:rotate-45 text-[#84b8ad]" />
      ) : (
        <Moon className="w-4 h-4 transition-transform hover:-rotate-12 text-[#2a7366]" />
      )}
    </button>
  );
}
