import Image from "next/image";

interface BrandLogoProps {
    tamanho?: "navbar" | "footer";
    mostrarNome?: boolean;
    aoClicar?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function BrandLogo({
    tamanho = "navbar",
    mostrarNome = true,
    aoClicar,
}: BrandLogoProps) {
    const isNavbar = tamanho === "navbar";

    return (
        <a
            href="#hero"
            onClick={aoClicar}
            aria-label="Robson.dev — voltar ao início"
            className={`group flex items-center text-base font-extrabold tracking-wider text-white ${isNavbar ? "gap-2.5" : "gap-2"
                }`}
        >
            <div
                className={`flex items-center justify-center overflow-hidden border border-white/10 bg-slate-900 shadow-lg transition-transform group-hover:scale-105 ${isNavbar
                        ? "h-9 w-9 rounded-xl"
                        : "h-7 w-7 rounded-lg"
                    }`}
            >
                <Image
                    src="/favicon.svg"
                    alt=""
                    width={isNavbar ? 32 : 24}
                    height={isNavbar ? 32 : 24}
                    className="h-full w-full object-contain"
                />
            </div>

            {mostrarNome && (
                <span
                    className={`text-gradient-cyan ${isNavbar
                            ? "hidden sm:inline-block"
                            : "text-xs sm:text-sm"
                        }`}
                >
                    Robson<span className="text-white">.dev</span>
                </span>
            )}
        </a>
    );
}