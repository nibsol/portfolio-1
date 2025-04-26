import { ReportHandler } from 'web-vitals';

// Log performance metrics to console in development and to analytics in production
export function reportWebVitals(onPerfEntry?: ReportHandler) {
  // Check if we're in the browser environment to avoid SSR issues
  if (typeof window === 'undefined') return;
  
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Use dynamic import to ensure this only runs on the client
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry);
      onFID(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    });
  }
}

// Enable React Profiler in development mode
export function enableReactProfiler() {
  // Only run in browser and in development mode
  if (typeof window === 'undefined') return;
  
  if (process.env.NODE_ENV === 'development') {
    console.log('React Profiler enabled. Open React DevTools to analyze component performance.');
  }
}

// Detect if device is low-end
export function isLowEndDevice() {
  if (typeof window === 'undefined') return false;
  
  // Check for device memory API
  const lowMemory = 'deviceMemory' in navigator && (navigator as any).deviceMemory < 4;
  
  // Check for hardware concurrency (CPU cores)
  const lowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
  
  // Check if device has reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  return lowMemory || lowCPU || prefersReducedMotion;
}

// Debounce function for scroll events
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return function(...args: Parameters<T>): void {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function for animation frames
export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;
  
  return function(...args: Parameters<T>): void {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
} 