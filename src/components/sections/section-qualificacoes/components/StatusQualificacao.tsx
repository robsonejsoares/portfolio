import type { Qualificacao } from "@/data/dadosQualificacoes";

interface StatusQualificacaoProps {
    status: NonNullable<Qualificacao["status"]>;
    category?: Qualificacao["category"];
}

export function StatusQualificacao({
    status,
    category,
}: StatusQualificacaoProps) {
    const concluido = status === "Concluído" || status === "Concluída";

    const textoStatus =
        category === "Cursos"
            ? "Concluído"
            : category
                ? "Concluída"
                : status;

    const statusStyles = concluido
        ? {
            badge: "border-emerald-500/20 bg-emerald-500/[0.05]",
            dot: "bg-emerald-400",
            text: "text-emerald-400",
        }
        : {
            badge: "border-red-500/20 bg-red-500/[0.05]",
            dot: "bg-red-400",
            text: "text-red-400",
        };

    return (
        <div
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-[3px] ${statusStyles.badge}`}
        >
            <span
                aria-hidden="true"
                className={`size-1.5 shrink-0 rounded-full ${statusStyles.dot}`}
            />

            <span
                className={`whitespace-nowrap font-mono text-[10px] leading-tight ${statusStyles.text}`}
            >
                {textoStatus}
            </span>
        </div>
    );

}