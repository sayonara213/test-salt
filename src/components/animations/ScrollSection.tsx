import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ScrollSectionProps {
  children: (progress: MotionValue<number>) => ReactNode;
  scrollHeight?: string; // e.g., "200vh", "300vh"
  className?: string;
}

export function ScrollSection({ 
  children, 
  scrollHeight = "200vh",
  className = ""
}: ScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section 
      ref={containerRef}
      className={`relative snap-start snap-always ${className}`}
      style={{ minHeight: scrollHeight }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {children(scrollYProgress)}
      </div>
    </section>
  );
}
