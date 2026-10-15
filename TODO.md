# 🚀 Plano de Desenvolvimento

**Projeto:** XCODIFY Portfolio Robson Soares
**Branch:** `feature/mobile-config`  
**Stack atual:** Next.js, React, TypeScript e CSS  
**Objetivo:** manter o histórico de implementação, concluir a responsividade, revisar a arquitetura e validar a qualidade do frontend antes de avançar para o backend Java.

---

## 📌 Etapa 1 — Estrutura inicial e configuração do projeto

- [x] Criar e configurar o projeto Next.js.
- [x] Configurar React e TypeScript.
- [x] Organizar a estrutura inicial de diretórios.
- [x] Configurar os scripts de desenvolvimento e produção.
- [x] Preparar a estrutura básica da aplicação.

**Status:** concluída.

## 🎨 Etapa 2 — Identidade visual e estilos globais

- [x] Criar os estilos globais em `src/app/globals.css`.
- [x] Definir a identidade visual do portfólio.
- [x] Estabelecer cores, tipografia e espaçamentos.
- [x] Implementar o suporte aos temas claro e escuro.
- [x] Preparar estilos reutilizáveis para as seções.

**Status:** concluída.

## 🧭 Etapa 3 — Layout e navegação

- [x] Configurar o layout principal em `src/app/layout.tsx`.
- [x] Implementar a navegação em `src/components/layout/Navbar.tsx`.
- [x] Criar os links da navegação.
- [x] Separar os componentes da navegação desktop e mobile.
- [x] Implementar o footer.
- [x] Criar a estrutura da página do portfólio em `src/app/portfolio/robson-soares/page.tsx`.

**Status:** implementação concluída; responsividade será revalidada na Etapa 11.

## 👨‍💻 Etapa 4 — Seção Hero

- [x] Criar a seção principal do portfólio.
- [x] Implementar a apresentação pessoal.
- [x] Adicionar avatar e elementos visuais.
- [x] Implementar estatísticas e links sociais.
- [x] Criar os botões de ação.
- [x] Implementar os efeitos visuais e de digitação.
- [x] Criar o diálogo do currículo.
- [x] Organizar os componentes da seção em arquivos separados.

**Diretório:** `src/components/sections/section-hero/`

**Status:** implementação concluída; responsividade será revalidada na Etapa 11.

## 👤 Etapa 5 — Seção Sobre

- [x] Criar a seção de apresentação pessoal.
- [x] Organizar as informações e os textos.
- [x] Aplicar a identidade visual da seção.
- [x] Integrar a seção à página principal.

**Status:** implementação concluída.

## 🎓 Etapa 6 — Formação acadêmica

- [x] Criar a seção de formação acadêmica.
- [x] Organizar os dados de formação.
- [x] Implementar a apresentação das informações.
- [x] Criar os componentes necessários para exibição dos dados.
- [x] Implementar a ordenação das formações.
- [x] Integrar a seção à página principal.

**Status:** implementação concluída.

## 🛠️ Etapa 7 — Habilidades

- [x] Criar a seção de habilidades.
- [x] Organizar as informações de tecnologias e competências.
- [x] Implementar a apresentação visual dos itens.
- [x] Integrar a seção à página principal.

**Status:** implementação concluída.

## 🚀 Etapa 8 — Projetos

- [x] Criar a seção de projetos.
- [x] Organizar os dados dos projetos.
- [x] Implementar os componentes de apresentação.
- [x] Adicionar links e ações relacionados aos projetos.
- [x] Integrar a seção à página principal.

**Status:** implementação concluída.

## 💼 Etapa 9 — Experiência profissional e serviços

- [x] Criar a seção de experiência profissional.
- [x] Organizar os dados das experiências.
- [x] Criar a seção de serviços.
- [x] Organizar os dados dos serviços.
- [x] Implementar os componentes de apresentação.
- [x] Integrar as seções à página principal.

**Status:** implementação concluída.

## ✉️ Etapa 10 — Contato e APIs

- [x] Criar a seção de contato.
- [x] Implementar o formulário de contato.
- [x] Criar a API de contato em `src/app/api/contact/route.ts`.
- [x] Criar a API de verificação em `src/app/api/health/contact/route.ts`.
- [x] Organizar a lógica de envio de e-mail.
- [x] Criar os componentes de carregamento e feedback.
- [x] Integrar o formulário à aplicação.

**Arquivos relacionados:**

