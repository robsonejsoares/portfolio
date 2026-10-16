"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { ClipboardList } from "lucide-react";

import { ButtonAbrirDialog } from "@/components/ui/ButtonAbrirDialog";
import { LoadingDialog } from "@/components/common/LoadingDialog";
import { dadosCurriculo } from "@/data/dadosCurriculo";

import { CardExperienciaProfissional } from "./components/CardExperienciaProfissional";
import { DialogExperienciaProfissional } from "./dialogs/DialogExperienciaProfissional";

const experienciaFreelancer = {
    company: "XCodify",
    subtitle: "",
    period: "07/2026 – Presente",
    role: "Desenvolvedor Full Stack Freelancer",
    highlights: [
        "Desenvolvimento de soluções de software para diferentes necessidades e projetos.",
        "Construção de aplicações web e mobile utilizando tecnologias modernas.",
        "Desenvolvimento e integração de APIs, serviços e funcionalidades de back-end.",
        "Aplicação de boas práticas de arquitetura, organização, manutenção e qualidade de código.",
    ],
};

const configuracaoVisual = [
    {
        cor: "#4F8EF7",
        categoria: "Freelancer",
        descricao:
            "Atuação independente no desenvolvimento de soluções de software, incluindo aplicações web e mobile, APIs, integrações e sistemas personalizados, com foco em qualidade, escalabilidade e boas práticas de desenvolvimento.",
    },
    {
        cor: "#A855F7",
        categoria: "Tempo integral",
        descricao:
            "Atuação em suporte corporativo no ambiente do Sebrae DF, com foco em qualidade de sistemas, diagnóstico de falhas e apoio às equipes de desenvolvimento.",
    },
    {
        cor: "#10B981",
        categoria: "Estágio",
        descricao:
            "Experiência prática em desenvolvimento full-stack, participando da construção de aplicações web e mobile, APIs, bancos de dados e protótipos de interfaces.",
    },
];

const visualPadrao = {
    cor: "#22D3EE",
    categoria: "Experiência",
    descricao:
        "Experiência profissional com foco no desenvolvimento de competências, na qualidade das entregas e na evolução contínua.",
};

export function SectionExperienciaProfissional() {
    const [dialogAberto, setDialogAberto] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const experiencias = [
        experienciaFreelancer,
        ...dadosCurriculo.experiences,
    ];

    const experienciasRecentes = experiencias.slice(0, 2);

    const handleOpenExperiences = useCallback(() => {
        if (isLoading || dialogAberto) return;

        setIsLoading(true);
    }, [isLoading, dialogAberto]);

    const handleCloseDialog = useCallback(() => {
        setDialogAberto(false);
    }, []);

    const finalizarLoadingExperiencias = useCallback(() => {
        setIsLoading(false);
        setDialogAberto(true);
    }, []);

    return (
        <>
            <LoadingDialog
                isLoading={isLoading}
                text="Acessando experiências profissionais..."
                onFinished={finalizarLoadingExperiencias}
            />

            <section
                id="experience"
                aria-labelledby="experience-title"
                className="relative z-10 w-full min-w-0 py-6 sm:py-8"
            >
                <div className="w-full min-w-0 space-y-8 sm:space-y-10">
                    {/* Cabeçalho */}
                    <motion.header
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="mb-3 flex w-full min-w-0 items-start justify-between gap-3 text-left"
                    >
                        <div className="min-w-0 flex-1">
                            <h2
                                id="experience-title"
                                className="font-display text-xl font-bold text-[#8FA8C8] sm:text-2xl"
                            >
                                Experiência Profissional
                            </h2>
                        </div>

                        {experiencias.length > 2 && (
                            <ButtonAbrirDialog
                                type="button"
                                variant="default"
                                size="default"
                                onClick={handleOpenExperiences}
                                disabled={isLoading || dialogAberto}
                                aria-haspopup="dialog"
                                aria-expanded={dialogAberto}
                                className="max-w-[48%] shrink-0 cursor-pointer disabled:cursor-wait sm:max-w-none"
                            >
                                <span className="inline-flex min-w-0 items-center justify-center gap-1.5 sm:gap-2">
                                    <span className="whitespace-nowrap">
                                        <span className="sm:hidden">
                                            Ver experiências
                                        </span>

                                        <span className="hidden sm:inline">
                                            Ver experiências
                                        </span>
                                    </span>

                                    <ClipboardList
                                        size={16}
                                        aria-hidden="true"
                                        className="shrink-0 transition-transform duration-200 group-hover/button:scale-110 motion-reduce:transition-none"
                                    />
                                </span>
                            </ButtonAbrirDialog>
                        )}
                    </motion.header>

                    {/* Mobile: 1 card | sm+: 2 cards */}
                    <div className="w-full min-w-0 space-y-4">
                        {experienciasRecentes.map(
                            (experiencia, indice) => {
                                const visual =
                                    configuracaoVisual[indice] ??
                                    visualPadrao;

                                return (
                                    <div
                                        key={`${experiencia.company}-${experiencia.period}`}
                                        className={
                                            indice >= 1
                                                ? "hidden sm:block"
                                                : "block"
                                        }
                                    >
                                        <CardExperienciaProfissional
                                            cargo={experiencia.role}
                                            empresa={experiencia.company}
                                            subtitulo={experiencia.subtitle}
                                            periodo={experiencia.period}
                                            categoria={visual.categoria}
                                            descricao={visual.descricao}
                                            destaques={experiencia.highlights}
                                            cor={visual.cor}
                                            indice={indice}
                                        />
                                    </div>
                                );
                            },
                        )}
                    </div>
                </div>
            </section>

            {/* Diálogo com todas as experiências */}
            <DialogExperienciaProfissional
                isOpen={dialogAberto}
                onClose={handleCloseDialog}
                experiencias={experiencias}
                configuracaoVisual={configuracaoVisual}
            />
        </>
    );
}