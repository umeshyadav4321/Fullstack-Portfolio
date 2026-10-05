"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Code2, Cpu, Cloud, Sparkles } from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      case 1:
        return <Cpu className="w-6 h-6 text-violet-400" />;
      default:
        return <Cloud className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs sm:text-sm uppercase tracking-widest font-mono text-cyan-400 mb-2">
            // My Technical Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Skills &amp; <span className="gradient-text-cyber">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.skillCategories.map((cat, catIndex) => (
            <div
              key={catIndex}
              className="glass-card rounded-3xl p-8 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl glass-card bg-cyan-500/10">
                    {getCategoryIcon(catIndex)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIndex) => (
                    <div
                      key={sIndex}
                      className="flex items-center justify-between p-3 rounded-xl glass-card bg-slate-900/40 hover:bg-slate-800/60 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="font-semibold text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      {skill.level && (
                        <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/60 text-xs text-slate-400 font-mono text-center">
                {cat.skills.length} core technologies mastered
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
