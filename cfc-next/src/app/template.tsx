"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="flex-1 flex flex-col w-full">
      {/* Premium Transition Wipe - Hardware Accelerated & Aspect Ratio Independent */}
      <motion.div 
        className="fixed inset-0 z-[8500] pointer-events-none bg-brand-red"
        initial={{ y: "0%", borderBottomLeftRadius: "0%", borderBottomRightRadius: "0%" }}
        animate={{ 
          y: "-100%", 
          borderBottomLeftRadius: ["0%", "200px", "0%"], 
          borderBottomRightRadius: ["0%", "200px", "0%"]
        }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      />
      
      {children}
    </div>
  );
}
