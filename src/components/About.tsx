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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f1011] border border-[#23252a] text-xs font-mono text-[#828fff] mb-4">
          <GraduationCap className="w-3.5 h-3.5 text-[#5e6ad2]" />
          <span>ENGINEERING FOUNDATION & BACKGROUND</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-display-lg text-white mb-4">
          Engineered for Rigor. Built for Scale.
        </h2>
        <p className="text-[#8a8f98] max-w-2xl text-base sm:text-lg leading-relaxed">
          How an honors electrical power engineering background informs bulletproof software architecture, zero-tolerance bug mitigation, and low-latency system design.
        </p>
      </div>

      {/* Main Narrative & Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Core Narrative Card - 2 cols on desktop */}
        <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl bg-[#0f1011] border border-[#23252a] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#5e6ad2]">
              <span>[01] THE JOURNEY & MINDSET</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              From Critical Infrastructure to High-Throughput Software
            </h3>
            <p className="text-sm sm:text-base text-[#d0d6e0] leading-relaxed">
              I graduated with <span className="text-white font-semibold">Honors Distinction (Ranked 6th cumulatively; 3rd during final two years)</span> in Electrical Power & Machines Engineering from Benha University. My graduation project was the comprehensive electrical design and automated building management system for a <span className="text-white font-semibold">220-Bed Critical Care Hospital</span>.
            </p>
            <p className="text-sm sm:text-base text-[#8a8f98] leading-relaxed">
              When designing power distribution for intensive care units and life-support wards, failure is never an option. That exact discipline directly drives my software engineering philosophy: <span className="text-white">predictable state machines</span>, <span className="text-white">bulletproof schemas</span>, <span className="text-white">defensive programming</span>, and <span className="text-white">zero runtime compromises</span>.
            </p>
            <p className="text-sm sm:text-base text-[#8a8f98] leading-relaxed">
              After managing complex technical office operations across three engineering firms, I transitioned my engineering mindset entirely to modern full-stack development. At <span className="text-white font-semibold">Scandiweb</span>, I applied these principles to enterprise Magento 2 / Hyvä theme e-commerce platforms, optimizing sub-second load times and robust Git collaboration in fast-paced agile sprint cycles.
            </p>
          </div>

          {/* Academic Honors Badge Box */}
          <div className="p-4 rounded-xl bg-[#141516] border border-[#23252a] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#5e6ad2]/15 border border-[#5e6ad2]/30 flex items-center justify-center text-[#828fff] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  {education.degree}
                </h4>
                <p className="text-xs text-[#8a8f98]">
                  {education.institution} • {education.grade} ({education.ranking})
                </p>
              </div>
            </div>
            <span className="text-xs font-mono font-medium text-[#27a644] bg-[#27a644]/10 border border-[#27a644]/25 px-2.5 py-1 rounded-full shrink-0">
              Verified Honors
            </span>
          </div>
        </div>

        {/* Right Column Bento Cards */}
        <div className="space-y-6">
          {/* Profile Card with Photo */}
          <div className="p-5 rounded-2xl bg-[#0f1011] border border-[#23252a] flex items-center gap-4 group hover:border-[#3e3e44] transition-colors">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-[#141516]">
              <Image
                src="/mina-joseph.jpg"
                alt="Mina Joseph Wageh"
                fill
                sizes="80px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#27a644] mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#27a644] animate-pulse"></span>
                <span>Active for Hire</span>
              </div>
              <h4 className="text-sm font-bold text-white truncate">
                {personal.name}
              </h4>
              <p className="text-xs text-[#8a8f98] truncate">
                Full-Stack & Systems Craftsman
              </p>
              <div className="flex items-center gap-1 text-[11px] text-[#8a8f98] mt-1 font-mono">
                <MapPin className="w-3 h-3 text-[#5e6ad2]" />
                <span>Cairo, Egypt</span>
              </div>
            </div>
          </div>

          {/* Download Official CV Card */}
          <div className="p-6 rounded-2xl bg-[#0f1011] border border-[#23252a] flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[#8a8f98]">CURRICULUM VITAE</span>
                <span className="text-[10px] font-mono text-[#27a644] bg-[#27a644]/10 px-2 py-0.5 rounded">
                  ATS Verified
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-1">
                Official Resume (PDF)
              </h4>
              <p className="text-xs text-[#8a8f98] leading-relaxed mb-4">
                Full-stack developer resume covering technical skills, enterprise work at Scandiweb, and verified project portfolio.
              </p>
            </div>

            <a
              href={personal.cvPath}
              download="Mina_Joseph_Full_Stack_CV.pdf"
              className="shimmer-btn w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#5e6ad2] hover:bg-[#828fff] text-white text-xs font-medium transition-all shadow-md shadow-[#5e6ad2]/20"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>
          </div>

          {/* Languages & Global Communication */}
          <div className="p-6 rounded-2xl bg-[#0f1011] border border-[#23252a] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8a8f98]">
              <Globe className="w-3.5 h-3.5 text-[#5e6ad2]" />
              <span>COMMUNICATION & LANGUAGES</span>
            </div>
            <div className="space-y-3">
              {personal.languages.map((lang, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <span className="text-white font-medium">{lang.name}</span>
                  <span className="text-[#8a8f98] font-mono">{lang.level}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-[#23252a] text-[11px] text-[#8a8f98]">
              Comfortable leading technical discussions across asynchronous distributed teams worldwide.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
