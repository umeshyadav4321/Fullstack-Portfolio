"use client";

import React from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Download, Mail, Phone, ArrowDown, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import confetti from "canvas-confetti";

export default function Hero() {
  const handleDownloadResume = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.4 },
    });
    const link = document.createElement("a");
    link.href = PORTFOLIO_DATA.personal.resumeUrl;
    link.download = `${PORTFOLIO_DATA.personal.name.replace(/\s+/g, "_")}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      {/* Background Cyber Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-cyan-500/30 text-xs sm:text-sm font-medium mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-slate-300">{PORTFOLIO_DATA.personal.status}</span>
        </div>

        {/* Profile Photo Avatar with Cyber Glow Ring */}
        <div className="relative group mb-8">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500 group-hover:scale-105"></div>
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-white/20 glass-card">
            <Image
              src={PORTFOLIO_DATA.personal.avatar}
              alt={PORTFOLIO_DATA.personal.name}
              fill
              sizes="(max-width: 768px) 144px, 176px"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              priority
            />
          </div>
        </div>

        {/* Name & Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
          Hi, I&apos;m{" "}
          <span className="gradient-text-cyber">
            {PORTFOLIO_DATA.personal.name}
          </span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 mb-6 max-w-3xl">
          {PORTFOLIO_DATA.personal.title}
        </h2>

        {/* Bio Description */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
          {PORTFOLIO_DATA.personal.bio}
        </p>

        {/* Action CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-12">
          {/* Download Resume Button */}
          <button
            onClick={handleDownloadResume}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full glass-card border border-cyan-400/50 text-cyan-300 hover:text-white font-semibold flex items-center justify-center gap-2 hover:bg-cyan-500/20 transition-all hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
          >
            <Download className="w-5 h-5 text-cyan-400" />
            <span>Download Resume</span>
          </button>

          {/* Contact Me Button */}
          <a
            href="#contact"
            className="w-full sm:w-auto cyber-button px-8 py-3.5 text-base flex items-center justify-center gap-2 shadow-lg"
          >
            <Mail className="w-5 h-5" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Direct Quick Contact Links (Email & Phone) */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-mono text-slate-400">
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors py-1 px-3 rounded-lg glass-card"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>{PORTFOLIO_DATA.personal.email}</span>
          </a>

          <a
            href={`tel:${PORTFOLIO_DATA.personal.phone}`}
            className="flex items-center gap-2 hover:text-violet-400 transition-colors py-1 px-3 rounded-lg glass-card"
          >
            <Phone className="w-4 h-4 text-violet-400" />
            <span>{PORTFOLIO_DATA.personal.phone}</span>
          </a>

          <a
            href={PORTFOLIO_DATA.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg glass-card hover:text-cyan-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={PORTFOLIO_DATA.personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg glass-card hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-16 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="w-6 h-6 text-slate-500 hover:text-cyan-400 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
