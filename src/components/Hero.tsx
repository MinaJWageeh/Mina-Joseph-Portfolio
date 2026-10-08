"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  ArrowUpRight,
  ArrowDown,
  Terminal,
  Download,
  Send,
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
      {/* Background architectural grid pattern */}
      <div className="absolute inset-0 grid-bg-subtle pointer-events-none opacity-40"></div>

      {/* Atmospheric ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#84b8ad]/10 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Eyebrow status pill matching reference */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d242d] border border-[#27313d] text-xs font-medium mb-8 shadow-lg shadow-black/20 hover:border-[#84b8ad]/50 transition-colors animate-float">
          <span className="w-2 h-2 rounded-full bg-[#84b8ad] animate-pulse"></span>
          <span className="text-[#aab5c2]">CREATIVE DEVELOPER</span>
          <span className="w-1 h-1 rounded-full bg-[#354353]"></span>
          <span className="text-[#84b8ad] font-mono">Cairo, Egypt</span>
        </div>

        {/* Hero Portrait Showcase with Floating Badges */}
        <div className="relative mb-8 flex items-center justify-center">
          <div className="portrait-glow rounded-3xl p-1 bg-gradient-to-b from-[#27313d] to-[#1d242d]">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-[#27313d] shadow-2xl bg-[#1d242d]">
              <Image
                src={PORTFOLIO_DATA.personal.profilePhoto}
                alt="Mina Joseph Wageh"
                fill
                priority
                sizes="(max-width: 640px) 112px, 144px"
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Floating Badge 1: Scandiweb Experience */}
          <div className="hidden sm:flex absolute -top-3 -right-24 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1d242d]/95 backdrop-blur-md border border-[#27313d] shadow-xl text-[11px] font-mono text-[#e9e7e1] animate-float">
            <Zap className="w-3.5 h-3.5 text-[#84b8ad]" />
            <span>Ex-Scandiweb Developer</span>
          </div>

          {/* Floating Badge 2: Honors Engineer */}
          <div className="hidden sm:flex absolute -bottom-3 -left-28 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1d242d]/95 backdrop-blur-md border border-[#27313d] shadow-xl text-[11px] font-mono text-[#e9e7e1] animate-float-delayed">
            <Award className="w-3.5 h-3.5 text-[#84b8ad]" />
            <span>Honors Engineer (Benha Univ)</span>
          </div>

          {/* Floating Badge 3: Multi-paradigm Stack */}
          <div className="hidden md:flex absolute top-1/2 -right-36 -translate-y-1/2 items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1d242d]/95 backdrop-blur-md border border-[#27313d] shadow-xl text-[11px] font-mono text-[#e9e7e1] animate-float-reverse">
            <Code2 className="w-3.5 h-3.5 text-[#84b8ad]" />
            <span>Rust • Next.js • NestJS</span>
          </div>
        </div>

        {/* Main Headline incorporating reference styling */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-display-xl text-[#e9e7e1] max-w-4xl leading-[1.08] mb-4">
          <span className="text-[#84b8ad]">.</span>Building digital experiences & high-performance systems.
        </h1>

        {/* Editorial Subhead */}
        <p className="text-base sm:text-lg md:text-xl text-[#aab5c2] max-w-2xl mb-8 leading-relaxed font-normal">
          <span className="text-[#e9e7e1] font-medium">.Elegant interfaces. Thoughtful interactions. Meaningful architecture.</span>
          <br className="hidden sm:inline" />
          Honors Electrical Engineer turned Full-Stack Craftsman. Engineering robust platforms across{" "}
          <span className="text-[#e9e7e1] font-medium">Next.js</span>,{" "}
          <span className="text-[#e9e7e1] font-medium">Rust/WASM</span>,{" "}
          <span className="text-[#e9e7e1] font-medium">NestJS</span>, and{" "}
          <span className="text-[#e9e7e1] font-medium">PostgreSQL</span>.
        </p>

        {/* Primary CTA button cluster with reference styling */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
          <a
            href="#projects"
            className="btn-accent shimmer-btn flex items-center gap-2 px-6 py-3 rounded-full bg-[#84b8ad] hover:bg-[#98c8be] text-[#11151b] font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#84b8ad]/20"
          >
            <ArrowUpRight className="w-4 h-4" />
            <span>Explore my work</span>
          </a>

          <a
            href={PORTFOLIO_DATA.personal.cvPath}
            download="Mina_Joseph_Full_Stack_CV.pdf"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#1d242d] hover:bg-[#252e3a] border border-[#27313d] hover:border-[#354353] text-[#e9e7e1] font-medium text-sm transition-all duration-200"
          >
            <Download className="w-4 h-4 text-[#84b8ad]" />
            <span>Download Verified CV</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-transparent hover:bg-white/5 border border-[#27313d] text-[#aab5c2] hover:text-[#e9e7e1] font-medium text-sm transition-all duration-200"
          >
            <Send className="w-4 h-4 text-[#84b8ad]" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Interactive Live Terminal */}
        <div className="w-full max-w-4xl text-left rounded-2xl bg-[#1d242d] border border-[#27313d] shadow-2xl shadow-black/40 overflow-hidden mb-12">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#252e3a] border-b border-[#27313d]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f]/80"></span>
              <div className="ml-2 flex items-center gap-1.5 text-xs font-mono text-[#aab5c2]">
                <Terminal className="w-3.5 h-3.5 text-[#84b8ad]" />
                <span>mina@production:~/system-status</span>
              </div>
            </div>

            {/* Quick Command Selector Tabs */}
            <div className="flex items-center gap-1 bg-[#11151b] p-1 rounded-lg border border-[#27313d]">
              <button
                onClick={() => setActiveTab("overview")}
                className={`text-xs px-2.5 py-1 rounded-md transition-colors font-mono ${
                  activeTab === "overview"
                    ? "bg-[#252e3a] text-[#84b8ad] font-semibold"
                    : "text-[#aab5c2] hover:text-[#e9e7e1]"
                }`}
              >
                profile.json
              </button>
              <button
                onClick={() => setActiveTab("architecture")}
                className={`text-xs px-2.5 py-1 rounded-md transition-colors font-mono ${
                  activeTab === "architecture"
                    ? "bg-[#252e3a] text-[#84b8ad] font-semibold"
                    : "text-[#aab5c2] hover:text-[#e9e7e1]"
                }`}
              >
                architecture.ts
              </button>
              <button
                onClick={() => setActiveTab("benchmarks")}
                className={`text-xs px-2.5 py-1 rounded-md transition-colors font-mono ${
                  activeTab === "benchmarks"
                    ? "bg-[#252e3a] text-[#84b8ad] font-semibold"
                    : "text-[#aab5c2] hover:text-[#e9e7e1]"
                }`}
              >
                metrics.sh
              </button>
            </div>
          </div>

          {/* Terminal Content Body */}
          <div className="p-5 font-mono text-xs sm:text-sm bg-[#151b22] leading-relaxed overflow-x-auto min-h-[220px]">
            {activeTab === "overview" && (
              <div className="space-y-1 text-[#e9e7e1]">
                <p className="text-[#aab5c2]">// Verified Developer Profile & Systems Foundation</p>
                <p>
                  <span className="text-[#84b8ad]">const</span> developer = &#123;
                </p>
                <p className="pl-4">
                  name: <span className="text-[#84b8ad]">&quot;{PORTFOLIO_DATA.personal.name}&quot;</span>,
                </p>
                <p className="pl-4">
                  education: <span className="text-[#e9e7e1]">&quot;B.Sc. Electrical Power & Machines (Excellent with Honor)&quot;</span>,
                </p>
                <p className="pl-4">
                  academicStanding: <span className="text-[#84b8ad]">&quot;Ranked 6th Cumulatively (3rd Final 2 Yrs)&quot;</span>,
                </p>
                <p className="pl-4">
                  productionExperience: [
                  <span className="text-[#aab5c2]">&quot;Scandiweb (Magento 2 / Hyvä)&quot;</span>,{" "}
                  <span className="text-[#aab5c2]">&quot;Electrical Technical Office (3 Firms)&quot;</span>
                  ],
                </p>
                <p className="pl-4">
                  verifiedStack: [<span className="text-[#84b8ad]">&quot;TypeScript&quot;</span>, <span className="text-[#84b8ad]">&quot;Rust&quot;</span>, <span className="text-[#84b8ad]">&quot;Next.js&quot;</span>, <span className="text-[#84b8ad]">&quot;NestJS&quot;</span>, <span className="text-[#84b8ad]">&quot;FastAPI&quot;</span>, <span className="text-[#84b8ad]">&quot;PostgreSQL&quot;</span>],
                </p>
                <p className="pl-4">
                  availability: <span className="text-[#84b8ad]">&quot;Global Contracts & Full-Time&quot;</span>
                </p>
                <p>&#125;;</p>
              </div>
            )}

            {activeTab === "architecture" && (
              <div className="space-y-1 text-[#e9e7e1]">
                <p className="text-[#aab5c2]">// Monorepo & Real-Time Gateway Architecture</p>
                <p>
                  <span className="text-[#84b8ad]">import</span> &#123; WebSocketGateway, SubscribeMessage &#125;{" "}
                  <span className="text-[#84b8ad]">from</span> <span className="text-[#84b8ad]">&apos;@nestjs/websockets&apos;</span>;
                </p>
                <p>
                  <span className="text-[#84b8ad]">import</span> &#123; PrismaClient &#125;{" "}
                  <span className="text-[#84b8ad]">from</span> <span className="text-[#84b8ad]">&apos;@prisma/client&apos;</span>;
                </p>
                <p className="pt-2">
                  <span className="text-[#84b8ad]">export class</span> <span className="text-[#e9e7e1]">SystemSynchronizer</span> &#123;
                </p>
                <p className="pl-4 text-[#aab5c2]">// Zero-overhead state sync across Rust WASM & NestJS WebSocket</p>
                <p className="pl-4">
                  <span className="text-[#84b8ad]">async</span> dispatchStateTick(payload: GameTickEvent) &#123;
                </p>
                <p className="pl-8 text-[#e9e7e1]">
                  <span className="text-[#84b8ad]">const</span> tickDelta = <span className="text-[#84b8ad]">performance.now()</span>;
                </p>
                <p className="pl-8 text-[#e9e7e1]">
                  <span className="text-[#84b8ad]">await</span> this.gateway.broadcast(<span className="text-[#84b8ad]">&apos;tick&apos;</span>, payload);
                </p>
                <p className="pl-8 text-[#84b8ad]">
                  console.info(<span className="text-[#84b8ad]">&grave;[SYNC] Tick acknowledged in &#36;&#123;performance.now() - tickDelta&#125;ms&grave;</span>);
                </p>
                <p className="pl-4">&#125;</p>
                <p>&#125;</p>
              </div>
            )}

            {activeTab === "benchmarks" && (
              <div className="space-y-2 text-[#e9e7e1]">
                <p className="text-[#aab5c2]"># Running runtime performance audit on verified repos...</p>
                <div className="flex items-center justify-between text-xs py-1 border-b border-[#27313d]">
                  <span className="text-[#e9e7e1]">Paper.io Rust Core (WASM vs JS)</span>
                  <span className="text-[#84b8ad] font-bold">60 FPS Locked / 0 Heap Stalls</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-[#27313d]">
                  <span className="text-[#e9e7e1]">Rental App WebSocket Latency</span>
                  <span className="text-[#84b8ad] font-bold">&lt; 18ms Roundtrip</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-[#27313d]">
                  <span className="text-[#e9e7e1]">Coptic Dic pgvector Cosine Lookup</span>
                  <span className="text-[#84b8ad] font-bold">12ms across 10k segments</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-[#e9e7e1]">Scandiweb Hyvä E-Commerce</span>
                  <span className="text-[#84b8ad] font-bold">98/100 Core Web Vitals</span>
                </div>
              </div>
            )}
          </div>

          {/* Terminal Footer Bar */}
          <div className="px-4 py-2 bg-[#131820] border-t border-[#27313d] flex items-center justify-between text-[11px] text-[#aab5c2] font-mono">
            <span>READY — 0 errors, 0 warnings</span>
            <span className="text-[#84b8ad]">Interactive Developer Workspace</span>
          </div>
        </div>

        {/* Bento Metrics Bar */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
          {PORTFOLIO_DATA.personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#1d242d] border border-[#27313d] hover:border-[#354353] transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col items-center justify-center text-center group"
            >
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#84b8ad] mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </span>
              <span className="text-xs text-[#aab5c2] font-medium leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
