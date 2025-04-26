"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Globe, Heart } from "lucide-react";
import ParticleNetwork from "@/app/components/ui/ParticleNetwork";
import { footerParticleConfig } from "@/app/components/animations/particleConfig";
import { containerVariants } from "@/app/components/animations/variants";
import SocialIcon from "@/app/components/layout/SocialIcon";
import FooterSection from "@/app/components/layout/FooterSection";
import FooterLinks from "@/app/components/layout/FooterLinks";
import Newsletter from "@/app/components/layout/Newsletter";
import BackToTop from "@/app/components/layout/BackToTop";

const Footer = React.memo(() => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });

  const serviceLinks = [
    { href: "#how-it-works", label: "AI Automation" },
    { href: "#industries-transform", label: "EdTech Solutions" },
    { href: "#why-nibsol", label: "SaaS Development" },
    { href: "#how-it-works", label: "AI Consultation" }
  ];

  const companyLinks = [
    { href: "#", label: "About Us" },
    { href: "https://careers.nibsol.com", label: "Careers", isExternal: true },
    { href: "https://blog.nibsol.com", label: "Blog", isExternal: true },
    { href: "#contact", label: "Contact" }
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" }
  ];

  const socialLinks = [
    { href: "https://twitter.com", icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
    { href: "https://github.com", icon: <Github className="h-5 w-5" />, label: "GitHub" },
    { href: "https://linkedin.com", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
    { href: "mailto:info@nibsol.com", icon: <Mail className="h-5 w-5" />, label: "Email" }
  ];

  return (
    <footer ref={footerRef} className="relative bg-background overflow-hidden">
      {/* Tech-themed background pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: `
            radial-gradient(circle at 25px 25px, rgba(99, 102, 241, 0.15) 2px, transparent 0),
            linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 25px 25px, 25px 25px'
        }} />
      </div>
      
      {/* Subtle particle effect */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <ParticleNetwork {...footerParticleConfig} />
      </div>
      
      {/* Gradient accent line instead of border */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
      
      <div className="container relative z-10 px-4 py-12 md:py-16 lg:py-20">
        <motion.div 
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="space-y-4">
            <motion.h3 
              className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent relative"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Nibsol
              <motion.div 
                className="absolute -z-10 -inset-1 bg-primary/5 rounded-lg blur-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              />
            </motion.h3>
            
            <motion.p 
              className="text-muted-foreground max-w-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Empowering businesses with intelligent AI systems that transform operations and drive innovation.
            </motion.p>
            
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {socialLinks.map((social, index) => (
                <SocialIcon
                  key={social.label}
                  href={social.href}
                  icon={social.icon}
                  label={social.label}
                  delay={index}
                />
              ))}
            </motion.div>
            
            <Newsletter />
          </div>
          
          <FooterSection title="Services" delay={1}>
            <FooterLinks links={serviceLinks} />
          </FooterSection>
          
          <FooterSection title="Company" delay={2}>
            <FooterLinks links={companyLinks} />
          </FooterSection>
          
          <FooterSection title="Legal" delay={3}>
            <FooterLinks links={legalLinks} />
          </FooterSection>
        </motion.div>
        
        <motion.div 
          className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {/* Gradient border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <p className="text-sm text-muted-foreground flex items-center">
            &copy; {currentYear} Nibsol. All rights reserved.
            <motion.span 
              className="inline-flex items-center ml-2"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                repeat: Infinity,
                repeatDelay: 5,
                duration: 0.5
              }}
            >
              Made with <Heart className="h-3 w-3 mx-1 text-red-500" /> in San Francisco
            </motion.span>
          </p>
          
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <p className="text-sm text-muted-foreground">
              AI Solutions for Automation, EdTech & SaaS
            </p>
            
            <motion.div 
              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Globe className="h-4 w-4 mr-1" />
              <select 
                className="bg-transparent text-xs border-none focus:outline-none cursor-pointer"
                defaultValue="en"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <BackToTop />
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer; 