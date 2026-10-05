"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 },
      });

      // Construct mailto link as fallback to open mail client automatically
      const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
        formData.subject || "Contact from Portfolio Website"
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs sm:text-sm uppercase tracking-widest font-mono text-cyan-400 mb-2">
            // Let&apos;s Connect
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact <span className="gradient-text-cyber">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-100 mb-2">
              Have a project in mind?
            </h3>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Feel free to reach out via direct email, phone call, or send me a message using the form. I&apos;m always excited to discuss new ideas or opportunities!
            </p>

            {/* Email Info Card */}
            <div className="glass-card rounded-2xl p-5 flex items-center justify-between group hover:border-cyan-500/50 transition-all">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex items-center gap-4 text-left flex-1"
              >
                <div className="p-3 rounded-xl glass-card bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Direct Email</div>
                  <div className="text-base font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {PORTFOLIO_DATA.personal.email}
                  </div>
                </div>
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-lg glass-card text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <Check className="w-5 h-5 text-emerald-400" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Phone Info Card */}
            <div className="glass-card rounded-2xl p-5 flex items-center justify-between group hover:border-violet-500/50 transition-all">
              <a
                href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                className="flex items-center gap-4 text-left flex-1"
              >
                <div className="p-3 rounded-xl glass-card bg-violet-500/10 text-violet-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Phone Number</div>
                  <div className="text-base font-semibold text-slate-100 group-hover:text-violet-400 transition-colors">
                    {PORTFOLIO_DATA.personal.phone}
                  </div>
                </div>
              </a>
              <button
                onClick={handleCopyPhone}
                className="p-2.5 rounded-lg glass-card text-slate-400 hover:text-violet-400 transition-colors cursor-pointer"
                title="Copy Phone Number"
              >
                {copiedPhone ? (
                  <Check className="w-5 h-5 text-emerald-400" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Location Info Card */}
            <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
              <div className="p-3 rounded-xl glass-card bg-emerald-500/10 text-emerald-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">Current Location</div>
                <div className="text-base font-semibold text-slate-100">
                  {PORTFOLIO_DATA.personal.location}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 relative">
              {submitted ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/40">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-slate-400 max-w-md mb-6">
                    Thank you for contacting me. Opening your mail app to send the message...
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-6 py-2.5 rounded-full glass-card text-sm font-semibold text-cyan-400 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-cyan-400" />
                    <span>Send Me a Message</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl glass-card bg-slate-900/60 border border-slate-700/60 focus:border-cyan-400 focus:outline-none transition-colors text-slate-100 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl glass-card bg-slate-900/60 border border-slate-700/60 focus:border-cyan-400 focus:outline-none transition-colors text-slate-100 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Project Inquiry / Collaboration"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl glass-card bg-slate-900/60 border border-slate-700/60 focus:border-cyan-400 focus:outline-none transition-colors text-slate-100 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project or inquiry..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl glass-card bg-slate-900/60 border border-slate-700/60 focus:border-cyan-400 focus:outline-none transition-colors text-slate-100 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cyber-button py-4 text-base flex items-center justify-center gap-2 shadow-xl cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
