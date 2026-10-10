"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Send, Home, User, Cpu, FolderGit2, Briefcase, Layers, Mail } from "lucide-react";
import { AlternarTema } from "@/components/common/AlternarTema";
import Image from "next/image";

const navLinks = [
    { name: "Início", href: "#hero", icon: Home },
    { name: "Sobre", href: "#about", icon: User },
    { name: "Habilidades", href: "#skills", icon: Cpu },
    { name: "Projetos", href: "#projects", icon: FolderGit2 },
    { name: "Experiência", href: "#experience", icon: Briefcase },
    { name: "Serviços", href: "#services", icon: Layers },
];

export function Navbar() {
    const [activeSection, setActiveSection] = useState("hero");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navLinks.map((link) => link.href.substring(1));
            const scrollPosition = window.scrollY + 250;

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
            const navOffset = targetId === "about" ? 235 : 90;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - navOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setMobileMenuOpen(false);
        }
    };

    return (
        <header className="fixed top-4 inset-x-4 z-50 flex justify-center pointer-events-none">
            <motion.nav
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`w-full max-w-[95rem] px-3 sm:px-6 h-16 flex items-center justify-between gap-2 transition-all duration-500 ease-in-out pointer-events-auto ${scrolled
                        ? "bg-slate-950/85 backdrop-blur-xl rounded-2xl shadow-2xl shadow-cyan-950/30 border border-white/10"
                        : "bg-transparent border border-transparent shadow-none"
                    }`}
            >
                {/* 1. Lado Esquerdo: Logótipo*/}
                <div className="flex items-center shrink-0">
                    <a
                        href="#hero"
                        onClick={(e) => handleScrollTo(e, "#hero")}
                        className="flex items-center gap-2.5 text-base font-extrabold tracking-wider text-white group"
                    >
                        <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform bg-slate-900 border border-white/10 shadow-lg">
                            <Image
                                src="/favicon.svg"
                                alt="Logótipo Robson"
                                width={32}
                                height={32}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className="hidden sm:inline-block text-gradient-cyan">
                            Robson<span className="text-white">.dev</span>
                        </span>
                    </a>
                </div>

                {/* 2. Centro: Links de Navegação*/}
                <div className="hidden lg:flex items-center gap-1.5">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleScrollTo(e, link.href)}
                                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 flex items-center justify-center ${isActive ? "text-cyan-300 font-semibold" : "text-slate-400 hover:text-slate-200"
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-active-pill"
                                        className="absolute inset-0 bg-slate-800/80 rounded-xl border border-white/10"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    {isActive && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                                    )}
                                    {link.name}
                                </span>
                            </a>
                        );
                    })}

                    <div className="w-px h-5 bg-white/10 mx-1.5" />

                    <AlternarTema />

                    <a
                        href="#contact"
                        onClick={(e) => handleScrollTo(e, "#contact")}
                        className="hidden md:flex relative overflow-hidden px-4 py-2 text-xs font-extrabold text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 rounded-xl shadow-lg shadow-cyan-500/25 hover:scale-105 hover:brightness-110 active:scale-95 transition-all duration-300 items-center gap-1.5 group cursor-pointer ml-1"
                    >
                        <span className="relative z-10 flex items-center gap-1.5">
                            <span>Contato</span>
                            <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </span>
                    </a>
                </div>

                {/* 3. Lado Direito: Status "Disponível para trabalho" */}
                <div className="hidden xl:flex items-center shrink-0">
                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/[0.07]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-mono text-emerald-400 whitespace-nowrap">
                            Disponível para trabalho
                        </span>
                    </div>
                </div>

                {/* Botão Menu Hambúrguer (Mobile) */}
                <div className="flex items-center lg:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="flex flex-col gap-1.5 p-2 text-slate-400 hover:text-cyan-400 cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-5 h-5 text-cyan-400" />
                        ) : (
                            <Menu className="w-5 h-5 text-current" />
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
                        className="absolute top-20 inset-x-4 glass-card rounded-2xl p-4 flex flex-col gap-2 border border-cyan-500/30 lg:hidden z-50 bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-cyan-950/80 pointer-events-auto"
                    >
                        <ul className="flex flex-col gap-1.5">
                            {navLinks.concat({ name: "Contato", href: "#contact", icon: Mail }).map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                const IconComponent = link.icon;
                                return (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleScrollTo(e, link.href)}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive
                                                    ? "text-cyan-300 bg-slate-800/80 border border-white/10 font-semibold"
                                                    : "text-gray-300 hover:bg-white/5 hover:text-white border border-transparent"
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