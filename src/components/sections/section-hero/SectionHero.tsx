
"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import type { MouseEvent } from "react";
import { dadosPortfolio } from "@/data/dadosPortfolio";
import {
    MapPin,
    Mail,
    Database,
    Server,
    Code2,
    Layers,
    ArrowRight,
} from "lucide-react";

import { LoadingDialog } from "@/components/common/LoadingDialog";
import { DialogCurriculo } from "@/components/sections/section-hero/dialogs/DialogCurriculo";

function GitIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
    );
}

export function SectionHero() {
    const { personal } = dadosPortfolio;

    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Typewriter
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = personal.roles[roleIndex];

        if (!currentRole) return;

        const typingSpeed = isDeleting ? 40 : 80;

        const timer = window.setTimeout(() => {
            if (!isDeleting) {
                const nextText = currentRole.substring(
                    0,
                    displayText.length + 1,
                );

                setDisplayText(nextText);

                if (nextText.length === currentRole.length) {
                    window.setTimeout(() => {
                        setIsDeleting(true);
                    }, 1800);
                }
            } else {
                const nextText = currentRole.substring(
                    0,
                    displayText.length - 1,
                );

                setDisplayText(nextText);

                if (nextText.length === 0) {
                    setIsDeleting(false);
                    setRoleIndex(
                        (previous) =>
                            (previous + 1) % personal.roles.length,
                    );
                }
            }
        }, typingSpeed);

        return () => window.clearTimeout(timer);
    }, [displayText, isDeleting, roleIndex, personal.roles]);

    // Abre o currículo com carregamento animado.
    const handleOpenResume = useCallback(() => {
        if (isLoading || isResumeOpen) return;

        setIsLoading(true);
    }, [isLoading, isResumeOpen]);

    const finalizarLoadingCurriculo = useCallback(() => {
        setIsLoading(false);
        setIsResumeOpen(true);
    }, []);

    // Rola suavemente até a seção de contato.
    const handleScrollToContact = (
        event: MouseEvent<HTMLAnchorElement>,
    ) => {
        event.preventDefault();

        const contactElement = document.getElementById("contact");

        contactElement?.scrollIntoView({
            behavior: "smooth",
        });
    };

    // Órbita 1: Frontend, Mobile e Core.
    const orbit1Tech = [
        { label: "React.js", icon: "⚛️", color: "97, 218, 251" },
        { label: "Next.js", icon: "▲", color: "255, 255, 255" },
        { label: "TypeScript", icon: "🔷", color: "49, 120, 198" },
        { label: "JavaScript", icon: "⚡", color: "247, 223, 30" },
        { label: "Tailwind", icon: "💨", color: "6, 182, 212" },
        { label: "React Native", icon: "📱", color: "97, 218, 251" },
        { label: "Expo", icon: "🚀", color: "255, 255, 255" },
        { label: "Kotlin", icon: "🟣", color: "167, 139, 250" },
    ];

    // Órbita 2: Backend, Banco de Dados, DevOps e Ferramentas.
    const orbit2Tech = [
        { label: "Java", icon: "☕", color: "237, 117, 35" },
        { label: "Spring Boot", icon: "⚙️", color: "0, 89, 156" },
        { label: "Node.js", icon: "🟢", color: "51, 153, 51" },
        { label: "SQL", icon: "🗄️", color: "68, 121, 161" },
        { label: "Docker", icon: "🐙", color: "240, 80, 50" },
        { label: "Git & GitHub", icon: "📑", color: "210, 71, 38" },
        { label: "Cloud", icon: "☁️", color: "16, 185, 129" },
        { label: "PHP", icon: "🐘", color: "119, 123, 180" },
        { label: "n8n", icon: "🔄", color: "234, 88, 12" },
    ];

    const customStats = [
        { value: "3+", label: "Anos de Experiência" },
        { value: "CleanCode", label: "Boas Práticas" },
        { value: "100%", label: "Comprometimento" },
    ];

    return (
        <>
            <style jsx global>{`
                @keyframes rotate-ring {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes rotate-ring-rev {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(-360deg);
                    }
                }

                @keyframes orbit-r1 {
                    from {
                        transform: rotate(0deg) translateX(135px)
                            rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg) translateX(135px)
                            rotate(-360deg);
                    }
                }

                @keyframes orbit-r2 {
                    from {
                        transform: rotate(0deg) translateX(180px)
                            rotate(0deg);
                    }
                    to {
                        transform: rotate(-360deg) translateX(180px)
                            rotate(360deg);
                    }
                }
            `}</style>

            {/* Loading compartilhado com a seção de experiências */}
            <LoadingDialog
                isLoading={isLoading}
                text="Acessando currículo..."
                onFinished={finalizarLoadingCurriculo}
            />

            <section
                id="hero"
                className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden pb-16 pt-28"
            >
                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-6 sm:py-8">
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
                        {/* Lado esquerdo: Avatar e órbitas */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative order-1 flex justify-center lg:justify-start"
                        >
                            <div className="relative my-6 flex h-[350px] w-[300px] items-center justify-center">
                                <div
                                    className="group relative z-20 h-[235px] w-[190px] cursor-pointer overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:scale-105"
                                    style={{
                                        transformStyle: "preserve-3d",
                                        perspective: "600px",
                                    }}
                                >
                                    <div
                                        className="absolute inset-0 -z-10 scale-90 rounded-3xl opacity-40 blur-2xl"
                                        style={{
                                            background:
                                                "linear-gradient(135deg, rgb(0, 245, 255), rgb(139, 92, 246))",
                                        }}
                                    />

                                    <img
                                        src="/avatar.jpg"
                                        alt={personal.name}
                                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
                                </div>

                                <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center">
                                    {/* Anel orbital 1 */}
                                    <div
                                        className="pointer-events-none absolute z-10 rounded-full border border-dashed"
                                        style={{
                                            borderColor: "rgb(0, 245, 255)",
                                            opacity: 0.12,
                                            width: "350px",
                                            height: "350px",
                                            animation:
                                                "rotate-ring 45s linear infinite",
                                        }}
                                    />

                                    {/* Anel orbital 2 */}
                                    <div
                                        className="pointer-events-none absolute z-10 rounded-full border border-dashed"
                                        style={{
                                            borderColor: "rgb(139, 92, 246)",
                                            opacity: 0.07,
                                            width: "470px",
                                            height: "470px",
                                            animation:
                                                "rotate-ring-rev 65s linear infinite",
                                        }}
                                    />

                                    {/* Tecnologias da órbita 1 */}
                                    {orbit1Tech.map((tech, index) => (
                                        <div
                                            key={`frontend-${tech.label}`}
                                            style={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transformOrigin: "center center",
                                                animation: `orbit-r1 45s linear -${(
                                                    index *
                                                    (45 / orbit1Tech.length)
                                                ).toFixed(2)}s infinite`,
                                                zIndex: 40,
                                            }}
                                        >
                                            <div
                                                className="pointer-events-auto flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-mono text-[9px] backdrop-blur-sm"
                                                style={{
                                                    transform:
                                                        "translate(-50%, -50%)",
                                                    background: `rgba(${tech.color}, 0.094)`,
                                                    border: `1px solid rgba(${tech.color}, 0.25)`,
                                                    color: `rgb(${tech.color})`,
                                                    boxShadow: `rgba(${tech.color}, 0.19) 0px 0px 8px`,
                                                }}
                                            >
                                                <span>{tech.icon}</span>
                                                <span>{tech.label}</span>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Tecnologias da órbita 2 */}
                                    {orbit2Tech.map((tech, index) => (
                                        <div
                                            key={`backend-${tech.label}`}
                                            style={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transformOrigin: "center center",
                                                animation: `orbit-r2 65s linear -${(
                                                    index *
                                                    (65 / orbit2Tech.length)
                                                ).toFixed(2)}s infinite`,
                                                zIndex: 40,
                                            }}
                                        >
                                            <div
                                                className="pointer-events-auto flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-mono text-[9px] backdrop-blur-sm"
                                                style={{
                                                    transform:
                                                        "translate(-50%, -50%)",
                                                    background: `rgba(${tech.color}, 0.094)`,
                                                    border: `1px solid rgba(${tech.color}, 0.25)`,
                                                    color: `rgb(${tech.color})`,
                                                    boxShadow: `rgba(${tech.color}, 0.19) 0px 0px 8px`,
                                                }}
                                            >
                                                <span>{tech.icon}</span>
                                                <span>{tech.label}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Lado direito: Informações, Typewriter e cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="order-2 flex flex-col gap-6"
                        >
                            <div className="flex flex-wrap items-center gap-2">
                                <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
                                    <div className="text-emerald-400" title="Database">
                                        <Database className="h-3.5 w-3.5" />
                                    </div>

                                    <div className="text-amber-400" title="Server">
                                        <Server className="h-3.5 w-3.5" />
                                    </div>

                                    <div className="text-purple-400" title="Code">
                                        <Code2 className="h-3.5 w-3.5" />
                                    </div>

                                    <div className="text-cyan-400" title="Layers">
                                        <Layers className="h-3.5 w-3.5" />
                                    </div>
                                </div>

                                <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-xs tracking-widest text-slate-400">
                                    <MapPin className="h-3.5 w-3.5 animate-pulse text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                                    {personal.location}
                                </span>
                            </div>

                            <h1 className="text-3xl font-bold tracking-tight text-slate-400 sm:text-5xl">
                                {personal.name.split(" ")[0]}{" "}
                                <span className="text-gradient-cyan">
                                    {personal.name
                                        .split(" ")
                                        .slice(1)
                                        .join(" ")}
                                </span>
                            </h1>

                            <div className="flex h-8 items-center">
                                <span className="bg-gradient-to-r from-cyan-500 via-sky-400 to-purple-500 bg-clip-text font-mono text-xl font-medium tracking-wide text-transparent sm:text-xl">
                                    {displayText}
                                </span>

                                <span className="ml-1.5 h-5 w-px animate-pulse rounded-xl bg-slate-500" />
                            </div>

                            <p className="font-mono text-xs tracking-widest text-slate-500">
                                {personal.tagline}
                            </p>

                            {/* Estatísticas */}
                            <div className="my-2 grid grid-cols-3 gap-3">
                                {customStats.map((stat) => (
                                    <motion.div
                                        key={stat.label}
                                        whileHover={{ scale: 1.03 }}
                                        className="glass-card flex flex-col justify-center rounded-md border border-white/10 bg-slate-900/40 p-4 text-center transition-colors hover:border-cyan-500/40"
                                    >
                                        <span className="bg-slate-400 bg-clip-text text-lg font-bold text-transparent sm:text-xl">
                                            {stat.value}
                                        </span>

                                        <span className="mt-1 font-mono text-xs text-slate-500">
                                            {stat.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Botões principais */}
                            <div className="flex flex-wrap items-center gap-4 pt-2">
                                <button
                                    type="button"
                                    onClick={handleOpenResume}
                                    disabled={isLoading || isResumeOpen}
                                    aria-haspopup="dialog"
                                    aria-expanded={isResumeOpen}
                                    className="group relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-md bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-[0_0_35px_rgba(6,182,212,0.9)] active:scale-95 disabled:cursor-wait disabled:opacity-70"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
                                    />

                                    <span className="relative z-10 flex items-center gap-2">
                                        <span>Ver currículo</span>

                                        <ArrowRight
                                            size={17}
                                            aria-hidden="true"
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </span>
                                </button>

                                <a
                                    href="#contact"
                                    onClick={handleScrollToContact}
                                    className="group relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-md border border-white/10 px-6 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 glass-card hover:scale-105 hover:border-cyan-400 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-95"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
                                    />

                                    <span className="relative z-10 flex items-center gap-2">
                                        <span>Entrar em contato</span>

                                        <ArrowRight
                                            size={17}
                                            aria-hidden="true"
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </span>
                                </a>
                            </div>

                            {/* Redes sociais */}
                            <div className="flex flex-wrap items-center gap-6 border-t border-white/10 pt-4 font-mono text-xs font-semibold tracking-widest text-gray-400">
                                <a
                                    href="https://github.com/robsonejsoares"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center gap-1.5 text-gray-400 transition-colors hover:text-white"
                                >
                                    <GitIcon className="h-4 w-4 text-gray-200 transition-colors group-hover:text-cyan-400" />
                                    <span>GITHUB</span>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/robson-soares-b22513170/?isSelfProfile=true"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center gap-1.5 text-gray-400 transition-colors hover:text-blue-400"
                                >
                                    <LinkedinIcon className="h-4 w-4 text-blue-400 transition-colors group-hover:text-blue-300" />
                                    <span>LINKEDIN</span>
                                </a>

                                <a
                                    href="mailto:robsoncsoares.1050@gmail.com"
                                    className="group flex items-center gap-1.5 text-gray-400 transition-colors hover:text-purple-400"
                                >
                                    <Mail className="h-4 w-4 text-purple-400 transition-colors group-hover:text-purple-300" />
                                    <span>E-MAIL</span>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Modal do currículo */}
            <DialogCurriculo
                isOpen={isResumeOpen}
                onClose={() => setIsResumeOpen(false)}
            />
        </>
    );
}
