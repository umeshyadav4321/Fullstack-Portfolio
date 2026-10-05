"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Menu, X, Download, Send } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import confetti from "canvas-confetti";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadResume = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.2 },
    });
    const link = document.createElement("a");
    link.href = PORTFOLIO_DATA.personal.resumeUrl;
    link.download = `${PORTFOLIO_DATA.personal.name.replace(/\s+/g, "_")}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 glass-nav shadow-lg" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
            {PORTFOLIO_DATA.personal.name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight gradient-text-cyber">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
              Portfolio.dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-cyan-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions & Theme Switcher */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-white transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-cyan-500" />
            )}
          </button>

          {/* Resume Download CTA */}
          <button
            onClick={handleDownloadResume}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold glass-card border border-cyan-500/30 text-cyan-400 hover:text-white hover:bg-cyan-500/20 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </button>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="cyber-button px-5 py-2 text-sm flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg glass-card text-slate-300"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-cyan-500" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded-lg glass-card text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav mt-3 border-t border-slate-800/50 py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium py-2 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-700/50 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleDownloadResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg glass-card border border-cyan-500/30 text-cyan-400 font-medium"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full cyber-button py-2.5 text-center flex items-center justify-center gap-2 text-sm font-semibold"
            >
              <Send className="w-4 h-4" />
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
