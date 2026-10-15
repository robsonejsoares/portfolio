"use client";

interface Tecnologia {
    label: string;
    icon: string;
    color: string;
}

const tecnologiasFrontend: Tecnologia[] = [
    { label: "React.js", icon: "⚛️", color: "97, 218, 251" },
    { label: "Next.js", icon: "▲", color: "255, 255, 255" },
    { label: "TypeScript", icon: "🔷", color: "49, 120, 198" },
    { label: "JavaScript", icon: "⚡", color: "247, 223, 30" },
    { label: "Tailwind", icon: "💨", color: "6, 182, 212" },
    { label: "React Native", icon: "📱", color: "97, 218, 251" },
    { label: "Expo", icon: "🚀", color: "255, 255, 255" },
    { label: "Kotlin", icon: "🟣", color: "167, 139, 250" },
];

const tecnologiasBackend: Tecnologia[] = [
    { label: "Java", icon: "☕", color: "237, 117, 35" },
    { label: "Spring Boot", icon: "⚙️", color: "0, 89, 156" },
    { label: "Node.js", icon: "🟢", color: "51, 153, 51" },
    { label: "SQL", icon: "🗄️", color: "68, 121, 161" },
    { label: "Docker", icon: "🐙", color: "240, 80, 50" },
    { label: "Git & GitHub", icon: "📑", color: "210, 71, 38" },
    { label: "Cloud", icon: "☁️", color: "16, 185, 129" },
    { label: "PHP", icon: "🐘", color: "119, 123, 180" },
    { label: "n8n", icon: "🔄", color: "234, 88, 12" },
];

interface OrbitaProps {
    tecnologias: Tecnologia[];
    duracao: number;
    raio: number;
    sentido: "normal" | "reverso";
    identificador: string;
}

function OrbitaTecnologias({
    tecnologias,
    duracao,
    raio,
    sentido,
    identificador,
}: OrbitaProps) {
    const animacao = sentido === "normal" ? "orbit-r1" : "orbit-r2";

    return (
        <>
            {tecnologias.map((tecnologia, indice) => (
                <div
                    key={`${identificador}-${tecnologia.label}`}
                    className={`orbit-item orbit-${identificador} absolute left-1/2 top-1/2 z-40`}
                    style={{
                        transformOrigin: "center center",
                        animation: `${animacao} ${duracao}s linear -${(
                            indice *
                            (duracao / tecnologias.length)
                        ).toFixed(2)}s infinite`,
                        ["--raio-orbita" as string]: `${raio}px`,
                    }}
                >
                    <div
                        title={tecnologia.label}
                        className="orbit-badge pointer-events-auto flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-full px-2 py-1 font-mono text-[9px] backdrop-blur-sm"
                        style={{
                            background: `rgba(${tecnologia.color}, 0.094)`,
                            border: `1px solid rgba(${tecnologia.color}, 0.25)`,
                            color: `rgb(${tecnologia.color})`,
                            boxShadow: `rgba(${tecnologia.color}, 0.19) 0px 0px 8px`,
                        }}
                    >
                        <span>{tecnologia.icon}</span>
                        <span className="orbit-label">{tecnologia.label}</span>
                    </div>
                </div>
            ))}
        </>
    );
}

export function OrbitasTecnologias() {
    return (
        <>
            <style jsx global>{`
                @keyframes rotate-ring {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes rotate-ring-rev {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(-360deg);
                    }
                }

                @keyframes orbit-r1 {
                    from {
                        transform: rotate(0deg)
                            translateX(var(--raio-orbita)) rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg)
                            translateX(var(--raio-orbita)) rotate(-360deg);
                    }
                }

                @keyframes orbit-r2 {
                    from {
                        transform: rotate(0deg)
                            translateX(var(--raio-orbita)) rotate(0deg);
                    }
                    to {
                        transform: rotate(-360deg)
                            translateX(var(--raio-orbita)) rotate(360deg);
                    }
                }

                /* Mobile: raios independentes para cada órbita */
                @media (max-width: 639px) {
                    .orbit-item.orbit-frontend {
                        --raio-orbita: 92px !important;
                    }

                    .orbit-item.orbit-backend {
                        --raio-orbita: 137px !important;
                    }

                    .orbit-badge {
                        gap: 3px;
                        padding: 3px 6px;
                        font-size: 8px;
                    }
                }

                /* Celulares estreitos */
                @media (max-width: 359px) {
                    .orbit-item.orbit-frontend {
                        --raio-orbita: 78px !important;
                    }

                    .orbit-item.orbit-backend {
                        --raio-orbita: 112px !important;
                    }

                    .orbit-label {
                        display: none;
                    }

                    .orbit-badge {
                        min-width: 28px;
                        min-height: 28px;
                        justify-content: center;
                        padding: 4px;
                        font-size: 12px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .orbit-item {
                        animation-play-state: paused !important;
                    }
                }
            `}</style>

            <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center">
                {/* Órbita visual interna */}
                <div
                    className="pointer-events-none absolute z-10 h-[min(74vw,350px)] w-[min(74vw,350px)] rounded-full border border-dashed"
                    style={{
                        borderColor: "rgb(0, 245, 255)",
                        opacity: 0.12,
                        animation: "rotate-ring 45s linear infinite",
                    }}
                />

                {/* Órbita visual externa */}
                <div
                    className="pointer-events-none absolute z-10 h-[min(92vw,470px)] w-[min(92vw,470px)] rounded-full border border-dashed"
                    style={{
                        borderColor: "rgb(139, 92, 246)",
                        opacity: 0.07,
                        animation: "rotate-ring-rev 65s linear infinite",
                    }}
                />

                <OrbitaTecnologias
                    tecnologias={tecnologiasFrontend}
                    duracao={45}
                    raio={135}
                    sentido="normal"
                    identificador="frontend"
                />

                <OrbitaTecnologias
                    tecnologias={tecnologiasBackend}
                    duracao={65}
                    raio={180}
                    sentido="reverso"
                    identificador="backend"
                />
            </div>
        </>
    );
}