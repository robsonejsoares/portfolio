import type { ReactNode } from "react";

interface SectionCardProps {
children: ReactNode;
}

export function SectionCard({ children }: SectionCardProps) {
return (
<div className="relative z-10 mx-auto mb-6 mt-0 w-[calc(100%_-_1.5rem)] min-w-0 max-w-[1130px] rounded-md border border-white/10 bg-[#0b1020]/80 px-3 py-2 shadow-lg backdrop-blur-sm sm:mb-8 sm:w-[calc(100%_-_2rem)] sm:px-6 md:px-10 md:py-3">
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
<div className="mb-4 min-w-0 border-b border-white/10 pb-2">
<div className="min-w-0">{title}</div>

        {description && (
            <div className="mt-2 min-w-0">{description}</div>
        )}
    </div>
);

}