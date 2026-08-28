import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Compass, Zap, Target, ArrowRight } from "lucide-react";

// Dynamic Background
const HeroStyleBackground = ({ mouseX, mouseY }) => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-[#0b0813] via-[#1a0e2e] to-[#0b0813]" />
    <motion.div
      animate={{ opacity: [0.5, 0.75, 0.5], scale: [1, 1.05, 1] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-32 left-1/2 h-[550px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-500/35 via-white/50 to-purple-500/35 blur-[110px]"
    />
    <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-pink-600/25 via-purple-500/20 to-cyan-400/15 blur-[140px]" />
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-white/40 via-pink-400/30 to-purple-500/25 blur-[80px] opacity-80"
      style={{ left: mouseX ?? "50%", top: mouseY ?? "50%" }}
    />
    <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-pink-500/20 blur-[100px]" />
    <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-purple-600/25 blur-[100px]" />
    <div
      className="absolute inset-0 opacity-40 mix-blend-overlay"
      style={{
        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
        maskImage:
          "radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%)",
      }}
    />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
  </div>
);

const WhyOMSIX = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const differentiators = [
    {
      icon: <Compass className="h-5 w-5 text-pink-400" />,
      title: "Beyond the Obvious Solution",
      description:
        "A website may be the solution for one business. For another, the real problem may be how customers are acquired, how information is managed, how operations are organized, or how the business presents itself.",
    },
    {
      icon: <Zap className="h-5 w-5 text-pink-400" />,
      title: "Integrated Capabilities",
      description:
        "OMSIX brings together business development, digital solutions, and creative execution so that businesses can get the right combination of support rather than having to coordinate everything themselves.",
    },
    {
      icon: <Target className="h-5 w-5 text-pink-400" />,
      title: "Practical Business Thinking",
      description:
        "We don't build business just for business's sake. Every tool, workflow, and asset is aligned directly with operational outcomes and sustainable business growth.",
    },
  ];

  return (
    <section
      id="why-omsix"
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden py-24 text-white lg:py-32"
    >
      <HeroStyleBackground mouseX={mousePos.x} mouseY={mousePos.y} />

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-400/40 bg-pink-500/10 px-3 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_10px_#ec4899]" />
            <span className="text-[10px] font-medium tracking-widest text-pink-200 uppercase">
              Why OMSIX?
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl drop-shadow-md">
            More Than a{" "}
            <span className="bg-gradient-to-r from-pink-400 via-red-300 to-purple-400 bg-clip-text text-transparent">
              Service Provider.
            </span>
          </h2>

          <p className="mt-4 text-base text-white/80 sm:text-lg">
            That's why we look beyond the obvious solution to deliver what your business actually needs.
          </p>
        </div>

        {/* Minimal Differentiators Grid */}
        <div className="mt-20 grid gap-12 md:grid-cols-3 lg:gap-16">
          {differentiators.map((item, idx) => (
            <div
              key={idx}
              className="border-t border-white/10 pt-8 transition-colors duration-300 hover:border-pink-500/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
                {item.icon}
              </div>

              <h3 className="mt-6 text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-xs leading-6 text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Core Value Statement Strip */}
        <div className="mt-20 border-t border-b border-white/10 py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <ShieldCheck className="h-8 w-8 text-pink-400 shrink-0" />
              <p className="text-sm font-medium leading-6 text-white/90">
                Get the exact combination of strategic, technical, and visual support your business requires — all under one roof.
              </p>
            </div>
            <button className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-orange-500 px-6 py-3.5 text-xs font-semibold text-white shadow-lg transition-all hover:opacity-90">
              <span>Start a Conversation</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOMSIX;