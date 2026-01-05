import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-center h-16 md:h-20">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium"
            >
              How It Works
            </a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2 border border-foreground/30 rounded-full text-foreground text-sm font-medium hover:border-foreground/50 transition-colors"
            >
              Buy Salt AI
            </motion.a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}