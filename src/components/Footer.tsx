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
    <footer className="border-t border-[#27313d] bg-[#11151b] text-[#aab5c2] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Narrative */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#84b8ad]/15 border border-[#84b8ad]/30 flex items-center justify-center text-xs font-bold text-[#84b8ad]">
              MJ
            </div>
            <span className="text-sm font-semibold text-[#e9e7e1] tracking-tight">
              {PORTFOLIO_DATA.personal.name}
            </span>
          </div>
          <p className="text-xs text-[#aab5c2] max-w-sm">
            Engineering robust web systems, real-time engines, and distributed architectures with honors discipline.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-[#aab5c2]">
          <a href="#projects" className="hover:text-[#e9e7e1] transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-[#e9e7e1] transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-[#e9e7e1] transition-colors">
            Skills
          </a>
          <a href="#experience" className="hover:text-[#e9e7e1] transition-colors">
            Experience
          </a>
          <a href="#services" className="hover:text-[#e9e7e1] transition-colors">
            Services
          </a>
          <a href="#contact" className="hover:text-[#e9e7e1] transition-colors">
            Contact
          </a>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-[#1d242d] border border-[#27313d] hover:border-[#354353] text-[#aab5c2] hover:text-[#e9e7e1] transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-[#1d242d] border border-[#27313d] hover:border-[#354353] text-[#aab5c2] hover:text-[#e9e7e1] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="p-2 rounded-xl bg-[#1d242d] border border-[#27313d] hover:border-[#354353] text-[#aab5c2] hover:text-[#e9e7e1] transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#1d242d] border border-[#27313d] hover:border-[#354353] text-xs text-[#aab5c2] hover:text-[#e9e7e1] transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#84b8ad]" />
            <span className="text-[11px] font-mono">TOP</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-[#27313d] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#aab5c2] gap-4">
        <div>
          © {new Date().getFullYear()} Mina Joseph Wageh. All rights reserved.
        </div>
        <div>
          Crafted with Next.js 16, TypeScript &amp; Custom Design System Tokens.
        </div>
      </div>
    </footer>
  );
}
