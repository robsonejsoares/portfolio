"use client";

import { motion } from "framer-motion";

import { FormularioContato } from "./components/FormularioContato";

export function SectionContato() {
    return (
        <section
            id="contact"
            aria-labelledby="contact-title"
            className="relative z-10 w-full py-6 sm:py-8"
        >
            <div className="w-full space-y-10">
                {/* Cabeçalho */}
                <motion.header
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-full space-y-3 text-center"
                >
                    <h2
                        id="contact-title"
                        className="mb-3 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text font-display text-4xl font-black text-transparent"
                    >
                        Contato
                    </h2>

                    <p className="text-xs font-mono tracking-widest text-slate-400">
                        Vamos conversar sobre o seu próximo projeto?
                    </p>
                </motion.header>

                {/* Formulário ocupando toda a largura disponível */}
                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full min-w-0"
                >
                    <FormularioContato />
                </motion.div>
            </div>
        </section>
    );
}