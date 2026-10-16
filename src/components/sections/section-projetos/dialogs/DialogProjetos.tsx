"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Globe, GitBranch } from "lucide-react";

import { ButtonFechar } from "@/components/ui/ButtonFechar";
import type { Project } from "@/data/dadosPortfolio";
import { StatusProjeto } from "../components/StatusProjeto";

interface DialogProjetosProps {
    projeto: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export function DialogProjetos({
    projeto,
    isOpen,
    onClose,
}: DialogProjetosProps) {
    useEffect(() => {
        if (!isOpen) return;

        const overflowAnterior = document.body.style.overflow;

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = overflowAnterior;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (typeof document === "undefined") return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && projeto && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Fundo que fecha o diálogo */}
                    <motion.button
                        type="button"
                        aria-label="Fechar detalhes do projeto"
                        onClick={onClose}
                        className="absolute inset-0 cursor-default bg-slate-950/85 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Conteúdo do diálogo */}
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="dialog-projeto-titulo"
                        className="relative z-10 flex max-h-[92dvh] w-full max-w-5xl flex-col overflow-hidden rounded-md border border-white/10 bg-[#0b1020] shadow-2xl shadow-black/40"
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Cabeçalho do projeto */}
                        <header className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
                            <div className="flex min-w-0 items-center gap-2">
                                {projeto.liveUrl && (
                                    <Globe
                                        className="h-4 w-4 shrink-0 text-emerald-400"
                                        aria-hidden="true"
                                    />
                                )}

                                <h2
                                    id="dialog-projeto-titulo"
                                    className="min-w-0 truncate text-sm font-semibold text-slate-100 sm:text-base"
                                >
                                    {projeto.title}
                                </h2>
                            </div>

                            {/* Botão de acesso e botão fechar */}
                            <div className="flex shrink-0 items-center gap-2">
                                {projeto.liveUrl && (
                                    <a
                                        href={projeto.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Abrir ${projeto.title} em uma nova aba`}
                                        className="group/button relative inline-flex min-h-8 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-[#1B2B42] bg-[#17263D] px-2.5 py-1.5 text-[10px] font-semibold text-[#B8C7DB] transition-colors duration-200 ease-out hover:border-[#243247] hover:bg-[#121E30] hover:text-[#D0DAE8] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607A9D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220] motion-reduce:transition-none sm:px-3 sm:text-xs"
                                    >
                                        <span className="whitespace-nowrap">
                                            <span className="hidden sm:inline">
                                                Abrir página do projeto
                                            </span>

                                            <span className="sm:hidden">
                                                Abrir site
                                            </span>
                                        </span>

                                        <ExternalLink
                                            className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover/button:scale-110 motion-reduce:transition-none"
                                            aria-hidden="true"
                                        />
                                    </a>
                                )}

                                <ButtonFechar onClick={onClose} />
                            </div>
                        </header>

                        {/* Conteúdo rolável */}
                        <div className="min-h-0 flex-1 overflow-y-auto">
                            {/* Site publicado */}
                            {projeto.liveUrl && (
                                <div className="border-b border-white/10 bg-slate-950/40">
                                    <div className="relative h-[45dvh] min-h-[260px] max-h-[520px] w-full bg-slate-950 sm:h-[55dvh]">
                                        <iframe
                                            src={projeto.liveUrl}
                                            title={`Demonstração de ${projeto.title}`}
                                            className="h-full w-full border-0 bg-white"
                                            loading="lazy"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allow="fullscreen"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Descrição e tecnologias */}
                            <div className="space-y-6 p-4 sm:p-6">
                                {/* Sobre o projeto e status */}
                                <section>
                                    <div className="mb-2 flex items-center justify-between gap-3">
                                        <h3 className="text-sm font-semibold text-slate-200">
                                            Sobre o projeto
                                        </h3>

                                        <StatusProjeto
                                            status={projeto.status}
                                        />
                                    </div>

                                    <p className="text-sm leading-relaxed text-slate-400">
                                        {projeto.fullDescription}
                                    </p>
                                </section>

                                {/* Principais destaques */}
                                {projeto.highlights &&
                                    projeto.highlights.length > 0 && (
                                        <section>
                                            <h3 className="mb-3 text-sm font-semibold text-slate-200">
                                                Principais destaques
                                            </h3>

                                            <ul className="grid gap-2 sm:grid-cols-2">
                                                {projeto.highlights.map(
                                                    (destaque) => (
                                                        <li
                                                            key={destaque}
                                                            className="flex items-start gap-2 text-sm leading-relaxed text-slate-400"
                                                        >
                                                            <span
                                                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                                                                aria-hidden="true"
                                                            />

                                                            {destaque}
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </section>
                                    )}

                                {/* Tecnologias utilizadas */}
                                <section>
                                    <h3 className="mb-3 text-sm font-semibold text-slate-200">
                                        Tecnologias utilizadas
                                    </h3>

                                    <div className="flex flex-wrap gap-2">
                                        {projeto.technologies.map(
                                            (tecnologia) => (
                                                <span
                                                    key={tecnologia}
                                                    className="rounded-md border border-white/10 bg-slate-800/60 px-3 py-1.5 font-mono text-xs text-slate-300"
                                                >
                                                    {tecnologia}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </section>

                                {/* Link para o código-fonte */}
                                {projeto.githubUrl && (
                                    <a
                                        href={projeto.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2.5 text-sm text-slate-300 transition-colors hover:border-white/20 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                                    >
                                        <GitBranch
                                            className="h-4 w-4"
                                            aria-hidden="true"
                                        />

                                        Ver código-fonte

                                        <ExternalLink
                                            className="h-3.5 w-3.5"
                                            aria-hidden="true"
                                        />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body,
    );
}