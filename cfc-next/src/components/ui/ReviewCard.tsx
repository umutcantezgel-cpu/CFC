"use client";
import { Review } from "@/data/reviews";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function highlightKeywords(text: string) {
  const keywords = ["Hähnchenteile", "frisch", "Frisches", "knusprig", "lecker", "leckeres", "köstlich"];
  
  // Split text into words and highlight matching keywords
  const regex = new RegExp(`(${keywords.join("|")})`, "gi");
  const parts = text.split(regex);
  
  return (
    <>
      {parts.map((part, i) => {
        if (regex.test(part)) {
          return <strong key={i} className="text-brand-red font-black">{part}</strong>;
        }
        return part;
      })}
    </>
  );
}

export default function ReviewCard({ review }: { review: Review }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-cream-bg border-4 border-charcoal-dark shadow-[6px_6px_0px_#1C1917] rounded-xl p-6 w-[350px] md:w-[420px] flex-shrink-0 cursor-default"
    >
      <div className="flex gap-1 mb-4" style={{ transform: "translateZ(20px)" }}>
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-6 h-6 text-[#FFC72C] drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <p className="font-bold text-charcoal-dark leading-relaxed mb-6 text-sm md:text-base" style={{ transform: "translateZ(30px)" }}>
        "{highlightKeywords(review.text)}"
      </p>
      
      <div className="flex items-center gap-3" style={{ transform: "translateZ(10px)" }}>
        <div className="w-10 h-10 rounded-full bg-accent-yellow border-2 border-charcoal-dark flex items-center justify-center font-black text-charcoal-dark text-lg">
          {review.author.charAt(0)}
        </div>
        <div>
          <div className="font-black text-charcoal-dark uppercase text-xs tracking-widest">{review.author}</div>
          <div className="text-maroon-stroke/60 font-bold text-xs">Google Bewertung</div>
        </div>
      </div>
    </motion.div>
  );
}
