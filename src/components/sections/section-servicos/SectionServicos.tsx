"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { LoadingDialog } from "@/components/common/LoadingDialog";
import { dadosServicos } from "@/data/dadosServicos";

import { CardServico } from "./components/CardServico";
import { DialogServicos } from "./dialogs/DialogServicos";

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
                    <motion.header
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="mb-3 flex w-full min-w-0 items-start justify-between gap-3 text-left"
                    >
                        <div className="min-w-0 flex-1">
                            <h2
                                id="services-title"
                                className="font-display text-xl font-bold text-[#8FA8C8] sm:text-2xl"
                            >
                                Serviços
                            </h2>
                        </div>

                        {/* Botão padronizado pelo componente compartilhado */}
                        <Button
                            type="button"
                            variant="default"
                            size="default"
                            onClick={abrirDialog}
                            disabled={isLoading || dialogAberto}
                            aria-haspopup="dialog"
                            aria-expanded={dialogAberto}
                            className="max-w-[55%] shrink-0 cursor-pointer disabled:cursor-wait sm:max-w-none"
                        >
                            <span className="inline-flex min-w-0 items-center justify-center gap-2">
                                <span className="min-w-0 text-center whitespace-nowrap">
                                    <span className="sm:hidden">
                                        Ver todos
                                    </span>

                                    <span className="hidden sm:inline">
                                        Ver todos serviços
                                    </span>
                                </span>

                                <span className="shrink-0 rounded-full bg-black/10 px-2 py-0.5 text-xs font-bold">
                                    {dadosServicos.length}
                                </span>

                                <ArrowRight
                                    aria-hidden="true"
                                    className="shrink-0 transition-transform duration-200 group-hover/button:translate-x-1"
                                />
                            </span>
                        </Button>
                    </motion.header>

                    {/* Serviços apresentados na seção */}
                    <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {dadosServicos.slice(0, 5).map((servico, indice) => (
                            <div
                                key={servico.titulo}
                                className={
                                    indice >= 2
                                        ? "hidden min-w-0 sm:block"
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

            {/* Diálogo com todos os serviços */}
            <DialogServicos
                isOpen={dialogAberto}
                onClose={fecharDialog}
            />
        </>
    );
}