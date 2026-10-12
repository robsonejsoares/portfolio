
"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BriefcaseBusiness, History } from "lucide-react";

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

export function DialogExperiencias({
    isOpen,
    onClose,
    experiencias,
    configuracaoVisual,
}: DialogExperienciasProps) {
    useEffect(() => {
        if (!isOpen) return;

        const overflowAnterior = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = overflowAnterior;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
                    {/* Fundo da modal */}
                    <motion.button
                        type="button"
                        aria-label="Fechar histórico de experiências"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 h-full w-full cursor-default bg-black/80 backdrop-blur-md"
                    />

                    {/* Janela */}
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="dialog-experiencias-titulo"
                        initial={{ opacity: 0, scale: 0.96, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 16 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10 flex h-[85dvh] max-h-[900px] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-cyan-500/30 bg-[#090d16] shadow-2xl shadow-black/40"
                    >
                        {/* Cabeçalho fixo */}
                        <header className="flex shrink-0 items-center justify-between gap-4 border-b border-cyan-500/20 bg-[#070a12] p-4 sm:p-5">
                            <div className="flex min-w-0 items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                                    <History size={20} />
                                </div>

                                <div className="min-w-0">
                                    <h2
                                        id="dialog-experiencias-titulo"
                                        className="text-base font-semibold text-slate-200 sm:text-lg"
                                    >
                                        Todas as experiências
                                    </h2>

                                    <p className="mt-0.5 text-xs text-slate-500">
                                        {experiencias.length} experiências profissionais
                                    </p>
                                </div>
                            </div>

                            <ButtonFechar onClick={onClose} />
                        </header>

                        {/* Lista com rolagem independente */}
                        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6">
                            <div className="space-y-6">
                                {experiencias.map((experiencia, indice) => {
                                    const visual = configuracaoVisual[indice] ?? {
                                        cor: "#22D3EE",
                                        categoria: "Experiência",
                                        descricao:
                                            "Experiência profissional e evolução contínua de competências.",
                                    };

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
                                            icone={BriefcaseBusiness}
                                            indice={indice}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
