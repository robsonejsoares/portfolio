"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

interface CardExperienciaProps {
    cargo: string;
    empresa: string;
    subtitulo?: string;
    periodo: string;
    categoria: string;
    descricao: string;
    destaques: string[];
    cor: string;
    indice: number;
}

export function CardExperiencia({
    cargo,
    empresa,
    subtitulo,
    periodo,
    categoria,
    descricao,
    destaques,
    cor,
    indice,
}: CardExperienciaProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: indice * 0.12 }}
            className="relative"
        >
            <div className="glass-card rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                {/* Cargo, empresa e período */}
                <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                        <h3 className="text-base font-semibold tracking-tight text-[#A8B3C7]">
                            {cargo}
                        </h3>

                        <p className="mt-0.5 font-display text-xs font-normal text-slate-400">
                            {empresa}
                            {subtitulo && ` - ${subtitulo}`}
                        </p>
                    </div>

                    <div className="flex flex-col items-start gap-2 sm:items-end">
                        <span className="flex items-center gap-1.5 text-xs text-slate-400">
                            <CalendarDays
                                size={12}
                                aria-hidden="true"
                            />
                            {periodo}
                        </span>

                        <span
                            className="rounded-full px-2 py-0.5 text-[11px] font-normal tracking-wide"
                            style={{
                                backgroundColor: `${cor}15`,
                                color: cor,
                            }}
                        >
                            {categoria}
                        </span>
                    </div>
                </div>

                {/* Descrição */}
                <p className="mb-4 text-sm leading-relaxed text-slate-500">
                    {descricao}
                </p>

                {/* Responsabilidades e realizações */}
                <ul className="space-y-1.5">
                    {destaques.map((destaque, i) => (
                        <li
                            key={`${indice}-${i}`}
                            className="flex items-start gap-2 text-sm"
                        >
                            <span
                                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{ backgroundColor: cor }}
                                aria-hidden="true"
                            />

                            <span className="leading-relaxed text-slate-500">
                                {destaque}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.article>
    );
}