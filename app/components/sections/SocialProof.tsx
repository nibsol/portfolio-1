"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { SparklesCore } from "@/app/components/ui/sparkles";

const SocialProof = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const controls = useAnimation();
  
  // Number counter animation
  const [count, setCount] = useState(0);
  const targetCount = 23;
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      
      // Animate counter when in view
      if (count < targetCount) {
        const timer = setTimeout(() => {
          setCount(prev => Math.min(prev + 1, targetCount));
        }, 60);
        return () => clearTimeout(timer);
      }
    }
  }, [isInView, controls, count]);

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const headlineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const testimonials = [
    {
      quote: "Nibsol's AI agent handles 90% of our lead follow-ups. We scaled to 3 cities without hiring.",
      author: "Sarah K.",
      role: "Healthcare Founder"
    },
    {
      quote: "I thought AI was for tech bros. Now my $30k agency runs on 3 AI agents. Mind blown.",
      author: "Mike R.",
      role: "Marketing Consultant"
    }
  ];

  const headline = "1,200+ Hours Saved. 0 Excuses Made.";

  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-b from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="sparkles-social"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={8}
          className="w-full h-full"
          particleColor="hsl(var(--primary))"
          speed={0.1}
        />
      </div>
      
      <div 
        ref={containerRef} 
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.h2 
            className="text-center text-3xl md:text-5xl font-bold mb-4"
            variants={headlineVariants}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              {headline.split("").map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h2>
          
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-indigo-100 dark:border-indigo-900 rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
                variants={itemVariants}
              >
                <div className="text-indigo-500 dark:text-indigo-400 text-4xl font-serif mb-2">"</div>
                <p className="italic text-slate-700 dark:text-slate-300 mb-4">
                  {testimonial.quote}
                </p>
                <div className="mt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Stats Counter */}
          <motion.div 
            className="mt-12 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-indigo-100 dark:border-indigo-900 rounded-xl p-6 text-center"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center space-x-2">
              <motion.span 
                className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {count}
              </motion.span>
              <span className="text-xl md:text-2xl font-medium">
                SMBs automated <span className="text-indigo-600 dark:text-indigo-400 font-semibold">100+ hours/month</span> last quarter
              </span>
            </div>
          </motion.div>
          
          {/* Floating Badges */}
          <div className="absolute top-10 right-10 opacity-50">
            <motion.div
              className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Time Saved
            </motion.div>
          </div>
          
          <div className="absolute bottom-20 left-20 opacity-50">
            <motion.div
              className="bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              Automation
            </motion.div>
          </div>
          
          {/* See more button */}
          <motion.div 
            className="mt-10 text-center"
            variants={itemVariants}
          >
            <button className="group inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors">
              See more success stories
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof; 