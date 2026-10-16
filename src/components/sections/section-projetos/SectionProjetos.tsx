"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    LayoutGrid,
    Monitor,
    Smartphone,
    Workflow,
    Server,
    Palette,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import { dadosPortfolio } from "@/data/dadosPortfolio";
import type { Project } from "@/data/dadosPortfolio";
import { CardProjetos } from "./components/CardProjetos";
import { DialogProjetos } from "./dialogs/DialogProjetos";

const categories = [
    {
        id: "all",
        label: "Todos",
        icon: LayoutGrid,
        iconColor: "text-emerald-400",
    },
    {
        id: "Sistemas Web",
        label: "Sistemas Web",
        icon: Monitor,
        iconColor: "text-blue-400",
    },
    {
        id: "Mobile",
        label: "Mobile",
        icon: Smartphone,
        iconColor: "text-violet-400",
    },
    {
        id: "Automação",
        label: "Automação",
        icon: Workflow,
        iconColor: "text-amber-400",
    },
    {
        id: "DevOps",
        label: "DevOps",
        icon: Server,
        iconColor: "text-cyan-400",
    },
    {
        id: "UI/UX Designer",
        label: "UI/UX Designer",
        icon: Palette,
        iconColor: "text-pink-400",
    },
];

export function SectionProjetos() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedProject, setSelectedProject] =
        useState<Project | null>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(1);

    // Define a quantidade de cards conforme a largura da tela.
    useEffect(() => {
        const tabletQuery = window.matchMedia("(min-width: 640px)");
        const desktopQuery = window.matchMedia("(min-width: 1280px)");

        function updatePageSize() {
            if (desktopQuery.matches) {
                setPageSize(3);
            } else if (tabletQuery.matches) {
                setPageSize(2);
            } else {
                setPageSize(1);
            }
        }

        updatePageSize();

        tabletQuery.addEventListener("change", updatePageSize);
        desktopQuery.addEventListener("change", updatePageSize);

        return () => {
            tabletQuery.removeEventListener("change", updatePageSize);
            desktopQuery.removeEventListener("change", updatePageSize);
        };
    }, []);

    const selectedCategoryData =
        categories.find((category) => category.id === selectedCategory) ??
        categories[0];

    const selectedCategoryLabel = selectedCategoryData.label;
    const SelectedIcon = selectedCategoryData.icon;
    const selectedIconColor = selectedCategoryData.iconColor;

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

    // Calcula a quantidade de páginas da categoria atual.
    const totalPages = Math.ceil(filteredProjects.length / pageSize);

    // Mantém a página dentro dos limites após filtros ou redimensionamento.
    const safeCurrentPage = Math.min(
        currentPage,
        Math.max(0, totalPages - 1),
    );

    // Calcula os índices dos projetos da página atual.
    const startIndex = safeCurrentPage * pageSize;
    const endIndex = Math.min(
        startIndex + pageSize,
        filteredProjects.length,
    );

    // Exibe somente os projetos da página atual.
    const visibleProjects = filteredProjects.slice(startIndex, endIndex);

    // Número exibido no contador. Quando não há projetos, mostra 00/00.
    const displayedPage = totalPages === 0 ? 0 : safeCurrentPage + 1;

    const handleCategoryChange = useCallback((categoryId: string) => {
        setSelectedCategory(categoryId);
        setCurrentPage(0);
    }, []);

    const handlePreviousPage = useCallback(() => {
        setCurrentPage((page) => Math.max(0, page - 1));
    }, []);

    const handleNextPage = useCallback(() => {
        setCurrentPage((page) =>
            Math.min(Math.max(0, totalPages - 1), page + 1),
        );
    }, [totalPages]);

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
                <header className="mb-6 w-full text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <h2 className="mb-2 font-display text-2xl font-bold text-cyan-300/70">
                            Projetos
                        </h2>

                        <p className="font-mono text-xs tracking-wide text-slate-400">
                            Alguns dos projetos que desenvolvi e suas soluções.
                        </p>
                    </motion.div>
                </header>

                {/* Abas de categorias */}
                <div className="relative mb-6 flex w-full flex-wrap items-center justify-start gap-1.5 rounded-lg border border-white/10 bg-[#0b1020]/70 p-1 lg:flex-nowrap">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        const isActive = selectedCategory === category.id;

                        return (
                            <motion.button
                                key={category.id}
                                type="button"
                                onClick={() =>
                                    handleCategoryChange(category.id)
                                }
                                whileTap={{ scale: 0.97 }}
                                aria-pressed={isActive}
                                className={`relative flex shrink-0 cursor-pointer select-none items-center justify-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1.5 font-sans text-xs font-medium transition-colors duration-200 ${
                                    isActive
                                        ? "font-semibold text-slate-300"
                                        : "text-slate-500 hover:text-slate-300"
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-project-tab"
                                        transition={{
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 30,
                                        }}
                                        className="absolute inset-0 rounded-md border border-white/10 bg-slate-800/80"
                                    />
                                )}

                                <span className="relative z-10 flex items-center gap-1.5">
                                    <Icon
                                        className={`h-3.5 w-3.5 shrink-0 transition-colors duration-200 ${
                                            isActive
                                                ? category.iconColor
                                                : "text-slate-500"
                                        }`}
                                        aria-hidden="true"
                                    />

                                    <span>{category.label}</span>
                                </span>
                            </motion.button>
                        );
                    })}
                </div>

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
                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80">
                                    <SelectedIcon
                                        className={`h-6 w-6 ${selectedIconColor}`}
                                        strokeWidth={1.8}
                                        aria-hidden="true"
                                    />
                                </div>

                                <p className="max-w-sm text-sm leading-relaxed text-slate-500">
                                    Ainda não há projetos cadastrados em{" "}
                                    <span className="font-medium text-slate-400">
                                        {selectedCategoryLabel}
                                    </span>
                                    . Volte em breve para conferir as novidades!
                                </p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Paginação minimalista: seta, indicador e seta */}
                <nav
                    aria-label="Paginação dos projetos"
                    className="mt-5 flex w-full justify-end"
                >
                    <div className="flex items-center gap-1">
                        <button
                            type="button"
                            onClick={handlePreviousPage}
                            disabled={totalPages === 0 || safeCurrentPage === 0}
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
                            onClick={handleNextPage}
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