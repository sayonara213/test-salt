import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import sphereImage from "@/assets/sphere-planet.png";
import solana from "@/assets/solana.png";
import telegram from "@/assets/telegram.png";
import arweave from "@/assets/arweave.png";
import redCircle from "@/assets/red-circle.png";
import bittensor from "@/assets/bittensor.png";

const partners = [
  { name: "Solana", logo: solana },
  { name: "Arweave", logo: arweave },
  { name: "Bittensor", logo: bittensor },
  { name: "Render", logo: redCircle },
  { name: "Telegram", logo: telegram },
];

export function PartnersSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const sphereY = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const sphereX = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const sphereScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 0.9, 0.85],
  );

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <motion.div
        style={{ y: sphereY, x: sphereX, scale: sphereScale }}
        className="absolute right-[-20%] md:right-[-5%] top-0 w-[80vw] md:w-[50vw] max-w-[700px] z-0 opacity-80"
      >
        <img src={sphereImage} alt="3D Sphere" className="w-full h-auto" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-foreground mb-16">
            Projects integrated into the Arrakis AI Ecosystem
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="text-foreground/70 hover:text-foreground transition-colors text-lg md:text-xl font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {partner.logo}
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

