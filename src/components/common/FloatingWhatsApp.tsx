"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export function FloatingWhatsApp() {
    const { phone, whatsappMessage } = resumeData.personal;
    const number = phone.replace(/\D/g, "");
    const url = `https://wa.me/${number.startsWith("55") ? number : `55${number}`}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale comigo pelo WhatsApp"
            animate={{
                y: [0, -5, 0],
                boxShadow: [
                    "0 0 15px rgba(16,185,129,0.2)",
                    "0 0 30px rgba(16,185,129,0.45)",
                    "0 0 15px rgba(16,185,129,0.2)",
                ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.94 }}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-emerald-400/70 bg-slate-950 text-emerald-400"
        >
            <MessageCircle size={27} strokeWidth={2.2} />
        </motion.a>
    );

}