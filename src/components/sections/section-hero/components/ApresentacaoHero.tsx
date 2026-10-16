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
            <div className="flex min-w-0 flex-wrap items-center gap-2">
                <div
                    aria-label="Tecnologias"
                    className="flex shrink-0 items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5"
                >
                    <Database
                        aria-label="Database"
                        className="h-3.5 w-3.5 text-emerald-400"
                    />
                    <Server
                        aria-label="Server"
                        className="h-3.5 w-3.5 text-amber-400"
                    />
                    <Code2
                        aria-label="Code"
                        className="h-3.5 w-3.5 text-purple-400"
                    />
                    <Layers
                        aria-label="Layers"
                        className="h-3.5 w-3.5 text-cyan-400"
                    />
                </div>

                <span className="flex min-w-0 max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[10px] tracking-wide text-slate-400 min-[420px]:px-3.5 min-[420px]:text-xs min-[420px]:tracking-widest">
                    <MapPin className="h-3.5 w-3.5 shrink-0 animate-pulse text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
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

            <p className="break-words font-mono text-[10px] leading-relaxed tracking-wider text-slate-500 min-[420px]:text-xs min-[420px]:tracking-widest">
                {personal.tagline}
            </p>
        </div>
    );
}