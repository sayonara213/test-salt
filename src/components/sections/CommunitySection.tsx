import { motion } from "framer-motion";
import moonImage from "@/assets/moon.png";
import earthImage from "@/assets/earth-horizon.png";
import { Send } from "lucide-react";

interface CommunitySectionProps {
  internalState?: number;
}

export function CommunitySection({ internalState = 0 }: CommunitySectionProps) {
  const isShowingFooter = internalState === 1;

  return (
    <div className="h-full w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(220_50%_8%)] to-[hsl(220_60%_5%)]" />

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[60%]"
        style={{
          background:
            "radial-gradient(ellipse at bottom center, hsl(200 60% 30% / 0.15) 0%, transparent 70%)",
        }}
        animate={{
          opacity: isShowingFooter ? 0.8 : 0.5,
        }}
        transition={{ duration: 0.6 }}
      />

      <motion.div
        className="absolute right-[5%] md:right-[10%] top-[15%] md:top-[20%] w-[50vw] md:w-[35vw] max-w-[400px] z-[1]"
        animate={{
          opacity: isShowingFooter ? 0 : 1,
          y: isShowingFooter ? -60 : 0,
          scale: isShowingFooter ? 0.9 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img src={moonImage} alt="Moon" className="w-full h-auto" />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 z-[2]"
        animate={{
          y: isShowingFooter ? 0 : 400,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={earthImage}
          alt="Earth from space"
          className="w-full h-auto object-cover"
        />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col">
        <motion.div
          className="flex-1 flex items-center"
          animate={{
            opacity: isShowingFooter ? 0 : 1,
            y: isShowingFooter ? -60 : 0,
          }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          style={{ pointerEvents: isShowingFooter ? "none" : "auto" }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-xl">
              <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Join our community
              </motion.h2>

              <motion.p className="text-muted-foreground mb-4">
                Join us on our mission to the moon & revolutionize open source
                AI development so that we can build a permissionless,
                democratized, and decentralized AI.
              </motion.p>

              <motion.p className="text-muted-foreground mb-8">
                Let the fate of AI be in our hands and not that of big tech
                companies.
              </motion.p>
              <div className="flex items-center gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors"
                >
                  <Send className="w-5 h-5 text-foreground" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-foreground"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: isShowingFooter ? 1 : 0,
            y: isShowingFooter ? 0 : 40,
          }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
            delay: isShowingFooter ? 0.1 : 0,
          }}
          style={{ pointerEvents: isShowingFooter ? "auto" : "none" }}
        >
          <motion.h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-foreground text-center px-6">
            Join our community and harvest $SALT
          </motion.h2>
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 py-8 z-20"
          initial={{ opacity: 0, y: 60 }}
          animate={{
            opacity: isShowingFooter ? 1 : 0,
            y: isShowingFooter ? 0 : 60,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors"
                >
                  <Send className="w-4 h-4 text-foreground" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-foreground"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </motion.a>
              </div>
              <nav className="flex items-center gap-8">
                <a
                  href="#"
                  className="text-foreground/70 hover:text-foreground transition-colors text-sm"
                >
                  How It Works
                </a>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-foreground transition-colors text-sm"
                >
                  Buy Salt AI
                </a>
              </nav>
              <div className="flex items-center gap-6 text-xs text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Use
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ opacity: isShowingFooter ? 0 : 1 }}
          transition={{ duration: 0.3 }}
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
