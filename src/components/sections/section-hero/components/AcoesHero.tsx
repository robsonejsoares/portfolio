"use client";

import { ArrowRight } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/Button";
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
            {/* Botão principal: Ver currículo */}
            <Button
                type="button"
                variant="default"
                size="lg"
                onClick={aoAbrirCurriculo}
                disabled={carregando || curriculoAberto}
                aria-haspopup="dialog"
                aria-expanded={curriculoAberto}
                className="min-w-0 flex-1 cursor-pointer disabled:cursor-wait"
            >
                <span className="flex min-w-0 items-center justify-center gap-2">
                    <span className="whitespace-nowrap">
                        Ver currículo
                    </span>

                    <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className="shrink-0 transition-transform duration-200 group-hover/button:translate-x-1"
                    />
                </span>
            </Button>

            {/* Link secundário: Entrar em contato */}
            <a
                href="#contact"
                onClick={aoEntrarEmContato}
                aria-label="Entrar em contato"
                className={cn(
                    buttonVariants({
                        variant: "secondary",
                        size: "lg",
                    }),
                    "group/button min-w-0 flex-1 cursor-pointer",
                )}
            >
                <span className="flex min-w-0 items-center justify-center gap-2">
                    <span className="whitespace-nowrap">
                        Entrar em contato
                    </span>

                    <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className="shrink-0 transition-transform duration-200 group-hover/button:translate-x-1"
                    />
                </span>
            </a>
        </div>
    );
}