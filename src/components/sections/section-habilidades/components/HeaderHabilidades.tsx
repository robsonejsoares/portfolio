"use client";

import { motion } from "framer-motion";

export function HeaderHabilidades() {
    return (
        <header className="mb-6 w-full text-left">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                <h2 className="mb-2 font-display text-2xl font-bold text-cyan-300/70">
                    Habilidades e Tecnologias
                </h2>

                <p className="font-mono text-xs tracking-wide text-slate-400">
                    Tecnologias e ferramentas que utilizo para desenvolver soluções.
                </p>
            </motion.div>
        </header>
    );

}
