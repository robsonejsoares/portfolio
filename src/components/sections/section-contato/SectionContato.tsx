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
                {/* Cabeçalho padronizado */}
                <motion.header
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mb-3 w-full min-w-0 text-left"
                >
                    <h2
                        id="contact-title"
                        className="break-words font-display text-xl font-bold text-[#8FA8C8] sm:text-2xl"
                    >
                        Contato
                    </h2>
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