"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    id: "automation",
    title: "AI Automation",
    description: "Our AI automation solutions streamline repetitive tasks, optimize workflows, and enhance productivity across your organization. From document processing to complex decision-making, our systems adapt to your business needs.",
    image: "/images/automation.jpg", // Will be replaced with placeholder
    features: [
      "Workflow automation",
      "Document processing",
      "Decision intelligence",
      "Process optimization"
    ]
  },
  {
    id: "edtech",
    title: "EdTech Solutions",
    description: "Transform learning experiences with our AI-powered educational technology. Create personalized learning journeys, automate assessment, and gain insights into student performance to improve educational outcomes.",
    image: "/images/edtech.jpg", // Will be replaced with placeholder
    features: [
      "Adaptive learning platforms",
      "Automated assessment",
      "Learning analytics",
      "Personalized content delivery"
    ]
  },
  {
    id: "saas",
    title: "SaaS Development",
    description: "We build scalable, AI-enhanced software-as-a-service solutions that grow with your business. Our custom SaaS products deliver continuous value and adapt to changing market demands.",
    image: "/images/saas.jpg", // Will be replaced with placeholder
    features: [
      "Custom SaaS development",
      "AI-enhanced features",
      "Scalable architecture",
      "Subscription management"
    ]
  }
];

const ServicesShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextService = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };
  
  const prevService = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };
  
  const currentService = services[currentIndex];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-background/60">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of AI-powered services designed to transform your business
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden border border-border">
                <div className="absolute inset-0 bg-blue-500/20 mix-blend-multiply z-10 rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 rounded-lg"></div>
                <Image
                  src={currentService.image || "https://images.unsplash.com/photo-1677442135136-760c813f9612"}
                  alt={currentService.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{currentService.title}</h3>
                <p className="text-muted-foreground">{currentService.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                  {currentService.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-10 gap-4">
            <button 
              onClick={prevService}
              className="p-2 rounded-full border border-border hover:bg-primary/10"
              aria-label="Previous service"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-10 rounded-full ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextService}
              className="p-2 rounded-full border border-border hover:bg-primary/10"
              aria-label="Next service"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase; 