"use client";
import StickerCard from "@/components/ui/sticker-card";
import { locationsData } from "@/data/db";

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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {locationsData.map((loc) => (
              <StickerCard key={loc.id} className="p-6 bg-cream-bg h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h4 
                    className="font-display text-2xl text-brand-red uppercase bg-accent-yellow px-2 py-1 border-2 border-maroon-stroke shadow-[2px_2px_0px_#4C0016]"
                    style={{ transform: `rotate(${loc.rotation}deg)` }}
                  >
                    {loc.city}
                  </h4>
                  <svg width="40" height="40" viewBox="0 0 100 100" className="opacity-20 fill-brand-red">
                    <path d={loc.mapPolygon} />
                  </svg>
                </div>
                <p className="font-bold text-sm text-charcoal-dark mb-2">{loc.desc}</p>
                <p className="font-mono text-xs text-maroon-stroke/70 flex-grow">{loc.address}</p>
                
                {/* @ts-ignore */}
                {loc.mapsUrl && (
                  <a href={(loc as any).mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 block text-center bg-charcoal-dark text-white py-3 font-black text-xs uppercase tracking-widest border-2 border-maroon-stroke shadow-[4px_4px_0px_#4C0016] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#4C0016] transition-all">
                    Route Planen
                  </a>
                )}
              </StickerCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
