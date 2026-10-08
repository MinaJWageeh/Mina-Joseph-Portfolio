"use client";

import React from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  GraduationCap,
  Award,
  Download,
  Building2,
  Cpu,
  Globe,
  FileCheck,
  CheckCircle2,
  Sparkles,
  MapPin,
  Check,
} from "lucide-react";

export function About() {
  const { education, personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d242d] border border-[#27313d] text-xs font-mono text-[#84b8ad] mb-4">
          <GraduationCap className="w-3.5 h-3.5 text-[#84b8ad]" />
          <span>ENGINEERING FOUNDATION &amp; BACKGROUND</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-display-lg text-[#e9e7e1] mb-4">
          Engineered for Rigor. Built for Scale.
        </h2>
        <p className="text-[#aab5c2] max-w-2xl text-base sm:text-lg leading-relaxed">
          How an honors electrical power engineering background informs bulletproof software architecture, zero-tolerance bug mitigation, and low-latency system design.
        </p>
      </div>

      {/* Main Narrative & Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Core Narrative Card - 2 cols on desktop */}
        <div className="liquid-glass liquid-glass-card lg:col-span-2 p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#84b8ad]">
              <span>[01] THE JOURNEY &amp; MINDSET</span>
            </div>
            <h3 className="text-2xl font-bold text-[#e9e7e1] tracking-tight">
              From Critical Infrastructure to High-Throughput Software
            </h3>
            <p className="text-sm sm:text-base text-[#aab5c2] leading-relaxed">
              I graduated with <span className="text-[#e9e7e1] font-semibold">Honors Distinction (Ranked 6th cumulatively; 3rd during final two years)</span> in Electrical Power &amp; Machines Engineering from Benha University. My graduation project was the comprehensive electrical design and automated building management system for a <span className="text-[#e9e7e1] font-semibold">220-Bed Critical Care Hospital</span>.
            </p>
            <p className="text-sm sm:text-base text-[#aab5c2] leading-relaxed">
              When designing power distribution for intensive care units and life-support wards, failure is never an option. That exact discipline directly drives my software engineering philosophy: <span className="text-[#e9e7e1] font-medium">predictable state machines</span>, <span className="text-[#e9e7e1] font-medium">bulletproof schemas</span>, <span className="text-[#e9e7e1] font-medium">defensive programming</span>, and <span className="text-[#e9e7e1] font-medium">zero runtime compromises</span>.
            </p>
            <p className="text-sm sm:text-base text-[#aab5c2] leading-relaxed">
              After managing complex technical office operations across three engineering firms, I transitioned my engineering mindset entirely to modern full-stack development. At <span className="text-[#e9e7e1] font-semibold">Scandiweb</span>, I applied these principles to enterprise Magento 2 / Hyvä theme e-commerce platforms, optimizing sub-second load times and robust Git collaboration in fast-paced agile sprint cycles.
            </p>
          </div>

          {/* Academic Honors Badge Box */}
          <div className="p-4 rounded-xl bg-[#151b22] border border-[#27313d] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#84b8ad]/15 border border-[#84b8ad]/30 flex items-center justify-center text-[#84b8ad] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#e9e7e1]">
                  {education.degree}
                </h4>
                <p className="text-xs text-[#aab5c2]">
                  {education.institution} • {education.grade} ({education.ranking})
                </p>
              </div>
            </div>
            <span className="text-xs font-mono font-medium text-[#84b8ad] bg-[#84b8ad]/10 border border-[#84b8ad]/25 px-2.5 py-1 rounded-full shrink-0">
              Verified Honors
            </span>
          </div>
        </div>

        {/* Right Column Bento Cards */}
        <div className="space-y-6">
          {/* Profile Card with Photo */}
          <div className="liquid-glass liquid-glass-card p-5 rounded-2xl flex items-center gap-4 group">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-[#27313d] shrink-0 bg-[#151b22]">
              <Image
                src={personal.profilePhoto}
                alt="Mina Joseph Wageh"
                fill
                sizes="80px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#84b8ad] mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#84b8ad] animate-pulse"></span>
                <span>Active for Hire</span>
              </div>
              <h4 className="text-sm font-bold text-[#e9e7e1] truncate">
                {personal.name}
              </h4>
              <p className="text-xs text-[#aab5c2] truncate">
                Full-Stack &amp; Systems Craftsman
              </p>
              <div className="flex items-center gap-1 text-[11px] text-[#aab5c2] mt-1 font-mono">
                <MapPin className="w-3 h-3 text-[#84b8ad]" />
                <span>Cairo, Egypt</span>
              </div>
            </div>
          </div>

          {/* Download Official CV Card */}
          <div className="liquid-glass liquid-glass-card p-6 rounded-2xl flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[#aab5c2]">CURRICULUM VITAE</span>
                <span className="text-[10px] font-mono text-[#84b8ad] bg-[#84b8ad]/10 border border-[#84b8ad]/25 px-2 py-0.5 rounded">
                  ATS Verified
                </span>
              </div>
              <h4 className="text-base font-bold text-[#e9e7e1] mb-1">
                Official Resume (PDF)
              </h4>
              <p className="text-xs text-[#aab5c2] leading-relaxed mb-4">
                Full-stack developer resume covering technical skills, enterprise work at Scandiweb, and verified project portfolio.
              </p>
            </div>

            <a
              href={personal.cvPath}
              download="Mina_Joseph_Full_Stack_CV.pdf"
              className="btn-accent shimmer-btn w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#84b8ad] hover:bg-[#98c8be] text-[#11151b] text-xs font-semibold transition-all shadow-md shadow-[#84b8ad]/20"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>
          </div>

          {/* Languages & Global Communication */}
          <div className="liquid-glass liquid-glass-card p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#aab5c2]">
              <Globe className="w-3.5 h-3.5 text-[#84b8ad]" />
              <span>COMMUNICATION &amp; LANGUAGES</span>
            </div>
            <div className="space-y-3">
              {personal.languages.map((lang, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <span className="text-[#e9e7e1] font-medium">{lang.name}</span>
                  <span className="text-[#aab5c2] font-mono">{lang.level}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-[#27313d] text-[11px] text-[#aab5c2]">
              Comfortable leading technical discussions across asynchronous distributed teams worldwide.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
