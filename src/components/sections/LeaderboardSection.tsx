import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ArrowUp, ArrowDown, Minus, ChevronDown } from "lucide-react";

const leaderboardData = [
  {
    rank: 1,
    change: "stable",
    name: "davidkim2305/Rhea-72b-v0.5",
    avg: 81.22,
    arc: 79.78,
    hellaswag: 91.15,
    mmlu: 77.05,
    truthfulqa: 74.3,
    winogrande: 87.85,
    gsm8k: 78.12,
    earnings: "1,384,195",
  },
  {
    rank: 2,
    change: "up",
    name: "MTSAIR/MultiVerse_70B",
    avg: 81.0,
    arc: 78.67,
    hellaswag: 89.77,
    mmlu: 79.22,
    truthfulqa: 75.18,
    winogrande: 87.52,
    gsm8k: 76.65,
    earnings: "1,318,196",
  },
  {
    rank: 3,
    change: "down",
    name: "SF-Foundation/Ein-72b-v0.11",
    avg: 80.81,
    arc: 76.79,
    hellaswag: 89.02,
    mmlu: 77.2,
    truthfulqa: 76.02,
    winogrande: 84.06,
    gsm8k: 78.77,
    earnings: "1,299,529",
  },
  {
    rank: 4,
    change: "stable",
    name: "abacusai/Smaug-72B-v0.1",
    avg: 80.48,
    arc: 76.02,
    hellaswag: 89.27,
    mmlu: 77.15,
    truthfulqa: 76.67,
    winogrande: 85.08,
    gsm8k: 78.7,
    earnings: "1,255,720",
  },
  {
    rank: 5,
    change: "up",
    name: "lizpreciatior/alpaca-dragon-72b-v1",
    avg: 79.3,
    arc: 73.89,
    hellaswag: 88.16,
    mmlu: 77.4,
    truthfulqa: 70.69,
    winogrande: 86.03,
    gsm8k: 77.63,
    earnings: "1,239,060",
  },
  {
    rank: 6,
    change: "stable",
    name: "mistralai/Mixtral-8x12B-instruct-v0.1",
    avg: 78.15,
    arc: 72.7,
    hellaswag: 89.08,
    mmlu: 77.77,
    truthfulqa: 68.14,
    winogrande: 85.41,
    gsm8k: 82.03,
    earnings: "1,205,452",
  },
  {
    rank: 7,
    change: "stable",
    name: "moreh/MoMo-72B-lora-1.8.7-DPO",
    avg: 78.05,
    arc: 70.82,
    hellaswag: 85.96,
    mmlu: 77.13,
    truthfulqa: 74.71,
    winogrande: 84.06,
    gsm8k: 76.45,
    earnings: "1,205,677",
  },
  {
    rank: 8,
    change: "stable",
    name: "cloudyu/TomGrc_FusionNet_34Bx2_MoE",
    avg: 77.91,
    arc: 74.06,
    hellaswag: 86.74,
    mmlu: 78.65,
    truthfulqa: 72.24,
    winogrande: 85.14,
    gsm8k: 74.46,
    earnings: "1,193,685",
  },
];

export function LeaderboardSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Rocket parallax - moves up as you scroll down
  const rocketY = useTransform(scrollYProgress, [0, 1], [300, -400]);
  const rocketScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  const getChangeIcon = (change: string) => {
    switch (change) {
      case "up":
        return <ArrowUp className="w-3 h-3 text-green-500" />;
      case "down":
        return <ArrowDown className="w-3 h-3 text-red-500" />;
      default:
        return <Minus className="w-3 h-3 text-muted-foreground" />;
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Rocket with parallax tbd*/}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-start justify-between mb-8">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                LLM Leaderboard
              </h2>
              <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
                We evaluate LLMs on key benchmarks using the Eleuther AI, a
                framework to test LLMs on a large number of different evaluation
                tasks. The higher the score, the better the LLM.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/10 transition-colors text-sm whitespace-nowrap"
            >
              Submit your model
            </motion.button>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th className="text-left py-4 px-2 font-medium">#</th>
                  <th className="text-left py-4 px-2 font-medium">
                    Model Name
                  </th>
                  <th className="text-right py-4 px-2 font-medium">Average</th>
                  <th className="text-right py-4 px-2 font-medium">ARC</th>
                  <th className="text-right py-4 px-2 font-medium">
                    HellaSwag
                  </th>
                  <th className="text-right py-4 px-2 font-medium">MMLU</th>
                  <th className="text-right py-4 px-2 font-medium">
                    TruthfulQA
                  </th>
                  <th className="text-right py-4 px-2 font-medium">
                    Winogrande
                  </th>
                  <th className="text-right py-4 px-2 font-medium">GSM8K</th>
                  <th className="text-right py-4 px-2 font-medium">Earnings</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
                  >
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-2">
                        {getChangeIcon(row.change)}
                        <span>{row.rank}</span>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-primary">{row.name}</td>
                    <td className="py-4 px-2 text-right">{row.avg}</td>
                    <td className="py-4 px-2 text-right">{row.arc}</td>
                    <td className="py-4 px-2 text-right">{row.hellaswag}</td>
                    <td className="py-4 px-2 text-right">{row.mmlu}</td>
                    <td className="py-4 px-2 text-right">{row.truthfulqa}</td>
                    <td className="py-4 px-2 text-right">{row.winogrande}</td>
                    <td className="py-4 px-2 text-right">{row.gsm8k}</td>
                    <td className="py-4 px-2 text-right text-green-500">
                      {row.earnings}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex justify-center mt-8">
            <motion.button
              whileHover={{ y: 2 }}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              View more
              <ChevronDown className="w-4 h-4" />
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

