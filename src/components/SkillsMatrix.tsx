"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  CheckCircle2,
  Terminal,
  Layers,
  ArrowRight,
} from "lucide-react";

export function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-4 h-4 text-[#84b8ad]" />;
      case "Layout":
        return <Layout className="w-4 h-4 text-[#84b8ad]" />;
      case "Server":
        return <Server className="w-4 h-4 text-[#84b8ad]" />;
      case "Database":
        return <Database className="w-4 h-4 text-[#84b8ad]" />;
      case "Cpu":
        return <Cpu className="w-4 h-4 text-[#84b8ad]" />;
      default:
        return <Code2 className="w-4 h-4 text-[#84b8ad]" />;
    }
  };

  const currentCategory = PORTFOLIO_DATA.skillCategories[selectedCategory];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d242d] border border-[#27313d] text-xs font-mono text-[#84b8ad] mb-4">
          <Cpu className="w-3.5 h-3.5 text-[#84b8ad]" />
          <span>VERIFIED TECHNICAL CAPABILITIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-display-lg text-[#e9e7e1] mb-4">
          The Engineering Matrix.
        </h2>
        <p className="text-[#aab5c2] max-w-2xl text-base sm:text-lg leading-relaxed">
          Technologies and systems mastered through active production deployments, enterprise client deliverables at Scandiweb, and complex monorepo implementations.
        </p>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {PORTFOLIO_DATA.skillCategories.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(idx)}
              className={`flex items-center gap-2 text-xs px-4 py-2.5 rounded-xl transition-all duration-200 font-medium ${
                selectedCategory === idx
                  ? "bg-[#252e3a] text-[#84b8ad] border border-[#84b8ad]/60 shadow-lg shadow-[#84b8ad]/10"
                  : "bg-[#1d242d] text-[#aab5c2] hover:text-[#e9e7e1] border border-[#27313d] hover:border-[#354353]"
              }`}
            >
              {getIcon(cat.icon)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Category Display */}
      <div className="rounded-2xl bg-[#1d242d] border border-[#27313d] p-6 sm:p-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-[#27313d] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {getIcon(currentCategory.icon)}
              <h3 className="text-xl font-bold text-[#e9e7e1] tracking-tight">
                {currentCategory.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#aab5c2]">
              {currentCategory.description}
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-[#aab5c2]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#84b8ad]"></span>
              Core Proficiency
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#84b8ad]"></span>
              Verified in Code
            </span>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {currentCategory.skills.map((skill, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl transition-all duration-200 border flex flex-col justify-between ${
                skill.highlight
                  ? "bg-[#252e3a] border-[#354353] hover:border-[#84b8ad]/60 hover:shadow-lg hover:shadow-[#84b8ad]/10"
                  : "bg-[#151b22] border-[#27313d] hover:border-[#354353]"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs sm:text-sm font-semibold text-[#e9e7e1] tracking-tight">
                  {skill.name}
                </span>
                {skill.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84b8ad]"></span>
                )}
              </div>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#27313d]/60">
                <span className="text-[10px] font-mono text-[#aab5c2]">
                  {skill.level}
                </span>
                <span className="text-[10px] font-mono text-[#84b8ad] bg-[#84b8ad]/10 border border-[#84b8ad]/20 px-1.5 py-0.5 rounded">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive System Architecture Blueprint */}
      <div className="rounded-2xl bg-[#1d242d] border border-[#27313d] p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#84b8ad]" />
            <h3 className="text-base font-bold text-[#e9e7e1] tracking-tight">
              Production Architecture Blueprint
            </h3>
          </div>
          <span className="text-xs font-mono text-[#aab5c2] hidden sm:inline">
            How Mina Connects The Stack
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
          {/* Layer 1: Client Edge */}
          <div className="p-4 rounded-xl bg-[#151b22] border border-[#27313d] space-y-2">
            <div className="text-[#84b8ad] font-bold">[1] CLIENT &amp; EDGE</div>
            <div className="text-[#e9e7e1]">Next.js 14+ App Router</div>
            <div className="text-[#aab5c2]">Tailwind CSS • Hyvä Theme</div>
            <div className="text-[#aab5c2]">Flutter Mobile Engine</div>
            <div className="pt-2 text-[10px] text-[#84b8ad]">Sub-second SSR &amp; Hydration</div>
          </div>

          {/* Layer 2: Real-time & Gateway */}
          <div className="p-4 rounded-xl bg-[#151b22] border border-[#27313d] space-y-2">
            <div className="text-[#84b8ad] font-bold">[2] REAL-TIME &amp; BUS</div>
            <div className="text-[#e9e7e1]">WebSocket Gateways</div>
            <div className="text-[#aab5c2]">NestJS Modules</div>
            <div className="text-[#aab5c2]">Rust Shared Core (WASM)</div>
            <div className="pt-2 text-[10px] text-[#84b8ad]">Sub-20ms State Sync</div>
          </div>

          {/* Layer 3: Services & AI */}
          <div className="p-4 rounded-xl bg-[#151b22] border border-[#27313d] space-y-2">
            <div className="text-[#84b8ad] font-bold">[3] LOGIC &amp; AI RAG</div>
            <div className="text-[#e9e7e1]">FastAPI / Python NLP</div>
            <div className="text-[#aab5c2]">PHP / Magento Services</div>
            <div className="text-[#aab5c2]">Grammar Pipeline Evaluator</div>
            <div className="pt-2 text-[10px] text-[#84b8ad]">Deterministic Vector RAG</div>
          </div>

          {/* Layer 4: Persistence */}
          <div className="p-4 rounded-xl bg-[#151b22] border border-[#27313d] space-y-2">
            <div className="text-[#84b8ad] font-bold">[4] PERSISTENCE</div>
            <div className="text-[#e9e7e1]">PostgreSQL + pgvector</div>
            <div className="text-[#aab5c2]">Prisma ORM • SQLAlchemy</div>
            <div className="text-[#aab5c2]">MySQL • Redis Cache</div>
            <div className="pt-2 text-[10px] text-[#84b8ad]">ACID Schema Integrity</div>
          </div>
        </div>
      </div>
    </section>
  );
}
