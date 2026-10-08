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
          ? "bg-[#0f1011] hover:bg-[#18191a] text-[#828fff] border-[#23252a] hover:border-[#34343a]"
          : "bg-[#f1f3f5] hover:bg-[#e9ecef] text-[#5e6ad2] border-[#cbd5e1] hover:border-[#94a3b8]"
      } ${className}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
