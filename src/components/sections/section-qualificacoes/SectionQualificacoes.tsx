
"use client";

import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
    dadosQualificacoes,
    type CategoriaQualificacao,
    type Qualificacao,
} from "@/data/dadosQualificacoes";

import { CategoriasQualificacoes } from "./components/CategoriasQualificacoes";
import { CardQualificacoes } from "./components/CardQualificacoes";
import { DialogQualificacoes } from "./dialogs/DialogQualificacoes";
import { usePaginationQualificacoes } from "./hooks/usePaginationQualificacoes";

type CategoriaFiltro = "all" | CategoriaQualificacao;

export function SectionQualificacoes() {
    const [selectedCategory, setSelectedCategory] =
        useState<CategoriaFiltro>("all");

    const [selectedQualificacao, setSelectedQualificacao] =
        useState<Qualificacao | null>(null);

    const qualificacoes = dadosQualificacoes;

    const filteredQualificacoes = useMemo(() => {
        if (selectedCategory === "all") {
            return qualificacoes;
        }

        return qualificacoes.filter(
            (qualificacao) =>
                qualificacao.category === selectedCategory,
        );
    }, [qualificacoes, selectedCategory]);

    const {
        visibleItems: qualificacoesVisiveis,
        startIndex,
        currentPage: safeCurrentPage,
        pageSize,
        totalPages,
        displayedPage,
        goToPreviousPage,
        goToNextPage,
        resetPage,
    } = usePaginationQualificacoes({
        items: filteredQualificacoes,
    });

    const handleCategoryChange = useCallback(
        (category: CategoriaFiltro) => {
            setSelectedCategory(category);
            resetPage();
        },
        [resetPage],
    );

    const closeDialog = useCallback(() => {
        setSelectedQualificacao(null);
    }, []);

    return (
        <section
            id="qualifications"
            aria-labelledby="qualifications-title"
            className="relative z-10 w-full min-w-0 py-5 sm:py-6"
        >
            <div className="w-full min-w-0">
                {/* Cabeçalho */}
                <header className="mb-3 w-full text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <h2
                            id="qualifications-title"
                            className="font-display text-xl font-bold text-[#8FA8C8] sm:text-2xl"
                        >
                            Qualificações
                        </h2>
                    </motion.div>
                </header>

                {/* Filtros */}
                <CategoriasQualificacoes
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                />

                {/* Cards */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${selectedCategory}-${safeCurrentPage}-${pageSize}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{
                            duration: 0.25,
                            ease: "easeOut",
                        }}
                    >
                        {filteredQualificacoes.length > 0 ? (
                            <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                                {qualificacoesVisiveis.map(
                                    (qualificacao, index) => (
                                        <CardQualificacoes
                                            key={qualificacao.id}
                                            qualificacao={qualificacao}
                                            index={startIndex + index}
                                            onView={setSelectedQualificacao}
                                        />
                                    ),
                                )}
                            </div>
                        ) : (
                            <div className="flex min-h-[220px] w-full flex-col items-center justify-center px-4 py-12 text-center">
                                <p className="max-w-sm text-sm leading-relaxed text-slate-500">
                                    Ainda não há qualificações cadastradas
                                    nesta categoria.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Paginação */}
                <nav
                    aria-label="Paginação das qualificações"
                    className="mt-5 flex w-full justify-end"
                >
                    <div className="flex items-center gap-1">
                        <button
                            type="button"
                            onClick={goToPreviousPage}
                            disabled={
                                totalPages === 0 || safeCurrentPage === 0
                            }
                            aria-label="Página anterior"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200 disabled:cursor-not-allowed disabled:opacity-30"
                        >
                            <ChevronLeft size={15} />
                        </button>

                        <span
                            aria-label={`Página ${displayedPage} de ${totalPages}`}
                            aria-live="polite"
                            className="min-w-[76px] text-center font-mono text-xs text-slate-400"
                        >
                            {String(displayedPage).padStart(2, "0")} /{" "}
                            {String(totalPages).padStart(2, "0")}
                        </span>

                        <button
                            type="button"
                            onClick={goToNextPage}
                            disabled={
                                totalPages === 0 ||
                                safeCurrentPage >= totalPages - 1
                            }
                            aria-label="Próxima página"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200 disabled:cursor-not-allowed disabled:opacity-30"
                        >
                            <ChevronRight size={15} />
                        </button>
                    </div>
                </nav>
            </div>

            {/* Diálogo de detalhes */}
            <DialogQualificacoes
                qualificacao={selectedQualificacao}
                isOpen={selectedQualificacao !== null}
                onClose={closeDialog}
            />
        </section>
    );
}
