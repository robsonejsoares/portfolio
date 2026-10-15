"use client";

import { motion } from "framer-motion";
import { skillCategories } from "../dadosHabilidades";

interface TabsHabilidadesProps {
    activeTab: string;
    onTabClick: (id: string) => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export function TabsHabilidades({
    activeTab,
    onTabClick,
    onMouseEnter,
    onMouseLeave,
}: TabsHabilidadesProps) {
    return (
        <div
            className="relative mb-6 flex w-full flex-wrap items-center justify-start gap-1 rounded-lg border border-white/10 bg-[#0b1020]/70 p-1 sm:gap-1.5"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {skillCategories.map((category) => {
                const Icon = category.icon;
                const isActive = activeTab === category.id;

                return (
                    <motion.button
                        key={category.id}
                        type="button"
                        onClick={() => onTabClick(category.id)}
                        whileTap={{ scale: 0.97 }}
                        aria-pressed={isActive}
                        className={`relative flex shrink-0 cursor-pointer select-none items-center justify-center gap-1 rounded-md px-2 py-1.5 font-sans text-xs font-medium transition-colors duration-200 sm:gap-1.5 sm:px-3 ${isActive
                                ? "font-semibold text-slate-300"
                                : "text-slate-500 hover:text-slate-300"
                            }`}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="active-skill-tab"
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
                                className={`h-3.5 w-3.5 shrink-0 ${isActive
                                        ? category.iconColor
                                        : "text-slate-500"
                                    }`}
                            />

                            <span>{category.label}</span>
                        </span>
                    </motion.button>
                );
            })}
        </div>
    );

}
