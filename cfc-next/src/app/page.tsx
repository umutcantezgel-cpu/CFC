"use client";

import { useEffect } from "react";
import CanvasBackground from "@/components/ui/quantum-canvas";
import Preloader from "@/components/ui/Preloader";
import PageTransitionSVG from "@/components/ui/PageTransition";
import Hero from "@/components/sections/Hero";
import MenuGrid from "@/components/sections/MenuGrid";
import Contact from "@/components/sections/Contact";
import Reviews from "@/components/sections/Reviews";
import { useStore } from "@/store";

export default function Home() {
  const { currentView, isPreloaded, setView, setPreloaded } = useStore();

  const handleNavigate = (target: "home" | "menu" | "contact") => {
    if (currentView === target) return;
    
    // Fallback if browser doesn't support View Transitions
    if (!document.startViewTransition) {
      setView(target);
      window.scrollTo(0, 0);
      return;
    }

    document.startViewTransition(() => {
      setView(target);
      window.scrollTo(0, 0);
    });
  };

  const navItem = (target: "home" | "menu" | "contact", label: string) => (
    <button
      onClick={() => handleNavigate(target)}
      className={`font-black text-sm tracking-[2px] uppercase pb-1 border-b-2 transition-colors ${currentView === target ? "text-brand-red border-brand-red" : "text-maroon-stroke border-transparent"}`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex flex-col flex-1 relative min-h-screen">
      {!isPreloaded && <Preloader onComplete={() => setPreloaded(true)} />}
      <PageTransitionSVG />
      
      {isPreloaded && (
        <>
          <CanvasBackground />
          
          <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md px-12 py-4 border-b-2 border-cream-bg flex items-center justify-between shadow-sm">
            <button onClick={() => handleNavigate("home")} className="bg-transparent border-none cursor-pointer p-0">
              <img src="/favicon.png" alt="CFC Logo" className="h-[50px] w-auto rounded-full border-2 border-maroon-stroke" />
            </button>
            <div className="flex gap-8 items-center hidden md:flex">
              {navItem("home", "STARTSEITE")}
              {navItem("menu", "SPEISEKARTE")}
              {navItem("contact", "KONTAKT")}
              <a href="https://wa.me/491764212513" target="_blank" rel="noreferrer" className="bg-brand-red text-cream-bg px-5 py-2 rounded-full font-black text-[13px] tracking-widest uppercase border-2 border-maroon-stroke shadow-[3px_3px_0px_#4C0016] whitespace-nowrap ml-4 hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#4C0016] transition-all">
                JETZT BESTELLEN
              </a>
            </div>
          </nav>

          <div className="relative z-10 flex-1 flex flex-col">
            {currentView === "home" && (
              <div className="flex flex-col">
                <Hero onNavigate={(v) => handleNavigate(v as any)} />
                <Reviews />
              </div>
            )}
            {currentView === "menu" && (
              <div className="flex flex-col">
                <MenuGrid />
              </div>
            )}
            {currentView === "contact" && (
              <div className="flex flex-col">
                <Contact />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
