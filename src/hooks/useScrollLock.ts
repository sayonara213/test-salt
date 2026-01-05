import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

interface UseScrollLockReturn {
  scrollYProgress: MotionValue<number>;
  isComplete: MotionValue<number>;
}

export function useScrollLock(
  containerRef: RefObject<HTMLElement>
): UseScrollLockReturn {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Returns 1 when scroll is complete (progress >= 0.95)
  const isComplete = useTransform(scrollYProgress, [0, 0.95, 1], [0, 0, 1]);

  return {
    scrollYProgress,
    isComplete,
  };
}
