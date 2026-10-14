
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
        <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
                type="button"
                onClick={aoAbrirCurriculo}
                disabled={carregando || curriculoAberto}
                aria-haspopup="dialog"
                aria-expanded={curriculoAberto}
                className="group relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-md bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-[0_0_35px_rgba(6,182,212,0.9)] active:scale-95 disabled:cursor-wait disabled:opacity-70"
            >
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
                />

                <span className="relative z-10 flex items-center gap-2">
                    <span>Ver currículo</span>
                    <ArrowRight
                        size={17}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </span>
            </button>

            <a
                href="#contact"
                onClick={aoEntrarEmContato}
                className="group relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-md border border-white/10 px-6 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 glass-card hover:scale-105 hover:border-cyan-400 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-95"
            >
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
                />

                <span className="relative z-10 flex items-center gap-2">
                    <span>Entrar em contato</span>
                    <ArrowRight
                        size={17}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </span>
            </a>
        </div>
    );
}
