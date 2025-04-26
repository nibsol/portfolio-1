"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Shield, Zap, DollarSign } from "lucide-react";

interface Objection {
  id: number;
  title: string;
  content: string;
  icon: React.ReactNode;
}

const ObjectionCrusher = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const objections: Objection[] = [
    {
      id: 1,
      title: "AI is too complex for our small business",
      content: "Not anymore. Our solutions are designed to be plug-and-play with zero technical expertise required. We handle all the complex parts while you focus on your business. Most clients are up and running within 24 hours of onboarding.",
      icon: <Zap className="h-5 w-5 text-amber-500" />
    },
    {
      id: 2,
      title: "We can't afford enterprise AI solutions",
      content: "Our pricing is designed specifically for SMBs. We start at just $499/month with guaranteed ROI within 90 days. Most clients see positive returns in the first 30 days as labor costs decrease and efficiency increases by 30-50%.",
      icon: <DollarSign className="h-5 w-5 text-emerald-500" />
    },
    {
      id: 3,
      title: "AI will create privacy or security issues",
      content: "Security is our top priority. All our solutions are GDPR and CCPA compliant with SOC 2 certification. We use bank-level encryption and all data remains within your control. We can even deploy isolated solutions that never share data with external systems.",
      icon: <Shield className="h-5 w-5 text-blue-500" />
    }
  ];

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Think AI Isn't For You?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We've heard every objection in the book. Here's why they don't hold up.
            </motion.p>
          </div>

          <div className="space-y-4">
            {objections.map((objection) => (
              <motion.div 
                key={objection.id}
                className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: objection.id * 0.1 }}
              >
                <div 
                  className="flex items-center justify-between p-4 cursor-pointer"
                  onClick={() => toggleAccordion(objection.id)}
                >
                  <div className="flex items-center gap-3">
                    {objection.icon}
                    <h3 className="text-lg font-medium">{objection.title}</h3>
                  </div>
                  {activeId === objection.id ? 
                    <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  }
                </div>

                <AnimatePresence>
                  {activeId === objection.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 border-t border-gray-100 dark:border-gray-700">
                        <p className="text-gray-700 dark:text-gray-300">
                          {objection.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-600 dark:text-gray-400 italic">
              "We had the same concerns before we started. Now I can't imagine running our business without Nibsol's AI solutions."
            </p>
            <p className="mt-2 font-medium">— David L., E-commerce Director</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionCrusher; 