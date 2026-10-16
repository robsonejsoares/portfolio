"use client";

import { motion } from "framer-motion";

import { FormularioContato } from "./components/FormularioContato";

export function SectionContato() {
    return (
        <section
            id="contact"
            aria-labelledby="contact-title"
            className="relative z-10 w-full min-w-0 max-w-full overflow-x-clip py-6 sm:py-8"
        >
            <div className="w-full min-w-0 max-w-full">
                {/* Cabeçalho da seção */}
                <motion.header
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 w-full min-w-0 text-left sm:mb-8"
                >
                    <h2
                        id="contact-title"
                        className="mb-3 break-words font-display text-2xl font-bold text-cyan-300/70 sm:text-3xl"
                    >
                        Contato
                    </h2>

                    <p className="max-w-full break-words text-left font-mono text-xs tracking-widest text-slate-400 sm:text-sm">
                        Vamos conversar sobre o seu próximo projeto?
                    </p>
                </motion.header>

                {/* Formulário responsivo */}
                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full min-w-0 max-w-full"
                >
                    <FormularioContato />
                </motion.div>
            </div>
        </section>
    );
}