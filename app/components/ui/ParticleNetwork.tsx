"use client";

import { useEffect, useRef, memo, useState, useMemo } from 'react';
import { isLowEndDevice, throttle } from '@/app/lib/performance';

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  color: string;
}

interface ParticleNetworkProps {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  speed?: number;
  connectionOpacity?: number;
  connectionWidth?: number;
  connectionDistance?: number;
  connectionColor?: string;
  className?: string;
  interactive?: boolean;
}

const ParticleNetwork = memo(({
  background = 'transparent',
  minSize = 0.5,
  maxSize = 2,
  particleDensity = 10,
  particleColor = '#6366f1',
  speed = 0.2,
  connectionOpacity = 0.3,
  connectionWidth = 0.5,
  connectionDistance = 120,
  connectionColor = 'rgba(99, 102, 241, 0.3)',
  className = "",
  interactive = false
}: ParticleNetworkProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });
  const canvasSizeRef = useRef({ width: 0, height: 0 });
  const [lowEndDevice, setLowEndDevice] = useState(false);

  // Optimize particle density based on device capability
  const optimizedDensity = useMemo(() => {
    return lowEndDevice ? Math.round(particleDensity * 0.4) : particleDensity;
  }, [particleDensity, lowEndDevice]);

  // Optimize connection distance based on device capability
  const optimizedDistance = useMemo(() => {
    return lowEndDevice ? Math.round(connectionDistance * 0.7) : connectionDistance;
  }, [connectionDistance, lowEndDevice]);

  useEffect(() => {
    // Check if device is low-end
    setLowEndDevice(isLowEndDevice());

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvasSizeRef.current = { width: canvas.width, height: canvas.height };
      ctx.scale(dpr, dpr);
    };

    // Create particles
    const createParticles = () => {
      const { width, height } = canvasSizeRef.current;
      const particleCount = Math.floor((width * height) / (15000 / optimizedDensity));
      const particles: Particle[] = [];

      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * (maxSize - minSize) + minSize;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          color: particleColor,
        });
      }

      particlesRef.current = particles;
    };

    // Throttled draw function to limit rendering
    const drawThrottled = throttle(() => {
      if (!ctx) return;
      const { width, height } = canvasSizeRef.current;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      const particles = particlesRef.current;
      
      // Draw connections - only on higher-end devices or with fewer particles
      if (!lowEndDevice || particles.length < 50) {
        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];
          
          // Limit connections to improve performance
          const connectionLimit = lowEndDevice ? 3 : 5;
          let connectionsDrawn = 0;
          
          // Draw connections between particles
          for (let j = i + 1; j < particles.length; j++) {
            if (connectionsDrawn >= connectionLimit) break;
            
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < optimizedDistance) {
              ctx.beginPath();
              ctx.strokeStyle = connectionColor;
              ctx.lineWidth = connectionWidth;
              ctx.globalAlpha = (1 - distance / optimizedDistance) * connectionOpacity;
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
              ctx.globalAlpha = 1;
              connectionsDrawn++;
            }
          }
          
          // Draw connection to mouse if interactive
          if (interactive && mouseRef.current.isActive && !lowEndDevice) {
            const dx = p1.x - mouseRef.current.x;
            const dy = p1.y - mouseRef.current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < optimizedDistance * 1.5) {
              ctx.beginPath();
              ctx.strokeStyle = connectionColor;
              ctx.lineWidth = connectionWidth * 1.5;
              ctx.globalAlpha = (1 - distance / (optimizedDistance * 1.5)) * connectionOpacity * 1.5;
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
              ctx.stroke();
              ctx.globalAlpha = 1;
            }
          }
        }
      }
      
      // Draw particles
      for (const particle of particles) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;
      }
    }, lowEndDevice ? 33 : 16); // 30fps for low-end, 60fps for high-end
    
    // Animation loop
    const draw = () => {
      drawThrottled();
      animationRef.current = requestAnimationFrame(draw);
    };

    // Handle resize
    const handleResize = () => {
      setCanvasSize();
      createParticles();
    };

    // Mouse interaction - throttled for performance
    const handleMouseMove = throttle((e: MouseEvent) => {
      if (!interactive) return;
      
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      mouseRef.current = {
        x: (e.clientX - rect.left) * dpr,
        y: (e.clientY - rect.top) * dpr,
        isActive: true
      };
    }, 50); // 20 updates per second max

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };

    // Initialize
    setCanvasSize();
    createParticles();
    draw();

    // Event listeners
    window.addEventListener('resize', handleResize);
    if (interactive && !lowEndDevice) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interactive && !lowEndDevice) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationRef.current);
    };
  }, [
    minSize, 
    maxSize, 
    optimizedDensity, 
    particleColor, 
    speed, 
    connectionOpacity, 
    connectionWidth, 
    optimizedDistance,
    connectionColor,
    interactive,
    lowEndDevice
  ]);

  // For very low-end devices in dev mode, show a simplified version
  if (lowEndDevice && process.env.NODE_ENV === 'development') {
    return (
      <div className={`w-full h-full ${className}`} style={{ background }} />
    );
  }

  return (
    <canvas 
      ref={canvasRef} 
      className={`w-full h-full ${className}`}
      style={{ 
        background,
        transform: 'translate3d(0,0,0)', // Hardware acceleration
        willChange: 'transform', // Signal to browser this will animate
      }}
    />
  );
});

// Add display name for React DevTools
ParticleNetwork.displayName = "ParticleNetwork";

export default ParticleNetwork; 