- `src/app/api/contact/route.ts`
- `src/app/api/health/contact/route.ts`
- `src/lib/alerts/email.ts`
- `src/config/loading.ts`
- `src/components/common/Loading.tsx`
- `src/components/common/LoadingDialog.tsx`

**Status:** implementação concluída; os fluxos serão revalidados na Etapa 13.

---

## 📱 Etapa 11 — Responsividade mobile, tablet e desktop

**Objetivo:** garantir uma experiência consistente em diferentes resoluções, sem overflow horizontal, sobreposições ou perda de funcionalidade.

### 11.1 — Diagnóstico inicial

- [ ] Executar o projeto localmente com `npm run dev`.
- [ ] Verificar erros no console do navegador.
- [ ] Inspecionar todas as seções da página.
- [ ] Identificar elementos com largura ou altura fixa inadequada.
- [ ] Identificar textos, imagens, cards e botões que ultrapassam seus containers.
- [ ] Registrar os problemas antes de realizar as correções.
- [ ] Conferir o comportamento nos temas claro e escuro.

### 11.2 — Layout global

**Arquivos:** `src/app/globals.css`, `src/app/layout.tsx` e `src/components/common/SectionCard.tsx`.

- [ ] Conferir o viewport e os estilos globais.
- [ ] Garantir que não exista rolagem horizontal indesejada.
- [ ] Ajustar margens, paddings e espaçamentos.
- [ ] Verificar se os containers respeitam a largura disponível.
- [ ] Validar a legibilidade dos textos em telas pequenas.
- [ ] Conferir o comportamento dos grids e das colunas.
- [ ] Verificar o conteúdo em orientação retrato e paisagem.
- [ ] Evitar correções globais que prejudiquem componentes não relacionados.

### 11.3 — Navegação

**Arquivos:** `src/components/layout/Navbar.tsx` e `src/components/layout/navbar/`.

- [ ] Validar os links da navegação desktop.
- [ ] Validar a abertura e o fechamento do menu mobile.
- [ ] Conferir o posicionamento do menu em telas estreitas.
- [ ] Garantir que o menu não ultrapasse os limites da tela.
- [ ] Verificar se os links navegam para as seções corretas.
- [ ] Validar o fechamento do menu após a seleção de um link, quando aplicável.
- [ ] Conferir se o menu não cobre indevidamente o conteúdo.
- [ ] Testar o uso por teclado e o foco visível.

### 11.4 — Seção Hero

**Diretório:** `src/components/sections/section-hero/`.

- [ ] Ajustar títulos, descrições e quebras de linha.
- [ ] Conferir o tamanho e o posicionamento do avatar.
- [ ] Validar as órbitas e os ícones de tecnologia.
- [ ] Garantir que animações não provoquem overflow.
- [ ] Ajustar o posicionamento das estatísticas.
- [ ] Conferir os botões de ação.
- [ ] Validar os links sociais.
- [ ] Verificar o efeito de digitação.
- [ ] Validar o diálogo do currículo em telas pequenas.
- [ ] Eliminar sobreposições entre os elementos.

### 11.5 — Seção Sobre

- [ ] Conferir o espaçamento dos textos.
- [ ] Validar o alinhamento dos elementos.
- [ ] Garantir que o conteúdo respeite a largura disponível.
- [ ] Conferir a legibilidade em dispositivos móveis.

### 11.6 — Seção Habilidades

- [ ] Ajustar grids e disposição dos itens.
- [ ] Conferir o alinhamento de ícones, nomes e descrições.
- [ ] Validar quebras de linha.
- [ ] Evitar sobreposições e cards excessivamente estreitos.

### 11.7 — Seção Projetos

- [ ] Ajustar os grids e os cards.
- [ ] Conferir imagens, descrições e links.
- [ ] Validar botões e áreas clicáveis.
- [ ] Verificar o comportamento em telas pequenas.
- [ ] Garantir que títulos longos não quebrem o layout.

### 11.8 — Seção Serviços

- [ ] Ajustar a disposição dos cards.
- [ ] Validar títulos e descrições.
- [ ] Conferir os botões e as ações disponíveis.
- [ ] Testar os diálogos de detalhes.
- [ ] Garantir que os diálogos caibam na tela.

### 11.9 — Seção Experiência profissional

- [ ] Conferir o layout dos cards.
- [ ] Ajustar datas, títulos e descrições.
- [ ] Validar textos longos.
- [ ] Testar os diálogos relacionados às experiências.

### 11.10 — Seção Formação acadêmica

- [ ] Conferir o layout dos cards de formação.
- [ ] Validar nomes de cursos e instituições.
- [ ] Conferir datas e descrições.
- [ ] Testar os diálogos de formação acadêmica.
- [ ] Garantir que a ordenação dos dados continue correta.

### 11.11 — Seção Contato

- [ ] Ajustar os campos do formulário.
- [ ] Validar inputs e área de mensagem.
- [ ] Conferir os botões de envio.
- [ ] Testar mensagens de carregamento, sucesso e erro.
- [ ] Verificar a usabilidade com o teclado virtual.
- [ ] Garantir que o formulário não ultrapasse a largura da tela.

### 11.12 — Footer e elementos compartilhados

- [ ] Ajustar o layout do footer.
- [ ] Conferir os links sociais.
- [ ] Validar o botão flutuante do WhatsApp.
- [ ] Conferir o alternador de tema.
- [ ] Garantir que elementos fixos não cubram conteúdo importante.
- [ ] Validar áreas de toque e espaçamento entre controles.
- [ ] Verificar o comportamento em telas estreitas.

### 11.13 — Acessibilidade e interação

- [ ] Conferir a navegação por teclado.
- [ ] Garantir foco visível nos controles interativos.
- [ ] Verificar nomes acessíveis de botões e links.
- [ ] Validar contraste de textos e componentes.
- [ ] Testar zoom de 200%.
- [ ] Conferir abertura, fechamento e rolagem dos diálogos.
- [ ] Verificar o gerenciamento de foco nos diálogos.
- [ ] Garantir retorno do foco ao elemento que abriu o diálogo.
- [ ] Respeitar a preferência por redução de movimento quando aplicável.
- [ ] Conferir as áreas de toque dos controles mobile.

### 11.14 — Resoluções de teste

**Mobile**

- [ ] 320 × 568
- [ ] 360 × 640
- [ ] 375 × 667
- [ ] 390 × 844
- [ ] 414 × 896
- [ ] 430 × 932

**Tablet**

- [ ] 768 × 1024
- [ ] 820 × 1180
- [ ] 1024 × 768

**Desktop**

- [ ] 1280 × 720
- [ ] 1366 × 768
- [ ] 1440 × 900
- [ ] 1920 × 1080

- [ ] Testar orientações retrato e paisagem.
- [ ] Conferir os pontos de quebra entre mobile, tablet e desktop.
- [ ] Garantir ausência de overflow horizontal.
- [ ] Confirmar que as alterações mobile não prejudicaram o desktop.

**Documento de apoio:** `docs/checklist-responsividade-mobile.md`

**Documento complementar:** `docs/checklist-responsividade-desktop.md`

**Critério de conclusão:** todas as resoluções relevantes devem ser verificadas; os problemas encontrados devem ser corrigidos e testados novamente.

---

## 🧹 Etapa 12 — Auditoria de arquitetura e Clean Code

**Objetivo:** revisar a organização do projeto, reduzir duplicações e melhorar a manutenção sem alterar funcionalidades desnecessariamente.

### 12.1 — Organização dos componentes

- [ ] Revisar a separação entre páginas, seções, componentes e utilitários.
- [ ] Conferir se os componentes têm responsabilidades claras.
- [ ] Identificar componentes grandes que possam ser divididos.
- [ ] Evitar fragmentação excessiva em componentes sem benefício real.
- [ ] Verificar consistência na nomenclatura dos arquivos e componentes.
- [ ] Conferir a organização dos diretórios.
- [ ] Identificar duplicações de lógica e de apresentação.
- [ ] Reutilizar componentes existentes quando fizer sentido.

### 12.2 — Dados e configuração

- [ ] Revisar `src/data/dadosCurriculo.ts`.
- [ ] Revisar `src/data/dadosPortfolio.ts`.
- [ ] Revisar `src/data/dadosServicos.ts`.
- [ ] Conferir `src/config/loading.ts`.
- [ ] Revisar a separação entre dados, configuração e apresentação.
- [ ] Eliminar duplicações desnecessárias.
- [ ] Conferir a consistência dos tipos TypeScript.
- [ ] Evitar valores fixos espalhados quando uma configuração centralizada for apropriada.

### 12.3 — Componentes compartilhados e interface

