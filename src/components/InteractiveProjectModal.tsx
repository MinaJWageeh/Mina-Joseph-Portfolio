"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import { X, ExternalLink, CheckCircle2, Cpu, Database, Server, Terminal, Code2 } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function InteractiveProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#1d242d] border border-[#27313d] rounded-2xl shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#1d242d]/95 backdrop-blur-md border-b border-[#27313d]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#84b8ad]/15 text-[#84b8ad] border border-[#84b8ad]/30">
              {project.badge}
            </span>
            <h2 id="modal-project-title" className="text-lg sm:text-xl font-bold text-[#e9e7e1] tracking-tight">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#aab5c2] hover:text-[#e9e7e1] hover:bg-white/10 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-8">
          {/* Tagline & Role */}
          <div>
            <p className="text-[#e9e7e1] text-base sm:text-lg mb-3 leading-relaxed">
              {project.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#aab5c2]">
              <span>
                Role: <strong className="text-[#e9e7e1] font-medium">{project.role}</strong>
              </span>
              <span>•</span>
              <span>
                Category: <strong className="text-[#e9e7e1] font-medium">{project.category}</strong>
              </span>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#151b22] border border-[#27313d]">
                <div className="text-xs text-[#aab5c2] mb-1">{m.label}</div>
                <div className="text-sm sm:text-base font-bold text-[#e9e7e1]">{m.value}</div>
              </div>
            ))}
          </div>

          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#151b22] border border-[#27313d]">
              <h4 className="text-xs font-mono font-bold text-[#ff5f56] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span>The Challenge / Engineering Hurdle</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#aab5c2] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#151b22] border border-[#27313d]">
              <h4 className="text-xs font-mono font-bold text-[#84b8ad] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span>Architectural Solution</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#e9e7e1] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div>
            <h4 className="text-sm font-semibold text-[#e9e7e1] mb-3 flex items-center gap-2">
              <Server className="w-4 h-4 text-[#84b8ad]" />
              <span>Architectural Rigor &amp; Engineering Decisions</span>
            </h4>
            <div className="space-y-2">
              {project.architectureHighlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#151b22] border border-[#27313d] text-xs sm:text-sm text-[#e9e7e1]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#84b8ad] shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippet if present */}
          {project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#aab5c2] flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-[#84b8ad]" />
                  <span>{project.codeSnippet.filename}</span>
                </span>
                <span className="text-[11px] font-mono uppercase text-[#aab5c2] bg-[#151b22] px-2 py-0.5 rounded border border-[#27313d]">
                  {project.codeSnippet.language}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-[#11151b] border border-[#27313d] font-mono text-xs text-[#e9e7e1] overflow-x-auto leading-relaxed">
                <pre>{project.codeSnippet.code}</pre>
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono text-[#aab5c2] uppercase tracking-wider mb-2.5">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#252e3a] text-[#e9e7e1] border border-[#27313d]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="sticky bottom-0 px-6 py-4 bg-[#1d242d]/95 backdrop-blur-md border-t border-[#27313d] flex items-center justify-between">
          <div className="text-xs text-[#aab5c2]">
            Verified from Mina&apos;s active project codebase
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#252e3a] hover:bg-[#354353] text-[#e9e7e1] text-xs font-medium border border-[#27313d] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Repository</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="btn-accent px-4 py-2 rounded-xl bg-[#84b8ad] hover:bg-[#98c8be] text-[#11151b] text-xs font-semibold transition-colors shadow-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
