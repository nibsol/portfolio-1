"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown, Clock, CreditCard, Database, Settings, Star, Zap } from "lucide-react";
import { SparklesCore } from "@/app/components/ui/sparkles";

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
  icon: React.ReactNode;
  estimatedReadTime: string;
}

const FAQSection = React.memo(() => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const faqItems: FAQItem[] = [
    {
      id: "ai-services",
      question: "What AI services do you offer?",
      answer: (
        <div className="space-y-2">
          <p>We offer a comprehensive range of AI services including:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Automated customer service solutions</li>
            <li>Educational technology platforms</li>
            <li>Custom AI integrations for existing systems</li>
            <li>Predictive analytics and business intelligence</li>
            <li>AI-powered workflow automation</li>
          </ul>
          <p>All solutions are tailored to meet the specific needs of your business.</p>
        </div>
      ),
      icon: <Zap className="h-5 w-5 text-amber-500" />,
      estimatedReadTime: "45s"
    },
    {
      id: "ai-benefits",
      question: "How can AI benefit my business?",
      answer: (
        <div className="space-y-2">
          <p>AI can transform your business by:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Automating repetitive tasks, saving 15-40 hours per week</li>
            <li>Providing valuable insights from data you already collect</li>
            <li>Personalizing customer experiences to increase conversion rates</li>
            <li>Optimizing operations for 20-35% greater efficiency</li>
            <li>Reducing operational costs by 15-30% in the first year</li>
          </ul>
        </div>
      ),
      icon: <Star className="h-5 w-5 text-emerald-500" />,
      estimatedReadTime: "35s"
    },
    {
      id: "dev-process",
      question: "What is your development process?",
      answer: (
        <div className="space-y-2">
          <p>Our development process follows these key steps:</p>
          <ol className="list-decimal list-inside space-y-1 ml-2">
            <li>Discovery & needs assessment (1-2 weeks)</li>
            <li>Solution design and prototype development (2-3 weeks)</li>
            <li>Implementation & integration with existing systems (2-4 weeks)</li>
            <li>Testing and quality assurance (1-2 weeks)</li>
            <li>Deployment and ongoing support/optimization</li>
          </ol>
          <p>Most solutions are fully operational within 6-8 weeks from kickoff.</p>
        </div>
      ),
      icon: <Settings className="h-5 w-5 text-blue-500" />,
      estimatedReadTime: "50s"
    },
    {
      id: "implementation",
      question: "How long does AI implementation typically take?",
      answer: (
        <div className="space-y-2">
          <p>Implementation timelines vary based on complexity:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li><strong>Basic automation:</strong> 2-4 weeks</li>
            <li><strong>Mid-level integration:</strong> 4-8 weeks</li>
            <li><strong>Enterprise-wide solutions:</strong> 8-12 weeks</li>
          </ul>
          <p>We provide detailed timeline estimates during the discovery phase and offer accelerated implementation options when needed.</p>
        </div>
      ),
      icon: <Clock className="h-5 w-5 text-indigo-500" />,
      estimatedReadTime: "40s"
    },
    {
      id: "pricing",
      question: "What is your pricing structure?",
      answer: (
        <div className="space-y-2">
          <p>We offer flexible pricing options to accommodate businesses of all sizes:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li><strong>Starter:</strong> $499/month (ideal for small businesses)</li>
            <li><strong>Professional:</strong> $999/month (mid-sized operations)</li>
            <li><strong>Enterprise:</strong> Custom pricing based on needs</li>
          </ul>
          <p>All plans include implementation support, training, and ongoing maintenance. We also offer a 90-day ROI guarantee—if you don't see positive returns, we'll refund your subscription fees.</p>
        </div>
      ),
      icon: <CreditCard className="h-5 w-5 text-purple-500" />,
      estimatedReadTime: "45s"
    },
    {
      id: "data-security",
      question: "How do you handle data security and privacy?",
      answer: (
        <div className="space-y-2">
          <p>Security and privacy are foundational to our services:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>SOC 2 Type II certified infrastructure</li>
            <li>GDPR and CCPA compliant data handling processes</li>
            <li>Bank-level encryption (AES-256) for all data</li>
            <li>Regular penetration testing and security audits</li>
            <li>Optional on-premise deployment for sensitive industries</li>
          </ul>
          <p>We can sign custom data processing agreements to accommodate specific regulatory requirements in your industry.</p>
        </div>
      ),
      icon: <Database className="h-5 w-5 text-red-500" />,
      estimatedReadTime: "50s"
    }
  ];

  const toggleAccordion = (id: string) => {
    setOpenItem(openItem === id ? null : id);
    
    // Smooth scroll to the item if it's opening
    if (openItem !== id) {
      setTimeout(() => {
        const element = document.getElementById(`faq-item-${id}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="absolute inset-0 z-0 opacity-40">
        <SparklesCore
          id="sparkles-faq"
          background="transparent"
          minSize={0.2}
          maxSize={0.6}
          particleDensity={6}
          className="w-full h-full"
          particleColor="hsl(var(--primary))"
          speed={0.05}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Find answers to common questions about our AI solutions and services.
          </motion.p>
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div 
                key={item.id}
                id={`faq-item-${item.id}`}
                variants={itemVariants}
                className={`rounded-xl border border-slate-200/60 dark:border-slate-800/60 overflow-hidden 
                  ${openItem === item.id ? 'shadow-sm shadow-indigo-200 dark:shadow-indigo-900/30' : ''}`}
                whileHover={openItem !== item.id ? { scale: 1.01 } : {}}
                transition={{ duration: 0.2 }}
              >
                <div 
                  className={`flex items-center justify-between p-5 cursor-pointer
                    ${openItem === item.id ? 'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50' : 'hover:bg-slate-50/80 dark:hover:bg-slate-800/80'}`}
                  onClick={() => toggleAccordion(item.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-medium">{item.question}</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    {openItem !== item.id && (
                      <motion.span 
                        className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Clock className="h-3 w-3" /> {item.estimatedReadTime}
                      </motion.span>
                    )}
                    <motion.div
                      animate={{ 
                        rotate: openItem === item.id ? 180 : 0,
                      }}
                      transition={{ 
                        duration: 0.4,
                        ease: [0.34, 1.56, 0.64, 1] // ease-out-back
                      }}
                      className="bg-slate-100 dark:bg-slate-800 rounded-full p-1"
                    >
                      <ChevronDown className="h-5 w-5 text-slate-500" />
                    </motion.div>
                  </div>
                </div>
                
                <AnimatePresence>
                  {openItem === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: "auto", 
                        opacity: 1,
                      }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { 
                          duration: 0.3,
                          ease: [0.33, 1, 0.68, 1] // cubic-bezier spring-like curve
                        },
                        opacity: { duration: 0.2 }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-2 border-t border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Subtle pulse animation for closed items */}
                {openItem !== item.id && (
                  <motion.div 
                    className="absolute inset-0 bg-indigo-400/0 pointer-events-none"
                    animate={{ 
                      backgroundColor: ['rgba(99, 102, 241, 0)', 'rgba(99, 102, 241, 0.03)', 'rgba(99, 102, 241, 0)']
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: index * 1.5,
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

FAQSection.displayName = "FAQSection";

export default FAQSection; 