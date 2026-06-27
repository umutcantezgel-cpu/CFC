import os

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")

# globals.css
write_file("src/app/globals.css", """
@import "tailwindcss";

@theme {
  --color-brand-red: #E31837;
  --color-cream-bg: #F3E9DC;
  --color-accent-yellow: #FFC72C;
  --color-charcoal-dark: #1C1917;
  --color-maroon-stroke: #4C0016;

  --font-display: var(--font-titan-one), sans-serif;
  --font-body: var(--font-nunito), sans-serif;
}

body {
  background-color: var(--color-cream-bg);
  color: var(--color-charcoal-dark);
  overflow-x: hidden;
}

@layer utilities {
  .text-stroke-maroon {
    -webkit-text-stroke: 3px var(--color-maroon-stroke);
    paint-order: stroke fill;
  }
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 25s linear infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(-4deg); }
  50% { transform: translateY(-10px) rotate(4deg); }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}
""")

# layout.tsx
write_file("src/app/layout.tsx", """
import type { Metadata } from "next";
import { Titan_One, Nunito } from "next/font/google";
import "./globals.css";

const titanOne = Titan_One({
  variable: "--font-titan-one",
  subsets: ["latin"],
  weight: "400",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CFC Wetzlar - Wetzlars Bestes Hähnchen",
  description: "Wetzlars bestes knuspriges Hähnchen. 100% Halal.",
  icons: {
    icon: "/uploads/Gemini_Generated_Image_xcfxgjxcfxgjxcfx.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${titanOne.variable} ${nunito.variable}`}>
      <body className="antialiased font-body relative min-h-screen flex flex-col">
        <div className="bg-accent-yellow overflow-hidden relative z-50 border-b-3 border-maroon-stroke">
          <div className="inline-flex animate-marquee whitespace-nowrap will-change-transform">
            <span className="block px-[70px] py-[10px] font-black text-xs tracking-[2px] text-maroon-stroke uppercase">
              10% RABATT BEI WHATSAPP-BESTELLUNG (0176 4212513) · LIEFERUNG AB 15,00 € · 100% HALAL · TÄGLICH BIS 22:00 UHR
            </span>
            <span className="block px-[70px] py-[10px] font-black text-xs tracking-[2px] text-maroon-stroke uppercase">
              10% RABATT BEI WHATSAPP-BESTELLUNG (0176 4212513) · LIEFERUNG AB 15,00 € · 100% HALAL · TÄGLICH BIS 22:00 UHR
            </span>
            <span className="block px-[70px] py-[10px] font-black text-xs tracking-[2px] text-maroon-stroke uppercase">
              10% RABATT BEI WHATSAPP-BESTELLUNG (0176 4212513) · LIEFERUNG AB 15,00 € · 100% HALAL · TÄGLICH BIS 22:00 UHR
            </span>
          </div>
        </div>
        {children}
        <footer className="bg-cream-bg pt-12 px-10 relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-4 pb-5 border-b border-maroon-stroke/20">
            <div className="font-black text-[11px] text-maroon-stroke/70 tracking-[1px] uppercase">
              © 2024 CFC — ALLE RECHTE VORBEHALTEN
            </div>
          </div>
          <div className="max-w-[1200px] mx-auto font-bold text-[11px] text-maroon-stroke/50 tracking-[2px] uppercase py-4">
            Knusprige Flügel · Goldig Knusprig · Gegr. 2024
          </div>
          <div className="text-center pb-8 mt-4">
            <img src="/uploads/Gemini_Generated_Image_xcfxgjxcfxgjxcfx.jpeg" alt="CFC Logo" className="h-[120px] w-auto rounded-full border-4 border-white shadow-xl mx-auto" />
          </div>
        </footer>
      </body>
    </html>
  );
}
""")

