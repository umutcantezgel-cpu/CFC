import type { Metadata } from "next";
import { Titan_One, Nunito } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";
import { customerReviews } from "@/data/reviews";

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
  // Generate JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "CFC Wetzlar",
    "image": "https://www.cfc-wetzlar.de/favicon.png",
    "@id": "https://www.cfc-wetzlar.de",
    "url": "https://www.cfc-wetzlar.de",
    "telephone": "01764212513",
    "menu": "https://www.cfc-wetzlar.de/speisekarte",
    "servesCuisine": "Fried Chicken",
    "acceptsReservations": "False",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Industriestraße 2A",
      "addressLocality": "Wetzlar",
      "postalCode": "35582",
      "addressCountry": "DE"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "17"
    },
    "review": customerReviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.date,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5"
      },
      "reviewBody": review.text
    }))
  };

  return (
    <html lang="de" className={`${titanOne.variable} ${nunito.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
