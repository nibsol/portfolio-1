import { useState, useEffect, useRef, useCallback } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

/**
 * Custom hook for efficient intersection observer implementation
 * Triggers a callback only when an element enters the viewport
 */
const useIntersectionObserver = <T extends HTMLElement = HTMLDivElement>({
  root = null,
  rootMargin = '0px',
  threshold = 0.1,
  triggerOnce = true,
}: IntersectionObserverOptions = {}) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const elementRef = useRef<T | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasTriggered = useRef<boolean>(false);

  const frozenEntry = entry;

  // Memoized callback to avoid unnecessary observer recreation
  const updateEntry = useCallback(([entry]: IntersectionObserverEntry[]) => {
    // Only update state if not yet triggered or triggerOnce is false
    if (!hasTriggered.current || !triggerOnce) {
      setEntry(entry);
      setIsIntersecting(entry.isIntersecting);
      
      // Mark as triggered if entry is intersecting and triggerOnce is true
      if (entry.isIntersecting && triggerOnce) {
        hasTriggered.current = true;
      }
    }
  }, [triggerOnce]);

  useEffect(() => {
    const element = elementRef.current;
    
    // Don't create observer if no element or already triggered once
    if (!element || (hasTriggered.current && triggerOnce)) return;
    
    // Check if browser supports IntersectionObserver
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver(updateEntry, {
        root,
        rootMargin,
        threshold,
      });

      observerRef.current.observe(element);
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      setIsIntersecting(true);
    }
    
    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [root, rootMargin, threshold, triggerOnce, updateEntry]);

  return { 
    ref: elementRef, 
    entry: frozenEntry, 
    isIntersecting 
  };
};

export default useIntersectionObserver; 