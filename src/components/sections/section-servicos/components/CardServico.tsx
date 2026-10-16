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
            whileHover={{
                y: 0,
            }}
            className={`glass-card group flex h-full min-w-0 cursor-default flex-col rounded-md border border-white/10 bg-slate-900/60 p-3 backdrop-blur-xl transition-all duration-300 hover:shadow-xl sm:hover:-translate-y-2 ${estilo.brilho} ${estilo.sombra}`}
        >
            <div
                aria-hidden="true"
                className="mb-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-lg leading-none"
            >
                {servico.emoji}
            </div>

            <h3 className="mb-1 min-w-0 break-words text-sm font-normal leading-snug text-[#A8B3C7] transition-colors duration-300">
                {servico.titulo}
            </h3>

            <p className="min-w-0 break-words text-xs leading-relaxed text-slate-500">
                {servico.descricao}
            </p>
        </motion.article>
    );
}