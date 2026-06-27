"use client";

export default function PageTransitionSVG() {
  return (
    <svg className="fixed pointer-events-none w-0 h-0">
      <defs>
        <filter id="liquid-wipe">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}
