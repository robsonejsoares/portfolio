"use client";

import { motion } from "framer-motion";
import { coresServicos, type Servico } from "@/data/dadosServicos";

interface CardServicoProps {
    servico: Servico;
    indice: number;
}

export function CardServico({ servico, indice }: CardServicoProps) {
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
            className={`glass-card group flex h-full flex-col rounded-xl border border-white/10 bg-slate-900/60 p-3 backdrop-blur-xl transition-all duration-300 hover:shadow-xl ${estilo.brilho} ${estilo.sombra}`}
        >
            <div
                aria-hidden="true"
                className="mb-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl text-lg leading-none transition-transform duration-300 group-hover:scale-110"
            >
                {servico.emoji}
            </div>

            <h3 className="mb-1 text-sm font-normal leading-snug text-[#A8B3C7] transition-colors duration-300">
                {servico.titulo}
            </h3>

            <p className="text-xs leading-relaxed text-slate-500">
                {servico.descricao}
            </p>
        </motion.article>
    );
}