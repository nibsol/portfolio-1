"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { BookOpen, Heart, Cloud } from "lucide-react";

const industries = [
  {
    icon: BookOpen,
    label: "EdTech",
    text: "Slow LMS? → AI auto-grades essays, answers 24/7.",
    delay: 0.15,
    color: "#3B82F6",
    emoji: "📚"
  },
  {
    icon: Heart,
    label: "Healthcare",
    text: "Data chaos? → AI organizes records, cuts admin 65%.",
    delay: 0.3,
    color: "#EC4899",
    emoji: "❤️"
  },
  {
    icon: Cloud,
    label: "SaaS",
    text: "Sales nightmares? → AI personalizes onboarding, boosts retention 30%.",
    delay: 0.45,
    color: "#8B5CF6",
    emoji: "☁️"
  }
];

const IndustriesTransform = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
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
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  return (
    <section 
      id="industries" 
      ref={sectionRef}
      className="relative py-16 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#070a24] via-black to-[#0c1237] overflow-hidden">
        {/* Animated gradient wave */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-full h-full bg-gradient-to-br from-[#3B82F6]/10 to-[#8B5CF6]/10 animate-pulse" style={{ animationDuration: "15s" }}></div>
        </div>
        
        {/* Vertical shimmer */}
        <motion.div 
          className="absolute top-0 bottom-0 w-40 bg-gradient-to-r from-transparent via-[#3B82F6]/5 to-transparent"
          animate={{ 
            left: ["-10%", "110%"],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "linear",
            repeatDelay: 7
          }}
        />
        
        {/* Subtle grid lines */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: "radial-gradient(#3B82F6 0.5px, transparent 0.5px)", 
          backgroundSize: "30px 30px",
          opacity: 0.1
        }}></div>
        
        {/* Floating emojis */}
        <div className="absolute inset-0 overflow-hidden">
          {industries.map((industry, index) => (
            [...Array(3)].map((_, i) => (
              <motion.div
                key={`${index}-${i}`}
                className="absolute text-lg opacity-20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30],
                  opacity: [0.2, 0],
                  rotate: [0, Math.random() * 20 - 10]
                }}
                transition={{
                  duration: Math.random() * 5 + 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 5,
                }}
              >
                {industry.emoji}
              </motion.div>
            ))
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Headline */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]"
          >
            Where We've Turned Chaos Into Clockwork
          </motion.h2>
        </motion.div>
        
        {/* Industry Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            
            return (
              <motion.div
                key={index}
                className="relative bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden p-6 flex flex-col items-center text-center"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: `0 0 25px rgba(${industry.color === "#3B82F6" ? "59,130,246" : industry.color === "#EC4899" ? "236,72,153" : "139,92,246"},0.2)`,
                  borderColor: `${industry.color}50`,
                  backgroundColor: "rgba(255,255,255,0.08)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Card Background */}
                <motion.div 
                  className="absolute inset-0 opacity-0"
                  whileHover={{ opacity: 0.05 }}
                  style={{ 
                    background: `radial-gradient(circle at center, ${industry.color}30, transparent 70%)`,
                  }}
                />
                
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-4 border border-white/20"
                  style={{ color: industry.color }}
                  whileHover={{ 
                    y: [0, -8, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {industry.label === "Healthcare" ? (
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <IconComponent size={32} />
                    </motion.div>
                  ) : (
                    <IconComponent size={32} />
                  )}
                </motion.div>
                
                {/* Label */}
                <h3 className="text-xl font-bold text-white mb-2">{industry.label}</h3>
                
                {/* Text */}
                <p className="text-[#CBD5E1] leading-tight">{industry.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            className="relative bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:from-[#2563EB] hover:to-[#7C3AED] 
              transition-all duration-300 text-white rounded-full font-medium px-6 py-4 h-auto shadow-md 
              hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] group overflow-hidden"
          >
            <span>Automate Your Industry</span>
            <motion.span 
              className="ml-1 inline-block relative"
              whileHover={{ x: 5 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
            
            {/* Animated gradient shift on hover */}
            <motion.div 
              className="absolute inset-0 opacity-0 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]"
              whileHover={{ 
                opacity: 1,
                backgroundPosition: ["0% 50%", "100% 50%"] 
              }}
              transition={{ duration: 1.5 }}
              style={{ backgroundSize: "200% 200%" }}
            />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesTransform; 