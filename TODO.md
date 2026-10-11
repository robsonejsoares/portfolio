# 🚀 Plano de Desenvolvimento - Portfólio Interativo

- [x] **Etapa 1: Design System, Fundo Futurista e Dados**
  - [x] Configurar cores e variáveis no `src/app/globals.css` (tom escuro, neons, glassmorphism)
  - [x] Criar estrutura do plano de fundo (grid sutil + efeitos neon)
  - [x] Criar arquivo de dados `src/data/dadosPortfolio.ts` (Perfil, Habilidades, Projetos, Experiências, Serviços)

- [x] **Etapa 2: Barra de Navegação Flutuante (Header)**
  - [x] Criar o componente `src/components/layout/BarraNavegacao.tsx`
  - [x] Estilização Glassmorphism (blur, borda translúcida)
  - [x] Links de ancoragem com navegação suave (#hero, #about, #skills, #projects, #experience, #services, #contact)
  - [x] Botão de status ("Disponível para trabalho") e CTA ("Contrate-me")

- [x] **Etapa 3: Seção Hero & Avatar Interativo**
  - [x] Criar o componente `src/components/sections/SectionHero.tsx`
  - [x] Título principal com gradiente animado e badges de topo
  - [x] Card de Avatar central com badges de tech flutuantes e animação de flutuação (Framer Motion)
  - [x] Grid de estatísticas (contadores) e botões de ação ("Baixar currículo", "Vamos conversar")

- [x] **Etapa 4: Sobre Mim (About Me)**
  - [x] Criar o componente `src/components/sections/SectionSobre.tsx`
  - [x] Lado esquerdo: Card simulando editor de código (Syntax Highlighting)
  - [x] Lado direito: Texto descritivo e marcadores com tópicos em neon

- [x] **Etapa 5: Matriz de Habilidades (Skills Matrix)**
  - [x] Criar o componente `src/components/sections/SectionHabilidades.tsx`
  - [x] Grid de ícones/badges de tecnologias (Java, Spring, Node, React Native, Next.js, etc.)
  - [x] Animações de entrada e efeitos de hover magnético/brilho

- [x] **Etapa 6: Galeria de Projetos & Modal Expansível**
  - [x] Criar os componentes `src/components/sections/SectionProjetos.tsx`
  - [x] Filtros por categoria (Todos, Web, Mobile, etc.)
  - [x] Cards de projetos empkjm>fcgtdfghfdgfhgfhgf
  - [x] Modal expansível com Framer Motion (`layoutId`) detalhando tecnologia, links e imagens

- [ ] **Etapa 7: Linha do Tempo de Experiência**
  - [ ] Criar o componente `src/components/sections/SectionExperiencia.tsx`
  - [ ] Timeline vertical conectada por linha em gradiente neon
  - [ ] Cards de histórico profissional com ícones por categoria e detalhes das funções

- [ ] **Etapa 8: Serviços, Depoimentos e Contato**
  - [ ] Criar os componentes `SectionServicos.tsx`, `SectionDepoimentos.tsx` e `SectionContato.tsx`
  - [ ] Grid de cards de Serviços oferecidos
  - [ ] Carrossel/Slider para Depoimentos
  - [ ] Formulário de contato interativo e informações de contato/redes sociais

- [ ] **Etapa 9: Animações Globais e Responsividade**
  - [ ] Configurar Scroll Reveal com Framer Motion em todas as seções
  - [ ] Testes e ajustes de responsividade (Mobile, Tablet, Desktop)
  - [ ] Otimização de performance e deploy