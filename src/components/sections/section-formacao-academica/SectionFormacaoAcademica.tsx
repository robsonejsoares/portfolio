
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";

import { dadosCurriculo } from "@/data/dadosCurriculo";
import { ordenarFormacoes } from "@/utils/ordenarFormacoes";

import { CardFormacao } from "./components/CardFormacao";
import { DialogFormacoAcademica } from "./dialogs/DialogFormacoAcademica";

const LIMITE_FORMACOES = 2;

// Tempo de exibição da animação antes de abrir o diálogo.
const DURACAO_CARREGAMENTO = 1500;

export function SectionFormacaoAcademica() {
    const [dialogAberto, setDialogAberto] = useState(false);
    const [carregando, setCarregando] = useState(false);

    const formacoes = ordenarFormacoes(dadosCurriculo.education);
    const formacoesVisiveis = formacoes.slice(0, LIMITE_FORMACOES);

    const existemMaisFormacoes =
        formacoes.length > LIMITE_FORMACOES;

    function handleAbrirDialog() {
        if (carregando || dialogAberto) return;

        setCarregando(true);

        window.setTimeout(() => {
            setCarregando(false);
            setDialogAberto(true);
        }, DURACAO_CARREGAMENTO);
    }

    function handleFecharDialog() {
        setDialogAberto(false);
    }

    return (
        <section
            id="education"
            aria-labelledby="education-title"
            className="relative z-10 w-full min-w-0 py-6 sm:py-8"
        >
            <header className="mb-8 w-full text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2
                        id="education-title"
                        className="mb-3 font-display text-2xl font-bold text-cyan-300/70"
                    >
                        Formação Acadêmica
                    </h2>

                    <p className="text-left font-mono text-xs tracking-widest text-slate-400">
                        Minha formação em tecnologia e especializações
                        voltadas ao desenvolvimento de software.
                    </p>
                </motion.div>
            </header>

            <div className="flex w-full min-w-0 flex-col gap-4">
                {formacoesVisiveis.map((formacao, indice) => (
                    <CardFormacao
                        key={`${formacao.institution}-${formacao.degree}`}
                        formacao={formacao}
                        indice={indice}
                        ultima={indice === formacoesVisiveis.length - 1}
                    />
                ))}
            </div>

            {existemMaisFormacoes && (
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mt-10 flex justify-center"
                >
                    <button
                        type="button"
                        onClick={handleAbrirDialog}
                        disabled={carregando}
                        aria-haspopup="dialog"
                        aria-expanded={dialogAberto}
                        className="group relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-md bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-[0_0_35px_rgba(6,182,212,0.9)] active:scale-95 disabled:cursor-wait disabled:opacity-70"
                    >
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
                        />

                        <span className="relative z-10 flex items-center gap-2">
                            <span>Ver todas as formações</span>

                            <span className="rounded-full bg-black/10 px-2 py-0.5 text-xs font-bold">
                                {formacoes.length}
                            </span>

                            <ArrowRight
                                size={17}
                                aria-hidden="true"
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </span>
                    </button>
                </motion.div>
            )}

            {/* Carregamento restrito à seção Formação Acadêmica */}
            {carregando && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex items-center justify-center rounded-xl bg-[#070a12]/55 p-4 backdrop-blur-sm"
                    role="status"
                    aria-live="polite"
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
                                Acessando formações...
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

            {dialogAberto && (
                <DialogFormacoAcademica
                    formacoes={formacoes}
                    onClose={handleFecharDialog}
                />
            )}
        </section>
    );
}
