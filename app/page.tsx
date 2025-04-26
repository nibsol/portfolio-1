"use client";

import React, { useEffect, Suspense, lazy } from "react";
import useDarkMode from "@/app/hooks/useDarkMode";
import Hero from "@/app/components/sections/Hero";
import { isLowEndDevice } from "@/app/lib/performance";

// Import essential sections directly
import HowItWorks from "@/app/components/sections/HowItWorks";

// Lazy load non-critical sections
const WhyNibsol = lazy(() => import("@/app/components/sections/WhyNibsol"));
const IndustriesTransform = lazy(() => import("@/app/components/sections/IndustriesTransform"));
const SocialProof = lazy(() => import("@/app/components/sections/SocialProof"));
const ObjectionCrusher = lazy(() => import("@/app/components/sections/ObjectionCrusher"));
const FinalCta = lazy(() => import("@/app/components/sections/FinalCta"));
const Contact = lazy(() => import("@/app/components/sections/Contact"));
const FAQSection = lazy(() => import("@/app/components/sections/FAQSection"));

// Simple loading component
const SectionLoading = () => (
  <div className="w-full py-20 flex items-center justify-center">
    <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
  </div>
);

export default function Home() {
  // Apply dark mode based on system preference
  const { isDarkMode } = useDarkMode();
  const [isLowEnd, setIsLowEnd] = React.useState(false);
  
  // Check for low-end device on mount
  useEffect(() => {
    setIsLowEnd(isLowEndDevice());
  }, []);
  
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
      
      {/* Lazy loaded sections with IntersectionObserver-based loading */}
      <Suspense fallback={<SectionLoading />}>
        <WhyNibsol />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <IndustriesTransform />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <SocialProof />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <FAQSection />
      </Suspense>
      
      {/* Conditionally render heavy animations based on device capability */}
      {!isLowEnd && (
        <Suspense fallback={<SectionLoading />}>
          <ObjectionCrusher />
        </Suspense>
      )}
      
      <Suspense fallback={<SectionLoading />}>
        <FinalCta />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <Contact />
      </Suspense>
    </>
  );
} 