"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { Cog, Bot, PlayCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "We Find Your Time-Suck",
    description: "Tell us one task draining 20+ hours/month",
    icon: Cog,
    delay: 0.15
  },
  {
    number: "02",
    title: "We Build Your 'Digital Employee'",
    description: "Our AI agents learn your workflows",
    icon: Bot,
    delay: 0.25
  },
  {
    number: "03",
    title: "We Hand You the Remote",
    description: "Hit 'Start' and your agent handles 500+ tasks/month",
    icon: PlayCircle,
    delay: 0.35
  }
];

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="relative h-[85vh] min-h-[600px] py-12 overflow-hidden bg-gradient-to-b from-[#070a24] to-black flex items-center"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#3B82F6]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-[#6366F1]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-36 h-36 bg-[#3B82F6]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        {/* Headline - More Compact */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">
            Your 5-Day Path to an AI-Powered Team
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto text-sm leading-tight">
            Most AI tools take months to train. Ours take 5 days. Here's how:
          </p>
        </motion.div>
        
        {/* Timeline Steps - More Compact */}
        <div className="relative mt-4">
          {/* Timeline Line */}
          <motion.div 
            className="absolute left-[24px] md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3B82F6] to-[#6366F1] rounded-full"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
          
          {/* Steps */}
          <div className="space-y-6 relative">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              
              return (
                <motion.div 
                  key={index}
                  className="relative flex flex-col md:flex-row items-start md:even:flex-row-reverse"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: step.delay }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Number Circle - Smaller */}
                  <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center">
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#6366F1] flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                      whileHover={{ 
                        boxShadow: "0 0 25px rgba(59,130,246,0.6)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </motion.div>
                  </div>
                  
                  {/* Step Card - Smaller and Tighter */}
                  <motion.div 
                    className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] max-w-[400px] rounded-lg bg-white/5 backdrop-blur-sm p-3 border border-white/10
                      ${index % 2 === 0 ? 'md:text-right md:mr-[40px]' : 'md:text-left md:ml-[40px]'}`}
                    whileHover={{ 
                      boxShadow: "0 0 20px rgba(59,130,246,0.15)",
                      borderColor: "rgba(99,102,241,0.3)",
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className={`flex items-center mb-1 gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                      <StepIcon 
                        className={`w-4 h-4 text-[#3B82F6] ${index % 2 === 0 ? 'md:order-last' : ''}`} 
                      />
                      <h3 className="text-lg font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[#CBD5E1] text-sm leading-tight">{step.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* CTA Button - Centered */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3, delay: 0.45 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] w-[220px] transition-all duration-300 text-white 
              rounded-full font-medium px-4 py-4 h-auto shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
              animate-pulse-subtle hover:animate-none hover:scale-105"
          >
            Slash Your Busywork Now →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 