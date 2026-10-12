"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { dadosCurriculo } from "@/data/dadosCurriculo";
import { CardExperiencia } from "./components/CardExperiencia";
import { DialogExperiencias } from "./dialogs/DialogExperiencias";
import { LoadingDialog } from "@/components/common/LoadingDialog";

const experienciaFreelancer = {
    company: "O Programador Autônomo",
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
        categoria: "Tempo parcial",
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

export function SectionExperiencia() {
    const [dialogAberto, setDialogAberto] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const experiencias = [
        experienciaFreelancer,
        ...dadosCurriculo.experiences,
    ];

    // Exibe somente as duas experiências mais recentes na página.
    const experienciasRecentes = experiencias.slice(0, 2);

    const handleOpenExperiences = useCallback(() => {
        if (isLoading || dialogAberto) return;

        setIsLoading(true);
    }, [isLoading, dialogAberto]);

    const finalizarLoadingExperiencias = useCallback(() => {
        setIsLoading(false);
        setDialogAberto(true);
    }, []);

    return (
        <>
            <LoadingDialog
                isLoading={isLoading}
                text="ACESSANDO EXPERIÊNCIAS..."
                onFinished={finalizarLoadingExperiencias}
            />

            <section
                id="experience"
                className="relative z-10 w-full py-6 sm:py-8"
            >
                {/* Conteúdo usando toda a largura disponível */}
                <div className="w-full min-w-0 space-y-10">
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-3 text-center"
                    >
                        <h2 className="mb-3 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text font-display text-4xl font-black text-transparent">
                            <span className="text-gradient-cyan">
                                Experiência
                            </span>
                        </h2>

                        <p className="text-xs font-mono tracking-widest text-slate-400">
                            Minha trajetória profissional e experiências em desenvolvimento.
                        </p>
                    </motion.header>

                    <div className="relative w-full min-w-0">
                        <div
                            aria-hidden="true"
                            className="absolute left-6 top-0 hidden h-[calc(100%-5rem)] w-px bg-gradient-to-b from-cyan-400/70 via-purple-500/60 to-emerald-400/30 md:block"
                        />

                        <div className="w-full min-w-0 space-y-8">
                            {experienciasRecentes.map(
                                (experiencia, indice) => {
                                    const visual =
                                        configuracaoVisual[indice] ??
                                        visualPadrao;

                                    return (
                                        <CardExperiencia
                                            key={`${experiencia.company}-${experiencia.period}`}
                                            cargo={experiencia.role}
                                            empresa={experiencia.company}
                                            subtitulo={experiencia.subtitle}
                                            periodo={experiencia.period}
                                            categoria={visual.categoria}
                                            descricao={visual.descricao}
                                            destaques={experiencia.highlights}
                                            cor={visual.cor}
                                            icone={BriefcaseBusiness}
                                            indice={indice}
                                        />
                                    );
                                },
                            )}
                        </div>

                        {experiencias.length > 2 && (
                            <div className="mt-10 flex justify-center">
                                <button
                                    type="button"
                                    onClick={handleOpenExperiences}
                                    disabled={isLoading || dialogAberto}
                                    aria-haspopup="dialog"
                                    aria-expanded={dialogAberto}
                                    className="group relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-md bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-[0_0_35px_rgba(6,182,212,0.9)] active:scale-95 disabled:cursor-wait disabled:opacity-70"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
                                    />

                                    <span className="relative z-10 flex items-center gap-2">
                                        <span>
                                            Ver todas as experiências
                                        </span>

                                        <span className="rounded-full bg-black/10 px-2 py-0.5 text-xs font-bold">
                                            {experiencias.length}
                                        </span>

                                        <ArrowRight
                                            size={17}
                                            aria-hidden="true"
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />
                                    </span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <DialogExperiencias
                isOpen={dialogAberto}
                onClose={() => setDialogAberto(false)}
                experiencias={experiencias}
                configuracaoVisual={configuracaoVisual}
            />
        </>
    );
}