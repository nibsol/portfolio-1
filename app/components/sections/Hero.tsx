"use client";

import { SparklesCore } from "@/app/components/ui/sparkles";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="h-full w-full"
          particleColor="#00A3FF"
          speed={0.5}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center space-y-6 mt-[-2rem]">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
            <span className="block">Intelligent AI Solutions for</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Tomorrow's Businesses
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-300">
            Empowering organizations with cutting-edge AI technology for automation, 
            educational platforms, and innovative SaaS solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition-all border-0"
              asChild
            >
              <a href="#services">Explore Solutions</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all border-white/20"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero; 