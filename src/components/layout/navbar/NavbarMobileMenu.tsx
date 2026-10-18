
"use client";

import { useEffect, useRef } from "react";
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
    const containerRef = useRef<HTMLDivElement>(null);
    const toggleButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        const handlePointerDown = (event: PointerEvent) => {
            const target = event.target;

            if (
                target instanceof Node &&
                !containerRef.current?.contains(target)
            ) {
                toggleButtonRef.current?.focus();
                onToggle();
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                event.preventDefault();
                toggleButtonRef.current?.focus();
                onToggle();
            }
        };

        document.addEventListener(
            "pointerdown",
            handlePointerDown
        );

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener(
                "pointerdown",
                handlePointerDown
            );

            document.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [isOpen, onToggle]);

    return (
        <div
            ref={containerRef}
            className="relative z-10 flex shrink-0 items-center lg:hidden"
        >
            {/* Botão de abrir e fechar */}
            <button
                ref={toggleButtonRef}
                type="button"
                onClick={onToggle}
                className="flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-md text-slate-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
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
                        className="h-6 w-6"
                    />
                )}
            </button>

            {/* Menu mobile */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-navigation"
                        initial={{
                            opacity: 0,
                            y: -8,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -8,
                        }}
                        transition={{
                            duration: 0.18,
                        }}
                        className="glass-card fixed right-4 top-[5.25rem] z-[60] flex w-[min(20rem,calc(100vw-2rem))] max-w-full flex-col gap-2 overflow-y-auto overscroll-contain rounded-md border border-cyan-500/30 bg-slate-950/95 p-3 shadow-2xl shadow-cyan-950/80 backdrop-blur-xl sm:p-4"
                        style={{
                            maxHeight: "calc(100dvh - 6.25rem)",
                        }}
                    >
                        <ul className="flex min-w-0 flex-col gap-1.5">
                            {mobileNavLinks.map((link) => {
                                const isActive =
                                    activeSection ===
                                    link.href.slice(1);

                                const Icon = link.icon;

                                return (
                                    <li
                                        key={link.href}
                                        className="min-w-0"
                                    >
                                        <a
                                            href={link.href}
                                            onClick={(event) =>
                                                onNavigate(
                                                    event,
                                                    link.href
                                                )
                                            }
                                            aria-current={
                                                isActive
                                                    ? "location"
                                                    : undefined
                                            }
                                            className={`flex min-h-11 min-w-0 items-center gap-3 rounded-md border px-3 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 sm:px-4 ${
                                                isActive
                                                    ? "border-white/10 bg-slate-800/80 font-semibold text-cyan-300"
                                                    : "border-transparent text-gray-300 hover:bg-white/5 hover:text-white"
                                            }`}
                                        >
                                            <Icon
                                                aria-hidden="true"
                                                className={`h-4 w-4 shrink-0 ${
                                                    isActive
                                                        ? "text-cyan-400"
                                                        : "text-gray-400"
                                                }`}
                                            />

                                            <span className="min-w-0 break-words">
                                                {link.name}
                                            </span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
