"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, FileText } from "lucide-react";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";

const FinalCta = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-indigo-800 dark:to-purple-900">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl"></div>
          
          {/* Content container */}
          <motion.div 
            className="relative z-10 py-16 px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <div className="lg:w-3/5">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                variants={itemVariants}
              >
                Ready to Transform Your Business with AI?
              </motion.h2>
              
              <motion.p 
                className="text-lg text-indigo-100 mb-8 max-w-2xl"
                variants={itemVariants}
              >
                Join the 97% of our clients who report significant time savings and ROI within the first 90 days of implementation. Our AI solutions are ready to deploy now.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <Button 
                  className="bg-white text-indigo-700 hover:bg-indigo-50 border-0 font-medium py-6 text-lg"
                  size="lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Demo
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 font-medium py-6 text-lg"
                  size="lg"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  View Case Studies
                </Button>
              </motion.div>
              
              <motion.div 
                className="mt-8 flex items-center text-indigo-100"
                variants={itemVariants}
              >
                <div className="flex -space-x-2 mr-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full border-2 border-indigo-600 bg-indigo-300 flex items-center justify-center text-indigo-800 font-medium text-sm"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-sm">Joined by 120+ businesses this quarter</p>
              </motion.div>
            </div>
            
            <motion.div 
              className="flex-1 relative h-[300px] w-full rounded-xl overflow-hidden"
              variants={itemVariants}
            >
              <Image
                src="/pngs/cover_1.png"
                alt="Business transformation illustration"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
          <motion.p 
            className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            No credit card required for demo
            <span className="mx-2">•</span>
            Flexible implementation timelines 
            <span className="mx-2">•</span>
            Free ROI assessment
          </motion.p>
          
          <motion.a 
            href="#" 
            className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            See pricing details
            <ArrowRight className="ml-1 h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default FinalCta; 