"use client";

import { useEffect, useState } from "react";
import { SparklesCore } from "@/app/components/ui/sparkles";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const taglines = [
  "Automate the Future. Build It Faster.",
  "Human Ambition, Automated Execution.",
  "Your Business Never Sleeps.",
  "Automate Growth, Not Just Tasks."
];

const Hero = () => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-black to-[#070a24]">
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="h-full w-full"
          particleColor="#3B82F6"
          speed={0.3}
        />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col sm:flex-row items-center justify-between px-6 md:px-12 lg:px-24 max-w-8xl mx-auto">
        <motion.div 
          className="text-left space-y-6 lg:w-3/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Brand Line */}
          <motion.p 
            className="tracking-widest text-[#94A3B8] uppercase text-xs md:text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Nibsol - Where Ideas Automate into Impact
          </motion.p>
          
          {/* Main Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Businesses Supercharged with Custom AI Agents
          </motion.h1>
          
          {/* Sub-Headline */}
          <motion.p 
            className="text-[#CBD5E1] text-lg max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Designing Self-Operating AI Agents tailored to your Workflows with Precise Automation that grows with you!
          </motion.p>
          
          {/* Rotating Taglines */}
          <motion.div 
            key={currentTaglineIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-10 flex items-center"
          >
            <p className="text-xl text-[#6366F1] font-semibold">
              {taglines[currentTaglineIndex]}
            </p>
          </motion.div>
          
          {/* Value Propositions */}
          <motion.div 
            className="flex flex-col gap-2 text-[#94A3B8]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="inline-flex items-center">
              <span className="mr-2 bg-[#3B82F6] w-1.5 h-1.5 rounded-full"></span>
              <p>AI agents that replace 3 employees… for less than 1 salary.</p>
            </div>
            <div className="inline-flex items-center">
              <span className="mr-2 bg-[#6366F1] w-1.5 h-1.5 rounded-full"></span>
              <p>Work Nights, Weekends, Holidays — without burnout.</p>
            </div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] hover:scale-105 transition-all duration-300 text-white rounded-full font-medium"
            >
              Build Your Custom Agent →
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all hover:scale-105 duration-300 border-white/20 rounded-full font-medium"
              asChild
            >
              <Link href="#how-it-works">
                See How It Works →
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Decorative right-side illustration space - can be filled with actual image later */}
        <motion.div 
          className="hidden lg:block w-2/5 h-[500px] relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.9, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/20 to-[#6366F1]/30 rounded-3xl backdrop-blur-md border border-white/5"></div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <p className="text-sm text-[#94A3B8] mb-2">Scroll Down</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Link href="#how-it-works" className="flex items-center justify-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero; 