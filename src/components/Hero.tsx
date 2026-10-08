"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  ArrowDown,
  Terminal,
  Download,
  Send,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
  Award,
  Code2,
} from "lucide-react";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "benchmarks">("overview");

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden linear-glow-canvas"
    >
      {/* Background ambient grid pattern */}
      <div className="absolute inset-0 grid-bg-subtle pointer-events-none opacity-40"></div>

      {/* Decorative gradient blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#5e6ad2]/15 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Eyebrow status pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f1011] border border-[#23252a] text-xs font-medium text-[#d0d6e0] mb-8 shadow-lg shadow-black/40 hover:border-[#5e6ad2]/50 transition-colors animate-float">
          <span className="w-2 h-2 rounded-full bg-[#27a644] animate-pulse"></span>
          <span className="text-[#8a8f98]">Based in Cairo, Egypt</span>
          <span className="w-1 h-1 rounded-full bg-[#34343a]"></span>
          <span className="text-[#828fff] font-mono">Full-Stack & Systems Engineer</span>
        </div>

        {/* Hero Portrait Showcase with Floating Animated Badges */}
        <div className="relative mb-8 flex items-center justify-center">
          {/* Main Portrait Frame */}
          <div className="portrait-glow rounded-3xl p-1 bg-gradient-to-b from-[#23252a] to-[#0f1011]">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0f1011]">
              <Image
                src="/mina-joseph.jpg"
                alt="Mina Joseph Wageh"
                fill
                priority
                sizes="(max-width: 640px) 112px, 144px"
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Floating Badge 1: Scandiweb Experience */}
          <div className="hidden sm:flex absolute -top-3 -right-24 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0f1011]/90 backdrop-blur-md border border-[#23252a] shadow-xl text-[11px] font-mono text-[#d0d6e0] animate-float">
            <Zap className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>Ex-Scandiweb Developer</span>
          </div>

          {/* Floating Badge 2: Honors Engineer */}
          <div className="hidden sm:flex absolute -bottom-3 -left-28 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0f1011]/90 backdrop-blur-md border border-[#23252a] shadow-xl text-[11px] font-mono text-[#d0d6e0] animate-float-delayed">
            <Award className="w-3.5 h-3.5 text-[#27a644]" />
            <span>Honors Engineer (Benha Univ)</span>
          </div>

          {/* Floating Badge 3: Multi-paradigm Stack */}
          <div className="hidden md:flex absolute top-1/2 -right-36 -translate-y-1/2 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0f1011]/90 backdrop-blur-md border border-[#23252a] shadow-xl text-[11px] font-mono text-[#d0d6e0] animate-float-reverse">
            <Code2 className="w-3.5 h-3.5 text-[#5e6ad2]" />
            <span>Rust • Next.js • NestJS</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-display-xl text-white max-w-4xl leading-[1.08] mb-6">
          Architecting high-performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f7f8f8] to-[#828fff]">web systems</span> & real-time engines.
        </h1>

        {/* Subhead / Lead narrative */}
        <p className="text-base sm:text-lg md:text-xl text-[#8a8f98] max-w-2xl mb-8 leading-relaxed font-normal">
          Honors Electrical Engineer (Benha University) turned Full-Stack Craftsman. Engineering robust platforms across{" "}
          <span className="text-[#f7f8f8] font-medium">Next.js</span>,{" "}
          <span className="text-[#f7f8f8] font-medium">Rust/WASM</span>,{" "}
          <span className="text-[#f7f8f8] font-medium">NestJS</span>, and{" "}
          <span className="text-[#f7f8f8] font-medium">PostgreSQL</span> with mathematical precision.
        </p>

        {/* Primary CTA button cluster */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
          <a
            href="#projects"
            className="shimmer-btn flex items-center gap-2 px-6 py-3 rounded-xl bg-[#5e6ad2] hover:bg-[#828fff] text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-[#5e6ad2]/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Selected Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={PORTFOLIO_DATA.personal.cvPath}
            download="Mina_Joseph_Full_Stack_CV.pdf"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0f1011] hover:bg-[#141516] border border-[#23252a] hover:border-[#34343a] text-[#f7f8f8] font-medium text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-4 h-4 text-[#8a8f98]" />
            <span>Download Verified CV</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-transparent hover:bg-white/5 border border-white/10 text-[#d0d6e0] font-medium text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Send className="w-4 h-4 text-[#8a8f98]" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Interactive Live Terminal & Architecture Preview */}
        <div className="w-full max-w-4xl text-left rounded-2xl bg-[#0f1011] border border-[#23252a] shadow-2xl shadow-black overflow-hidden mb-12">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#141516] border-b border-[#23252a]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f]/80"></span>
              <div className="ml-2 flex items-center gap-1.5 text-xs font-mono text-[#8a8f98]">
                <Terminal className="w-3.5 h-3.5 text-[#5e6ad2]" />
                <span>mina@production:~/system-status</span>
              </div>
            </div>

            {/* Quick Command Selector Tabs */}
            <div className="flex items-center gap-1 bg-[#010102] p-1 rounded-lg border border-[#23252a]">
              <button
                onClick={() => setActiveTab("overview")}
                className={`text-xs px-2.5 py-1 rounded-md transition-colors font-mono ${
                  activeTab === "overview"
                    ? "bg-[#18191a] text-white"
                    : "text-[#8a8f98] hover:text-[#d0d6e0]"
                }`}
              >
                profile.json
              </button>
              <button
                onClick={() => setActiveTab("architecture")}
                className={`text-xs px-2.5 py-1 rounded-md transition-colors font-mono ${
                  activeTab === "architecture"
                    ? "bg-[#18191a] text-white"
                    : "text-[#8a8f98] hover:text-[#d0d6e0]"
                }`}
              >
                architecture.ts
              </button>
              <button
                onClick={() => setActiveTab("benchmarks")}
                className={`text-xs px-2.5 py-1 rounded-md transition-colors font-mono ${
                  activeTab === "benchmarks"
                    ? "bg-[#18191a] text-white"
                    : "text-[#8a8f98] hover:text-[#d0d6e0]"
                }`}
              >
                metrics.sh
              </button>
            </div>
          </div>

          {/* Terminal Content Body */}
          <div className="p-5 font-mono text-xs sm:text-sm bg-[#08090a] leading-relaxed overflow-x-auto min-h-[220px]">
            {activeTab === "overview" && (
              <div className="space-y-1 text-[#d0d6e0]">
                <p className="text-[#8a8f98]">// Verified Developer Profile & Systems Foundation</p>
                <p>
                  <span className="text-[#828fff]">const</span> developer = &#123;
                </p>
                <p className="pl-4">
                  name: <span className="text-[#27a644]">&quot;{PORTFOLIO_DATA.personal.name}&quot;</span>,
                </p>
                <p className="pl-4">
                  education: <span className="text-[#27a644]">&quot;B.Sc. Electrical Power & Machines (Excellent with Honor)&quot;</span>,
                </p>
                <p className="pl-4">
                  academicStanding: <span className="text-[#38bdf8]">&quot;Ranked 6th Cumulatively (3rd Final 2 Yrs)&quot;</span>,
                </p>
                <p className="pl-4">
                  productionExperience: [
                  <span className="text-[#f59e0b]">&quot;Scandiweb (Magento 2 / Hyvä)&quot;</span>,{" "}
                  <span className="text-[#f59e0b]">&quot;Electrical Technical Office (3 Firms)&quot;</span>
                  ],
                </p>
                <p className="pl-4">
                  verifiedStack: [<span className="text-[#27a644]">&quot;TypeScript&quot;</span>, <span className="text-[#27a644]">&quot;Rust&quot;</span>, <span className="text-[#27a644]">&quot;Next.js&quot;</span>, <span className="text-[#27a644]">&quot;NestJS&quot;</span>, <span className="text-[#27a644]">&quot;FastAPI&quot;</span>, <span className="text-[#27a644]">&quot;PostgreSQL&quot;</span>],
                </p>
                <p className="pl-4">
                  availability: <span className="text-[#27a644]">&quot;Global Contracts & Full-Time&quot;</span>
                </p>
                <p>&#125;;</p>
              </div>
            )}

            {activeTab === "architecture" && (
              <div className="space-y-1 text-[#d0d6e0]">
                <p className="text-[#8a8f98]">// Monorepo & Real-Time Gateway Architecture</p>
                <p>
                  <span className="text-[#828fff]">import</span> &#123; WebSocketGateway, SubscribeMessage &#125;{" "}
                  <span className="text-[#828fff]">from</span> <span className="text-[#27a644]">&apos;@nestjs/websockets&apos;</span>;
                </p>
                <p>
                  <span className="text-[#828fff]">import</span> &#123; PrismaClient &#125;{" "}
                  <span className="text-[#828fff]">from</span> <span className="text-[#27a644]">&apos;@prisma/client&apos;</span>;
                </p>
                <p className="pt-2">
                  <span className="text-[#828fff]">export class</span> <span className="text-[#38bdf8]">SystemSynchronizer</span> &#123;
                </p>
                <p className="pl-4 text-[#8a8f98]">// Zero-overhead state sync across Rust WASM & NestJS WebSocket</p>
                <p className="pl-4">
                  <span className="text-[#828fff]">async</span> dispatchStateTick(payload: GameTickEvent) &#123;
                </p>
                <p className="pl-8 text-[#d0d6e0]">
                  <span className="text-[#828fff]">const</span> tickDelta = <span className="text-[#38bdf8]">performance.now()</span>;
                </p>
                <p className="pl-8 text-[#d0d6e0]">
                  <span className="text-[#828fff]">await</span> this.gateway.broadcast(<span className="text-[#27a644]">&apos;tick&apos;</span>, payload);
                </p>
                <p className="pl-8 text-[#27a644]">
                  console.info(<span className="text-[#27a644]">&grave;[SYNC] Tick acknowledged in &#36;&#123;performance.now() - tickDelta&#125;ms&grave;</span>);
                </p>
                <p className="pl-4">&#125;</p>
                <p>&#125;</p>
              </div>
            )}

            {activeTab === "benchmarks" && (
              <div className="space-y-2 text-[#d0d6e0]">
                <p className="text-[#8a8f98]"># Running runtime performance audit on verified repos...</p>
                <div className="flex items-center justify-between text-xs py-1 border-b border-[#23252a]">
                  <span className="text-[#d0d6e0]">Paper.io Rust Core (WASM vs JS)</span>
                  <span className="text-[#27a644] font-bold">60 FPS Locked / 0 Heap Stalls</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-[#23252a]">
                  <span className="text-[#d0d6e0]">Rental App WebSocket Latency</span>
                  <span className="text-[#27a644] font-bold">&lt; 18ms Roundtrip</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-[#23252a]">
                  <span className="text-[#d0d6e0]">Coptic Dic pgvector Cosine Lookup</span>
                  <span className="text-[#38bdf8] font-bold">12ms across 10k segments</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-[#d0d6e0]">Scandiweb Hyvä E-Commerce</span>
                  <span className="text-[#27a644] font-bold">98/100 Core Web Vitals</span>
                </div>
              </div>
            )}
          </div>

          {/* Terminal Footer Bar */}
          <div className="px-4 py-2 bg-[#0c0d0e] border-t border-[#23252a] flex items-center justify-between text-[11px] text-[#8a8f98] font-mono">
            <span>READY — 0 errors, 0 warnings</span>
            <span className="text-[#828fff]">Interactive Developer Workspace</span>
          </div>
        </div>

        {/* Bento Metrics Bar */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
          {PORTFOLIO_DATA.personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#0f1011] border border-[#23252a] hover:border-[#34343a] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-black flex flex-col items-center justify-center text-center group"
            >
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1 group-hover:text-[#828fff] transition-colors">
                {stat.value}
              </span>
              <span className="text-xs text-[#8a8f98] font-medium leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
