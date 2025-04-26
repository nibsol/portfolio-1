"use client";

import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "@/app/components/animations/variants";

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FooterSection = ({ 
  title, 
  children, 
  delay = 0,
  className = ""
}: FooterSectionProps) => {
  return (
    <motion.div 
      className={`space-y-4 ${className}`}
      variants={itemVariants}
      custom={delay}
    >
      <motion.h3 
        className="text-lg font-semibold mb-4 relative inline-block"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay * 0.1 }}
      >
        {title}
        <motion.span 
          className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary/80 to-transparent"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: (delay * 0.1) + 0.3 }}
        />
      </motion.h3>
      {children}
    </motion.div>
  );
};

export default FooterSection; 