import { motion } from 'framer-motion';

const partners = [
  { name: "Solana", logo: "◎ SOLANA" },
  { name: "Arweave", logo: "⊛ arweave" },
  { name: "Bittensor", logo: "bittensor" },
  { name: "Render", logo: "◉" },
  { name: "Telegram", logo: "✈" },
];

export function PartnersContent() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-16"
        >
          Projects integrated into the Arrakis AI Ecosystem
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="text-foreground/70 hover:text-foreground transition-colors text-lg md:text-xl font-medium cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              {partner.logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
