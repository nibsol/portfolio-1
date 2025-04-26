"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "No Code, No Chaos",
    description: "Your agent integrates in hours, not months. Guaranteed.",
    delay: 0.2
  },
  {
    title: "Price So Low, It Feels Illegal",
    description: "Costs less than hiring a part-time intern. Seriously.",
    delay: 0.3
  },
  {
    title: "We Break It, We Fix It",
    description: "Free maintenance forever. Sleep easy.",
    delay: 0.4
  }
];

const WhyNibsol = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };
  
  return (
    <section 
      id="why-nibsol" 
      ref={sectionRef}
      className="relative py-16 overflow-hidden bg-gradient-to-br from-[#070a24] via-black to-[#0c1237]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#3B82F6]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "15s" }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#6366F1]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "20s", animationDelay: "2s" }}></div>
        
        {/* Subtle Particle Effect */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#3B82F6]/50 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -30 - 10],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
          
          {/* Left Column - Text and Features */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight"
              whileHover={{ 
                backgroundImage: "linear-gradient(90deg, #3B82F6, #6366F1)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text", 
                WebkitTextFillColor: "transparent",
                transition: { duration: 0.3 }
              }}
            >
              Why Startups Choose Us Over $50k/month AI Agencies
            </motion.h2>
            
            <motion.p 
              className="text-[#94A3B8] max-w-[500px] mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              We're not here to sell you buzzwords. We're here to make your business grow faster.
            </motion.p>
            
            {/* Features */}
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: "0 0 15px rgba(59,130,246,0.2)",
                    borderColor: "rgba(99,102,241,0.4)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#6366F1] flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <motion.h3 
                      className="text-lg font-bold text-white relative inline-block"
                      whileHover={{ 
                        color: "#3B82F6",
                        transition: { duration: 0.2 } 
                      }}
                    >
                      {feature.title}
                      <motion.span 
                        className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#6366F1]"
                        whileHover={{ width: "100%", transition: { duration: 0.3 } }}
                      />
                    </motion.h3>
                    <p className="text-sm md:text-base text-[#CBD5E1]">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Button
                className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] hover:scale-105 transition-all 
                  duration-300 text-white rounded-full font-medium px-6 py-4 h-auto shadow-md 
                  hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] group"
              >
                <span>Build Smarter</span>
                <motion.span 
                  className="ml-1 inline-block"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Visual Comparison */}
          <motion.div 
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Before Card */}
            <motion.div
              className="relative rounded-lg bg-white/5 backdrop-blur-sm p-5 border border-white/10 overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 20px rgba(59,130,246,0.2)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-orange-800/10"
                whileHover={{ 
                  opacity: [0.6, 0.8, 0.6],
                  transition: { duration: 2, repeat: Infinity } 
                }}
              />
              
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">Before Nibsol</h3>
              
              <div className="flex items-center justify-center h-40 relative">
                {/* Placeholder for animation/image */}
                <motion.div 
                  className="w-full h-full flex items-center justify-center text-center p-3"
                  whileHover={{ 
                    rotate: [-1, 1, -1], 
                    transition: { duration: 0.5, repeat: Infinity } 
                  }}
                >
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%" className="text-red-400">
                        <circle cx="50" cy="40" r="12" fill="#FFB6C1" /> {/* Head */}
                        <line x1="50" y1="52" x2="50" y2="80" stroke="#FFB6C1" strokeWidth="4" /> {/* Body */}
                        <line x1="50" y1="60" x2="30" y2="70" stroke="#FFB6C1" strokeWidth="4" /> {/* Left arm */}
                        <line x1="50" y1="60" x2="70" y2="70" stroke="#FFB6C1" strokeWidth="4" /> {/* Right arm */}
                        <line x1="50" y1="80" x2="35" y2="95" stroke="#FFB6C1" strokeWidth="4" /> {/* Left leg */}
                        <line x1="50" y1="80" x2="65" y2="95" stroke="#FFB6C1" strokeWidth="4" /> {/* Right leg */}
                        <path d="M 40 40 Q 50 50 60 40" fill="none" stroke="#F87171" strokeWidth="2" /> {/* Frown */}
                        <motion.rect
                          x="75" y="30" width="15" height="20" fill="#D1D5DB" rx="2"
                          animate={{ y: [-5, 5, -5] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        />
                        <motion.rect
                          x="70" y="55" width="15" height="20" fill="#D1D5DB" rx="2"
                          animate={{ y: [0, 8, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
                        />
                        <motion.rect
                          x="15" y="40" width="15" height="20" fill="#D1D5DB" rx="2"
                          animate={{ y: [-8, 0, -8] }}
                          transition={{ duration: 0.7, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.rect
                          x="10" y="65" width="15" height="20" fill="#D1D5DB" rx="2"
                          animate={{ y: [-3, 7, -3] }}
                          transition={{ duration: 0.55, repeat: Infinity, delay: 0.15 }}
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <p className="text-[#CBD5E1] text-sm md:text-base text-center relative z-10">
                Founder drowning in tasks and paperwork
              </p>
            </motion.div>
            
            {/* After Card */}
            <motion.div
              className="relative rounded-lg bg-white/5 backdrop-blur-sm p-5 border border-white/10 overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 20px rgba(59,130,246,0.3)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-800/10"
                whileHover={{ 
                  opacity: [0.6, 0.8, 0.6],
                  transition: { duration: 2, repeat: Infinity } 
                }}
              />
              
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">After Nibsol</h3>
              
              <div className="flex items-center justify-center h-40 relative">
                {/* Placeholder for animation/image */}
                <motion.div 
                  className="w-full h-full flex items-center justify-center text-center p-3"
                  whileHover={{ y: [-4, 0, -4], transition: { duration: 2, repeat: Infinity } }}
                >
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%" className="text-blue-400">
                        <circle cx="50" cy="40" r="12" fill="#93C5FD" /> {/* Head */}
                        <line x1="50" y1="52" x2="50" y2="80" stroke="#93C5FD" strokeWidth="4" /> {/* Body */}
                        <line x1="50" y1="60" x2="30" y2="70" stroke="#93C5FD" strokeWidth="4" /> {/* Left arm */}
                        <line x1="50" y1="60" x2="70" y2="70" stroke="#93C5FD" strokeWidth="4" /> {/* Right arm */}
                        <line x1="50" y1="80" x2="35" y2="95" stroke="#93C5FD" strokeWidth="4" /> {/* Left leg */}
                        <line x1="50" y1="80" x2="65" y2="95" stroke="#93C5FD" strokeWidth="4" /> {/* Right leg */}
                        <path d="M 40 38 Q 50 45 60 38" fill="none" stroke="#60A5FA" strokeWidth="2" /> {/* Smile */}
                        
                        {/* Coffee cup */}
                        <rect x="25" y="60" width="10" height="15" fill="#D1D5DB" rx="1" />
                        <rect x="23" y="57" width="14" height="3" fill="#9CA3AF" rx="1" />
                        
                        {/* Robot/AI */}
                        <motion.g
                          animate={{ 
                            y: [-2, 2, -2],
                            rotate: [-5, 5, -5]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            repeatType: "mirror" 
                          }}
                        >
                          <rect x="70" y="60" width="15" height="20" fill="#3B82F6" rx="3" />
                          <rect x="72.5" y="55" width="10" height="5" fill="#60A5FA" rx="2" />
                          <circle cx="75" cy="65" r="2" fill="#DBEAFE" />
                          <circle cx="80" cy="65" r="2" fill="#DBEAFE" />
                          <line x1="75" y1="70" x2="80" y2="70" stroke="#DBEAFE" strokeWidth="1" />
                        </motion.g>
                        
                        {/* Sparkles on hover */}
                        <motion.g
                          initial={{ opacity: 0, scale: 0 }}
                          whileHover={{ opacity: 1, scale: [0, 1.5, 1] }}
                          transition={{ duration: 0.5 }}
                        >
                          <circle cx="30" cy="50" r="2" fill="#FBBF24" />
                          <circle cx="25" cy="45" r="1.5" fill="#FBBF24" />
                          <circle cx="35" cy="48" r="1" fill="#FBBF24" />
                        </motion.g>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <p className="text-[#CBD5E1] text-sm md:text-base text-center relative z-10">
                Founder relaxed while AI handles the work
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyNibsol; 