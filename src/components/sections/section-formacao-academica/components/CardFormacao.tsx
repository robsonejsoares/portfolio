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
    ultima?: boolean;
}

export function CardFormacao({
    formacao,
    indice,
}: CardFormacaoProps) {
    const concluida = formacao.status.toLowerCase().includes("conclu");

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
            className="glass-card group relative  min-w-0 w-full overflow-hidden rounded-xl border border-white/10 p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.03] sm:p-5"
        >
            <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-base font-medium tracking-tight text-slate-400">
                    {formacao.degree}
                </h3>

                <span
                    className={`inline-flex w-fit shrink-0 items-center rounded-full border px-3 py-0.5 text-[10px] font-normal ${concluida
                            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                            : "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300"
                        }`}
                >
                    {formacao.status}
                    {formacao.date ? ` em ${formacao.date}` : ""}
                </span>
            </div>

            <p className="mt-0 text-xs leading-relaxed text-slate-500">
                {formacao.institution}
            </p>
        </motion.article>
    );

}