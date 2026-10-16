"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

import { ButtonAbrirDialog } from "@/components/ui/ButtonAbrirDialog";
import { LoadingDialog } from "@/components/common/LoadingDialog";
import { dadosCurriculo } from "@/data/dadosCurriculo";
import { ordenarFormacoes } from "@/utils/ordenarFormacoes";

import { CardFormacaoAcademica } from "./components/CardFormacaoAcademica";
import { DialogFormacaoAcademica } from "./dialogs/DialogFormacaoAcademica";

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
                    {/* Cabeçalho padronizado */}
                    <motion.header
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="mb-3 flex w-full min-w-0 items-start justify-between gap-3 text-left"
                    >
                        <div className="min-w-0 flex-1">
                            <h2
                                id="education-title"
                                className="font-display text-xl font-bold text-[#8FA8C8] sm:text-2xl"
                            >
                                Formação Acadêmica
                            </h2>
                        </div>

                        {existemMaisFormacoes && (
                            <ButtonAbrirDialog
                                type="button"
                                variant="default"
                                size="default"
                                onClick={handleAbrirDialog}
                                disabled={carregando || dialogAberto}
                                aria-haspopup="dialog"
                                aria-expanded={dialogAberto}
                                className="max-w-[48%] shrink-0 cursor-pointer disabled:cursor-wait sm:max-w-none"
                            >
                                <span className="inline-flex min-w-0 items-center justify-center gap-2">
                                    <span className="whitespace-nowrap">
                                        <span className="sm:hidden">
                                            Ver formações
                                        </span>

                                        <span className="hidden sm:inline">
                                            Ver formações
                                        </span>
                                    </span>

                                    <GraduationCap
                                        size={16}
                                        aria-hidden="true"
                                        className="shrink-0 transition-transform duration-200 group-hover/button:scale-110 motion-reduce:transition-none"
                                    />
                                </span>
                            </ButtonAbrirDialog>
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
                <DialogFormacaoAcademica
                    formacoes={formacoes}
                    onClose={handleFecharDialog}
                />
            )}
        </>
    );
}