import React from "react";
import { 
  ArrowUpRight, 
  FolderKanban, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Palette
} from "lucide-react";
import { motion } from "framer-motion";

// Asset imports for brand logos
import enedaveLogo from "../assets/enedave1.jpg"; 
import excelNavigoLogo from "../assets/excelnavigo2.png";

// Asset imports for project mockups
import enedaveMockup from "../assets/enedave.png";
import excelNavigoMockup from "../assets/excelnavigo.png";
import excelCareerPlusMockup from "../assets/excelcareerplus.png";
import omsixMockup from "../assets/omsix.png";

const HeroStyleBackground = ({ mouseX, mouseY }) => {
  return (
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
        style={{ left: mouseX, top: mouseY }}
      />
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-pink-500/20 blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-purple-600/25 blur-[100px]" />
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%)",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </div>
  );
};

const SelectedProjects = () => {
  const projects = [
    {
      id: "01",
      title: "ENEDAVE Cooperative",
      shortTitle: "enedave.com",
      category: "Agricultural Platform",
      tagline: "Digital infrastructure for modern agriculture.",
      description:
        "A comprehensive digital ecosystem built to streamline member management and organize cooperative information.",
      metrics: ["Member Management System", "Automated Processes", "Data-Driven Platform"],
      tags: ["Agricultural Tech", "Cooperative Portal"],
      domain: "enedave-cooperative.vercel.app",
      heroHeadline: "Empowering Local Agriculture Through Digital Connectivity",
      image: enedaveMockup
    },
    {
      id: "02",
      title: "ExcelNavigo",
      shortTitle: "excelnavigo.com",
      category: "Student Learning",
      tagline: "Interactive learning tools and resource hub.",
      description:
        "An engaging platform engineered to give students easy access to educational materials and structured learning pathways.",
      metrics: ["Seamless Course Flow", "Student Dashboard", "High Engagement"],
      tags: ["EdTech", "E-Learning"],
      domain: "excelnavigo.com",
      heroHeadline: "Transforming Student Learning & Digital Education Pathways",
      image: excelNavigoMockup
    },
    {
      id: "03",
      title: "Excel Career Plus",
      shortTitle: "excelcareerplus.com",
      category: "Education & Travel",
      tagline: "Gateway to international education.",
      description:
        "A full-service portal assisting students and professionals with international study applications and travel consultancy.",
      metrics: ["Consultancy Portal", "Integrated Contact Flow", "Global Reach Focus"],
      tags: ["EdTravel", "Visa Consultancy"],
      domain: "excelcareerplus.com",
      heroHeadline: "Your Gateway to Global Education & Career Opportunities",
      image: excelCareerPlusMockup
    },
    {
      id: "04",
      title: "Omsix",
      shortTitle: "omsix.com",
      category: "Digital Solutions",
      tagline: "Modern web platforms and tailored enterprise apps.",
      description:
        "A sleek tech hub built to showcase digital transformation solutions and seamless user experience architecture.",
      metrics: ["Custom Web Systems", "Scalable Infrastructure", "Optimized Workflows"],
      tags: ["Enterprise Tech", "Digital Services"],
      domain: "omsix-landingpage.vercel.app/",
      heroHeadline: "Innovative Enterprise Solutions & Modern Software Services",
      image: omsixMockup
    },
  ];

  const brandLogos = [
    { 
      name: "ENEDAVE", 
      tag: "Agricultural Brand",
      logoSrc: enedaveLogo
    },
    { 
      name: "ExcelNavigo", 
      tag: "EdTech Identity",
      logoSrc: excelNavigoLogo
    }
  ];

  return (
    <section id="projects" className="relative overflow-hidden py-20 text-white lg:py-32">
      <HeroStyleBackground />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
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
            Explore live digital web products and custom enterprise solutions.
          </p>
        </div>

        {/* PROJECT GRID DISPLAY (2 IN A ROW) */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-white/20 bg-[#0c0717]/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-300 hover:border-pink-500/50 hover:shadow-[0_20px_60px_rgba(236,72,153,0.15)]"
            >
              {/* Entire Image Visible (object-contain) */}
              {/* Image Container with manual rounded corners */}
<div className="relative flex aspect-[16/10] w-full items-center justify-center bg-black/60 p-3 sm:p-5">
  <img 
    src={project.image} 
    alt={project.title}
    className="h-full w-full object-contain rounded-lg border border-white/10 shadow-sm transition-transform duration-500 group-hover:scale-105"
  />
  
  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
    <span className="rounded-full border border-white/10 bg-black/70 px-2 py-0.5 text-[8px] font-bold text-white/90 backdrop-blur-md sm:px-2.5 sm:py-1 sm:text-[11px]">
      {project.category}
    </span>
    <span className="hidden items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2.5 py-1 text-[10px] text-emerald-300 backdrop-blur-md sm:flex">
      <ShieldCheck size={12} /> Live
    </span>
  </div>
</div>

              {/* Compact Details Section for Mobile */}
              <div className="flex flex-1 flex-col justify-between p-2.5 sm:p-6">
                <div className="space-y-1.5 sm:space-y-3">
                  <div className="inline-flex items-center gap-1 rounded-full border border-pink-500/30 bg-pink-500/10 px-2 py-0.5 text-[8px] font-bold text-pink-300 sm:gap-1.5 sm:px-2.5 sm:text-[10px]">
                    <Sparkles size={10} className="sm:w-3 sm:h-3" />
                    <span>CASE STUDY</span>
                  </div>

                  <h3 className="text-xs font-bold text-white sm:text-2xl leading-tight truncate">
                    {project.title}
                  </h3>

                  <p className="text-[10px] font-medium text-pink-200/90 sm:text-sm line-clamp-1">
                    {project.tagline}
                  </p>

                  <p className="text-[9px] leading-snug text-white/70 sm:text-xs line-clamp-2 sm:line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Deliverables - hidden on mobile to conserve vertical space */}
                  <div className="hidden sm:block pt-2 space-y-1.5">
                    <span className="text-[10px] font-bold tracking-wider text-white/40 uppercase">
                      Key Deliverables
                    </span>
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-1.5 text-xs text-white/80">
                        <CheckCircle2 size={13} className="shrink-0 text-pink-400" />
                        <span className="truncate">{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 pt-1 sm:gap-1.5 sm:pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[8px] text-white/70 sm:rounded-md sm:px-2 sm:text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visit Site Button */}
                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between sm:mt-5 sm:pt-4">
                  <span className="hidden text-xs text-white/40 sm:inline-block truncate">
                    {project.domain}
                  </span>
                  <a 
                    href={`https://${project.domain}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex w-full sm:w-auto items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-pink-600 to-orange-500 px-2.5 py-1.5 text-[10px] font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] sm:rounded-xl sm:px-3.5 sm:py-2.5 sm:text-xs"
                  >
                    <span>Visit Site</span>
                    <ArrowUpRight size={11} className="sm:w-3.5 sm:h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BRANDING & CREATIVE SECTION */}
        <div className="mt-16 sm:mt-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/30 shrink-0">
              <Palette size={20} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Branding & Creative</h3>
              <p className="text-xs text-white/60">Selected brand assets, logos, and identity designs.</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 sm:gap-6 items-center justify-items-center max-w-3xl mx-auto">
            {brandLogos.map((brand, idx) => (
              <div 
                key={idx}
                className="group flex flex-col items-center justify-center p-2 transition-transform duration-300 hover:scale-105"
              >
                <div className="flex h-20 w-20 sm:h-28 sm:w-28 items-center justify-center">
                  {brand.logoSrc && (
                    <img 
                      src={brand.logoSrc} 
                      alt={brand.name} 
                      className="h-full w-full object-contain rounded-xl drop-shadow-md" 
                    />
                  )}
                </div>

                <span className="mt-2 text-xs font-semibold text-white/90 text-center truncate w-full">
                  {brand.name}
                </span>
                
                <span className="text-[10px] text-pink-300/80 truncate w-full text-center hidden sm:block">
                  {brand.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-between gap-5 rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8 backdrop-blur-2xl sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/20 text-pink-400 shrink-0">
              <FolderKanban size={24} />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white">Looking for custom digital infrastructure?</h4>
              <p className="text-xs text-white/60">Explore our complete portfolio of web applications and engineering tools.</p>
            </div>
          </div>
          <button className="flex w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold text-white transition-all hover:border-pink-500/50 hover:bg-pink-500/10">
            <span>View All Projects</span>
            <ExternalLink size={14} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default SelectedProjects;