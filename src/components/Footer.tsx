"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/60 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="font-bold text-lg gradient-text-cyber mb-1">
            {PORTFOLIO_DATA.personal.name}
          </div>
          <p className="text-xs text-slate-400 font-mono">
            &copy; {new Date().getFullYear()} All rights reserved. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-card hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-card hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-card hover:text-cyan-400 transition-colors"
            aria-label="Twitter"
          >
            <TwitterIcon className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.socials.email}
            className="p-2.5 rounded-full glass-card hover:text-cyan-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="p-3 rounded-full glass-card text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}
