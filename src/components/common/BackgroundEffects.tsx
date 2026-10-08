"use client";

import { motion } from "framer-motion";

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grade de Fundo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Luz Neon Superior Esquerda */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"
      />

      {/* Luz Neon Central Roxo */}
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px]"
      />

      {/* Luz Neon Inferior Azul */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[160px]"
      />
    </div>
  );
}