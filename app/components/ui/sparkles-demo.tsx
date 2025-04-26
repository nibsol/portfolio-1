"use client";
import React, { useEffect, useState } from "react";
import { SparklesCore } from "@/app/components/ui/sparkles";
import { isLowEndDevice } from "@/app/lib/performance";

export function NibsolHero() {
  const [reducedMotion, setReducedMotion] = useState(false);
  
  useEffect(() => {
    setReducedMotion(isLowEndDevice());
  }, []);
  
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Nibsol
      </h1>
      <p className="text-white text-center text-xl md:text-2xl mt-4 relative z-20">
        AI Solutions for Automation, EdTech & SaaS
      </p>
      <div className="w-full h-40 relative mt-8">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/4" />

        {/* Core component - reduced particles */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={reducedMotion ? 40 : 60}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={reducedMotion ? 2 : 3}
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}

export function NibsolFeatures() {
  const [reducedMotion, setReducedMotion] = useState(false);
  
  useEffect(() => {
    setReducedMotion(isLowEndDevice());
  }, []);
  
  return (
    <div className="h-[40rem] relative w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={reducedMotion ? 30 : 50}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={reducedMotion ? 0.5 : 1}
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Automate & Innovate
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-8 relative z-20 max-w-6xl">
        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-3">AI Automation</h3>
          <p className="text-gray-300">Streamline your business processes with intelligent automation solutions powered by cutting-edge AI.</p>
        </div>
        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-3">EdTech Solutions</h3>
          <p className="text-gray-300">Revolutionize learning experiences with AI-driven educational technology platforms and tools.</p>
        </div>
        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-3">SaaS Products</h3>
          <p className="text-gray-300">Custom software solutions that scale with your business needs and provide continuous value.</p>
        </div>
      </div>
    </div>
  );
}

export function NibsolVision() {
  const [reducedMotion, setReducedMotion] = useState(false);
  
  useEffect(() => {
    setReducedMotion(isLowEndDevice());
  }, []);
  
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlescolorful"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={reducedMotion ? 30 : 50}
          className="w-full h-full"
          particleColor="#00A3FF"
          speed={reducedMotion ? 0.3 : 0.5}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 relative z-20">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-purple-600">
          Future-Ready Solutions
        </h1>
        <p className="text-blue-300 text-center text-xl md:text-2xl max-w-3xl px-8">
          Empowering businesses with intelligent AI systems that transform operations and drive innovation
        </p>
        <button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all">
          Start Your AI Journey
        </button>
      </div>
    </div>
  );
} 