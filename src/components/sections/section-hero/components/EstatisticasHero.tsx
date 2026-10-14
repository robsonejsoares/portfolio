
"use client";

import { motion } from "framer-motion";

const estatisticas = [
    { value: "3+", label: "Anos de Experiência" },
    { value: "CleanCode", label: "Boas Práticas" },
    { value: "100%", label: "Comprometimento" },
];

export function EstatisticasHero() {
    return (
        <div className="my-2 grid grid-cols-3 gap-3">
            {estatisticas.map((estatistica) => (
                <motion.div
                    key={estatistica.label}
                    whileHover={{ scale: 1.03 }}
                    className="glass-card flex flex-col justify-center rounded-md border border-white/10 bg-slate-900/40 p-4 text-center transition-colors hover:border-cyan-500/40"
                >
                    <span className="bg-slate-400 bg-clip-text text-lg font-bold text-transparent sm:text-xl">
                        {estatistica.value}
                    </span>

                    <span className="mt-1 font-mono text-xs text-slate-500">
                        {estatistica.label}
                    </span>
                </motion.div>
            ))}
        </div>
    );
}
