"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  MessageSquare,
  Clock,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function ContactSection() {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Full-Stack Web Application");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Live Cairo local time
  const [cairoTime, setCairoTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "Africa/Cairo",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date());
        setCairoTime(timeStr);
      } catch (e) {
        setCairoTime("EET (UTC+2)");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatusMessage("Please complete all required fields before submitting.");
      return;
    }

    const subject = encodeURIComponent(`Project Inquiry: ${service} (via Portfolio)`);
    const bodyContent = `Hello Mina,\n\nMy name is ${name} (${email}).\nI am reaching out regarding: ${service}\n\nProject details:\n${message}\n\nLooking forward to hearing from you!`;
    const mailtoUrl = `mailto:${personal.email}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

    // Copy formatted text to clipboard so nothing is lost
    navigator.clipboard.writeText(bodyContent);

    // Open mail client
    window.location.href = mailtoUrl;

    setStatusMessage(
      "Message draft copied to clipboard and your email client has opened. Looking forward to speaking!"
    );
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f1011] border border-[#23252a] text-xs font-mono text-[#828fff] mb-4">
          <MessageSquare className="w-3.5 h-3.5 text-[#5e6ad2]" />
          <span>START A CONVERSATION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-display-lg text-white mb-4">
          Let&apos;s Build Something Extraordinary.
        </h2>
        <p className="text-[#8a8f98] max-w-2xl text-base sm:text-lg leading-relaxed">
          Whether you need a dedicated full-stack engineer for your team, an enterprise e-commerce overhaul, or an ultra-low latency real-time engine—I am ready.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact Info Bento Column - 2 cols on desktop */}
        <div className="lg:col-span-2 space-y-4">
          {/* Verified Direct Email Card */}
          <div className="p-6 rounded-2xl bg-[#0f1011] border border-[#23252a] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#8a8f98]">VERIFIED EMAIL</span>
              <button
                onClick={handleCopyEmail}
                className="text-xs font-mono text-[#828fff] hover:text-white flex items-center gap-1 transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-[#27a644]" />
                    <span className="text-[#27a644]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <a
              href={`mailto:${personal.email}`}
              className="text-sm sm:text-base font-bold text-white hover:text-[#828fff] transition-colors break-all block"
            >
              {personal.email}
            </a>
            <p className="text-xs text-[#8a8f98]">
              Typically responds within 12–24 hours on business days.
            </p>
          </div>

          {/* Verified Phone & WhatsApp */}
          <div className="p-6 rounded-2xl bg-[#0f1011] border border-[#23252a] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#8a8f98]">PHONE & WHATSAPP</span>
              <button
                onClick={handleCopyPhone}
                className="text-xs font-mono text-[#828fff] hover:text-white flex items-center gap-1 transition-colors"
                title="Copy phone to clipboard"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3 h-3 text-[#27a644]" />
                    <span className="text-[#27a644]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div className="flex items-center justify-between">
              <a
                href={`tel:+201098734124`}
                className="text-sm sm:text-base font-bold text-white hover:text-[#828fff] transition-colors"
              >
                {personal.phone}
              </a>
              <a
                href={`https://wa.me/201098734124`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#27a644] bg-[#27a644]/10 border border-[#27a644]/30 px-2 py-0.5 rounded"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Location & Cairo Live Clock */}
          <div className="p-6 rounded-2xl bg-[#0f1011] border border-[#23252a] space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-[#8a8f98]">
              <span>BASE LOCATION</span>
              <div className="flex items-center gap-1.5 text-white">
                <Clock className="w-3.5 h-3.5 text-[#5e6ad2]" />
                <span>{cairoTime || "Cairo, Egypt"}</span>
              </div>
            </div>
            <div className="text-sm font-semibold text-white">
              Shubra, Cairo, Egypt
            </div>
            <div className="text-xs text-[#8a8f98]">
              Comfortable working across UTC-5 (US Eastern) to UTC+4 (Gulf / Europe) timezone overlaps.
            </div>
          </div>

          {/* Social Profiles */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#0f1011] border border-[#23252a] hover:border-[#3e3e44] transition-colors flex items-center gap-3 group"
            >
              <GithubIcon className="w-5 h-5 text-[#8a8f98] group-hover:text-white transition-colors" />
              <div>
                <div className="text-xs font-semibold text-white">GitHub</div>
                <div className="text-[10px] font-mono text-[#8a8f98]">
                  @{personal.githubHandle}
                </div>
              </div>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#0f1011] border border-[#23252a] hover:border-[#3e3e44] transition-colors flex items-center gap-3 group"
            >
              <LinkedinIcon className="w-5 h-5 text-[#8a8f98] group-hover:text-white transition-colors" />
              <div>
                <div className="text-xs font-semibold text-white">LinkedIn</div>
                <div className="text-[10px] font-mono text-[#8a8f98]">
                  @{personal.linkedinHandle}
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* High-Conversion Contact Form - 3 cols on desktop */}
        <div className="lg:col-span-3 rounded-2xl bg-[#0f1011] border border-[#23252a] p-6 sm:p-8 flex flex-col justify-between">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                Send a Direct Project Message
              </h3>
              <p className="text-xs sm:text-sm text-[#8a8f98]">
                Fill out the brief scope below. Submitting will pre-fill a direct mailto dispatch and copy your message text to your clipboard.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#d0d6e0]">
                  Your Name <span className="text-[#ff5f56]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Henderson"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141516] border border-[#23252a] focus:border-[#5e6ad2] text-white text-xs sm:text-sm placeholder-[#62666d] outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#d0d6e0]">
                  Your Email <span className="text-[#ff5f56]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141516] border border-[#23252a] focus:border-[#5e6ad2] text-white text-xs sm:text-sm placeholder-[#62666d] outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[#d0d6e0]">
                Project Scope / Engagement Type
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141516] border border-[#23252a] focus:border-[#5e6ad2] text-white text-xs sm:text-sm outline-none transition-colors"
              >
                <option value="Full-Stack Web Application (Next.js & NestJS)">
                  Full-Stack Web Application (Next.js & NestJS)
                </option>
                <option value="Real-Time Systems & WebSockets">
                  Real-Time Systems & WebSockets (Rust / WASM)
                </option>
                <option value="Enterprise E-Commerce (Magento 2 & Hyvä)">
                  Enterprise E-Commerce (Magento 2 & Hyvä)
                </option>
                <option value="AI / RAG & Vector Pipeline (FastAPI & pgvector)">
                  AI / RAG & Vector Pipeline (FastAPI & pgvector)
                </option>
                <option value="Full-Time Engineering Role (Senior / Mid)">
                  Full-Time Engineering Role (Senior / Mid)
                </option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[#d0d6e0]">
                Message & Requirements <span className="text-[#ff5f56]">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell me about your project, timeline, budget, or engineering needs..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141516] border border-[#23252a] focus:border-[#5e6ad2] text-white text-xs sm:text-sm placeholder-[#62666d] outline-none transition-colors resize-none"
              ></textarea>
            </div>

            {statusMessage && (
              <div className="p-3 rounded-xl bg-[#27a644]/10 border border-[#27a644]/30 text-xs text-[#27a644]">
                {statusMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#5e6ad2] hover:bg-[#828fff] text-white text-sm font-medium transition-all shadow-lg shadow-[#5e6ad2]/20"
            >
              <Send className="w-4 h-4" />
              <span>Send Message to Mina</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
