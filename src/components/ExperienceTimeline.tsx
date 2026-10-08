"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Briefcase,
  Calendar,
  Building,
  GraduationCap,
  Award,
  CheckCircle2,
  FileCheck2,
} from "lucide-react";

export function ExperienceTimeline() {
  const { experience, education, certifications } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f1011] border border-[#23252a] text-xs font-mono text-[#828fff] mb-4">
          <Briefcase className="w-3.5 h-3.5 text-[#5e6ad2]" />
          <span>CAREER CHRONOLOGY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-display-lg text-white mb-4">
          Experience & Engineering Timeline.
        </h2>
        <p className="text-[#8a8f98] max-w-2xl text-base sm:text-lg leading-relaxed">
          From intensive electrical technical office operations and hospital automation to enterprise e-commerce platforms and distributed web systems.
        </p>
      </div>

      <div className="relative border-l border-[#23252a] ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
        {/* Scandiweb Experience */}
        {experience.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0f1011] border-2 border-[#5e6ad2] group-hover:scale-125 transition-transform"></div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1011] border border-[#23252a] hover:border-[#3e3e44] transition-colors space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#23252a] pb-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#5e6ad2]/15 text-[#828fff] border border-[#5e6ad2]/30">
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8a8f98] mt-1">
                    <span className="text-white font-medium">{exp.company}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-[#8a8f98] bg-[#141516] px-3 py-1 rounded-full border border-[#23252a] self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-[#5e6ad2]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-sm text-[#d0d6e0] leading-relaxed">
                {exp.summary}
              </p>

              <div className="space-y-2">
                {exp.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#8a8f98]">
                    <CheckCircle2 className="w-4 h-4 text-[#5e6ad2] shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {exp.skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#141516] text-[#8a8f98] border border-[#23252a]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Academic Degree & Honors */}
        <div className="relative group">
          <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0f1011] border-2 border-[#27a644] group-hover:scale-125 transition-transform"></div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1011] border border-[#23252a] hover:border-[#3e3e44] transition-colors space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#23252a] pb-4">
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {education.degree}
                  </h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#27a644]/15 text-[#27a644] border border-[#27a644]/30">
                    Honors Distinction
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#8a8f98] mt-1">
                  <span className="text-white font-medium">{education.institution}</span>
                  <span>•</span>
                  <span>{education.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-[#8a8f98] bg-[#141516] px-3 py-1 rounded-full border border-[#23252a] self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-[#27a644]" />
                <span>{education.period}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#141516] border border-[#23252a]">
                <span className="text-[#8a8f98]">Cumulative Grade:</span>
                <div className="text-white font-bold mt-0.5">{education.grade}</div>
              </div>
              <div className="p-3 rounded-xl bg-[#141516] border border-[#23252a]">
                <span className="text-[#8a8f98]">Class Standing:</span>
                <div className="text-[#38bdf8] font-bold mt-0.5">{education.ranking}</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#141516] border border-[#23252a] space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Graduation Project:</span>
                <span className="text-[11px] font-mono text-[#27a644]">Grade: {education.graduationProject.grade}</span>
              </div>
              <div className="text-xs text-[#d0d6e0] font-medium">{education.graduationProject.title}</div>
              <p className="text-xs text-[#8a8f98] leading-relaxed pt-1">
                {education.graduationProject.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications and Specialized Tracks Bento */}
      <div className="mt-16 rounded-2xl bg-[#0f1011] border border-[#23252a] p-6 sm:p-8">
        <div className="flex items-center gap-2.5 mb-6">
          <FileCheck2 className="w-5 h-5 text-[#5e6ad2]" />
          <h3 className="text-lg font-bold text-white tracking-tight">
            Professional Certifications & Verified Training
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#141516] border border-[#23252a] hover:border-[#3e3e44] transition-colors"
            >
              <div className="text-xs font-semibold text-white mb-1">
                {cert.name}
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#8a8f98]">
                <span>{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
