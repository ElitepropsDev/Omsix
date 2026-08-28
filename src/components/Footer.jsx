import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#07040d] py-12 text-white border-t border-white/10">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12 text-center">
        {/* Brand Name */}
        <h3 className="text-2xl font-bold tracking-wider text-white">
          OMSIX
        </h3>

        {/* Services Line */}
        <p className="mt-3 text-xs sm:text-sm font-medium tracking-wide text-white/70">
          Digital Solutions <span className="text-pink-400 mx-1.5">•</span> Business Development <span className="text-pink-400 mx-1.5">•</span> Creative &amp; Media <span className="text-pink-400 mx-1.5">•</span> Travel &amp; Documentation
        </p>

        {/* Divider */}
        <div className="mx-auto my-6 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Copyright */}
        <p className="text-xs text-white/50">
          &copy; {new Date().getFullYear()} OMSIX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;