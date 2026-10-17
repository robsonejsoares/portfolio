
import type { ReactNode } from "react";

import {
    ArrowUpRight,
    Gamepad2,
    Mail,
    MessageCircle,
    Send,
} from "lucide-react";

import {
    dadosRedesSociais,
    configuracaoEmail,
} from "@/data/dadosRedesSociais";

type RedeSocial =
    | "linkedin"
    | "github"
    | "whatsapp"
    | "email"
    | "discord"
    | "telegram";

interface RedesSociaisProps {
    redes?: RedeSocial[];
    mostrarTexto?: boolean;
    className?: string;
    links?: Partial<Record<RedeSocial, string>>;
    variante?: "padrao" | "footer";
    varianteMobile?: "padrao" | "simples";
}

interface RedeSocialItem {
    id: RedeSocial;
    nome: string;
    href: string;
    tooltip: string;
    externa: boolean;
    icone: ReactNode;
    corIcone?: string;
    corHoverTexto?: string;
}

function GitIcon({
    className = "h-5 w-5",
}: {
    className?: string;
}) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    );
}

function LinkedinIcon({
    className = "h-5 w-5",
}: {
    className?: string;
}) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
    );
}

const ORDEM_PADRAO: RedeSocial[] = [
    "github",
    "linkedin",
    "whatsapp",
    "email",
    "discord",
    "telegram",
];

/**
 * Cria um link para abrir uma nova mensagem no Gmail
 * com destinatário, assunto e mensagem preenchidos.
 */
function criarLinkGmail(email: string): string {
    const destinatario = email
        .replace(/^mailto:/i, "")
        .trim();

    const parametros = new URLSearchParams({
        view: "cm",
        fs: "1",
        to: destinatario,
        su: configuracaoEmail.assunto,
        body: configuracaoEmail.mensagem,
    });

    return `https://mail.google.com/mail/?${parametros.toString()}`;
}

/**
 * Aceita um ID numérico ou uma URL completa do Discord.
 */
function criarLinkDiscord(valor: string): string {
    const discord = valor.trim();

    if (!discord) return "";

    if (/^https?:\/\//i.test(discord)) {
        return discord;
    }

    if (/^\d+$/.test(discord)) {
        return `https://discord.com/users/${discord}`;
    }

    return "https://discord.com";
}

/**
 * Normaliza o usuário ou a URL do Telegram.
 */
function criarLinkTelegram(valor: string): string {
    const telegram = valor.trim();

    if (!telegram) return "";

    if (/^https?:\/\//i.test(telegram)) {
        return telegram;
    }

    const usuario = telegram.replace(/^@/, "");

    return `https://t.me/${usuario}`;
}

export function RedesSociais({
    redes = ["github", "linkedin", "whatsapp"],
    mostrarTexto = true,
    className = "",
    links = {},
    variante = "padrao",
    varianteMobile = "padrao",
}: RedesSociaisProps) {
    const isFooter = variante === "footer";
    const isMobileSimples = varianteMobile === "simples";

    const linksConfigurados = {
        ...dadosRedesSociais,
        ...links,
    };

    const email = linksConfigurados.email ?? "";

    const catalogo: RedeSocialItem[] = [
        {
            id: "github",
            nome: "GitHub",
            href: linksConfigurados.github ?? "",
            tooltip: "Visitar perfil no GitHub",
            externa: true,
            icone: <GitIcon />,
            corIcone: "text-gray-300",
            corHoverTexto: "group-hover:text-white",
        },
        {
            id: "linkedin",
            nome: "LinkedIn",
            href: linksConfigurados.linkedin ?? "",
            tooltip: "Visitar perfil no LinkedIn",
            externa: true,
            icone: <LinkedinIcon />,
            corIcone: "text-blue-400",
            corHoverTexto: "group-hover:text-blue-400",
        },
        {
            id: "whatsapp",
            nome: "WhatsApp",
            href: linksConfigurados.whatsapp ?? "",
            tooltip: "Conversar pelo WhatsApp",
            externa: true,
            icone: <MessageCircle />,
            corIcone: "text-[#25D366]",
            corHoverTexto: "group-hover:text-[#25D366]",
        },
        {
            id: "email",
            nome: "E-mail",
            href: email.trim()
                ? criarLinkGmail(email)
                : "",
            tooltip: "Enviar um e-mail pelo Gmail",
            externa: true,
            icone: <Mail />,
            corIcone: "text-rose-400",
            corHoverTexto: "group-hover:text-rose-400",
        },
        {
            id: "discord",
            nome: "Discord",
            href: criarLinkDiscord(
                linksConfigurados.discord ?? "",
            ),
            tooltip: "Acessar perfil no Discord",
            externa: true,
            icone: <Gamepad2 />,
            corIcone: "text-indigo-400",
            corHoverTexto: "group-hover:text-indigo-400",
        },
        {
            id: "telegram",
            nome: "Telegram",
            href: criarLinkTelegram(
                linksConfigurados.telegram ?? "",
            ),
            tooltip: "Conversar pelo Telegram",
            externa: true,
            icone: <Send />,
            corIcone: "text-sky-400",
            corHoverTexto: "group-hover:text-sky-400",
        },
    ];

    const redesVisiveis = ORDEM_PADRAO
        .filter((rede) => redes.includes(rede))
        .map((rede) =>
            catalogo.find((item) => item.id === rede),
        )
        .filter(
            (rede): rede is RedeSocialItem =>
                Boolean(rede?.href.trim()),
        );

    if (redesVisiveis.length === 0) {
        return null;
    }

    return (
        <nav
            aria-label="Redes sociais"
            className={[
                "flex min-w-0 items-center",
                isFooter
                    ? "w-auto flex-nowrap gap-1"
                    : "w-full flex-wrap gap-2 sm:gap-3",
                className,
            ].join(" ")}
        >
            {redesVisiveis.map((rede) => (
                <a
                    key={rede.id}
                    href={rede.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${rede.tooltip} (abre em nova aba)`}
                    title={rede.tooltip}
                    className={[
                        "group relative inline-flex items-center justify-center",
                        isFooter
                            ? "h-7 w-4 shrink-0 border-0 bg-transparent p-0 sm:h-8 sm:w-5"
                            : [
                                "min-h-9 min-w-0 flex-1 gap-1.5",
                                "rounded-md border border-white/10",
                                "bg-white/[0.03] px-2 py-1.5",
                                "sm:min-h-0 sm:flex-none sm:justify-start",
                                "sm:gap-2 sm:rounded-none sm:border-0",
                                "sm:bg-transparent sm:px-0 sm:py-1",
                                isMobileSimples
                                    ? "min-h-0 gap-1 rounded-none border-0 bg-transparent px-0 py-0 shadow-none"
                                    : "",
                            ].join(" "),
                        "text-gray-300 transition-colors duration-200",
                        isFooter
                            ? "hover:bg-transparent active:scale-100"
                            : [
                                "hover:border-white/25 hover:bg-white/[0.08]",
                                "active:scale-[0.98]",
                                "sm:hover:border-transparent",
                                "sm:hover:bg-transparent sm:active:scale-100",
                                isMobileSimples
                                    ? "hover:border-transparent hover:bg-transparent active:scale-100"
                                    : "",
                            ].join(" "),
                        "focus-visible:outline-none",
                        "focus-visible:ring-2 focus-visible:ring-slate-400",
                    ].join(" ")}
                >
                    <span
                        className={[
                            "flex shrink-0 items-center justify-center",
                            isFooter
                                ? "[&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-[17px] sm:[&_svg]:w-[17px]"
                                : "[&_svg]:h-3.5 [&_svg]:w-3.5 sm:[&_svg]:h-[17px] sm:[&_svg]:w-[17px]",
                            rede.corIcone ?? "",
                        ].join(" ")}
                        aria-hidden="true"
                    >
                        {rede.icone}
                    </span>

                    {mostrarTexto && (
                        <span
                            className={[
                                "whitespace-nowrap text-[11px] font-normal",
                                "tracking-wide transition-colors duration-200",
                                "sm:text-xs sm:tracking-normal",
                                rede.corHoverTexto ??
                                "group-hover:text-white",
                            ].join(" ")}
                        >
                            {rede.nome}
                        </span>
                    )}

                    {rede.externa && !isFooter && (
                        <ArrowUpRight
                            className={[
                                isMobileSimples
                                    ? "hidden sm:block"
                                    : "",
                                "h-3 w-3 shrink-0 text-gray-500",
                                "transition-transform duration-200",
                                "group-hover:translate-x-0.5",
                                "group-hover:-translate-y-0.5",
                                "sm:h-3.5 sm:w-3.5",
                            ].join(" ")}
                            aria-hidden="true"
                        />
                    )}

                    <span
                        role="tooltip"
                        className={[
                            "pointer-events-none absolute bottom-full left-1/2",
                            "z-50 mb-2 -translate-x-1/2 translate-y-1",
                            "whitespace-nowrap rounded-md border border-white/10",
                            "bg-slate-900 px-2.5 py-1.5",
                            "text-xs font-normal text-slate-200 shadow-lg",
                            "opacity-0 transition-all duration-200",
                            "group-hover:translate-y-0 group-hover:opacity-100",
                            "group-focus-visible:translate-y-0",
                            "group-focus-visible:opacity-100",
                        ].join(" ")}
                    >
                        {rede.tooltip}
                    </span>
                </a>
            ))}
        </nav>
    );
}
