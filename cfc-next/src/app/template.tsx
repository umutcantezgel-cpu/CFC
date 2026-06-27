"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="flex-1 flex flex-col relative w-full min-h-screen">
        {/* Liquid Transition SVG */}
        <motion.div
          className="fixed inset-0 z-[8500] pointer-events-none flex items-center justify-center"
          initial={{ zIndex: 8500 }}
          animate={{ zIndex: -1, transitionEnd: { zIndex: -1 } }}
          exit={{ zIndex: 8500 }}
        >
          <motion.svg 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none" 
            className="w-full h-full fill-brand-red"
            initial={{ d: "M0 100 V100 H100 V100 C70 100 30 100 0 100 Z" }}
            animate={{ d: "M0 0 V0 H100 V0 C70 0 30 0 0 0 Z" }}
            exit={{ d: "M0 100 V0 H100 V0 C70 120 30 80 0 100 Z" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.path />
          </motion.svg>
        </motion.div>
        
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
