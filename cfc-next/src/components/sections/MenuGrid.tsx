"use client";
import StickerCard from "@/components/ui/sticker-card";
import { menuData } from "@/data/db";
import { useStore } from "@/store";

export default function MenuGrid() {
  const { activeCategory, activeAllergenFilter, setCategory, toggleAllergen } = useStore();

  const handleAllergenToggle = (allergen: string) => toggleAllergen(allergen);

  const displayedCategories = menuData.categories.filter(c => activeCategory === 'All' || c.name === activeCategory);

  return (
    <section className="bg-cream-bg py-24 px-8 relative overflow-hidden z-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-display text-[clamp(40px,7vw,80px)] text-brand-red uppercase leading-none tracking-tight text-stroke-maroon">
              SPEISEKARTE
            </h2>
            <p className="font-bold text-lg text-maroon-stroke mt-4">Täglich frisch. Täglich knusprig.</p>
          </div>
          
          <div className="mt-8 md:mt-0 flex flex-col items-end gap-4">
            <div className="flex gap-2 flex-wrap">
              <button 
                onClick={() => setCategory('All')} 
                className={`px-4 py-1 border-2 border-maroon-stroke font-black uppercase text-sm tracking-widest ${activeCategory === 'All' ? 'bg-maroon-stroke text-white' : 'bg-transparent text-maroon-stroke'}`}
              >
                Alle
              </button>
              {menuData.categories.map(c => (
                <button 
                  key={c.id}
                  onClick={() => setCategory(c.name)}
                  className={`px-4 py-1 border-2 border-maroon-stroke font-black uppercase text-sm tracking-widest ${activeCategory === c.name ? 'bg-maroon-stroke text-white' : 'bg-transparent text-maroon-stroke'}`}
                >
                  {c.name}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {['Gluten', 'Milch', 'Sesam', 'Ei'].map(allergen => (
                <button
                  key={allergen}
                  onClick={() => handleAllergenToggle(allergen)}
                  className={`px-3 py-1 text-xs border-2 border-dashed border-maroon-stroke font-bold uppercase tracking-wider rounded-full ${activeAllergenFilter.includes(allergen) ? 'bg-red-200' : 'bg-transparent'}`}
                >
                  {activeAllergenFilter.includes(allergen) ? `Ohne ${allergen}` : `Ohne ${allergen}`}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {displayedCategories.map((category) => {
            const items = category.items.filter(item => {
              if (activeAllergenFilter.length === 0) return true;
              return !item.allergens.some(a => activeAllergenFilter.includes(a));
            });

            if (items.length === 0) return null;

            return (
              <div key={category.id}>
                <h3 className="font-display text-3xl text-maroon-stroke uppercase tracking-widest mb-8 border-b-4 border-maroon-stroke pb-2">
                  {category.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item, i) => (
                    <StickerCard key={i} className="flex flex-col">
                      <div className="h-40 bg-maroon-stroke/5 relative p-6">
                         <div className="absolute top-4 right-4 bg-brand-red text-white px-3 py-1 border-2 border-maroon-stroke font-black text-lg shadow-[3px_3px_0px_#4C0016] transform rotate-3">
                           {item.price}
                         </div>
                         <h4 className="font-display text-2xl text-charcoal-dark uppercase leading-tight pr-16">{item.name}</h4>
                         <p className="font-bold text-sm text-maroon-stroke mt-2">{item.desc}</p>
                      </div>
                      <div className="p-4 border-t-4 border-maroon-stroke/10 bg-white flex justify-between text-xs font-bold uppercase text-maroon-stroke/60">
                        <span>{item.macro?.kcal} kcal</span>
                        <span>{item.macro?.protein}g Protein</span>
                      </div>
                      {item.allergens.length > 0 && (
                         <div className="px-4 pb-4 bg-white flex gap-2 text-[10px] font-black uppercase text-brand-red">
                           {item.allergens.map(a => (
                             <span key={a} className="border border-brand-red px-1 rounded-sm">{a}</span>
                           ))}
                         </div>
                      )}
                    </StickerCard>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
