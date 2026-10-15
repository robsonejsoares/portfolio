"use client";

import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    LayoutGrid,
    Monitor,
    Smartphone,
    Workflow,
    Server,
    Palette,
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
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null,
    );

    const selectedCategoryData =
        categories.find((category) => category.id === selectedCategory) ??
        categories[0];

    const selectedCategoryLabel = selectedCategoryData.label;
    const SelectedIcon = selectedCategoryData.icon;
    const selectedIconColor = selectedCategoryData.iconColor;

    const projects = dadosPortfolio.projects;

    const filteredProjects = useMemo(() => {
        if (selectedCategory === "all") {
            return projects;
        }

        return projects.filter(
            (project) => project.category === selectedCategory,
        );
    }, [projects, selectedCategory]);

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
                        const isActive =
                            selectedCategory === category.id;

                        return (
                            <motion.button
                                key={category.id}
                                type="button"
                                onClick={() =>
                                    setSelectedCategory(category.id)
                                }
                                whileTap={{ scale: 0.97 }}
                                aria-pressed={isActive}
                                className={`relative flex shrink-0 cursor-pointer select-none items-center justify-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1.5 font-sans text-xs font-medium transition-colors duration-200 ${isActive
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
                                        className={`h-3.5 w-3.5 shrink-0 transition-colors duration-200 ${isActive
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
                        key={selectedCategory}
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
                                {filteredProjects.map((projeto, index) => (
                                    <CardProjetos
                                        key={projeto.id}
                                        projeto={projeto}
                                        index={index}
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