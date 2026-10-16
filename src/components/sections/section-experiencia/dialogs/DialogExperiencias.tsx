
"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

import { ButtonFechar } from "@/components/ui/ButtonFechar";
import { CardExperiencia } from "../components/CardExperiencia";

interface Experiencia {
    company: string;
    subtitle?: string;
    period: string;
    role: string;
    highlights: string[];
}

interface ConfiguracaoVisual {
    cor: string;
    categoria: string;
    descricao: string;
}

interface DialogExperienciasProps {
    isOpen: boolean;
    onClose: () => void;
    experiencias: Experiencia[];
    configuracaoVisual: ConfiguracaoVisual[];
}

const visualPadrao: ConfiguracaoVisual = {
    cor: "#22D3EE",
    categoria: "Experiência",
    descricao:
        "Experiência profissional com foco no desenvolvimento de competências, na qualidade das entregas e na evolução contínua.",
};

export function DialogExperiencias({
    isOpen,
    onClose,
    experiencias,
    configuracaoVisual,
}: DialogExperienciasProps) {
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
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto p-3 sm:p-6">
                    {/* Fundo da tela */}
                    <motion.button
                        type="button"
                        aria-label="Fechar histórico de experiências"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-sm"
                    />

                    {/* Janela com altura dinâmica */}
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="dialog-experiencias-titulo"
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
                        className="relative z-10 my-auto flex max-h-[85dvh] w-full max-w-4xl shrink-0 flex-col overflow-hidden rounded-md border border-white/5 bg-slate-900 shadow-2xl shadow-black/30"
                    >
                        {/* Cabeçalho fixo */}
                        <header className="flex shrink-0 items-center justify-between gap-4 border-b border-white/5 bg-slate-800/50 p-4 sm:p-5">
                            <div className="flex min-w-0 items-center gap-3">

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-sky-400/15 bg-sky-400/5 text-sky-300">
                                    <BriefcaseBusiness size={20} aria-hidden="true" />
                                </div>


                                <div className="min-w-0">
                                    <h2
                                        id="dialog-experiencias-titulo"
                                        className="text-base font-semibold leading-6 text-slate-300 sm:text-lg"
                                    >
                                        Todas as experiências
                                    </h2>

                                    <p className="mt-0.5 font-mono text-[13px] text-slate-400">
                                        {experiencias.length} experiências profissionais
                                    </p>
                                </div>
                            </div>

                            <ButtonFechar onClick={onClose} />
                        </header>

                        {/* Conteúdo: cresce até o limite e depois rola */}
                        <div className="min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-6">
                            <div className="space-y-6">
                                {experiencias.map((experiencia, indice) => {
                                    const visual =
                                        configuracaoVisual[indice] ??
                                        visualPadrao;

                                    return (
                                        <CardExperiencia
                                            key={`${experiencia.company}-${experiencia.period}`}
                                            cargo={experiencia.role}
                                            empresa={experiencia.company}
                                            subtitulo={experiencia.subtitle}
                                            periodo={experiencia.period}
                                            categoria={visual.categoria}
                                            descricao={visual.descricao}
                                            destaques={experiencia.highlights}
                                            cor={visual.cor}
                                            indice={indice}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body,
    );
}
