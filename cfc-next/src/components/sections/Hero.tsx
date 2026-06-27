"use client";
import StickerCard from "@/components/ui/sticker-card";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="min-h-[100dvh] pt-20 pb-12 px-6 sm:px-8 relative overflow-hidden flex items-center justify-center">
        
        <div className="max-w-[1200px] w-full relative z-20 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          
          {/* Left Column (Text) */}
          <div className="flex-1 w-full max-w-[700px] flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-block bg-accent-yellow text-charcoal-dark font-black text-[10px] sm:text-xs tracking-widest uppercase px-4 sm:px-5 py-2 rounded-full mb-6 shadow-[2px_2px_0px_rgba(0,0,0,0.12)]">
              100% Halal · Wetzlars Bestes
            </div>
            
            <h1 className="font-display text-[clamp(40px,11vw,75px)] lg:text-[clamp(45px,5vw,85px)] leading-[0.85] text-charcoal-dark uppercase mb-6 tracking-tight">
              <span className="block text-stroke-maroon text-brand-red">FÜHLE DIE</span>
              <span className="block text-stroke-maroon text-cream-bg">VERÄNDERUNG.</span>
            </h1>
            
            <p className="font-bold text-sm sm:text-base lg:text-lg text-maroon-stroke/80 max-w-[480px] leading-relaxed mb-8">
              Knusprig für die Mutigen, gemacht für die Hungrigen. Tauche ein in echtes Fried Chicken — jede knusprige Kante zählt.
            </p>
            
            <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto items-center justify-center lg:justify-start">
              <Link href="/speisekarte" className="w-full sm:w-auto bg-brand-red text-white border-none px-8 sm:px-10 py-4 rounded-full font-black text-sm tracking-widest uppercase cursor-pointer shadow-[4px_4px_0px_#1C1917] hover:translate-y-1 hover:shadow-[1px_1px_0px_#1C1917] transition-all text-center">
                JETZT BESTELLEN
              </Link>
              <Link href="/speisekarte" className="w-full sm:w-auto bg-transparent text-charcoal-dark border-3 border-charcoal-dark px-8 sm:px-10 py-4 rounded-full font-black text-sm tracking-widest uppercase cursor-pointer hover:bg-charcoal-dark hover:text-white transition-colors text-center">
                SPEISEKARTE
              </Link>
            </div>
          </div>

          {/* Right Column (Video) */}
          <div className="relative mt-8 lg:mt-0 perspective-1000 mx-auto lg:mx-0 h-[45vh] lg:h-[60vh] max-h-[550px] aspect-[9/16]">
            <div className="w-full h-full relative z-10 border-4 border-charcoal-dark shadow-[8px_8px_0px_#4C0016] lg:shadow-[12px_12px_0px_#4C0016] rounded-2xl overflow-hidden bg-charcoal-dark transform lg:rotate-y-[-5deg] lg:rotate-x-[2deg] hover:rotate-y-[0deg] hover:rotate-x-[0deg] transition-transform duration-500">
              <video 
                src="/videos/cfc-promo.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover scale-[1.02]" 
              />
              {/* Optional overlay gradient for brutalist vibe */}
              <div className="absolute inset-0 bg-brand-red/10 mix-blend-color-burn pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-[80px] bg-brand-red relative z-20 -mt-1">
        <path fill="var(--color-cream-bg)" d="M0,0 C200,80 480,10 720,50 C960,90 1200,10 1440,40 L1440,0 L0,0 Z"/>
      </svg>

      <section className="bg-brand-red py-20 px-8 text-center relative overflow-hidden z-20">
        <h2 className="font-display text-[clamp(40px,7vw,90px)] text-white tracking-widest uppercase leading-none mb-14 text-stroke-maroon">
          ESSEN DAS GUT TUT
        </h2>
        
        <div className="flex justify-center gap-6 flex-wrap max-w-5xl mx-auto">
          <StickerCard className="flex-1 min-w-[200px] p-6 flex flex-col items-center justify-center">
            <div className="font-display text-2xl text-brand-red tracking-wide uppercase">KNUSPRIG</div>
            <div className="font-black text-xs text-gray-500 uppercase mt-2 tracking-widest">HÄHNCHENTEILE</div>
          </StickerCard>
          
          <StickerCard className="flex-1 min-w-[200px] p-6 flex flex-col items-center justify-center">
            <div className="font-display text-2xl text-brand-red tracking-wide uppercase">SCHARF</div>
            <div className="font-black text-xs text-gray-500 uppercase mt-2 tracking-widest">FLÜGEL & NUGGETS</div>
          </StickerCard>
          
          <StickerCard className="flex-1 min-w-[200px] p-6 flex flex-col items-center justify-center">
            <div className="font-display text-2xl text-brand-red tracking-wide uppercase">BURGER</div>
            <div className="font-black text-xs text-gray-500 uppercase mt-2 tracking-widest">WRAPS & MEHR</div>
          </StickerCard>

          <StickerCard className="flex-1 min-w-[200px] p-6 flex flex-col items-center justify-center !bg-accent-yellow border-maroon-stroke">
            <div className="font-display text-2xl text-charcoal-dark tracking-wide uppercase">HALAL</div>
            <div className="font-black text-xs text-maroon-stroke/70 uppercase mt-2 tracking-widest">100% ZERTIFIZIERT</div>
          </StickerCard>
        </div>
      </section>
    </>
  );
}
