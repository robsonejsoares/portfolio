import { Download } from "lucide-react";

interface ButtonDownloadProps {
    href: string;
    fileName?: string;
    label?: string;
    mobileLabel?: string;
    className?: string;
}

export function ButtonDownload({
    href,
    fileName,
    label = "Baixar",
    mobileLabel = "PDF",
    className = "",
}: ButtonDownloadProps) {
    return (
        <a
            href={href}
            download={fileName}
            aria-label={`${label} em arquivo`}
            className={[
                "group/button relative inline-flex shrink-0 items-center justify-center",
                "overflow-hidden rounded-lg border border-transparent",
                "bg-clip-padding font-normal whitespace-nowrap",

                "h-8 gap-1.5 px-3 py-1 text-[11px]",
                "sm:h-10 sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs",

                "bg-[#1E40AF] text-[#DBEAFE]",
                "transition-colors duration-200 ease-out",
                "hover:bg-[#1E3A8A] hover:text-white",

                "outline-none select-none",
                "focus-visible:ring-2 focus-visible:ring-[#60A5FA]",
                "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]",
                "active:scale-[0.98]",
                "motion-reduce:transition-none",

                className,
            ].join(" ")}
        >
            <span className="inline-flex items-center justify-center gap-1.5 sm:gap-2">
                <Download
                    size={16}
                    aria-hidden="true"
                    className={[
                        "shrink-0 transition-transform duration-200",
                        "group-hover/button:scale-110",
                        "motion-reduce:transition-none",
                    ].join(" ")}
                />

                <span className="hidden sm:inline">{label}</span>
                <span className="sm:hidden">{mobileLabel}</span>
            </span>
        </a>
    );
}