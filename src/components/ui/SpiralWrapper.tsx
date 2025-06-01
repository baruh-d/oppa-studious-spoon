'use client';
import { useEffect, useRef } from 'react';

export const SpiralWrapper = ({ children }: { children: React.ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const particleCount = 200;

    const draw = () => {
      if (!canvas) return;
      
      // Clear with subtle fade effect
      ctx.fillStyle = 'rgba(248, 250, 252, 0.03)'; // Matches bg-oppa-light
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.4;

      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 8 + time;
        const radius = (i / particleCount) * maxRadius;
        const x = Math.cos(angle) * radius + centerX;
        const y = Math.sin(angle) * radius + window.scrollY + (canvas.height / 2);
        
        const size = 1.5 + Math.sin(time * 3 + i * 0.05) * 1.5;
        const opacity = 0.6 * (1 - i / particleCount);
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(30, 64, 175, ${opacity})`; // OPPA primary color
        ctx.fill();
      }

      time += 0.005;
      animationRef.current = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    draw();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-30"
      />
      <div className="relative z-10">
        {children}
      </div>
    </>
  );
};