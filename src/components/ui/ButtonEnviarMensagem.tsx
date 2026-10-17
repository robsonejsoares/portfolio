"use client";

import type { ReactNode } from "react";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonEnviarVariants = cva(
    [
        "group/button relative inline-flex shrink-0 items-center justify-center",
        "overflow-hidden rounded-lg border border-transparent",
        "bg-clip-padding font-normal whitespace-nowrap",
        "transition-colors duration-200 ease-out",
        "outline-none select-none",
        "focus-visible:ring-2 focus-visible:ring-[#607A9D]",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]",
        "active:not-aria-[haspopup]:scale-[0.98]",
        "disabled:pointer-events-none disabled:opacity-50",
        "motion-reduce:transition-none",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0",
        "[&_svg:not([class*='size-'])]:size-4",
    ].join(" "),
    {
        variants: {
            variant: {
                default: [
                    "bg-[#075985]",
                    "text-[#F0F9FF]",
                    "hover:bg-[#0369A1]",
                    "hover:text-white",
                ].join(" "),
            },
            size: {
                default: [
                    "h-8 gap-1.5 px-3 py-1 text-[11px]",
                    "sm:h-10 sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs",
                ].join(" "),
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

type ButtonEnviarMensagemProps =
    ButtonPrimitive.Props &
    VariantProps<typeof buttonEnviarVariants> & {
        enviando: boolean;
        children: ReactNode;
    };

export function ButtonEnviarMensagem({
    enviando,
    className,
    variant = "default",
    size = "default",
    type = "submit",
    disabled,
    children,
    ...props
}: ButtonEnviarMensagemProps) {
    return (
        <ButtonPrimitive
            data-slot="button-enviar-mensagem"
            type={type}
            disabled={disabled || enviando}
            aria-busy={enviando}
            className={cn(
                buttonEnviarVariants({ variant, size }),
                "w-full max-w-full cursor-pointer",
                "disabled:cursor-not-allowed",
                "sm:w-auto sm:min-w-56",
                className,
            )}
            {...props}
        >
            {children}
        </ButtonPrimitive>
    );
}