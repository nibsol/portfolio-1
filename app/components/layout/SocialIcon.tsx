"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  delay?: number;
}

const SocialIcon: React.FC<SocialIconProps> = ({ 
  href, 
  icon, 
  label,
  delay = 0 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 15, 
        delay: delay * 0.1 + 0.2 
      }}
      whileHover={{ y: -3 }}
    >
      <Link 
        href={href}
        className="relative block text-muted-foreground hover:text-primary transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{
            scale: isHovered ? [1, 1.2, 1.1] : 1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut"
          }}
        >
          {icon}
        </motion.div>
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-primary rounded-full blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ zIndex: -1 }}
        />
      </Link>
      
      {/* Tooltip */}
      <motion.div
        className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 bg-card px-2 py-1 rounded text-xs font-medium shadow-sm border border-border whitespace-nowrap z-10"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -5 }}
        transition={{ duration: 0.2 }}
      >
        {label}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-card border-t border-l border-border" />
      </motion.div>
    </motion.div>
  );
};

export default SocialIcon; 