import { motion } from "framer-motion";

export function HeroContent() {
  return (
    <div className="h-full w-full flex items-center">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold leading-[1.1] mb-6"
          >
            <span className="text-gradient">A new economic primitive</span>
            <br />
            <span className="text-gradient">for funding decentralized AI</span>
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
            <button className="px-8 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-full shadow-glow hover:opacity-90 transition-opacity">
              Buy Salt AI
            </button>
            <button className="px-8 py-3 text-foreground font-medium hover:text-primary transition-colors">
              Try Now
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
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
