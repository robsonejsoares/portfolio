import type { ReactNode } from "react";

interface SectionCardProps {
    children: ReactNode;
}

export function SectionCard({ children }: SectionCardProps) {
    return (
        <div className="relative z-10 mx-auto my-6 w-full max-w-[1130px] rounded-xl border border-white/10 bg-[#0b1020]/80 px-4 py-2 shadow-lg backdrop-blur-sm sm:px-6 md:my-8 md:px-10 md:py-3">
            {children}
        </div>
    );
}

interface SectionCardHeaderProps {
    title: ReactNode;
    description?: ReactNode;
}

export function SectionCardHeader({
    title,
    description,
}: SectionCardHeaderProps) {
    return (
        <div className="mb-4 border-b border-white/10 pb-2">
            <div>{title}</div>

            {description && (
                <div className="mt-2">{description}</div>
            )}
        </div>
    );
}