"use client";

import { motion } from "framer-motion";
import { GraduationCap, CalendarCheck2, Building2 } from "lucide-react";

interface Formacao {
    degree: string;
    institution: string;
    status: string;
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

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.45,
                delay: indice * 0.1,
                ease: "easeOut",
            }}
            whileHover={{ y: -4 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-6"
        >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="mb-5 flex items-start justify-between gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                    <GraduationCap
                        className="h-6 w-6 text-cyan-300"
                        aria-hidden="true"
                    />
                </div>

                <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${concluida
                            ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                            : "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                        }`}
                >
                    <CalendarCheck2 className="h-3.5 w-3.5" />
                    {formacao.status}
                </span>
            </div>

            <h3 className="text-lg font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-cyan-200 sm:text-xl">
                {formacao.degree}
            </h3>

            <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                <Building2
                    className="h-4 w-4 shrink-0 text-cyan-400"
                    aria-hidden="true"
                />
                <span>{formacao.institution}</span>
            </div>
        </motion.article>
    );

}