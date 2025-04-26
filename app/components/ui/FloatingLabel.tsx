"use client";

import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";

export interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  name: string;
  textarea?: boolean;
  rows?: number;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
}

export interface FloatingLabelInputRef {
  focus: () => void;
  blur: () => void;
  getValue: () => string;
}

const FloatingLabel = forwardRef<FloatingLabelInputRef, FloatingLabelInputProps>(
  ({ 
    label, 
    error, 
    className, 
    containerClassName, 
    labelClassName, 
    inputClassName, 
    errorClassName,
    textarea = false,
    rows = 4,
    name,
    ...props 
  }, ref) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState(props.value || props.defaultValue || "");
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
    
    // Expose methods via ref
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
      blur: () => {
        inputRef.current?.blur();
      },
      getValue: () => value as string,
    }));

    const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFocused(true);
      if (props.onFocus) props.onFocus(e as any);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFocused(false);
      if (props.onBlur) props.onBlur(e as any);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
      if (props.onChange) props.onChange(e as any);
    };

    const hasValue = value !== "";
    
    return (
      <div className={`relative ${containerClassName || ""}`}>
        <motion.div
          className="relative"
          initial={false}
          animate={{
            boxShadow: error 
              ? "0 0 0 2px rgba(239, 68, 68, 0.2)" 
              : focused 
                ? "0 0 15px rgba(99, 102, 241, 0.15)" 
                : "none"
          }}
          transition={{ duration: 0.2 }}
        >
          {textarea ? (
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              name={name}
              id={name}
              className={`
                peer w-full px-4 py-3 bg-background rounded-md border 
                ${error 
                  ? "border-red-500 focus:border-red-500" 
                  : "border-input focus:border-primary"
                } 
                outline-none transition-colors
                resize-none scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-primary/30
                ${inputClassName || ""}
              `}
              rows={rows}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
            />
          ) : (
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              name={name}
              id={name}
              className={`
                peer w-full px-4 py-3 bg-background rounded-md border
                ${error 
                  ? "border-red-500 focus:border-red-500" 
                  : "border-input focus:border-primary"
                } 
                outline-none transition-colors
                ${inputClassName || ""}
              `}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              {...props as React.InputHTMLAttributes<HTMLInputElement>}
            />
          )}
          
          <motion.label
            htmlFor={name}
            className={`
              absolute left-3 px-1 text-muted-foreground pointer-events-none
              bg-background transition-all
              ${labelClassName || ""}
            `}
            initial={false}
            animate={{
              top: focused || hasValue ? "-0.5rem" : "0.8rem",
              fontSize: focused || hasValue ? "0.75rem" : "0.875rem",
              color: focused 
                ? "hsl(var(--primary))" 
                : error 
                  ? "hsl(var(--destructive))" 
                  : "hsl(var(--muted-foreground))"
            }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.label>
        </motion.div>
        
        {error && (
          <motion.p 
            className={`text-sm text-red-500 mt-1 ${errorClassName || ""}`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
);

FloatingLabel.displayName = "FloatingLabel";

export default FloatingLabel; 