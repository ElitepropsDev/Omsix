import React from "react";
import { Laptop, TrendingUp, Palette } from "lucide-react";
import { motion } from "framer-motion";

/* ====================================================================
   CUSTOMIZABLE BACKGROUND COMPONENT
   Edit color values, gradients, or ambient glow sizes directly here.
   ==================================================================== */
const SectionBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* 1. Fully brightened base gradient (Lighter bottom stop) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#180e2e] via-[#2a174f] to-[#1d1238]" />

      {/* 2. Primary Top Spotlight */}
      <motion.div
        animate={{ opacity: [0.6, 0.85, 0.6], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 left-1/2 h-[550px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-500/40 via-white/60 to-purple-500/40 blur-[100px]"
      />

      {/* 3. Central High-Intensity White Core */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-pink-500/35 via-white/30 to-cyan-300/25 blur-[110px]" />

      {/* 4. NEW: Bottom Center Intense Light Source (Removes dark bottom) */}
      <div className="absolute -bottom-24 left-1/2 h-[350px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-t from-pink-500/30 via-white/40 to-purple-500/30 blur-[90px]" />

      {/* 5. Ambient Side Accents */}
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-pink-400/35 blur-[90px]" />
      <div className="absolute bottom-10 -right-20 h-96 w-96 rounded-full bg-purple-400/40 blur-[90px]" />

      {/* 6. High-Tech Grid */}
      <div
        className="absolute inset-0 opacity-60 mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 90% at 50% 50%, black 70%, transparent 100%)",
        }}
      />

      {/* 7. Bright Crisp Glass Borders (Top & Bottom) */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
    </div>
  );
};

const Services = () => {
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

  const services = [
    {
      icon: <Laptop className="h-6 w-6 text-pink-400" />,
      title: "Digital Solutions",
      subtitle: "Build the digital tools your business needs.",
      description:
        "We create practical digital solutions that help businesses operate, reach customers and manage their activities more effectively.",
      tags: [
        "Websites",
        "Web Applications",
        "Business Management Systems",
        "Online Stores",
        "Customer Portals",
        "Automation",
      ],
      glow: "from-pink-500/30 to-purple-600/20",
      accentBorder: "group-hover:border-pink-500/60",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-red-400" />,
      title: "Business Development",
      subtitle: "Turn ideas into workable businesses.",
      description:
        "We help entrepreneurs and businesses think through how to start, structure, improve and grow their operations — from business setup and strategy to process improvement and digitalization.",
      tags: [
        "Business Setup",
        "Strategy",
        "Digitalization",
        "Process Improvement",
        "Business Support",
      ],
      glow: "from-red-500/30 to-orange-500/20",
      accentBorder: "group-hover:border-red-500/60",
    },
    {
      icon: <Palette className="h-6 w-6 text-purple-400" />,
      title: "Creative & Media",
      subtitle: "Make your business visible, credible and memorable.",
      description:
        "We help businesses develop their visual identity and communicate effectively across digital channels.",
      tags: [
        "Branding",
        "Graphic Design",
        "Content Creation",
        "Social Media",
        "Digital Marketing",
      ],
      glow: "from-purple-500/30 to-pink-500/20",
      accentBorder: "group-hover:border-purple-500/60",
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden py-24 text-white lg:py-32">
      {/* Easy-to-edit isolated section background */}
      <SectionBackground />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-400/40 bg-pink-500/10 px-3 py-1.5 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_10px_#ec4899]" />
            <span className="text-[10px] font-medium tracking-widest text-pink-200 uppercase">
              What We Do
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl drop-shadow-md"
          >
            Three Pillars.{" "}
            <span className="bg-gradient-to-r from-pink-400 via-red-300 to-purple-400 bg-clip-text text-transparent">
              End-to-End Execution.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-base text-white/80 sm:text-lg"
          >
            We bring business thinking, technology, and creative execution together under one roof.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-[#0a0614]/80 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all duration-500 ${service.accentBorder}`}
            >
              {/* Card Glow Effect */}
              <div
                className={`pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br ${service.glow} opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/5 shadow-inner backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs font-medium text-pink-300">
                  {service.subtitle}
                </p>

                <p className="mt-4 text-sm leading-6 text-white/70">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/80 transition-colors group-hover:border-white/30 group-hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;