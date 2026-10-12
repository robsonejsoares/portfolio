
"use client";

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

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
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

    const whatsappUrl = `https://wa.me/5561995015804?text=${encodeURIComponent(personal.whatsappMessage)}`;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
                    {/* Fundo da modal */}
                    <motion.button
                        type="button"
                        aria-label="Fechar currículo"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 h-full w-full cursor-default bg-black/85 backdrop-blur-md"
                    />

                    {/* Janela com o mesmo tamanho da modal de experiências */}
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
                        className="relative z-10 flex h-[85dvh] max-h-[900px] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-cyan-500/30 bg-[#090d16] shadow-2xl shadow-black/40"
                    >
                        {/* Cabeçalho fixo */}
                        <header className="flex shrink-0 items-center justify-between gap-3 border-b border-cyan-500/20 bg-[#070a12] p-4 sm:p-5">
                            <div className="flex min-w-0 items-center gap-2">
                                <FileText className="h-5 w-5 shrink-0 animate-pulse text-cyan-400" />

                                <h3
                                    id="dialog-curriculo-titulo"
                                    className="text-sm font-bold tracking-wide text-white sm:text-base"
                                >
                                    Currículo - {personal.name}
                                </h3>
                            </div>

                            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                                {/* Botão para baixar PDF */}
                                <a
                                    href="/curriculo.pdf"
                                    download="Curriculo_Robson_Soares.pdf"
                                    className="group relative flex cursor-pointer items-center gap-1.5 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 px-3 py-2 text-xs font-extrabold text-black shadow-md shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] active:scale-95 sm:px-4"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
                                    />

                                    <span className="relative z-10 flex items-center gap-1.5">
                                        <span>Baixar PDF</span>
                                        <span className="text-sm font-bold transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </span>
                                </a>

                                <ButtonFechar onClick={onClose} />
                            </div>
                        </header>

                        {/* Conteúdo com rolagem independente */}
                        <div className="min-h-0 flex-1 space-y-8 overflow-y-auto overscroll-contain bg-[#0b101b] p-4 text-gray-200 sm:p-8">
                            {/* Cabeçalho pessoal */}
                            <div className="border-b border-cyan-500/25 pb-6">
                                <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                                    {personal.name}
                                </h1>

                                <p className="mt-1 font-mono text-sm font-semibold text-cyan-300">
                                    {personal.role}
                                </p>

                                <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-300 sm:text-sm">
                                    <a
                                        href={personal.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-1.5 transition-colors hover:text-cyan-300"
                                    >
                                        <LinkedinIcon className="h-4 w-4 text-cyan-400" />
                                        <span>LinkedIn</span>
                                    </a>

                                    <a
                                        href={personal.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-1.5 transition-colors hover:text-cyan-300"
                                    >
                                        <GithubIcon className="h-4 w-4 text-cyan-400" />
                                        <span>GitHub</span>
                                    </a>

                                    <a
                                        href={`mailto:${personal.email}`}
                                        className="flex items-center gap-1.5 transition-colors hover:text-cyan-300"
                                    >
                                        <Mail className="h-4 w-4 text-cyan-400" />
                                        <span>{personal.email}</span>
                                    </a>

                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-1.5 transition-colors hover:text-cyan-300"
                                    >
                                        <Phone className="h-4 w-4 text-cyan-400" />
                                        <span>{personal.phone}</span>
                                    </a>

                                    <div className="flex items-center gap-1.5 text-gray-300">
                                        <MapPin className="h-4 w-4 text-cyan-400" />
                                        <span>{personal.location}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Resumo profissional */}
                            <section>
                                <h2 className="mb-4 flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-widest text-cyan-300">
                                    <User className="h-4 w-4 text-purple-400" />
                                    Resumo Profissional
                                </h2>

                                <div className="rounded-xl border border-cyan-500/20 bg-[#101726] p-5 shadow-md">
                                    <p className="text-sm leading-relaxed text-gray-200 sm:text-base">
                                        {summary}
                                    </p>
                                </div>
                            </section>

                            {/* Experiência profissional */}
                            <section>
                                <h2 className="mb-4 flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-widest text-cyan-300">
                                    <Briefcase className="h-4 w-4 text-purple-400" />
                                    Experiência Profissional
                                </h2>

                                <div className="space-y-6">
                                    {experiences.map((exp, index) => (
                                        <article
                                            key={`${exp.company}-${exp.period}-${index}`}
                                            className="rounded-xl border border-cyan-500/20 bg-[#101726] p-5 shadow-md"
                                        >
                                            <div className="mb-2 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                                                <h3 className="text-base font-bold text-white">
                                                    {exp.company}{" "}
                                                    {exp.subtitle && (
                                                        <span className="font-normal text-cyan-300">
                                                            {exp.subtitle}
                                                        </span>
                                                    )}
                                                </h3>

                                                <span className="w-fit rounded-md border border-cyan-500/30 bg-cyan-500/15 px-2.5 py-1 font-mono text-xs text-cyan-300">
                                                    {exp.period}
                                                </span>
                                            </div>

                                            <p className="mb-3 text-xs font-semibold text-gray-300">
                                                {exp.role}
                                            </p>

                                            <ul className="list-inside list-disc space-y-1.5 text-xs text-gray-200 marker:text-purple-400 sm:text-sm">
                                                {exp.highlights.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </article>
                                    ))}
                                </div>
                            </section>

                            {/* Formação acadêmica */}
                            <section>
                                <h2 className="mb-4 flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-widest text-cyan-300">
                                    <GraduationCap className="h-4 w-4 text-purple-400" />
                                    Formação Acadêmica
                                </h2>

                                <div className="grid grid-cols-1 gap-3 text-sm">
                                    {education.map((edu, index) => (
                                        <article
                                            key={`${edu.degree}-${edu.institution}-${index}`}
                                            className="flex items-center justify-between gap-3 rounded-xl border border-cyan-500/20 bg-[#101726] p-3.5 shadow-md"
                                        >
                                            <div>
                                                <strong className="block text-white">
                                                    {edu.degree}
                                                </strong>
                                                <span className="text-xs text-gray-300">
                                                    {edu.institution}
                                                </span>
                                            </div>

                                            <span className="w-fit shrink-0 rounded-md border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-1 font-mono text-xs text-emerald-300">
                                                {edu.status}
                                            </span>
                                        </article>
                                    ))}
                                </div>
                            </section>

                            {/* Tecnologias e competências */}
                            <section>
                                <h2 className="mb-3 flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-widest text-cyan-300">
                                    <Cpu className="h-4 w-4 text-purple-400" />
                                    Tecnologias & Competências
                                </h2>

                                <div className="space-y-2 rounded-xl border border-cyan-500/20 bg-[#101726] p-4 text-xs text-gray-200 shadow-md sm:text-sm">
                                    <p>
                                        <strong className="text-cyan-300">Backend:</strong>{" "}
                                        {technologies.backend}
                                    </p>
                                    <p>
                                        <strong className="text-cyan-300">Frontend:</strong>{" "}
                                        {technologies.frontend}
                                    </p>
                                    <p>
                                        <strong className="text-cyan-300">Mobile:</strong>{" "}
                                        {technologies.mobile}
                                    </p>
                                    <p>
                                        <strong className="text-cyan-300">Design & Prototipagem:</strong>{" "}
                                        {technologies.design}
                                    </p>
                                    <p>
                                        <strong className="text-cyan-300">Banco de Dados:</strong>{" "}
                                        {technologies.database}
                                    </p>
                                    <p>
                                        <strong className="text-cyan-300">Ferramentas e DevOps:</strong>{" "}
                                        {technologies.devops}
                                    </p>
                                    <p>
                                        <strong className="text-cyan-300">Outros:</strong>{" "}
                                        {technologies.others}
                                    </p>
                                </div>
                            </section>

                            {/* Cursos e certificações */}
                            <section>
                                <h2 className="mb-3 flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-widest text-cyan-300">
                                    <Award className="h-4 w-4 text-purple-400" />
                                    Cursos e Certificações
                                </h2>

                                <div className="space-y-2 rounded-xl border border-cyan-500/20 bg-[#101726] p-4 text-xs text-gray-200 shadow-md sm:text-sm">
                                    {certifications.map((cert, index) => (
                                        <div
                                            key={`${cert}-${index}`}
                                            className="flex items-center gap-2"
                                        >
                                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                                            <span>{cert}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
