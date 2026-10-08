"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Controla a velocidade do carregamento (ajuste o intervalo para mais rápido ou mais lento)
    const intervalTime = 35; // total de ~2 segundos para ir de 0 a 100
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsReady(true);
          setTimeout(() => {
            onComplete();
          }, 600); // Pequeno delay após chegar em 100 para mostrar o "READY"
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Formata o número para 3 dígitos (ex: 005, 042, 100)
  const formattedProgress = String(progress).padStart(3, "0");

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
          {isReady ? "READY" : "INITIALIZING..."}
        </div>

        {/* Barra de Progresso */}
        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Contador Numérico (000 / 100) */}
        <div className="text-xs text-gray-400 tracking-widest">
          {formattedProgress} / 100
        </div>

      </div>
    </motion.div>
  );
}