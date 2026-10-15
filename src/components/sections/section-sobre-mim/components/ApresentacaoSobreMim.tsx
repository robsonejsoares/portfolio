
"use client";

import { motion } from "framer-motion";
import { dadosCurriculo } from "@/data/dadosCurriculo";
import { competencias } from "../dadosEditorCodigo";

export function ApresentacaoSobreMim() {
    const { personal } = dadosCurriculo;

    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}

            className="order-1 flex min-w-0 flex-col justify-center lg:order-1 lg:col-span-6"
        >
            <div>
                <h2 className="mb-3 font-display text-2xl font-bold text-cyan-300/70">
                    Sobre mim
                </h2>

                <p className="mb-5 text-xs font-mono tracking-widest text-slate-400">
                    Conheça minha trajetória e como transformo ideias em soluções.
                </p>

                {/* Linha separadora */}
                <div className="mb-5 h-px w-full bg-gradient-to-r from-cyan-400/50 via-white/10 to-transparent" />

                <p className="mb-3 text-base leading-relaxed text-slate-400">
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

                <p className="mb-4 text-sm leading-relaxed text-slate-400">
                    Especialista no ecossistema de desenvolvimento
                    moderno, com forte foco em automação, qualidade
                    de código e escalabilidade para entregar
                    soluções de alta performance.
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
                {competencias.map((competencia) => (
                    <div
                        key={competencia}
                        className="flex items-center gap-3 text-sm text-slate-500"
                    >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00f7ff71] shadow-[0_0_6px_rgba(0,245,255,0.6)]" />

                        <span>{competencia}</span>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
}
