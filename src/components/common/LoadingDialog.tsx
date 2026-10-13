"use client";

import { useEffect, useRef } from "react";
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

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex items-center justify-center overflow-hidden rounded-xl bg-black/70 backdrop-blur-sm"
                >
                    <div className="flex flex-col items-center gap-4 rounded-xl border border-cyan-500/40 bg-[#070a12] p-6 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                        <div className="relative flex h-12 w-12 items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-0 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                            />

                            <Cpu className="h-5 w-5 animate-pulse text-cyan-400" />
                        </div>

                        <div className="text-center">
                            <p className="animate-pulse font-mono text-xs uppercase tracking-widest text-cyan-300">
                                {text}
                            </p>

                            <div className="mx-auto mt-2 h-1 w-32 overflow-hidden rounded-full bg-slate-800">
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="h-full w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}