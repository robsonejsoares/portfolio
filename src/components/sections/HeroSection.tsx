"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Database, Server, Code2, Layers } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { DialogResume } from "@/components/dialogs/DialogResume";
import { CyberLoader } from "@/components/common/CyberLoader";

// Ícones Sociais
function GitIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
    );
}

export function HeroSection() {
    const { personal } = portfolioData;
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Typewriter
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = personal.roles[roleIndex];
        const typingSpeed = isDeleting ? 40 : 80;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentRole.substring(0, displayText.length + 1));
                if (displayText.length + 1 === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 1800);
                }
            } else {
                setDisplayText(currentRole.substring(0, displayText.length - 1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % personal.roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, roleIndex, personal.roles]);

    const handleOpenResume = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsResumeOpen(true);
        }, 2500);
    };

    const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const contactElement = document.getElementById("contact");
        if (contactElement) {
            contactElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const orbit1Tech = [
        { label: "React Native", icon: "📱", color: "97, 218, 251" },
        { label: "Expo", icon: "🚀", color: "255, 255, 255" },
        { label: "NativeWind", icon: "💨", color: "6, 182, 212" },
        { label: "Kotlin", icon: "🟣", color: "167, 139, 250" },
        { label: "LangChain", icon: "🔗", color: "16, 185, 129" },
        { label: "n8n", icon: "🔄", color: "234, 88, 12" },
        { label: "Playwright", icon: "🎭", color: "45, 150, 90" },
    ];

    const orbit2Tech = [
        { label: "Java", icon: "☕", color: "237, 117, 35" },
        { label: "Spring Boot", icon: "⚙️", color: "0, 89, 156" },
        { label: "Spring Security", icon: "🔐", color: "51, 153, 51" },
        { label: "Spring Data JPA", icon: "🗃️", color: "68, 121, 161" },
        { label: "Hibernate", icon: "♨️", color: "119, 123, 180" },
        { label: "Maven", icon: "📦", color: "210, 71, 38" },
        { label: "JUnit", icon: "🧪", color: "37, 150, 100" },
        { label: "PHP", icon: "🐘", color: "119, 123, 180" },
        { label: "Node.js", icon: "🟢", color: "51, 153, 51" },
        { label: "SQL", icon: "🗄️", color: "68, 121, 161" },
        { label: "Docker", icon: "🐙", color: "240, 80, 50" },
        { label: "Cloud", icon: "☁️", color: "16, 185, 129" },
        { label: "Git & GitHub", icon: "📑", color: "210, 71, 38" },
    ];

    const orbit3Tech = [
        { label: "HTML5", icon: "🌐", color: "227, 79, 38" },
        { label: "CSS3", icon: "🎨", color: "21, 114, 182" },
        { label: "JavaScript", icon: "⚡", color: "247, 223, 30" },
        { label: "React.js", icon: "⚛️", color: "97, 218, 251" },
        { label: "Next.js", icon: "▲", color: "255, 255, 255" },
        { label: "TypeScript", icon: "🔷", color: "49, 120, 198" },
        { label: "Tailwind", icon: "💨", color: "6, 182, 212" },
    ];

    // Estatísticas personalizadas com CleanCode e Boas Práticas
    const customStats = [
        { value: "3+", label: "Anos de Experiência" },
        { value: "CleanCode", label: "Boas Práticas" },
        { value: "100%", label: "Comprometimento" }
    ];

    return (
        <>
            <style jsx global>{`
                @keyframes rotate-ring {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes rotate-ring-rev {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }
                @keyframes orbit-r1 {
                    from { transform: rotate(0deg) translateX(155px) rotate(0deg); }
                    to { transform: rotate(360deg) translateX(155px) rotate(-360deg); }
                }
                @keyframes orbit-r2 {
                    from { transform: rotate(0deg) translateX(200px) rotate(0deg); }
                    to { transform: rotate(-360deg) translateX(200px) rotate(360deg); }
                }
                @keyframes orbit-r3 {
                    from { transform: rotate(0deg) translateX(242px) rotate(0deg); }
                    to { transform: rotate(360deg) translateX(242px) rotate(-360deg); }
                }
            `}</style>

            <CyberLoader isLoading={isLoading} text="ACESSANDO CURRÍCULO..." />

            <div className="fixed top-0 left-0 right-0 h-19 bg-slate-950 z-[40] pointer-events-none" />

            <section id="hero" className="relative min-h-screen pt-44 pb-20 flex items-center justify-center px-4 overflow-hidden z-10">
                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-1 items-center relative z-10">

                    {/* Lado Esquerdo: Avatar e Órbitas */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 flex justify-start items-center relative ml-8 lg:ml-12"
                    >
                        <div className="relative flex items-center justify-center w-[300px] h-[350px] my-10">

                            <div
                                className="relative w-[220px] h-[270px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900 z-20 group cursor-pointer transition-transform duration-500 hover:scale-105 hover:-translate-y-2"
                                style={{ transformStyle: "preserve-3d", perspective: "600px" }}
                            >
                                <div className="absolute inset-0 rounded-3xl blur-2xl opacity-40 scale-90 -z-10" style={{ background: "linear-gradient(135deg, rgb(0, 245, 255), rgb(139, 92, 246))" }}></div>
                                <img
                                    src="/avatar.jpg"
                                    alt={personal.name}
                                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent"></div>
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
                                <div
                                    className="absolute rounded-full border border-dashed pointer-events-none z-10"
                                    style={{
                                        borderColor: "rgb(0, 245, 255)",
                                        opacity: 0.12,
                                        width: "310px",
                                        height: "310px",
                                        animation: "rotate-ring 45s linear infinite",
                                    }}
                                />
                                <div
                                    className="absolute rounded-full border border-dashed pointer-events-none z-10"
                                    style={{
                                        borderColor: "rgb(139, 92, 246)",
                                        opacity: 0.07,
                                        width: "370px",
                                        height: "370px",
                                        animation: "rotate-ring-rev 65s linear infinite",
                                    }}
                                />

                                {orbit1Tech.map((tech, index) => (
                                    <div
                                        key={`frontend-${tech.label}`}
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transformOrigin: "center center",
                                            animation: `orbit-r1 45s linear -${(index * (45 / orbit1Tech.length)).toFixed(2)}s infinite`,
                                            zIndex: 40,
                                        }}
                                    >
                                        <div
                                            className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono whitespace-nowrap backdrop-blur-sm pointer-events-auto"
                                            style={{
                                                transform: "translate(-50%, -50%)",
                                                background: `rgba(${tech.color}, 0.094)`,
                                                border: `1px solid rgba(${tech.color}, 0.25)`,
                                                color: `rgb(${tech.color})`,
                                                boxShadow: `rgba(${tech.color}, 0.19) 0px 0px 8px`,
                                            }}
                                        >
                                            <span>{tech.icon}</span><span>{tech.label}</span>
                                        </div>
                                    </div>
                                ))}

                                {orbit2Tech.map((tech, index) => (
                                    <div
                                        key={`backend-${tech.label}`}
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transformOrigin: "center center",
                                            animation: `orbit-r2 65s linear -${(index * (65 / orbit2Tech.length)).toFixed(2)}s infinite`,
                                            zIndex: 40,
                                        }}
                                    >
                                        <div
                                            className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono whitespace-nowrap backdrop-blur-sm pointer-events-auto"
                                            style={{
                                                transform: "translate(-50%, -50%)",
                                                background: `rgba(${tech.color}, 0.094)`,
                                                border: `1px solid rgba(${tech.color}, 0.25)`,
                                                color: `rgb(${tech.color})`,
                                                boxShadow: `rgba(${tech.color}, 0.19) 0px 0px 8px`,
                                            }}
                                        >
                                            <span>{tech.icon}</span><span>{tech.label}</span>
                                        </div>
                                    </div>
                                ))}

                                {orbit3Tech.map((tech, index) => (
                                    <div
                                        key={`mobile-ai-${tech.label}`}
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transformOrigin: "center center",
                                            animation: `orbit-r3 85s linear -${(index * (85 / orbit3Tech.length)).toFixed(2)}s infinite`,
                                            zIndex: 40,
                                        }}
                                    >
                                        <div
                                            className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono whitespace-nowrap backdrop-blur-sm pointer-events-auto"
                                            style={{
                                                transform: "translate(-50%, -50%)",
                                                background: `rgba(${tech.color}, 0.094)`,
                                                border: `1px solid rgba(${tech.color}, 0.25)`,
                                                color: `rgb(${tech.color})`,
                                                boxShadow: `rgba(${tech.color}, 0.19) 0px 0px 8px`,
                                            }}
                                        >
                                            <span>{tech.icon}</span><span>{tech.label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Lado Direito: Informações, Typewriter & Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-7 flex flex-col gap-6"
                    >
                        <div className="flex flex-wrap items-center gap-2">
                            <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
                                <div className="text-emerald-400" title="Database">
                                    <Database className="w-3.5 h-3.5" />
                                </div>
                                <div className="text-amber-400" title="Server">
                                    <Server className="w-3.5 h-3.5" />
                                </div>
                                <div className="text-purple-400" title="Code">
                                    <Code2 className="w-3.5 h-3.5" />
                                </div>
                                <div className="text-cyan-400" title="Layers">
                                    <Layers className="w-3.5 h-3.5" />
                                </div>
                            </div>

                            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/[0.07]">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-xs font-mono text-emerald-400 whitespace-nowrap">
                                    Disponível para trabalho
                                </span>
                            </div>
                            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-gray-300 flex items-center gap-2">
                                <MapPin className="w-3.5 h-3.5 text-red-500 animate-pulse drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                                {personal.location}
                            </span>
                        </div>

                        <p className="text-xs font-mono text-slate-500 tracking-widest">
                            {"// "}Full Stack Developer
                        </p>

                        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
                            {personal.name.split(" ")[0]} <span className="text-gradient-cyan">{personal.name.split(" ")[1]}</span>
                        </h1>

                        <div className="h-8 flex items-center">
                            <span className="text-xl sm:text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 tracking-wide">
                                {displayText}
                            </span>
                            <span className="w-[3px] h-6 bg-cyan-400 ml-1.5 animate-pulse rounded-xl" />
                        </div>

                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                            {personal.tagline}
                        </p>

                        <div className="grid grid-cols-3 gap-3 my-2">
                            {customStats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.03 }}
                                    className="glass-card p-4 rounded-2xl border border-white/10 text-center flex flex-col justify-center bg-slate-900/40 hover:border-cyan-500/40 transition-colors"
                                >
                                    <span className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
                                        {stat.value}
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium mt-1">
                                        {stat.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <button
                                onClick={handleOpenResume}
                                className="relative overflow-hidden px-6 py-2.5 rounded-xl text-sm font-extrabold text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-lg shadow-cyan-500/25 hover:scale-105 hover:brightness-110 hover:shadow-[0_0_35px_rgba(6,182,212,0.9)] active:scale-95 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

                                <span className="relative z-10 flex items-center gap-2">
                                    <span>Ver currículo</span>
                                    <span className="text-base font-bold group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                                </span>
                            </button>

                            <a
                                href="#contact"
                                onClick={handleScrollToContact}
                                className="relative overflow-hidden px-6 py-2.5 rounded-xl text-sm font-bold text-white glass-card hover:bg-white/10 border border-white/10 hover:border-cyan-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-95 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

                                <span className="relative z-10 flex items-center gap-2">
                                    <span>Entre em contato</span>
                                    <span className="text-base font-bold text-cyan-400 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                                </span>
                            </a>
                        </div>

                        <div className="flex items-center gap-6 pt-4 text-xs font-semibold text-gray-400 border-t border-white/10 tracking-widest">
                            <a
                                href="https://github.com/robsonejsoares"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors group"
                            >
                                <GitIcon className="w-4 h-4 text-gray-200 group-hover:text-cyan-400 transition-colors" />
                                <span>GITHUB</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/robson-soares-b22513170/?isSelfProfile=true"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-1.5 text-gray-400 hover:text-blue-400 transition-colors group"
                            >
                                <LinkedinIcon className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                                <span>LINKEDIN</span>
                            </a>
                            <a
                                href="mailto:robsoncsoares.1050@gmail.com"
                                className="flex items-center gap-1.5 text-gray-400 hover:text-purple-400 transition-colors group"
                            >
                                <Mail className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                                <span>E-MAIL</span>
                            </a>
                        </div>

                    </motion.div>
                </div>
            </section>

            <DialogResume
                isOpen={isResumeOpen}
                onClose={() => setIsResumeOpen(false)}
            />
        </>
    );
}