"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { dadosCurriculo } from "@/data/dadosCurriculo";
import { CardExperienciaProfissional } from "./components/CardExperienciaProfissional";
import { DialogExperienciaProfissional } from "./dialogs/DialogExperienciaProfissional";
import { LoadingDialog } from "@/components/common/LoadingDialog";

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
                    {/* Cabeçalho responsivo */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex w-full min-w-0 items-start justify-between gap-3 text-left"
                    >
                        <div className="min-w-0 flex-1">
                            <h2
                                id="experience-title"
                                className="mb-3 font-display text-2xl font-bold text-cyan-300/70"
                            >
                                Experiência Profissional
                            </h2>

                            <p className="break-words text-left font-mono text-xs leading-relaxed tracking-widest text-slate-400">
                                Minha trajetória profissional.
                            </p>
                        </div>

                        {experiencias.length > 2 && (
                            <button
                                type="button"
                                onClick={handleOpenExperiences}
                                disabled={isLoading || dialogAberto}
                                aria-haspopup="dialog"
                                aria-expanded={dialogAberto}
                                className="group relative inline-flex max-w-[48%] shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-md bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-3 py-2 text-xs font-semibold text-black shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] active:scale-95 disabled:cursor-wait disabled:opacity-70 sm:max-w-none sm:gap-3 sm:px-6 sm:py-2.5 sm:text-sm"
                            >
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
                                />

                                <span className="relative z-10 inline-flex min-w-0 items-center justify-center gap-2 sm:gap-3">
                                    <span className="sm:hidden">
                                        Ver todas
                                    </span>

                                    <span className="hidden sm:inline">
                                        Ver todas as experiências
                                    </span>

                                    <span className="shrink-0 rounded-full bg-black/10 px-2 py-0.5 text-xs font-bold">
                                        {experiencias.length}
                                    </span>

                                    <ArrowRight
                                        size={17}
                                        aria-hidden="true"
                                        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </span>
                            </button>
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

            <DialogExperienciaProfissional
                isOpen={dialogAberto}
                onClose={handleCloseDialog}
                experiencias={experiencias}
                configuracaoVisual={configuracaoVisual}
            />
        </>
    );
}