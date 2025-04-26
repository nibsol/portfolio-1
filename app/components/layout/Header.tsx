"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { title: "Home", href: "/" },
  { title: "AI Solutions", href: "#ai-solutions" },
  { title: "Services", href: "#services" },
  { title: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        
        if (offset >= sectionTop && offset < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrolled 
        ? "bg-background/95 backdrop-blur-md shadow-md py-1" 
        : "bg-transparent py-2"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50 group">
            <span className="font-bold text-xl bg-gradient-to-r from-[#3B82F6] to-[#6366F1] bg-clip-text text-transparent 
                           transition-all duration-300 group-hover:scale-110">
              Nibsol
              <span className="absolute -mt-1 ml-0.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#6366F1] 
                              animate-pulse"></span>
            </span>
          </Link>
          
          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-1.5 py-0.5">
              {navItems.map((item, index) => {
                const isActive = item.href === "/" 
                  ? activeSection === "home" 
                  : item.href.replace("#", "") === activeSection;
                  
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`nav-link text-center px-3 py-1.5 rounded-full hover:bg-white/10 ${isActive ? 'text-[#3B82F6]' : 'text-white'}`}
                  >
                    <span className="relative z-10">{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="#contact"
              className="text-sm font-medium bg-gradient-to-r from-[#3B82F6] to-[#6366F1] hover:scale-105 text-white px-4 py-1.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#3B82F6]/20"
            >
              Get Started
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="flex md:hidden items-center justify-center rounded-full p-1.5 text-foreground z-50"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation - Fullscreen */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-md flex items-center justify-center z-40">
          <div className="flex flex-col items-center space-y-5 py-4">
            {navItems.map((item, index) => {
              const isActive = item.href === "/" 
                ? activeSection === "home" 
                : item.href.replace("#", "") === activeSection;
                
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`text-xl transition-colors hover:text-[#3B82F6] ${isActive ? 'text-[#3B82F6]' : 'text-white'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              );
            })}
            <Link 
              href="#contact"
              className="mt-3 text-base font-medium bg-gradient-to-r from-[#3B82F6] to-[#6366F1] hover:scale-105 text-white px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 