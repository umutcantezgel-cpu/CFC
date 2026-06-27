"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // The liquid wipe sweeps UP to reveal the page
  const anim = {
    initial: {
      d: "M 0 100 C 30 100, 70 100, 100 100 L 100 0 L 0 0 Z"
    },
    animate: {
      d: [
        "M 0 100 C 30 100, 70 100, 100 100 L 100 0 L 0 0 Z",
        "M 0 0 C 30 80, 70 80, 100 0 L 100 0 L 0 0 Z",
        "M 0 0 C 30 0, 70 0, 100 0 L 100 0 L 0 0 Z"
      ],
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const, times: [0, 0.6, 1] }
    }
  };

  return (
    <div key={pathname} className="flex-1 flex flex-col relative w-full min-h-screen">
      {/* Liquid Transition Wipe */}
      <div className="fixed inset-0 z-[8500] pointer-events-none flex items-center justify-center">
        <motion.svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full h-full fill-brand-red"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { delay: 0.8, duration: 0.1 } }}
        >
          <motion.path 
            variants={anim}
            initial="initial"
            animate="animate"
          />
        </motion.svg>
      </div>
      
      {children}
    </div>
  );
}
