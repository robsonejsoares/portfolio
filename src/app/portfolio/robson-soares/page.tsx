"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Loading } from "@/components/common/Loading";
import { EfeitosFundo } from "@/components/common/EfeitosFundo";
import { IndicadorRolagem } from "@/components/common/IndicadorRolagem";
import { WhatsAppFlutuante } from "@/components/common/WhatsAppFlutuante";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHero } from "@/components/sections/section-hero/SectionHero";
import { SectionSobre } from "@/components/sections/section-sobre/SectionSobre";
import { SectionHabilidades } from "@/components/sections/section-habilidades/SectionHabilidades";
import { SectionProjetos } from "@/components/sections/section-projetos/SectionProjetos";
import { Wrench, Briefcase, Mail } from "lucide-react";

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
      <div className="flex justify-center -mt-24 mb-4 relative z-20">
        <IndicadorRolagem />
      </div>

      <SectionSobre />

      {/* Seção de Habilidades */}
      <SectionHabilidades />

      {/* Seção de Projetos */}
      <SectionProjetos />

      {/* Demais Seções em construção */}
      <div className="relative z-10 px-6 max-w-6xl mx-auto space-y-28 pb-32 pt-16">

        {/* Experiência */}
        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[35vh] rounded-3xl p-8 overflow-hidden group border border-cyan-500/20 bg-slate-900/40 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/60 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]"
        >
          <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl" />

          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-[20vh] space-y-4">
            <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="w-8 h-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gradient-cyan tracking-tight">
              Experiência <span className="text-gray-500 font-mono text-xl sm:text-2xl">(Em construção)</span>
            </h2>
            <p className="text-gray-400 font-mono text-xs sm:text-sm max-w-md">
              Estruturando linha do tempo profissional, atuação corporativa e projetos de grande escala.
            </p>
          </div>
        </motion.section>

        {/* Serviços */}
        <motion.section
          id="services"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[35vh] rounded-3xl p-8 overflow-hidden group border border-purple-500/20 bg-slate-900/40 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/60 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]"
        >
          <div className="absolute -inset-px bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl" />

          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-[20vh] space-y-4">
            <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform duration-300">
              <Wrench className="w-8 h-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gradient-purple tracking-tight">
              Serviços <span className="text-gray-500 font-mono text-xl sm:text-2xl">(Em construção)</span>
            </h2>
            <p className="text-gray-400 font-mono text-xs sm:text-sm max-w-md">
              Definindo soluções em desenvolvimento de software, consultoria técnica e automações.
            </p>
          </div>
        </motion.section>

        {/* Contato */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[35vh] rounded-3xl p-8 overflow-hidden group border border-cyan-500/20 bg-slate-900/40 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/60 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]"
        >
          <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl" />

          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-[20vh] space-y-4">
            <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gradient-cyan tracking-tight">
              Contato <span className="text-gray-500 font-mono text-xl sm:text-2xl">(Em construção)</span>
            </h2>
            <p className="text-gray-400 font-mono text-xs sm:text-sm max-w-md">
              Estabelecendo canais diretos de comunicação e conexões profissionais.
            </p>
          </div>
        </motion.section>
      </div>

      <WhatsAppFlutuante />
      <Footer />
    </main>
  );
}