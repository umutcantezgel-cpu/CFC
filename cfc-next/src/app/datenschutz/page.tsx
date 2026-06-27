import Datenschutz from "@/components/sections/Datenschutz";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | CFC Wetzlar",
  description: "Datenschutzerklärung von CFC Wetzlar. Informationen zum Umgang mit Ihren Daten.",
};

export default function DatenschutzPage() {
  return <Datenschutz />;
}
