"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "cn";

const buttonAbrirDialogVariants = cva(
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
                    "bg-[#312E81]",
                    "text-[#C2C0E2]",
                    "hover:bg-[#403C96]",
                    "hover:text-[#D8D6F0]",
                ].join(" "),

                secondary: [
                    "bg-slate-800",
                    "text-slate-300",
                    "hover:bg-slate-700",
                    "hover:text-slate-100",
                ].join(" "),

                indigo: [
                    "bg-indigo-900/60",
                    "text-indigo-300",
                    "hover:bg-indigo-900/80",
                    "hover:text-indigo-200",
                ].join(" "),

                outline: [
                    "bg-transparent",
                    "text-slate-300",
                    "hover:bg-slate-800",
                    "hover:text-slate-100",
                ].join(" "),

                ghost: [
                    "bg-transparent",
                    "text-slate-400",
                    "hover:bg-slate-800/70",
                    "hover:text-slate-200",
                ].join(" "),

                destructive: [
                    "bg-red-950/70",
                    "text-red-300",
                    "hover:bg-red-900",
                    "hover:text-red-100",
                    "focus-visible:ring-red-400",
                ].join(" "),

                link: [
                    "h-auto rounded-none border-0 bg-transparent p-0",
                    "text-slate-400 underline-offset-4",
                    "hover:text-slate-200",
                    "hover:underline",
                ].join(" "),
            },

            size: {
                default:
                    "h-8 gap-1.5 px-3 py-1 text-[11px] sm:h-10 sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs",
                xs: "h-6 gap-1 px-2 text-xs",
                sm:
                    "h-7 gap-1 px-2.5 text-[11px] sm:h-8 sm:gap-1.5 sm:px-3 sm:text-xs",
                lg:
                    "h-9 gap-2 px-3.5 text-xs sm:h-11 sm:px-4 sm:text-sm",
                icon: "size-9 sm:size-10",
                "icon-xs": "size-6",
                "icon-sm": "size-7 sm:size-8",
                "icon-lg": "size-9 sm:size-11",
            },

            brilho: {
                true: "",
                false: "",
            },
        },

        defaultVariants: {
            variant: "default",
            size: "default",
            brilho: false,
        },
    },
);

type ButtonAbrirDialogProps =
    ButtonPrimitive.Props &
    VariantProps<typeof buttonAbrirDialogVariants> & {
        brilho?: boolean;
    };

function ButtonAbrirDialog({
    className,
    variant = "default",
    size = "default",
    brilho = false,
    children,
    ...props
}: ButtonAbrirDialogProps) {
    return (
        <ButtonPrimitive
            data-slot="button-abrir-dialog"
            className={cn(
                buttonAbrirDialogVariants({ variant, size, brilho }),
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

export { ButtonAbrirDialog, buttonAbrirDialogVariants };