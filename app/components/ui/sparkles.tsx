"use client";
import React, { useId, useMemo } from "react";
import { useEffect, useState, memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, SingleOrMultiple } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/app/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { isLowEndDevice } from "@/app/lib/performance";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = memo((props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  
  const [init, setInit] = useState(false);
  const [lowEndDevice, setLowEndDevice] = useState(false);
  
  useEffect(() => {
    // Check for low-end device on client-side
    setLowEndDevice(isLowEndDevice());
    
    // Initialize particles engine with a lighter config for low-end devices
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
    
    // Clean up animation frames on unmount
    return () => {
      if (typeof window !== 'undefined') {
        const canvas = document.getElementById(id || generatedId) as HTMLCanvasElement;
        if (canvas) {
          const context = canvas.getContext('2d');
          if (context) {
            context.clearRect(0, 0, canvas.width, canvas.height);
          }
        }
      }
    };
  }, []);
  
  const controls = useAnimation();

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 0.8, // Reduced from 1 for faster visibility
        },
      });
    }
  };

  const generatedId = useId();
  
  // Calculate appropriate particle density based on device capability
  const optimizedDensity = useMemo(() => {
    const baseDensity = particleDensity || 120;
    if (lowEndDevice) {
      return Math.min(baseDensity * 0.3, 40); // Maximum 40 particles for low-end devices
    }
    return Math.min(baseDensity, 60); // Cap at 60 particles for better performance
  }, [particleDensity, lowEndDevice]);
  
  // If it's a low-end device and we're in development mode, we can skip rendering
  // for better developer experience
  if (lowEndDevice && process.env.NODE_ENV === 'development') {
    return (
      <div className={cn("h-full w-full bg-opacity-50", className)} style={{ background: background || '#0d47a1' }}>
        <div className="flex h-full items-center justify-center text-white text-opacity-50">
          {/* Placeholder for particles in dev mode on low-end devices */}
        </div>
      </div>
    );
  }

  // Use translate3d to trigger hardware acceleration
  return (
    <motion.div 
      animate={controls} 
      className={cn("opacity-0", className)}
      style={{ 
        transform: 'translate3d(0,0,0)', // Hardware acceleration
        willChange: 'opacity', // Signal to browser this will animate
      }}
    >
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || "#0d47a1",
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            // Set a lower FPS limit to reduce CPU usage
            fpsLimit: lowEndDevice ? 30 : 60,
            // Disable interactions on low-end devices
            interactivity: {
              events: {
                onClick: {
                  enable: !lowEndDevice,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                },
                resize: true as any,
              },
              modes: {
                push: {
                  quantity: lowEndDevice ? 1 : 2, // Reduce number of particles added on click
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              bounce: {
                horizontal: {
                  value: 1,
                },
                vertical: {
                  value: 1,
                },
              },
              collisions: {
                enable: false, // Disable collisions for better performance
              },
              color: {
                value: particleColor || "#ffffff",
                animation: {
                  h: {
                    enable: false, // Disable color animation for performance
                  },
                  s: {
                    enable: false,
                  },
                  l: {
                    enable: false,
                  },
                },
              },
              move: {
                angle: {
                  offset: 0,
                  value: 90,
                },
                attract: {
                  enable: false, // Disable complex movement patterns
                },
                center: {
                  x: 50,
                  y: 50,
                  mode: "percent",
                  radius: 0,
                },
                decay: 0,
                distance: {},
                direction: "none",
                drift: 0,
                enable: true,
                gravity: {
                  enable: false, // Disable gravity simulation for performance
                },
                path: {
                  enable: false, // Disable path following
                },
                outModes: {
                  default: "out",
                },
                random: false,
                size: false,
                speed: {
                  min: 0.1,
                  max: lowEndDevice ? 0.5 : 1, // Slower movement on low-end devices
                },
                spin: {
                  enable: false,
                },
                straight: false,
                trail: {
                  enable: false,
                },
                vibrate: false,
                warp: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 400,
                  height: 400,
                },
                limit: {
                  mode: "delete",
                  value: optimizedDensity, // Use our optimized density as a limit as well
                },
                value: optimizedDensity, // Use optimized particle count
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 1,
                },
                animation: {
                  count: 0,
                  enable: true,
                  speed: speed || (lowEndDevice ? 2 : 4), // Slower animations on low-end devices
                  decay: 0,
                  delay: 0,
                  sync: false,
                  mode: "auto",
                  startValue: "random",
                  destroy: "none",
                },
              },
              shape: {
                type: "circle", // Use simple shapes only
              },
              size: {
                value: {
                  min: minSize || 1,
                  max: maxSize || 3,
                },
                animation: {
                  enable: false, // Disable size animation for performance
                },
              },
              // Remove or simplify other heavy configurations
              links: {
                enable: false, // Disable particle links/connections
              }
            },
            detectRetina: false, // Disable retina detection for performance
          }}
        />
      )}
    </motion.div>
  );
});

// Add display name for React DevTools
SparklesCore.displayName = "SparklesCore";
