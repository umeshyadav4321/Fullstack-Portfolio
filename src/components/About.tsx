"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs sm:text-sm uppercase tracking-widest font-mono text-cyan-400 mb-2">
            // Get to know me
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About <span className="gradient-text-cyber">&amp; Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full mt-4" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-16">
          {PORTFOLIO_DATA.stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="text-3xl sm:text-5xl font-extrabold gradient-text-cyber mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Work Experience Section */}
        <div id="experience" className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold mb-10 flex items-center gap-3">
            <Briefcase className="w-7 h-7 text-cyan-400" />
            <span>Work History</span>
          </h3>

          <div className="relative border-l-2 border-slate-800/80 pl-6 sm:pl-10 space-y-12">
            {PORTFOLIO_DATA.experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-white" />
                </div>

                <div className="glass-card rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-100">
                        {exp.role}
                      </h4>
                      <div className="text-cyan-400 font-semibold">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1.5 glass-card px-3 py-1 rounded-full">
                        <Calendar className="w-3.5 h-3.5 text-violet-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 glass-card px-3 py-1 rounded-full">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6 text-sm sm:text-base text-slate-300">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                    {exp.skills.map((skill, sIndex) => (
                      <span
                        key={sIndex}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
