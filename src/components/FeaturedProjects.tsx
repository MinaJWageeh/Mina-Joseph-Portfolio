"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { InteractiveProjectModal } from "./InteractiveProjectModal";
import {
  ExternalLink,
  Code2,
  Layers,
  Sparkles,
  ArrowRight,
  Server,
  Zap,
  Cpu,
  Database,
  Radio,
  Clock,
  Printer,
  ChevronRight,
} from "lucide-react";
import { GithubIcon } from "./Icons";

export function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "Full-Stack SaaS",
    "Systems & Real-Time",
    "AI & NLP Pipeline",
    "Enterprise E-Commerce",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Eyebrow & Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d242d] border border-[#27313d] text-xs font-mono text-[#84b8ad] mb-4">
          <Layers className="w-3.5 h-3.5 text-[#84b8ad]" />
          <span>PRODUCTION-GRADE PORTFOLIO</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-display-lg text-[#e9e7e1] mb-4">
          Engineered for Performance.
        </h2>
        <p className="text-[#aab5c2] max-w-2xl text-base sm:text-lg leading-relaxed">
          Explore production-grade platforms, shared Rust cores, enterprise e-commerce storefronts, and vector retrieval pipelines extracted directly from my active repositories.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs px-4 py-2 rounded-full transition-all duration-200 font-medium ${
                activeCategory === cat
                  ? "bg-[#84b8ad] text-[#11151b] font-semibold shadow-lg shadow-[#84b8ad]/20"
                  : "bg-[#1d242d] text-[#aab5c2] hover:text-[#e9e7e1] border border-[#27313d] hover:border-[#354353]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Showcase Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl bg-[#1d242d] border border-[#27313d] hover:border-[#354353] transition-all duration-300 flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-black/30"
          >
            {/* Visual Interactive Mockup Header */}
            <div className="p-5 bg-[#151b22] border-b border-[#27313d] relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#84b8ad] bg-[#84b8ad]/15 border border-[#84b8ad]/30 px-2.5 py-0.5 rounded-full">
                  {project.badge}
                </span>
                <span className="text-xs font-mono text-[#aab5c2]">
                  {project.category}
                </span>
              </div>

              {/* Custom Mockup per project type */}
              {project.id === "rental-app" && (
                <div className="p-3.5 rounded-xl bg-[#11151b] border border-[#27313d] font-mono text-xs text-[#e9e7e1] space-y-2">
                  <div className="flex items-center justify-between text-[#aab5c2] border-b border-[#27313d] pb-1.5">
                    <span className="flex items-center gap-1.5 text-[#e9e7e1]">
                      <Radio className="w-3.5 h-3.5 text-[#84b8ad] animate-pulse" />
                      WebSocket Gateway Active
                    </span>
                    <span className="text-[#84b8ad]">PORT 4000 ↔ 3001</span>
                  </div>
                  <div className="text-[11px] text-[#aab5c2]">
                    <span className="text-[#84b8ad]">POST</span> /api/v1/contracts/sign {"->"} 200 OK
                  </div>
                  <div className="p-2 rounded bg-[#151b22] border border-[#27313d] text-[11px] text-[#84b8ad]">
                    [WS EVENT] tenant_joined_room #lease_8492 (Latency: 14ms)
                  </div>
                </div>
              )}

              {project.id === "paper-io" && (
                <div className="p-3.5 rounded-xl bg-[#11151b] border border-[#27313d] font-mono text-xs text-[#e9e7e1] space-y-2">
                  <div className="flex items-center justify-between border-b border-[#27313d] pb-1.5">
                    <span className="flex items-center gap-1.5 text-[#e9e7e1]">
                      <Cpu className="w-3.5 h-3.5 text-[#84b8ad]" />
                      Rust Core {"->"} WASM Engine
                    </span>
                    <span className="text-[#84b8ad] font-bold">60.0 FPS</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
                    <div className="bg-[#151b22] p-1.5 rounded border border-[#27313d]">
                      <div className="text-[#aab5c2]">Mode</div>
                      <div className="text-[#e9e7e1] font-bold">Time Attack</div>
                    </div>
                    <div className="bg-[#151b22] p-1.5 rounded border border-[#27313d]">
                      <div className="text-[#aab5c2]">Spatial Grid</div>
                      <div className="text-[#84b8ad] font-bold">O(1) Hash</div>
                    </div>
                    <div className="bg-[#151b22] p-1.5 rounded border border-[#27313d]">
                      <div className="text-[#aab5c2]">Territory</div>
                      <div className="text-[#84b8ad] font-bold">34.8% Area</div>
                    </div>
                  </div>
                </div>
              )}

              {project.id === "coptic-dic" && (
                <div className="p-3.5 rounded-xl bg-[#11151b] border border-[#27313d] font-mono text-xs text-[#e9e7e1] space-y-2">
                  <div className="flex items-center justify-between border-b border-[#27313d] pb-1.5">
                    <span className="flex items-center gap-1.5 text-[#e9e7e1]">
                      <Database className="w-3.5 h-3.5 text-[#84b8ad]" />
                      pgvector Cosine Search
                    </span>
                    <span className="text-[#84b8ad]">Confidence: 94.2%</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="text-[#aab5c2]">Input (AR):</span>
                    <span className="text-[#e9e7e1] font-sans bg-[#151b22] px-2 py-0.5 rounded border border-[#27313d]">في البدء كان الكلمة</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="text-[#84b8ad]">Output (COP):</span>
                    <span className="text-[#84b8ad] font-mono bg-[#151b22] px-2 py-0.5 rounded border border-[#27313d]">ϧⲉⲛ ϯⲁⲣⲭⲏ ⲛⲁϥϣⲟⲡ ⲛϫⲉ ⲡⲓⲥⲁϫⲓ</span>
                  </div>
                </div>
              )}

              {project.id === "scandiweb-ecommerce" && (
                <div className="p-3.5 rounded-xl bg-[#11151b] border border-[#27313d] font-mono text-xs text-[#e9e7e1] space-y-2">
                  <div className="flex items-center justify-between border-b border-[#27313d] pb-1.5">
                    <span className="flex items-center gap-1.5 text-[#e9e7e1]">
                      <Zap className="w-3.5 h-3.5 text-[#84b8ad]" />
                      Hyvä Performance Metrics
                    </span>
                    <span className="text-[#84b8ad] font-bold">PageSpeed 98</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-1.5 bg-[#151b22] rounded border border-[#27313d]">
                      <span className="text-[#aab5c2]">LCP: </span>
                      <span className="text-[#84b8ad]">0.8s (Fast)</span>
                    </div>
                    <div className="p-1.5 bg-[#151b22] rounded border border-[#27313d]">
                      <span className="text-[#aab5c2]">JS Bundle: </span>
                      <span className="text-[#84b8ad]">-85% vs Luma</span>
                    </div>
                  </div>
                </div>
              )}

              {project.id === "eslam-store" && (
                <div className="p-3.5 rounded-xl bg-[#11151b] border border-[#27313d] font-mono text-xs text-[#e9e7e1] space-y-2">
                  <div className="flex items-center justify-between border-b border-[#27313d] pb-1.5">
                    <span className="flex items-center gap-1.5 text-[#e9e7e1]">
                      <Printer className="w-3.5 h-3.5 text-[#84b8ad]" />
                      80mm ESC/POS Cashier
                    </span>
                    <span className="text-[#84b8ad]">Receipt #1084</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#aab5c2]">
                    <span>IndexedDB Persistence</span>
                    <span className="text-[#e9e7e1] font-bold">Cloudflare Tunnel Active</span>
                  </div>
                </div>
              )}

              {project.id === "coptic-learn" && (
                <div className="p-3.5 rounded-xl bg-[#11151b] border border-[#27313d] font-mono text-xs text-[#e9e7e1] space-y-2">
                  <div className="flex items-center justify-between border-b border-[#27313d] pb-1.5">
                    <span className="flex items-center gap-1.5 text-[#e9e7e1]">
                      <Clock className="w-3.5 h-3.5 text-[#84b8ad]" />
                      Audio Sync Timeline
                    </span>
                    <span className="text-[#84b8ad]">Offline Cache Ready</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#aab5c2]">
                    <span>Flutter BLoC Engine</span>
                    <span className="text-[#e9e7e1]">Bilingual Progression</span>
                  </div>
                </div>
              )}
            </div>

            {/* Card Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
              <div>
                <h3 className="text-xl font-bold text-[#e9e7e1] tracking-tight mb-2 group-hover:text-[#84b8ad] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#aab5c2] leading-relaxed mb-4">
                  {project.tagline}
                </p>

                {/* Key Metrics row */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#27313d]">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-[10px] uppercase font-mono text-[#aab5c2]">
                        {m.label}
                      </div>
                      <div className="text-xs font-semibold text-[#e9e7e1] mt-0.5 truncate">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 5).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#252e3a] text-[#e9e7e1] border border-[#27313d]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#252e3a] text-[#aab5c2] border border-[#27313d]">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs font-medium text-[#84b8ad] hover:text-[#98c8be] transition-colors group/btn"
                  >
                    <span>Inspect Architecture &amp; Code</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#252e3a] hover:bg-[#354353] border border-[#27313d] text-[#aab5c2] hover:text-[#e9e7e1] transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Deep-Dive Architecture */}
      <InteractiveProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
