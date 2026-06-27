"use client";
import StickerCard from "@/components/ui/sticker-card";
import { reviewsData } from "@/data/db";

export default function Reviews() {
  return (
    <section className="bg-cream-bg py-24 px-8 relative overflow-hidden z-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="flex-1">
            <p className="font-display text-brand-red text-2xl -rotate-2 mb-2 uppercase">Fühl es</p>
            <h2 className="font-display text-[clamp(40px,7vw,80px)] text-brand-red uppercase leading-none tracking-tight text-stroke-maroon">
              Fühle die<br/>Veränderung
            </h2>
            <p className="font-bold text-lg text-maroon-stroke mt-6 max-w-[420px]">
              Knusprig für die Mutigen, gemacht für die Hungrigen. Tauche ein in echtes Fried Chicken — jede knusprige Kante zählt.
            </p>
          </div>
          <StickerCard className="w-full md:w-1/2 aspect-square rounded-2xl bg-gradient-to-br from-accent-yellow to-brand-red flex items-center justify-center">
             <div className="text-white font-display text-4xl opacity-50 uppercase tracking-widest text-stroke-maroon">100% Halal</div>
          </StickerCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsData.map((rev) => (
            <StickerCard key={rev.id} className="p-8 flex flex-col justify-between">
              <div>
                <div className="text-accent-yellow text-2xl tracking-widest mb-4 text-stroke-maroon">
                  {Array.from({ length: rev.rating }).map((_, i) => '★').join('')}
                </div>
                <p className="font-body font-black text-charcoal-dark italic leading-relaxed text-base mb-6">
                  "{rev.text}"
                </p>
              </div>
              <div className="flex justify-between items-end">
                <div className="font-display text-brand-red text-xl uppercase tracking-widest">
                  — {rev.name}
                </div>
                {rev.sentiment === 'positive' && (
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded border-2 border-green-800 uppercase tracking-wider shadow-[2px_2px_0px_#166534]">
                    Top
                  </span>
                )}
              </div>
            </StickerCard>
          ))}
        </div>
      </div>
    </section>
  );
}
