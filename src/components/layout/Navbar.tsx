"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { AlternarTema } from "@/components/common/AlternarTema";
import { BrandLogo } from "@/components/common/BrandLogo";

import { NavbarDesktopLinks } from "./navbar/NavbarDesktopLinks";
import { NavbarMobileMenu } from "./navbar/NavbarMobileMenu";
import { navLinks } from "./navbar/navLinks";

export function Navbar() {
    const [activeSection, setActiveSection] = useState("hero");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const targetSectionRef = useRef<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            if (targetSectionRef.current !== null) {
                return;
            }

            const scrollPosition = window.scrollY + 150;
            const documentHeight =
                document.documentElement.scrollHeight;
            const viewportBottom =
                window.scrollY + window.innerHeight;

            if (viewportBottom >= documentHeight - 30) {
                const contact = document.getElementById("contact");

                if (contact) {
                    setActiveSection("contact");
                    return;
                }
            }

            let currentSection = "hero";
            let closestTop = Number.NEGATIVE_INFINITY;

            const sectionLinks = [
                ...navLinks,
                { name: "Contato", href: "#contact" },
            ];

            for (const link of sectionLinks) {
                const sectionId = link.href.slice(1);
                const element = document.getElementById(sectionId);

                if (!element) continue;

                const sectionTop =
                    element.getBoundingClientRect().top +
                    window.scrollY;

                if (
                    sectionTop <= scrollPosition &&
                    sectionTop > closestTop
                ) {
                    closestTop = sectionTop;
                    currentSection = sectionId;
                }
            }

            setActiveSection((previousSection) =>
                previousSection === currentSection
                    ? previousSection
                    : currentSection
            );
        };

        const handleScrollEnd = () => {
            targetSectionRef.current = null;
            handleScroll();
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        window.addEventListener("scrollend", handleScrollEnd);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("scrollend", handleScrollEnd);
        };
    }, []);

    // Fecha o menu mobile quando a página é rolada.
    useEffect(() => {
        if (!mobileMenuOpen) return;

        const closeMenuOnScroll = () => {
            setMobileMenuOpen(false);
        };

        window.addEventListener("scroll", closeMenuOnScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", closeMenuOnScroll);
        };
    }, [mobileMenuOpen]);

    const handleScrollTo = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();

        const targetId = href.slice(1);
        const element = document.getElementById(targetId);

        if (!element) {
            console.warn(
                `A seção com id="${targetId}" não foi encontrada.`
            );
            setMobileMenuOpen(false);
            return;
        }

        targetSectionRef.current = targetId;
        setActiveSection(targetId);
        setMobileMenuOpen(false);

        const navOffset = 90;

        const elementPosition =
            element.getBoundingClientRect().top +
            window.scrollY;

        const targetPosition = Math.max(
            0,
            elementPosition - navOffset
        );

        if (Math.abs(window.scrollY - targetPosition) < 2) {
            targetSectionRef.current = null;
        }

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    };

    return (
        <>
            {/* Fundo fixo da navbar */}
            <div
                aria-hidden="true"
                className={`pointer-events-none fixed inset-x-0 top-0 z-[40] h-[68px] transition-colors duration-300 ${scrolled ? "bg-slate-950" : "bg-transparent"
                    }`}
            />

            <header className="pointer-events-none fixed inset-x-4 top-1 z-50 flex justify-center">
                <motion.nav
                    aria-label="Navegação principal"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="pointer-events-auto relative flex h-16 w-full max-w-[95rem] items-center justify-between gap-2 px-3 sm:px-6"
                >
                    {/* Fundo visual */}
                    <div
                        aria-hidden="true"
                        className={`pointer-events-none absolute left-0 right-0 top-1/2 h-12 -translate-y-1/2 rounded-md border transition-all duration-500 ease-in-out ${scrolled
                                ? "border-white/10 bg-slate-950/85 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl"
                                : "border-transparent bg-transparent shadow-none"
                            }`}
                    />

                    {/* Logotipo */}
                    <div className="relative z-10 flex shrink-0 items-center">
                        <BrandLogo
                            tamanho="navbar"
                            aoClicar={(e) => handleScrollTo(e, "#hero")}
                        />
                    </div>

                    {/* Links desktop */}
                    <NavbarDesktopLinks
                        activeSection={activeSection}
                        onNavigate={handleScrollTo}
                    />

                    {/* Status e tema desktop */}
                    <div className="relative z-10 hidden shrink-0 items-center gap-3 lg:flex">
                        <motion.div
                            initial="recolhido"
                            whileHover="expandido"
                            className="flex items-center gap-2"
                            variants={{
                                recolhido: {
                                    width: 12,
                                },
                                expandido: {
                                    width: 105,
                                },
                            }}
                            transition={{
                                duration: 0.25,
                                ease: "easeInOut",
                            }}
                            role="status"
                            aria-label="Disponível"
                        >
                            {/* Bolinha verde */}
                            <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center">
                                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400/60 motion-reduce:animate-none" />
                                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                            </span>

                            {/* Texto exibido ao passar o mouse */}
                            <motion.span
                                variants={{
                                    recolhido: {
                                        opacity: 0,
                                    },
                                    expandido: {
                                        opacity: 1,
                                    },
                                }}
                                transition={{
                                    duration: 0.2,
                                }}
                                className="whitespace-nowrap font-mono text-xs text-emerald-400"
                            >
                                Disponível
                            </motion.span>
                        </motion.div>

                        {/* <AlternarTema /> */}
                    </div>

                </motion.nav>
            </header>
        </>
    );
}