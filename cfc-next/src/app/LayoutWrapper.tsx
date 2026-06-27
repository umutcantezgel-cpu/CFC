"use client";
import { useEffect } from "react";
import CanvasBackground from "@/components/ui/quantum-canvas";
import Preloader from "@/components/ui/Preloader";
import MobileMenu from "@/components/ui/MobileMenu";
import CookieBanner from "@/components/ui/CookieBanner";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "@/store";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { isPreloaded, isMobileMenuOpen, setPreloaded, setMobileMenuOpen } = useStore();
  const pathname = usePathname();

  const navItem = (href: string, label: string) => (
    <Link
      href={href}
      className={`font-black text-sm tracking-[2px] uppercase pb-1 border-b-2 transition-colors ${pathname === href ? "text-brand-red border-brand-red" : "text-maroon-stroke border-transparent"}`}
    >
      {label}
    </Link>
  );

  return (
    <>
      {!isPreloaded && <Preloader onComplete={() => setPreloaded(true)} />}
      <MobileMenu />
      <CookieBanner />
      
      {isPreloaded && (
        <>
          <CanvasBackground />
          
          <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md px-6 md:px-12 py-4 border-b-2 border-cream-bg flex items-center justify-between shadow-sm">
            <Link href="/" className="bg-transparent border-none cursor-pointer p-0 block">
              <img src="/favicon.png" alt="CFC Logo" className="h-[40px] md:h-[50px] w-auto rounded-full border-2 border-maroon-stroke" />
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              {navItem("/", "STARTSEITE")}
              {navItem("/speisekarte", "SPEISEKARTE")}
              {navItem("/kontakt", "KONTAKT")}
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

          <main className="relative z-10 flex-1 flex flex-col w-full">
            {children}
          </main>

          <footer className="bg-charcoal-dark text-cream-bg py-8 px-8 border-t-8 border-brand-red relative z-20">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="font-display text-2xl uppercase tracking-widest text-stroke-maroon">CFC Wetzlar</div>
              <div className="flex gap-6 font-bold text-sm tracking-wider uppercase text-cream-bg/70">
                <Link href="/impressum" className="hover:text-accent-yellow">Impressum</Link>
                <Link href="/datenschutz" className="hover:text-accent-yellow">Datenschutz</Link>
                <Link href="/agb" className="hover:text-accent-yellow">AGB</Link>
              </div>
            </div>
            <div className="text-center mt-8 pb-4">
              <img src="/uploads/Gemini_Generated_Image_xcfxgjxcfxgjxcfx.jpeg" alt="CFC Logo" className="h-[120px] w-auto rounded-full border-4 border-white shadow-xl mx-auto" />
            </div>
          </footer>
        </>
      )}
    </>
  );
}
