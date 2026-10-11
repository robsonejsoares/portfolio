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

const finalComment = '// Movido por código limpo, lógica e alta performance.';

export function SectionSobre() {
    const { personal } = dadosCurriculo;
    const [displayedLines, setDisplayedLines] = useState<string[]>([""]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [isFullyTyped, setIsFullyTyped] = useState(false);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let isMounted = true;
        let timer: NodeJS.Timeout;

        const runTypingAndDeletingCycle = () => {
            if (!isMounted) return;

            let lineIdx = 0;
            let charIdx = 0;
            const currentLines: string[] = [""];

            // --- FASE 1: DIGITAÇÃO BEM LENTA E CALMA ---
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

                        if (char === ' ' || char === ',' || char === '"' || char === '=' || char === '$' || char === '`') {
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
                            const pauseTime = finishedLine.includes("return") ? 600 : 450;
                            timer = setTimeout(typeNextChar, pauseTime);
                        } else {
                            // Terminou de digitar tudo! Revela o comentário final
                            setIsFullyTyped(true);
                            setIsTyping(false);

                            // Pausa de 15 segundos com tudo visível antes de apagar
                            timer = setTimeout(() => {
                                startDeleting();
                            }, 15000);
                        }
                    }
                }
            };

            // --- FASE 2: APAGAR SUAVE ---
            const startDeleting = () => {
                if (!isMounted) return;
                setIsFullyTyped(false); // Some a frase final suavemente
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

                            const deleteDelay = Math.floor(Math.random() * 45) + 30;
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

            timer = setTimeout(typeNextChar, 800);
        };

        runTypingAndDeletingCycle();

        return () => {
            isMounted = false;
            clearTimeout(timer);
        };
    }, []);

    // Função cirúrgica para colorir cada token do código com as cores corretas
    const renderColoredLine = (line: string) => {
        if (line.startsWith("const ")) {
            return (
                <span>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-amber-300">robsonSoares</span>{" "}
                    <span className="text-white">= <span className="text-yellow-400">&#123;</span></span>
                </span>
            );
        }
        if (line.includes("};")) {
            return <span className="text-white"><span className="text-yellow-400">&#125;</span>;</span>;
        }
        if (line.includes("resolverDesafios")) {
            return (
                <span>
                    <span className="text-sky-300">resolverDesafios</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-purple-400">function</span>
                    <span className="text-white">()</span>{" "}
                    <span className="text-yellow-400">&#123;</span>
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
                    <span className="text-emerald-300">`Otimizando com $&#123;item&#125;`</span>
                    <span className="text-white">);</span>
                </span>
            );
        }

        if (line.includes(":")) {
            const colonIndex = line.indexOf(":");
            const keyPart = line.substring(0, colonIndex);
            const valuePart = line.substring(colonIndex + 1);

            const coloredValue = valuePart.replace(/"([^"]*)"/g, '<span class="text-emerald-300">"$1"</span>');

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
        <section id="about" className="relative py-28 px-4 flex items-center justify-center z-10">
            <div className="max-w-7xl w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Lado Esquerdo: Simulador de Editor de Código */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 rounded-2xl border border-white/10 bg-slate-900/80 shadow-2xl overflow-hidden backdrop-blur-xl"
                    >
                        {/* Barra Superior do Editor com bolinhas animadas */}
                        <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-white/10">
                            <div className="flex items-center gap-2.5">
                                <motion.span
                                    animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                    className="w-3 h-3 rounded-full bg-red-500 inline-block shadow-[0_0_8px_rgba(239,68,68,0.7)] cursor-pointer"
                                />
                                <motion.span
                                    animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
                                    transition={{ repeat: Infinity, duration: 2, delay: 0.3, ease: "easeInOut" }}
                                    className="w-3 h-3 rounded-full bg-amber-500 inline-block shadow-[0_0_8px_rgba(245,158,11,0.7)] cursor-pointer"
                                />
                                <motion.span
                                    animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
                                    transition={{ repeat: Infinity, duration: 2, delay: 0.6, ease: "easeInOut" }}
                                    className="w-3 h-3 rounded-full bg-emerald-500 inline-block shadow-[0_0_8px_rgba(16,185,129,0.7)] cursor-pointer"
                                />
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                                <Code className="w-3.5 h-3.5 text-cyan-400" />
                                <span>Full Stack Developer {isTyping && <span className="text-purple-400 font-semibold animate-pulse [text-shadow:0_0_10px_rgba(168,85,247,0.8)]">(Codando...)</span>}</span>
                            </div>
                            <div className="w-12"></div>
                        </div>

                        {/* Corpo do Código com Altura Otimizada (h-[400px]) */}
                        <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-hidden text-gray-300 h-[400px] flex flex-col justify-between">
                            <div className="space-y-1">
                                {displayedLines.map((line, index) => {
                                    const isCurrentLine = isTyping && index === currentLineIndex;

                                    return (
                                        <div key={index} className="whitespace-pre flex items-center">
                                            <span>
                                                {renderColoredLine(line)}
                                            </span>

                                            {/* Cursor branco estilo editor de código */}
                                            {isCurrentLine && (
                                                <span className="inline-block w-[2px] h-4 bg-white animate-pulse ml-1 align-middle shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Frase final */}
                            <div className="h-8 flex items-center pt-2 border-t border-white/5">
                                {isFullyTyped && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 4 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="text-xs font-mono text-slate-500 tracking-widest"
                                    >
                                        {finalComment}
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Lado Direito: Conteúdo principal focado em competências */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 flex flex-col justify-center"
                    >
                        <div>
                            <h2 className="font-display font-black text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent mb-6">
                                Sobre mim
                            </h2>

                            <p className="text-base leading-relaxed mb-4 text-gray-300">
                                Sou <span className="font-medium">{personal.name}</span>, um Programador Full Stack apaixonado por programação, tecnologia e por transformar lógica complexa em sistema eficiente. Atuo criando APIs robustas, arquiteturas limpas e experiências digitais fluidas de ponta a ponta.
                            </p>

                            <p className="text-sm leading-relaxed mb-6 text-gray-400">
                                Especialista no ecossistema de desenvolvimento moderno, com forte foco em automação, qualidade de código e escalabilidade para entregar soluções de alta performance.
                            </p>
                        </div>

                        {/* Lista de competências */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-2.5"
                        >
                            <div className="space-y-2.5">
                                <div className="flex items-center gap-3 text-sm text-gray-300">
                                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "rgb(0, 245, 255)", boxShadow: "rgba(0, 245, 255, 0.6) 0px 0px 6px" }}></div>
                                    Desenvolvimento web e mobile moderno.
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-300">
                                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "rgb(0, 245, 255)", boxShadow: "rgba(0, 245, 255, 0.6) 0px 0px 6px" }}></div>
                                    Construção de microsserviços e APIs REST.
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-300">
                                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "rgb(0, 245, 255)", boxShadow: "rgba(0, 245, 255, 0.6) 0px 0px 6px" }}></div>
                                    Modelagem de dados em bancos relacionais e NoSQL.
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-300">
                                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "rgb(0, 245, 255)", boxShadow: "rgba(0, 245, 255, 0.6) 0px 0px 6px" }}></div>
                                    Gestão de ambientes, containers e automação de entrega.
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-300">
                                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "rgb(0, 245, 255)", boxShadow: "rgba(0, 245, 255, 0.6) 0px 0px 6px" }}></div>
                                    Testes automatizados com IA aplicada ao desenvolvimento.
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-300">
                                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "rgb(0, 245, 255)", boxShadow: "rgba(0, 245, 255, 0.6) 0px 0px 6px" }}></div>
                                    Criação de Design Systems e prototipagem interativa (UI/UX).
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
