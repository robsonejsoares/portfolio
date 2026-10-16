"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { finalComment } from "../dadosEditorCodigo";

interface EditorCodigoProps {
    displayedLines: string[];
    currentLineIndex: number;
    isFullyTyped: boolean;
    isTyping: boolean;
}

export function EditorCodigo({
    displayedLines,
    currentLineIndex,
    isFullyTyped,
    isTyping,
}: EditorCodigoProps) {
    const renderColoredLine = (line: string) => {
        if (line.startsWith("const ")) {
            return (
                <>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-amber-300">robsonSoares</span>{" "}
                    <span className="text-white">
                        = <span className="text-yellow-400">{"{"}</span>
                    </span>
                </>
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
                <>
                    <span className="text-sky-300">resolverDesafios</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-purple-400">function</span>
                    <span className="text-white">()</span>{" "}
                    <span className="text-yellow-400">{"{"}</span>
                </>
            );
        }

        if (line.includes("return")) {
            return (
                <>
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-amber-300">this</span>.
                    <span className="text-blue-300">automation</span>.
                    <span className="text-yellow-300">map</span>
                    <span className="text-white">(item =&gt; </span>
                    <span className="text-emerald-300">
                        {"`Otimizando com ${item}`"}
                    </span>
                    <span className="text-white">);</span>
                </>
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
                <>
                    <span className="text-sky-300">{keyPart}</span>
                    <span className="text-white">:</span>
                    <span
                        className="whitespace-pre-wrap [overflow-wrap:anywhere]"
                        dangerouslySetInnerHTML={{
                            __html: coloredValue,
                        }}
                    />
                </>
            );
        }

        return <span className="text-white">{line}</span>;
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 w-full min-w-0 max-w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur-xl lg:order-2"
        >
            {/* Cabeçalho */}
            <div className="flex min-w-0 flex-wrap items-center justify-between gap-x-3 gap-y-2 overflow-hidden border-b border-white/10 bg-slate-950/80 px-3 py-3 sm:flex-nowrap sm:px-4">
                <div className="flex shrink-0 items-center gap-2.5">
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

                <div className="ml-auto flex min-w-0 flex-1 items-center justify-end gap-1.5 font-mono text-[10px] text-gray-400 sm:text-xs">
                    <Code className="h-3.5 w-3.5 shrink-0 text-cyan-400" />

                    <span className="min-w-0 text-right [overflow-wrap:anywhere]">
                        Full Stack Developer
                        {isTyping && (
                            <span className="ml-1 animate-pulse font-semibold text-purple-400 [text-shadow:0_0_10px_rgba(168,85,247,0.8)]">
                                (Codando...)
                            </span>
                        )}
                    </span>
                </div>
            </div>

            {/* Código */}
            <div className="flex h-[400px] w-full min-w-0 max-w-full flex-col overflow-hidden p-3 font-mono text-[10px] leading-relaxed text-gray-300 sm:p-5 sm:text-sm lg:h-[460px]">
                <div className="min-h-0 min-w-0 flex-1 overflow-hidden py-1">
                    <div className="min-w-0 max-w-full space-y-1">
                        {displayedLines.map((line, index) => {
                            const isCurrentLine =
                                isTyping && index === currentLineIndex;

                            const indentation =
                                line.match(/^\s*/)?.[0].length ?? 0;

                            const content = line.trimStart();

                            return (
                                <div
                                    key={index}
                                    className="min-w-0 max-w-full"
                                    style={{
                                        paddingLeft: `${indentation * 0.6}em`,
                                    }}
                                >
                                    <span className="whitespace-pre-wrap [overflow-wrap:anywhere]">
                                        {renderColoredLine(content)}
                                        {isCurrentLine && (
                                            <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-white align-middle shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
                                        )}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Comentário final */}
                <div className="flex h-8 min-h-8 min-w-0 max-w-full shrink-0 items-center overflow-hidden border-t border-white/5 pt-2">
                    {isFullyTyped && (
                        <motion.div
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            className="max-w-full truncate font-mono text-[10px] tracking-wide text-slate-500 sm:text-xs sm:tracking-widest"
                        >
                            {finalComment}
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}