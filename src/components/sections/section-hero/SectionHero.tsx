
"use client";

import { useCallback, useState } from "react";
import type { MouseEvent } from "react";

import { LoadingDialog } from "@/components/common/LoadingDialog";
import { RedesSociais } from "@/components/redes-sociais/RedesSociais";
import { AcoesHero } from "@/components/sections/section-hero/components/AcoesHero";
import { ApresentacaoHero } from "@/components/sections/section-hero/components/ApresentacaoHero";
import { AvatarHero } from "@/components/sections/section-hero/components/AvatarHero";
import { EstatisticasHero } from "@/components/sections/section-hero/components/EstatisticasHero";
import { DialogCurriculo } from "@/components/sections/section-hero/dialogs/DialogCurriculo";

export function SectionHero() {
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleOpenResume = useCallback(() => {
        if (isLoading || isResumeOpen) return;
        setIsLoading(true);
    }, [isLoading, isResumeOpen]);

    const finalizarLoadingCurriculo = useCallback(() => {
        setIsLoading(false);
        setIsResumeOpen(true);
    }, []);

    const handleScrollToContact = useCallback(
        (event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();

            document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        },
        [],
    );

    const handleCloseResume = useCallback(() => {
        setIsResumeOpen(false);
    }, []);

    return (
        <>
            <LoadingDialog
                isLoading={isLoading}
                text="Acessando currículo..."
                onFinished={finalizarLoadingCurriculo}
            />

            <section
                id="hero"
                className="relative z-10 flex min-h-[85svh] items-center justify-center overflow-hidden px-0 pb-10 pt-24 sm:pb-12 sm:pt-28 lg:min-h-[85vh] lg:py-20"
            >
                <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
                    <div className="grid min-w-0 grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
                        <AvatarHero />

                        <div className="order-2 flex min-w-0 flex-col gap-5 sm:gap-6">
                            <ApresentacaoHero />

                            <EstatisticasHero />

                            <AcoesHero
                                aoAbrirCurriculo={handleOpenResume}
                                carregando={isLoading}
                                curriculoAberto={isResumeOpen}
                                aoEntrarEmContato={handleScrollToContact}
                            />

                            <div className="w-full min-w-0 border-t-0 pt-1 sm:border-t sm:border-white/10 sm:pt-5">
                                <RedesSociais
                                    redes={[
                                        "github",
                                        "linkedin",
                                        "whatsapp",
                                        "discord",
                                        "telegram",
                                    ]}
                                    mostrarTexto
                                    varianteMobile="simples"
                                    className="justify-center sm:justify-start"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <DialogCurriculo
                isOpen={isResumeOpen}
                onClose={handleCloseResume}
            />
        </>
    );
}
