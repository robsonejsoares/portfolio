"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { mobileNavLinks } from "./navLinks";

interface NavbarMobileMenuProps {
    activeSection: string;
    isOpen: boolean;
    onToggle: () => void;
    onNavigate: (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => void;
}

export function NavbarMobileMenu({
    activeSection,
    isOpen,
    onToggle,
    onNavigate,
}: NavbarMobileMenuProps) {
    return (
        <>
            {/* Botão de abrir e fechar */}
            <button
                type="button"
                onClick={onToggle}
                className="flex cursor-pointer items-center justify-center rounded-md p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
            >
                {isOpen ? (
                    <X
                        aria-hidden="true"
                        className="h-5 w-5 text-cyan-400"
                    />
                ) : (
                    <Menu
                        aria-hidden="true"
                        className="h-5 w-5 text-current"
                    />
                )}
            </button>

            {/* Menu mobile animado */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-navigation"
                        initial={{
                            opacity: 0,
                            y: -10,
                            scale: 0.95,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: -10,
                            scale: 0.95,
                        }}
                        transition={{ duration: 0.2 }}
                        className="glass-card absolute inset-x-4 top-20 z-50 flex flex-col gap-2 rounded-xl border border-cyan-500/30 bg-slate-950/95 p-4 shadow-2xl shadow-cyan-950/80 backdrop-blur-xl lg:hidden"
                    >
                        <ul className="flex flex-col gap-1.5">
                            {mobileNavLinks.map((link) => {
                                const isActive =
                                    activeSection ===
                                    link.href.slice(1);

                                const Icon = link.icon;

                                return (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            onClick={(e) =>
                                                onNavigate(e, link.href)
                                            }
                                            aria-current={
                                                isActive
                                                    ? "location"
                                                    : undefined
                                            }
                                            className={`flex items-center gap-3 rounded-md border px-4 py-3 text-sm font-medium transition-colors ${
                                                isActive
                                                    ? "border-white/10 bg-slate-800/80 font-semibold text-cyan-300"
                                                    : "border-transparent text-gray-300 hover:bg-white/5 hover:text-white"
                                            }`}
                                        >
                                            <Icon
                                                aria-hidden="true"
                                                className={`h-4 w-4 ${
                                                    isActive
                                                        ? "text-cyan-400"
                                                        : "text-gray-400"
                                                }`}
                                            />

                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}