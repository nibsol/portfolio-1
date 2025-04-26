"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { cardHoverVariants, itemVariants } from "@/app/components/animations/variants";

const TypingIndicator: React.FC = () => {
  const [dots, setDots] = useState("");
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  return <span className="inline-block w-8">{dots}</span>;
};

interface ContactInfoProps {
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ className = "" }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const contactItems = [
    {
      id: "email",
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      content: "info@nibsol.com",
      delay: 0
    },
    {
      id: "phone",
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      delay: 0.1
    },
    {
      id: "chat",
      icon: <MessageSquare className="h-5 w-5 text-primary" />,
      title: "Chat",
      content: (
        <span className="flex items-center">
          Live chat available <TypingIndicator />
        </span>
      ),
      delay: 0.2
    }
  ];
  
  return (
    <motion.div 
      className={`space-y-6 ${className}`}
      style={{ y }}
    >
      <div>
        <motion.h3 
          className="text-xl font-semibold mb-2"
          variants={itemVariants}
        >
          Contact Information
        </motion.h3>
        <motion.p 
          className="text-muted-foreground"
          variants={itemVariants}
        >
          Fill out the form or contact us directly using the information below.
        </motion.p>
      </div>
      
      <div className="space-y-4 mt-8">
        {contactItems.map((item) => (
          <motion.div 
            key={item.id}
            className="relative flex items-center p-4 rounded-lg bg-card dark:bg-card/50 backdrop-blur-sm border border-border"
            variants={cardHoverVariants}
            initial="initial"
            whileHover="hover"
            custom={item.delay}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent dark:from-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="mr-3 p-3 rounded-full bg-primary/10">
              {item.icon}
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{item.title}</p>
              <p className="font-medium">{item.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="pt-4 mt-4 border-t border-border"
        variants={itemVariants}
      >
        <h4 className="text-sm font-medium mb-2">Our Office Hours</h4>
        <p className="text-sm text-muted-foreground">
          Monday - Friday: 9:00 AM - 6:00 PM EST<br />
          Saturday: 10:00 AM - 2:00 PM EST<br />
          Sunday: Closed
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo; 