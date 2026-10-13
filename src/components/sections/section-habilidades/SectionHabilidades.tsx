
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Layout,
    Server,
    Database,
    Smartphone,
    Bot,
    GitBranch,
    Palette,
} from "lucide-react";

const skillCategories = [
    {
        id: "frontend",
        label: "Frontend",
        icon: Layout,
        iconColor: "text-emerald-400",
        skills: [
            { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]" },
            { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]" },
            { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(37,99,235,0.3)]" },
            { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(45,212,191,0.3)]" },
            { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(250,204,21,0.3)]" },
        ],
    },
    {
        id: "backend",
        label: "Backend",
        icon: Server,
        iconColor: "text-blue-400",
        skills: [
            { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]" },
            { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(13,148,136,0.3)]" },
            { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]" },
            { name: "NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(225,29,72,0.3)]" },
            { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]" },
            { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]" },
        ],
    },
    {
        id: "database",
        label: "Database",
        icon: Database,
        iconColor: "text-cyan-400",
        skills: [
            { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]" },
            { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]" },
            { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", shadow: "hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]" },
            { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(22,163,74,0.3)]" },
            { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", shadow: "hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]" },
            {
                name: "Prisma ORM",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
                shadow: "hover:shadow-[0_0_15px_rgba(20,184,166,0.3)]",
                extraClass: "brightness-200 contrast-200 drop-shadow-[0_0_6px_rgba(45,212,191,0.5)]",
            },
        ],
    },
    {
        id: "mobile",
        label: "Mobile",
        icon: Smartphone,
        iconColor: "text-violet-400",
        skills: [
            { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]" },
            {
                name: "Expo & Router",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg",
                shadow: "hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]",
                extraClass: "brightness-200 contrast-200 drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]",
            },
        ],
    },
    {
        id: "ai",
        label: "Automação",
        icon: Bot,
        iconColor: "text-amber-400",
        skills: [
            {
                name: "Agentes IA",
                logo: "",
                shadow: "hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]",
                extraClass: "",
            },
            { name: "n8n", logo: "https://cdn.simpleicons.org/n8n/EA4B71", shadow: "hover:shadow-[0_0_15px_rgba(234,75,113,0.3)]" },
        ],
    },
    {
        id: "devops",
        label: "DevOps",
        icon: GitBranch,
        iconColor: "text-orange-400",
        skills: [
            { name: "Git & GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(234,88,12,0.3)]" },
            { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]" },
        ],
    },
    {
        id: "uiux",
        label: "UI/UX Design",
        icon: Palette,
        iconColor: "text-pink-400",
        skills: [
            { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]" },
            {
                name: "Adobe XD",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
                shadow: "hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]",
                extraClass: "brightness-200 contrast-200 drop-shadow-[0_0_6px_rgba(236,72,153,0.5)]",
            },
            { name: "Sketch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg", shadow: "hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]" },
            { name: "Framer", logo: "https://cdn.simpleicons.org/framer/0055FF", shadow: "hover:shadow-[0_0_15px_rgba(0,85,255,0.3)]" },
        ],
    },
];

export function SectionHabilidades() {
    const [activeTab, setActiveTab] = useState(skillCategories[0].id);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveTab((currentId) => {
                const currentIndex = skillCategories.findIndex(
                    (category) => category.id === currentId,
                );

                const nextIndex =
                    (currentIndex + 1) % skillCategories.length;

                return skillCategories[nextIndex].id;
            });
        }, 10000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const handleTabClick = (id: string) => {
        setActiveTab(id);
        setIsPaused(true);
    };

    const currentCategory =
        skillCategories.find((category) => category.id === activeTab) ??
        skillCategories[0];

    return (
        <section
            id="skills"
            className="relative z-10 w-full min-w-0 py-5 sm:py-6"
        >
            <div className="w-full min-w-0">
                {/* Cabeçalho */}
                <header className="mb-6 w-full text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <h2 className="mb-2 font-display text-2xl font-bold text-cyan-300/70">
                            Habilidades e Tecnologias
                        </h2>

                        <p className="font-mono text-xs tracking-wide text-slate-400">
                            Tecnologias e ferramentas que utilizo para desenvolver soluções.
                        </p>
                    </motion.div>
                </header>

                {/* Abas */}
                <div
                    className="relative mb-6 flex w-full flex-wrap items-center justify-start gap-1.5 rounded-lg border border-white/10 bg-[#0b1020]/70 p-1"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {skillCategories.map((category) => {
                        const Icon = category.icon;
                        const isActive = activeTab === category.id;

                        return (
                            <motion.button
                                key={category.id}
                                type="button"
                                onClick={() => handleTabClick(category.id)}
                                whileTap={{ scale: 0.97 }}
                                aria-pressed={isActive}
                                className={`relative flex shrink-0 cursor-pointer select-none items-center justify-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1.5 font-sans text-xs font-medium transition-colors duration-200 ${isActive
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

                {/* Somente os cards individuais das tecnologias */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
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
                                className={`group relative flex h-17 w-17 cursor-default flex-col items-center justify-center rounded-lg border border-slate-700/60 bg-slate-900/70 p-1.5 transition-colors duration-200 hover:border-cyan-500/50 ${skill.shadow}`}
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
            </div>
        </section>
    );
}
