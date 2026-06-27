"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Keep the preloader visible for 1.2s to show the logo, then trigger exit animation
    const t = setTimeout(() => {
      setIsAnimating(false);
      // Wait for exit animation to complete before removing from DOM
      setTimeout(onComplete, 1200); 
    }, 1200);
    return () => clearTimeout(t);
  }, [onComplete]);

  // Liquid SVG Wipe Animation
  const anim = {
    initial: {
      d: "M 0 100 L 100 100 L 100 0 L 0 0 Z"
    },
    exit: {
      d: [
        "M 0 100 L 100 100 L 100 0 L 0 0 Z",
        "M 0 0 C 30 80, 70 80, 100 0 L 100 0 L 0 0 Z",
        "M 0 0 C 30 0, 70 0, 100 0 L 100 0 L 0 0 Z"
      ],
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as const, times: [0, 0.6, 1] }
    }
  };

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className="fixed inset-0 z-[9999] pointer-events-none flex flex-col items-center justify-center"
        >
          {/* Logo animation */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="absolute z-20 flex flex-col items-center"
          >
            <img src="/favicon.png" alt="CFC Logo" className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-cream-bg shadow-[0px_0px_40px_rgba(0,0,0,0.5)] object-contain" />
            <div className="mt-6 text-cream-bg font-display text-4xl uppercase tracking-widest text-stroke-maroon drop-shadow-lg">
              Wetzlars Bestes
            </div>
          </motion.div>

          {/* Liquid Background */}
          <motion.svg 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none" 
            className="w-full h-full fill-brand-red absolute inset-0 z-10"
          >
            <motion.path 
              variants={anim}
              initial="initial"
              exit="exit"
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
