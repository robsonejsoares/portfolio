"use client";

import { useState } from "react";
import { Wrench, Briefcase } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Loading } from "@/components/common/Loading";
import { AnimatePresence, motion } from "framer-motion";
import { EfeitosFundo } from "@/components/common/EfeitosFundo";
import { IndicadorRolagem } from "@/components/common/IndicadorRolagem";
import { WhatsAppFlutuante } from "@/components/common/WhatsAppFlutuante";
import { SectionHero } from "@/components/sections/section-hero/SectionHero";
import { SectionSobre } from "@/components/sections/section-sobre/SectionSobre";
import { SectionContato } from "@/components/sections/section-contato/SectionContato";
import { SectionProjetos } from "@/components/sections/section-projetos/SectionProjetos";
import { SectionHabilidades } from "@/components/sections/section-habilidades/SectionHabilidades";
import { SectionExperiencia } from "@/components/sections/section-experiencia/SectionExperiencia";

export default function HomePortfolio() {
  const [estaCarregando, setEstaCarregando] = useState(true);

  return (
    <main className="relative min-h-screen bg-[#070913] text-white overflow-hidden">
      <AnimatePresence>
        {estaCarregando && (
          <Loading onComplete={() => setEstaCarregando(false)} />
        )}
      </AnimatePresence>

      <EfeitosFundo />
      <Navbar />

      <SectionHero />

      {/* Indicador de rolagem */}
      <div className="flex justify-center -mt-45 mb-4 relative z-20">
        <IndicadorRolagem />
      </div>

      <SectionSobre />

      {/* Seção Habilidades */}
      <SectionHabilidades />

      {/* Seção Projetos */}
      <SectionProjetos />

      {/* Demais Seções */}
      <div className="relative z-10 space-y-28 px-6 pb-32 pt-16">
        {/* Seção Experiência */}
        <SectionExperiencia />

        {/* Seção Serviços */}
        <motion.section
          id="services"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative min-h-[35vh] overflow-hidden rounded-3xl border border-purple-500/20 bg-slate-900/40 p-8 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/60 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]"
        >
          <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

          <div className="relative z-10 flex min-h-[20vh] h-full flex-col items-center justify-center space-y-4 text-center">
            <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-3 text-purple-400 transition-transform duration-300 group-hover:scale-110">
              <Wrench className="h-8 w-8" />
            </div>

            <h2 className="text-gradient-purple text-3xl font-black tracking-tight sm:text-4xl">
              Serviços{" "}
              <span className="font-mono text-xl text-gray-500 sm:text-2xl">
                (Em construção)
              </span>
            </h2>

            <p className="max-w-md font-mono text-xs text-gray-400 sm:text-sm">
              Definindo soluções em desenvolvimento de software,
              consultoria técnica e automações.
            </p>
          </div>
        </motion.section>
      </div>

      {/* Seção Contato */}
      <SectionContato />

      <WhatsAppFlutuante />
      <Footer />
    </main>
  );
}