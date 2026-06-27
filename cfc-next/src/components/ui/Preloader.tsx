"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 0: Morphing SVG
    const t1 = setTimeout(() => setStage(1), 800);
    // Stage 1: Scramble
    const t2 = setTimeout(() => setStage(2), 2000);
    // Stage 2: Disintegration
    const t3 = setTimeout(() => setStage(3), 2800);
    // Stage 3: Camera pull-back
    const t4 = setTimeout(() => {
      setStage(4);
      setTimeout(onComplete, 600);
    }, 3600);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 4 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
          transition={{ duration: 0.6, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 z-[9999] bg-maroon-stroke flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Stage 1: Scramble Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: stage >= 1 ? 1 : 0, y: stage >= 1 ? 0 : 20 }}
            className="text-white font-display text-4xl md:text-7xl uppercase tracking-widest relative z-20 text-stroke-maroon mix-blend-difference"
          >
            {stage === 1 && "F R I T T I E R T"}
            {stage === 2 && "H E I S S"}
            {stage === 3 && "K N U S P R I G"}
            {stage === 0 && "C F C"}
          </motion.div>

          {/* Stage 2 & 3: Grid Disintegration */}
          {stage >= 2 && (
            <motion.div 
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 2, opacity: 0, rotate: 45 }}
              transition={{ duration: 0.8, ease: "circIn" }}
              className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-2 z-10"
            >
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="bg-brand-red w-full h-full rounded-sm" style={{ transitionDelay: `${i * 20}ms` }} />
              ))}
            </motion.div>
          )}

        </motion.div>
      )}
    </AnimatePresence>
  );
}
