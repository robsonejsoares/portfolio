
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
        <div className="relative z-10 hidden min-w-0 flex-1 items-center justify-center gap-1.5 lg:flex">
            {navLinks.map((link) => {
                const isActive =
                    activeSection === link.href.slice(1);

                return (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={(event) =>
                            onNavigate(event, link.href)
                        }
                        aria-current={
                            isActive ? "location" : undefined
                        }
                        className={`relative flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                            isActive
                                ? "font-semibold text-cyan-300"
                                : "text-slate-400 hover:text-slate-200"
                        }`}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="navbar-active-pill"
                                className="absolute inset-0 rounded-md border border-white/10 bg-slate-800/80"
                                transition={{
                                    type: "spring",
                                    stiffness: 380,
                                    damping: 30,
                                }}
                            />
                        )}

                        <span className="relative z-10 flex items-center gap-2">
                            {isActive && (
                                <span
                                    aria-hidden="true"
                                    className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"
                                />
                            )}

                            {link.name}
                        </span>
                    </a>
                );
            })}

            {/* Botão de contato */}
            <a
                href="#contact"
                onClick={(event) =>
                    onNavigate(event, "#contact")
                }
                className="group relative z-20 ml-1 flex shrink-0 items-center gap-1.5 overflow-hidden whitespace-nowrap rounded-md bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-4 py-2 text-xs font-extrabold text-black shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95"
            >
                <span className="relative z-10 flex items-center gap-1.5">
                    <span>Contato</span>

                    <Send
                        aria-hidden="true"
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                </span>
            </a>
        </div>
    );
}
