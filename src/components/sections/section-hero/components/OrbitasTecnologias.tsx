
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
    const animacao =
        sentido === "normal" ? "orbit-r1" : "orbit-r2";

    return (
        <>
            {tecnologias.map((tecnologia, indice) => (
                <div
                    key={`${identificador}-${tecnologia.label}`}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transformOrigin: "center center",
                        animation: `${animacao} ${duracao}s linear -${(
                            indice *
                            (duracao / tecnologias.length)
                        ).toFixed(2)}s infinite`,
                        zIndex: 40,
                    }}
                >
                    <div
                        className="pointer-events-auto flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 font-mono text-[9px] backdrop-blur-sm"
                        style={{
                            transform: "translate(-50%, -50%)",
                            background: `rgba(${tecnologia.color}, 0.094)`,
                            border: `1px solid rgba(${tecnologia.color}, 0.25)`,
                            color: `rgb(${tecnologia.color})`,
                            boxShadow: `rgba(${tecnologia.color}, 0.19) 0px 0px 8px`,
                            ["--raio-orbita" as string]: `${raio}px`,
                        }}
                    >
                        <span>{tecnologia.icon}</span>
                        <span>{tecnologia.label}</span>
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
                        transform: rotate(0deg) translateX(135px)
                            rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg) translateX(135px)
                            rotate(-360deg);
                    }
                }

                @keyframes orbit-r2 {
                    from {
                        transform: rotate(0deg) translateX(180px)
                            rotate(0deg);
                    }
                    to {
                        transform: rotate(-360deg) translateX(180px)
                            rotate(360deg);
                    }
                }
            `}</style>

            <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center">
                <div
                    className="pointer-events-none absolute z-10 rounded-full border border-dashed"
                    style={{
                        borderColor: "rgb(0, 245, 255)",
                        opacity: 0.12,
                        width: "350px",
                        height: "350px",
                        animation: "rotate-ring 45s linear infinite",
                    }}
                />

                <div
                    className="pointer-events-none absolute z-10 rounded-full border border-dashed"
                    style={{
                        borderColor: "rgb(139, 92, 246)",
                        opacity: 0.07,
                        width: "470px",
                        height: "470px",
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
