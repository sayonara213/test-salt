import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function AboutContent() {
  return (
    <div className="h-full w-full flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-foreground"
          >
            Crowdsourcing our collective intelligence to build the best AI
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground mb-4"
          >
            Open source AI has been lagging behind the likes of Google and
            OpenAI by billions of dollars.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground mb-8"
          >
            Salt aims to solve that by rewarding open source developers who
            contribute to the democratization of AI. We run competitions between
            AI models to find and reward the best AI models. As a result, our
            users will be able to access the latest cutting edge AI models.
          </motion.p>

          <Button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Use The Cutting Edge AI
          </Button>
        </div>
      </div>
    </div>
  );
}
