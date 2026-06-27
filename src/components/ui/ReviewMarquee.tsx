"use client";
import { Review } from "@/data/reviews";
import ReviewCard from "./ReviewCard";

export default function ReviewMarquee({ 
  reviews, 
  direction = "left",
  speed = "fast"
}: { 
  reviews: Review[];
  direction?: "left" | "right";
  speed?: "slow" | "fast";
}) {
  const duration = speed === "fast" ? "40s" : "60s";

  return (
    <div className="relative flex w-full overflow-hidden group py-4">
      <div 
        className={`flex w-max shrink-0 items-center gap-8 pr-8 ${
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        } hover:[animation-play-state:paused]`}
        style={{ animationDuration: duration }}
      >
        {/* Render 3 copies to ensure smooth infinite loop on wide screens */}
        {[...Array(3)].map((_, arrayIndex) => (
          <div key={arrayIndex} className="flex shrink-0 items-center gap-8">
            {reviews.map((review, i) => (
              <ReviewCard key={`${arrayIndex}-${review.id}-${i}`} review={review} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
