"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled down 500px
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Add haptic feedback if supported
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };
  
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="fixed right-6 bottom-6 p-3 rounded-full bg-primary/90 backdrop-blur-sm text-white shadow-lg hover:bg-primary transition-colors z-50"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronUp className="h-5 w-5" />
          
          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white"
            initial={{ opacity: 0.3, scale: 1 }}
            animate={{ 
              opacity: 0,
              scale: 1.5,
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
              ease: "easeOut"
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop; 