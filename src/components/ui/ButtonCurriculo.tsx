"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonCurriculoVariants = cva(
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
        "disabled:cursor-wait",
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
                lg: [
                    "h-9 gap-2 px-3.5 text-xs",
                    "sm:h-11 sm:px-4 sm:text-sm",
                ].join(" "),
            },

            brilho: {
                true: "",
                false: "",
            },
        },

        defaultVariants: {
            variant: "default",
            size: "lg",
            brilho: false,
        },
    },
);

type ButtonCurriculoProps =
    ButtonPrimitive.Props &
    VariantProps<typeof buttonCurriculoVariants> & {
        brilho?: boolean;
    };

export function ButtonCurriculo({
    className,
    variant = "default",
    size = "lg",
    brilho = false,
    children,
    ...props
}: ButtonCurriculoProps) {
    return (
        <ButtonPrimitive
            data-slot="button-curriculo"
            className={cn(
                buttonCurriculoVariants({
                    variant,
                    size,
                    brilho,
                }),
                "min-w-0 w-full cursor-pointer",
                className,
            )}
            {...props}
        >
            {children}

            {brilho && (
                <span
                    aria-hidden="true"
                    className={[
                        "pointer-events-none absolute inset-0",
                        "-translate-x-full",
                        "bg-gradient-to-r from-transparent via-white/[0.06] to-transparent",
                        "transition-transform duration-500 ease-in-out",
                        "group-hover/button:translate-x-full",
                        "motion-reduce:transition-none",
                    ].join(" ")}
                />
            )}
        </ButtonPrimitive>
    );
}