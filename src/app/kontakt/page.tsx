import Contact from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | CFC Wetzlar",
  description: "Kontaktiere CFC Wetzlar. Adresse, Telefonnummer und Öffnungszeiten.",
};

export default function KontaktPage() {
  return <Contact />;
}
