"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Cpu } from "lucide-react";

interface LoadingDialogCurriculoProps {
    isLoading: boolean;
    text?: string;
}

export function LoadingDialogCurriculo({ isLoading, text = "ACESSANDO CURRÍCULO..." }: LoadingDialogCurriculoProps) {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
                >
                    <div className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-cyan-500/40 bg-[#070a12] shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                        {/* Spinner Cibernético */}
                        <div className="relative w-12 h-12 flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                            />
                            <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
                        </div>

                        {/* Texto do Sistema */}
                        <div className="text-center">
                            <p className="text-xs font-mono tracking-widest text-cyan-300 uppercase animate-pulse">
                                {text}
                            </p>
                            <div className="w-32 h-1 bg-slate-800 rounded-full mt-2 overflow-hidden mx-auto">
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
