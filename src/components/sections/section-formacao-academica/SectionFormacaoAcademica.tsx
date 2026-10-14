"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { dadosCurriculo } from "@/data/dadosCurriculo";
import { ordenarFormacoes } from "@/utils/ordenarFormacoes";
import { LoadingDialog } from "@/components/common/LoadingDialog";

import { CardFormacao } from "./components/CardFormacao";
import { DialogFormacoAcademica } from "./dialogs/DialogFormacoAcademica";

const LIMITE_FORMACOES = 2;

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
    }

    function handleCarregamentoFinalizado() {
        setCarregando(false);
        setDialogAberto(true);
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

            {/* Loading compartilhado: cobre a tela inteira */}
            <LoadingDialog
                isLoading={carregando}
                onFinished={handleCarregamentoFinalizado}
                text="ACESSANDO FORMAÇÕES..."
            />

            {dialogAberto && (
                <DialogFormacoAcademica
                    formacoes={formacoes}
                    onClose={handleFecharDialog}
                />
            )}
        </section>
    );
}