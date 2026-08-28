import React, { useState } from "react";
import { Check, ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

// High-Tech Dynamic Background matching Hero / Selected Projects
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
        style={{ left: mouseX ?? "50%", top: mouseY ?? "50%" }}
      />

      {/* Ambient Neon Accents */}
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

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("packages");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const businessPackages = [
    {
      title: "Business Essentials",
      price: "₦60,000",
      description: "For entrepreneurs who simply need to get their business properly registered.",
      features: [
        "CAC registration",
        "Registration documentation",
        "Basic business setup guidance",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      title: "Business Launch",
      price: "₦200,000",
      description: "For entrepreneurs who want to move beyond registration and establish a professional business presence.",
      features: [
        "Everything in Business Essentials",
        "Business naming guidance",
        "Logo & basic brand identity",
        "Business stamp where applicable",
        "Domain setup",
        "Professional business email",
        "Professional business website",
        "Bank account opening assistance",
        "Basic launch guidance",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      title: "Business Pro",
      price: "From ₦350,000",
      note: "Final pricing depends on scope and requirements.",
      description: "For entrepreneurs who want a more complete foundation for starting and growing their business.",
      features: [
        "Everything in Business Launch",
        "Enhanced branding",
        "Custom website with additional functionality",
        "Business plan with practical tips & recommendations",
        "Basic market research",
        "Social media setup",
        "Digital marketing setup",
        "Business proposal template",
        "Business letterhead & essential asset templates",
        "Additional business support",
      ],
      cta: "Start a Project",
      popular: true,
    },
  ];

  const digitalServices = [
    {
      category: "Websites",
      items: [
        {
          title: "Website Starter",
          price: "From ₦50,000",
          note: "Custom websites quoted separately.",
          description: "A clean, professional website for businesses that need a strong online presence.",
          features: [
            "Professional website",
            "Mobile-friendly design",
            "Business info & services",
            "Contact / WhatsApp integration",
            "Domain and hosting setup",
            "Basic SEO setup",
          ],
          cta: "Get Started",
        },
        {
          title: "Custom Website",
          price: "From ₦100,000",
          note: "E-commerce & web apps quoted separately.",
          description: "For businesses that need more functionality than a standard website.",
          features: [
            "Custom website design & development",
            "Mobile-friendly design",
            "Custom forms & data collection",
            "Automated submission to WhatsApp",
            "Simple database for business records",
            "Custom business workflows & features",
            "Domain and hosting setup",
            "Basic SEO setup",
          ],
          cta: "Start a Project",
        },
      ],
    },
    {
      category: "Growth & Creative",
      items: [
        {
          title: "Digital Advertising",
          price: "From ₦30,000",
          note: "Advertising budget is separate.",
          description: "Get your business in front of the right audience.",
          features: [
            "Meta / Facebook & Instagram Ads setup",
            "Campaign configuration",
            "Audience targeting",
            "Ad creative guidance",
            "Campaign tracking",
            "Performance review",
          ],
          cta: "Get Started",
        },
        {
          title: "Brand & Creative",
          price: "From ₦30,000",
          description: "Build a professional identity that customers can recognize and trust.",
          features: [
            "Logo & basic brand identity",
            "Business cards & marketing materials",
            "Social media graphics",
            "Promotional designs",
            "Content support",
            "Letterhead & document templates",
            "Proposal templates",
          ],
          cta: "Get Started",
        },
        {
          title: "Business Digitalization",
          price: "From ₦75,000",
          note: "Final pricing depends on complexity.",
          description: "Make everyday business processes simpler with practical digital tools.",
          features: [
            "Digital business setup",
            "Workflow improvement",
            "Online forms & data collection",
            "Process digitalization",
            "Practical digital tools for operations",
          ],
          cta: "Talk to Us",
        },
      ],
    },
  ];

  return (
    <section 
      id="pricing" 
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden py-24 text-white lg:py-32"
    >
      <HeroStyleBackground mouseX={mousePos.x} mouseY={mousePos.y} />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
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
              Solutions & Pricing
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl drop-shadow-md"
          >
            Packaged Solutions.{" "}
            <span className="bg-gradient-to-r from-pink-400 via-red-300 to-purple-400 bg-clip-text text-transparent">
              Transparent Pricing.
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="mt-4 text-base text-white/80 sm:text-lg">
            Practical services and packaged solutions for different stages of your business journey.
          </motion.p>

          {/* Filter Switcher */}
          <motion.div variants={itemVariants} className="mt-8 flex justify-center">
            <div className="inline-flex rounded-2xl border border-white/15 bg-[#0a0614]/80 p-1.5 backdrop-blur-xl">
              <button
                onClick={() => setActiveTab("packages")}
                className={`rounded-xl px-5 py-2.5 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                  activeTab === "packages"
                    ? "bg-gradient-to-r from-pink-600 to-orange-500 text-white shadow-lg"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Business Packages
              </button>
              <button
                onClick={() => setActiveTab("services")}
                className={`rounded-xl px-5 py-2.5 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                  activeTab === "services"
                    ? "bg-gradient-to-r from-pink-600 to-orange-500 text-white shadow-lg"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Digital & Media Services
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Tab 1: Business Packages */}
        {activeTab === "packages" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {businessPackages.map((pkg, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-8 backdrop-blur-2xl transition-all duration-500 ${
                  pkg.popular
                    ? "border-pink-500/60 bg-[#120a24]/90 shadow-[0_20px_50px_rgba(236,72,153,0.25)]"
                    : "border-white/15 bg-[#0a0614]/80 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-white/30"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 rounded-bl-2xl bg-gradient-to-r from-pink-600 to-orange-500 px-4 py-1 text-[10px] font-bold tracking-widest text-white uppercase shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-semibold text-white">{pkg.title}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      {pkg.price}
                    </span>
                  </div>
                  {pkg.note && (
                    <p className="mt-1 text-[11px] text-pink-300/80">{pkg.note}</p>
                  )}
                  <p className="mt-4 text-xs leading-5 text-white/70">{pkg.description}</p>

                  <div className="my-6 border-t border-white/10" />

                  <ul className="space-y-3">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs text-white/80">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-pink-500/20 text-pink-400">
                          <Check size={10} />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    className={`group/btn flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-pink-600 to-orange-500 text-white shadow-lg hover:shadow-pink-500/40"
                        : "border border-white/20 bg-white/5 text-white hover:border-pink-500/50 hover:bg-pink-500/10"
                    }`}
                  >
                    <span>{pkg.cta}</span>
                    <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Tab 2: Individual Services */}
        {activeTab === "services" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-16 space-y-16"
          >
            {digitalServices.map((cat, cIdx) => (
              <div key={cIdx}>
                <h3 className="mb-8 text-xl font-semibold text-pink-300">{cat.category}</h3>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {cat.items.map((item, iIdx) => (
                    <motion.div
                      key={iIdx}
                      variants={itemVariants}
                      whileHover={{ y: -6 }}
                      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-[#0a0614]/80 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all duration-500 hover:border-pink-500/50"
                    >
                      <div>
                        <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                        <p className="mt-3 text-2xl font-bold text-white">{item.price}</p>
                        {item.note && (
                          <p className="mt-1 text-[11px] text-pink-300/80">{item.note}</p>
                        )}
                        <p className="mt-4 text-xs leading-5 text-white/70">{item.description}</p>

                        <div className="my-6 border-t border-white/10" />

                        <ul className="space-y-3">
                          {item.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-3 text-xs text-white/80">
                              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-pink-500/20 text-pink-400">
                                <Check size={10} />
                              </span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8 pt-4">
                        <button className="group/btn flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 py-3.5 text-xs font-semibold text-white transition-all duration-300 hover:border-pink-500/50 hover:bg-pink-500/10">
                          <span>{item.cta}</span>
                          <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Custom Digital Solutions & Advice Banner */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 lg:grid-cols-2"
        >
          {/* Custom Solutions Card */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl border border-pink-500/30 bg-gradient-to-br from-[#120a24]/90 to-[#0a0614]/90 p-8 backdrop-blur-2xl shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/20 text-pink-400">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white">Custom Digital Solutions</h3>
            </div>
            <p className="mt-2 text-xs font-medium text-pink-300">Request a Quote</p>
            <p className="mt-3 text-xs text-white/70">
              For businesses that need tailored solutions beyond our standard packages.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Web Applications",
                "Business Systems",
                "Customer Portals",
                "Online Stores",
                "Custom Software",
                "Advanced Automation",
                "Dashboards",
              ].map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button className="mt-6 flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-orange-500 px-5 py-3 text-xs font-semibold text-white shadow-md transition-all hover:opacity-90">
              <span>Start a Project</span>
              <ArrowRight size={14} />
            </button>
          </motion.div>

          {/* Consultation Guidance Banner */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-between rounded-3xl border border-white/15 bg-[#0a0614]/80 p-8 backdrop-blur-2xl shadow-xl"
          >
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400">
                  <MessageCircle size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">Not Sure What You Need?</h3>
              </div>
              <p className="mt-3 text-xs leading-6 text-white/70">
                You don't have to know the technical solution before contacting us. Tell us what you're trying to accomplish or what problem you're facing — we'll help you determine the right path.
              </p>
              <p className="mt-4 text-[10px] leading-4 text-white/50">
                * Note: Regulated sectors requiring statutory fees or licensing will be fully advised prior to proceeding.
              </p>
            </div>
            <button className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 py-3 px-5 text-xs font-semibold text-white transition-all hover:border-pink-500/50 hover:bg-pink-500/10">
              <span>Tell Us What You Need</span>
              <ArrowRight size={14} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;