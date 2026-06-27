"use client";
import { useStore } from "@/store";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu() {
  const { isMobileMenuOpen, setMobileMenuOpen, setView } = useStore();

  const handleNav = (view: any) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      setView(view);
      window.scrollTo(0,0);
    }, 500);
  };

  const navLinks = [
    { id: "home", label: "STARTSEITE" },
    { id: "menu", label: "SPEISEKARTE" },
    { id: "contact", label: "KONTAKT" }
  ];

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 z-[8000] bg-brand-red flex flex-col justify-center items-center px-8"
        >
          {/* Decorative fluid elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,0 C30,40 70,60 100,0 L100,100 L0,100 Z" fill="#F3E9DC" />
            </svg>
          </div>

          <div className="flex flex-col gap-8 w-full max-w-sm relative z-10">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                onClick={() => handleNav(link.id)}
                className="text-left font-display text-4xl md:text-6xl text-cream-bg uppercase tracking-widest text-stroke-maroon hover:text-accent-yellow transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-12 flex gap-6"
          >
            <button onClick={() => handleNav('impressum')} className="text-cream-bg/70 font-bold uppercase text-xs tracking-widest">Impressum</button>
            <button onClick={() => handleNav('datenschutz')} className="text-cream-bg/70 font-bold uppercase text-xs tracking-widest">Datenschutz</button>
            <button onClick={() => handleNav('agb')} className="text-cream-bg/70 font-bold uppercase text-xs tracking-widest">AGB</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
