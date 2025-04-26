"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/app/components/ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError("Please enter your email");
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    
    setError("");
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      setEmail("");
      
      // Reset success message after a few seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      
    } catch (err) {
      setError("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="mt-4">
      <p className="text-sm text-muted-foreground mb-3">
        Get updates on our latest AI innovations:
      </p>
      
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className={`w-full py-2 px-3 pr-12 bg-background/50 backdrop-blur-sm rounded-lg border ${error ? 'border-red-500' : 'border-border'} focus:outline-none focus:ring-1 focus:ring-primary text-sm transition-colors`}
          disabled={isSubmitting || isSuccess}
        />
        
        <Button
          type="submit"
          size="sm"
          disabled={isSubmitting || isSuccess}
          className="absolute right-1 top-1 h-7 w-7 px-0 flex items-center justify-center"
          aria-label="Subscribe to newsletter"
        >
          {isSubmitting ? (
            <LoadingSpinner />
          ) : (
            <Send className="h-3.5 w-3.5" />
          )}
        </Button>
      </form>
      
      {error && (
        <motion.p 
          className="text-xs text-red-500 mt-1"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {error}
        </motion.p>
      )}
      
      {isSuccess && (
        <motion.p 
          className="text-xs text-emerald-500 mt-1"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          Thanks for subscribing!
        </motion.p>
      )}
    </div>
  );
};

const LoadingSpinner = () => (
  <svg 
    className="animate-spin h-3.5 w-3.5 text-white" 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24"
  >
    <circle 
      className="opacity-25" 
      cx="12" 
      cy="12" 
      r="10" 
      stroke="currentColor" 
      strokeWidth="4"
    ></circle>
    <path 
      className="opacity-75" 
      fill="currentColor" 
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

export default Newsletter; 