"use client";

import { motion } from "framer-motion";
import { coresServicos, type Servico } from "@/data/dadosServicos";

interface CardServicoProps {
    servico: Servico;
    indice: number;
}

export function CardServico({ servico, indice }: CardServicoProps) {
    const Icone = servico.icone;
    const estilo = coresServicos[servico.cor];

    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.45,
                delay: (indice % 3) * 0.07,
            }}
            whileHover={{ y: -8 }}
            className={`glass-card group flex h-full flex-col rounded-2xl border border-white/10 p-5 transition-all duration-300 hover:shadow-xl bg-slate-900/60 backdrop-blur-xl ${estilo.brilho} ${estilo.sombra}`}
        >
            <div
                className={`mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${estilo.fundo} ${estilo.borda} ${estilo.texto} transition-transform duration-300 group-hover:scale-110`}
            >
                <Icone
                    aria-hidden="true"
                    className="h-6 w-6"
                    strokeWidth={1.8}
                />
            </div>

            <h3 className="mb-2 text-sm font-semibold leading-snug text-slate-300 transition-colors duration-300">
                {servico.titulo}
            </h3>

            <p className="text-xs leading-relaxed text-slate-400">
                {servico.descricao}
            </p>
        </motion.article>
    );
}