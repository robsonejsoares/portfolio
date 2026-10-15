"use client";

import { motion } from "framer-motion";

const estatisticas = [
    { value: "3+", label: "Anos de Experiência" },
    { value: "CleanCode", label: "Boas Práticas" },
    { value: "100%", label: "Comprometimento" },
];

export function EstatisticasHero() {
    return (
        <div className="my-1 grid min-w-0 grid-cols-3 gap-2 sm:my-2 sm:gap-3">
            {estatisticas.map((estatistica) => (
                <motion.div
                    key={estatistica.label}
                    whileHover={{ scale: 1.03 }}
                    className="glass-card flex min-w-0 flex-col items-center justify-center rounded-md border border-white/10 bg-slate-900/40 px-1.5 py-2 text-center transition-colors hover:border-cyan-500/40 min-[420px]:px-2.5 min-[420px]:py-3 sm:p-4"
                >
                    <span className="max-w-full break-words bg-slate-400 bg-clip-text text-sm font-bold text-transparent min-[420px]:text-base sm:text-xl">
                        {estatistica.value}
                    </span>

                    <span className="mt-1 max-w-full break-words font-mono text-[9px] leading-tight text-slate-500 min-[420px]:text-[10px] sm:text-xs">
                        {estatistica.label}
                    </span>
                </motion.div>
            ))}
        </div>
    );
}