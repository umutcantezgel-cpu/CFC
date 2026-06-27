"use client";
import StickerCard from "@/components/ui/sticker-card";

export default function Contact() {
  const isCurrentlyOpen = () => {
    const hours = new Date().getHours();
    return hours >= 11 && hours < 22;
  };

  const isOpen = isCurrentlyOpen();

  return (
    <section className="bg-brand-red py-24 px-8 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,black_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      
      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col gap-16">
        <div className="text-center">
          <h2 className="font-display text-[clamp(40px,7vw,80px)] text-cream-bg uppercase leading-none tracking-tight text-stroke-maroon">
            KONTAKT & LIEFERUNG
          </h2>
          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="font-bold text-cream-bg text-lg sm:text-xl uppercase tracking-widest max-w-[600px] mx-auto bg-charcoal-dark/50 p-4 rounded-xl border-2 border-maroon-stroke/30">
              📍 Wir liefern in einem <span className="text-accent-yellow">Umkreis von bis zu 30 km</span> rund um Wetzlar.
            </p>
            <div className="inline-block px-6 py-2 bg-charcoal-dark text-accent-yellow font-black uppercase tracking-widest border-4 border-maroon-stroke shadow-[6px_6px_0px_rgba(255,199,44,0.5)] transform -rotate-2">
              {isOpen ? '🟢 JETZT GEÖFFNET BIS 22:00 UHR' : '🔴 AKTUELL GESCHLOSSEN (Öffnet um 11:00)'}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <StickerCard className="p-10 flex flex-col justify-center border-white">
            <h3 className="font-display text-4xl text-brand-red uppercase mb-6 text-stroke-maroon">Werde Teil der Crew</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert("Nachricht gesendet!"); }}>
              <input type="text" placeholder="Dein Name" className="bg-transparent border-b-4 border-maroon-stroke py-4 font-bold text-xl text-charcoal-dark placeholder-maroon-stroke/50 focus:outline-none focus:border-brand-red transition-colors" />
              <input type="text" placeholder="Telefon oder E-Mail" className="bg-transparent border-b-4 border-maroon-stroke py-4 font-bold text-xl text-charcoal-dark placeholder-maroon-stroke/50 focus:outline-none focus:border-brand-red transition-colors" />
              <textarea placeholder="Deine Nachricht (Bestellung, Feedback, Jobs...)" rows={3} className="bg-transparent border-b-4 border-maroon-stroke py-4 font-bold text-xl text-charcoal-dark placeholder-maroon-stroke/50 focus:outline-none focus:border-brand-red transition-colors resize-none"></textarea>
              <button type="submit" className="mt-4 bg-brand-red text-cream-bg py-5 px-8 font-black text-xl tracking-widest uppercase border-4 border-maroon-stroke shadow-[6px_6px_0px_#4C0016] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_#4C0016] transition-all">
                Nachricht Senden
              </button>
            </form>
          </StickerCard>

          <div className="flex flex-col h-full">
            <StickerCard className="p-8 md:p-12 bg-cream-bg flex-1 flex flex-col justify-center items-center text-center border-4 border-charcoal-dark shadow-[12px_12px_0px_#4C0016] relative overflow-hidden">
              <div className="w-full flex justify-center mb-8 relative z-10">
                <h4 className="font-display text-4xl md:text-5xl text-brand-red uppercase bg-accent-yellow px-6 py-3 border-4 border-maroon-stroke shadow-[6px_6px_0px_#4C0016] transform -rotate-3">
                  WETZLAR
                </h4>
              </div>
              
              <svg width="120" height="120" viewBox="0 0 100 100" className="opacity-10 fill-brand-red absolute -bottom-10 -right-10 transform rotate-12">
                <path d="M10,10 L90,10 L80,90 L20,90 Z" />
              </svg>

              <h3 className="font-black text-2xl md:text-3xl text-charcoal-dark uppercase tracking-widest mb-6 relative z-10">
                Unser Zuhause —<br/>frisch aus der Fritteuse.
              </h3>
              
              <p className="font-mono text-lg md:text-xl text-maroon-stroke mb-10 font-bold relative z-10">
                Garbenheimer Str. 20A<br/>35582 Wetzlar
              </p>
              
              <a href="https://maps.app.goo.gl/iUmDmDBVQ4PnRgXu9" target="_blank" rel="noopener noreferrer" className="relative z-10 inline-block bg-brand-red text-cream-bg py-5 px-10 md:px-12 font-black text-xl md:text-2xl uppercase tracking-widest border-4 border-maroon-stroke shadow-[8px_8px_0px_#4C0016] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_#4C0016] transition-all">
                ROUTE PLANEN
              </a>
            </StickerCard>
          </div>
        </div>
      </div>
    </section>
  );
}
