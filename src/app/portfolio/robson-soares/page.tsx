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
import { SectionQualificacaoAcademica } from "@/components/sections/section-qualificacao-academica/SectionQualificacaoAcademica";
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

            {/* 1. Hero */}
            <SectionHero />

            {/* 2. Sobre mim */}
            <SectionCard>
                <SectionSobreMim />
            </SectionCard>

            {/* 3. Habilidades */}
            <SectionCard>
                <SectionHabilidades />
            </SectionCard>

            {/* 4. Projetos */}
            <SectionCard>
                <SectionProjetos />
            </SectionCard>

            {/* 5. Serviços */}
            <SectionCard>
                <SectionServicos />
            </SectionCard>

            {/* 6. Carreira Profissional */}
            <SectionCard>
                <SectionCarreiraProfissional />
            </SectionCard>

            {/* 7. Qualificações Acadêmica */}
            <SectionCard>
                <SectionQualificacaoAcademica />
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