# page.tsx
write_file("src/app/page.tsx", """
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CanvasBackground from "@/components/ui/canvas-background";
import Hero from "@/components/sections/Hero";
import MenuGrid from "@/components/sections/MenuGrid";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [view, setView] = useState<"home" | "menu" | "contact">("home");

  const navItem = (target: "home" | "menu" | "contact", label: string) => (
    <button
      onClick={() => { setView(target); window.scrollTo(0,0); }}
      className={`font-black text-sm tracking-[2px] uppercase pb-1 border-b-2 transition-colors ${view === target ? "text-brand-red border-brand-red" : "text-maroon-stroke border-transparent"}`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex flex-col flex-1 relative">
      <CanvasBackground />
      
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md px-12 py-4 border-b-2 border-cream-bg flex items-center justify-between shadow-sm">
        <button onClick={() => setView("home")} className="bg-transparent border-none cursor-pointer p-0">
          <img src="/uploads/Gemini_Generated_Image_xcfxgjxcfxgjxcfx.jpeg" alt="CFC Logo" className="h-[50px] w-auto rounded-full border-2 border-maroon-stroke" />
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
        <AnimatePresence mode="wait">
          {view === "home" && (
            <motion.div key="home" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="flex flex-col">
              <Hero onNavigate={(v) => setView(v as any)} />
            </motion.div>
          )}
          {view === "menu" && (
            <motion.div key="menu" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="flex flex-col">
              <MenuGrid />
            </motion.div>
          )}
          {view === "contact" && (
            <motion.div key="contact" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="flex flex-col">
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
""")

# sticker-card.tsx
write_file("src/components/ui/sticker-card.tsx", """
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function StickerCard({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={`border-4 border-white shadow-[6px_6px_0px_rgba(76,0,22,0.25)] rounded-2xl bg-white overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}
""")

# canvas-background.tsx
write_file("src/components/ui/canvas-background.tsx", """
"use client";
import { useEffect, useRef } from "react";

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: {x: number, y: number, originX: number, originY: number, size: number}[] = [];
    let width = 0;
    let height = 0;
    let mouseX = -1000;
    let mouseY = -1000;

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      particles = [];
      const spacing = 40;
      for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
          particles.push({
            x, y, originX: x, originY: y, size: Math.random() * 2 + 1
          });
        }
      }
    };

    window.addEventListener("resize", init);
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY + window.scrollY;
    });

    init();

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(227, 24, 55, 0.15)";
      
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      for (const p of particles) {
        if (!prefersReducedMotion) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 160;

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            p.x -= (dx / dist) * force * 5;
            p.y -= (dy / dist) * force * 5;
          } else {
            p.x += (p.originX - p.x) * 0.1;
            p.y += (p.originY - p.y) * 0.1;
          }
        }
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", init);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
}
""")

# Hero.tsx
write_file("src/components/sections/Hero.tsx", """
"use client";
import StickerCard from "@/components/ui/sticker-card";

export default function Hero({ onNavigate }: { onNavigate: (v: string) => void }) {
  return (
    <>
      <section className="pt-20 pb-20 px-8 relative overflow-hidden flex items-center justify-center min-h-[85vh]">
        <img src="/uploads/Gemini_Generated_Image_xcfxgjxcfxgjxcfx.jpeg" alt="CFC Mascot" className="absolute right-[5vw] top-1/2 -translate-y-1/2 w-[clamp(220px,28vw,380px)] h-auto rounded-full border-8 border-white shadow-[6px_6px_0px_rgba(0,0,0,0.18)] animate-float z-10 hidden lg:block" />
        
        <div className="max-w-[700px] w-full relative z-20">
          <div className="inline-block bg-accent-yellow text-charcoal-dark font-black text-xs tracking-widest uppercase px-5 py-2 rounded-full mb-6 shadow-[2px_2px_0px_rgba(0,0,0,0.12)]">
            100% Halal · Wetzlars Bestes
          </div>
          
          <h1 className="font-display text-[clamp(60px,11vw,140px)] leading-[0.85] text-charcoal-dark uppercase mb-6 tracking-tight">
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
""")

