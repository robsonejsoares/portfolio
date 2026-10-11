"use client";

import { X } from "lucide-react";

interface ButtonFecharProps {
    onClick: () => void;
    className?: string;
}

export function ButtonFechar({ onClick, className = "" }: ButtonFecharProps) {
    return (
        <button
            onClick={onClick}
            className={`p-2 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-500/15 hover:border-red-500/40 border border-transparent shadow-sm hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ${className}`}
            aria-label="Fechar"
        >
            <X className="w-5 h-5 transition-transform duration-300 hover:rotate-90" />
        </button>
    );
}
