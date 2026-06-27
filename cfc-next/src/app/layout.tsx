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
    icon: "/favicon.png",
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
