"use client";

import { FileText, MessageCircle } from "lucide-react";

import { ButtonCurriculo } from "@/components/ui/ButtonCurriculo";
import { cn } from "cn";

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
            {/* Botão Currículo */}
            <ButtonCurriculo
                type="button"
                variant="default"
                size="lg"
                onClick={aoAbrirCurriculo}
                disabled={carregando || curriculoAberto}
                aria-expanded={curriculoAberto}
                aria-haspopup="dialog"
                className="min-w-0 flex-1"
            >
                <span className="inline-flex min-w-0 items-center justify-center gap-1.5 sm:gap-2">
                    <span className="whitespace-nowrap">
                        Currículo
                    </span>

                    <FileText
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover/button:scale-110 motion-reduce:transition-none"
                    />
                </span>
            </ButtonCurriculo>

            {/* Link Entrar em contato */}
            <a
                href="#contact"
                onClick={aoEntrarEmContato}
                aria-label="Entrar em contato"
                className={cn(
                    [
                        "group/button relative inline-flex shrink-0 items-center justify-center",
                        "min-h-9 min-w-0 flex-1 gap-1.5",
                        "overflow-hidden rounded-lg border border-transparent",
                        "bg-clip-padding bg-slate-800",
                        "px-2 text-[11px] font-normal text-slate-300",
                        "whitespace-nowrap",
                        "transition-colors duration-200 ease-out",
                        "hover:bg-slate-700 hover:text-slate-100",
                        "outline-none select-none",
                        "focus-visible:ring-2 focus-visible:ring-[#607A9D]",
                        "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]",
                        "active:scale-[0.98]",
                        "motion-reduce:transition-none",
                        "sm:min-h-11 sm:gap-2 sm:px-4 sm:text-sm",
                    ].join(" "),
                )}
            >
                <span className="flex min-w-0 items-center justify-center gap-1.5 sm:gap-2">
                    <span className="whitespace-nowrap">
                        Entrar em contato
                    </span>

                    <MessageCircle
                        size={16}
                        aria-hidden="true"
                        className="shrink-0 transition-transform duration-200 group-hover/button:scale-110 motion-reduce:transition-none"
                    />
                </span>
            </a>
        </div>
    );
}