"use client";

import { motion } from "framer-motion";
import { dadosCurriculo } from "@/data/dadosCurriculo";
import { CardFormacao } from "./components/CardFormacao";

export function SectionFormacaoAcademica() {
    const formacoes = dadosCurriculo.education;

    return (
        <section
            id="education"
            aria-labelledby="education-title"
            className="relative z-10 w-full min-w-0 py-6 sm:py-8"
        >
            <div className="w-full min-w-0">
                {/* Cabeçalho da seção */}
                <header className="mb-8 w-full text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2
                            id="education-title"
                            className="mb-3 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-left font-display text-4xl font-black text-transparent"
                        >
                            Formação Acadêmica
                        </h2>

                        <p className="text-left text-xs font-mono tracking-widest text-slate-400">
                            Minha formação em tecnologia e especializações
                            voltadas ao desenvolvimento de software.
                        </p>
                    </motion.div>
                </header>

                {/* Cards de formação acadêmica */}
                <div className="grid w-full min-w-0 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {formacoes.map((formacao, indice) => (
                        <CardFormacao
                            key={`${formacao.institution}-${formacao.degree}`}
                            formacao={formacao}
                            indice={indice}
                        />
                    ))}
                </div>
            </div>
        </section>
    );

}