- [ ] Revisar os componentes em `src/components/common/`.
- [ ] Revisar os componentes em `src/components/ui/`.
- [ ] Conferir os componentes de layout e footer.
- [ ] Verificar se os componentes de carregamento apresentam estados consistentes.
- [ ] Validar os estados de carregamento, sucesso e erro.
- [ ] Conferir se propriedades e interfaces são claras.
- [ ] Remover abstrações desnecessárias.
- [ ] Revisar a semântica HTML.
- [ ] Conferir nomes acessíveis e atributos ARIA quando necessários.

### 12.4 — Next.js, React e TypeScript

- [ ] Conferir a estrutura de App Router.
- [ ] Validar os caminhos de importação.
- [ ] Revisar o uso de componentes de servidor e de cliente.
- [ ] Verificar o uso de `'use client'` nos componentes que realmente precisam dele.
- [ ] Revisar hooks, efeitos e dependências.
- [ ] Conferir tipagem de props e dados.
- [ ] Evitar o uso desnecessário de `any`.
- [ ] Identificar imports, variáveis e componentes não utilizados.
- [ ] Remover código morto após confirmar que não é necessário.
- [ ] Conferir a utilização adequada de recursos do Next.js.

### 12.5 — APIs e integrações

- [ ] Revisar `src/app/api/contact/route.ts`.
- [ ] Revisar `src/app/api/health/contact/route.ts`.
- [ ] Conferir validação dos dados recebidos.
- [ ] Validar tratamento de erros.
- [ ] Verificar códigos HTTP e respostas das rotas.
- [ ] Conferir a configuração do envio de e-mail em `src/lib/alerts/email.ts`.
- [ ] Garantir que segredos não estejam expostos no código do frontend.
- [ ] Revisar a utilização de variáveis de ambiente.
- [ ] Conferir CORS e proteções aplicáveis aos endpoints.
- [ ] Testar o comportamento quando um serviço externo falhar.

### 12.6 — Acessibilidade e qualidade

- [ ] Revisar a semântica dos elementos HTML.
- [ ] Conferir a hierarquia de títulos.
- [ ] Validar rótulos dos campos de formulário.
- [ ] Revisar acessibilidade de diálogos e menus.
- [ ] Conferir o contraste dos temas.
- [ ] Verificar mensagens de erro compreensíveis.
- [ ] Garantir que estados relevantes não sejam comunicados apenas por cor.
- [ ] Conferir preferência por redução de movimento.
- [ ] Validar foco visível e ordem de navegação.

### 12.7 — Documentação

- [ ] Conferir se os caminhos citados na documentação existem.
- [ ] Atualizar instruções que não correspondam mais ao código.
- [ ] Revisar `TODO.md`.
- [ ] Revisar `docs/checklist-responsividade-mobile.md`.
- [ ] Revisar `docs/checklist-responsividade-desktop.md`.
- [ ] Manter `docs/checklist-backend-java.md` como roteiro independente para a futura implementação do backend.
- [ ] Registrar decisões técnicas relevantes.
- [ ] Evitar marcar tarefas como concluídas sem verificação real.

**Critério de conclusão:** código organizado, tipado, sem duplicações desnecessárias e com documentação coerente com a implementação atual.

---

## 🧪 Etapa 13 — Qualidade, testes e validação final

**Objetivo:** confirmar que o projeto funciona corretamente após as alterações de responsividade e arquitetura.

### 13.1 — Lint e TypeScript

- [ ] Executar `npm run lint`.
- [ ] Corrigir os erros identificados.
- [ ] Revisar avisos relevantes.
- [ ] Executar `npx tsc --noEmit`.
- [ ] Corrigir erros de tipagem.
- [ ] Repetir as verificações após as correções.
- [ ] Registrar os resultados reais.

### 13.2 — Build de produção

- [ ] Executar `npm run build`.
- [ ] Corrigir erros de compilação.
- [ ] Conferir avisos relevantes do Next.js.
- [ ] Reexecutar o build após as correções.
- [ ] Registrar o resultado final.

### 13.3 — Testes funcionais

- [ ] Validar a navegação desktop.
- [ ] Validar o menu mobile.
- [ ] Testar o alternador de tema.
- [ ] Testar os botões e links da seção Hero.
- [ ] Testar a abertura e o fechamento dos diálogos.
- [ ] Validar links sociais.
- [ ] Testar o botão flutuante do WhatsApp.
- [ ] Validar o formulário de contato.
- [ ] Verificar estados de carregamento, sucesso e erro.
- [ ] Testar os endpoints de contato e health check.
- [ ] Conferir o console do navegador.

### 13.4 — Testes de responsividade

- [ ] Executar o checklist mobile.
- [ ] Executar o checklist desktop.
- [ ] Validar as resoluções prioritárias.
- [ ] Testar orientação retrato e paisagem.
- [ ] Conferir ausência de overflow horizontal.
- [ ] Verificar se nenhuma seção ficou quebrada.
- [ ] Confirmar que o desktop continua funcionando.
- [ ] Registrar as resoluções efetivamente testadas.

### 13.5 — Revisão final do código

- [ ] Revisar `git status`.
- [ ] Revisar `git diff`.
- [ ] Conferir se não há arquivos temporários desnecessários.
- [ ] Verificar se não há segredos ou credenciais no diff.
- [ ] Conferir se as mudanças estão relacionadas ao objetivo da branch.
- [ ] Verificar se a documentação acompanha as alterações.
- [ ] Garantir que nenhum item foi marcado como concluído sem validação.

### 13.6 — Registro dos resultados

**Data da validação:** preencher após executar os testes.

| Verificação | Resultado |
|---|---|
| `npm run lint` | Pendente |
| `npx tsc --noEmit` | Pendente |
| `npm run build` | Pendente |
| Testes funcionais | Pendente |
| Checklist mobile | Pendente |
| Checklist desktop | Pendente |
| Revisão do `git diff` | Pendente |

**Critério de conclusão:** todas as verificações devem ter sido executadas, os erros relevantes corrigidos e os resultados registrados. Atualize a tabela com os resultados reais, sem presumir sucesso.

---

## ☕ Etapa futura — Backend Java com Spring Boot

O backend Java será planejado e acompanhado separadamente, depois da estabilização do frontend.

**Documento de referência:** `docs/checklist-backend-java.md`

- [ ] Revisar os pré-requisitos de Java e Maven.
- [ ] Estudar os fundamentos de Java e orientação a objetos.
- [ ] Preparar o ambiente com JDK, Maven e PostgreSQL.
- [ ] Criar a aplicação Spring Boot.
- [ ] Definir a arquitetura da API.
- [ ] Implementar persistência com PostgreSQL e JPA/Hibernate.
- [ ] Planejar os recursos de projetos, serviços, experiências, formação, habilidades e perfil.
- [ ] Implementar validação e tratamento de erros.
- [ ] Planejar autenticação e autorização.
- [ ] Integrar a API ao frontend Next.js.
- [ ] Implementar testes automatizados.
- [ ] Preparar documentação e estratégia de implantação.

**Observação:** seguir a sequência detalhada em `docs/checklist-backend-java.md`. Os itens desta seção não significam que o backend já foi implementado.

---

## ✅ Critério geral de conclusão

O projeto estará pronto para a próxima fase quando:

- [ ] A responsividade mobile, tablet e desktop estiver validada.
- [ ] A navegação e os componentes interativos estiverem funcionando.
- [ ] A auditoria de arquitetura estiver concluída.
- [ ] O lint estiver validado.
- [ ] O TypeScript estiver validado.
- [ ] O build de produção estiver validado.
- [ ] Os fluxos de contato estiverem testados.
- [ ] A documentação estiver atualizada.
- [ ] O `git diff` tiver sido revisado.
- [ ] Os resultados dos testes estiverem registrados.

## 📊 Resumo do progresso

| Etapa | Descrição | Status |
|---|---|---|
| 1 | Estrutura inicial e configuração | Concluída |
| 2 | Identidade visual e estilos globais | Concluída |
| 3 | Layout e navegação | Implementação concluída |
| 4 | Seção Hero | Implementação concluída |
| 5 | Seção Sobre | Implementação concluída |
| 6 | Formação acadêmica | Implementação concluída |
| 7 | Habilidades | Implementação concluída |
| 8 | Projetos | Implementação concluída |
| 9 | Experiência e serviços | Implementação concluída |
| 10 | Contato e APIs | Implementação concluída |
| 11 | Responsividade mobile, tablet e desktop | Pendente de validação |
| 12 | Auditoria de arquitetura e Clean Code | Pendente |
| 13 | Testes e validação final | Pendente |
| Futura | Backend Java com Spring Boot | Planejamento separado |

**Próxima prioridade:** concluir a Etapa 11, depois executar a auditoria da Etapa 12 e finalizar a validação da Etapa 13.

**Regra de manutenção:** atualizar este arquivo conforme o trabalho real for concluído, preservando o histórico e sem marcar testes como aprovados antes de executá-los.
