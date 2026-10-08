"use client";

"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/common/LoadingScreen";
import { BackgroundEffects } from "@/components/common/BackgroundEffects";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-[#070913] text-white overflow-hidden">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <BackgroundEffects />
      <Navbar />

      <HeroSection />

      {/* Seções seguintes */}
      <div className="relative z-10 px-6 max-w-6xl mx-auto space-y-32 pb-32">
        <section id="about" className="min-h-[40vh] glass-card p-8 rounded-3xl flex items-center justify-center">
          <h2 className="text-3xl font-bold text-gradient-purple">Sobre Mim (Etapa 4)</h2>
        </section>

        <section id="skills" className="min-h-[40vh] glass-card p-8 rounded-3xl flex items-center justify-center">
          <h2 className="text-3xl font-bold text-gradient-cyan">Habilidades (Etapa 5)</h2>
        </section>

        <section id="projects" className="min-h-[40vh] glass-card p-8 rounded-3xl flex items-center justify-center">
          <h2 className="text-3xl font-bold text-gradient-purple">Projetos (Etapa 6)</h2>
        </section>

        <section id="experience" className="min-h-[40vh] glass-card p-8 rounded-3xl flex items-center justify-center">
          <h2 className="text-3xl font-bold text-gradient-cyan">Experiência (Etapa 7)</h2>
        </section>

        <section id="services" className="min-h-[40vh] glass-card p-8 rounded-3xl flex items-center justify-center">
          <h2 className="text-3xl font-bold text-gradient-purple">Serviços (Etapa 8)</h2>
        </section>

        <section id="contact" className="min-h-[40vh] glass-card p-8 rounded-3xl flex items-center justify-center">
          <h2 className="text-3xl font-bold text-gradient-cyan">Contato (Etapa 8)</h2>
        </section>
      </div>
    </main>
  );
}