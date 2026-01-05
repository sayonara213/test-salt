import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import sphereImage from "@/assets/sphere-planet.png";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const sphereY = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const sphereRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <motion.div
        style={{ y: sphereY, rotate: sphereRotate }}
        className="absolute right-[-15%] md:right-[0%] top-1/4 w-[70vw] md:w-[45vw] max-w-[600px] z-0 opacity-60"
      >
        <img src={sphereImage} alt="3D Sphere" className="w-full h-auto" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-foreground">
              Crowdsourcing our collective intelligence to build the best AI
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground mb-4">
              Open source AI has been lagging behind the likes of Google and
              OpenAI by billions of dollars.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground mb-8">
              Salt aims to solve that by rewarding open source developers who
              contribute to the democratization of AI. We run competitions
              between AI models to find and reward the best AI models. As a
              result, our users will be able to access the latest cutting edge
              AI models.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="shadow-glow px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/10 transition-colors"
            >
              Use The Cutting Edge AI
            </motion.button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
