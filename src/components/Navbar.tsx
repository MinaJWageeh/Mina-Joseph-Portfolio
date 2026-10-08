"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
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
            ? "glass-dock shadow-xl shadow-black/30 border border-[#27313d]"
            : "bg-[#1d242d]/60 backdrop-blur-md border border-[#27313d]/60"
        }`}
      >
        {/* Brand logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#84b8ad] rounded-lg px-1.5 py-1"
        >
          <div className="w-8 h-8 rounded-lg bg-[#84b8ad]/15 border border-[#84b8ad]/40 flex items-center justify-center text-sm font-bold tracking-tight text-[#84b8ad] group-hover:bg-[#84b8ad] group-hover:text-[#11151b] transition-all duration-200">
            <span>MJ</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-[#e9e7e1] group-hover:text-[#84b8ad] transition-colors">
              Mina Joseph
            </span>
            <span className="text-[10px] text-[#aab5c2] font-mono tracking-wide hidden sm:inline">
              Creative Systems Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-[#1d242d]/80 border border-[#27313d] px-3 py-1 rounded-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-xs px-3 py-1.5 rounded-full transition-all duration-150 font-medium ${
                  isActive
                    ? "bg-[#252e3a] text-[#84b8ad] shadow-sm border border-[#27313d]"
                    : "text-[#aab5c2] hover:text-[#e9e7e1] hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Actions & Status */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#1d242d] border border-[#27313d] text-[11px] text-[#aab5c2]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#84b8ad] animate-pulse"></span>
            <span>Available for Hire</span>
          </div>

          <ThemeToggle />

          <a
            href={PORTFOLIO_DATA.personal.cvPath}
            download="Mina_Joseph_Full_Stack_CV.pdf"
            className="btn-accent flex items-center gap-1.5 text-xs font-semibold px-3.5 sm:px-4 py-1.5 rounded-full bg-[#84b8ad] hover:bg-[#98c8be] text-[#11151b] transition-all duration-200 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Resume</span>
            <span className="sm:hidden">CV</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#aab5c2] hover:text-[#e9e7e1] hover:bg-white/5 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 bg-[#1d242d] border border-[#27313d] rounded-2xl p-5 shadow-2xl backdrop-blur-2xl z-50 flex flex-col gap-3">
          <div className="flex items-center justify-between pb-3 border-b border-[#27313d]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#84b8ad] animate-pulse"></span>
              <span className="text-xs text-[#aab5c2]">Available for projects</span>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <span className="text-xs font-mono text-[#84b8ad]">Cairo</span>
            </div>
          </div>

          <div className="flex flex-col gap-1 py-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium px-3 py-2.5 rounded-xl text-[#aab5c2] hover:text-[#e9e7e1] hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#aab5c2]" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#27313d] flex flex-col gap-2">
            <a
              href={PORTFOLIO_DATA.personal.cvPath}
              download="Mina_Joseph_Full_Stack_CV.pdf"
              className="btn-accent w-full flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-xl bg-[#84b8ad] text-[#11151b]"
            >
              <Download className="w-4 h-4" />
              <span>Download Verified CV (PDF)</span>
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="w-full flex items-center justify-center gap-2 text-xs font-medium py-2.5 rounded-xl bg-[#252e3a] text-[#aab5c2] border border-[#27313d]"
            >
              <span>{PORTFOLIO_DATA.personal.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
