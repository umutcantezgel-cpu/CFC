"use client";
import React from "react";

export default function LegalTemplate({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section className="bg-cream-bg py-32 px-8 relative overflow-hidden min-h-screen z-20">
      <div className="max-w-[800px] mx-auto bg-white p-8 md:p-12 border-4 border-maroon-stroke shadow-[8px_8px_0px_#4C0016]">
        <h1 className="font-display text-4xl md:text-6xl text-brand-red uppercase tracking-tight text-stroke-maroon mb-12 border-b-4 border-maroon-stroke pb-6">
          {title}
        </h1>
        <div className="prose prose-lg prose-headings:font-display prose-headings:text-charcoal-dark prose-headings:uppercase prose-p:font-bold prose-p:text-maroon-stroke prose-a:text-brand-red prose-a:font-black">
          {children}
        </div>
      </div>
    </section>
  );
}
