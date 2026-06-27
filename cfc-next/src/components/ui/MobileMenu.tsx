"use client";
import { useStore } from "@/store";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function MobileMenu() {
  const { isMobileMenuOpen, setMobileMenuOpen } = useStore();

  const handleNav = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "STARTSEITE" },
    { href: "/speisekarte", label: "SPEISEKARTE" },
    { href: "/kontakt", label: "KONTAKT" }
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
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={handleNav}
                  className="block text-left font-display text-4xl md:text-6xl text-cream-bg uppercase tracking-widest text-stroke-maroon hover:text-accent-yellow transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-12 flex gap-6"
          >
            <Link href="/impressum" onClick={handleNav} className="text-cream-bg/70 font-bold uppercase text-xs tracking-widest hover:text-accent-yellow">Impressum</Link>
            <Link href="/datenschutz" onClick={handleNav} className="text-cream-bg/70 font-bold uppercase text-xs tracking-widest hover:text-accent-yellow">Datenschutz</Link>
            <Link href="/agb" onClick={handleNav} className="text-cream-bg/70 font-bold uppercase text-xs tracking-widest hover:text-accent-yellow">AGB</Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
