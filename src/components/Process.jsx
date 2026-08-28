import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileSearch, 
  Lightbulb, 
  Rocket, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

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

const ProcessVerticalTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const steps = [
    {
      number: "01",
      icon: <FileSearch className="h-5 w-5" />,
      title: "Understand",
      description:
        "We listen, ask questions and understand the business problem before recommending a solution.",
      highlights: [
      "Business problem & goal mapping",
      "Target audience & market discovery",
      "Technical & scope requirements",
    ],
    },
    {
      number: "02",
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Build",
      description:
        "We develop the appropriate digital, creative or business solution without adding unnecessary complexity",
      highlights: [
      "Lean & practical execution",
      "Tailored solution engineering",
      "Streamlined, clutter-free setup",
    ],
    },
    {
      number: "03",
      icon: <Rocket className="h-5 w-5" />,
      title: "Improve",
      description:
        "As your business grows, we can improve, maintain and expand the solution around your changing needs.",
      highlights: [
      "Ongoing maintenance & support",
      "Performance optimization & scaling",
      "Continuous feature enhancement",
    ],
    },
  ];

  return (
    <section
      id="process"
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
              How We Work
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl drop-shadow-md">
            Understand. Build.{" "}
            <span className="bg-gradient-to-r from-pink-400 via-red-300 to-purple-400 bg-clip-text text-transparent">
              Improve.
            </span>
          </h2>

          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Every business is different. We start by understanding what you are trying to achieve, identify what actually needs to be solved, and then develop a practical solution around it.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative mt-20 max-w-4xl mx-auto">
          {/* Main Glowing Vertical Axis Line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-white/10 md:left-1/2 md:-translate-x-1/2" />
          
          {/* Active Line Fill */}
          <motion.div
            className="absolute left-6 top-6 w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-orange-400 md:left-1/2 md:-translate-x-1/2"
            animate={{
              height: `${(activeStep / (steps.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />

          <div className="space-y-16">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`relative flex flex-col md:flex-row items-start cursor-pointer group ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-6 -translate-x-1/2 z-20 md:left-1/2">
                    <motion.div
                      animate={{
                        scale: isActive ? 1.2 : 1,
                        borderColor: isActive ? "#ec4899" : "rgba(255, 255, 255, 0.2)",
                      }}
                      className={`flex h-12 w-12 items-center justify-center rounded-full border bg-[#0a0614] backdrop-blur-xl transition-all duration-300 ${
                        isActive
                          ? "text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.5)]"
                          : "text-white/40 group-hover:text-white group-hover:border-white/40"
                      }`}
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  {/* Content Block */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                    }`}
                  >
                    <div className="inline-flex items-center gap-2">
                      <span className="text-xs font-bold tracking-widest text-pink-400">
                        PHASE {step.number}
                      </span>
                    </div>

                    <h3 className="mt-1 text-xl font-semibold text-white transition-colors group-hover:text-pink-200">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-white/70">
                      {step.description}
                    </p>

                    <ul
                      className={`mt-4 space-y-2 flex flex-col ${
                        isEven ? "md:items-end" : "md:items-start"
                      }`}
                    >
                      {step.highlights.map((item, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-center gap-2 text-xs text-white/80"
                        >
                          <CheckCircle2 size={12} className="text-pink-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-20 border-t border-white/10 pt-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row max-w-4xl mx-auto">
            <div>
              <h4 className="text-lg font-semibold text-white">
                Ready to get your project moving?
              </h4>
              <p className="mt-1 text-xs text-white/70">
                Pick a package or tell us about your goals — we'll handle the technical heavy lifting.
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-orange-500 px-6 py-3.5 text-xs font-semibold text-white shadow-lg transition-all hover:opacity-90">
              <span>Get Started Now</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessVerticalTimeline;