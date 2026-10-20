"use client";

import { useEffect, useState } from "react";

export function ThemeToggle({ className = "" }: { className?: string }) {
    const [light, setLight] = useState(() => typeof window !== "undefined" && sessionStorage.getItem("portfolio-theme") === "light");

    useEffect(() => {
        document.documentElement.classList.toggle("theme-light", light);
    }, [light]);

    function alternarTema() {
        const next = !light;
        setLight(next);
        document.documentElement.classList.toggle("theme-light", next);
        sessionStorage.setItem("portfolio-theme", next ? "light" : "dark");
    }

    return (
        <button type="button" onClick={alternarTema} aria-label={light ? "Ativar modo escuro" : "Ativar modo claro"} className={className}>
            {light ? "Modo escuro" : "Modo claro"}
        </button>
    );
}
