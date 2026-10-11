"use client";

import { motion } from "framer-motion";

export function IndicadorRolagem() {
    return (
        <div className="flex flex-col items-center gap-2 pointer-events-none select-none my-4">
            <div className="flex flex-col items-center gap-1.5 h-12 justify-center">
                {/* Ponto superior fixo com pulso */}
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 animate-pulse" />
                
                {/* Linha vertical com altura fixa no container e animação isolada internamente */}
                <div className="w-[1px] h-8 bg-slate-800 relative overflow-hidden">
                    <motion.div 
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
                    />
                </div>
            </div>
            
            <span className="text-[10px] font-mono tracking-[0.3em] text-slate-500 uppercase">
                Scroll
            </span>
        </div>
    );
}
