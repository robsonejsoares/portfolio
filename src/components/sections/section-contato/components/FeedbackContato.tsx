"use client";

import {
    AlertCircle,
    CheckCircle2,
    TriangleAlert,
    Info,
    LoaderCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export type TipoFeedback =
    | "erro"
    | "sucesso"
    | "aviso"
    | "informacao"
    | "processando";

interface FeedbackContatoProps {
    tipo: TipoFeedback | null;
    mensagem: string;
}

const estilos = {
    erro: {
        cor: "text-red-400",
        Icone: AlertCircle,
        role: "alert" as const,
        ariaLive: "assertive" as const,
    },
    sucesso: {
        cor: "text-emerald-400",
        Icone: CheckCircle2,
        role: "status" as const,
        ariaLive: "polite" as const,
    },
    aviso: {
        cor: "text-amber-400",
        Icone: TriangleAlert,
        role: "status" as const,
        ariaLive: "polite" as const,
    },
    informacao: {
        cor: "text-cyan-400",
        Icone: Info,
        role: "status" as const,
        ariaLive: "polite" as const,
    },
    processando: {
        cor: "text-violet-400",
        Icone: LoaderCircle,
        role: "status" as const,
        ariaLive: "polite" as const,
    },
};

export function FeedbackContato({
    tipo,
    mensagem,
}: FeedbackContatoProps) {
    const estilo = tipo ? estilos[tipo] : null;
    const Icone = estilo?.Icone;

    return (
        <AnimatePresence mode="wait" initial={false}>
            {tipo && mensagem && estilo && Icone && (
                <motion.div
                    key={`${tipo}-${mensagem}`}
                    role={estilo.role}
                    aria-live={estilo.ariaLive}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.15,
                        ease: "easeOut",
                    }}
                    className="flex max-w-full items-start gap-2 text-xs"
                >
                    <Icone
                        size={14}
                        strokeWidth={1.7}
                        className={`mt-0.5 shrink-0 ${estilo.cor} ${tipo === "processando" ? "animate-spin" : ""
                            }`}
                        aria-hidden="true"
                    />

                    <p
                        className={`min-w-0 break-words leading-5 ${estilo.cor}`}
                    >
                        {mensagem}
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    );

}