"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Loading } from "@/components/common/Loading";
import { SectionCard } from "@/components/common/SectionCard";
import { EfeitosFundo } from "@/components/common/EfeitosFundo";
import { WhatsAppFlutuante } from "@/components/common/WhatsAppFlutuante";

import { SectionHero } from "@/components/sections/section-hero/SectionHero";
import { SectionSobreMim } from "@/components/sections/section-sobre-mim/SectionSobreMim";
import { SectionHabilidades } from "@/components/sections/section-habilidades/SectionHabilidades";
import { SectionProjetos } from "@/components/sections/section-projetos/SectionProjetos";
import { SectionServicos } from "@/components/sections/section-servicos/SectionServicos";
import { SectionCarreiraProfissional } from "@/components/sections/section-carreira-profissional/SectionCarreiraProfissional";
import { SectionQualificacoes } from "@/components/sections/section-qualificacoes/SectionQualificacoes";
import { SectionContato } from "@/components/sections/section-contato/SectionContato";

export default function HomePortfolio() {
    const [estaCarregando, setEstaCarregando] = useState(true);

    return (
        <main className="relative min-h-screen bg-[#070913] pb-14 text-white">
            {/* Loading */}
            <AnimatePresence>
                {estaCarregando && (
                    <Loading
                        onComplete={() => setEstaCarregando(false)}
                    />
                )}
            </AnimatePresence>

            {/* Efeitos de Fundo */}
            <EfeitosFundo />

            {/* Navbar */}
            <Navbar />

            {/* Hero */}
            <SectionHero />

            {/* Sobre mim */}
            <SectionCard>
                <SectionSobreMim />
            </SectionCard>

            {/* Habilidades */}
            <SectionCard>
                <SectionHabilidades />
            </SectionCard>

            {/* Projetos */}
            <SectionCard>
                <SectionProjetos />
            </SectionCard>

            {/* Qualificações */}
            <SectionCard>
                <SectionQualificacoes />
            </SectionCard>

            {/* Serviços */}
            <SectionCard>
                <SectionServicos />
            </SectionCard>

            {/* Carreira Profissional */}
            <SectionCard>
                <SectionCarreiraProfissional />
            </SectionCard>

            {/* Contato */}
            <SectionCard>
                <SectionContato />
            </SectionCard>

            {/* WhatsApp Flutuante */}
            <WhatsAppFlutuante />

            {/* Footer */}
            <Footer />
        </main>
    );
}