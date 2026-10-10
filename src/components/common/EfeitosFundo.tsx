"use client";

import { motion } from "framer-motion";

export function EfeitosFundo() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grade de Fundo mais visível */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70" />

      {/* Luz Neon Superior Esquerda (Ciano Mais Clara e Brilhante) */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.65, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-cyan-500/35 rounded-full blur-[150px]"
      />

      {/* Luz Neon Central Roxo */}
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-[-5%] w-[700px] h-[700px] bg-purple-600/35 rounded-full blur-[170px]"
      />

      {/* Luz Neon Inferior Azul */}
      <motion.div
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-1/4 w-[800px] h-[800px] bg-blue-600/35 rounded-full blur-[190px]"
      />
    </div>
  );
}