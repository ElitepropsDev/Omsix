import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Globe,
  MessageSquare,
  Layers,
  Code2,
  Building,
  Zap,
} from "lucide-react";

// Creative Dynamic Ambient Background with Mode Switching
const DynamicCTABackground = ({ mouseX, mouseY, themeMode }) => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden transition-all duration-1000 ease-in-out">
      {/* Dynamic Base Gradient */}
      <div
        className={`absolute inset-0 transition-colors duration-1000 ${
          themeMode === "cosmic"
            ? "bg-gradient-to-b from-[#0b0813] via-[#150d28] to-[#07040d]"
            : "bg-gradient-to-b from-[#0b0813] via-[#1f0a21] to-[#09020f]"
        }`}
      />

      {/* Primary Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -top-40 left-1/2 h-[650px] w-[1000px] -translate-x-1/2 rounded-full blur-[130px] transition-all duration-1000 ${
          themeMode === "cosmic"
            ? "bg-gradient-to-r from-purple-600/30 via-pink-500/40 to-cyan-400/30"
            : "bg-gradient-to-r from-pink-600/40 via-red-500/35 to-amber-500/30"
        }`}
      />

      {/* Interactive Cursor Reactive Spotlight */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-[90px] opacity-70 transition-colors duration-700 pointer-events-none"
        style={{
          left: mouseX ?? "50%",
          top: mouseY ?? "50%",
          background:
            themeMode === "cosmic"
              ? "radial-gradient(circle, rgba(236,72,153,0.35) 0%, rgba(147,51,234,0.2) 50%, rgba(0,0,0,0) 80%)"
              : "radial-gradient(circle, rgba(244,63,94,0.4) 0%, rgba(217,70,239,0.25) 50%, rgba(0,0,0,0) 80%)",
        }}
      />

      {/* Secondary Accent Glows */}
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-pink-600/25 blur-[120px]" />
      <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full bg-purple-600/30 blur-[120px]" />

      {/* Grid Pattern Mesh Overlay */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Ambient Top and Bottom Borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </div>
  );
};

const CTASection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [themeMode, setThemeMode] = useState("cosmic"); // "cosmic" | "aurora"
  const [selectedService, setSelectedService] = useState("Digital Infrastructure");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const services = [
    { id: "Digital Infrastructure", icon: <Layers size={14} />, label: "Infrastructure" },
    { id: "Corporate Web", icon: <Building size={14} />, label: "Corporate Web" },
    { id: "Custom Software", icon: <Code2 size={14} />, label: "Custom Software" },
    { id: "Consultation", icon: <Zap size={14} />, label: "Consultation" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden py-24 text-white lg:py-32"
    >
      <DynamicCTABackground
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        themeMode={themeMode}
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
       

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-400/40 bg-pink-500/10 px-3 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_10px_#ec4899]" />
            <span className="text-[10px] font-medium tracking-widest text-pink-200 uppercase">
              Start A Project
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl drop-shadow-md">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 bg-clip-text text-transparent">
              Useful.
            </span>
          </h2>

          <p className="mt-4 text-base text-white/80 sm:text-lg max-w-2xl mx-auto">
            Have a business idea, a problem that needs solving, or something you want to improve? <br />
            Tell us what you're working on. We'll help you figure out the next step.

          </p>
        </div>

        {/* Interactive Main Form Container */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12 items-start">
          {/* Left Side Info Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-white/15 bg-[#0b0716]/80 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Get in Touch
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                Reach out through any of our channels.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-white/50 uppercase tracking-wider">
                      Email Us
                    </h4>
                    <a
                      href="mailto:hello@omsix.com"
                      className="text-base font-semibold text-white hover:text-pink-300 transition-colors"
                    >
                      hello@omsix.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-Card Highlight */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-medium text-pink-300">
                <Sparkles size={14} />
                <span>Our Engagement Promise</span>
              </div>
              <p className="mt-2 text-xs text-white/70 leading-relaxed">
                Clear communication, practical milestones, and transparent execution from day one.
              </p>
            </div>
          </div>

          {/* Right Side Interactive Form */}
          <div className="lg:col-span-7 rounded-3xl border border-white/15 bg-[#0b0716]/80 p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-500/20 text-pink-400 border border-pink-500/40">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="mt-2 text-sm text-white/70 max-w-md mx-auto">
                    Thank you for reaching out to OMSIX. We have received your inquiry regarding <span className="text-pink-300 font-medium">{selectedService}</span> and will respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white/20"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Selector Chips */}
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-3">
                      What can we help you with?
                    </label>
                    
                  </div>

                  {/* Inputs */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-colors focus:border-pink-500/60 focus:bg-white/10 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-colors focus:border-pink-500/60 focus:bg-white/10 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-2">
                      Project Details & Goals
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about what you want to build or improve..."
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 transition-colors focus:border-pink-500/60 focus:bg-white/10 focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 p-[1px] font-semibold text-white shadow-[0_0_25px_rgba(236,72,153,0.4)] transition-all hover:shadow-[0_0_35px_rgba(236,72,153,0.6)]"
                  >
                    <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b0716] px-6 py-3.5 text-sm transition-colors group-hover:bg-transparent">
                      {loading ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      ) : (
                        <>
                          <span>Start a Conversation </span>
                          <Send size={15} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </div>
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;