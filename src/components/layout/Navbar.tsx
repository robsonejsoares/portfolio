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

    // Evita que o scroll sobrescreva a seleção durante a navegação suave.
    const targetSectionRef = useRef<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Aguarda a navegação suave terminar antes de recalcular a seção.
            if (targetSectionRef.current !== null) {
                return;
            }

            const scrollPosition = window.scrollY + 150;
            const documentHeight =
                document.documentElement.scrollHeight;
            const viewportBottom =
                window.scrollY + window.innerHeight;

            // No final da página, Contato deve ser a seção ativa.
            if (viewportBottom >= documentHeight - 30) {
                const contact = document.getElementById("contact");

                if (contact) {
                    setActiveSection("contact");
                    return;
                }
            }

            let currentSection = "hero";
            let closestTop = Number.NEGATIVE_INFINITY;

            // Inclui Contato, que não faz parte de navLinks.
            const sectionLinks = [
                ...navLinks,
                { name: "Contato", href: "#contact" },
            ];

            for (const link of sectionLinks) {
                const sectionId = link.href.substring(1);
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
            // Libera a detecção automática quando a animação de scroll termina.
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

    const handleScrollTo = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();

        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);

        if (!element) {
            console.warn(
                `A seção com id="${targetId}" não foi encontrada.`
            );
            return;
        }

        // Atualiza a seleção antes de começar a rolagem.
        targetSectionRef.current = targetId;
        setActiveSection(targetId);

        const navOffset = 90;
        const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
        const targetPosition = Math.max(
            0,
            elementPosition - navOffset
        );

        // Se já estiver no destino, não precisa aguardar outro scrollend.
        if (Math.abs(window.scrollY - targetPosition) < 2) {
            targetSectionRef.current = null;
        }

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });

        setMobileMenuOpen(false);
    };

    return (
        <>
            {/* Fundo fixo da Navbar */}
            <div
                aria-hidden="true"
                className={`fixed top-0 left-0 right-0 h-17 z-[40] pointer-events-none transition-colors duration-300 ${
                    scrolled ? "bg-slate-950" : "bg-transparent"
                }`}
            />

            <header className="fixed top-1 inset-x-4 z-50 flex justify-center pointer-events-none">
                <motion.nav
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full max-w-[95rem] h-16 px-3 sm:px-6 flex items-center justify-between gap-2 pointer-events-auto"
                >
                    {/* Fundo visual */}
                    <div
                        aria-hidden="true"
                        className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-12 rounded-md pointer-events-none transition-all duration-500 ease-in-out ${
                            scrolled
                                ? "bg-slate-950/85 backdrop-blur-xl shadow-2xl shadow-cyan-950/30 border border-white/10"
                                : "bg-transparent border border-transparent shadow-none"
                        }`}
                    />

                    {/* Esquerda: Logótipo */}
                    <div className="relative z-10 flex items-center shrink-0">
                        <BrandLogo
                            tamanho="navbar"
                            aoClicar={(e) => handleScrollTo(e, "#hero")}
                        />
                    </div>

                    {/* Centro: Links desktop */}
                    <NavbarDesktopLinks
                        activeSection={activeSection}
                        onNavigate={handleScrollTo}
                    />

                    {/* Direita: Status e tema no desktop */}
                    <div className="relative z-10 hidden lg:flex items-center gap-3 shrink-0">
                        <div className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/[0.07]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />

                            <span className="text-xs font-mono text-emerald-400 whitespace-nowrap">
                                Disponível para trabalho
                            </span>
                        </div>

                        <AlternarTema />
                    </div>

                    {/* Direita: Tema e menu mobile */}
                    <div className="relative z-10 flex lg:hidden items-center gap-2 ml-auto">
                        <AlternarTema />

                        <NavbarMobileMenu
                            activeSection={activeSection}
                            isOpen={mobileMenuOpen}
                            onToggle={() =>
                                setMobileMenuOpen((previous) => !previous)
                            }
                            onNavigate={handleScrollTo}
                        />
                    </div>
                </motion.nav>
            </header>
        </>
    );
}