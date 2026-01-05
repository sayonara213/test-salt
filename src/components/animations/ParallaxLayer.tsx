import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "vertical" | "horizontal";
}

export function ParallaxLayer({
  children,
  className = "",
  speed = 0.5,
  direction = "vertical",
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRange = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const xRange = useTransform(scrollYProgress, [0, 1], [50 * speed, -50 * speed]);

  return (
    <motion.div
      ref={ref}
      style={{
        y: direction === "vertical" ? yRange : 0,
        x: direction === "horizontal" ? xRange : 0,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
