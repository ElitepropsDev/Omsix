import React, { useState } from "react";
import { 
  ArrowRight, 
  Layers, 
  Zap, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Users, 
  Workflow 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// High-Energy Kinetic Background with Diagonal Light Rays
const KineticSectionBackground = ({ activeMode }) => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base Gradient - Dynamic Shift Based on Active Mode */}
      <div 
        className={`absolute inset-0 transition-colors duration-1000 ${
          activeMode === "old"
            ? "bg-gradient-to-b from-[#120818] via-[#1a0b22] to-[#120818]"
            : "bg-gradient-to-b from-[#180e2e] via-[#2a174f] to-[#1d1238]"
        }`}
      />

      {/* Primary Directional Top-Right Spot */}
      <motion.div
        animate={{ 
          opacity: activeMode === "old" ? [0.3, 0.5, 0.3] : [0.6, 0.9, 0.6], 
          scale: [1, 1.08, 1] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -top-40 -right-20 h-[600px] w-[800px] rounded-full blur-[110px] transition-colors duration-1000 ${
          activeMode === "old"
            ? "bg-gradient-to-br from-red-600/20 via-orange-500/10 to-transparent"
            : "bg-gradient-to-br from-pink-500/40 via-white/60 to-purple-500/40"
        }`}
      />

      {/* Central Light Core */}
      <div 
        className={`absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] transition-all duration-1000 ${
          activeMode === "old"
            ? "bg-gradient-to-tr from-red-500/10 via-purple-900/20 to-transparent"
            : "bg-gradient-to-tr from-pink-500/35 via-white/30 to-cyan-300/25"
        }`}
      />

      {/* Diagonal High-Speed Light Sweeps */}
      <motion.div
        animate={{ x: ["-100%", "200%"], y: ["-100%", "200%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className={`absolute top-0 left-0 h-[2px] w-[600px] -rotate-45 blur-sm transition-colors duration-1000 ${
          activeMode === "old"
            ? "bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
            : "bg-gradient-to-r from-transparent via-pink-400/80 to-transparent"
        }`}
      />

      {/* High-Tech Grid Pattern */}
      <div
        className="absolute inset-0 opacity-55 mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.7) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 70%, transparent 100%)",
        }}
      />

      {/* Top & Bottom Glass Rim Lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
    </div>
  );
};

const Proposition = () => {
  const [mode, setMode] = useState("omsix"); // "old" | "omsix"

  const workflowSteps = [
    { step: "01", title: "Concept" },
    { step: "02", title: "Setup" },
    { step: "03", title: "Digital Presence" },
    { step: "04", title: "Customer Acquisition" },
    { step: "05", title: "Ongoing Improvement" },
  ];

  return (
    <section id="proposition" className="relative overflow-hidden py-24 text-white lg:py-32">
      <KineticSectionBackground activeMode={mode} />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-400/40 bg-pink-500/10 px-3 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_10px_#ec4899]" />
            <span className="text-[10px] font-medium tracking-widest text-pink-200 uppercase">
              End-to-End Proposition
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl drop-shadow-md">
            One Partner.{" "}
            <span className="bg-gradient-to-r from-pink-400 via-red-300 to-purple-400 bg-clip-text text-transparent">
              End-to-End.
            </span>
          </h2>

          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Stop Chasing Different Service Providers.
          </p>

          {/* Interactive Mode Toggle Switcher */}
          <div className="mt-10 flex justify-center">
            <div className="relative flex rounded-2xl border border-white/20 bg-[#0a0614]/90 p-1.5 backdrop-blur-xl shadow-2xl">
              <button
                onClick={() => setMode("old")}
                className={`relative z-10 flex items-center gap-2 rounded-xl px-6 py-3 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                  mode === "old" ? "text-white" : "text-white/50 hover:text-white"
                }`}
              >
                <Users size={16} />
                <span>The Old Way (5+ Vendors)</span>
              </button>

              <button
                onClick={() => setMode("omsix")}
                className={`relative z-10 flex items-center gap-2 rounded-xl px-6 py-3 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                  mode === "omsix" ? "text-white" : "text-white/50 hover:text-white"
                }`}
              >
                <Zap size={16} />
                <span>The OMSIX Way (1 Partner)</span>
              </button>

              {/* Sliding Active Pill */}
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={`absolute top-1.5 bottom-1.5 rounded-xl ${
                  mode === "old"
                    ? "left-1.5 w-[calc(50%-0.375rem)] bg-gradient-to-r from-red-600 to-orange-600 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                    : "left-[calc(50%+0.375rem)] w-[calc(50%-0.375rem)] bg-gradient-to-r from-pink-600 to-orange-500 shadow-[0_0_25px_rgba(236,72,153,0.5)]"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Dynamic Display Stage */}
        <div className="mt-14 min-h-[420px]">
          <AnimatePresence mode="wait">
            {mode === "old" ? (
              /* THE OLD WAY (CHAOS VIEW) */
              <motion.div
                key="old-view"
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative overflow-hidden rounded-3xl border border-red-500/30 bg-[#0e0714]/85 p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] lg:p-12"
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-300">
                      <XCircle size={14} />
                      <span>Fragmented & Uncoordinated</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                      Chasing 5 Different People Kills Momentum
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-white/70 sm:text-sm">
                      Starting or growing a business often means dealing with separate vendors who don't talk to each other. You become the stressed middleman trying to stitch everything together.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md lg:w-[380px]">
                    <div className="flex items-center gap-2 text-xs font-semibold text-red-400">
                      <Clock size={14} />
                      <span>High Overhead & Misalignment</span>
                    </div>
                    <div className="h-px bg-white/10" />
                    <ul className="space-y-2 text-xs text-white/60">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        <span>Logo designer doesn't consider web layouts</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        <span>Developer builds without business strategy</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        <span>Marketer works isolated from brand tone</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Scattered Vendor Badges */}
                <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                  {[
                    "Graphic Designer (Logo)",
                    "Developer (Website)",
                    "Registration Agent (CAC)",
                    "Document Specialist",
                    "Digital Marketer",
                  ].map((vendor, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-2xl border border-red-500/20 bg-red-500/5 p-4 text-xs font-medium text-red-200/80"
                    >
                      <span>{vendor}</span>
                      <XCircle size={14} className="text-red-400/60" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* THE OMSIX WAY (UNIFIED STREAMLINED VIEW) */
              <motion.div
                key="omsix-view"
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative overflow-hidden rounded-3xl border border-pink-500/50 bg-gradient-to-br from-[#160b2e]/95 via-[#0e061c]/90 to-[#120824]/95 p-8 backdrop-blur-2xl shadow-[0_25px_70px_rgba(236,72,153,0.25)] lg:p-12"
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-pink-400/40 bg-pink-500/10 px-3 py-1 text-xs font-semibold text-pink-300">
                      <Sparkles size={14} />
                      <span>Single Focal Hub</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                      One Partner. The Big Picture Covered.
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-white/80 sm:text-sm">
                      OMSIX brings business strategy, technology, and creative execution together under one roof. Less coordination for you, total alignment for your business.
                    </p>
                  </div>

                  {/* High Tech Command Card */}
                  <div className="flex flex-col gap-3 rounded-2xl border border-pink-500/30 bg-white/5 p-5 backdrop-blur-md lg:w-[380px]">
                    <div className="flex items-center gap-2 text-xs font-semibold text-pink-300">
                      <ShieldCheck size={16} />
                      <span>One Relationship. Multiple Solutions.</span>
                    </div>
                    <div className="h-px bg-white/10" />
                    <p className="text-xs text-white/70">
                      Whether starting from an idea or expanding, we align your branding, digital infrastructure, and growth channels seamlessly.
                    </p>
                    <button className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-orange-500 py-3 text-xs font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]">
                      <span>Tell Us What You Need</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Unified Capabilities Ribbon */}
                <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Business Setup & Strategy",
                    "Digital Tools & Websites",
                    "Brand Identity & Creative Media",
                  ].map((capability, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-2xl border border-pink-500/30 bg-pink-500/10 p-4 text-xs font-semibold text-white shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-500/20 text-pink-300">
                          <CheckCircle2 size={14} />
                        </span>
                        <span>{capability}</span>
                      </div>
                      <span className="text-[10px] text-pink-300/80">Unified</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* From Idea to Growth Timeline (Unchanged Layout) */}
        <div className="mt-14 rounded-3xl border border-white/15 bg-[#0a0614]/80 p-8 backdrop-blur-2xl">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-pink-300 uppercase">
            <Workflow size={14} />
            <span>From Idea to Growth</span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition-all duration-300 hover:border-pink-500/40 hover:bg-white/10"
              >
                <span className="text-[10px] font-bold text-pink-400">{step.step}</span>
                <p className="mt-1 text-xs font-medium text-white">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposition;