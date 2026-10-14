# 🚀 Plano de Desenvolvimento — Portfólio Interativo

## ✅ Etapa 1: Design System, Fundo Futurista e Dados

- [x] Configurar cores e variáveis em `src/app/globals.css` (tema escuro, neon e glassmorphism).
- [x] Criar a estrutura do plano de fundo (grid sutil e efeitos neon).
- [x] Criar o arquivo `src/data/dadosPortfolio.ts` (perfil, habilidades, projetos, experiências e serviços).

## ✅ Etapa 2: Barra de Navegação Flutuante (Header)

- [x] Criar o componente `src/components/layout/BarraNavegacao.tsx`.
- [x] Aplicar estilização glassmorphism (blur e bordas translúcidas).
- [x] Implementar links de ancoragem com navegação suave (`#hero`, `#about`, `#education`, `#skills`, `#projects`, `#experience`, `#services` e `#contact`).
- [x] Criar o botão de status ("Disponível para trabalho") e a chamada para ação (CTA) "Contrate-me".

## ✅ Etapa 3: Seção Hero e Avatar Interativo

- [x] Criar o componente `src/components/sections/SectionHero.tsx`.
- [x] Implementar título principal com gradiente animado e badges informativos.
- [x] Criar card de avatar com tecnologias flutuantes e animações usando Framer Motion.
- [x] Criar grid de estatísticas e botões de ação ("Ver currículo" e "Entre em contato").

## ✅ Etapa 4: Sobre Mim (About Me)

- [x] Criar o componente `src/components/sections/SectionSobre.tsx`.
- [x] Desenvolver o card que simula um editor de código com syntax highlighting.
- [x] Implementar texto descritivo e marcadores com efeitos neon.

## 🆕 Etapa 5: Formação Acadêmica (Education)

- [x] Criar o componente `src/components/sections/SectionFormacaoAcademica.tsx`.
- [x] Apresentar formação acadêmica, instituições de ensino e cursos relevantes.
- [x] Exibir períodos, situação (concluído ou em andamento) e informações complementares.
- [x] Criar cards para cada formação, seguindo o Design System do portfólio.
- [x] Integrar a seção à página principal e à barra de navegação.
- [x] Garantir responsividade e consistência visual.

## ✅ Etapa 6: Matriz de Habilidades (Skills Matrix)

- [x] Criar o componente `src/components/sections/SectionHabilidades.tsx`.
- [x] Implementar grid de ícones e badges de tecnologias (Java, Spring Boot, Node.js, React Native, Next.js etc.).
- [x] Adicionar animações de entrada, efeitos de hover magnético e brilho.

## ✅ Etapa 7: Galeria de Projetos e Modal Expansível

- [x] Criar ou finalizar o componente `src/components/sections/SectionProjetos.tsx`.
- [x] Implementar filtros por categoria (Todos, Web, Mobile, Automação/IA etc.).
- [x] Criar cards interativos para apresentação dos projetos.
- [x] Implementar modal expansível com Framer Motion (`layoutId`).
- [x] Exibir detalhes de cada projeto (descrição, tecnologias, imagens e links para demonstração e repositório).
- [x] Garantir responsividade e consistência visual dos cards.

## ✅ Etapa 8: Linha do Tempo de Experiência Profissional

- [x] Criar o componente `src/components/sections/SectionExperiencia.tsx`.
- [x] Desenvolver timeline vertical conectada por linha em gradiente neon.
- [x] Criar cards do histórico profissional com ícones por categoria.
- [x] Apresentar cargos, empresas, períodos, responsabilidades e principais realizações.

## ✅ Etapa 9: Seção de Serviços

- [x] Criar o componente `src/components/sections/SectionServicos.tsx`.
- [x] Desenvolver grid de cards para os serviços oferecidos.
- [x] Apresentar descrição, benefícios e tecnologias relacionadas a cada serviço.
- [x] Adicionar animações e efeitos de interação nos cards.
- [x] Implementar chamadas para ação direcionadas à seção de contato.

## ✅ Etapa 10: Seção de Contato

- [x] Criar o componente `src/components/sections/SectionContato.tsx`.
- [x] Desenvolver formulário de contato interativo.
- [x] Implementar campos para nome, e-mail, assunto e mensagem.
- [x] Adicionar validação dos campos e feedback de envio.
- [x] Apresentar informações de contato e links para redes sociais.
- [x] Integrar o formulário a um serviço de envio de mensagens ou API.

---

---

**## 🆕 Etapa 11: Auditoria de Arquitetura, Clean Code e Refatoração**

**Objetivo:** revisar toda a estrutura de `src`, identificar arquivos fora do lugar, eliminar duplicações desnecessárias e alinhar o projeto às boas práticas de Next.js, React e TypeScript, sem quebrar funcionalidades existentes.

### 🔍 Fase 1: Auditoria da Estrutura de Pastas

- [ ] Analisar toda a estrutura de diretórios de `src/`.
- [ ] Verificar se cada arquivo está na pasta adequada à sua responsabilidade.
- [ ] Revisar a organização de `app/`, `components/`, `data/`, `lib/`, `config/` e `utils/`.
- [ ] Avaliar a organização de `components/common/`, `components/layout/`, `components/ui/` e `components/sections/`.
- [ ] Identificar componentes compartilhados que estão dentro de seções específicas.
- [ ] Identificar componentes específicos de uma seção que estão indevidamente em `common/`.
- [ ] Identificar pastas vazias e arquivos `.gitkeep` que não sejam mais necessários.
- [ ] Definir a estrutura final de diretórios antes de executar movimentações em massa.

### 🧱 Fase 2: Auditoria da Seção Hero

- [ ] Revisar `src/components/sections/section-hero/SectionHero.tsx`.
- [ ] Avaliar se `SectionHero.tsx` está responsável apenas pela composição da seção e pela coordenação de seu estado.
- [ ] Revisar os componentes `AcoesHero.tsx`, `ApresentacaoHero.tsx`, `AvatarHero.tsx`, `EstatisticasHero.tsx`, `LinksSociaisHero.tsx` e `OrbitasTecnologias.tsx`.
- [ ] Confirmar se cada componente está na pasta correta.
- [ ] Revisar `dialogs/DialogCurriculo.tsx`.
- [ ] Revisar `hooks/useEfeitoDigitacao.ts`.
- [ ] Verificar se o hook de digitação é exclusivo do Hero ou se deveria ser compartilhado.
- [ ] Identificar responsabilidades duplicadas e oportunidades de simplificação.
- [ ] Revisar as propriedades, os tipos TypeScript e os nomes das funções.
- [ ] Verificar se as propriedades dos componentes estão sendo utilizadas corretamente, incluindo o raio das órbitas tecnológicas.
- [ ] Corrigir os problemas identificados sem alterar o comportamento visual esperado.

### 🧩 Fase 3: Componentes Compartilhados e Design System

- [ ] Revisar todos os arquivos de `src/components/common/`.
- [ ] Revisar todos os arquivos de `src/components/ui/`.
- [ ] Revisar todos os arquivos de `src/components/layout/`.
- [ ] Confirmar se cada componente compartilhado possui mais de um consumidor ou uma justificativa clara para existir.
- [ ] Identificar componentes duplicados entre as seções.
- [ ] Avaliar a possibilidade de padronizar diálogos, carregamentos, botões, cards e feedbacks.
- [ ] Verificar se os componentes genéricos possuem propriedades configuráveis suficientes.
- [ ] Evitar abstrações desnecessárias e componentes criados sem necessidade comprovada.
- [ ] Revisar a consistência visual e comportamental dos componentes reutilizáveis.

### ⏳ Fase 4: Padronização dos Componentes de Carregamento

- [ ] Revisar `src/components/common/Loading.tsx`.
- [ ] Revisar `src/components/common/LoadingDialog.tsx`.
- [ ] Revisar `src/config/loading.ts`.
- [ ] Revisar os carregamentos implementados diretamente nas seções.
- [ ] Identificar duplicações de animação, temporizadores e estados de carregamento.
- [ ] Avaliar a reutilização de `LoadingDialog` na seção de Formação Acadêmica.
- [ ] Verificar se a duração dos carregamentos está centralizada quando apropriado.
- [ ] Preservar o posicionamento, a aparência e o comportamento de cada carregamento.
- [ ] Garantir a limpeza dos temporizadores e dos efeitos quando os componentes forem desmontados.
- [ ] Testar a abertura e o fechamento dos diálogos após as refatorações.

### 📚 Fase 5: Organização das Regras de Negócio e dos Dados

- [ ] Revisar os arquivos de `src/data/`.
- [ ] Revisar `src/utils/ordenarFormacoes.ts`.
- [ ] Confirmar todos os locais que utilizam `ordenarFormacoes`.
- [ ] Se for exclusiva da seção acadêmica, mover a função para `section-formacao-academica/utils/ordenarFormacoes.ts`.
- [ ] Atualizar os imports após a movimentação.
- [ ] Revisar as interfaces e os tipos utilizados pelos dados do currículo, portfólio e serviços.
- [ ] Separar dados estáticos, regras de negócio e componentes de apresentação quando necessário.
- [ ] Evitar duplicar informações que já estejam centralizadas nos arquivos de dados.
- [ ] Revisar a organização de `src/config/`, `src/lib/` e `src/utils/`.
- [ ] Manter utilitários compartilhados em locais apropriados e regras específicas próximas às funcionalidades que as utilizam.

### 🧹 Fase 6: Remoção de Código Não Utilizado

- [ ] Pesquisar componentes, funções, interfaces, tipos e constantes sem uso.
- [ ] Verificar referências em todo o projeto antes de remover qualquer arquivo.
- [ ] Confirmar se `SectionCardHeader` está realmente sem uso e removê-lo se não houver dependências.
- [ ] Verificar se `src/lib/utils.ts` possui consumidores ou uma finalidade necessária.
- [ ] Investigar imports e dependências relacionados a `cn` antes de qualquer alteração.
- [ ] Identificar imports não utilizados e código redundante.
- [ ] Identificar comentários desatualizados e código morto.
- [ ] Remover arquivos e abstrações somente após confirmar que são dispensáveis.
- [ ] Evitar remover arquivos de configuração, arquivos gerados ou recursos utilizados indiretamente sem verificar suas dependências.

### 🏗️ Fase 7: Arquitetura Next.js e React

- [ ] Revisar `src/app/layout.tsx`.
- [ ] Revisar `src/app/portfolio/robson-soares/page.tsx`.
- [ ] Avaliar o uso de `"use client"` em cada componente.
- [ ] Investigar a possibilidade de manter `page.tsx` como Server Component.
- [ ] Isolar estados e animações em componentes clientes quando isso trouxer benefícios reais.
- [ ] Revisar o uso de `useState`, `useEffect`, `useCallback` e `useRef`.
- [ ] Verificar dependências dos efeitos e limpeza de recursos.
- [ ] Revisar o uso de `framer-motion` e identificar animações desnecessárias ou duplicadas.
- [ ] Verificar a utilização de imagens e avaliar o uso de `next/image`.
- [ ] Revisar acessibilidade, elementos semânticos, atributos ARIA e navegação por teclado.
- [ ] Preservar metadados, rotas, navegação e funcionalidades existentes.

### 🧑‍💻 Fase 8: Clean Code e TypeScript

- [ ] Padronizar nomes de arquivos, componentes, funções, constantes e propriedades.
- [ ] Utilizar nomes que expressem claramente a responsabilidade de cada elemento.
- [ ] Reduzir duplicações de código.
- [ ] Evitar funções excessivamente longas e componentes com responsabilidades demais.
- [ ] Revisar interfaces, tipos genéricos e propriedades dos componentes.
- [ ] Evitar o uso desnecessário de `any` e coerções de tipos sem justificativa.
- [ ] Revisar imports absolutos e relativos de acordo com a organização definida.
- [ ] Manter consistência de formatação e estilo de código.
- [ ] Remover comentários redundantes e preservar os que explicam decisões importantes.
- [ ] Priorizar simplicidade, legibilidade, coesão e baixo acoplamento.

### 🔌 Fase 9: APIs, Integrações e Configurações

- [ ] Revisar `src/app/api/contact/route.ts`.
- [ ] Revisar `src/app/api/health/contact/route.ts`.
- [ ] Revisar `src/lib/alerts/email.ts`.
- [ ] Verificar tratamento de erros e respostas das APIs.
- [ ] Verificar validação dos dados recebidos e proteção contra entradas inválidas.
- [ ] Confirmar que segredos e credenciais não estejam expostos no código do cliente.
- [ ] Revisar as dependências e os aliases configurados em `tsconfig.json`.
- [ ] Verificar se as dependências declaradas no `package.json` são utilizadas.
- [ ] Não remover dependências antes de verificar seus usos, scripts e integrações.

### 🧪 Fase 10: Validação e Testes

- [ ] Executar `npm run lint` antes das alterações.
- [ ] Executar `npm run build` antes das alterações.
- [ ] Registrar os erros e avisos preexistentes.
- [ ] Realizar as refatorações em grupos pequenos e controlados.
- [ ] Atualizar todos os imports após movimentações de arquivos.
- [ ] Executar `npm run lint` após cada grupo de alterações.
- [ ] Executar `npm run build` após cada etapa relevante.
- [ ] Corrigir erros de TypeScript, ESLint e build introduzidos pelas alterações.
- [ ] Testar o carregamento inicial, a navegação e a responsividade.
- [ ] Testar todos os diálogos, botões, formulários e chamadas para ação.
- [ ] Confirmar que as funcionalidades e o design continuam funcionando.
- [ ] Revisar o diff do Git antes de concluir cada grupo de alterações.
- [ ] Registrar o resultado final da auditoria e as decisões arquiteturais adotadas.

---

**## 📌 Resumo do Progresso — Auditoria e Refatoração**

- [ ] Fase 001 — Auditoria da Estrutura de Pastas
- [ ] Fase 002 — Auditoria da Seção Hero
- [ ] Fase 003 — Componentes Compartilhados e Design System
- [ ] Fase 004 — Padronização dos Componentes de Carregamento
- [ ] Fase 005 — Organização das Regras de Negócio e dos Dados
- [ ] Fase 006 — Remoção de Código Não Utilizado
- [ ] Fase 007 — Arquitetura Next.js e React
- [ ] Fase 008 — Clean Code e TypeScript
- [ ] Fase 009 — APIs, Integrações e Configurações
- [ ] Fase 010 — Validação e Testes

**Regra de execução:** concluir e validar uma fase antes de avançar para a próxima. Antes de mover, excluir ou renomear arquivos, verificar seus usos e dependências. Manter o histórico de alterações no Git e atualizar este checklist conforme o progresso real.