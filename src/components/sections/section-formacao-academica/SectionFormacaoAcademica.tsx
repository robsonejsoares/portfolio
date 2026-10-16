"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { dadosCurriculo } from "@/data/dadosCurriculo";
import { ordenarFormacoes } from "@/utils/ordenarFormacoes";
import { LoadingDialog } from "@/components/common/LoadingDialog";

import { CardFormacaoAcademica } from "./components/CardFormacaoAcademica";
import { DialogFormacoAcademica } from "./dialogs/DialogFormacoAcademica";

const LIMITE_FORMACOES_MOBILE = 1;
const LIMITE_FORMACOES_DESKTOP = 2;

export function SectionFormacaoAcademica() {
    const [dialogAberto, setDialogAberto] = useState(false);
    const [carregando, setCarregando] = useState(false);

    const formacoes = ordenarFormacoes(dadosCurriculo.education);

    const formacoesMobile = formacoes.slice(
        0,
        LIMITE_FORMACOES_MOBILE,
    );

    const formacoesDesktop = formacoes.slice(
        0,
        LIMITE_FORMACOES_DESKTOP,
    );

    const existemMaisFormacoes =
        formacoes.length > LIMITE_FORMACOES_MOBILE;

    function handleAbrirDialog() {
        if (carregando || dialogAberto) return;

        setCarregando(true);
    }

    function handleFecharDialog() {
        setDialogAberto(false);
    }

    function handleCarregamentoFinalizado() {
        setCarregando(false);
        setDialogAberto(true);
    }

    return (
        <>
            {/* Loading compartilhado */}
            <LoadingDialog
                isLoading={carregando}
                onFinished={handleCarregamentoFinalizado}
                text="Acessando formações acadêmicas..."
            />

            <section
                id="education"
                aria-labelledby="education-title"
                className="relative z-10 w-full min-w-0 py-6 sm:py-8"
            >
                <div className="w-full min-w-0 space-y-8 sm:space-y-10">
                    {/* Cabeçalho com botão no padrão do projeto */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex w-full min-w-0 items-start justify-between gap-3 text-left"
                    >
                        <div className="min-w-0 flex-1">
                            <h2
                                id="education-title"
                                className="mb-3 font-display text-2xl font-bold text-cyan-300/70"
                            >
                                Formação Acadêmica
                            </h2>

                            <p className="break-words text-left font-mono text-xs leading-relaxed tracking-widest text-slate-400">
                                Minha formação em tecnologia e especializações
                                voltadas ao desenvolvimento de software.
                            </p>
                        </div>

                        {existemMaisFormacoes && (
                            <button
                                type="button"
                                onClick={handleAbrirDialog}
                                disabled={carregando || dialogAberto}
                                aria-haspopup="dialog"
                                aria-expanded={dialogAberto}
                                className="group relative inline-flex max-w-[48%] shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-md bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-3 py-2 text-xs font-semibold text-black shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] active:scale-95 disabled:cursor-wait disabled:opacity-70 sm:max-w-none sm:gap-3 sm:px-6 sm:py-2.5 sm:text-sm"
                            >
                                {/* Efeito de brilho */}
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
                                />

                                <span className="relative z-10 inline-flex min-w-0 items-center justify-center gap-2 sm:gap-3">
                                    <span className="sm:hidden">
                                        Ver todas
                                    </span>

                                    <span className="hidden sm:inline">
                                        Ver todas
                                    </span>

                                    <span className="shrink-0 rounded-full bg-black/10 px-2 py-0.5 text-xs font-bold">
                                        {formacoes.length}
                                    </span>

                                    <ArrowRight
                                        size={17}
                                        aria-hidden="true"
                                        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </span>
                            </button>
                        )}
                    </motion.header>

                    {/* Mobile: exibe somente uma formação */}
                    <div className="flex w-full min-w-0 flex-col gap-4 sm:hidden">
                        {formacoesMobile.map((formacao, indice) => (
                            <CardFormacaoAcademica
                                key={`${formacao.institution}-${formacao.degree}`}
                                formacao={formacao}
                                indice={indice}
                            />
                        ))}
                    </div>

                    {/* Desktop: exibe até duas formações */}
                    <div className="hidden w-full min-w-0 flex-col gap-4 sm:flex">
                        {formacoesDesktop.map((formacao, indice) => (
                            <CardFormacaoAcademica
                                key={`${formacao.institution}-${formacao.degree}`}
                                formacao={formacao}
                                indice={indice}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Diálogo com todas as formações */}
            {dialogAberto && (
                <DialogFormacoAcademica
                    formacoes={formacoes}
                    onClose={handleFecharDialog}
                />
            )}
        </>
    );
}