# MenuGrid.tsx
write_file("src/components/sections/MenuGrid.tsx", """
"use client";
import StickerCard from "@/components/ui/sticker-card";

const menu = [
  {
    title: "Bestseller Angebote",
    items: [
      { name: 'Hähnchen-Burger Menü', price: '13,00 €', desc: 'Normal o. crispy scharf, Pommes, Getränk' },
      { name: 'Hähnchen-Wrap Menü', price: '12,00 €', desc: 'Normal Chicken, Pommes, Getränk' },
      { name: 'Nuggets Menü', price: '10,50 €', desc: '7 Nuggets, Pommes, Getränk' },
      { name: 'Hähnchen-Menü', price: '10,50 €', desc: '2 Hähnchenteile, Pommes, Krautsalat' },
      { name: 'Kinder Menü', price: 'Auf Anfrage', desc: '1 Hähnchenteil o. 3 Nuggets, Pommes, Capri Sun' },
      { name: 'Familie Menü 9 Stück', price: '22,50 €', desc: 'inkl. große Pommes & Krautsalat' },
      { name: 'Familie Menü 15 Stück', price: '41,50 €', desc: 'inkl. große Pommes & Krautsalat' },
    ]
  },
  {
    title: "Geflügel-Spezialitäten",
    items: [
      { name: 'Hähnchenteile', price: 'ab 2,80 €', desc: '1 (2,80€) · 3 (8,50€) · 5 (13,50€) · 9 (23,50€) · 15 (38,00€)' },
      { name: 'Scharfe Flügel', price: 'ab 7,50 €', desc: '6 Stück (7,50€) · 12 Stück (13,50€)' },
      { name: 'Nuggets', price: 'ab 6,00 €', desc: '7 Stück (6,00€) · 15 Stück (11,00€)' },
    ]
  },
  {
    title: "Burger & Wraps",
    items: [
      { name: 'CFC Burger', price: '5,50 €', desc: 'Klassisch & knusprig' },
      { name: 'BBQ Burger', price: '6,50 €', desc: 'Mit rauchiger BBQ-Sauce' },
      { name: 'Knusper Hähnchen-Burger', price: '6,50 €', desc: 'Extra crispy, extra lecker' },
      { name: 'Doppel-Burger', price: '8,90 €', desc: 'Doppelter Genuss' },
      { name: 'Veggie-Burger', price: '5,50 €', desc: 'Vegetarische Option' },
      { name: 'Wraps', price: 'je 8,50 €', desc: 'Mozzarella, Jalapeño oder Chicken' },
    ]
  },
  {
    title: "Beilagen & Snacks",
    items: [
      { name: 'Überbackene Pommes', price: 'ab 7,90 €', desc: 'Normal (7,90€) · Crispy Scharf (8,90€)' },
      { name: 'Scharfe Hähnchen-Pommes', price: 'ab 8,50 €', desc: 'Normal (8,50€) · Crispy Scharf (9,50€)' },
      { name: 'Knusper Makkaroni', price: 'ab 8,90 €', desc: 'Normal (8,90€) · Crispy Scharf (9,90€)' },
      { name: 'Hähnchen-Popcorn', price: 'ab 6,00 €', desc: 'Normal (6,00€) · Crispy Scharf (6,50€)' },
      { name: 'Pommes', price: 'ab 3,00 €', desc: 'Klein (3,00€) · Groß (4,00€) · Curly (4,50€)' },
      { name: 'Zwiebelringe', price: '4,50 €', desc: 'Golden & knusprig' },
      { name: 'Mozzarella Sticks', price: '5,50 €', desc: 'Mit Marinara-Dip' },
      { name: 'Jalapeño Peppers', price: '5,50 €', desc: 'Für Scharf-Liebhaber' },
    ]
  },
  {
    title: "Extras & Getränke",
    items: [
      { name: 'Krautsalat / Püree', price: 'ab 3,00 €', desc: 'Normal (3,00€) · Groß (4,00€)' },
      { name: 'Maiskolben', price: 'ab 2,00 €', desc: '½ Kolben (2,00€) · 1 ganzer (3,50€)' },
      { name: 'Tiramisu', price: '4,00 €', desc: 'Hausgemacht & cremig' },
      { name: 'CFC Spezial-Soße', price: 'ab 1,00 €', desc: 'Klein (1,00€) · Groß (2,00€)' },
    ]
  }
];

export default function MenuGrid() {
  return (
    <section className="py-16 px-8 relative z-20">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="font-display text-5xl text-charcoal-dark mb-16 text-center uppercase tracking-wider text-stroke-maroon text-accent-yellow">
          UNSERE SPEISEKARTE
        </h1>
        
        {menu.map((cat, i) => (
          <div key={i} className="mb-16">
            <h2 className="font-display text-3xl text-maroon-stroke mb-8 pl-4 border-l-8 border-brand-red uppercase tracking-widest">
              {cat.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cat.items.map((item, j) => (
                <StickerCard key={j} className="flex flex-col">
                  <div className="h-24 bg-gradient-to-br from-cream-bg to-[#f0d089] relative flex items-center justify-center border-b-4 border-maroon-stroke">
                    <div className="absolute bottom-0 left-0 right-0 h-4 bg-[repeating-conic-gradient(#E31837_0%_25%,_white_0%_50%)] bg-[length:16px_16px]"></div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-display text-xl text-brand-red mb-2 uppercase leading-tight">{item.name}</h3>
                    <p className="font-bold text-xs text-gray-500 mb-4 flex-1">{item.desc}</p>
                    <div className="font-display text-2xl text-charcoal-dark">{item.price}</div>
                  </div>
                </StickerCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
""")

