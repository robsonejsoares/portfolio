"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Send, Home, User, Cpu, FolderGit2, Briefcase, Layers, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/common/ThemeToggle";

const navLinks = [
    { name: "Início", href: "#hero", icon: Home },
    { name: "Sobre", href: "#about", icon: User },
    { name: "Habilidades", href: "#skills", icon: Cpu },
    { name: "Projetos", href: "#projects", icon: FolderGit2 },
    { name: "Experiência", href: "#experience", icon: Briefcase },
    { name: "Serviços", href: "#services", icon: Layers },
    { name: "Contato", href: "#contact", icon: Mail },
];

export function Navbar() {
    const [activeSection, setActiveSection] = useState("hero");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navLinks.map((link) => link.href.substring(1));
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setMobileMenuOpen(false);
        }
    };

    return (
        <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
            <motion.nav
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`w-full max-w-6xl glass-card rounded-xl px-4 py-2.5 flex items-center justify-between transition-all duration-300 ${
                    scrolled 
                        ? "shadow-2xl shadow-cyan-950/40 border-cyan-500/40 bg-slate-950/85 backdrop-blur-md" 
                        : "border-white/10"
                }`}
            >
                {/* Logótipo */}
                <a
                    href="#hero"
                    onClick={(e) => handleScrollTo(e, "#hero")}
                    className="flex items-center gap-2 text-base font-extrabold tracking-wider text-white pl-2 group"
                >
                    <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-xs font-black text-black group-hover:scale-105 transition-transform">
                        RS
                    </span>
                    <span className="hidden sm:inline-block text-gradient-cyan">
                        Robson<span className="text-white">.dev</span>
                    </span>
                </a>

                {/* Links Desktop */}
                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleScrollTo(e, link.href)}
                                    className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all duration-300 rounded-xl flex items-center gap-1.5 ${
                                        isActive
                                            ? "text-cyan-400 font-semibold"
                                            : "text-gray-400 hover:text-cyan-300 hover:bg-white/5 hover:shadow-sm hover:shadow-cyan-500/10"
                                    }`}
                                >
                                    {isActive && (
                                        <>
                                            <motion.span
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/30 rounded-xl -z-10"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                            <span className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                                        </>
                                    )}
                                    {link.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Lado Direito */}
                <div className="flex items-center gap-1.5">
                    {/* Estado Online */}
                    <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mr-1">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-xl bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-xl h-2 w-2 bg-emerald-500" />
                        </span>
                        Disponível para trabalho
                    </div>

                    <div className="flex items-center gap-1.5 pl-1 border-l border-white/10">
                        {/* Componente de Tema */}
                        <ThemeToggle />

                        {/* Botão Contrate-me */}
                        <a
                            href="#contact"
                            onClick={(e) => handleScrollTo(e, "#contact")}
                            className="relative overflow-hidden px-4 py-2 text-xs font-extrabold text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 rounded-xl shadow-lg shadow-cyan-500/25 hover:scale-105 hover:brightness-110 hover:shadow-[0_0_35px_rgba(6,182,212,0.9)] active:scale-95 transition-all duration-300 flex items-center gap-1.5 group cursor-pointer"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
                            
                            <span className="relative z-10 flex items-center gap-1.5">
                                <span>Contrate-me</span>
                                <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </span>
                        </a>
                    </div>

                    {/* Botão Menu Hambúrguer (Mobile) com destaque cyberpunk */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] active:scale-95 transition-all ml-1.5 cursor-pointer flex items-center justify-center group"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                        ) : (
                            <Menu className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                        )}
                    </button>
                </div>
            </motion.nav>

            {/* Menu Dropdown Mobile */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-20 inset-x-4 glass-card rounded-2xl p-4 flex flex-col gap-2 border border-cyan-500/30 md:hidden z-50 bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-cyan-950/80"
                    >
                        <ul className="flex flex-col gap-1.5">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                const IconComponent = link.icon;
                                return (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleScrollTo(e, link.href)}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                                                isActive
                                                    ? "bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-semibold"
                                                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                                            }`}
                                        >
                                            <IconComponent className={`w-4 h-4 ${isActive ? "text-cyan-400" : "text-gray-400"}`} />
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}