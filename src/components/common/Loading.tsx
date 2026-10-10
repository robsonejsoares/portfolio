"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LoadingProps {
  onComplete: () => void;
}

export function Loading({ onComplete }: LoadingProps) {
  const [progresso, setProgresso] = useState(0);
  const [estaPronto, setEstaPronto] = useState(false);

  useEffect(() => {
    
    const tempoIntervalo = 35;
    const temporizador = setInterval(() => {
      setProgresso((prev) => {
        if (prev >= 100) {
          clearInterval(temporizador);
          setEstaPronto(true);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        return prev + 1;
      });
    }, tempoIntervalo);

    return () => clearInterval(temporizador);
  }, [onComplete]);

  const progressoFormatado = String(progresso).padStart(3, "0");

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-[#070913] flex flex-col items-center justify-center font-mono text-white select-none"
    >
      <div className="flex flex-col items-center gap-6 w-72 sm:w-80">
        
        {/* Logo Estilo Cyberpunk */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-2xl sm:text-3xl font-black tracking-widest text-gradient-cyan flex items-center gap-1"
        >
          <span>&lt;</span>
          <span className="text-white">Robson.Dev</span>
          <span>/&gt;</span>
        </motion.div>

        {/* Status Text */}
        <div className="text-xs tracking-[0.3em] text-cyan-400/80 uppercase">
          {estaPronto ? "READY" : "INITIALIZING..."}
        </div>

        {/* Barra de Progresso */}
        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            style={{ width: `${progresso}%` }}
          />
        </div>

        {/* Contador Numérico (000 / 100) */}
        <div className="text-xs text-gray-400 tracking-widest">
          {progressoFormatado} / 100
        </div>

      </div>
    </motion.div>
  );
}
