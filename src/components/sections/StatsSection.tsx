import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CounterAnimation } from "@/components/animations/CounterAnimation";
import { GlowOrb } from "@/components/ui/GlowOrb";

const stats = [
  { value: 50000000, prefix: "$", suffix: "+", label: "Total Value Locked" },
  { value: 10000, suffix: "+", label: "Active Users" },
  { value: 150, suffix: "+", label: "AI Projects Funded" },
  { value: 99, suffix: "%", label: "Uptime Guarantee" },
];

export function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <GlowOrb
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        size="xl"
      />

      <motion.div
        style={{ y }}
        className="container relative mx-auto px-4 md:px-6"
      >
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Trusted by the <span className="text-gradient">community</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.1}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-bold text-gradient mb-2">
                <CounterAnimation
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </ScrollReveal>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
