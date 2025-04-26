"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ParticleNetwork from "@/app/components/ui/ParticleNetwork";
import { contactParticleConfig } from "@/app/components/animations/particleConfig";
import { containerVariants, itemVariants } from "@/app/components/animations/variants";
import ContactForm from "@/app/components/sections/contact/ContactForm";
import ContactInfo from "@/app/components/sections/contact/ContactInfo";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  return (
    <section id="contact" ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Advanced particle network background */}
      <div className="absolute inset-0 z-0">
        <ParticleNetwork 
          {...contactParticleConfig}
          className="w-full h-full"
        />
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      {/* Gradient mesh background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-900/10 to-purple-900/10 dark:from-indigo-900/20 dark:to-purple-900/20" />
      
      {/* Floating tech elements */}
      <div className="absolute top-24 right-16 w-24 h-24 rounded-full bg-primary/5 blur-2xl animate-pulse" />
      <div className="absolute bottom-20 left-12 w-32 h-32 rounded-full bg-primary/5 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      <motion.div
        className="absolute top-1/3 left-1/4 w-6 h-6 border-2 border-primary/20 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-primary/10 rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with AI? Contact us today to discuss your project.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="lg:col-span-2 space-y-6"
            variants={itemVariants}
          >
            <ContactInfo />
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3"
            variants={itemVariants}
          >
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 