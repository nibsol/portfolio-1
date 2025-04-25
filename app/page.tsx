"use client";

import React, { useEffect } from "react";
import useDarkMode from "@/app/hooks/useDarkMode";
import Hero from "@/app/components/sections/Hero";
import AISolutions from "@/app/components/sections/AISolutions";
import ServicesShowcase from "@/app/components/sections/ServicesShowcase";
import Contact from "@/app/components/sections/Contact";
import WorkSection from "@/app/components/sections/work-section";

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
      <ServicesShowcase />
      <WorkSection />
      <Contact />
    </>
  );
} 