"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FloatingLabel from "@/app/components/ui/FloatingLabel";
import { Button } from "@/app/components/ui/button";
import SuccessMessage from "@/app/components/ui/SuccessMessage";
import { formFieldVariants } from "@/app/components/animations/variants";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = "" }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isValid, touchedFields },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange"
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Handle successful form submission
      setShowSuccess(true);
      reset();
      
    } catch (error) {
      console.error("Form submission error:", error);
      // Handle error state here
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Field focus management for progressive form filling
  const focusNextField = (current: string) => {
    if (current === 'name' && !errors.name) {
      emailRef.current?.focus();
    } else if (current === 'email' && !errors.email) {
      subjectRef.current?.focus();
    } else if (current === 'subject' && !errors.subject) {
      messageRef.current?.focus();
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent, fieldName: string) => {
    // Only proceed on Tab or Enter, and only if the field is valid
    if ((e.key === 'Enter' || e.key === 'Tab') && !errors[fieldName as keyof FormValues]) {
      if (e.key === 'Enter') {
        e.preventDefault();
        focusNextField(fieldName);
      }
      
      // Add haptic feedback for mobile devices if supported
      if ('vibrate' in navigator) {
        navigator.vibrate(10);
      }
    }
  };
  
  return (
    <div className={className}>
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="space-y-6 bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-border"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            variants={formFieldVariants} 
            custom={0}
          >
            <FloatingLabel
              label="Name"
              error={errors.name?.message}
              {...register("name")}
              onKeyDown={(e) => handleKeyDown(e, 'name')}
            />
          </motion.div>
          
          <motion.div
            variants={formFieldVariants}
            custom={1}
          >
            <FloatingLabel
              label="Email"
              error={errors.email?.message}
              {...register("email")}
              onKeyDown={(e) => handleKeyDown(e, 'email')}
            />
          </motion.div>
        </div>
        
        <motion.div
          variants={formFieldVariants}
          custom={2}
        >
          <FloatingLabel
            label="Subject"
            error={errors.subject?.message}
            {...register("subject")}
            onKeyDown={(e) => handleKeyDown(e, 'subject')}
          />
        </motion.div>
        
        <motion.div
          variants={formFieldVariants}
          custom={3}
        >
          <FloatingLabel
            label="Message"
            textarea
            rows={4}
            error={errors.message?.message}
            {...register("message")}
          />
        </motion.div>
        
        <motion.div
          variants={formFieldVariants}
          custom={4}
        >
          <Button 
            type="submit" 
            disabled={isSubmitting || !isValid} 
            className="w-full sm:w-auto"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <LoadingIndicator />
                Sending...
              </span>
            ) : (
              <span className="flex items-center">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </span>
            )}
          </Button>
        </motion.div>
      </form>
      
      <SuccessMessage
        show={showSuccess}
        message="Message Sent Successfully!"
        subMessage="We'll get back to you within 24 hours."
        onClose={() => setShowSuccess(false)}
      />
    </div>
  );
};

// AI-themed loading animation (pulsing circles)
const LoadingIndicator = () => {
  return (
    <div className="flex items-center space-x-1 mr-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="h-2 w-2 bg-white rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default ContactForm; 