"use client";

import { motion } from "framer-motion";
import {
    LayoutGrid,
    Monitor,
    Smartphone,
    Workflow,
    Server,
    Palette,
} from "lucide-react";

interface CategoriasProjetosProps {
    selectedCategory: string;
    onCategoryChange: (categoryId: string) => void;
}

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

export function CategoriasProjetos({
    selectedCategory,
    onCategoryChange,
}: CategoriasProjetosProps) {
    return (
        <nav
            aria-label="Categorias de projetos"
            className="relative mb-6 flex w-full flex-wrap items-center justify-start gap-1.5 rounded-md border border-white/10 bg-[#0b1020]/70 p-1 lg:flex-nowrap"
        >
            {categories.map((category) => {
                const Icon = category.icon;
                const isActive = selectedCategory === category.id;

                return (
                    <motion.button
                        key={category.id}
                        type="button"
                        onClick={() => onCategoryChange(category.id)}
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
        </nav>
    );
}