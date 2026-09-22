import React, { useState, useRef, useEffect } from "react";
import { 
  ArrowUpRight, 
  FolderKanban, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  RotateCw,
  Lock,
  Globe,
  Maximize2,
  Plus,
  X,
  Star,
  ShieldCheck,
  Share2,
  Palette,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeProject, setActiveProject] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(0);
  const tabsContainerRef = useRef(null);

  // Auto-scroll top active browser tab into center view when activeProject changes
  useEffect(() => {
    if (tabsContainerRef.current) {
      const activeTabElement = tabsContainerRef.current.children[activeProject];
      if (activeTabElement) {
        activeTabElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    }
  }, [activeProject]);

  const projects = [
    {
      id: "01",
      title: "ENEDAVE Cooperative",
      shortTitle: "enedave.com",
      category: "Agricultural Cooperative Platform",
      tagline: "Digital infrastructure for a modern agricultural cooperative.",
      description:
        "A comprehensive digital ecosystem built to streamline member management, organize cooperative information, and drive data-backed agricultural services.",
      metrics: ["Member Management System", "Automated Processes", "Data-Driven Platform"],
      tags: ["Agricultural Tech", "Cooperative Portal", "Database Systems"],
      domain: "enedave-cooperative.vercel.app",
      heroHeadline: "Empowering Local Agriculture Through Digital Connectivity",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "ExcelNavigo",
      shortTitle: "excelnavigo.com",
      category: "Student Learning Platform",
      tagline: "Interactive learning tools and educational resource hub.",
      description:
        "An engaging platform engineered to give students easy access to educational materials, structured learning pathways, and skill development resources.",
      metrics: ["Seamless Course Flow", "Student Dashboard", "High Engagement"],
      tags: ["EdTech", "E-Learning", "Interactive UI"],
      domain: "excelnavigo.com",
      heroHeadline: "Transforming Student Learning & Digital Education Pathways",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "03",
      title: "Valenkor",
      shortTitle: "valenkor.com",
      category: "Engineering & Industry",
      tagline: "Corporate digital presence for heavy engineering & industrial solutions.",
      description:
        "A clean corporate digital platform highlighting engineering capabilities, industrial project portfolios, and enterprise services.",
      metrics: ["Corporate Positioning", "Project Showcase", "Lead Generation Portal"],
      tags: ["Industrial Engineering", "Enterprise Web", "Brand Architecture"],
      domain: "valenkor.com",
      heroHeadline: "Engineering Excellence & Industrial Innovation",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "04",
      title: "Excel Career Plus",
      shortTitle: "excelcareerplus.com",
      category: "Education & Travel Agency",
      tagline: "Gateway to international education and travel consultancy.",
      description:
        "A full-service portal assisting students and professionals with international study applications, visa guidance, and career relocation travel.",
      metrics: ["Consultancy Portal", "Integrated Contact Flow", "Global Reach Focus"],
      tags: ["EdTravel", "Visa Consultancy", "Career Guidance"],
      domain: "excelcareerplus.com",
      heroHeadline: "Your Gateway to Global Education & Career Opportunities",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
    },
  ];

  const brandLogos = [
    { 
      name: "ENEDAVE", 
      tag: "Agricultural Brand",
      svg: (
        <svg viewBox="0 0 40 40" className="h-8 w-8 text-pink-400 fill-current">
          <path d="M20 2L4 12v16l16 10 16-10V12L20 2zm0 4.5l12 7.5v12l-12 7.5-12-7.5v-12l12-7.5z"/>
          <circle cx="20" cy="20" r="5" />
        </svg>
      )
    },
    { 
      name: "ExcelNavigo", 
      tag: "EdTech Identity",
      svg: (
        <svg viewBox="0 0 40 40" className="h-8 w-8 text-pink-400 fill-current">
          <path d="M12 8l16 12-16 12V8zm4 7v10l6.67-5L16 15z" />
          <path d="M30 6v28h-3V6h3z" />
        </svg>
      )
    },
    { 
      name: "Valenkor", 
      tag: "Industrial Brand",
      svg: (
        <svg viewBox="0 0 40 40" className="h-8 w-8 text-pink-400 fill-current">
          <path d="M6 32L20 6l14 26H6zm14-18l-8 14h16l-8-14z" />
        </svg>
      )
    },
    { 
      name: "Excel Career Plus", 
      tag: "Agency Identity",
      svg: (
        <svg viewBox="0 0 40 40" className="h-8 w-8 text-pink-400 fill-current">
          <path d="M20 4a16 16 0 100 32 16 16 0 000-32zm0 6a10 10 0 110 20 10 10 0 010-20z"/>
          <path d="M18 14h4v12h-4z"/>
          <path d="M14 18h12v4H14z"/>
        </svg>
      )
    },
    { 
      name: "AgriTech Global", 
      tag: "Brand Assets",
      svg: (
        <svg viewBox="0 0 40 40" className="h-8 w-8 text-pink-400 fill-current">
          <path d="M20 4L6 12v16l14 8 14-8V12L20 4zm0 20a4 4 0 110-8 4 4 0 010 8z" />
        </svg>
      )
    },
    { 
      name: "Apex Solutions", 
      tag: "Identity System",
      svg: (
        <svg viewBox="0 0 40 40" className="h-8 w-8 text-pink-400 fill-current">
          <path d="M20 6L4 34h32L20 6zm0 8l9 16H11l9-16z" />
        </svg>
      )
    }
  ];

  const handlePrev = () => {
    setSwipeDirection(-1);
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSwipeDirection(1);
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleDragEnd = (e, info) => {
    const swipeThreshold = 40;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

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
            Explore live digital web products inside our interactive browser mockup viewport.
          </p>

          {/* Mobile Swipe Hint Badge */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-pink-300 sm:hidden">
            <span>👈 Swipe viewport left or right to switch projects 👉</span>
          </div>
        </div>

        {/* 1. BROWSER MOCKUP WEB WORK SHOWCASE */}
        <div className="mt-8 sm:mt-12 overflow-hidden rounded-2xl border border-white/20 bg-[#0c0717] shadow-[0_30px_90px_rgba(0,0,0,0.95)] backdrop-blur-2xl">
          
          <div className="relative flex items-center border-b border-white/10 bg-[#120a22] px-3 pt-3 pb-0 sm:px-4">
            
            {/* Window Controls Dot Icons */}
            <div className="mr-2 hidden shrink-0 items-center gap-1.5 sm:flex sm:mr-4 sm:gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>

            {/* Mobile Touch Horizontally Scrollable Container */}
            <div className="relative flex-1 overflow-hidden">
              <div 
                ref={tabsContainerRef}
                className="flex items-center gap-1.5 overflow-x-auto scrollbar-none snap-x snap-mandatory touch-pan-x py-0.5 pr-4 select-none"
                style={{
                  WebkitOverflowScrolling: "touch",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none"
                }}
              >
                {projects.map((project, idx) => {
                  const isActive = activeProject === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setSwipeDirection(idx > activeProject ? 1 : -1);
                        setActiveProject(idx);
                      }}
                      className={`group relative flex shrink-0 snap-start items-center gap-2 rounded-t-xl px-3.5 py-2.5 text-xs font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-[#1d113b] text-white shadow-md border-t border-x border-pink-500/40"
                          : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <Globe size={13} className={`shrink-0 ${isActive ? "text-pink-400" : "text-white/40"}`} />
                      <span className="whitespace-nowrap font-medium">{project.shortTitle}</span>
                      <X size={12} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-white/40 hover:text-white" />
                      
                      {isActive && (
                        <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-t-full" />
                      )}
                    </button>
                  );
                })}

                <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-colors">
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-white/40 pb-2 pl-2">
              <Maximize2 size={13} />
            </div>
          </div>

          <div className="flex items-center gap-2.5 border-b border-white/10 bg-[#180e33] px-3 py-2 sm:px-4 sm:py-2.5">
            <div className="flex items-center gap-1 text-white/40 sm:gap-2">
              <button 
                onClick={handlePrev} 
                className="p-1 rounded hover:bg-white/10 hover:text-white transition-colors"
                title="Previous Project"
              >
                <ArrowLeft size={14} />
              </button>
              <button 
                onClick={handleNext} 
                className="p-1 rounded hover:bg-white/10 hover:text-white transition-colors"
                title="Next Project"
              >
                <ArrowRight size={14} />
              </button>
              <RotateCw size={13} className="cursor-pointer hover:text-white transition-colors ml-0.5" />
            </div>

            <div className="flex flex-1 items-center gap-1.5 rounded-lg border border-white/15 bg-black/60 px-2.5 py-1.5 text-[11px] sm:text-xs font-mono text-white/80 shadow-inner overflow-hidden">
              <Lock size={12} className="text-emerald-400 shrink-0" />
              <span className="text-pink-400/80 shrink-0">https://</span>
              <span className="text-white font-semibold truncate">{projects[activeProject].domain}</span>
              <div className="ml-auto shrink-0 flex items-center gap-2 text-white/40">
                <Star size={12} className="cursor-pointer hover:text-yellow-400" />
              </div>
            </div>

            {/* Mobile Project Counter Indicator */}
            <div className="flex items-center gap-1.5 text-xs text-white/60 font-mono sm:hidden">
              <span className="text-pink-400 font-bold">{activeProject + 1}</span>
              <span>/</span>
              <span>{projects.length}</span>
            </div>

            <div className="hidden sm:flex items-center gap-3 text-white/50 text-xs">
              <span className="flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-1 text-[10px] text-emerald-400 border border-emerald-500/20">
                <ShieldCheck size={12} /> Secure
              </span>
              <Share2 size={14} className="cursor-pointer hover:text-white" />
            </div>
          </div>

          <div className="relative overflow-hidden bg-[#0a0514]">
            
            {/* Mobile Touch Overlay Arrows */}
            <button 
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md sm:hidden active:scale-95 transition-transform"
              aria-label="Previous Project"
            >
              <ChevronLeft size={20} />
            </button>

            <button 
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md sm:hidden active:scale-95 transition-transform"
              aria-label="Next Project"
            >
              <ChevronRight size={20} />
            </button>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeProject}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                initial={{ opacity: 0, x: swipeDirection > 0 ? 120 : -120 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: swipeDirection > 0 ? -120 : 120 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
                className="relative min-h-[500px] sm:min-h-[580px] touch-pan-y cursor-grab active:cursor-grabbing"
              >
                {/* Website Hero Preview */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden select-none">
                  <img 
                    src={projects[activeProject].image} 
                    alt={projects[activeProject].title} 
                    className="h-full w-full object-cover opacity-50 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#0a0514]/70 to-transparent pointer-events-none" />
                  
                  <div className="absolute top-4 inset-x-4 sm:inset-x-6 flex items-center justify-between border-b border-white/10 pb-3 pointer-events-none">
                    <div className="flex items-center gap-2 text-xs font-bold text-white truncate pr-2">
                      <Globe size={14} className="text-pink-400 shrink-0" />
                      <span className="truncate">{projects[activeProject].title}</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-6 text-[11px] text-white/60">
                      <span>Overview</span>
                      <span>Services</span>
                      <span>Contact</span>
                      <span className="rounded-full bg-pink-500/20 px-3 py-1 text-pink-300 border border-pink-500/30">Live Site</span>
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-4 right-4 sm:left-6 sm:right-6 pointer-events-none">
                    <span className="inline-block rounded-full bg-pink-500/20 px-3 py-1 text-[10px] font-bold text-pink-300 border border-pink-500/30">
                      {projects[activeProject].category}
                    </span>
                    <h3 className="mt-2.5 text-xl sm:text-3xl lg:text-4xl font-extrabold text-white max-w-2xl leading-tight">
                      {projects[activeProject].heroHeadline}
                    </h3>
                  </div>
                </div>

                {/* Website Details Overlay */}
                <div className="p-5 sm:p-8 lg:p-10 select-none">
                  <div className="grid gap-6 sm:gap-8 lg:grid-cols-12">
                    
                    <div className="space-y-3 sm:space-y-4 lg:col-span-7">
                      <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-[10px] font-bold text-pink-300">
                        <Sparkles size={12} />
                        <span>CASE STUDY OVERVIEW</span>
                      </div>

                      <h4 className="text-xl font-bold text-white sm:text-2xl">
                        {projects[activeProject].title}
                      </h4>

                      <p className="text-xs sm:text-sm font-semibold text-pink-200">
                        {projects[activeProject].tagline}
                      </p>

                      <p className="text-xs sm:text-sm leading-relaxed text-white/70">
                        {projects[activeProject].description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {projects[activeProject].tags.map((tag, tIdx) => (
                          <span key={tIdx} className="rounded-lg border border-pink-500/30 bg-pink-500/10 px-2.5 py-1 text-[11px] text-pink-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-md lg:col-span-5">
                      <div>
                        <span className="text-[10px] font-bold tracking-wider text-white/50 uppercase">
                          Key Deliverables & Specs
                        </span>

                        <div className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3">
                          {projects[activeProject].metrics.map((metric, mIdx) => (
                            <div key={mIdx} className="flex items-center gap-2.5 text-xs text-white/90">
                              <CheckCircle2 size={15} className="shrink-0 text-pink-400" />
                              <span className="font-medium">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                        <span className="text-xs text-white/50">Visit URL</span>
                        <a 
                          href={`https://${projects[activeProject].domain}`} 
                          target="_blank" 
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-orange-500 px-4 py-2.5 text-xs font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]"
                        >
                          <span>Visit Site</span>
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

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

          {/* Clean Cluster Grid with Dummy SVG Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {brandLogos.map((brand, idx) => (
              <div 
                key={idx}
                className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:border-pink-500/40 hover:bg-white/10 hover:shadow-[0_10px_25px_rgba(236,72,153,0.15)]"
              >
                {/* SVG Logo Container */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 p-2.5 text-pink-400 group-hover:scale-110 group-hover:border-pink-500/40 transition-all">
                  {brand.svg}
                </div>

                <span className="mt-3.5 text-xs font-semibold text-white/90 text-center truncate w-full">
                  {brand.name}
                </span>
                
                <span className="text-[10px] text-pink-300/70 mt-0.5 truncate w-full text-center">
                  {brand.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

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