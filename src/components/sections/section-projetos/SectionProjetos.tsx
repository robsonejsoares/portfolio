"use client";

import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import { dadosPortfolio } from "@/data/dadosPortfolio";
import type { Project } from "@/data/dadosPortfolio";

import { CategoriasProjetos } from "./components/CategoriasProjetos";
import { CardProjetos } from "./components/CardProjetos";
import { DialogProjetos } from "./dialogs/DialogProjetos";
import { usePaginationProjetos } from "./hooks/usePaginationProjetos";

export function SectionProjetos() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const [selectedProject, setSelectedProject] =
        useState<Project | null>(null);

    const projects = dadosPortfolio.projects;

    // Filtra os projetos conforme a categoria selecionada.
    const filteredProjects = useMemo(() => {
        if (selectedCategory === "all") {
            return projects;
        }

        return projects.filter(
            (project) => project.category === selectedCategory,
        );
    }, [projects, selectedCategory]);

    // Gerencia a paginação por meio de um hook personalizado.
    const {
        visibleItems: visibleProjects,
        startIndex,
        currentPage: safeCurrentPage,
        pageSize,
        totalPages,
        displayedPage,
        goToPreviousPage,
        goToNextPage,
        resetPage,
    } = usePaginationProjetos({
        items: filteredProjects,
    });

    // Atualiza a categoria e retorna à primeira página.
    const handleCategoryChange = useCallback(
        (categoryId: string) => {
            setSelectedCategory(categoryId);
            resetPage();
        },
        [resetPage],
    );

    // Fecha o diálogo de detalhes.
    const closeDialog = useCallback(() => {
        setSelectedProject(null);
    }, []);

    return (
        <section
            id="projects"
            className="relative z-10 w-full min-w-0 py-5 sm:py-6"
        >
            <div className="w-full min-w-0">
                {/* Cabeçalho da seção */}
                <header className="mb-3 w-full text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <h2 className="font-display text-xl font-bold text-[#8FA8C8] sm:text-2xl">
                            Projetos
                        </h2>
                    </motion.div>
                </header>

                {/* Categorias dos projetos */}
                <CategoriasProjetos
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                />

                {/* Cards dos projetos */}
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
                        {filteredProjects.length > 0 ? (
                            <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                                {visibleProjects.map((projeto, index) => (
                                    <CardProjetos
                                        key={projeto.id}
                                        projeto={projeto}
                                        index={startIndex + index}
                                        onView={setSelectedProject}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="flex min-h-[280px] w-full flex-col items-center justify-center px-4 py-12 text-center">
                                <p className="max-w-sm text-sm leading-relaxed text-slate-500">
                                    Ainda não há projetos cadastrados nesta
                                    categoria. Volte em breve para conferir as
                                    novidades!
                                </p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Paginação minimalista */}
                <nav
                    aria-label="Paginação dos projetos"
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
                            className="inline-flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-md border border-white/[0.08] text-slate-400 transition-colors duration-200 hover:bg-white/[0.05] hover:text-slate-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-slate-400"
                        >
                            <ChevronLeft
                                size={15}
                                aria-hidden="true"
                            />
                        </button>

                        <span
                            aria-label={`Página ${displayedPage} de ${totalPages}`}
                            aria-live="polite"
                            className="min-w-[48px] text-center font-mono text-xs tabular-nums text-slate-400"
                        >
                            {String(displayedPage).padStart(2, "0")}
                            <span className="mx-1 text-slate-600">/</span>
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
                            className="inline-flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-md border border-white/[0.08] text-slate-400 transition-colors duration-200 hover:bg-white/[0.05] hover:text-slate-200 active:scale-95 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-slate-400 disabled:opacity-30"
                        >
                            <ChevronRight
                                size={15}
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                </nav>
            </div>

            {/* Diálogo de detalhes */}
            <DialogProjetos
                projeto={selectedProject}
                isOpen={selectedProject !== null}
                onClose={closeDialog}
            />
        </section>
    );
}