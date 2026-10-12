"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { navLinks } from "./navLinks";

interface NavbarDesktopLinksProps {
    activeSection: string;
    onNavigate: (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => void;
}

export function NavbarDesktopLinks({
    activeSection,
    onNavigate,
}: NavbarDesktopLinksProps) {
    return (
        <div className="relative z-10 hidden lg:flex flex-1 min-w-0 items-center justify-center gap-1.5">
            {navLinks.map((link) => {
                const isActive =
                    activeSection === link.href.substring(1);

                return (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => onNavigate(e, link.href)}
                        className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center justify-center ${isActive
                                ? "text-cyan-300 font-semibold"
                                : "text-slate-400 hover:text-slate-200"
                            }`}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="navbar-active-pill"
                                className="absolute inset-0 bg-slate-800/80 rounded-md border border-white/10"
                                transition={{
                                    type: "spring",
                                    stiffness: 380,
                                    damping: 30,
                                }}
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

            <a
                href="#contact"
                onClick={(e) => onNavigate(e, "#contact")}
                className="relative z-20 isolate shrink-0 whitespace-nowrap overflow-hidden px-4 py-2 text-xs font-extrabold text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 rounded-md shadow-lg shadow-cyan-500/25 hover:scale-105 hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center gap-1.5 group cursor-pointer ml-1"
            >
                <span className="relative z-10 flex items-center gap-1.5">
                    <span>Contato</span>
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </span>
            </a>
        </div>
    );
}