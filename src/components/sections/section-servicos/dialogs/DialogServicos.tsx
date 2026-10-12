"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Layers3 } from "lucide-react";

import { ButtonFechar } from "@/components/ui/ButtonFechar";
import { dadosServicos } from "@/data/dadosServicos";
import { CardServico } from "../components/CardServico";

interface DialogServicosProps {
    isOpen: boolean;
    onClose: () => void;
}

export function DialogServicos({
    isOpen,
    onClose,
}: DialogServicosProps) {
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
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
                    <motion.button
                        type="button"
                        aria-label="Fechar todos os serviços"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 h-full w-full cursor-default bg-black/80 backdrop-blur-md"
                    />

                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="dialog-servicos-titulo"
                        initial={{ opacity: 0, scale: 0.96, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 16 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10 flex h-[85dvh] max-h-[900px] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-cyan-500/30 bg-[#090d16] shadow-2xl shadow-black/40"
                    >
                        <header className="flex shrink-0 items-center justify-between gap-4 border-b border-cyan-500/20 bg-[#070a12] p-4 sm:p-5">
                            <div className="flex min-w-0 items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                                    <Layers3 size={20} aria-hidden="true" />
                                </div>

                                <div className="min-w-0">
                                    <h2
                                        id="dialog-servicos-titulo"
                                        className="text-base font-semibold text-slate-200 sm:text-lg"
                                    >
                                        Todos os serviços
                                    </h2>
                                </div>
                            </div>

                            <ButtonFechar onClick={onClose} />
                        </header>

                        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {dadosServicos.map((servico, indice) => (
                                    <CardServico
                                        key={servico.titulo}
                                        servico={servico}
                                        indice={indice}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}