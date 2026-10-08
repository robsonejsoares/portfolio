"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
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

    return (
        <>
            {/* Keyframes com raios otimizados para a roda externa mais compacta */}
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
                    from { transform: rotate(0deg) translateX(145px) rotate(0deg); }
                    to { transform: rotate(360deg) translateX(145px) rotate(-360deg); }
                }
                @keyframes orbit-r2 {
                    from { transform: rotate(0deg) translateX(190px) rotate(0deg); }
                    to { transform: rotate(-360deg) translateX(190px) rotate(360deg); }
                }
            `}</style>

            <CyberLoader isLoading={isLoading} text="ACESSANDO CURRÍCULO..." />

            <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center px-4 overflow-hidden">
                <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

                    {/* Lado Esquerdo: Avatar + Sistema Orbital Compacto */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 flex justify-center relative"
                    >
                        <div className="relative flex items-center justify-center" style={{ width: "440px", height: "440px" }}>

                            {/* Anel Tracejado Interno */}
                            <div
                                className="absolute rounded-full border border-dashed pointer-events-none"
                                style={{
                                    borderColor: "rgb(0, 245, 255)",
                                    opacity: 0.12,
                                    top: "50%",
                                    left: "50%",
                                    width: "290px",
                                    height: "290px",
                                    marginTop: "-145px",
                                    marginLeft: "-145px",
                                    animation: "rotate-ring 28s linear infinite",
                                }}
                            />

                            {/* Anel Tracejado Externo Reduzido */}
                            <div
                                className="absolute rounded-full border border-dashed pointer-events-none"
                                style={{
                                    borderColor: "rgb(139, 92, 246)",
                                    opacity: 0.07,
                                    top: "50%",
                                    left: "50%",
                                    width: "380px",
                                    height: "380px",
                                    marginTop: "-190px",
                                    marginLeft: "-190px",
                                    animation: "rotate-ring-rev 45s linear infinite",
                                }}
                            />

                            {/* --- ORBITA 1 --- */}
                            <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-14px", marginLeft: "-14px", animation: "orbit-r1 24s linear 0s infinite", zIndex: 10 }}>
                                <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono whitespace-nowrap backdrop-blur-sm" style={{ background: "rgba(227, 79, 38, 0.094)", border: "1px solid rgba(227, 79, 38, 0.25)", color: "rgb(227, 79, 38)", boxShadow: "rgba(227, 79, 38, 0.19) 0px 0px 8px" }}>
                                    <span>🌐</span><span>HTML5</span>
                                </div>
                            </div>
                            <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-14px", marginLeft: "-14px", animation: "orbit-r1 24s linear -2.66s infinite", zIndex: 10 }}>
                                <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono whitespace-nowrap backdrop-blur-sm" style={{ background: "rgba(21, 114, 182, 0.094)", border: "1px solid rgba(21, 114, 182, 0.25)", color: "rgb(21, 114, 182)", boxShadow: "rgba(21, 114, 182, 0.19) 0px 0px 8px" }}>
                                    <span>🎨</span><span>CSS3 / SC</span>
                                </div>
                            </div>
                            <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-14px", marginLeft: "-14px", animation: "orbit-r1 24s linear -5.33s infinite", zIndex: 10 }}>
                                <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono whitespace-nowrap backdrop-blur-sm" style={{ background: "rgba(247, 223, 30, 0.094)", border: "1px solid rgba(247, 223, 30, 0.25)", color: "rgb(247, 223, 30)", boxShadow: "rgba(247, 223, 30, 0.19) 0px 0px 8px" }}>
                                    <span>⚡</span><span>JavaScript</span>
                                </div>
                            </div>
                            <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-14px", marginLeft: "-14px", animation: "orbit-r1 24s linear -8.0s infinite", zIndex: 10 }}>
                                <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono whitespace-nowrap backdrop-blur-sm" style={{ background: "rgba(97, 218, 251, 0.094)", border: "1px solid rgba(97, 218, 251, 0.25)", color: "rgb(97, 218, 251)", boxShadow: "rgba(97, 218, 251, 0.19) 0px 0px 8px" }}>
                                    <span>⚛️</span><span>React.js</span>
                                </div>
                            </div>
                            <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-14px", marginLeft: "-14px", animation: "orbit-r1 24s linear -10.66s infinite", zIndex: 10 }}>
                                <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono whitespace-nowrap backdrop-blur-sm" style={{ background: "rgba(255, 255, 255, 0.094)", border: "1px solid rgba(255, 255, 255, 0.25)", color: "rgb(255, 255, 255)", boxShadow: "rgba(255, 255, 255, 0.19) 0px 0px 8px" }}>
                                    <span>▲</span><span>Next.js</span>
                                </div>
                            </div>
                            <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-14px", marginLeft: "-14px", animation: "orbit-r1 24s linear -13.33s infinite", zIndex: 10 }}>
                                <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono whitespace-nowrap backdrop-blur-sm" style={{ background: "rgba(49, 120, 198, 0.094)", border: "1px solid rgba(49, 120, 198, 0.25)", color: "rgb(49, 120, 198)", boxShadow: "rgba(49, 120, 198, 0.19) 0px 0px 8px" }}>
                                    <span>🔷</span><span>TypeScript</span>
                                </div>
                            </div>
                            <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-14px", marginLeft: "-14px", animation: "orbit-r1 24s linear -16.0s infinite", zIndex: 10 }}>
                                <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono whitespace-nowrap backdrop-blur-sm" style={{ background: "rgba(6, 182, 212, 0.094)", border: "1px solid rgba(6, 182, 212, 0.25)", color: "rgb(6, 182, 212)", boxShadow: "rgba(6, 182, 212, 0.19) 0px 0px 8px" }}>
                                    <span>💨</span><span>Tailwind</span>
                                </div>
                            </div>
                            <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-14px", marginLeft: "-14px", animation: "orbit-r1 24s linear -18.66s infinite", zIndex: 10 }}>
                                <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono whitespace-nowrap backdrop-blur-sm" style={{ background: "rgba(119, 123, 180, 0.094)", border: "1px solid rgba(119, 123, 180, 0.25)", color: "rgb(119, 123, 180)", boxShadow: "rgba(119, 123, 180, 0.19) 0px 0px 8px" }}>
                                    <span>🐘</span><span>Java</span>
                                </div>
                            </div>
                            <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-14px", marginLeft: "-14px", animation: "orbit-r1 24s linear -21.33s infinite", zIndex: 10 }}>
                                <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono whitespace-nowrap backdrop-blur-sm" style={{ background: "rgba(55, 118, 171, 0.094)", border: "1px solid rgba(55, 118, 171, 0.25)", color: "rgb(55, 118, 171)", boxShadow: "rgba(55, 118, 171, 0.19) 0px 0px 8px" }}>
                                    <span>🐍</span><span>Python</span>
                                </div>
                            </div>

                            {/* --- ORBITA 2 --- */}
                            <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-14px", marginLeft: "-14px", animation: "orbit-r2 36s linear 0s infinite", zIndex: 10 }}>
                                <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono whitespace-nowrap backdrop-blur-sm" style={{ background: "rgba(51, 153, 51, 0.094)", border: "1px solid rgba(51, 153, 51, 0.25)", color: "rgb(51, 153, 51)", boxShadow: "rgba(51, 153, 51, 0.19) 0px 0px 8px" }}>
                                    <span>🟢</span><span>Node.js</span>
                                </div>
                            </div>
                            <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-14px", marginLeft: "-14px", animation: "orbit-r2 36s linear -4.5s infinite", zIndex: 10 }}>
                                <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono whitespace-nowrap backdrop-blur-sm" style={{ background: "rgba(0, 89, 156, 0.094)", border: "1px solid rgba(0, 89, 156, 0.25)", color: "rgb(0, 89, 156)", boxShadow: "rgba(0, 89, 156, 0.19) 0px 0px 8px" }}>
                                    <span>⚙️</span><span>Spring Boot</span>
                                </div>
                            </div>
                            <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-14px", marginLeft: "-14px", animation: "orbit-r2 36s linear -9.0s infinite", zIndex: 10 }}>
                                <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono whitespace-nowrap backdrop-blur-sm" style={{ background: "rgba(68, 121, 161, 0.094)", border: "1px solid rgba(68, 121, 161, 0.25)", color: "rgb(68, 121, 161)", boxShadow: "rgba(68, 121, 161, 0.19) 0px 0px 8px" }}>
                                    <span>🗄️</span><span>PostgreSQL</span>
                                </div>
                            </div>
                            <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-14px", marginLeft: "-14px", animation: "orbit-r2 36s linear -13.5s infinite", zIndex: 10 }}>
                                <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono whitespace-nowrap backdrop-blur-sm" style={{ background: "rgba(240, 80, 50, 0.094)", border: "1px solid rgba(240, 80, 50, 0.25)", color: "rgb(240, 80, 50)", boxShadow: "rgba(240, 80, 50, 0.19) 0px 0px 8px" }}>
                                    <span>🐙</span><span>Docker</span>
                                </div>
                            </div>
                            <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-14px", marginLeft: "-14px", animation: "orbit-r2 36s linear -18.0s infinite", zIndex: 10 }}>
                                <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono whitespace-nowrap backdrop-blur-sm" style={{ background: "rgba(16, 185, 129, 0.094)", border: "1px solid rgba(16, 185, 129, 0.25)", color: "rgb(16, 185, 129)", boxShadow: "rgba(16, 185, 129, 0.19) 0px 0px 8px" }}>
                                    <span>🔍</span><span>Cloud</span>
                                </div>
                            </div>
                            <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-14px", marginLeft: "-14px", animation: "orbit-r2 36s linear -22.5s infinite", zIndex: 10 }}>
                                <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono whitespace-nowrap backdrop-blur-sm" style={{ background: "rgba(43, 87, 154, 0.094)", border: "1px solid rgba(43, 87, 154, 0.25)", color: "rgb(43, 87, 154)", boxShadow: "rgba(43, 87, 154, 0.19) 0px 0px 8px" }}>
                                    <span>📝</span><span>Mobile</span>
                                </div>
                            </div>
                            <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-14px", marginLeft: "-14px", animation: "orbit-r2 36s linear -27.0s infinite", zIndex: 10 }}>
                                <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono whitespace-nowrap backdrop-blur-sm" style={{ background: "rgba(33, 115, 70, 0.094)", border: "1px solid rgba(33, 115, 70, 0.25)", color: "rgb(33, 115, 70)", boxShadow: "rgba(33, 115, 70, 0.19) 0px 0px 8px" }}>
                                    <span>📊</span><span>Figma</span>
                                </div>
                            </div>
                            <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-14px", marginLeft: "-14px", animation: "orbit-r2 36s linear -31.5s infinite", zIndex: 10 }}>
                                <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-mono whitespace-nowrap backdrop-blur-sm" style={{ background: "rgba(210, 71, 38, 0.094)", border: "1px solid rgba(210, 71, 38, 0.25)", color: "rgb(210, 71, 38)", boxShadow: "rgba(210, 71, 38, 0.19) 0px 0px 8px" }}>
                                    <span>📑</span><span>Git & GitHub</span>
                                </div>
                            </div>

                            {/* --- CARTÃO CENTRAL DO AVATAR --- */}
                            <div
                                style={{
                                    transformStyle: "preserve-3d",
                                    perspective: "600px",
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    width: "200px",
                                    height: "240px",
                                    marginTop: "-120px",
                                    marginLeft: "-100px"
                                }}
                                className="group cursor-pointer"
                            >
                                <div style={{ width: "100%", height: "100%", position: "relative" }} className="transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                                    <div className="absolute inset-0 rounded-3xl blur-2xl opacity-35 scale-90" style={{ background: "linear-gradient(135deg, rgb(0, 245, 255), rgb(139, 92, 246))" }}></div>
                                    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                                        <img
                                            src="/avatar.jpg"
                                            alt={personal.name}
                                            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                    {/* Lado Direito: Informações, Typewriter & Botões */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-7 flex flex-col gap-6"
                    >
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2.5 py-1 rounded-xl text-[11px] font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                {personal.status.toUpperCase()}
                            </span>
                            <span className="px-2.5 py-1 rounded-xl text-[11px] font-medium bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5">
                                <MapPin className="w-3 h-3 text-cyan-400" />
                                {personal.location}
                            </span>
                        </div>

                        <p className="text-xs font-mono text-slate-600 tracking-widest">

                            {"// "}Full Stack & Cloud Developer
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
                            {personal.stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.03 }}
                                    className="glass-card p-4 rounded-2xl border border-white/10 text-center flex flex-col justify-center bg-slate-900/40 hover:border-cyan-500/40 transition-colors"
                                >
                                    <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
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