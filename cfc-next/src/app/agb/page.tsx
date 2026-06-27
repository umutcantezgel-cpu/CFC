import AGB from "@/components/sections/AGB";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB | CFC Wetzlar",
  description: "Allgemeine Geschäftsbedingungen (AGB) von CFC Wetzlar.",
};

export default function AGBPage() {
  return <AGB />;
}
