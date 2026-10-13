"use client";

import { motion } from "framer-motion";
import { dadosCurriculo } from "@/data/dadosCurriculo";
import { CardFormacao } from "./components/CardFormacao";

export function SectionFormacaoAcademica() {
    const formacoes = [...dadosCurriculo.education].sort((a, b) => {
        const dataA = "date" in a ? String(a.date ?? "") : "";
        const dataB = "date" in b ? String(b.date ?? "") : "";

        return dataB.localeCompare(dataA);
    });

    return (
        <section
            id="education"
            aria-labelledby="education-title"
            className="relative z-10 w-full min-w-0 py-6 sm:py-8"
        >
            <div className="w-full min-w-0">
                <header className="mb-8 w-full text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2
                            id="education-title"
                            className="mb-3 font-display text-2xl font-bold text-cyan-300/70"
                        >
                            Formação Acadêmica
                        </h2>

                        <p className="text-left text-xs font-mono tracking-widest text-slate-400">
                            Minha formação em tecnologia e especializações
                            voltadas ao desenvolvimento de software.
                        </p>
                    </motion.div>
                </header>

                <div className="flex w-full min-w-0 flex-col gap-4">
                    {formacoes.map((formacao, indice) => (
                        <CardFormacao
                            key={`${formacao.institution}-${formacao.degree}`}
                            formacao={formacao}
                            indice={indice}
                            ultima={indice === formacoes.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );

}