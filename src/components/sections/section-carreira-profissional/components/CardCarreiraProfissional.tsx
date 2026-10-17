"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

interface CardCarreiraProfissionalProps {
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

export function CardCarreiraProfissional({
    cargo,
    empresa,
    subtitulo,
    periodo,
    categoria,
    descricao,
    destaques,
    cor,
    indice,
}: CardCarreiraProfissionalProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: indice * 0.12 }}
            className="relative w-full min-w-0"
        >
            <div className="glass-card min-w-0 rounded-md p-4 transition-all duration-300 hover:border-white/20 sm:p-5 sm:hover:-translate-y-1">
                {/* Cargo, empresa e período */}
                <div className="mb-4 flex min-w-0 flex-col items-start gap-3 sm:flex-row sm:justify-between">
                    <div className="w-full min-w-0 sm:flex-1">
                        <h3 className="break-words text-base font-semibold leading-snug tracking-tight text-[#A8B3C7]">
                            {cargo}
                        </h3>

                        <p className="mt-1 break-words font-display text-xs font-normal leading-relaxed text-slate-400">
                            {empresa}
                            {subtitulo && ` - ${subtitulo}`}
                        </p>
                    </div>

                    <div className="flex w-full min-w-0 flex-wrap items-center gap-2 sm:w-auto sm:shrink-0 sm:flex-col sm:items-end">
                        <span className="inline-flex min-w-0 items-center gap-1.5 text-xs leading-relaxed text-slate-400">
                            <CalendarDays
                                size={12}
                                aria-hidden="true"
                                className="shrink-0"
                            />
                            <span className="break-words">
                                {periodo}
                            </span>
                        </span>

                        <span
                            className="max-w-full break-words rounded-full px-2 py-1 text-[11px] font-normal tracking-wide"
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
                <p className="mb-4 break-words text-sm leading-relaxed text-slate-500">
                    {descricao}
                </p>

                {/* Responsabilidades e realizações */}
                <ul className="space-y-2">
                    {destaques.map((destaque, i) => (
                        <li
                            key={`${indice}-${i}`}
                            className="flex min-w-0 items-start gap-2 text-sm"
                        >
                            <span
                                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{ backgroundColor: cor }}
                                aria-hidden="true"
                            />

                            <span className="min-w-0 break-words leading-relaxed text-slate-500">
                                {destaque}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.article>
    );
}