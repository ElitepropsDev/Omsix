import React, { useState } from "react";
import { 
  ArrowUpRight, 
  FolderKanban, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Exact Hero Background Styling & Dynamics
const HeroStyleBackground = ({ mouseX, mouseY }) => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base Dark Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0813] via-[#1a0e2e] to-[#0b0813]" />

      {/* Top Center Intense White/Pink Spotlight */}
      <motion.div
        animate={{ opacity: [0.5, 0.75, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 left-1/2 h-[550px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-500/35 via-white/50 to-purple-500/35 blur-[110px]"
      />

      {/* Center Bright Core Glow */}
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-pink-600/25 via-purple-500/20 to-cyan-400/15 blur-[140px]" />

      {/* Interactive Cursor Light with Bright White Center */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-white/40 via-pink-400/30 to-purple-500/25 blur-[80px] opacity-80"
        style={{ left: mouseX, top: mouseY }}
      />

      {/* Ambient Neon Accents (Left & Right) */}
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-pink-500/20 blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-purple-600/25 blur-[100px]" />

      {/* High-Tech Grid Pattern */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%)",
        }}
      />

      {/* Futuristic Linear Ray Accents */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </div>
  );
};

const SelectedProjects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: "01",
      title: "Agricultural Cooperative Platform",
      category: "Digital Solutions",
      tagline: "Digital infrastructure for a modern cooperative.",
      description:
        "A member-focused digital system designed to help an agricultural cooperative manage its members, information, and activities while creating a foundation for future data-driven services.",
      metrics: ["100% Digital Workflow", "Real-time Member Records", "Data-Driven Platform"],
      tags: ["Member Portal", "Database Systems", "Process Automation"],
      accentColor: "from-pink-500 to-rose-500",
    },
    {
      id: "02",
      title: "OSEMAN Engineering",
      category: "Web & Brand",
      tagline: "A professional digital presence for an engineering business.",
      description:
        "A corporate web presence designed to communicate the company's capabilities clearly and establish a credible digital point of contact.",
      metrics: ["Corporate Positioning", "Mobile Optimized", "Seamless Contact Flow"],
      tags: ["Corporate Web", "Brand Identity", "UX Design"],
      accentColor: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section id="projects" className="relative overflow-hidden py-24 text-white lg:py-32">
      <HeroStyleBackground />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-400/40 bg-pink-500/10 px-3 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_10px_#ec4899]" />
            <span className="text-[10px] font-medium tracking-widest text-pink-200 uppercase">
              Selected Projects
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl drop-shadow-md">
            Building Solutions That{" "}
            <span className="bg-gradient-to-r from-pink-400 via-red-300 to-purple-400 bg-clip-text text-transparent">
              Work in the Real World.
            </span>
          </h2>

          <p className="mt-4 text-base text-white/80 sm:text-lg">
            We don't just build technology for the sake of technology. We work around real business needs and develop solutions that can actually be used.
          </p>
        </div>

        {/* Interactive Split-Screen Display (No Traditional Cards) */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Interactive Navigation List */}
          <div className="space-y-4 lg:col-span-5">
            {projects.map((project, idx) => {
              const isActive = activeProject === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveProject(idx)}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl p-6 transition-all duration-500 border ${
                    isActive
                      ? "border-pink-500/60 bg-[#140b2b]/90 shadow-[0_10px_30px_rgba(236,72,153,0.2)]"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold tracking-wider ${isActive ? "text-pink-400" : "text-white/40"}`}>
                      PROJECT {project.id}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] text-white/70">
                      {project.category}
                    </span>
                  </div>

                  <h3 className={`mt-3 text-xl font-semibold transition-colors ${isActive ? "text-white" : "text-white/70 group-hover:text-white"}`}>
                    {project.title}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-xs text-white/60">
                    {project.tagline}
                  </p>

                  <div className="mt-4 flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-pink-300">
                      <span>Explore Overview</span>
                      <ChevronRight size={14} className={`transition-transform duration-300 ${isActive ? "translate-x-1" : ""}`} />
                    </div>

                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="h-2 w-2 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Project Monitor Stage */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, scale: 0.98, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-[#130a27]/95 via-[#0c061a]/90 to-[#170e30]/95 p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] lg:p-10"
              >
                {/* Stage Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-pink-400 uppercase">
                      Live Case Study
                    </span>
                    <h3 className="text-2xl font-bold text-white sm:text-3xl">
                      {projects[activeProject].title}
                    </h3>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-600 to-orange-500 text-white shadow-md">
                    <Sparkles size={20} />
                  </div>
                </div>

                {/* Stage Description & Value proposition */}
                <div className="mt-6 space-y-4">
                  <p className="text-sm font-medium text-pink-200">
                    {projects[activeProject].tagline}
                  </p>
                  <p className="text-xs leading-6 text-white/70 sm:text-sm">
                    {projects[activeProject].description}
                  </p>
                </div>

                {/* Key Deliverables Highlight */}
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <span className="text-[10px] font-bold tracking-wider text-white/50 uppercase">
                    Key Value Points
                  </span>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {projects[activeProject].metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-2 text-xs text-white/80">
                        <CheckCircle2 size={14} className="shrink-0 text-pink-400" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Footer */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].tags.map((tag, tIdx) => (
                      <span key={tIdx} className="rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-[10px] text-pink-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-orange-500 px-6 py-3 text-xs font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]">
                    <span>View Project Details</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dynamic Interactive Banner below */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-2xl sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/20 text-pink-400">
              <FolderKanban size={24} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">More Projects </h4>
              <p className="text-xs text-white/60">As we continue working with businesses and organisations, this space will showcase additional solutions, products and case studies.</p>
            </div>
          </div>
          <button className="flex shrink-0 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold text-white transition-all hover:border-pink-500/50 hover:bg-pink-500/10">
            <span>View All Projects</span>
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SelectedProjects;