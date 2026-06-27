import Impressum from "@/components/sections/Impressum";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | CFC Wetzlar",
  description: "Impressum und rechtliche Angaben von CFC Wetzlar.",
};

export default function ImpressumPage() {
  return <Impressum />;
}
