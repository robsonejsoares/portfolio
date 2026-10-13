
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
            className={`group relative cursor-pointer rounded-md border border-transparent p-0.5 text-gray-400 shadow-sm transition-all duration-300 hover:scale-105 hover:border-red-500/40 hover:bg-red-500/15 hover:text-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] active:scale-95 ${className}`}
        >
            <X className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />

            {/* Tooltip personalizado */}
            <span
                role="tooltip"
                className="pointer-events-none absolute right-0 top-full z-[10000] mt-2 whitespace-nowrap rounded-md border border-red-500/20 bg-[#090d16] px-2.5 py-1.5 font-mono text-xs text-red-300 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
            >
                Fechar
            </span>
        </button>
    );
}
