"use client";
import StickerCard from "@/components/ui/sticker-card";

export default function Hero({ onNavigate }: { onNavigate: (v: string) => void }) {
  return (
    <>
      <section className="pt-20 pb-20 px-8 relative overflow-hidden flex items-center justify-center min-h-[85vh]">
        
        
        <div className="max-w-[700px] w-full relative z-20">
          <div className="inline-block bg-accent-yellow text-charcoal-dark font-black text-xs tracking-widest uppercase px-5 py-2 rounded-full mb-6 shadow-[2px_2px_0px_rgba(0,0,0,0.12)]">
            100% Halal · Wetzlars Bestes
          </div>
          
          <h1 className="font-display text-[clamp(40px,9vw,140px)] leading-[0.85] text-charcoal-dark uppercase mb-6 tracking-tight">
            <span className="block text-stroke-maroon text-brand-red">KNUSPRIG.</span>
            <span className="block text-stroke-maroon text-cream-bg">FRISCH.</span>
            <span className="block text-stroke-maroon text-accent-yellow">BESSER.</span>
          </h1>
          
          <p className="font-bold text-lg text-maroon-stroke/80 max-w-[480px] leading-relaxed mb-8">
            Wetzlars bestes knuspriges Hähnchen. 100% Halal. Besuche uns vor Ort, nutze den Drive-in oder bestelle kontaktlos über WhatsApp.
          </p>
          
          <div className="flex gap-4 flex-wrap items-center">
            <button onClick={() => onNavigate("menu")} className="bg-brand-red text-white border-none px-10 py-4 rounded-full font-black text-sm tracking-widest uppercase cursor-pointer shadow-[4px_4px_0px_#1C1917] hover:translate-y-1 hover:shadow-[1px_1px_0px_#1C1917] transition-all">
              JETZT BESTELLEN
            </button>
            <button onClick={() => onNavigate("menu")} className="bg-transparent text-charcoal-dark border-3 border-charcoal-dark px-10 py-4 rounded-full font-black text-sm tracking-widest uppercase cursor-pointer hover:bg-charcoal-dark hover:text-white transition-colors">
              SPEISEKARTE
            </button>
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
