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
        return <Code2 className="w-5 h-5 text-[#84b8ad]" />;
      case "realtime-systems":
        return <Radio className="w-5 h-5 text-[#84b8ad]" />;
      case "enterprise-ecommerce":
        return <ShoppingBag className="w-5 h-5 text-[#84b8ad]" />;
      case "ai-rag-pipelines":
        return <Cpu className="w-5 h-5 text-[#84b8ad]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#84b8ad]" />;
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d242d] border border-[#27313d] text-xs font-mono text-[#84b8ad] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#84b8ad]" />
          <span>CLIENT DELIVERABLES &amp; SERVICES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-display-lg text-[#e9e7e1] mb-4">
          What I Can Build For You.
        </h2>
        <p className="text-[#aab5c2] max-w-2xl text-base sm:text-lg leading-relaxed">
          High-conviction technical partnerships for startups, agencies, and international enterprises seeking uncompromising performance and clean architecture.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {PORTFOLIO_DATA.services.map((svc) => (
          <div
            key={svc.id}
            className="liquid-glass liquid-glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black group"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#252e3a] border border-[#27313d] flex items-center justify-center">
                {getServiceIcon(svc.id)}
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#e9e7e1] tracking-tight group-hover:text-[#84b8ad] transition-colors mb-1">
                  {svc.title}
                </h3>
                <p className="text-xs font-mono text-[#aab5c2]">
                  {svc.tagline}
                </p>
              </div>

              <p className="text-sm text-[#aab5c2] leading-relaxed">
                {svc.description}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono text-[#aab5c2] uppercase tracking-wider">
                  Key Deliverables
                </div>
                {svc.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#aab5c2]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#84b8ad] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Stack and CTA */}
            <div className="pt-6 mt-6 border-t border-[#27313d] space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {svc.stack.map((st, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#252e3a] text-[#aab5c2] border border-[#27313d]"
                  >
                    {st}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#84b8ad] hover:text-[#e9e7e1] transition-colors group/cta"
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
