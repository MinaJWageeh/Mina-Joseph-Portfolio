"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Download, Menu, X, ArrowUpRight, Code2 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "projects", "about", "skills", "experience", "services", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pb-2 transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`w-full max-w-6xl transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between ${
          scrolled
            ? "glass-dock shadow-2xl shadow-black/80 border border-white/10"
            : "bg-black/30 backdrop-blur-md border border-white/5"
        }`}
      >
        {/* Brand logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5e6ad2] rounded-lg px-1.5 py-1"
        >
          <div className="w-8 h-8 rounded-lg bg-[#5e6ad2]/20 border border-[#5e6ad2]/50 flex items-center justify-center text-white font-bold text-sm tracking-tight group-hover:bg-[#5e6ad2] transition-colors duration-200">
            <span className="text-[#828fff] group-hover:text-white transition-colors">MJ</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white group-hover:text-[#828fff] transition-colors">
              Mina Joseph
            </span>
            <span className="text-[10px] text-[#8a8f98] font-mono tracking-wide hidden sm:inline">
              Full-Stack & Systems
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-[#0f1011]/80 border border-[#23252a] px-3 py-1 rounded-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-xs px-3 py-1.5 rounded-full transition-all duration-150 font-medium ${
                  isActive
                    ? "bg-[#18191a] text-white shadow-sm border border-white/10"
                    : "text-[#8a8f98] hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Actions & Status */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#0f1011] border border-[#23252a] text-[11px] text-[#8a8f98]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#27a644] animate-pulse"></span>
            <span>Available for Hire</span>
          </div>

          <ThemeToggle />

          <a
            href={PORTFOLIO_DATA.personal.cvPath}
            download="Mina_Joseph_Full_Stack_CV.pdf"
            className="flex items-center gap-1.5 text-xs font-medium px-3 sm:px-4 py-1.5 rounded-full bg-[#5e6ad2] hover:bg-[#828fff] text-white transition-all duration-200 shadow-sm hover:shadow-[#5e6ad2]/25"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Resume</span>
            <span className="sm:hidden">CV</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#8a8f98] hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 bg-[#0f1011] border border-[#23252a] rounded-2xl p-5 shadow-2xl backdrop-blur-2xl z-50 flex flex-col gap-3">
          <div className="flex items-center justify-between pb-3 border-b border-[#23252a]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#27a644] animate-pulse"></span>
              <span className="text-xs text-[#8a8f98]">Available for projects</span>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <span className="text-xs font-mono text-[#5e6ad2]">Cairo</span>
            </div>
          </div>

          <div className="flex flex-col gap-1 py-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium px-3 py-2.5 rounded-xl text-[#d0d6e0] hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#8a8f98]" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#23252a] flex flex-col gap-2">
            <a
              href={PORTFOLIO_DATA.personal.cvPath}
              download="Mina_Joseph_Full_Stack_CV.pdf"
              className="w-full flex items-center justify-center gap-2 text-xs font-medium py-2.5 rounded-xl bg-[#5e6ad2] text-white"
            >
              <Download className="w-4 h-4" />
              <span>Download Verified CV (PDF)</span>
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="w-full flex items-center justify-center gap-2 text-xs font-medium py-2.5 rounded-xl bg-[#141516] text-[#d0d6e0] border border-[#23252a]"
            >
              <span>{PORTFOLIO_DATA.personal.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
