"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { dadosServicos } from "@/data/dadosServicos";
import { CardServico } from "./components/CardServico";
import { DialogServicos } from "./dialogs/DialogServicos";
import { LoadingDialog } from "@/components/common/LoadingDialog";

export function SectionServicos() {
    const [dialogAberto, setDialogAberto] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const abrirDialog = useCallback(() => {
        if (isLoading || dialogAberto) return;

        setIsLoading(true);
    }, [isLoading, dialogAberto]);

    const finalizarLoadingServicos = useCallback(() => {
        setIsLoading(false);
        setDialogAberto(true);
    }, []);

    const fecharDialog = useCallback(() => {
        setDialogAberto(false);
    }, []);

    return (
        <>
            <LoadingDialog
                isLoading={isLoading}
                text="Acessando serviços..."
                onFinished={finalizarLoadingServicos}
            />

            <section
                id="services"
                aria-labelledby="services-title"
                className="relative z-10 w-full min-w-0 py-6 sm:py-8"
            >
                <div className="w-full min-w-0">
                    {/* Cabeçalho responsivo */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 flex w-full min-w-0 items-start justify-between gap-3 text-left"
                    >
                        <div className="min-w-0 flex-1">
                            <h2
                                id="services-title"
                                className="mb-3 font-display text-2xl font-bold text-cyan-300/70"
                            >
                                Serviços
                            </h2>

                            <p className="max-w-full break-words text-left font-mono text-xs tracking-widest text-slate-400">
                                Desenvolvimento de sites e sistemas sob medida.
                            </p>
                        </div>

                        {/* Botão alinhado à direita */}
                        <button
                            type="button"
                            onClick={abrirDialog}
                            disabled={isLoading || dialogAberto}
                            aria-haspopup="dialog"
                            aria-expanded={dialogAberto}
                            className="group relative inline-flex max-w-[55%] shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-md bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-3 py-2 text-xs font-semibold text-black shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] active:scale-95 disabled:cursor-wait disabled:opacity-70 sm:max-w-none sm:gap-3 sm:px-6 sm:py-3 sm:text-sm"
                        >
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
                            />

                            <span className="relative z-10 inline-flex min-w-0 items-center justify-center gap-2 sm:gap-3">
                                <span className="min-w-0 text-center">
                                    <span className="sm:hidden">
                                        Ver todos
                                    </span>

                                    <span className="hidden sm:inline">
                                        Ver todos
                                    </span>
                                </span>

                                <span className="shrink-0 rounded-full bg-black/10 px-2 py-0.5 text-xs font-bold">
                                    {dadosServicos.length}
                                </span>

                                <ArrowRight
                                    size={17}
                                    aria-hidden="true"
                                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </span>
                        </button>
                    </motion.header>

                    {/* 2 serviços no mobile e até 5 a partir de 640 px */}
                    <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {dadosServicos.slice(0, 5).map((servico, indice) => (
                            <div
                                key={servico.titulo}
                                className={
                                    indice >= 2
                                        ? "hidden sm:block min-w-0"
                                        : "min-w-0"
                                }
                            >
                                <CardServico
                                    servico={servico}
                                    indice={indice}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* O diálogo continua exibindo todos os serviços */}
            <DialogServicos
                isOpen={dialogAberto}
                onClose={fecharDialog}
            />
        </>
    );
}