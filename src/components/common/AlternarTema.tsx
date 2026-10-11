"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function AlternarTema() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    if (!mounted) {
        return (
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 w-9 h-9 flex items-center justify-center opacity-0">
                <div className="w-4 h-4" />
            </div>
        );
    }

    const currentTheme = resolvedTheme || theme;
    const isDark = currentTheme === "dark" || currentTheme === "system";

    return (
        <div className="relative group">
            <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="p-2 rounded-xl text-gray-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/40 transition-all cursor-pointer flex items-center justify-center"
                aria-label="Alternar Tema"
            >
                {isDark ? (
                    <Sun className="w-4 h-4 text-cyan-400 group-hover:rotate-45 transition-transform duration-300" />
                ) : (
                    <Moon className="w-4 h-4 text-purple-400 group-hover:-rotate-12 transition-transform duration-300" />
                )}
            </button>

            {/* Tooltip Cyberpunk */}
            <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-xl text-[10px] font-mono font-bold text-cyan-300 bg-slate-950/95 border border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl shadow-cyan-950/80 backdrop-blur-md z-50">
                {isDark ? "Modo Claro" : "Modo Escuro"}
            </span>
        </div>
    );
}
