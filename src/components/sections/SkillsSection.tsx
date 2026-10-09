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
} from "lucide-react";

const skillCategories = [
    {
        id: "frontend",
        label: "Frontend",
        icon: Layout,
        skills: [
            { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]" },
            { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]" },
            { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]" },
            { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(45,212,191,0.4)]" },
            { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(250,204,21,0.4)]" }
        ]
    },
    {
        id: "backend",
        label: "Backend",
        icon: Server,
        skills: [
            { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]" },
            { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(13,148,136,0.4)]" },
            { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]" },
            { name: "NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(225,29,72,0.4)]" }
        ]
    },
    {
        id: "database",
        label: "Database",
        icon: Database,
        skills: [
            { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]" },
            { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(14,165,233,0.4)]" },
            { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", shadow: "hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]" },
            { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(22,163,74,0.4)]" },
            { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", shadow: "hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]" },
            { name: "Prisma ORM", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(20,184,166,0.4)]" }
        ]
    },
    {
        id: "mobile",
        label: "Mobile",
        icon: Smartphone,
        skills: [
            { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]" },
            { name: "Expo & Router", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]" }
        ]
    },
    {
        id: "ai",
        label: "Automação",
        icon: Bot,
        skills: [
            { name: "Agentes IA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(147,51,234,0.4)]" },
            { name: "n8n", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]" }
        ]
    },
    {
        id: "devops",
        label: "DevOps",
        icon: GitBranch,
        skills: [
            { name: "Git & GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(234,88,12,0.4)]" },
            { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(14,165,233,0.4)]" }
        ]
    }
];

export function SkillsSection() {
    const [activeTab, setActiveTab] = useState(skillCategories[0].id);
    const [isPaused, setIsPaused] = useState(false);

    // Alternância automática a cada 10 segundos
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveTab((currentId) => {
                const currentIndex = skillCategories.findIndex(cat => cat.id === currentId);
                const nextIndex = (currentIndex + 1) % skillCategories.length;
                return skillCategories[nextIndex].id;
            });
        }, 10000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const handleTabClick = (id: string) => {
        setActiveTab(id);
        setIsPaused(true);
    };

    const currentCategory = skillCategories.find(cat => cat.id === activeTab) || skillCategories[0];

    return (
        <section id="skills" className="py-20 relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Cabeçalho da Seção */}
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                            // 02. TECH STACK & COMPETÊNCIAS
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
                            Skills & Technologies
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto font-mono">
                            Ecossistema completo de desenvolvimento, arquitetura backend, mobile, DevOps e engenharia de IA.
                        </p>
                    </motion.div>
                </div>

                {/* Abas de Navegação */}
                <div 
                    className="flex flex-wrap justify-center gap-2 mb-10"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {skillCategories.map((category) => {
                        const Icon = category.icon;
                        const isActive = activeTab === category.id;
                        return (
                            <button
                                key={category.id}
                                onClick={() => handleTabClick(category.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono whitespace-nowrap transition-all duration-300 cursor-pointer border ${
                                    isActive 
                                        ? "bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] scale-105 font-medium" 
                                        : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                                }`}
                            >
                                <Icon className="w-4 h-4 shrink-0" />
                                <span>{category.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Grid Compacto e Ajustado: Cards proporcionais sem espaço sobrando */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-wrap justify-center items-center gap-3.5 max-w-5xl mx-auto"
                    >
                        {currentCategory.skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.04 }}
                                whileHover={{ scale: 1.05, y: -3 }}
                                className={`group relative bg-slate-950/90 backdrop-blur-md border border-slate-800/80 hover:border-emerald-500/50 rounded-xl p-3.5 flex flex-col items-center justify-center w-28 sm:w-32 h-28 shadow-lg transition-all duration-300 cursor-pointer overflow-hidden ${skill.shadow}`}
                                title={skill.name}
                            >
                                {/* Caixa da Logo Centralizada */}
                                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-center justify-center p-2 shadow-inner transition-transform duration-300 group-hover:scale-110 mb-2">
                                    <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain filter drop-shadow" />
                                </div>

                                {/* Nome da tecnologia sem quebra de linha */}
                                <span className="font-sans font-medium text-[11px] sm:text-xs text-slate-300 group-hover:text-white transition-colors tracking-wide text-center whitespace-nowrap truncate w-full">
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