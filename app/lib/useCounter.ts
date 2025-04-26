import { useState, useEffect, useRef } from 'react';

type UseCounterProps = {
  start: number;
  end: number;
  duration?: number;
  easing?: 'linear' | 'easeInQuad' | 'easeOutQuad' | 'easeInOutQuad' | 'easeOutExpo';
  enabled?: boolean;
  autoStart?: boolean;
  throttle?: number;
  onComplete?: () => void;
};

/**
 * A performant counter hook for animations
 */
export const useCounter = ({
  start = 0,
  end,
  duration = 2000,
  easing = 'linear',
  enabled = true,
  autoStart = true,
  throttle = 30,
  onComplete
}: UseCounterProps) => {
  const [value, setValue] = useState(start);
  const [isRunning, setIsRunning] = useState(false);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastUpdateTimeRef = useRef<number>(0);

  // Easing functions
  const easingFunctions = {
    linear: (t: number) => t,
    easeInQuad: (t: number) => t * t,
    easeOutQuad: (t: number) => t * (2 - t),
    easeInOutQuad: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeOutExpo: (t: number) => (t === 1) ? 1 : 1 - Math.pow(2, -10 * t)
  };

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easingFunctions[easing](progress);
    
    // Apply throttling to reduce layout thrashing
    if (timestamp - lastUpdateTimeRef.current >= throttle || progress >= 1) {
      const newValue = Math.floor(start + easedProgress * (end - start));
      setValue(newValue);
      lastUpdateTimeRef.current = timestamp;
    }

    if (progress < 1) {
      rafRef.current = requestAnimationFrame(animate);
    } else {
      setValue(end);
      setIsRunning(false);
      onComplete?.();
    }
  };

  const startCounter = () => {
    if (isRunning || !enabled) return;
    
    // For instant counting (duration = 0)
    if (duration <= 0) {
      setValue(end);
      onComplete?.();
      return;
    }
    
    setIsRunning(true);
    startTimeRef.current = null;
    lastUpdateTimeRef.current = 0;
    rafRef.current = requestAnimationFrame(animate);
  };

  const stop = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setIsRunning(false);
  };

  const reset = () => {
    stop();
    setValue(start);
  };

  useEffect(() => {
    if (autoStart && enabled) {
      startCounter();
    }
    
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [enabled, autoStart]);

  return { value, isRunning, start: startCounter, stop, reset };
};

export default useCounter; 