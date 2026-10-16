"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { LOADING_DURATION } from "@/config/loading";

interface LoadingDialogProps {
    isLoading: boolean;
    onFinished: () => void;
    text?: string;
}

export function LoadingDialog({
    isLoading,
    onFinished,
    text = "CARREGANDO...",
}: LoadingDialogProps) {
    const onFinishedRef = useRef(onFinished);

    useEffect(() => {
        onFinishedRef.current = onFinished;
    }, [onFinished]);

    useEffect(() => {
        if (!isLoading) return;

        const temporizador = window.setTimeout(() => {
            onFinishedRef.current();
        }, LOADING_DURATION);

        return () => {
            window.clearTimeout(temporizador);
        };
    }, [isLoading]);

    // Bloqueia a rolagem durante o carregamento.
    useEffect(() => {
        if (!isLoading) return;

        const overflowAnterior = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = overflowAnterior;
        };
    }, [isLoading]);

    if (typeof document === "undefined") return null;

    return createPortal(
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    role="status"
                    aria-live="polite"
                    aria-label={text}
                    className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-black/70 backdrop-blur-sm"
                >
                    <div className="flex flex-col items-center gap-4 rounded-lg border border-white/5 bg-slate-900 p-6 shadow-2xl shadow-black/30">
                        {/* Ícone */}
                        <div className="relative flex h-12 w-12 items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-0 rounded-full border-2 border-slate-500/20 border-t-sky-400/80"
                            />

                            <Cpu
                                aria-hidden="true"
                                className="h-5 w-5 text-sky-300"
                            />
                        </div>

                        {/* Mensagem e barra de progresso */}
                        <div className="text-center">
                            <p className="font-mono text-xs uppercase tracking-widest text-slate-300">
                                {text}
                            </p>

                            <div className="mx-auto mt-3 h-1 w-32 overflow-hidden rounded-full bg-slate-800">
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="h-full w-full rounded-full bg-gradient-to-r from-slate-500 via-sky-400/80 to-slate-500"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body,
    );
}