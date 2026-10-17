"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FileText,
    MapPin,
    Briefcase,
    GraduationCap,
    Cpu,
    Award,
    User,
} from "lucide-react";

import { ButtonFechar } from "@/components/ui/ButtonFechar";
import { ButtonDownload } from "@/components/ui/ButtonDownload";
import { RedesSociais } from "@/components/redes-sociais/RedesSociais";
import { dadosCurriculo } from "@/data/dadosCurriculo";

interface DialogCurriculoProps {
    isOpen: boolean;
    onClose: () => void;
}

export function DialogCurriculo({
    isOpen,
    onClose,
}: DialogCurriculoProps) {
    const {
        personal,
        summary,
        experiences,
        education,
        technologies,
        certifications,
    } = dadosCurriculo;

    useEffect(() => {
        if (!isOpen) return;

        const overflowAnterior = document.body.style.overflow;

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = overflowAnterior;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto overscroll-contain p-3 sm:p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Fundo da modal */}
                    <motion.button
                        type="button"
                        aria-label="Fechar currículo"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-sm"
                    />

                    {/* Janela do currículo */}
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="dialog-curriculo-titulo"
                        initial={{
                            opacity: 0,
                            scale: 0.96,
                            y: 16,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.96,
                            y: 16,
                        }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10 my-auto flex max-h-[calc(100dvh-1.5rem)] w-full min-w-0 max-w-4xl shrink-0 flex-col overflow-hidden rounded-md border border-white/5 bg-slate-900 shadow-2xl shadow-black/30 sm:max-h-[85dvh]"
                    >
                        {/* Cabeçalho fixo */}
                        <header className="flex shrink-0 items-center justify-between gap-2 border-b border-white/5 bg-slate-800/50 p-3 sm:gap-4 sm:p-5">
                            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-sky-400/15 bg-sky-400/5 text-sky-300 sm:h-10 sm:w-10">
                                    <FileText
                                        size={18}
                                        aria-hidden="true"
                                    />
                                </div>

                                <div className="min-w-0">
                                    <h2
                                        id="dialog-curriculo-titulo"
                                        className="break-words text-sm font-semibold leading-snug text-slate-300 sm:text-lg sm:leading-6"
                                    >
                                        Currículo
                                    </h2>
                                </div>
                            </div>

                            {/* Ações do cabeçalho */}
                            <div className="flex shrink-0 items-center gap-2">
                                <ButtonDownload
                                    href="/curriculo.pdf"
                                    fileName="Curriculo_Robson_Soares.pdf"
                                    label="Baixar Currículo"
                                    mobileLabel="PDF"
                                />

                                <ButtonFechar onClick={onClose} />
                            </div>
                        </header>

                        {/* Conteúdo rolável */}
                        <div className="min-h-0 min-w-0 overflow-y-auto overscroll-contain p-3 sm:p-6">
                            <div className="min-w-0 space-y-6 break-words text-gray-200 sm:space-y-8">
                                {/* Cabeçalho pessoal */}
                                <div className="border-b border-white/10 pb-5 sm:pb-6">
                                    <h1 className="break-words text-xl font-bold tracking-tight text-slate-200 sm:text-2xl">
                                        {personal.name}
                                    </h1>

                                    <p className="mt-1 break-words font-mono text-sm font-medium text-sky-300">
                                        {personal.role}
                                    </p>

                                    {/* Redes sociais e localização */}
                                    <div className="mt-3 flex min-w-0 max-w-full items-center justify-start gap-3">
                                        <div className="min-w-0">
                                            <RedesSociais
                                                redes={[
                                                    "linkedin",
                                                    "github",
                                                    "whatsapp",
                                                ]}
                                                mostrarTexto
                                                className="!w-auto !flex-nowrap !justify-start !gap-2 sm:!gap-3"
                                            />
                                        </div>

                                        {/* Localização logo após o WhatsApp */}
                                        <div className="hidden min-w-0 shrink items-center gap-1.5 text-xs text-slate-400 lg:inline-flex">
                                            <MapPin
                                                className="h-3.5 w-3.5 shrink-0 animate-pulse text-red-400 drop-shadow-[0_0_5px_rgba(248,113,113,0.7)]"
                                                aria-hidden="true"
                                            />

                                            <span className="whitespace-nowrap">
                                                {personal.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Resumo profissional */}
                                <section>
                                    <h2 className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-300 sm:mb-4 sm:text-sm sm:tracking-widest">
                                        <User className="h-4 w-4 shrink-0 text-sky-300" />
                                        Resumo Profissional
                                    </h2>

                                    <div className="rounded-md border border-white/5 bg-slate-800/40 p-4 sm:p-5">
                                        <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                                            {summary}
                                        </p>
                                    </div>
                                </section>

                                {/* Carreira profissional */}
                                <section>
                                    <h2 className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-300 sm:mb-4 sm:text-sm sm:tracking-widest">
                                        <Briefcase className="h-4 w-4 shrink-0 text-sky-300" />
                                        Carreira Profissional
                                    </h2>

                                    <div className="space-y-3 sm:space-y-4">
                                        {experiences.map((exp, index) => (
                                            <article
                                                key={`${exp.company}-${exp.period}-${index}`}
                                                className="min-w-0 rounded-md border border-white/5 bg-slate-800/40 p-4 transition-colors duration-300 hover:border-white/10 hover:bg-slate-800/60 sm:p-5"
                                            >
                                                <div className="mb-2 flex min-w-0 flex-col justify-between gap-2 sm:flex-row sm:items-center">
                                                    <h3 className="min-w-0 break-words text-sm font-semibold text-slate-300 sm:text-base">
                                                        {exp.company}{" "}
                                                        {exp.subtitle && (
                                                            <span className="font-normal text-slate-400">
                                                                {exp.subtitle}
                                                            </span>
                                                        )}
                                                    </h3>

                                                    <span className="w-fit max-w-full shrink-0 rounded-full border border-sky-400/15 bg-sky-400/5 px-2.5 py-1 font-mono text-[10px] text-sky-300">
                                                        {exp.period}
                                                    </span>
                                                </div>

                                                <p className="mb-3 break-words text-xs font-semibold text-slate-400">
                                                    {exp.role}
                                                </p>

                                                <ul className="list-inside list-disc space-y-1.5 text-xs leading-relaxed text-slate-400 marker:text-sky-300 sm:text-sm">
                                                    {exp.highlights.map((item, i) => (
                                                        <li
                                                            key={i}
                                                            className="break-words"
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </article>
                                        ))}
                                    </div>
                                </section>

                                {/* Qualificações acadêmicas */}
                                <section>
                                    <h2 className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-300 sm:mb-4 sm:text-sm sm:tracking-widest">
                                        <GraduationCap className="h-4 w-4 shrink-0 text-sky-300" />
                                        Qualificações Acadêmicas
                                    </h2>

                                    <div className="grid grid-cols-1 gap-3 text-sm">
                                        {education.map((edu, index) => (
                                            <article
                                                key={`${edu.degree}-${edu.institution}-${index}`}
                                                className="flex min-w-0 flex-col justify-between gap-2 rounded-md border border-white/5 bg-slate-800/40 p-3.5 transition-colors duration-300 hover:border-white/10 hover:bg-slate-800/60 min-[420px]:flex-row min-[420px]:items-center"
                                            >
                                                <div className="min-w-0 break-words font-medium text-slate-300">
                                                    <div>{edu.degree}</div>
                                                    <span className="break-words text-xs text-slate-400">
                                                        {edu.institution}
                                                    </span>
                                                </div>

                                                <span className="w-fit max-w-full shrink-0 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 font-mono text-[10px] text-emerald-300">
                                                    {edu.status}
                                                </span>
                                            </article>
                                        ))}
                                    </div>
                                </section>

                                {/* Tecnologias e competências */}
                                <section>
                                    <h2 className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-300 sm:text-sm sm:tracking-widest">
                                        <Cpu className="h-4 w-4 shrink-0 text-sky-300" />
                                        Tecnologias & Competências
                                    </h2>

                                    <div className="space-y-2 rounded-md border border-white/5 bg-slate-800/40 p-4 text-xs leading-relaxed text-slate-400 sm:text-sm">
                                        <p>
                                            <strong className="text-sky-300">Backend:</strong>{" "}
                                            {technologies.backend}
                                        </p>
                                        <p>
                                            <strong className="text-sky-300">Frontend:</strong>{" "}
                                            {technologies.frontend}
                                        </p>
                                        <p>
                                            <strong className="text-sky-300">Mobile:</strong>{" "}
                                            {technologies.mobile}
                                        </p>
                                        <p>
                                            <strong className="text-sky-300">Design & Prototipagem:</strong>{" "}
                                            {technologies.design}
                                        </p>
                                        <p>
                                            <strong className="text-sky-300">Banco de Dados:</strong>{" "}
                                            {technologies.database}
                                        </p>
                                        <p>
                                            <strong className="text-sky-300">Ferramentas e DevOps:</strong>{" "}
                                            {technologies.devops}
                                        </p>
                                        <p>
                                            <strong className="text-sky-300">Outros:</strong>{" "}
                                            {technologies.others}
                                        </p>
                                    </div>
                                </section>

                                {/* Cursos e certificações */}
                                <section>
                                    <h2 className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-300 sm:text-sm sm:tracking-widest">
                                        <Award className="h-4 w-4 shrink-0 text-sky-300" />
                                        Cursos e Certificações
                                    </h2>

                                    <div className="space-y-2 rounded-md border border-white/5 bg-slate-800/40 p-4 text-xs leading-relaxed text-slate-400 sm:text-sm">
                                        {certifications.map((cert, index) => (
                                            <div
                                                key={`${cert}-${index}`}
                                                className="flex min-w-0 items-start gap-2"
                                            >
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                                                <span className="min-w-0 break-words">
                                                    {cert}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}