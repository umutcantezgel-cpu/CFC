"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cfc-cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cfc-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cfc-cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed bottom-0 left-0 w-full z-[9999] bg-brand-red p-6 md:p-8 border-t-4 border-maroon-stroke shadow-[0px_-8px_0px_#4C0016]"
        >
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-cream-bg font-bold tracking-wide">
              <h3 className="font-display text-2xl uppercase tracking-widest text-stroke-maroon mb-2">Cookies & Privacy</h3>
              <p className="text-sm opacity-90 max-w-[600px]">
                Wir nutzen Cookies, um dir das beste Erlebnis auf unserer Website zu bieten. 
                Einige sind essentiell, während andere uns helfen, diese Website zu verbessern.
              </p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button 
                onClick={handleDecline}
                className="flex-1 md:flex-none bg-cream-bg text-brand-red px-6 py-3 font-black text-sm uppercase tracking-widest border-2 border-maroon-stroke shadow-[3px_3px_0px_#4C0016] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#4C0016] transition-all"
              >
                Ablehnen
              </button>
              <button 
                onClick={handleAccept}
                className="flex-1 md:flex-none bg-accent-yellow text-brand-red px-6 py-3 font-black text-sm uppercase tracking-widest border-2 border-maroon-stroke shadow-[3px_3px_0px_#4C0016] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#4C0016] transition-all"
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
