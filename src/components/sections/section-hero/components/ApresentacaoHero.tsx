"use client";

import {
    MapPin,
    Database,
    Server,
    Code2,
    Layers,
} from "lucide-react";

import { dadosPortfolio } from "@/data/dadosPortfolio";
import { useEfeitoDigitacao } from "@/components/sections/section-hero/hooks/useEfeitoDigitacao";

export function ApresentacaoHero() {
    const { personal } = dadosPortfolio;

    const displayText = useEfeitoDigitacao({
        textos: personal.roles,
        velocidadeDigitacao: 80,
        velocidadeApagar: 40,
        tempoEspera: 1800,
    });

    return (
        <div className="flex min-w-0 flex-col gap-4">
            <div className="flex min-w-0 flex-wrap items-center gap-1.5">
                <div
                    aria-label="Tecnologias"
                    className="flex h-4 shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1.5 sm:h-5 sm:gap-1.5 sm:px-2"
                >
                    <Database className="h-2.5 w-2.5 text-emerald-400 sm:h-3 sm:w-3" />
                    <Server className="h-2.5 w-2.5 text-amber-400 sm:h-3 sm:w-3" />
                    <Code2 className="h-2.5 w-2.5 text-purple-400 sm:h-3 sm:w-3" />
                    <Layers className="h-2.5 w-2.5 text-cyan-400 sm:h-3 sm:w-3" />
                </div>

                <span className="flex h-4 min-w-0 max-w-full items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1.5 font-mono text-[8px] leading-none tracking-wide text-slate-400 sm:h-5 sm:px-2 sm:text-[9px]">
                    <MapPin className="h-2.5 w-2.5 shrink-0 animate-pulse text-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.5)] sm:h-3 sm:w-3" />
                    <span className="break-words">{personal.location}</span>
                </span>
            </div>

            <h1 className="break-words text-3xl font-bold leading-tight tracking-tight text-slate-400 min-[420px]:text-4xl sm:text-5xl">
                {personal.name.split(" ")[0]}{" "}
                <span className="text-gradient-cyan">
                    {personal.name.split(" ").slice(1).join(" ")}
                </span>
            </h1>

            <div
                className="flex min-h-8 min-w-0 max-w-full items-center"
                aria-label={displayText}
            >
                <span className="min-w-0 break-words bg-gradient-to-r from-cyan-500 via-sky-400 to-purple-500 bg-clip-text font-mono text-base font-medium tracking-normal text-transparent min-[420px]:text-lg sm:text-xl sm:tracking-wide">
                    {displayText}
                </span>

                <span
                    aria-hidden="true"
                    className="ml-1.5 h-5 w-px shrink-0 animate-pulse rounded-md bg-slate-500"
                />
            </div>
        </div>
    );
}