import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Cpu, Shield, Users, Zap, Globe, Lock } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Decentralized Compute",
    description:
      "Access distributed GPU networks for training and inference at scale.",
  },
  {
    icon: Shield,
    title: "Verifiable AI",
    description:
      "Cryptographic proofs ensure model integrity and trustworthy outputs.",
  },
  {
    icon: Users,
    title: "Community Governance",
    description:
      "Token holders vote on model development and resource allocation.",
  },
  {
    icon: Zap,
    title: "Instant Funding",
    description: "Seamless token-based funding mechanisms for AI projects.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Open infrastructure accessible to developers worldwide.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description:
      "End-to-end encryption and zero-knowledge proofs for sensitive data.",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      <div className="container relative mx-auto px-4 md:px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why build with <span className="text-gradient">our platform</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete infrastructure for decentralized AI development, from
            funding to deployment.
          </p>
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <GlassCard className="h-full">
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground flex-grow">
                    {feature.description}
                  </p>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
