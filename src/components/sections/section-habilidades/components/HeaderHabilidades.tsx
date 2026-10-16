"use client";

import { motion } from "framer-motion";

export function HeaderHabilidades() {
    return (
        <header className="mb-3 w-full text-left">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                <h2 className="font-display text-xl font-bold text-[#8FA8C8] sm:text-2xl">
                    Habilidades e Tecnologias
                </h2>
            </motion.div>
        </header>
    );
}