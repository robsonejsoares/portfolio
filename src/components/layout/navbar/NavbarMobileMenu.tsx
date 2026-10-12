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
            <button
                type="button"
                onClick={onToggle}
                className="flex items-center justify-center p-2 rounded-md text-slate-400 hover hover/5 transition-colors cursor-pointer"
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
            >
                {isOpen ? (
                    <X className="w-5 h-5 text-cyan-400" />
                ) : (
                    <Menu className="w-5 h-5 text-current" />
                )}
            </button>

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
                        className="absolute top-20 inset-x-4 glass-card rounded-xl p-4 flex flex-col gap-2 border border-cyan-500/30 lg:hidden z-50 bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-cyan-950/80 pointer-events-auto"
                    >
                        <ul className="flex flex-col gap-1.5">
                            {mobileNavLinks.map((link) => {
                                const isActive =
                                    activeSection === link.href.substring(1);

                                const Icon = link.icon;

                                return (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            onClick={(e) =>
                                                onNavigate(e, link.href)
                                            }
                                            className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${isActive
                                                    ? "text-cyan-300 bg-slate-800/80 border border-white/10 font-semibold"
                                                    : "text-gray-300 hover:bg-white/5 hover:text-white border border-transparent"
                                                }`}
                                        >
                                            <Icon
                                                className={`w-4 h-4 ${isActive
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