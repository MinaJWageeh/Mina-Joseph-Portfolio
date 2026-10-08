"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Code2,
  Radio,
  ShoppingBag,
  Cpu,
} from "lucide-react";

export function ServicesSection() {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "fullstack-saas":
        return <Code2 className="w-5 h-5 text-[#5e6ad2]" />;
      case "realtime-systems":
        return <Radio className="w-5 h-5 text-[#828fff]" />;
      case "enterprise-ecommerce":
        return <ShoppingBag className="w-5 h-5 text-[#f59e0b]" />;
      case "ai-rag-pipelines":
        return <Cpu className="w-5 h-5 text-[#38bdf8]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#5e6ad2]" />;
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f1011] border border-[#23252a] text-xs font-mono text-[#828fff] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#5e6ad2]" />
          <span>CLIENT DELIVERABLES & SERVICES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-display-lg text-white mb-4">
          What I Can Build For You.
        </h2>
        <p className="text-[#8a8f98] max-w-2xl text-base sm:text-lg leading-relaxed">
          High-conviction technical partnerships for startups, agencies, and international enterprises seeking uncompromising performance and clean architecture.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {PORTFOLIO_DATA.services.map((svc) => (
          <div
            key={svc.id}
            className="rounded-2xl bg-[#0f1011] border border-[#23252a] hover:border-[#3e3e44] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black group"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#141516] border border-[#23252a] flex items-center justify-center">
                {getServiceIcon(svc.id)}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#828fff] transition-colors mb-1">
                  {svc.title}
                </h3>
                <p className="text-xs font-mono text-[#8a8f98]">
                  {svc.tagline}
                </p>
              </div>

              <p className="text-sm text-[#d0d6e0] leading-relaxed">
                {svc.description}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono text-[#8a8f98] uppercase tracking-wider">
                  Key Deliverables
                </div>
                {svc.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#8a8f98]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5e6ad2] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Stack and CTA */}
            <div className="pt-6 mt-6 border-t border-[#23252a] space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {svc.stack.map((st, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#141516] text-[#8a8f98] border border-[#23252a]"
                  >
                    {st}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#828fff] hover:text-white transition-colors group/cta"
              >
                <span>Initiate project inquiry</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
