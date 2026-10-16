
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot } from "lucide-react";
import type { skillCategories } from "../dadosHabilidades";

type SkillCategory = (typeof skillCategories)[number];

interface GridHabilidadesProps {
    currentCategory: SkillCategory;
}

export function GridHabilidades({
    currentCategory,
}: GridHabilidadesProps) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={currentCategory.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="flex w-full min-w-0 flex-wrap items-center justify-start gap-2"
            >
                {currentCategory.skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.2,
                            delay: index * 0.03,
                        }}
                        whileHover={{
                            scale: 1.06,
                            y: -2,
                        }}
                        className={`group relative flex h-17 w-17 shrink-0 cursor-default flex-col items-center justify-center rounded-md border border-slate-700/60 bg-slate-900/70 p-1.5 transition-colors duration-200 hover:border-cyan-500/50 ${"shadow" in skill ? skill.shadow : ""
                            }`}
                        title={skill.name}
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.1,
                                y: -1,
                            }}
                            transition={{
                                duration: 0.18,
                                ease: "easeOut",
                            }}
                            className="flex h-7 w-7 items-center justify-center"
                        >
                            {skill.name === "Agentes IA" ? (
                                <Bot
                                    className="h-6 w-6 text-sky-400"
                                    strokeWidth={1.8}
                                    aria-label="Agentes IA"
                                />
                            ) : (
                                <img
                                    src={skill.logo}
                                    alt={skill.name}
                                    loading="lazy"
                                    className={`h-full w-full object-contain ${"extraClass" in skill
                                            ? skill.extraClass
                                            : ""
                                        }`}
                                />
                            )}
                        </motion.div>

                        <span className="mt-1 w-full truncate text-center font-mono text-[9px] leading-tight text-slate-400 transition-colors group-hover:text-slate-200">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </AnimatePresence>
    );
}

