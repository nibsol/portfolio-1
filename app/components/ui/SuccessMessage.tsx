"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import { successPanelVariants } from '@/app/components/animations/variants';
import confetti from 'canvas-confetti';

interface SuccessMessageProps {
  show: boolean;
  message: string;
  subMessage?: string;
  onClose: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ 
  show, 
  message, 
  subMessage, 
  onClose 
}) => {
  // Trigger confetti effect when the success message appears
  useEffect(() => {
    if (show) {
      const duration = 3 * 1000;
      const end = Date.now() + duration;

      // Configure and launch confetti
      const launchConfetti = () => {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#6366f1', '#a855f7', '#3b82f6']
        });
        
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#6366f1', '#a855f7', '#3b82f6']
        });
      };

      // Run initial confetti
      launchConfetti();
      
      // Schedule confetti at intervals
      const interval = setInterval(() => {
        if (Date.now() > end) {
          clearInterval(interval);
          return;
        }
        launchConfetti();
      }, 150);
      
      return () => clearInterval(interval);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-md p-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700"
            variants={successPanelVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="flex flex-col items-center">
              <div className="mb-4 text-emerald-500 dark:text-emerald-400">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 15,
                    delay: 0.1
                  }}
                >
                  <CheckCircle2 className="h-16 w-16" />
                </motion.div>
              </div>
              
              <motion.h3 
                className="text-xl font-semibold mb-2 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {message}
              </motion.h3>
              
              {subMessage && (
                <motion.p 
                  className="text-center text-slate-500 dark:text-slate-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {subMessage}
                </motion.p>
              )}
              
              <motion.button
                className="mt-6 px-6 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={onClose}
              >
                Got it!
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessMessage; 