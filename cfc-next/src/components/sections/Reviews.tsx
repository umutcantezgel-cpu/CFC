"use client";
import { customerReviews } from "@/data/reviews";
import ReviewMarquee from "@/components/ui/ReviewMarquee";

export default function Reviews() {
  const row1 = customerReviews.slice(0, 7);
  const row2 = customerReviews.slice(7, 13);

  return (
    <section className="bg-brand-red py-32 relative overflow-hidden z-20 border-t-4 border-charcoal-dark">
      <div className="max-w-[1200px] mx-auto px-8 mb-20 text-center">
        <div className="inline-block bg-accent-yellow text-charcoal-dark font-black text-xs tracking-widest uppercase px-5 py-2 rounded-full mb-6 shadow-[2px_2px_0px_rgba(0,0,0,0.12)]">
          KUNDENSTIMMEN
        </div>
        <h2 className="font-display text-[clamp(50px,9vw,120px)] text-cream-bg uppercase leading-none tracking-tight text-stroke-maroon">
          WALL OF LOVE
        </h2>
      </div>

      <div className="flex flex-col gap-12 -mx-[10vw] w-[120vw]">
        {/* Row 1 - Left */}
        <div className="transform rotate-[-2deg]">
          <ReviewMarquee reviews={row1} direction="left" speed="fast" />
        </div>
        
        {/* Row 2 - Right */}
        <div className="transform rotate-[1deg] mt-4">
          <ReviewMarquee reviews={row2} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  );
}
