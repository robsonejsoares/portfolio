
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { dadosCurriculo } from "@/data/dadosCurriculo";
import { Code } from "lucide-react";

const codeLinesWithoutComment = [
    'const robsonSoares = {',
    '    name: "Robson Soares",',
    '    frontend: ["React", "Next.js", "TypeScript", "Tailwind"],',
    '    backend: ["Java", "Node.js", "NestJS"],',
    '    database: ["PostgreSQL", "MySQL", "MongoDB"],',
    '    api: ["RESTful APIs", "Microsserviços"],',
    '    mobile: ["React Native"],',
    '    automation: ["Testes", "CI/CD & IAs"],',
    '    resolverDesafios: function() {',
    '        return this.automation.map(item => `Otimizando com ${item}`);',
    '    }',
    '};'
];

const finalComment = "// Movido por código limpo, lógica e alta performance.";

const competencias = [
    "Desenvolvimento web e mobile moderno.",
    "Construção de microsserviços e APIs REST.",
    "Modelagem de dados em bancos relacionais e NoSQL.",
    "Gestão de ambientes, containers e automação de entrega.",
    "Testes automatizados com IA aplicada ao desenvolvimento.",
    "Criação de Design Systems e prototipagem interativa (UI/UX).",
];

export function SectionSobre() {
    const { personal } = dadosCurriculo;

    const [displayedLines, setDisplayedLines] = useState<string[]>([""]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [isFullyTyped, setIsFullyTyped] = useState(false);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let isMounted = true;
        let timer: ReturnType<typeof setTimeout>;

        const runTypingAndDeletingCycle = () => {
            if (!isMounted) return;

            let lineIdx = 0;
            let charIdx = 0;
            const currentLines: string[] = [""];

            const startDeleting = () => {
                if (!isMounted) return;

                setIsFullyTyped(false);
                setIsTyping(true);

                let lIdx = codeLinesWithoutComment.length - 1;
                let cIdx = codeLinesWithoutComment[lIdx].length;

                const activeLines = [...codeLinesWithoutComment];

                const deleteNextChar = () => {
                    if (!isMounted) return;

                    if (lIdx >= 0) {
                        const targetLine = codeLinesWithoutComment[lIdx];

                        if (cIdx >= 0) {
                            activeLines[lIdx] = targetLine.substring(0, cIdx);

                            setDisplayedLines([...activeLines]);
                            setCurrentLineIndex(lIdx);

                            cIdx--;

                            const deleteDelay =
                                Math.floor(Math.random() * 45) + 30;

                            timer = setTimeout(deleteNextChar, deleteDelay);
                        } else {
                            activeLines.pop();
                            lIdx--;

                            if (lIdx >= 0) {
                                cIdx = codeLinesWithoutComment[lIdx].length;
                                timer = setTimeout(deleteNextChar, 100);
                            } else {
                                timer = setTimeout(() => {
                                    runTypingAndDeletingCycle();
                                }, 1200);
                            }
                        }
                    }
                };

                deleteNextChar();
            };

            const typeNextChar = () => {
                if (!isMounted) return;

                setIsTyping(true);

                if (lineIdx < codeLinesWithoutComment.length) {
                    const targetLine = codeLinesWithoutComment[lineIdx];

                    if (charIdx <= targetLine.length) {
                        currentLines[lineIdx] = targetLine.substring(0, charIdx);

                        setDisplayedLines([...currentLines]);
                        setCurrentLineIndex(lineIdx);

                        charIdx++;

                        const char = targetLine.charAt(charIdx - 1);

                        let humanDelay = Math.floor(Math.random() * 90) + 80;

                        if (targetLine.includes("return")) {
                            humanDelay = Math.floor(Math.random() * 110) + 95;
                        }

                        if (
                            char === " " ||
                            char === "," ||
                            char === '"' ||
                            char === "=" ||
                            char === "$" ||
                            char === "`"
                        ) {
                            humanDelay += Math.floor(Math.random() * 60);
                        }

                        timer = setTimeout(typeNextChar, humanDelay);
                    } else {
                        const finishedLine = codeLinesWithoutComment[lineIdx];

                        lineIdx++;
                        charIdx = 0;

                        if (lineIdx < codeLinesWithoutComment.length) {
                            currentLines.push("");
                            setCurrentLineIndex(lineIdx);

                            const pauseTime = finishedLine.includes("return")
                                ? 600
                                : 450;

                            timer = setTimeout(typeNextChar, pauseTime);
                        } else {
                            setIsFullyTyped(true);
                            setIsTyping(false);

                            timer = setTimeout(startDeleting, 15000);
                        }
                    }
                }
            };

            timer = setTimeout(typeNextChar, 800);
        };

        runTypingAndDeletingCycle();

        return () => {
            isMounted = false;
            clearTimeout(timer);
        };
    }, []);

    const renderColoredLine = (line: string) => {
        if (line.startsWith("const ")) {
            return (
                <span>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-amber-300">robsonSoares</span>{" "}
                    <span className="text-white">
                        = <span className="text-yellow-400">{"{"}</span>
                    </span>
                </span>
            );
        }

        if (line.includes("};")) {
            return (
                <span className="text-white">
                    <span className="text-yellow-400">{"}"}</span>;
                </span>
            );
        }

        if (line.includes("resolverDesafios")) {
            return (
                <span>
                    <span className="text-sky-300">resolverDesafios</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-purple-400">function</span>
                    <span className="text-white">()</span>{" "}
                    <span className="text-yellow-400">{"{"}</span>
                </span>
            );
        }

        if (line.includes("return")) {
            return (
                <span className="text-white">
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-amber-300">this</span>.
                    <span className="text-blue-300">automation</span>.
                    <span className="text-yellow-300">map</span>
                    <span className="text-white">(item =&gt; </span>
                    <span className="text-emerald-300">
                        {"`Otimizando com ${item}`"}
                    </span>
                    <span className="text-white">);</span>
                </span>
            );
        }

        if (line.includes(":")) {
            const colonIndex = line.indexOf(":");
            const keyPart = line.substring(0, colonIndex);
            const valuePart = line.substring(colonIndex + 1);

            const coloredValue = valuePart.replace(
                /"([^"]*)"/g,
                '<span class="text-emerald-300">"$1"</span>'
            );

            return (
                <span>
                    <span className="text-sky-300">{keyPart}</span>
                    <span className="text-white">:</span>
                    <span dangerouslySetInnerHTML={{ __html: coloredValue }} />
                </span>
            );
        }

        return <span className="text-white">{line}</span>;
    };

    return (
        <section
            id="about"
            className="relative z-10 flex items-center justify-center px-4 pt-6 pb-16 sm:pt-8 sm:pb-20"
        >
            <div className="w-full max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
                    {/* Editor: segundo no mobile, primeiro no desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur-xl lg:order-1 lg:col-span-6"
                    >
                        {/* Barra superior do editor */}
                        <div className="flex items-center justify-between border-b border-white/10 bg-slate-950/80 px-4 py-3">
                            <div className="flex items-center gap-2.5">
                                <motion.span
                                    animate={{
                                        scale: [1, 1.25, 1],
                                        opacity: [0.7, 1, 0.7],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                        ease: "easeInOut",
                                    }}
                                    className="inline-block h-3 w-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]"
                                />

                                <motion.span
                                    animate={{
                                        scale: [1, 1.25, 1],
                                        opacity: [0.7, 1, 0.7],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                        delay: 0.3,
                                        ease: "easeInOut",
                                    }}
                                    className="inline-block h-3 w-3 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.7)]"
                                />

                                <motion.span
                                    animate={{
                                        scale: [1, 1.25, 1],
                                        opacity: [0.7, 1, 0.7],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                        delay: 0.6,
                                        ease: "easeInOut",
                                    }}
                                    className="inline-block h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                                />
                            </div>

                            <div className="flex items-center gap-1.5 font-mono text-xs text-gray-400">
                                <Code className="h-3.5 w-3.5 text-cyan-400" />

                                <span>
                                    Full Stack Developer{" "}
                                    {isTyping && (
                                        <span className="animate-pulse font-semibold text-purple-400 [text-shadow:0_0_10px_rgba(168,85,247,0.8)]">
                                            (Codando...)
                                        </span>
                                    )}
                                </span>
                            </div>

                            <div className="w-12" />
                        </div>

                        {/* Corpo do código */}
                        <div className="flex h-[400px] flex-col justify-between overflow-hidden p-6 font-mono text-xs leading-relaxed text-gray-300 sm:text-sm">
                            <div className="space-y-1">
                                {displayedLines.map((line, index) => {
                                    const isCurrentLine =
                                        isTyping && index === currentLineIndex;

                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center whitespace-pre"
                                        >
                                            <span>{renderColoredLine(line)}</span>

                                            {isCurrentLine && (
                                                <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-white align-middle shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Comentário final */}
                            <div className="flex h-8 items-center border-t border-white/5 pt-2">
                                {isFullyTyped && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            ease: "easeOut",
                                        }}
                                        className="font-mono text-xs tracking-widest text-slate-500"
                                    >
                                        {finalComment}
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Sobre mim: primeiro no mobile, segundo no desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 flex min-w-0 flex-col justify-center lg:order-2 lg:col-span-6"
                    >
                        <div>
                            <h2 className="mb-3 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text font-display text-4xl font-black text-transparent">
                                Sobre mim
                            </h2>

                            <p className="mb-5 text-xs font-mono tracking-widest text-slate-400">
                                Conheça minha trajetória e como transformo ideias em soluções.
                            </p>

                            <p className="mb-4 text-base leading-relaxed text-slate-300">
                                Sou{" "}
                                <span className="font-medium">
                                    {personal.name}
                                </span>
                                , um Programador Full Stack apaixonado por
                                programação, tecnologia e por transformar lógica
                                complexa em sistema eficiente. Atuo criando APIs
                                robustas, arquiteturas limpas e experiências
                                digitais fluidas de ponta a ponta.
                            </p>

                            <p className="mb-6 text-sm leading-relaxed text-slate-400">
                                Especialista no ecossistema de desenvolvimento
                                moderno, com forte foco em automação, qualidade
                                de código e escalabilidade para entregar
                                soluções de alta performance.
                            </p>
                        </div>

                        {/* Lista de competências otimizada */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-2.5"
                        >
                            {competencias.map((competencia) => (
                                <div
                                    key={competencia}
                                    className="flex items-center gap-3 text-sm text-slate-500"
                                >
                                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00f5ff] shadow-[0_0_6px_rgba(0,245,255,0.6)]" />

                                    <span>{competencia}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
