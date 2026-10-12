"use client";

import { motion } from "framer-motion";
import { CalendarDays, type LucideIcon } from "lucide-react";

interface CardExperienciaProps {
    cargo: string;
    empresa: string;
    subtitulo?: string;
    periodo: string;
    categoria: string;
    descricao: string;
    destaques: string[];
    cor: string;
    icone: LucideIcon;
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
    icone: Icone,
    indice,
}: CardExperienciaProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: indice * 0.12 }}
            className="relative md:pl-16"
        >
            {/* Marcador da timeline */}
            <div
                className="absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-full border-2 md:flex"
                style={{
                    backgroundColor: `${cor}18`,
                    borderColor: `${cor}40`,
                    color: cor,
                }}
                aria-hidden="true"
            >
                <Icone size={18} strokeWidth={2} />
            </div>

            {/* Card profissional */}
            <div className="glass-card rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                {/* Cargo, empresa e período */}
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-semibold tracking-tight text-slate-300">
                            {cargo}
                        </h3>

                        <p className="mt-0.5 font-display font-normal text-slate-400">
                            {empresa}{subtitulo && ` - ${subtitulo}`}
                        </p>
                    </div>

                    <div className="flex flex-col items-start gap-2 sm:items-end">
                        <span className="flex items-center gap-1.5 text-xs text-slate-400">
                            <CalendarDays size={12} aria-hidden="true" />
                            {periodo}
                        </span>

                        <span
                            className="rounded-full px-2.5 py-1 text-xs font-semibold"
                            style={{
                                backgroundColor: `${cor}20`,
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