"use client";

import { motion } from "framer-motion";
import { Monitor } from "lucide-react";

import { ButtonCardProjeto } from "@/components/ui/ButtonCardProjeto";
import type { Project } from "@/data/dadosPortfolio";
import { StatusProjeto } from "./StatusProjeto";

interface CardProjetosProps {
    projeto: Project;
    index: number;
    onView: (projeto: Project) => void;
}

export function CardProjetos({
    projeto,
    index,
    onView,
}: CardProjetosProps) {
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
            {/* Imagem do projeto */}
            <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-t-md border-b border-slate-200 bg-white p-6">
                {projeto.image ? (
                    <img
                        src={projeto.image}
                        alt={`Logo do projeto ${projeto.title}`}
                        loading={index < 2 ? "eager" : "lazy"}
                        className="relative z-10 h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                        onError={(event) => {
                            event.currentTarget.style.display = "none";

                            const fallback =
                                event.currentTarget.nextElementSibling;

                            if (fallback instanceof HTMLElement) {
                                fallback.style.display = "flex";
                            }
                        }}
                    />
                ) : null}

                {/* Fallback para imagem indisponível */}
                <div
                    className="absolute inset-0 hidden flex-col items-center justify-center gap-1.5 bg-white"
                    aria-label="Imagem indisponível"
                >
                    <Monitor
                        className="h-6 w-6 text-slate-500"
                        aria-hidden="true"
                    />

                    <span className="font-mono text-[10px] text-slate-500">
                        Imagem indisponível
                    </span>
                </div>
            </div>

            {/* Conteúdo do card */}
            <div className="glass-card flex flex-1 flex-col rounded-b-md p-2.5 transition-all duration-300 hover:border-white/20">
                {/* Título e status */}
                <div className="mb-2 flex min-w-0 items-center justify-between gap-2 border-b border-white/[0.07] pb-2">
                    <h3 className="min-w-0 truncate text-[13px] font-semibold tracking-tight text-[#A8B3C7]">
                        {projeto.title}
                    </h3>

                    <StatusProjeto status={projeto.status} />
                </div>

                {/* Descrição */}
                <p className="mb-2.5 line-clamp-2 text-[11px] leading-relaxed text-slate-500">
                    {projeto.shortDescription}
                </p>

                {/* Tecnologias */}
                <div className="mb-2.5 flex flex-wrap gap-1">
                    {projeto.technologies.map((tecnologia) => (
                        <span
                            key={tecnologia}
                            className="rounded-md border border-white/[0.07] bg-slate-800/40 px-1.5 py-0.5 font-mono text-[9px] leading-tight text-slate-300"
                        >
                            {tecnologia}
                        </span>
                    ))}
                </div>

                {/* Ações */}
                <div className="mt-auto flex items-center gap-1.5 border-t border-white/[0.07] pt-2.5">
                    <ButtonCardProjeto
                        variant="details"
                        onClick={() => onView(projeto)}
                        label={`Ver detalhes do projeto ${projeto.title}`}
                        className="flex-1"
                    >
                        Ver projeto
                    </ButtonCardProjeto>

                    {projeto.liveUrl && (
                        <div className="group/tooltip relative">
                            <ButtonCardProjeto
                                variant="external"
                                href={projeto.liveUrl}
                                label={`Abrir ${projeto.title} em uma nova guia`}
                            />

                            <span
                                role="tooltip"
                                className="pointer-events-none absolute bottom-full right-0 z-20 mb-1.5 w-max max-w-52 rounded-md border border-[#2A3C56] bg-[#17263D] px-2.5 py-1.5 text-center font-mono text-[10px] text-[#E7EDF5] opacity-0 shadow-lg transition-opacity duration-200 group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100"
                            >
                                Abrir página do projeto
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </motion.article>
    );
}