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
        return <Code2 className="w-4 h-4 text-[#5e6ad2]" />;
      case "Layout":
        return <Layout className="w-4 h-4 text-[#828fff]" />;
      case "Server":
        return <Server className="w-4 h-4 text-[#38bdf8]" />;
      case "Database":
        return <Database className="w-4 h-4 text-[#27a644]" />;
      case "Cpu":
        return <Cpu className="w-4 h-4 text-[#f59e0b]" />;
      default:
        return <Code2 className="w-4 h-4 text-[#5e6ad2]" />;
    }
  };

  const currentCategory = PORTFOLIO_DATA.skillCategories[selectedCategory];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f1011] border border-[#23252a] text-xs font-mono text-[#828fff] mb-4">
          <Cpu className="w-3.5 h-3.5 text-[#5e6ad2]" />
          <span>VERIFIED TECHNICAL CAPABILITIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-display-lg text-white mb-4">
          The Engineering Matrix.
        </h2>
        <p className="text-[#8a8f98] max-w-2xl text-base sm:text-lg leading-relaxed">
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
                  ? "bg-[#141516] text-white border border-[#5e6ad2] shadow-lg shadow-[#5e6ad2]/10"
                  : "bg-[#0f1011] text-[#8a8f98] hover:text-white border border-[#23252a] hover:border-[#34343a]"
              }`}
            >
              {getIcon(cat.icon)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Category Display */}
      <div className="rounded-2xl bg-[#0f1011] border border-[#23252a] p-6 sm:p-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-[#23252a] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {getIcon(currentCategory.icon)}
              <h3 className="text-xl font-bold text-white tracking-tight">
                {currentCategory.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#8a8f98]">
              {currentCategory.description}
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-[#8a8f98]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#5e6ad2]"></span>
              Core Proficiency
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#27a644]"></span>
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
                  ? "bg-[#141516] border-[#34343a] hover:border-[#5e6ad2]/60 hover:shadow-lg hover:shadow-[#5e6ad2]/10"
                  : "bg-[#0a0b0c] border-[#1f2126] hover:border-[#2a2d34]"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs sm:text-sm font-semibold text-white tracking-tight">
                  {skill.name}
                </span>
                {skill.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5e6ad2]"></span>
                )}
              </div>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#23252a]/60">
                <span className="text-[10px] font-mono text-[#8a8f98]">
                  {skill.level}
                </span>
                <span className="text-[10px] font-mono text-[#27a644] bg-[#27a644]/10 px-1.5 py-0.5 rounded">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive System Architecture Blueprint */}
      <div className="rounded-2xl bg-[#0f1011] border border-[#23252a] p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#5e6ad2]" />
            <h3 className="text-base font-bold text-white tracking-tight">
              Production Architecture Blueprint
            </h3>
          </div>
          <span className="text-xs font-mono text-[#8a8f98] hidden sm:inline">
            How Mina Connects The Stack
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
          {/* Layer 1: Client Edge */}
          <div className="p-4 rounded-xl bg-[#141516] border border-[#23252a] space-y-2">
            <div className="text-[#828fff] font-bold">[1] CLIENT & EDGE</div>
            <div className="text-[#d0d6e0]">Next.js 14+ App Router</div>
            <div className="text-[#8a8f98]">Tailwind CSS • Hyvä Theme</div>
            <div className="text-[#8a8f98]">Flutter Mobile Engine</div>
            <div className="pt-2 text-[10px] text-[#27a644]">Sub-second SSR & Hydration</div>
          </div>

          {/* Layer 2: Real-time & Gateway */}
          <div className="p-4 rounded-xl bg-[#141516] border border-[#23252a] space-y-2">
            <div className="text-[#5e6ad2] font-bold">[2] REAL-TIME & BUS</div>
            <div className="text-[#d0d6e0]">WebSocket Gateways</div>
            <div className="text-[#8a8f98]">NestJS Modules</div>
            <div className="text-[#8a8f98]">Rust Shared Core (WASM)</div>
            <div className="pt-2 text-[10px] text-[#27a644]">Sub-20ms State Sync</div>
          </div>

          {/* Layer 3: Services & AI */}
          <div className="p-4 rounded-xl bg-[#141516] border border-[#23252a] space-y-2">
            <div className="text-[#38bdf8] font-bold">[3] LOGIC & AI RAG</div>
            <div className="text-[#d0d6e0]">FastAPI / Python NLP</div>
            <div className="text-[#8a8f98]">PHP / Magento Services</div>
            <div className="text-[#8a8f98]">Grammar Pipeline Evaluator</div>
            <div className="pt-2 text-[10px] text-[#27a644]">Deterministic Vector RAG</div>
          </div>

          {/* Layer 4: Persistence */}
          <div className="p-4 rounded-xl bg-[#141516] border border-[#23252a] space-y-2">
            <div className="text-[#27a644] font-bold">[4] PERSISTENCE</div>
            <div className="text-[#d0d6e0]">PostgreSQL + pgvector</div>
            <div className="text-[#8a8f98]">Prisma ORM • SQLAlchemy</div>
            <div className="text-[#8a8f98]">MySQL • Redis Cache</div>
            <div className="pt-2 text-[10px] text-[#27a644]">ACID Schema Integrity</div>
          </div>
        </div>
      </div>
    </section>
  );
}
