"use client";

import { motion } from "framer-motion";
import {
    Award,
    ExternalLink,
    GraduationCap,
    BookOpen,
} from "lucide-react";

import type { Qualificacao } from "@/data/dadosQualificacoes";
import { ButtonCardProjeto } from "@/components/ui/ButtonCardProjeto";
import { StatusQualificacao } from "./StatusQualificacao";

interface CardQualificacoesProps {
    qualificacao: Qualificacao;
    index: number;
    onView: (qualificacao: Qualificacao) => void;
}

const iconesCategoria = {
    "Formação acadêmica": GraduationCap,
    Cursos: BookOpen,
    Certificações: Award,
};

export function CardQualificacoes({
    qualificacao,
    index,
    onView,
}: CardQualificacoesProps) {
    const IconeCategoria = iconesCategoria[qualificacao.category];

    return (
        <motion.article
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.25,
                delay: Math.min(index * 0.04, 0.16),
                ease: "easeOut",
            }}
            whileHover={{ y: -2 }}
            className="group flex min-w-0 flex-col overflow-hidden rounded-md transition-shadow duration-300 hover:shadow-md hover:shadow-slate-950/10"
        >
            {/* Pré-visualização do certificado */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-md border-b border-slate-200 bg-white">
                {qualificacao.certificateUrl ? (
                    <iframe
                        src={qualificacao.certificateUrl}
                        title={`Pré-visualização do certificado de ${qualificacao.title}`}
                        className="h-full w-full border-0"
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 p-6">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                            <IconeCategoria
                                className="h-7 w-7 text-slate-600"
                                aria-hidden="true"
                            />
                        </div>

                        <span className="max-w-full truncate text-xs font-medium text-slate-600">
                            {qualificacao.category}
                        </span>
                    </div>
                )}
            </div>

            {/* Conteúdo do card */}
            <div className="glass-card flex flex-1 flex-col rounded-b-md p-2.5 transition-all duration-300 hover:border-white/20">
                {/* Título */}
                <div className="mb-2 flex min-w-0 items-center gap-2 border-b border-white/[0.07] pb-2">
                    <h3
                        className="min-w-0 truncate text-[13px] font-semibold tracking-tight text-[#A8B3C7]"
                        title={qualificacao.title}
                    >
                        {qualificacao.title}
                    </h3>
                </div>

                {/* Instituição e status sempre na mesma linha */}
                <div className="mb-2 flex w-full min-w-0 flex-nowrap items-center gap-2">
                    <p
                        className="min-w-0 flex-1 truncate text-[11px] font-medium text-slate-400"
                        title={qualificacao.institution}
                    >
                        {qualificacao.institution}
                    </p>

                    {qualificacao.status && (
                        <StatusQualificacao
                            status={qualificacao.status}
                        />
                    )}
                </div>

                {/* Período para qualificações sem status */}
                {!qualificacao.status && (
                    <p className="mb-2 break-words text-[10px] text-slate-500">
                        {qualificacao.period}
                    </p>
                )}

                {/* Ações */}
                <div className="mt-auto flex items-center gap-1.5 border-t border-white/[0.07] pt-2.5">
                    <ButtonCardProjeto
                        variant="details"
                        onClick={() => onView(qualificacao)}
                        label={`Ver detalhes de ${qualificacao.title}`}
                        className="flex-1"
                    >
                        Ver detalhes
                    </ButtonCardProjeto>

                    {qualificacao.certificateUrl && (
                        <div className="group/tooltip relative shrink-0">
                            <a
                                href={qualificacao.certificateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Ver certificado de ${qualificacao.title} em uma nova aba`}
                                className="inline-flex min-h-8 items-center justify-center gap-1.5 rounded-md border border-[#1B2B42] bg-[#17263D] px-2.5 py-1.5 text-[10px] font-semibold text-[#B8C7DB] transition-colors hover:bg-[#121E30] hover:text-[#D0DAE8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607A9D]"
                            >
                                <ExternalLink
                                    className="h-3.5 w-3.5"
                                    aria-hidden="true"
                                />
                            </a>

                            {/* Tooltip personalizado */}
                            <span
                                role="tooltip"
                                className="pointer-events-none absolute bottom-full right-0 z-50 mb-2 whitespace-nowrap rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-slate-200 opacity-0 shadow-lg transition-opacity duration-200 group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100"
                            >
                                Ver certificado
                                <span className="absolute right-3 top-full h-0 w-0 border-x-[5px] border-t-[5px] border-x-transparent border-t-slate-900" />
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </motion.article>
    );

}