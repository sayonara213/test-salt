import {
  useRef,
  useEffect,
  useState,
  ReactNode,
  cloneElement,
  isValidElement,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import sphereImage from "@/assets/sphere-planet.png";

interface Section {
  id: string;
  content: ReactNode;
  internalStates?: number; // Number of internal states (Hero has 2, Community has 2)
  hideDefaultBackground?: boolean; // For sections with custom backgrounds
}

interface FullPageScrollProps {
  sections: Section[];
}

const SECTION_STYLES = [
  {
    sphere: { y: 50, x: 0, scale: 0.8 },
    blobs: {
      orange: { x: 300, y: 0 },
      blue: { x: 600, y: -300 },
      coral: { x: 500, y: 100 },
    },
    blobOpacity: 1,
  },
  {
    sphere: { y: 50, x: 200, scale: 0.8 },
    blobs: {
      orange: { x: 200, y: 50 },
      blue: { x: 600, y: -400 },
      coral: { x: 700, y: 100 },
    },
    blobOpacity: 0.9,
  },
  {
    sphere: { y: 0, x: 50, scale: 0.92 },
    blobs: {
      orange: { x: 300, y: 0 },
      blue: { x: 700, y: -400 },
      coral: { x: 500, y: 100 },
    },
    blobOpacity: 0.52,
  },
  {
    sphere: { y: -180, x: -0, scale: 0.85 },
    blobs: {
      orange: { x: 200, y: 100 },
      blue: { x: 400, y: -400 },
      coral: { x: 700, y: 100 },
    },
    blobOpacity: 0.8,
  },
  {
    sphere: { y: -500, x: 0, scale: 0.68 },
    blobs: {
      orange: { x: 300, y: 0 },
      blue: { x: 700, y: -400 },
      coral: { x: 500, y: 100 },
    },
    blobOpacity: 0.8,
  },
];

const SCROLL_THRESHOLD = 80;
const TRANSITION_COOLDOWN = 600;

export function FullPageScroll({ sections }: FullPageScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollAccumulator = useRef(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [internalState, setInternalState] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleScroll = (direction: "next" | "prev") => {
    if (isTransitioning) return;

    const section = sections[currentSection];
    const maxInternalState = (section.internalStates || 1) - 1;

    setIsTransitioning(true);
    scrollAccumulator.current = 0;

    if (direction === "next") {
      if (internalState < maxInternalState) {
        setInternalState((prev) => prev + 1);
      } else if (currentSection < sections.length - 1) {
        setCurrentSection((prev) => prev + 1);
        setInternalState(0);
      }
    } else {
      if (internalState > 0) {
        setInternalState((prev) => prev - 1);
      } else if (currentSection > 0) {
        const prevSection = sections[currentSection - 1];
        const prevMaxState = (prevSection?.internalStates || 1) - 1;
        setCurrentSection((prev) => prev - 1);
        setInternalState(prevMaxState);
      }
    }

    setTimeout(() => {
      setIsTransitioning(false);
    }, TRANSITION_COOLDOWN);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isTransitioning) return;

      scrollAccumulator.current += e.deltaY;

      if (scrollAccumulator.current > SCROLL_THRESHOLD) {
        handleScroll("next");
      } else if (scrollAccumulator.current < -SCROLL_THRESHOLD) {
        handleScroll("prev");
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          handleScroll("next");
        } else {
          handleScroll("prev");
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isTransitioning, currentSection, internalState, sections]);

  const getStyleIndex = () => {
    if (currentSection === 0) {
      return internalState;
    }
    const heroStates = sections[0]?.internalStates || 1;
    return heroStates + currentSection - 1;
  };

  const styleIndex = getStyleIndex();
  const currentStyles =
    SECTION_STYLES[Math.min(styleIndex, SECTION_STYLES.length - 1)] ||
    SECTION_STYLES[0];

  const hideBackground = sections[currentSection]?.hideDefaultBackground;

  const renderContent = () => {
    const content = sections[currentSection]?.content;
    if (isValidElement(content)) {
      return cloneElement(
        content as React.ReactElement<{ internalState?: number }>,
        {
          internalState,
        },
      );
    }
    return content;
  };

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden bg-black">
      {!hideBackground && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-[0%] -left-[15%] w-[20vw] h-[30vw] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(16 80% 45% / 0.2) 0%, hsl(350 70% 40% / 0.1) 30%, transparent 70%)",
              filter: "blur(120px)",
            }}
            animate={{
              opacity: currentStyles.blobOpacity,
              x: currentStyles.blobs.orange.x,
              y: currentStyles.blobs.orange.y,
              rotateY: 20,
            }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          />
          <motion.div
            className="absolute top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(220 70% 45% / 0.30) 0%, hsl(250 60% 40% / 0.08) 45%, transparent 80%)",
              filter: "blur(70px)",
            }}
            animate={{
              opacity: currentStyles.blobOpacity,
              x: currentStyles.blobs.blue.x,
              y: currentStyles.blobs.blue.y,
            }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          />
          <motion.div
            className="absolute bottom-[0%] -left-[20%] w-[40vw] h-[40vw] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(350 60% 45% / 0.12) 0%, hsl(16 55% 40% / 0.06) 60%, transparent 90%)",
              filter: "blur(50px)",
            }}
            animate={{
              opacity: currentStyles.blobOpacity,
              x: currentStyles.blobs.coral.x,
              y: currentStyles.blobs.coral.y,
            }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          />
        </div>
      )}
      {!hideBackground && (
        <motion.div
          className="absolute right-[-30%] md:right-[15%] -translate-y-1/2 w-[96vw] md:w-[70vw] lg:w-[64vw] max-w-[940px] pointer-events-none z-[-1]"
          animate={{
            y: currentStyles.sphere.y,
            x: currentStyles.sphere.x,
            scale: currentStyles.sphere.scale,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
          }}
        >
          <img
            src={sphereImage}
            alt="3D Sphere"
            className="w-full h-auto"
            style={{ transform: "scaleX(-1)" }}
          />
        </motion.div>
      )}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          className="absolute inset-0 z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => {
              if (!isTransitioning && index !== currentSection) {
                setIsTransitioning(true);
                setCurrentSection(index);
                setInternalState(0);
                scrollAccumulator.current = 0;
                setTimeout(
                  () => setIsTransitioning(false),
                  TRANSITION_COOLDOWN,
                );
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSection
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
