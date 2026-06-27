"use client";

import { useEffect } from "react";
import CanvasBackground from "@/components/ui/quantum-canvas";
import Preloader from "@/components/ui/Preloader";
import PageTransitionSVG from "@/components/ui/PageTransition";
import MobileMenu from "@/components/ui/MobileMenu";
import Hero from "@/components/sections/Hero";
import MenuGrid from "@/components/sections/MenuGrid";
import Contact from "@/components/sections/Contact";
import Reviews from "@/components/sections/Reviews";
import Impressum from "@/components/sections/Impressum";
import Datenschutz from "@/components/sections/Datenschutz";
import AGB from "@/components/sections/AGB";
import { useStore } from "@/store";

export default function Home() {
  const { currentView, isPreloaded, isMobileMenuOpen, setView, setPreloaded, setMobileMenuOpen } = useStore();

  const handleNavigate = (target: any) => {
    if (currentView === target) return;
    setView(target);
    window.scrollTo(0, 0);
  };

  const navItem = (target: any, label: string) => (
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
      <MobileMenu />
      
      {isPreloaded && (
        <>
          <CanvasBackground />
          
          <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md px-6 md:px-12 py-4 border-b-2 border-cream-bg flex items-center justify-between shadow-sm">
            <button onClick={() => handleNavigate("home")} className="bg-transparent border-none cursor-pointer p-0">
              <img src="/favicon.png" alt="CFC Logo" className="h-[40px] md:h-[50px] w-auto rounded-full border-2 border-maroon-stroke" />
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              {navItem("home", "STARTSEITE")}
              {navItem("menu", "SPEISEKARTE")}
              {navItem("contact", "KONTAKT")}
              <a href="https://wa.me/491764212513" target="_blank" rel="noreferrer" className="bg-brand-red text-cream-bg px-5 py-2 rounded-full font-black text-[13px] tracking-widest uppercase border-2 border-maroon-stroke shadow-[3px_3px_0px_#4C0016] whitespace-nowrap ml-4 hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#4C0016] transition-all">
                JETZT BESTELLEN
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button 
              className="md:hidden flex flex-col gap-1.5 p-2 z-[9000]"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className={`w-8 h-1 bg-maroon-stroke transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5 bg-cream-bg' : ''}`} />
              <div className={`w-8 h-1 bg-maroon-stroke transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-8 h-1 bg-maroon-stroke transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5 bg-cream-bg' : ''}`} />
            </button>
          </nav>

          <div className="relative z-10 flex-1 flex flex-col">
            {currentView === "home" && (
              <div className="flex flex-col">
                <Hero onNavigate={(v) => handleNavigate(v as any)} />
                <Reviews />
              </div>
            )}
            {currentView === "menu" && <MenuGrid />}
            {currentView === "contact" && <Contact />}
            {currentView === "impressum" && <Impressum />}
            {currentView === "datenschutz" && <Datenschutz />}
            {currentView === "agb" && <AGB />}
          </div>

          <footer className="bg-charcoal-dark text-cream-bg py-8 px-8 border-t-8 border-brand-red relative z-20">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="font-display text-2xl uppercase tracking-widest text-stroke-maroon">CFC Wetzlar</div>
              <div className="flex gap-6 font-bold text-sm tracking-wider uppercase text-cream-bg/70">
                <button onClick={() => handleNavigate('impressum')} className="hover:text-accent-yellow">Impressum</button>
                <button onClick={() => handleNavigate('datenschutz')} className="hover:text-accent-yellow">Datenschutz</button>
                <button onClick={() => handleNavigate('agb')} className="hover:text-accent-yellow">AGB</button>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
