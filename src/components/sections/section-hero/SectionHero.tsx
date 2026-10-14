"use client";

import { useCallback, useState } from "react";
import type { MouseEvent } from "react";

import { LoadingDialog } from "@/components/common/LoadingDialog";
import { AcoesHero } from "@/components/sections/section-hero/components/AcoesHero";
import { ApresentacaoHero } from "@/components/sections/section-hero/components/ApresentacaoHero";
import { AvatarHero } from "@/components/sections/section-hero/components/AvatarHero";
import { EstatisticasHero } from "@/components/sections/section-hero/components/EstatisticasHero";
import { LinksSociaisHero } from "@/components/sections/section-hero/components/LinksSociaisHero";
import { DialogCurriculo } from "@/components/sections/section-hero/dialogs/DialogCurriculo";

export function SectionHero() {
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Abre o currículo com carregamento animado.
    const handleOpenResume = useCallback(() => {
        if (isLoading || isResumeOpen) return;

        setIsLoading(true);
    }, [isLoading, isResumeOpen]);

    const finalizarLoadingCurriculo = useCallback(() => {
        setIsLoading(false);
        setIsResumeOpen(true);
    }, []);

    // Rola suavemente até a seção de contato.
    const handleScrollToContact = useCallback(
        (event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();

            const contactElement = document.getElementById("contact");

            contactElement?.scrollIntoView({
                behavior: "smooth",
            });
        },
        [],
    );

    return (
        <>
            <LoadingDialog
                isLoading={isLoading}
                text="Acessando currículo..."
                onFinished={finalizarLoadingCurriculo}
            />

            <section
                id="hero"
                className="relative z-10 flex min-h-[85vh] items-center justify-center overflow-hidden pt-20 pb-4"
            >
               <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-0">
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
                        {/* Lado esquerdo: avatar e órbitas */}
                        <AvatarHero />

                        {/* Lado direito: apresentação e ações */}
                        <div className="order-2 flex flex-col gap-6">
                            <ApresentacaoHero />

                            <EstatisticasHero />

                            <AcoesHero
                                aoAbrirCurriculo={handleOpenResume}
                                carregando={isLoading}
                                curriculoAberto={isResumeOpen}
                                aoEntrarEmContato={handleScrollToContact}
                            />

                            <LinksSociaisHero />
                        </div>
                    </div>
                </div>
            </section>

            <DialogCurriculo
                isOpen={isResumeOpen}
                onClose={() => setIsResumeOpen(false)}
            />
        </>
    );
}