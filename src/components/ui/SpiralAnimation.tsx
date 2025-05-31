// components/ui/SpiralAnimation.tsx
import React, { useEffect, useRef } from 'react';

export const SpiralAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < 200; i++) {
        const angle = (i / 200) * Math.PI * 8 + time;
        const radius = (i / 200) * 300;
        const x = Math.cos(angle) * radius + canvas.width / 2;
        const y = Math.sin(angle) * radius + canvas.height / 2;
        
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${1 - i / 200})`;
        ctx.fill();
      }

      time += 0.01;
      frameId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none opacity-20"
    />
  );
};