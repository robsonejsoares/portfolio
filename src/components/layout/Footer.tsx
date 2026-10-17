"use client";

import Image from "next/image";

import { RedesSociais } from "@/components/redes-sociais/RedesSociais";

export function Footer() {
    const currentYear = 2026;

    return (
        <footer className="pointer-events-auto fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-slate-950/90 px-3 py-1 pb-[calc(0.25rem+env(safe-area-inset-bottom))] shadow-2xl backdrop-blur-xl sm:px-6 sm:py-2 sm:pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
            <div className="mx-auto flex max-w-7xl flex-row items-center justify-between gap-2 font-mono sm:gap-4">
                {/* Esquerda: Logo */}
                <div className="flex min-w-0 shrink items-center">
                    <a
                        href="#hero"
                        aria-label="Robson.dev — voltar ao início"
                        className="group flex items-center gap-1.5 text-sm font-extrabold tracking-wider text-white sm:gap-2"
                    >
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-md border border-white/10 bg-slate-900 shadow-lg transition-transform group-hover:scale-105 sm:h-7 sm:w-7">
                            <Image
                                src="/favicon.svg"
                                alt="Logótipo Robson"
                                width={24}
                                height={24}
                                className="h-full w-full object-contain"
                            />
                        </div>

                        <span className="text-gradient-cyan whitespace-nowrap text-[10px] sm:text-sm">
                            Robson<span className="text-white">.dev</span>
                        </span>
                    </a>
                </div>

                {/* Centro: Copyright */}
                <div className="min-w-0 text-center">
                    <a
                        href="https://www.linkedin.com/in/robson-soares-b22513170/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whitespace-nowrap text-[9px] font-semibold text-cyan-400 transition-colors hover:text-cyan-300 sm:text-xs"
                    >
                        © {currentYear} xcodify
                    </a>
                </div>

                {/* Direita: Componente compartilhado */}
                <div className="flex shrink-0 items-center">
                    <RedesSociais
                        redes={["github", "linkedin"]}
                        mostrarTexto={false}
                        variante="footer"
                    />
                </div>
            </div>
        </footer>
    );

}