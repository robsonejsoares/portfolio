"use client";

import { X } from "lucide-react";

interface ButtonFecharProps {
    onClick: () => void;
    className?: string;
}

export function ButtonFechar({
    onClick,
    className = "",
}: ButtonFecharProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label="Fechar"
            className={`group relative cursor-pointer rounded-md border border-transparent p-1 text-slate-400 transition-colors duration-200 ease-out hover:bg-red-950/40 hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#607A9D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220] active:scale-[0.98] motion-reduce:transition-none ${className}`}
        >
            <X
                className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:scale-110 motion-reduce:transition-none"
                aria-hidden="true"
            />

            {/* Tooltip personalizado */}
            <span
                role="tooltip"
                className="pointer-events-none absolute right-0 top-full z-[10000] mt-2 whitespace-nowrap rounded-md border border-white/10 bg-slate-900 px-2.5 py-1.5 font-mono text-xs text-slate-300 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
            >
                Fechar
            </span>
        </button>
    );
}