import MenuGrid from "@/components/sections/MenuGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speisekarte | CFC Wetzlar",
  description: "Entdecke unsere vielfältige Speisekarte mit saftigen Burgern, knusprigen Fries und leckeren Snacks bei CFC Wetzlar.",
};

export default function SpeisekartePage() {
  return <MenuGrid />;
}
