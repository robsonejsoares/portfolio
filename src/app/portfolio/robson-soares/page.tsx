"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Loading } from "@/components/common/Loading";
import { EfeitosFundo } from "@/components/common/EfeitosFundo";
import { WhatsAppFlutuante } from "@/components/common/WhatsAppFlutuante";
import { SectionHero } from "@/components/sections/section-hero/SectionHero";
import { SectionSobre } from "@/components/sections/section-sobre/SectionSobre";
import { SectionContato } from "@/components/sections/section-contato/SectionContato";
import { SectionServicos } from "@/components/sections/section-servicos/SectionServicos";
import { SectionProjetos } from "@/components/sections/section-projetos/SectionProjetos";
import { SectionHabilidades } from "@/components/sections/section-habilidades/SectionHabilidades";
import { SectionExperiencia } from "@/components/sections/section-experiencia/SectionExperiencia";

export default function HomePortfolio() {

  const [estaCarregando, setEstaCarregando] = useState(true);

  return (

    <main className="relative min-h-screen bg-[#070913] text-white overflow-hidden">

      {/* Loading */}
      <AnimatePresence>
        {estaCarregando && (
          <Loading onComplete={() => setEstaCarregando(false)} />
        )}
      </AnimatePresence>

      {/* Efeitos de Fundo */}
      <EfeitosFundo />

      {/* Navbar */}
      <Navbar />

      {/* Seção Hero */}
      <SectionHero />

      {/* Seção Sobre */}
      <SectionSobre />

      {/* Seção Habilidades */}
      <SectionHabilidades />

      {/* Seção Projetos */}
      <SectionProjetos />

      {/* Seção Experiência */}
      <SectionExperiencia />

      {/* Seção Serviços */}
      <SectionServicos />

      {/* Seção Contato */}
      <SectionContato />

      {/* WhatsApp Flutuante */}
      <WhatsAppFlutuante />

      {/* Footer */}
      <Footer />
    </main>
  );
}