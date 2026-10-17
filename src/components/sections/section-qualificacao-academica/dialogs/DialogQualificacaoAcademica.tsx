"use client";

import {
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { GraduationCap } from "lucide-react";

import { ButtonFechar } from "@/components/ui/ButtonFechar";
import { CardQualificacaoAcademica } from "../components/CardQualificacaoAcademica";

interface Formacao {
    degree: string;
    institution: string;
    status: string;
    date?: string;
}

interface DialogQualificacaoAcademicaProps {
    formacoes: Formacao[];
    onClose: () => void;
}

const SELETORES_FOCAVEIS = [
    'a[href]',
    'button()',
    'input()',
    'select()',
    'textarea()',
    '[tabindex]([tabindex="-1"])',
].join(",");

export function DialogQualificacaoAcademica({
    formacoes,
    onClose,
}: DialogQualificacaoAcademicaProps) {
    const dialogRef = useRef<HTMLDivElement>(null);
    const elementoAnteriorRef = useRef<HTMLElement | null>(null);
    const fecharRef = useRef(onClose);
    const reduzirMovimento = useReducedMotion();
    const [visivel, setVisivel] = useState(true);

    const fecharDialog = useCallback(() => {
        setVisivel(false);
    }, []);

    useEffect(() => {
        fecharRef.current = onClose;
    }, [onClose]);

    useEffect(() => {
        const elementoAnterior =
            document.activeElement instanceof HTMLElement
                ? document.activeElement
                : null;

        elementoAnteriorRef.current = elementoAnterior;

        const overflowAnterior = document.body.style.overflow;
        const paddingDireitoAnterior = document.body.style.paddingRight;

        const larguraScroll =
            window.innerWidth - document.documentElement.clientWidth;

        if (larguraScroll > 0) {
            const paddingAtual =
                Number.parseFloat(
                    window.getComputedStyle(document.body).paddingRight,
                ) || 0;

            document.body.style.paddingRight =
                `${paddingAtual + larguraScroll}px`;
        }

        document.body.style.overflow = "hidden";
        dialogRef.current?.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                event.preventDefault();
                fecharDialog();
                return;
            }

            if (event.key !== "Tab") return;

            const dialog = dialogRef.current;

            if (!dialog) return;

            const elementosFocaveis = Array.from(
                dialog.querySelectorAll<HTMLElement>(
                    SELETORES_FOCAVEIS,
                ),
            ).filter(
                (elemento) =>
                    elemento.getClientRects().length > 0 &&
                    window.getComputedStyle(elemento).visibility !== "hidden",
            );

            const primeiro = elementosFocaveis[0];
            const ultimo =
                elementosFocaveis[elementosFocaveis.length - 1];

            if (!primeiro || !ultimo) {
                event.preventDefault();
                dialog.focus();
                return;
            }

            if (
                event.shiftKey &&
                (document.activeElement === primeiro ||
                    !dialog.contains(document.activeElement))
            ) {
                event.preventDefault();
                ultimo.focus();
                return;
            }

            if (
                !event.shiftKey &&
                (document.activeElement === ultimo ||
                    !dialog.contains(document.activeElement))
            ) {
                event.preventDefault();
                primeiro.focus();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = overflowAnterior;
            document.body.style.paddingRight = paddingDireitoAnterior;

            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [fecharDialog]);

    const transicao = reduzirMovimento
        ? { duration: 0 }
        : { duration: 0.2, ease: "easeOut" as const };

    if (typeof document === "undefined") return null;

    return createPortal(
        <AnimatePresence
            onExitComplete={() => {
                const elementoAnterior = elementoAnteriorRef.current;

                if (elementoAnterior?.isConnected) {
                    elementoAnterior.focus();
                }

                elementoAnteriorRef.current = null;
                fecharRef.current();
            }}
        >
            {visivel && (
                <motion.div
                    key="dialog-formacao-overlay"
                    className="fixed inset-0 z-[9999] flex items-start justify-center overflow-x-hidden overflow-y-auto overscroll-contain p-3 sm:items-center sm:p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={transicao}
                >
                    {/* Fundo escurecido */}
                    <button
                        type="button"
                        aria-label="Fechar formação acadêmica"
                        onClick={fecharDialog}
                        className="absolute inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-sm"
                    />

                    {/* Janela do diálogo */}
                    <motion.div
                        ref={dialogRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="dialog-formacao-title"
                        aria-describedby="dialog-formacao-description"
                        tabIndex={-1}
                        initial={
                            reduzirMovimento
                                ? { opacity: 0 }
                                : { opacity: 0, scale: 0.98, y: 12 }
                        }
                        animate={
                            reduzirMovimento
                                ? { opacity: 1 }
                                : { opacity: 1, scale: 1, y: 0 }
                        }
                        exit={
                            reduzirMovimento
                                ? { opacity: 0 }
                                : { opacity: 0, scale: 0.98, y: 12 }
                        }
                        transition={transicao}
                        className="relative z-10 my-auto flex max-h-[calc(100dvh-1.5rem)] min-h-0 w-full min-w-0 max-w-4xl shrink-0 flex-col overflow-hidden rounded-md border border-white/10 bg-slate-900 shadow-2xl shadow-black/30 outline-none sm:max-h-[85dvh]"
                    >
                        {/* Cabeçalho fixo */}
                        <header className="flex shrink-0 items-center justify-between gap-2 border-b border-white/5 bg-slate-800/50 p-3 sm:gap-4 sm:p-5">
                            <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-sky-400/15 bg-sky-400/5 text-sky-300 sm:h-10 sm:w-10">
                                    <GraduationCap
                                        size={20}
                                        aria-hidden="true"
                                    />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <h2
                                        id="dialog-formacao-title"
                                        className="break-words text-sm font-semibold leading-snug text-slate-200 sm:text-lg sm:leading-6"
                                    >
                                        Qualificações Acadêmicas
                                    </h2>

                                    <p
                                        id="dialog-formacao-description"
                                        className="mt-1 break-words font-mono text-[11px] leading-relaxed text-slate-400 sm:text-[13px]"
                                    >
                                        {formacoes.length}{" "}
                                        {formacoes.length === 1
                                            ? "formação registrada"
                                            : "formações registradas"}
                                    </p>
                                </div>
                            </div>

                            <ButtonFechar
                                onClick={fecharDialog}
                                className="shrink-0"
                            />
                        </header>

                        {/* Conteúdo com rolagem independente */}
                        <div className="min-h-0 min-w-0 flex-1 space-y-4 overflow-x-hidden overflow-y-auto overscroll-contain p-3 sm:p-6">
                            {formacoes.length > 0 ? (
                                formacoes.map((formacao, indice) => (
                                    <CardQualificacaoAcademica
                                        key={`${formacao.institution}-${formacao.degree}-${indice}`}
                                        formacao={formacao}
                                        indice={indice}
                                    />
                                ))
                            ) : (
                                <p className="break-words py-8 text-center font-mono text-sm leading-relaxed text-slate-400">
                                    Nenhuma formação acadêmica cadastrada.
                                </p>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body,
    );

}