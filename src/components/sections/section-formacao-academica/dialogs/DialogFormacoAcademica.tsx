
"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

import { ButtonFechar } from "@/components/ui/ButtonFechar";
import { CardFormacao } from "../components/CardFormacao";

interface Formacao {
    degree: string;
    institution: string;
    status: string;
    date?: string;
}

interface DialogFormacoAcademicaProps {
    formacoes: Formacao[];
    onClose: () => void;
}

export function DialogFormacoAcademica({
    formacoes,
    onClose,
}: DialogFormacoAcademicaProps) {
    useEffect(() => {
        const overflowAnterior = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = overflowAnterior;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    if (typeof document === "undefined") return null;

    return createPortal(
        <AnimatePresence>
            <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto p-3 sm:p-6">
                {/* Fundo da tela */}
                <motion.button
                    type="button"
                    aria-label="Fechar formação acadêmica"
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
                    aria-labelledby="dialog-formacao-title"
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
                                <GraduationCap
                                    size={20}
                                    aria-hidden="true"
                                />
                            </div>

                            <div className="min-w-0">
                                <h2
                                    id="dialog-formacao-title"
                                    className="text-base font-semibold leading-6 text-slate-300 sm:text-lg"
                                >
                                    Formação Acadêmica
                                </h2>

                                <p className="mt-0.5 font-mono text-[13px] text-slate-400">
                                    {formacoes.length}{" "}
                                    {formacoes.length === 1
                                        ? "formação registrada"
                                        : "formações registradas"}
                                </p>
                            </div>
                        </div>

                        <ButtonFechar
                            onClick={onClose}
                            className="shrink-0"
                        />
                    </header>

                    {/* Conteúdo: cresce até o limite e depois rola */}
                    <div className="min-h-0 space-y-4 overflow-y-auto overscroll-contain p-4 sm:p-6">
                        {formacoes.length > 0 ? (
                            formacoes.map((formacao, indice) => (
                                <CardFormacao
                                    key={`${formacao.institution}-${formacao.degree}-${indice}`}
                                    formacao={formacao}
                                    indice={indice}
                                />
                            ))
                        ) : (
                            <p className="py-8 text-center font-mono text-sm text-slate-400">
                                Nenhuma formação acadêmica cadastrada.
                            </p>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>,
        document.body,
    );
}
