"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
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
    // Bloqueia a rolagem da página e permite fechar com Escape.
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

    // Evita acessar document durante a renderização no servidor.
    if (typeof document === "undefined") return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto overscroll-contain p-3 sm:p-6">
                    {/* Fundo da tela */}
                    <motion.button
                        type="button"
                        aria-label="Fechar todos os serviços"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-sm"
                    />

                    {/* Janela responsiva */}
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="dialog-servicos-titulo"
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
                        className="relative z-10 my-auto flex max-h-[calc(100dvh-1.5rem)] w-full min-w-0 max-w-4xl shrink-0 flex-col overflow-hidden rounded-md border border-white/5 bg-slate-900 shadow-2xl shadow-black/30 sm:max-h-[85dvh]"
                    >
                        {/* Cabeçalho fixo */}
                        <header className="flex shrink-0 items-center justify-between gap-2 border-b border-white/5 bg-slate-800/50 p-3 sm:gap-4 sm:p-5">
                            <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-sky-400/15 bg-sky-400/5 text-sky-300 sm:h-10 sm:w-10">
                                    <Layers3
                                        size={20}
                                        aria-hidden="true"
                                    />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <h2
                                        id="dialog-servicos-titulo"
                                        className="break-words text-sm font-semibold leading-5 text-slate-300 sm:text-lg sm:leading-6"
                                    >
                                        Todos os serviços
                                    </h2>

                                    <p className="mt-0.5 break-words font-mono text-xs text-slate-400 sm:text-[13px]">
                                        {dadosServicos.length}{" "}
                                        {dadosServicos.length === 1
                                            ? "serviço disponível"
                                            : "serviços disponíveis"}
                                    </p>
                                </div>
                            </div>

                            <div className="shrink-0">
                                <ButtonFechar onClick={onClose} />
                            </div>
                        </header>

                        {/* Conteúdo com rolagem interna */}
                        <div className="min-h-0 overflow-x-hidden overflow-y-auto overscroll-contain p-3 sm:p-6">
                            <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
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
        </AnimatePresence>,
        document.body,
    );
}