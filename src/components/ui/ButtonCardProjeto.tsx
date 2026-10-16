"use client";

import type { ReactNode } from "react";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { Eye, ExternalLink } from "lucide-react";
import { cn } from "cn";

const buttonCardProjetoVariants = cva(
    [
        "group/button relative inline-flex shrink-0 items-center justify-center",
        "border font-normal",
        "outline-none select-none",
        "transition-colors duration-200 ease-out",
        "focus-visible:ring-2 focus-visible:ring-[#607A9D]",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]",
        "active:scale-[0.98]",
        "motion-reduce:transition-none",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    ].join(" "),
    {
        variants: {
            variant: {
                details: [
                    "h-7 min-w-0 gap-1 rounded-lg border-transparent",
                    "bg-slate-800 px-2.5 text-[11px] text-slate-300",
                    "hover:bg-slate-700 hover:text-slate-100",
                    "sm:h-8 sm:gap-1.5 sm:px-3 sm:text-xs",
                ].join(" "),

                external: [
                    "size-7 rounded-md",
                    "border-[#1B2B42]",
                    "bg-[#17263D]",
                    "text-[#B8C7DB]",
                    "hover:border-[#243247]",
                    "hover:bg-[#121E30]",
                    "hover:text-[#8494AA]",
                ].join(" "),
            },
        },
        defaultVariants: {
            variant: "details",
        },
    },
);

type SharedProps = VariantProps<typeof buttonCardProjetoVariants> & {
    className?: string;
    label: string;
};

type DetailsProps = SharedProps & {
    variant?: "details";
    onClick: () => void;
    href?: never;
    children?: ReactNode;
};

type ExternalProps = SharedProps & {
    variant: "external";
    href: string;
    onClick?: never;
    children?: never;
};

type ButtonCardProjetoProps = DetailsProps | ExternalProps;

export function ButtonCardProjeto(props: ButtonCardProjetoProps) {
    const {
        variant = "details",
        className,
        label,
    } = props;

    const classes = cn(
        buttonCardProjetoVariants({ variant }),
        "cursor-pointer",
        className,
    );

    if (variant === "external") {
        return (
            <a
                data-slot="button-card-projeto-external"
                href={props.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={classes}
            >
                <ExternalLink
                    className="size-3 transition-transform duration-200 group-hover/button:scale-110 motion-reduce:transition-none"
                    aria-hidden="true"
                />
            </a>
        );
    }

    return (
        <ButtonPrimitive
            data-slot="button-card-projeto-details"
            type="button"
            onClick={props.onClick}
            aria-label={label}
            className={classes}
        >
            <Eye
                className="size-3.5 transition-transform duration-200 group-hover/button:scale-110 motion-reduce:transition-none"
                aria-hidden="true"
            />

            <span className="whitespace-nowrap">
                {props.children}
            </span>
        </ButtonPrimitive>
    );
}