# Contact.tsx
write_file("src/components/sections/Contact.tsx", """
"use client";
import StickerCard from "@/components/ui/sticker-card";

export default function Contact() {
  const locations = [
    { city: 'WETZLAR', note: 'Unser Zuhause — frisch aus der Fritteuse.', addr: 'Garbenheimer Str. 20A, 35582 Wetzlar', rot: 'rotate-3' },
    { city: 'GIESSEN', note: 'Lieferung in unter 30 Minuten.', addr: '', rot: '-rotate-2' },
    { city: 'MARBURG', note: 'Crispy, heiß und immer halal.', addr: '', rot: 'rotate-6' },
    { city: 'LIMBURG', note: 'Drive-In Abholung verfügbar.', addr: '', rot: '-rotate-3' },
    { city: 'FRANKFURT', note: 'Catering für deine Events.', addr: '', rot: 'rotate-2' },
  ];

  return (
    <>
      <section className="bg-brand-red py-24 px-8 relative overflow-hidden flex flex-col items-center z-20">
        <div className="max-w-[600px] w-full relative z-10 text-center">
          <div className="inline-block bg-accent-yellow text-charcoal-dark font-display text-lg tracking-widest px-6 py-2 rounded-full mb-6 shadow-[3px_3px_0px_#1C1917]">
            SAG HALLO
          </div>
          <h1 className="font-display text-[clamp(40px,8vw,80px)] text-white tracking-widest uppercase leading-none mb-12 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.15)] text-stroke-maroon">
            HAST DU APPETIT?<br/>LASS UNS REDEN.
          </h1>
          
          <form className="w-full text-left" onSubmit={(e) => { e.preventDefault(); alert('Danke! Wir melden uns bald.'); }}>
            <input 
              type="email" 
              placeholder="DEINE E-MAIL" 
              className="w-full bg-transparent border-none border-b-2 border-white/60 text-white font-bold text-lg tracking-widest py-4 mb-8 placeholder:text-white/60 focus:border-white focus:outline-none" 
              required
            />
            <textarea 
              placeholder="TEIL UNS DEINEN APPETIT MIT..." 
              rows={4}
              className="w-full bg-transparent border-none border-b-2 border-white/60 text-white font-bold text-lg tracking-widest py-4 mb-10 resize-none placeholder:text-white/60 focus:border-white focus:outline-none" 
              required
            />
            <button type="submit" className="bg-accent-yellow text-charcoal-dark border-none px-14 py-4 rounded-full font-display text-2xl tracking-widest uppercase cursor-pointer shadow-[4px_4px_0px_#1C1917] w-full md:w-auto hover:translate-y-1 hover:shadow-[1px_1px_0px_#1C1917] transition-all">
              NACHRICHT SENDEN
            </button>
          </form>
        </div>
      </section>
      
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-[80px] bg-cream-bg relative z-20 -mt-1">
        <path fill="var(--color-brand-red)" d="M0,0 C360,80 720,20 1080,55 C1260,75 1380,28 1440,42 L1440,0 L0,0 Z"/>
      </svg>

      <section className="py-20 px-8 relative z-20">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-display text-4xl text-maroon-stroke mb-12 text-center uppercase">WO WIR SIND</h2>
          
          <div className="flex flex-wrap gap-8 justify-center">
            {locations.map((loc, i) => (
              <StickerCard key={i} className={`p-6 w-full max-w-[300px] ${loc.rot}`}>
                <h3 className="font-display text-2xl text-brand-red mb-2 uppercase">{loc.city}</h3>
                <p className="font-bold text-sm text-gray-700 mb-2">{loc.note}</p>
                {loc.addr && <p className="font-bold text-xs text-gray-400">{loc.addr}</p>}
              </StickerCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
""")

print("Next.js project generation script finished.")
