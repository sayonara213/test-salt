import { motion } from "framer-motion";
import { CounterAnimation } from "@/components/animations/CounterAnimation";
import { Button } from "../ui/button";

interface HeroSectionProps {
  internalState?: number;
}

const stats = [
  { value: 1873, label: "LLM models" },
  { value: 326734, label: "Paid to data scientists", prefix: "$" },
  { value: 6557, label: "Developers" },
];

export function HeroSection({ internalState = 0 }: HeroSectionProps) {
  const isShowingStats = internalState === 1;

  return (
    <div className="h-full w-full flex flex-col justify-center">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl"
          animate={{
            opacity: isShowingStats ? 0.9 : 1,
            y: isShowingStats ? -80 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              filter: isShowingStats ? "brightness(3)" : "brightness(1)",
            }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold leading-[1.1] mb-6"
          >
            <span className="text-gradient">A new economic primitive for</span>
            <br />
            <span className="text-gradient">funding decentralized AI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl"
          >
            We track, rank and pay for the best open source decentralized LLMs
            to compete against OpenAI
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button className="shadow-glow">Buy Salt AI</Button>
            <button className="px-8 py-3 text-foreground font-medium hover:text-primary transition-colors">
              Try Now
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-24 left-6 right-6"
          initial={{ opacity: 0, y: 80 }}
          animate={{
            opacity: isShowingStats ? 1 : 0,
            y: isShowingStats ? 0 : 80,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="container mx-auto px-0">
            <div className="flex flex-wrap gap-4 md:gap-6 width-full">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{
                    opacity: isShowingStats ? 1 : 0,
                    y: isShowingStats ? 0 : 40,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: isShowingStats ? index * 0.1 : 0,
                    ease: "easeOut",
                  }}
                  className="
 stat-card-gradient
  rounded-full
  flex flex-col items-center justify-center flex-1 min-w-[200px]
  px-1 py-1 gap-1
  lg:py-4 lg:gap-2
                  "
                >
                  <div className="text-1xl md:text-5xl font-bold text-foreground">
                    {stat.prefix}
                    <CounterAnimation value={stat.value} />
                  </div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isShowingStats ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
