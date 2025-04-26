"use client";

import { useEffect, useState, useCallback, memo } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { SparklesCore } from "@/app/components/ui/sparkles";
import { isLowEndDevice, throttle } from "@/app/lib/performance";
import { useCounter } from "@/app/lib/useCounter";

// Memoized testimonial card component for better performance
const TestimonialCard = memo(({ testimonial, variants }: { 
  testimonial: { quote: string; author: string; role: string }; 
  variants: any;
}) => (
  <motion.div
    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-indigo-100 dark:border-indigo-900 rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
    variants={variants}
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
));

// Add display name for React DevTools
TestimonialCard.displayName = "TestimonialCard";

// Badge component for floating animations
const FloatingBadge = memo(({ text, color, delay = 0 }: { 
  text: string; 
  color: "indigo" | "purple" | "blue" | "green"; // Restricted color types
  delay?: number 
}) => {
  const [reducedMotion, setReducedMotion] = useState(false);
  
  useEffect(() => {
    setReducedMotion(isLowEndDevice());
  }, []);
  
  // Get proper tailwind classes based on color
  const getColorClasses = (color: string) => {
    switch(color) {
      case 'indigo':
        return "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300";
      case 'purple':
        return "bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300";
      case 'blue':
        return "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300";
      case 'green':
        return "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300";
      default:
        return "bg-gray-100 dark:bg-gray-900/50 text-gray-800 dark:text-gray-300";
    }
  };
  
  // Skip animation for low-end devices
  if (reducedMotion) {
    return (
      <div className={`${getColorClasses(color)} px-3 py-1 rounded-full text-sm font-medium`}>
        {text}
      </div>
    );
  }
  
  return (
    <motion.div
      className={`${getColorClasses(color)} px-3 py-1 rounded-full text-sm font-medium`}
      animate={{
        y: [0, -5, 0], // Reduced animation range
      }}
      transition={{
        duration: 3, // Slower animation
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      {text}
    </motion.div>
  );
});

FloatingBadge.displayName = "FloatingBadge";

const SocialProof = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const controls = useAnimation();
  
  // Replace manual counter with useCounter hook
  const [reducedMotion, setReducedMotion] = useState(false);
  
  useEffect(() => {
    setReducedMotion(isLowEndDevice());
  }, []);
  
  // Use the optimized counter hook with appropriate settings
  const { value: count, start } = useCounter({
    start: 0,
    end: 23,
    duration: reducedMotion ? 0 : 1500, // Skip animation for reduced motion
    easing: "easeOutExpo", // Fast start, smooth end
    enabled: isInView, // Only run when in view
    autoStart: true, // Start automatically when enabled becomes true
    throttle: 60 // Throttle updates for performance
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Variants for animations - simplified for performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0.05 : 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reducedMotion ? 10 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0.3 : 0.6,
        ease: "easeOut"
      }
    }
  };

  // Simplified heading without letter-by-letter animation for better performance
  const headlineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 }
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
  
  // Memoized click handler to prevent unnecessary re-renders
  const handleSeeMoreClick = useCallback(() => {
    console.log("See more clicked");
    // Add your navigation or modal logic here
  }, []);

  return (
    <section id="social-proof" className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-b from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="sparkles-social"
          background="transparent"
          minSize={0.4}
          maxSize={0.8} // Reduced from 1
          particleDensity={reducedMotion ? 3 : 5} // Reduced from 8
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
          {/* Header - simplified animation */}
          <motion.h2 
            className="text-center text-3xl md:text-5xl font-bold mb-4"
            variants={headlineVariants}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              {headline}
            </span>
          </motion.h2>
          
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                testimonial={testimonial}
                variants={itemVariants}
              />
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
                transition={{ duration: 0.5 }}
              >
                {count}
              </motion.span>
              <span className="text-xl md:text-2xl font-medium">
                SMBs automated <span className="text-indigo-600 dark:text-indigo-400 font-semibold">100+ hours/month</span> last quarter
              </span>
            </div>
          </motion.div>
          
          {/* Simplified floating badges */}
          {!reducedMotion && (
            <>
              <div className="absolute top-10 right-10 opacity-50">
                <FloatingBadge text="Time Saved" color="indigo" />
              </div>
              
              <div className="absolute bottom-20 left-20 opacity-50">
                <FloatingBadge text="Automation" color="purple" delay={1} />
              </div>
            </>
          )}
          
          {/* See more button */}
          <motion.div 
            className="mt-10 text-center"
            variants={itemVariants}
          >
            <button 
              onClick={handleSeeMoreClick}
              className="group inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors"
            >
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

export default memo(SocialProof); 