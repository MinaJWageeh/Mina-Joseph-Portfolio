"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#23252a] bg-[#010102] text-[#8a8f98] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Narrative */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#5e6ad2]/20 border border-[#5e6ad2]/40 flex items-center justify-center text-xs font-bold text-[#828fff]">
              MJ
            </div>
            <span className="text-sm font-semibold text-white tracking-tight">
              {PORTFOLIO_DATA.personal.name}
            </span>
          </div>
          <p className="text-xs text-[#8a8f98] max-w-sm">
            Engineering robust web systems, real-time engines, and distributed architectures with honors discipline.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-[#8a8f98]">
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>
          <a href="#experience" className="hover:text-white transition-colors">
            Experience
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#0f1011] border border-[#23252a] hover:border-[#3e3e44] text-[#8a8f98] hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#0f1011] border border-[#23252a] hover:border-[#3e3e44] text-[#8a8f98] hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="p-2 rounded-lg bg-[#0f1011] border border-[#23252a] hover:border-[#3e3e44] text-[#8a8f98] hover:text-white transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141516] border border-[#23252a] hover:border-[#3e3e44] text-xs text-[#8a8f98] hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[11px] font-mono">TOP</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-[#141516] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#62666d] gap-4">
        <div>
          © {new Date().getFullYear()} Mina Joseph Wageh. All rights reserved.
        </div>
        <div>
          Crafted with Next.js, TypeScript & Linear Design Standards.
        </div>
      </div>
    </footer>
  );
}
