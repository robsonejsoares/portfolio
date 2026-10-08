# 🚀 Plano de Desenvolvimento - Portfólio Interativo

- [x] **Etapa 1: Design System, Fundo Futurista e Dados**
  - [x] Configurar cores e variáveis no `src/app/globals.css` (tom escuro, neons, glassmorphism)
  - [x] Criar estrutura do plano de fundo (grid sutil + efeitos neon)
  - [x] Criar arquivo de dados `src/data/portfolioData.ts` (Perfil, Skills, Projetos, Experiências, Serviços)

- [x] **Etapa 2: Navbar Flutuante (Header)**
  - [x] Criar o componente `src/components/Navbar.tsx`
  - [x] Estilização Glassmorphism (blur, borda translúcida)
  - [x] Links de ancoragem com navegação suave (#hero, #about, #skills, #projects, #experience, #services, #contact)
  - [x] Botão de status ("Disponível para trabalho") e CTA ("Contrate-me")

- [ ] **Etapa 3: Hero Section & Avatar Interativo**
  - [ ] Criar o componente `src/components/HeroSection.tsx`
  - [ ] Título principal com gradiente animado e badges de topo
  - [ ] Card de Avatar central com badges de tech flutuantes e animação de flutuação (Framer Motion)
  - [ ] Grid de estatísticas (contadores) e botões de ação ("Baixar currículo", "Vamos conversar")

- [ ] **Etapa 4: Sobre Mim (About Me)**
  - [ ] Criar o componente `src/components/AboutSection.tsx`
  - [ ] Lado esquerdo: Card simulando editor de código (Syntax Highlighting)
  - [ ] Lado direito: Texto descritivo e marcadores com tópicos em neon

- [ ] **Etapa 5: Matriz de Habilidades (Skills Matrix)**
  - [ ] Criar o componente `src/components/SkillsSection.tsx`
  - [ ] Grid de ícones/badges de tecnologias (Java, Spring, Node, React Native, Next.js, etc.)
  - [ ] Animações de entrada e efeitos de hover magnético/brilho

- [ ] **Etapa 6: Galeria de Projetos & Modal Expansível**
  - [ ] Criar os componentes `src/components/ProjectsSection.tsx` e `src/components/ProjectModal.tsx`
  - [ ] Filtros por categoria (Todos, Web, Mobile, etc.)
  - [ ] Cards de projetos com efeito Spotlight
  - [ ] Modal expansível com Framer Motion (`layoutId`) detalhando tecnologia, links e imagens

- [ ] **Etapa 7: Linha do Tempo de Experiência**
  - [ ] Criar o componente `src/components/ExperienceSection.tsx`
  - [ ] Timeline vertical conectada por linha em gradiente neon
  - [ ] Cards de histórico profissional com ícones por categoria e detalhes das funções

- [ ] **Etapa 8: Serviços, Depoimentos e Contato**
  - [ ] Criar os componentes `ServicesSection.tsx`, `TestimonialsSection.tsx` e `ContactSection.tsx`
  - [ ] Grid de cards de Serviços oferecidos
  - [ ] Carrossel/Slider para Depoimentos
  - [ ] Formulário de contato interativo e informações de contato/redes sociais

- [ ] **Etapa 9: Animações Globais e Responsividade**
  - [ ] Configurar Scroll Reveal com Framer Motion em todas as seções
  - [ ] Testes e ajustes de responsividade (Mobile, Tablet, Desktop)
  - [ ] Otimização de performance e deploy