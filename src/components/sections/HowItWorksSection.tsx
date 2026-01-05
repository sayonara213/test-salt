import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Project",
    description:
      "Define your AI model, set tokenomics, and establish governance rules.",
  },
  {
    number: "02",
    title: "Secure Funding",
    description: "Launch your token and receive funding from the community.",
  },
  {
    number: "03",
    title: "Build & Train",
    description: "Utilize decentralized compute resources to train your model.",
  },
  {
    number: "04",
    title: "Deploy & Earn",
    description: "Deploy your model and earn from usage-based tokenomics.",
  },
];

export function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="container relative mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How it <span className="text-gradient">works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From idea to deployment in four simple steps
          </p>
        </ScrollReveal>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary via-primary to-transparent"
            />
          </div>

          <StaggerContainer className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <div
                  className={`flex items-start gap-6 md:gap-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-secondary border border-border flex items-center justify-center">
                      <span className="text-xl font-bold text-gradient">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`flex-1 pb-8 ${
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <h3 className="text-2xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
