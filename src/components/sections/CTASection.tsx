import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { GradientButton } from "@/components/ui/GradientButton";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { ArrowRight, Check } from "lucide-react";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-background to-background" />
      <GlowOrb
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        size="xl"
      />

      <div className="container relative mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to build the future of{" "}
              <span className="text-gradient">decentralized AI?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join our community and be the first to know about new features,
              partnerships, and opportunities.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <GradientButton variant="primary" size="md">
                {submitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    Subscribed
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </GradientButton>
            </form>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GradientButton variant="primary" size="lg">
                Launch App
                <ArrowRight className="w-5 h-5" />
              </GradientButton>
              <GradientButton variant="outline" size="lg">
                Read Docs
              </GradientButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
