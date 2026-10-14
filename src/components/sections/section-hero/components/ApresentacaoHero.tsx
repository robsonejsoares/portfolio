
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
        <>
            <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
                    <div className="text-emerald-400" title="Database">
                        <Database className="h-3.5 w-3.5" />
                    </div>

                    <div className="text-amber-400" title="Server">
                        <Server className="h-3.5 w-3.5" />
                    </div>

                    <div className="text-purple-400" title="Code">
                        <Code2 className="h-3.5 w-3.5" />
                    </div>

                    <div className="text-cyan-400" title="Layers">
                        <Layers className="h-3.5 w-3.5" />
                    </div>
                </div>

                <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-xs tracking-widest text-slate-400">
                    <MapPin className="h-3.5 w-3.5 animate-pulse text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                    {personal.location}
                </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-400 sm:text-5xl">
                {personal.name.split(" ")[0]}{" "}
                <span className="text-gradient-cyan">
                    {personal.name.split(" ").slice(1).join(" ")}
                </span>
            </h1>

            <div className="flex h-8 items-center">
                <span className="bg-gradient-to-r from-cyan-500 via-sky-400 to-purple-500 bg-clip-text font-mono text-xl font-medium tracking-wide text-transparent sm:text-xl">
                    {displayText}
                </span>

                <span className="ml-1.5 h-5 w-px animate-pulse rounded-xl bg-slate-500" />
            </div>

            <p className="font-mono text-xs tracking-widest text-slate-500">
                {personal.tagline}
            </p>
        </>
    );
}
