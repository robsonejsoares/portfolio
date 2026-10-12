"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutGrid,
    Monitor,
    Smartphone,
    Workflow,
    Server,
    Palette,
    ArrowUpRight,
} from "lucide-react";

import { dadosPortfolio, Project } from "@/data/dadosPortfolio";
import { Button } from "@/components/ui/Button";

const categories = [
    {
        id: "all",
        label: "Todos",
        icon: LayoutGrid,
        iconColor: "text-emerald-400",
        activeBorder: "border-emerald-500/80",
        activeBg: "bg-emerald-500/15",
        glowShadow: "shadow-[0_0_25px_rgba(16,185,129,0.4)]",
    },
    {
        id: "Sistemas Web",
        label: "Sistemas Web",
        icon: Monitor,
        iconColor: "text-blue-400",
        activeBorder: "border-blue-500/80",
        activeBg: "bg-blue-500/15",
        glowShadow: "shadow-[0_0_25px_rgba(59,130,246,0.4)]",
    },
    {
        id: "mobile",
        label: "Mobile",
        icon: Smartphone,
        iconColor: "text-violet-400",
        activeBorder: "border-violet-500/80",
        activeBg: "bg-violet-500/15",
        glowShadow: "shadow-[0_0_25px_rgba(139,92,246,0.4)]",
    },
    {
        id: "automacao",
        label: "Automação",
        icon: Workflow,
        iconColor: "text-amber-400",
        activeBorder: "border-amber-500/80",
        activeBg: "bg-amber-500/15",
        glowShadow: "shadow-[0_0_25px_rgba(245,158,11,0.4)]",
    },
    {
        id: "devops",
        label: "DevOps",
        icon: Server,
        iconColor: "text-cyan-400",
        activeBorder: "border-cyan-500/80",
        activeBg: "bg-cyan-500/15",
        glowShadow: "shadow-[0_0_25px_rgba(6,182,212,0.4)]",
    },
    {
        id: "ui-ux",
        label: "UI/UX Designer",
        icon: Palette,
        iconColor: "text-pink-400",
        activeBorder: "border-pink-500/80",
        activeBg: "bg-pink-500/15",
        glowShadow: "shadow-[0_0_25px_rgba(236,72,153,0.4)]",
    },
];

export function SectionProjetos() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredProjects =
        selectedCategory === "all"
            ? dadosPortfolio.projects
            : dadosPortfolio.projects.filter(
                  (project) =>
                      project.category.toLowerCase() ===
                      selectedCategory.toLowerCase(),
              );

    // Projeto temporário para testar o layout.
    // Aparece somente na categoria "Todos".
    const projectsToDisplay: Project[] =
        selectedCategory === "all"
            ? [
                  ...filteredProjects,
                  {
                      id: "projeto-teste",
                      title: "Projeto de Teste",
                      category: "Sistemas Web",
                      shortDescription:
                          "Projeto fictício para testar o alinhamento, o espaçamento e o visual dos cards.",
                      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
                  } as Project,
              ]
            : filteredProjects;

    const selectedCategoryLabel =
        categories.find(
            (category) => category.id === selectedCategory,
        )?.label ?? "esta categoria";

    return (
        <section
            id="projects"
            className="relative z-10 w-full min-w-0 py-6 sm:py-8"
        >
            <div className="w-full min-w-0">
                <header className="mb-8 w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="mb-3 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text font-display text-4xl font-black text-transparent">
                            Projetos
                        </h2>

                        <p className="font-mono text-xs tracking-widest text-slate-400">
                            Alguns dos projetos que desenvolvi e suas
                            soluções.
                        </p>
                    </motion.div>
                </header>

                {/* Filtros de categorias */}
                <div className="relative mb-8 flex w-full flex-wrap items-center justify-center gap-2 rounded-xl border border-slate-800/80 bg-slate-950/70 p-1.5 shadow-2xl backdrop-blur-md">
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
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                aria-pressed={isActive}
                                className={`relative flex shrink-0 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2.5 font-mono text-xs transition-colors duration-300 sm:text-sm ${
                                    isActive
                                        ? "font-semibold text-slate-300"
                                        : "text-slate-400 hover:text-slate-300"
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeProjectCategoryIndicator"
                                        className={`absolute inset-0 z-0 rounded-md border backdrop-blur-xl ${category.activeBorder} ${category.activeBg} ${category.glowShadow}`}
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 35,
                                        }}
                                    />
                                )}

                                <span className="relative z-10 flex items-center gap-2">
                                    <Icon
                                        className={`h-4 w-4 shrink-0 transition-colors duration-300 ${category.iconColor}`}
                                    />
                                    <span>{category.label}</span>
                                </span>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Container externo com altura mínima constante */}
                <div className="min-h-[420px] w-full min-w-0 rounded-xl border border-white/10 bg-[#0b1020]/70 p-4 shadow-lg backdrop-blur-sm sm:p-6 md:p-8">
                    {projectsToDisplay.length > 0 ? (
                        <motion.div
                            layout
                            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                        >
                            <AnimatePresence mode="popLayout">
                                {projectsToDisplay.map(
                                    (project: Project) => (
                                        <motion.div
                                            layout
                                            key={project.id}
                                            initial={{
                                                opacity: 0,
                                                scale: 0.95,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                scale: 0.95,
                                            }}
                                            transition={{ duration: 0.25 }}
                                            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-purple-500/50"
                                        >
                                            <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    loading="lazy"
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />

                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

                                                <span className="absolute left-3 top-3 rounded-full border border-purple-500/30 bg-purple-500/20 px-2.5 py-1 font-mono text-[10px] text-purple-300 backdrop-blur-md">
                                                    {project.category}
                                                </span>
                                            </div>

                                            <div className="flex flex-grow flex-col justify-between p-5">
                                                <div>
                                                    <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-purple-400">
                                                        {project.title}
                                                    </h3>

                                                    <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-slate-400">
                                                        {project.shortDescription}
                                                    </p>
                                                </div>

                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => {
                                                        console.log(
                                                            "Abrir modal do projeto:",
                                                            project.title,
                                                        );
                                                    }}
                                                    className="mt-2 w-full cursor-pointer justify-center gap-2 rounded-md border-purple-500/30 bg-purple-950/40 font-mono text-purple-300 hover:border-purple-500/60 hover:bg-purple-600/20"
                                                >
                                                    <span>
                                                        Detalhes do Projeto
                                                    </span>
                                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                                </Button>
                                            </div>
                                        </motion.div>
                                    ),
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ) : (
                        /* Estado vazio: categoria sem projetos */
                        <motion.div
                            key={selectedCategory}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex min-h-64 flex-col items-center justify-center px-4 py-12 text-center"
                        >
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900/80">
                                {(() => {
                                    const Icon =
                                        categories.find(
                                            (category) =>
                                                category.id ===
                                                selectedCategory,
                                        )?.icon ?? LayoutGrid;

                                    return (
                                        <Icon className="h-6 w-6 text-slate-400" />
                                    );
                                })()}
                            </div>

                            <h3 className="mb-2 text-base font-semibold text-slate-300">
                                Nenhum projeto disponível
                            </h3>

                            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
                                Ainda não há projetos cadastrados em{" "}
                                <span className="font-bold text-slate-400">
                                    {selectedCategoryLabel}
                                </span>
                                . Volte em breve para conferir as novidades!
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}