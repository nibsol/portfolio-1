"use client";

import React, { useEffect } from "react";
import useDarkMode from "@/app/hooks/useDarkMode";
import Hero from "@/app/components/sections/Hero";
import AISolutions from "@/app/components/sections/AISolutions";
import Contact from "@/app/components/sections/Contact";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";

export default function Home() {
  // Apply dark mode based on system preference
  const { isDarkMode } = useDarkMode();
  
  // This effect adds or removes the dark class based on system preference
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <Hero />
      <AISolutions />
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our AI solutions and services.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What AI services do you offer?</AccordionTrigger>
              <AccordionContent>
                <p className="text-lg">
                  We offer a comprehensive range of AI services including automation solutions, 
                  educational technology platforms, custom AI integrations, and data analytics. 
                  Our solutions are tailored to meet the specific needs of your business.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How can AI benefit my business?</AccordionTrigger>
              <AccordionContent>
                <p className="text-lg">
                  AI can transform your business by automating repetitive tasks, providing 
                  valuable insights from data, personalizing customer experiences, and 
                  optimizing operations for greater efficiency and cost savings.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What is your development process?</AccordionTrigger>
              <AccordionContent>
                <p className="text-lg">
                  Our development process involves understanding your business needs, 
                  designing a tailored solution, implementing the technology, testing 
                  for quality and performance, and providing ongoing support and 
                  maintenance after deployment.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <Contact />
    </>
  );
} 