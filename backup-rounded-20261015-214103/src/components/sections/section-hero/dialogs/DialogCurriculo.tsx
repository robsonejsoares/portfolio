"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FileText,
    Mail,
    Phone,
    MapPin,
    Briefcase,
    GraduationCap,
    Cpu,
    Award,
    User,
} from "lucide-react";

import { ButtonFechar } from "@/components/ui/ButtonFechar";
import { dadosCurriculo } from "@/data/dadosCurriculo";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221v4.609c0 5.624-2.807 5.921-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    );
}

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
    );
}

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

    const whatsappUrl = `https://wa.me/5561995015804?text=${encodeURIComponent(
        personal.whatsappMessage
    )}`;

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
                    className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto overscroll-contain p-2 sm:items-center sm:p-4 lg:p-6"
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
                        className="fixed inset-0 h-full w-full cursor-default bg-black/70 backdrop-blur-sm"
                    />

                    {/* Janela do currículo */}
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="dialog-curriculo-titulo"
                        initial={{ opacity: 0, scale: 0.98, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 12 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10 my-auto flex max-h-[calc(100dvh-1rem)] min-h-0 w-full max-w-4xl shrink-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/30 sm:max-h-[calc(100dvh-2rem)] sm:rounded-2xl"
                    >
                        {/* Cabeçalho */}
                        <header className="flex shrink-0 items-center justify-between gap-2 border-b border-white/10 bg-slate-800/50 p-3 sm:gap-4 sm:p-5">
                            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                                <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-sky-400/15 bg-sky-400/5 text-sky-300 min-[380px]:flex">
                                    <FileText size={20} aria-hidden="true" />
                                </div>

                                <div className="min-w-0">
                                    <h2
                                        id="dialog-curriculo-titulo"
                                        className="break-words text-sm font-semibold leading-5 text-slate-200 sm:text-lg sm:leading-6"
                                    >
                                        Currículo - {personal.name}
                                    </h2>

                                    <p className="mt-0.5 text-xs text-slate-400 sm:text-sm">
                                        Perfil profissional
                                    </p>
                                </div>
                            </div>

                            <div className="flex shrink-0 items-center gap-2">
                                <a
                                    href="/curriculo.pdf"
                                    download="Curriculo_Robson_Soares.pdf"
                                    aria-label="Baixar currículo em PDF"
                                    className="group relative flex min-h-11 shrink-0 cursor-pointer items-center justify-center gap-1.5 overflow-hidden rounded-md bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 px-3 py-2 text-xs font-extrabold text-black shadow-md shadow-cyan-500/20 transition-all duration-300 hover:brightness-110 active:scale-95 sm:px-4"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                                    />

                                    <span className="relative z-10 flex items-center gap-1.5">
                                        <span className="hidden sm:inline">
                                            Baixar PDF
                                        </span>
                                        <span className="sm:hidden">PDF</span>
                                        <span aria-hidden="true" className="text-sm font-bold">
                                            →
                                        </span>
                                    </span>
                                </a>

                                <div className="shrink-0">
                                    <ButtonFechar onClick={onClose} />
                                </div>
                            </div>
                        </header>

                        {/* Conteúdo com rolagem independente */}
                        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-3 sm:p-6">
                            <div className="min-w-0 space-y-6 break-words text-gray-200 sm:space-y-8">
                                {/* Cabeçalho pessoal */}
                                <div className="border-b border-white/10 pb-5 sm:pb-6">
                                    <h1 className="break-words text-xl font-bold tracking-tight text-slate-200 sm:text-2xl">
                                        {personal.name}
                                    </h1>

                                    <p className="mt-1 break-words font-mono text-sm font-medium text-sky-300">
                                        {personal.role}
                                    </p>

                                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 sm:gap-4 sm:text-sm">
                                        <a
                                            href={personal.linkedin}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex min-h-11 max-w-full items-center gap-1.5 py-2 transition-colors duration-200 hover:text-[#0A66C2]"
                                        >
                                            <LinkedinIcon className="h-4 w-4 shrink-0 text-[#0A66C2]" />
                                            <span>LinkedIn</span>
                                        </a>

                                        <a
                                            href={personal.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex min-h-11 max-w-full items-center gap-1.5 py-2 transition-colors duration-200 hover:text-slate-200"
                                        >
                                            <GithubIcon className="h-4 w-4 shrink-0 text-slate-300" />
                                            <span>GitHub</span>
                                        </a>

                                        <a
                                            href={`mailto:${personal.email}`}
                                            className="flex min-h-11 min-w-0 max-w-full items-center gap-1.5 py-2 transition-colors duration-200 hover:text-violet-400"
                                        >
                                            <Mail className="h-4 w-4 shrink-0 text-violet-400" />
                                            <span className="break-all">{personal.email}</span>
                                        </a>

                                        <a
                                            href={whatsappUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex min-h-11 max-w-full items-center gap-1.5 py-2 transition-colors duration-200 hover:text-[#25D366]"
                                        >
                                            <Phone className="h-4 w-4 shrink-0 text-[#25D366]" />
                                            <span>{personal.phone}</span>
                                        </a>

                                        <div className="flex min-h-11 max-w-full items-center gap-1.5 py-2 text-slate-400">
                                            <MapPin className="h-3.5 w-3.5 shrink-0 text-red-400" />
                                            <span>{personal.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Resumo profissional */}
                                <section>
                                    <h2 className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-300 sm:mb-4 sm:text-sm sm:tracking-widest">
                                        <User className="h-4 w-4 shrink-0 text-sky-300" />
                                        Resumo Profissional
                                    </h2>

                                    <div className="rounded-xl border border-white/5 bg-slate-800/40 p-4 sm:p-5">
                                        <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                                            {summary}
                                        </p>
                                    </div>
                                </section>

                                {/* Experiência profissional */}
                                <section>
                                    <h2 className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-300 sm:mb-4 sm:text-sm sm:tracking-widest">
                                        <Briefcase className="h-4 w-4 shrink-0 text-sky-300" />
                                        Experiência Profissional
                                    </h2>

                                    <div className="space-y-3 sm:space-y-4">
                                        {experiences.map((exp, index) => (
                                            <article
                                                key={`${exp.company}-${exp.period}-${index}`}
                                                className="min-w-0 rounded-xl border border-white/5 bg-slate-800/40 p-4 transition-colors duration-300 hover:border-white/10 hover:bg-slate-800/60 sm:p-5"
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
                                                        <li key={i} className="break-words">
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </article>
                                        ))}
                                    </div>
                                </section>

                                {/* Formação acadêmica */}
                                <section>
                                    <h2 className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-300 sm:mb-4 sm:text-sm sm:tracking-widest">
                                        <GraduationCap className="h-4 w-4 shrink-0 text-sky-300" />
                                        Formação Acadêmica
                                    </h2>

                                    <div className="grid grid-cols-1 gap-3 text-sm">
                                        {education.map((edu, index) => (
                                            <article
                                                key={`${edu.degree}-${edu.institution}-${index}`}
                                                className="flex min-w-0 flex-col justify-between gap-2 rounded-xl border border-white/5 bg-slate-800/40 p-3.5 transition-colors duration-300 hover:border-white/10 hover:bg-slate-800/60 min-[420px]:flex-row min-[420px]:items-center"
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

                                    <div className="space-y-2 rounded-xl border border-white/5 bg-slate-800/40 p-4 text-xs leading-relaxed text-slate-400 sm:text-sm">
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

                                    <div className="space-y-2 rounded-xl border border-white/5 bg-slate-800/40 p-4 text-xs leading-relaxed text-slate-400 sm:text-sm">
                                        {certifications.map((cert, index) => (
                                            <div
                                                key={`${cert}-${index}`}
                                                className="flex min-w-0 items-start gap-2"
                                            >
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                                                <span className="min-w-0 break-words">{cert}</span>
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