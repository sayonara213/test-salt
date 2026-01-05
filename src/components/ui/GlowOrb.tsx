import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowOrbProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "accent";
  animate?: boolean;
}

export function GlowOrb({
  className,
  size = "md",
  color = "primary",
  animate = true,
}: GlowOrbProps) {
  const sizes = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
    xl: "w-[500px] h-[500px]",
  };

  const colors = {
    primary: "bg-primary/30",
    secondary: "bg-secondary/30",
    accent: "bg-accent/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={animate ? { 
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.1, 1],
      } : { opacity: 0.4 }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "absolute rounded-full blur-3xl pointer-events-none",
        sizes[size],
        colors[color],
        className
      )}
    />
  );
}
