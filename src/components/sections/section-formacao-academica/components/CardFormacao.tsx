
"use client";

import { motion } from "framer-motion";

interface Formacao {
    degree: string;
    institution: string;
    status: string;
    date?: string;
}

interface CardFormacaoProps {
    formacao: Formacao;
    indice: number;
}

export function CardFormacao({
    formacao,
    indice,
}: CardFormacaoProps) {
    const concluida = formacao.status.toLowerCase().includes("conclu");

    const statusCompleto = formacao.date
        ? `${formacao.status} em ${formacao.date}`
        : formacao.status;

    const coresStatus = concluida
        ? "border-emerald-500/20 bg-emerald-500/[0.04] text-emerald-300"
        : "border-cyan-400/15 bg-cyan-400/[0.03] text-cyan-300";

    return (
        <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.45,
                delay: indice * 0.1,
                ease: "easeOut",
            }}
            whileHover={{ y: 0 }}
            className="glass-card group relative w-full min-w-0 rounded-md border border-white/10 p-4 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.03] sm:p-5 sm:transition-all sm:hover:-translate-y-1"
        >
            <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="min-w-0 break-words text-sm font-medium leading-relaxed tracking-tight text-slate-300 sm:text-base">
                    {formacao.degree}
                </h3>

                {/* Status para desktop */}
                <span
                    className={`hidden max-w-full min-w-0 flex-wrap items-center self-start break-words rounded-full border px-2 py-0.5 text-[9px] font-normal leading-tight sm:inline-flex sm:px-2.5 sm:py-1 sm:text-[10px] sm:leading-relaxed ${coresStatus}`}
                >
                    {statusCompleto}
                </span>
            </div>

            <div className="mt-2 flex w-full min-w-0 items-center justify-between gap-2">
                <p className="min-w-0 flex-1 break-words text-xs leading-relaxed text-slate-400">
                    {formacao.institution}
                </p>

                {/* Status para mobile: mais compacto */}
                <span
                    className={`inline-flex max-w-[60%] min-w-0 shrink-0 flex-wrap items-center justify-center break-words rounded-full border px-1.5 py-0.5 text-center text-[9px] font-normal leading-tight sm:hidden ${coresStatus}`}
                >
                    {statusCompleto}
                </span>
            </div>
        </motion.article>
    );
}
