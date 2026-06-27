"use client";

import { useEffect, useRef } from "react";

export default function QuantumCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Create worker
    workerRef.current = new Worker(new URL('../../workers/physics.worker.ts', import.meta.url));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      workerRef.current?.postMessage({
        type: 'INIT',
        payload: { width: canvas.width, height: canvas.height }
      });
    };
    
    window.addEventListener('resize', resize);
    resize();

    let animationFrameId: number;
    let currentPositions: Float32Array | null = null;
    let currentColors: Uint8Array | null = null;

    workerRef.current.onmessage = (e) => {
      if (e.data.type === 'TICK_RESULT') {
        currentPositions = new Float32Array(e.data.positions);
        currentColors = new Uint8Array(e.data.colors);
        
        // Return buffers to worker immediately
        workerRef.current?.postMessage({ type: 'TICK' });
      }
    };

    // Kickoff the tick loop
    workerRef.current.postMessage({ type: 'TICK' });

    const render = () => {
      if (currentPositions && currentColors) {
        ctx.fillStyle = '#F3E9DC'; // Cream Bg
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const count = currentPositions.length / 2;
        for (let i = 0; i < count; i++) {
          const x = currentPositions[i * 2];
          const y = currentPositions[i * 2 + 1];
          const r = currentColors[i * 3];
          const g = currentColors[i * 3 + 1];
          const b = currentColors[i * 3 + 2];

          ctx.fillStyle = `rgb(${r},${g},${b})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    const handleMouseMove = (e: MouseEvent) => {
      workerRef.current?.postMessage({
        type: 'MOUSE',
        payload: { x: e.clientX, y: e.clientY, click: false }
      });
    };
    
    const handleClick = (e: MouseEvent) => {
      workerRef.current?.postMessage({
        type: 'MOUSE',
        payload: { x: e.clientX, y: e.clientY, click: true }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
      workerRef.current?.terminate();
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none w-full h-full" />;
}
