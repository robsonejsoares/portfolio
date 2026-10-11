"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function EfeitosFundo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Configuração das partículas da constelação (apenas os pontos)
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.5,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "rgba(0, 245, 255, 0.4)";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Desenha apenas o ponto da partícula (sem linhas/figuras geométricas)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        // Os brilhos estáticos originais (ciano top-left, roxo bottom-right)
        background: `
          radial-gradient(at 20% 20%, rgba(0, 245, 255, 0.06) 0%, transparent 50%),
          radial-gradient(at 80% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
          rgb(5, 5, 12)
        `
      }}
    >
      {/* Grade de Fundo sutil (com opacidade muito baixa, extraída do ref) */}
      <div 
        className="absolute inset-0 opacity-[0.022]" 
        style={{
          backgroundImage: `
            linear-gradient(rgb(0, 245, 255) 1px, transparent 1px), 
            linear-gradient(90deg, rgb(0, 245, 255) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px"
        }} 
      />

      {/* Efeito de Constelação (Apenas pontos/estrelas, sem linhas) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ opacity: 0.6 }}
      />

      {/* A Linha Escaneadora Dinâmica que percorre de cima a baixo */}
      <motion.div
        animate={{
          top: ["-5%", "105%"] // Percorre de acima do topo até abaixo do fundo
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 right-0 h-[1px] pointer-events-none opacity-15"
        style={{
          background: "linear-gradient(90deg, transparent, rgb(0, 245, 255), transparent)"
        }}
      />
    </div>
  );
}