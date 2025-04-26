"use client";

import React, { useEffect } from "react";
import useDarkMode from "@/app/hooks/useDarkMode";
import Hero from "@/app/components/sections/Hero";
import HowItWorks from "@/app/components/sections/HowItWorks";
import WhyNibsol from "@/app/components/sections/WhyNibsol";
import IndustriesTransform from "@/app/components/sections/IndustriesTransform";
import SocialProof from "@/app/components/sections/SocialProof";
import ObjectionCrusher from "@/app/components/sections/ObjectionCrusher";
import FinalCta from "@/app/components/sections/FinalCta";
import Contact from "@/app/components/sections/Contact";
import FAQSection from "@/app/components/sections/FAQSection";

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
      <HowItWorks />
      <WhyNibsol />
      <IndustriesTransform />
      <SocialProof />
      <FAQSection />
      <ObjectionCrusher />
      <FinalCta />
      <Contact />
    </>
  );
} 