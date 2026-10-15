"use client";

import { ArrowRight } from "lucide-react";

interface AcoesHeroProps {
    aoAbrirCurriculo: () => void;
    carregando: boolean;
    curriculoAberto: boolean;
    aoEntrarEmContato: (
        event: React.MouseEvent<HTMLAnchorElement>,
    ) => void;
}

export function AcoesHero({
    aoAbrirCurriculo,
    carregando,
    curriculoAberto,
    aoEntrarEmContato,
}: AcoesHeroProps) {
    return (
        <div className="flex min-w-0 flex-row items-stretch gap-2 pt-1 sm:gap-4 sm:pt-2">
            {/* Botão Ver currículo */}
            <button
                type="button"
                onClick={aoAbrirCurriculo}
                disabled={carregando || curriculoAberto}
                aria-haspopup="dialog"
                aria-expanded={curriculoAberto}
                className="group relative flex min-h-11 min-w-0 flex-1 cursor-pointer items-center justify-center gap-1 overflow-hidden rounded-lg bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-2 py-2 text-xs font-semibold text-black shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_35px_rgba(6,182,212,0.9)] active:scale-[0.98] disabled:cursor-wait disabled:opacity-70 min-[420px]:gap-2 min-[420px]:px-4 min-[420px]:text-sm min-[420px]:hover:scale-105"
            >
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
                />

                <span className="relative z-10 flex min-w-0 items-center justify-center gap-1 min-[420px]:gap-2">
                    <span className="whitespace-nowrap">
                        Ver currículo
                    </span>

                    <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    />
                </span>
            </button>

            {/* Botão Entrar em contato */}
            <a
                href="#contact"
                onClick={aoEntrarEmContato}
                className="glass-card group relative flex min-h-11 min-w-0 flex-1 cursor-pointer items-center justify-center gap-1 overflow-hidden rounded-lg border border-white/10 px-2 py-2 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-[0.98] min-[420px]:gap-2 min-[420px]:px-4 min-[420px]:text-sm min-[420px]:hover:scale-105"
            >
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
                />

                <span className="relative z-10 flex min-w-0 items-center justify-center gap-1 min-[420px]:gap-2">
                    <span className="whitespace-nowrap">
                        Entrar em contato
                    </span>

                    <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    />
                </span>
            </a>
        </div>
    );
}