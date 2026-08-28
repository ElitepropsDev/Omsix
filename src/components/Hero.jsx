import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import dashboardImg from '../assets/business-growth-dashboard.png';
import { motion } from "framer-motion";

const Hero = () => {
  // Stagger animation variants for text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#07050a] text-white"
    >
      {/* =====================================================
          BACKGROUND AMBIENT GLOWS & GRID (WITH ANIMATED GLOWS)
      ====================================================== */}

      {/* Primary Top-Center Intense White Light Source */}
      <motion.div
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 -top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/25 blur-[100px]"
      />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[200px] w-[350px] -translate-x-1/2 rounded-full bg-white/40 blur-[60px]" />

      {/* Primary Top-Right Crimson Glow */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 -top-20 h-[550px] w-[550px] rounded-full bg-red-600/35 blur-[130px]"
      />

      {/* Top-Right Pink Core Accent with Bold White Highlight */}
      <div className="pointer-events-none absolute right-10 top-10 h-[300px] w-[300px] rounded-full bg-pink-500/30 blur-[90px]" />
      <div className="pointer-events-none absolute right-20 top-20 h-[160px] w-[160px] rounded-full bg-white/40 blur-[45px]" />

      {/* Secondary Bottom-Left Dark Purple Glow */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-purple-900/25 blur-[140px]" />

      {/* Background Fine Dot Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%)",
        }}
      />

      {/* Curved Background Tech Wave lines */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1440 900"
        >
          <path
            d="M-100 400C300 200 800 700 1500 200"
            stroke="url(#wave-gradient)"
            strokeWidth="1.5"
          />
          <path
            d="M-100 450C350 250 850 750 1550 250"
            stroke="url(#wave-gradient)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="30%" stopColor="#ec4899" stopOpacity="0.7" />
              <stop offset="70%" stopColor="#ef4444" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* =====================================================
          HERO GRID CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-8 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-12 lg:pb-24 lg:pt-36">
        
        {/* LEFT CONTENT CONTAINER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          
          {/* 1. BADGE */}
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-500/50 bg-pink-500/[0.04] px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]" />
            <span className="text-[9px] font-medium tracking-wide text-pink-300 sm:text-[10px]">
              DIGITAL SOLUTIONS. BUSINESS GROWTH. CREATIVE EXECUTION.
            </span>
          </motion.div>

          {/* 2. MOBILE IMAGE */}
          <motion.div variants={itemVariants} className="mb-8 block w-full max-w-[550px] lg:hidden">
            <div className="group relative z-10 w-full overflow-hidden rounded-2xl border border-pink-500/30 bg-[#080511]/70 p-2 shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_30px_rgba(236,72,153,0.2)] backdrop-blur-xl">
              <img
                src="/src/assets/business-growth-dashboard.png"
                alt="Business Growth Dashboard Visual"
                className="h-auto w-full rounded-xl object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-[#05050d]/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* 3. HEADING */}
          <motion.h1 variants={itemVariants} className="max-w-3xl text-[46px] font-semibold leading-[1.1] tracking-[-0.04em] sm:text-6xl lg:text-[72px]">
            Digital Solutions.
            <br />
            Business Growth.
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-red-400 to-purple-500 bg-clip-text text-transparent">
              Creative Execution.
            </span>
          </motion.h1>

          {/* 4. DESCRIPTION */}
          <motion.p variants={itemVariants} className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
            We help businesses start, build, improve and grow through
            practical digital and business solutions.
          </motion.p>

          <motion.p variants={itemVariants} className="mt-3 max-w-xl text-sm leading-6 text-white/45">
            From establishing your business presence to building the
            digital tools that support your operations, we bring business
            thinking, technology and creative execution together.
          </motion.p>

          {/* 5. CALL TO ACTION BUTTONS */}
          <motion.div variants={itemVariants} className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-8 rounded-xl bg-gradient-to-r from-pink-600 to-orange-500 px-6 py-4 text-sm font-semibold shadow-[0_10px_35px_rgba(236,72,153,0.25)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(236,72,153,0.4)]"
            >
              Start a Project
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-5 rounded-xl border border-white/20 bg-white/[0.02] px-6 py-4 text-sm font-medium transition-all duration-300 hover:border-pink-500/60 hover:bg-pink-500/5"
            >
              Talk to Us
              <MessageCircle
                size={17}
                className="text-pink-400 transition-transform duration-300 group-hover:scale-110"
              />
            </motion.button>
          </motion.div>

          {/* 6. SOCIAL PROOF */}
          <motion.div variants={itemVariants} className="mt-9 flex items-center justify-center gap-4 lg:justify-start">
            <div className="flex -space-x-2">
              {["👨🏽", "👩🏽", "👨🏾", "👩🏾"].map((avatar, index) => (
                <div
                  key={index}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#080810] bg-gradient-to-br from-pink-500 to-purple-600 text-sm"
                >
                  {avatar}
                </div>
              ))}
            </div>

            <p className="text-left text-[11px] leading-4 text-white/45">
              Trusted by entrepreneurs
              <br />
              and businesses across Africa.
            </p>
          </motion.div>
        </motion.div>

        {/* DESKTOP VISUAL (FLOAT & ENTRANCE ANIMATION) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden w-full max-w-[850px] items-center justify-center lg:flex"
        >
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-pink-600/30 to-purple-600/20 blur-[120px]" />

          {/* Floating image container */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="group relative z-10 w-full overflow-hidden rounded-3xl border border-pink-500/30 bg-[#080511]/70 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(236,72,153,0.2)] backdrop-blur-xl transition-all duration-500 hover:border-pink-500/60 hover:shadow-[0_20px_60px_rgba(236,72,153,0.35)]"
          >
            <img
              src={dashboardImg} alt="Business Growth Dashboard"
              alt="Business Growth Dashboard Visual"
              className="h-auto w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-[#05050d]/40 via-transparent to-transparent" />
          </motion.div>

          {/* Floating Live Indicator Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute -bottom-4 right-6 z-20 flex items-center gap-2 rounded-full border border-pink-500/40 bg-[#0c0614]/90 px-4 py-2 shadow-xl backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500" />
            </span>
            <span className="font-mono text-[10px] font-medium tracking-wider text-pink-200">
              LIVE SYSTEM DATA
            </span>
          </motion.div>
        </motion.div>

      </div>

      {/* Bottom fade gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#07050a] to-transparent" />
    </section>
  );
};

export default Hero;