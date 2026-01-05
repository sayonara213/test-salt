import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export function GradientButton({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
}: GradientButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-primary text-primary-foreground hover:shadow-glow",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-border bg-transparent text-foreground hover:bg-secondary/50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-primary opacity-0"
          whileHover={{ opacity: 0.8 }}
          style={{ filter: "blur(20px)" }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
