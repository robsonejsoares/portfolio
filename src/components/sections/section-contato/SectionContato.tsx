
"use client";

import { motion } from "framer-motion";

import { FormularioContato } from "./components/FormularioContato";

export function SectionContato() {
    return (
        <section
            id="contact"
            aria-labelledby="contact-title"
            className="relative isolate overflow-hidden py-24 sm:py-32"
        >
            <div className="mx-auto w-full max-w-7xl px-6">
                {/* Cabeçalho */}
                <motion.header
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-8 max-w-3xl text-center"
                >
                    <h2
                        id="contact-title"
                        className="font-display font-black text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent mb-6"
                    >
                        Contato
                    </h2>

                    <p className="text-xs font-mono tracking-widest text-slate-400">
                        Vamos conversar sobre o seu próximo projeto?
                    </p>
                </motion.header>

                {/* Formulário centralizado */}
                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mx-auto w-full max-w-2xl"
                >
                    <FormularioContato />
                </motion.div>
            </div>
        </section>
    );
}
