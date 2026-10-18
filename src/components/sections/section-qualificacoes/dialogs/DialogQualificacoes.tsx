"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
    Award,
    ExternalLink,
    GraduationCap,
    BookOpen,
} from "lucide-react";

import { ButtonFechar } from "@/components/ui/ButtonFechar";
import { StatusQualificacao } from "../components/StatusQualificacao";
import type { Qualificacao } from "@/data/dadosQualificacoes";

interface DialogQualificacoesProps {
    qualificacao: Qualificacao | null;
    isOpen: boolean;
    onClose: () => void;
}

const iconesCategoria = {
    "Formação acadêmica": GraduationCap,
    Cursos: BookOpen,
    Certificações: Award,
};

export function DialogQualificacoes({
    qualificacao,
    isOpen,
    onClose,
}: DialogQualificacoesProps) {
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

    const IconeCategoria = qualificacao
        ? iconesCategoria[qualificacao.category]
        : Award;

    return createPortal(
        <AnimatePresence>
            {isOpen && qualificacao && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto overscroll-contain p-3 sm:p-6">
                    {/* Fundo da tela */}
                    <motion.button
                        type="button"
                        aria-label="Fechar detalhes da qualificação"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-sm"
                    />

                    {/* Janela da qualificação — dimensões alinhadas ao dialog de projetos */}
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="dialog-qualificacao-titulo"
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
                            <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-sky-400/15 bg-sky-400/5 text-sky-300 sm:h-10 sm:w-10">
                                    <IconeCategoria
                                        size={18}
                                        aria-hidden="true"
                                    />
                                </div>

                                <h2
                                    id="dialog-qualificacao-titulo"
                                    className="min-w-0 truncate text-sm font-semibold text-slate-300 sm:text-lg"
                                    title={qualificacao.title}
                                >
                                    {qualificacao.title}
                                </h2>
                            </div>

                            {/* Acesso ao certificado e botão de fechar */}
                            <div className="flex shrink-0 items-center gap-2">
                                {qualificacao.certificateUrl && (
                                    <a
                                        href={qualificacao.certificateUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Abrir certificado de ${qualificacao.title} em uma nova aba`}
                                        className="group/button relative inline-flex min-h-8 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-sky-400/15 bg-sky-400/5 px-2.5 py-1.5 text-[10px] font-semibold text-sky-300 transition-colors duration-200 ease-out hover:border-sky-400/25 hover:bg-sky-400/10 hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 motion-reduce:transition-none sm:px-3 sm:text-xs"
                                    >
                                        <span className="whitespace-nowrap">
                                            <span className="hidden sm:inline">
                                                Ver certificado
                                            </span>

                                            <span className="sm:hidden">
                                                Certificado
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
                            {/* Pré-visualização do certificado */}
                            {qualificacao.certificateUrl && (
                                <section className="border-b border-white/5 bg-slate-950/40">
                                    <div className="relative h-[45dvh] min-h-[260px] max-h-[520px] w-full bg-slate-950 sm:h-[55dvh]">
                                        <iframe
                                            src={qualificacao.certificateUrl}
                                            title={`Pré-visualização do certificado de ${qualificacao.title}`}
                                            className="h-full w-full border-0 bg-white"
                                            loading="lazy"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allow="fullscreen"
                                        />
                                    </div>
                                </section>
                            )}

                            {/* Informações da qualificação */}
                            <div className="min-w-0 space-y-6 p-4 sm:p-6">
                                {/* Instituição e status na mesma linha */}
                                <section>
                                    <div className="mb-2 flex min-w-0 items-center gap-3">
                                        <h3
                                            className="min-w-0 flex-1 truncate text-sm font-semibold text-slate-300"
                                            title={qualificacao.institution}
                                        >
                                            {qualificacao.institution}
                                        </h3>

                                        {qualificacao.status && (
                                            <StatusQualificacao
                                                status={qualificacao.status}
                                                category={qualificacao.category}
                                            />
                                        )}
                                    </div>

                                    {!qualificacao.status && (
                                        <p className="break-words text-sm leading-relaxed text-slate-400">
                                            {qualificacao.period !==
                                            "Não informado"
                                                ? qualificacao.period
                                                : "Período não informado"}
                                        </p>
                                    )}
                                </section>

                                {/* Descrição */}
                                <section>
                                    <h3 className="mb-2 text-sm font-semibold text-slate-300">
                                        Sobre a qualificação
                                    </h3>

                                    <p className="whitespace-pre-line break-words text-sm leading-relaxed text-slate-400">
                                        {qualificacao.description}
                                    </p>
                                </section>

                                {/* Principais conteúdos */}
                                {qualificacao.highlights &&
                                    qualificacao.highlights.length > 0 && (
                                        <section>
                                            <h3 className="mb-3 text-sm font-semibold text-slate-300">
                                                Principais conteúdos
                                            </h3>

                                            <ul className="grid gap-2 sm:grid-cols-2">
                                                {qualificacao.highlights.map(
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
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body,
    );
}