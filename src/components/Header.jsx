import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'What We Do', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Projects', href: '#projects' },
    { name: 'How We Work', href: '#how-we-work' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-12 py-4">
      {/* Top Navbar - White Glass */}
      <nav 
        className="max-w-7xl mx-auto flex items-center justify-between border border-white/40 rounded-2xl px-6 py-3 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] transition-all duration-300 hover:border-white/60"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)"
        }}
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-1 group">
          <span className="text-2xl font-extrabold tracking-tight text-white">
            OM
            <span className="bg-gradient-to-r from-pink-200 to-red-400 bg-clip-text text-transparent">
              SIX
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-200 hover:text-white transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-sm"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-red-500 to-pink-500 rounded-xl transition-all duration-300 group-hover:opacity-100 opacity-80 blur-[1px]"></span>
            <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-[11px] bg-[#090514] text-white transition-all duration-300 group-hover:bg-transparent">
              Start a Project
              <ArrowUpRight className="w-4 h-4 text-pink-400 group-hover:text-white transition-colors" />
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center h-11 w-11 rounded-2xl border border-white/30 bg-white/10 text-white shadow-lg backdrop-blur-md transition-all active:scale-95"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </nav>

      {/* Mobile Drawer - White Glass */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden mt-3 max-w-7xl mx-auto border border-white/30 rounded-2xl p-6 shadow-2xl flex flex-col gap-4"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)"
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-white hover:text-pink-300 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 text-center w-full py-3 rounded-xl bg-gradient-to-r from-pink-600 to-red-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(236,72,153,0.4)]"
          >
            Start a Project
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;