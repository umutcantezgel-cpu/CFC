"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/store";

export default function PageTransitionSVG() {
  const { currentView } = useStore();

  const liquidPathIn = "M0 100 V0 H100 V100 C70 100 30 100 0 100 Z"; // Start: Flat rect covering nothing
  const liquidPathMid = "M0 100 V0 H100 V100 C70 80 30 120 0 100 Z"; // Mid: Dripping sauce
  const liquidPathOut = "M0 0 V0 H100 V0 C70 0 30 0 0 0 Z"; // End: Gone

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentView}
        className="fixed inset-0 z-[8500] pointer-events-none flex items-center justify-center"
      >
        <motion.svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full h-full fill-brand-red"
          initial={{ d: "M0 100 V100 H100 V100 C70 100 30 100 0 100 Z" }} // Bottom flat
          animate={{ d: "M0 0 V0 H100 V0 C70 0 30 0 0 0 Z" }} // Moves up and disappears
          exit={{ d: "M0 100 V0 H100 V0 C70 120 30 80 0 100 Z" }} // Drops down like sauce
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.path />
        </motion.svg>
      </motion.div>
    </AnimatePresence>
  );
}
