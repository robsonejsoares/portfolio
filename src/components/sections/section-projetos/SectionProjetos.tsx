"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, ArrowUpRight } from "lucide-react";
import { dadosPortfolio, Project } from "@/data/dadosPortfolio";
import { Button } from "@/components/ui/Button";

const categories = [
    { id: "all", label: "Todos" },
    { id: "Aplicativos Web", label: "Aplicativos Web" },
    { id: "mobile", label: "Mobile" },
    { id: "ai", label: "Automação / IA" }
];

export function SectionProjetos() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredProjects = selectedCategory === "all"
        ? dadosPortfolio.projects
        : dadosPortfolio.projects.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

    return (
        <section id="projects" className="py-20 relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Cabeçalho da Seção */}
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-400 mb-4 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                            <Code2 className="w-6 h-6" />
                        </div>

                        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
                            <span>Projetos</span>
                            <span className="text-purple-400 font-normal text-2xl sm:text-4xl">(Destaques)</span>
                        </h2>

                        <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl font-mono leading-relaxed">
                            Empacotando aplicações full-stack, repositórios e cases de alta performance para exibição.
                        </p>
                    </motion.div>
                </div>

                {/* Filtros de Categoria */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-300 cursor-pointer ${selectedCategory === cat.id
                                    ? "bg-purple-500/20 border border-purple-500/80 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] font-semibold"
                                    : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Cards de Projetos */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredProjects.map((project: Project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.25 }}
                                className="group relative bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 rounded-2xl overflow-hidden shadow-xl backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
                            >
                                <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

                                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono bg-purple-500/20 border border-purple-500/30 text-purple-300 backdrop-blur-md">
                                        {project.category}
                                    </span>
                                </div>

                                <div className="p-5 flex-grow flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">
                                            {project.shortDescription}
                                        </p>
                                    </div>

                                    {/* Botão utilizando o componente customizado do projeto */}
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => {
                                            console.log("Abrir modal do projeto:", project.title);
                                        }}
                                        className="w-full mt-2 font-mono bg-purple-950/40 hover:bg-purple-600/20 border-purple-500/30 hover:border-purple-500/60 text-purple-300 justify-center gap-2 cursor-pointer"
                                    >
                                        <span>Detalhes do Projeto</span>
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}
