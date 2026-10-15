"use client";

import { motion } from "framer-motion";
import { dadosPortfolio } from "@/data/dadosPortfolio";
import { OrbitasTecnologias } from "./OrbitasTecnologias";

export function AvatarHero() {
    const { personal } = dadosPortfolio;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 flex min-w-0 justify-center lg:justify-start lg:translate-x-16"
        >
            <div className="relative my-1 flex aspect-[6/7] w-full max-w-[300px] items-center justify-center sm:max-w-[320px] lg:my-0">
                <div
                    className="group relative z-20 h-[min(52vw,190px)] max-h-[190px] w-[min(44vw,160px)] max-w-[160px] cursor-pointer overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:scale-105 sm:h-[235px] sm:w-[190px]"
                    style={{
                        transformStyle: "preserve-3d",
                        perspective: "600px",
                    }}
                >
                    <div
                        className="absolute inset-0 -z-10 scale-90 rounded-3xl opacity-40 blur-2xl"
                        style={{
                            background:
                                "linear-gradient(135deg, rgb(0, 245, 255), rgb(139, 92, 246))",
                        }}
                    />

                    <img
                        src="/avatar.jpg"
                        alt={personal.name}
                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                <OrbitasTecnologias />
            </div>
        </motion.div>
    );
}