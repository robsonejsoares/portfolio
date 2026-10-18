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
    // Bloqueia a rolagem do fundo e permite fechar com Escape.
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

    // Evita acessar o document durante a renderização no servidor.
    if (typeof document === "undefined") return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && projeto && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overscroll-contain p-3 sm:p-6">
                    {/* Fundo da tela */}
                    <motion.button
                        type="button"
                        aria-label="Fechar detalhes do projeto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-sm"
                    />

                    {/* Janela do projeto — dimensões preservadas */}
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="dialog-projeto-titulo"
                        initial={{
                            opacity: 0,
                            scale: 0.96,
                            y: 16,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.96,
                            y: 16,
                        }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10 my-auto flex max-h-[92dvh] w-full max-w-5xl flex-col overflow-hidden rounded-md border border-white/5 bg-slate-900 shadow-2xl shadow-black/30"
                    >
                        {/* Cabeçalho fixo */}
                        <header className="flex shrink-0 items-center justify-between gap-3 border-b border-white/5 bg-slate-800/50 px-4 py-3 sm:px-6">
                            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                                {projeto.liveUrl && (
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-emerald-400/15 bg-emerald-400/5 text-emerald-400 sm:h-10 sm:w-10">
                                        <Globe
                                            size={18}
                                            aria-hidden="true"
                                        />
                                    </div>
                                )}

                                <h2
                                    id="dialog-projeto-titulo"
                                    className="min-w-0 truncate text-sm font-semibold text-slate-300 sm:text-lg"
                                >
                                    {projeto.title}
                                </h2>
                            </div>

                            {/* Acesso ao site e botão de fechar */}
                            <div className="flex shrink-0 items-center gap-2">
                                {projeto.liveUrl && (
                                    <a
                                        href={projeto.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Abrir ${projeto.title} em uma nova aba`}
                                        className="group/button relative inline-flex min-h-8 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-sky-400/15 bg-sky-400/5 px-2.5 py-1.5 text-[10px] font-semibold text-sky-300 transition-colors duration-200 ease-out hover:border-sky-400/25 hover:bg-sky-400/10 hover:text-sky-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 motion-reduce:transition-none sm:px-3 sm:text-xs"
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

                                <div className="shrink-0">
                                    <ButtonFechar onClick={onClose} />
                                </div>
                            </div>
                        </header>

                        {/* Conteúdo rolável */}
                        <div className="min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-contain">
                            {/* Site publicado — dimensões preservadas */}
                            {projeto.liveUrl && (
                                <div className="border-b border-white/5 bg-slate-950/40">
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
                            <div className="min-w-0 space-y-6 p-4 sm:p-6">
                                {/* Sobre o projeto e status */}
                                <section>
                                    <div className="mb-2 flex items-center justify-between gap-3">
                                        <h3 className="text-sm font-semibold text-slate-300">
                                            Sobre o projeto
                                        </h3>

                                        <StatusProjeto
                                            status={projeto.status}
                                        />
                                    </div>

                                    <p className="break-words text-sm leading-relaxed text-slate-400">
                                        {projeto.fullDescription}
                                    </p>
                                </section>

                                {/* Principais destaques */}
                                {projeto.highlights &&
                                    projeto.highlights.length > 0 && (
                                        <section>
                                            <h3 className="mb-3 text-sm font-semibold text-slate-300">
                                                Principais destaques
                                            </h3>

                                            <ul className="grid gap-2 sm:grid-cols-2">
                                                {projeto.highlights.map(
                                                    (destaque) => (
                                                        <li
                                                            key={destaque}
                                                            className="flex min-w-0 items-start gap-2 break-words text-sm leading-relaxed text-slate-400"
                                                        >
                                                            <span
                                                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400"
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
                                    <h3 className="mb-3 text-sm font-semibold text-slate-300">
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
                                    <section>
                                        <a
                                            href={projeto.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-md border border-sky-400/15 bg-sky-400/5 px-4 py-2.5 text-sm text-sky-300 transition-colors hover:bg-sky-400/10 hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50"
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
                                    </section>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body,
    );

}