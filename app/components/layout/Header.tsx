"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback, memo } from "react";
import { Menu, X, ChevronDown, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { throttle } from "@/app/lib/performance";

// Define navigation items outside component to prevent recreation
const navItems = [
  { title: "Home", href: "/" },
  { title: "How It Works", href: "#how-it-works" },
  { title: "Why Nibsol", href: "#why-nibsol" },
  { title: "Industries", href: "#industries" },
  { title: "Social Proof", href: "#social-proof" },
  { title: "FAQ", href: "#faq" },
  { title: "Contact", href: "#contact" },
];

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const mobileNavVariants = {
  closed: { opacity: 0, scale: 0.95 },
  open: { opacity: 1, scale: 1 }
};

const navItemVariants = {
  closed: { opacity: 0, y: -10 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 + 0.1 }
  })
};

// Logo component with scroll to top functionality
const Logo = memo(() => {
  // Function to scroll to top
  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <Link href='/' className='flex items-center gap-2 z-50 group' onClick={handleLogoClick}>
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className='font-bold text-xl bg-gradient-to-r from-[#3B82F6] to-[#6366F1] bg-clip-text text-transparent 
                   transition-all duration-300 group-hover:scale-110'
      >
        Nibsol
        <span
          className='absolute -mt-1 ml-0.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#6366F1] 
                    animate-pulse'
        ></span>
      </motion.span>
    </Link>
  );
});

Logo.displayName = "Logo";

// Desktop Navigation component
const DesktopNav = memo(({ activeSection }: { activeSection: string }) => {
  // State for active indicator position
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  // Update indicator position based on active section
  useEffect(() => {
    if (navRef.current) {
      const activeLink = navRef.current.querySelector(`[data-active="true"]`) as HTMLElement;
      if (activeLink) {
        setIndicatorStyle({
          left: activeLink.offsetLeft,
          width: activeLink.offsetWidth
        });
      }
    }
  }, [activeSection]);

  return (
    <nav className='hidden md:flex absolute left-1/2 transform -translate-x-1/2'>
      <div 
        ref={navRef}
        className='relative flex rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-1.5 py-0.5'
      >
        {/* Active indicator - animated underline/background */}
        <motion.div 
          className="absolute h-8 rounded-full bg-white/5 z-0"
          animate={{ 
            left: indicatorStyle.left,
            width: indicatorStyle.width
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        
        {navItems.map((item, index) => {
          const isActive =
            item.href === "/"
              ? activeSection === "home"
              : item.href.replace("#", "") === activeSection;

          return (
            <Link
              key={index}
              href={item.href}
              data-active={isActive}
              aria-current={isActive ? "page" : undefined}
              className={`relative nav-link text-center px-3 py-1.5 rounded-full transition-all duration-300
                          hover:text-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 
                          ${isActive ? "text-[#3B82F6] font-medium" : "text-white"}`}
            >
              <span className='relative z-10'>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
});

DesktopNav.displayName = "DesktopNav";

// Mobile Navigation component
const MobileNav = memo(({ 
  isOpen, 
  activeSection, 
  onClose 
}: { 
  isOpen: boolean; 
  activeSection: string; 
  onClose: () => void;
}) => {
  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className='md:hidden fixed inset-0 bg-background/95 backdrop-blur-md flex items-center justify-center z-40'
          initial="closed"
          animate="open"
          exit="closed"
          variants={mobileNavVariants}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
        >
          <div className='flex flex-col items-center space-y-5 py-4'>
            {navItems.map((item, index) => {
              const isActive =
                item.href === "/"
                  ? activeSection === "home"
                  : item.href.replace("#", "") === activeSection;

              return (
                <motion.div key={index} custom={index} variants={navItemVariants}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-xl transition-all hover:text-[#3B82F6] hover:scale-105
                              focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 rounded-lg px-3 py-1
                              ${isActive 
                                ? "text-[#3B82F6] font-medium" 
                                : "text-white"}`}
                    onClick={onClose}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div custom={navItems.length} variants={navItemVariants}>
              <Link
                href='#contact'
                className='mt-3 block text-base font-medium bg-gradient-to-r from-[#3B82F6] to-[#6366F1] 
                           hover:scale-105 text-white px-6 py-2 rounded-full transition-all duration-300 
                           hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 focus:ring-offset-2'
                onClick={onClose}
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

MobileNav.displayName = "MobileNav";

// Scroll to top button
const ScrollToTopButton = memo(({ show }: { show: boolean }) => {
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          className="fixed bottom-4 right-4 p-2 rounded-full bg-[#3B82F6]/80 text-white 
                    shadow-lg backdrop-blur-sm z-40 hover:bg-[#3B82F6] transition-colors
                    focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50 focus:ring-offset-2"
          onClick={handleScrollToTop}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
});

ScrollToTopButton.displayName = "ScrollToTopButton";

// Custom hook for intersection observer
const useIntersectionObserver = () => {
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      {
        rootMargin: "-80px 0px -20% 0px", // Adjust margins to trigger at appropriate scroll positions
        threshold: 0.3, // Trigger when 30% of section is visible
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    // Handle home section specially
    if (window.scrollY < 100) {
      setActiveSection("home");
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return activeSection;
};

// Main Header component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const activeSection = useIntersectionObserver();
  const prevScrollY = useRef(0);
  const rafRef = useRef<number | null>(null);

  // Optimized scroll handler using rAF
  const handleScroll = useCallback(() => {
    rafRef.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      
      // Update header state based on scroll position
      setScrolled(currentScrollY > 50);
      
      // Show/hide scroll to top button
      setShowScrollTop(currentScrollY > 500);

      prevScrollY.current = currentScrollY;
    });
  }, []);

  // Throttled scroll listener
  useEffect(() => {
    const throttledScrollHandler = throttle(handleScroll, 100);
    
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    // Initial call to set correct states
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  // Toggle mobile menu with haptic feedback (on supported browsers)
  const toggleMenu = useCallback(() => {
    if (isMenuOpen && 'vibrate' in navigator) {
      // Provide subtle haptic feedback when supported
      navigator.vibrate(5);
    }
    setIsMenuOpen(prev => !prev);
  }, [isMenuOpen]);

  // Close menu when route changes
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                  ${scrolled
                    ? "bg-background/70 backdrop-blur-md shadow-md py-1 will-change-transform"
                    : "bg-transparent py-2"
                  }`}
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between h-12'>
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <DesktopNav activeSection={activeSection} />

            {/* CTA Button */}
            <div className='hidden md:block'>
              <Link
                href='#contact'
                className='text-sm font-medium bg-gradient-to-r from-[#3B82F6] to-[#6366F1] 
                           hover:scale-105 text-white px-4 py-1.5 rounded-full transition-all duration-300 
                           hover:shadow-lg hover:shadow-[#3B82F6]/20 focus:outline-none focus:ring-2 
                           focus:ring-[#3B82F6]/50 focus:ring-offset-2'
                aria-label="Contact us to get started"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className='flex md:hidden items-center justify-center rounded-full p-1.5 text-foreground z-50
                       hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 
                       focus:ring-[#3B82F6]/50'
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: isMenuOpen ? -45 : 45 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: isMenuOpen ? 45 : -45 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? (
                    <X className='h-5 w-5' />
                  ) : (
                    <Menu className='h-5 w-5' />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={isMenuOpen} 
        activeSection={activeSection} 
        onClose={closeMenu} 
      />

      {/* Scroll to top button */}
      <ScrollToTopButton show={showScrollTop} />
    </>
  );
};

export default Header;
