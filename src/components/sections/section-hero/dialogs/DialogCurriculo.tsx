"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FileText, Mail, Phone, MapPin, Briefcase, GraduationCap, Cpu, Award, User } from "lucide-react";
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

interface DialogResumeProps {
    isOpen: boolean;
    onClose: () => void;
}

export function DialogResume({ isOpen, onClose }: DialogResumeProps) {
    const { personal, summary, experiences, education, technologies, certifications } = dadosCurriculo;
    const whatsappUrl = `https://wa.me/5561995015804?text=${encodeURIComponent(personal.whatsappMessage)}`;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/85 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-w-4xl h-[85vh] border border-cyan-500/40 rounded-2xl flex flex-col overflow-hidden shadow-2xl z-10 bg-[#090d16] backdrop-blur-2xl"
                    >
                        {/* Header Fixo */}
                        <div className="p-4 border-b border-cyan-500/30 flex items-center justify-between bg-[#070a12] shrink-0">
                            <div className="flex items-center gap-2">
                                <FileText className="w-5 h-5 text-cyan-400 animate-pulse" />
                                <h3 className="font-bold text-white text-sm sm:text-base tracking-wide">
                                    Currículo - {personal.name}
                                </h3>
                            </div>

                            <div className="flex items-center gap-3">
                                {/* Botão Baixar PDF mantido com o toque subtil em roxo */}
                                <a
                                    href="/curriculo.pdf"
                                    download="Curriculo_Robson_Soares.pdf"
                                    className="relative overflow-hidden px-4 py-1.5 rounded-xl text-xs font-extrabold text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 shadow-md shadow-cyan-500/20 hover:scale-105 hover:brightness-110 hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] active:scale-95 transition-all duration-300 flex items-center gap-1.5 group cursor-pointer"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

                                    <span className="relative z-10 flex items-center gap-1.5">
                                        <span>Baixar PDF</span>
                                        <span className="text-sm font-bold group-hover:translate-x-1 transition-transform duration-300">→</span>
                                    </span>
                                </a>

                                <ButtonFechar onClick={onClose} />
                            </div>
                        </div>

                        {/* Conteúdo Dinâmico */}
                        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 text-gray-200 bg-[#0b101b]">

                            {/* Cabeçalho Pessoal */}
                            <div className="border-b border-cyan-500/25 pb-6">
                                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                                    {personal.name}
                                </h1>
                                <p className="text-cyan-300 font-mono text-sm mt-1 font-semibold">
                                    {personal.role}
                                </p>

                                <div className="flex flex-wrap gap-4 mt-4 text-xs sm:text-sm text-gray-300">
                                    <a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                                        <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                                        <span>LinkedIn</span>
                                    </a>
                                    <a href={personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                                        <GithubIcon className="w-4 h-4 text-cyan-400" />
                                        <span>GitHub</span>
                                    </a>
                                    <a href={`mailto:${personal.email}`} className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                                        <Mail className="w-4 h-4 text-cyan-400" />
                                        <span>{personal.email}</span>
                                    </a>
                                    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                                        <Phone className="w-4 h-4 text-cyan-400" />
                                        <span>{personal.phone}</span>
                                    </a>
                                    <div className="flex items-center gap-1.5 text-gray-300">
                                        <MapPin className="w-4 h-4 text-cyan-400" />
                                        <span>{personal.location}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Resumo Profissional */}
                            <div>
                                <h2 className="text-sm font-mono uppercase tracking-widest text-cyan-300 mb-4 flex items-center gap-2 font-semibold">
                                    <User className="w-4 h-4 text-purple-400" />
                                    Resumo Profissional
                                </h2>
                                <div className="p-5 rounded-xl border border-cyan-500/20 bg-[#101726] shadow-md">
                                    <p className="text-sm sm:text-base leading-relaxed text-gray-200">
                                        {summary}
                                    </p>
                                </div>
                            </div>

                            {/* Experiência Profissional */}
                            <div>
                                <h2 className="text-sm font-mono uppercase tracking-widest text-cyan-300 mb-4 flex items-center gap-2 font-semibold">
                                    <Briefcase className="w-4 h-4 text-purple-400" />
                                    Experiência Profissional
                                </h2>

                                <div className="space-y-6">
                                    {experiences.map((exp, index) => (
                                        <div key={index} className="p-5 rounded-xl border border-cyan-500/20 bg-[#101726] shadow-md">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                                                <h3 className="font-bold text-white text-base">
                                                    {exp.company} {exp.subtitle && <span className="text-cyan-300 font-normal">{exp.subtitle}</span>}
                                                </h3>
                                                <span className="text-xs font-mono text-cyan-300 bg-cyan-500/15 px-2.5 py-1 rounded-md border border-cyan-500/30 w-fit">
                                                    {exp.period}
                                                </span>
                                            </div>
                                            <p className="text-xs font-semibold text-gray-300 mb-3">{exp.role}</p>
                                            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-200 marker:text-purple-400">
                                                {exp.highlights.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Formação Acadêmica */}
                            <div>
                                <h2 className="text-sm font-mono uppercase tracking-widest text-cyan-300 mb-4 flex items-center gap-2 font-semibold">
                                    <GraduationCap className="w-4 h-4 text-purple-400" />
                                    Formação Acadêmica
                                </h2>

                                <div className="grid grid-cols-1 gap-3 text-sm">
                                    {education.map((edu, index) => (
                                        <div key={index} className="p-3.5 rounded-xl border border-cyan-500/20 bg-[#101726] flex justify-between items-center shadow-md">
                                            <div>
                                                <strong className="text-white block">{edu.degree}</strong>
                                                <span className="text-xs text-gray-300">{edu.institution}</span>
                                            </div>
                                            <span className="text-xs font-mono text-emerald-300 bg-emerald-500/15 px-2.5 py-1 rounded-md border border-emerald-500/30">
                                                {edu.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tecnologias & Competências */}
                            <div>
                                <h2 className="text-sm font-mono uppercase tracking-widest text-cyan-300 mb-3 flex items-center gap-2 font-semibold">
                                    <Cpu className="w-4 h-4 text-purple-400" />
                                    Tecnologias & Competências
                                </h2>
                                <div className="p-4 rounded-xl border border-cyan-500/20 bg-[#101726] space-y-2 text-xs sm:text-sm text-gray-200 shadow-md">
                                    <p><strong className="text-cyan-300">Backend:</strong> {technologies.backend}</p>
                                    <p><strong className="text-cyan-300">Frontend:</strong> {technologies.frontend}</p>
                                    <p><strong className="text-cyan-300">Mobile:</strong> {technologies.mobile}</p>
                                    <p><strong className="text-cyan-300">Design & Prototipagem:</strong> {technologies.design}</p>
                                    <p><strong className="text-cyan-300">Banco de Dados:</strong> {technologies.database}</p>
                                    <p><strong className="text-cyan-300">Ferramentas e DevOps:</strong> {technologies.devops}</p>
                                    <p><strong className="text-cyan-300">Outros:</strong> {technologies.others}</p>
                                </div>
                            </div>

                            {/* Cursos e Certificações */}
                            <div>
                                <h2 className="text-sm font-mono uppercase tracking-widest text-cyan-300 mb-3 flex items-center gap-2 font-semibold">
                                    <Award className="w-4 h-4 text-purple-400" />
                                    Cursos e Certificações
                                </h2>
                                <div className="p-4 rounded-xl border border-cyan-500/20 bg-[#101726] space-y-2 text-xs sm:text-sm shadow-md">
                                    {certifications.map((cert, index) => (
                                        <div key={index} className="flex items-center gap-2 text-gray-200">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                                            <span>{cert}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
