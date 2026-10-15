"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Globe, Layers3 } from "lucide-react";
import { ButtonFechar } from "@/components/ui/ButtonFechar";
import type { Project } from "@/data/dadosPortfolio";

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
    const concluido = projeto?.status === "Concluído";

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
                        className="relative z-10 flex max-h-[92dvh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0b1020] shadow-2xl shadow-black/40"
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Cabeçalho fixo */}
                        <header className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
                            <div className="flex min-w-0 items-center gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10">
                                    <Layers3
                                        className="h-4 w-4 text-cyan-300"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div className="min-w-0">
                                    {/* Categoria e situação */}
                                    <div className="flex flex-wrap items-center gap-2">
                                        <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                                            {projeto.category}
                                        </p>

                                        <span
                                            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] ${concluido
                                                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                                                    : "border-red-500/30 bg-red-500/10 text-red-300"
                                                }`}
                                        >
                                            <span className="relative flex h-1.5 w-1.5 shrink-0">
                                                <span
                                                    className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${concluido
                                                            ? "bg-emerald-400"
                                                            : "bg-red-400"
                                                        }`}
                                                />
                                                <span
                                                    className={`relative inline-flex h-1.5 w-1.5 rounded-full ${concluido
                                                            ? "bg-emerald-400"
                                                            : "bg-red-400"
                                                        }`}
                                                />
                                            </span>

                                            {projeto.status}
                                        </span>
                                    </div>

                                    <h2
                                        id="dialog-projeto-titulo"
                                        className="truncate text-sm font-semibold text-slate-100 sm:text-base"
                                    >
                                        {projeto.title}
                                    </h2>
                                </div>
                            </div>

                            <ButtonFechar onClick={onClose} />
                        </header>

                        {/* Conteúdo rolável */}
                        <div className="min-h-0 flex-1 overflow-y-auto">
                            {/* Site publicado */}
                            {projeto.liveUrl && (
                                <div className="border-b border-white/10 bg-slate-950/40">
                                    <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
                                        <div className="flex items-center gap-2 text-xs text-slate-400">
                                            <Globe
                                                className="h-4 w-4 text-emerald-400"
                                                aria-hidden="true"
                                            />
                                            <span>Versão publicada</span>
                                        </div>

                                        <a
                                            href={projeto.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-md border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs font-medium text-cyan-300 transition-colors hover:bg-cyan-400/20"
                                        >
                                            Abrir em nova aba
                                            <ExternalLink
                                                className="h-3.5 w-3.5"
                                                aria-hidden="true"
                                            />
                                        </a>
                                    </div>

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

                                    <p className="px-4 py-2 text-[11px] leading-relaxed text-slate-500 sm:px-6">
                                        Se o site não aparecer aqui, ele pode
                                        bloquear a exibição em iframe. Use
                                        “Abrir em nova aba” para acessá-lo.
                                    </p>
                                </div>
                            )}

                            {/* Descrição e tecnologias */}
                            <div className="space-y-6 p-4 sm:p-6">
                                <section>
                                    <h3 className="mb-2 text-sm font-semibold text-slate-200">
                                        Sobre o projeto
                                    </h3>

                                    <p className="text-sm leading-relaxed text-slate-400">
                                        {projeto.fullDescription}
                                    </p>
                                </section>

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
                                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                                                            {destaque}
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </section>
                                    )}

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

                                {projeto.githubUrl && (
                                    <a
                                        href={projeto.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2.5 text-sm text-slate-300 transition-colors hover:border-white/20 hover:bg-white/5"
                                    >
                                        <Github
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