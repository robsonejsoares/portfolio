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
    Palette
} from "lucide-react";

const skillCategories = [
    {
        id: "frontend",
        label: "Frontend",
        icon: Layout,
        iconColor: "text-emerald-400",
        activeBorder: "border-emerald-500/80",
        activeBg: "bg-emerald-500/15",
        glowShadow: "shadow-[0_0_25px_rgba(16,185,129,0.4)]",
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
        iconColor: "text-blue-400",
        activeBorder: "border-blue-500/80",
        activeBg: "bg-blue-500/15",
        glowShadow: "shadow-[0_0_25px_rgba(59,130,246,0.4)]",
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
        iconColor: "text-cyan-400",
        activeBorder: "border-cyan-500/80",
        activeBg: "bg-cyan-500/15",
        glowShadow: "shadow-[0_0_25px_rgba(6,182,212,0.4)]",
        skills: [
            { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]" },
            { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(14,165,233,0.4)]" },
            { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", shadow: "hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]" },
            { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(22,163,74,0.4)]" },
            { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", shadow: "hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]" },
            { name: "Prisma ORM", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(20,184,166,0.4)]", extraClass: "brightness-200 contrast-200 drop-shadow-[0_0_10px_rgba(45,212,191,0.6)]" }
        ]
    },
    {
        id: "mobile",
        label: "Mobile",
        icon: Smartphone,
        iconColor: "text-violet-400",
        activeBorder: "border-violet-500/80",
        activeBg: "bg-violet-500/15",
        glowShadow: "shadow-[0_0_25px_rgba(139,92,246,0.4)]",
        skills: [
            { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]" },
            { name: "Expo & Router", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]", extraClass: "brightness-200 contrast-200 drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]" }
        ]
    },
    {
        id: "ai",
        label: "Automação",
        icon: Bot,
        iconColor: "text-amber-400",
        activeBorder: "border-amber-500/80",
        activeBg: "bg-amber-500/15",
        glowShadow: "shadow-[0_0_25px_rgba(245,158,11,0.4)]",
        skills: [
            { name: "Agentes IA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(147,51,234,0.4)]" },
            { name: "n8n", logo: "https://cdn.simpleicons.org/n8n/EA4B71", shadow: "hover:shadow-[0_0_25px_rgba(234,75,113,0.4)]" }
        ]
    },
    {
        id: "devops",
        label: "DevOps",
        icon: GitBranch,
        iconColor: "text-orange-400",
        activeBorder: "border-orange-500/80",
        activeBg: "bg-orange-500/15",
        glowShadow: "shadow-[0_0_25px_rgba(249,115,22,0.4)]",
        skills: [
            { name: "Git & GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(234,88,12,0.4)]" },
            { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(14,165,233,0.4)]" }
        ]
    },
    {
        id: "uiux",
        label: "UI/UX Design",
        icon: Palette,
        iconColor: "text-pink-400",
        activeBorder: "border-pink-500/80",
        activeBg: "bg-pink-500/15",
        glowShadow: "shadow-[0_0_25px_rgba(236,72,153,0.4)]",
        skills: [
            { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]" },
            { name: "Adobe XD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg", shadow: "hover:shadow-[0_0_25px_rgba(236,72,153,0.4)]", extraClass: "brightness-200 contrast-200 drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]" },
            { name: "Sketch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg", shadow: "hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]" },
            { name: "Framer", logo: "https://cdn.simpleicons.org/framer/0055FF", shadow: "hover:shadow-[0_0_25px_rgba(0,85,255,0.4)]" }
        ]
    }
];

export function SectionHabilidades() {
    const [activeTab, setActiveTab] = useState(skillCategories[0].id);
    const [isPaused, setIsPaused] = useState(false);

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
                        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                            Habilidades e Tecnologias
                        </h2>
                        
                        {/* Indicador visual pulsante */}
                        <div className="flex items-center justify-center gap-2 mt-4">
                            <motion.span 
                                initial={{ opacity: 0.5, width: "3rem" }}
                                animate={{ opacity: [0.5, 1, 0.5], width: ["3rem", "4rem", "3rem"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="h-[2px] bg-gradient-to-r from-transparent to-cyan-500/80"
                            ></motion.span>
                            
                            <motion.span 
                                animate={{ 
                                    scale: [1, 1.3, 1],
                                    boxShadow: [
                                        "0 0 8px rgba(6,182,212,0.8)", 
                                        "0 0 16px rgba(6,182,212,1)", 
                                        "0 0 8px rgba(6,182,212,0.8)"
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-2 h-2 rounded-full bg-cyan-400"
                            ></motion.span>
                            
                            <motion.span 
                                initial={{ opacity: 0.5, width: "3rem" }}
                                animate={{ opacity: [0.5, 1, 0.5], width: ["3rem", "4rem", "3rem"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="h-[2px] bg-gradient-to-l from-transparent to-cyan-500/80"
                            ></motion.span>
                        </div>
                    </motion.div>
                </div>

                {/* Abas com Transição Fluida e Dinâmica */}
                <div 
                    className="flex flex-wrap justify-center gap-2 mb-10 relative p-1.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-md max-w-fit mx-auto shadow-2xl"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {skillCategories.map((category) => {
                        const Icon = category.icon;
                        const isActive = activeTab === category.id;
                        return (
                            <motion.button
                                key={category.id}
                                onClick={() => handleTabClick(category.id)}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono whitespace-nowrap transition-colors duration-300 cursor-pointer select-none ${
                                    isActive 
                                        ? "text-white font-semibold" 
                                        : "text-slate-400 hover:text-slate-200"
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className={`absolute inset-0 rounded-xl border backdrop-blur-xl ${category.activeBorder} ${category.activeBg} ${category.glowShadow} z-0`}
                                        transition={{ 
                                            type: "spring", 
                                            stiffness: 500, 
                                            damping: 35 
                                        }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    <Icon className={`w-4 h-4 shrink-0 transition-colors duration-300 ${category.iconColor}`} />
                                    <span>{category.label}</span>
                                </span>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Grid de Habilidades */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 12, scale: 0.99 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12, scale: 0.99 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="flex flex-wrap justify-center items-center gap-3.5 max-w-5xl mx-auto"
                    >
                        {currentCategory.skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.04 }}
                                whileHover={{ scale: 1.05, y: -3 }}
                                className={`group relative bg-slate-900/90 backdrop-blur-md border border-slate-700/70 hover:border-cyan-500/50 rounded-xl p-3.5 flex flex-col items-center justify-center w-32 sm:w-36 h-34 shadow-xl transition-all duration-300 overflow-hidden ${skill.shadow}`}
                            >
                                {/* Card Interno com apenas o efeito de flutuação */}
                                <motion.div 
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }}
                                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-slate-950/80 border border-slate-700/80 flex items-center justify-center p-2.5 shadow-inner transition-colors duration-300 group-hover:border-cyan-500/40 mb-2"
                                >
                                    <img 
                                        src={skill.logo} 
                                        alt={skill.name} 
                                        className={`w-full h-full object-contain filter drop-shadow-md ${skill.extraClass || ""}`}
                                    />
                                </motion.div>

                                <span className="text-slate-300 font-mono text-xs sm:text-sm group-hover:text-white transition-colors tracking-wide text-center whitespace-nowrap truncate w-full">
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
