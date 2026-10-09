"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { resumeData } from "@/data/resumeData";

export function FloatingWhatsApp() {
    const { phone, whatsappMessage } = resumeData.personal;
    
    // Remove caracteres não numéricos do telefone (ex: parênteses, traços e espaços) para o link do WhatsApp
    const cleanPhone = phone.replace(/\D/g, "");
    const message = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/55${cleanPhone}?text=${message}`;

    return (
        <div className="fixed bottom-6 right-6 z-[99999] pointer-events-auto isolate">
            <motion.a
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contacto via WhatsApp"
                className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-[0_4px_25px_rgba(16,185,129,0.6)] transition-all duration-300 hover:scale-110 group"
            >
                {/* Efeito de pulso suave ao fundo */}
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 pointer-events-none" />
                
                {/* Ícone do WhatsApp */}
                <MessageCircle className="w-7 h-7 relative z-10 transition-transform group-hover:rotate-12" />
            </motion.a>
        </div>
    );
}