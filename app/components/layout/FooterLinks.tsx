"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface FooterLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

interface FooterLinksProps {
  links: FooterLink[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle internal hash links
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <ul className="space-y-2">
      {links.map((link, index) => (
        <motion.li
          key={link.label}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.07 }}
        >
          <Link 
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="group flex items-center text-muted-foreground hover:text-primary transition-colors relative"
            target={link.isExternal ? "_blank" : undefined}
            rel={link.isExternal ? "noopener noreferrer" : undefined}
          >
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              {link.label}
            </span>
            
            {link.isExternal && (
              <ExternalLink className="ml-1 h-3 w-3 opacity-70" />
            )}
            
            <motion.span 
              className="absolute -bottom-1 left-0 h-[1px] bg-primary origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};

export default FooterLinks; 