# Checklist — Responsividade Mobile

**Projeto:** XCODIFY Portfolio Robson Soares  
**Branch:** `feature/mobile-config`  
**Objetivo:** validar a experiência mobile sem prejudicar o layout desktop.

## 1. Auditoria inicial

- [x] Executar o projeto localmente com `npm run dev`.
- [x] Abrir o site no navegador e verificar o console.
- [x] Registrar problemas visuais antes de começar as alterações.
- [x] Verificar se todas as seções carregam corretamente.
- [x] Identificar elementos com largura fixa que possam causar overflow.
- [x] Conferir se fontes, imagens e ícones carregam corretamente.

## 2. Layout global

**Arquivos principais:** `src/app/globals.css`, `src/app/layout.tsx` e `src/components/common/SectionCard.tsx`.

- [ ] Verificar se o viewport está configurado corretamente.
- [ ] Garantir que não exista rolagem horizontal indesejada.
- [ ] Conferir margens, paddings e espaçamentos em telas pequenas.
- [ ] Verificar se containers respeitam a largura disponível.
- [ ] Validar tamanhos de fonte e legibilidade.
- [ ] Conferir o comportamento do tema claro e escuro.
- [ ] Verificar se o conteúdo não fica escondido atrás de elementos fixos.
- [ ] Testar o layout em orientação retrato e paisagem.

## 3. Navegação

**Arquivos principais:** `src/components/layout/Navbar.tsx`, `src/components/layout/navbar/NavbarDesktopLinks.tsx`, `src/components/layout/navbar/NavbarMobileMenu.tsx` e `src/components/layout/navbar/navLinks.ts`.

- [ ] Verificar se a navegação desktop se adapta ao mobile.
- [ ] Conferir abertura e fechamento do menu mobile.
- [ ] Garantir que o menu não ultrapasse a tela.
- [ ] Verificar se os links funcionam corretamente.
- [ ] Fechar o menu após selecionar uma opção, quando aplicável.
- [ ] Impedir que o menu cubra indevidamente o conteúdo.
- [ ] Conferir navegação por teclado e foco visível.
- [ ] Garantir que os botões tenham área de toque adequada.

## 4. Seção Hero

**Diretório:** `src/components/sections/section-hero/`

- [ ] Conferir a apresentação do texto e sua hierarquia visual.
- [ ] Verificar o tamanho e posicionamento do avatar.
- [ ] Conferir o comportamento das órbitas e dos ícones de tecnologia.
- [ ] Garantir que as animações não provoquem overflow.
- [ ] Verificar a quebra de linha de títulos e descrições.
- [ ] Conferir o posicionamento das estatísticas.
- [ ] Validar os botões de ação e seus links.
- [ ] Verificar os links sociais.
- [ ] Conferir o funcionamento do efeito de digitação.
- [ ] Validar o diálogo do currículo em telas pequenas.
- [ ] Garantir que os elementos não se sobreponham.

Componentes a conferir:

- `SectionHero.tsx`
- `components/ApresentacaoHero.tsx`
- `components/AvatarHero.tsx`
- `components/OrbitasTecnologias.tsx`
- `components/EstatisticasHero.tsx`
- `components/AcoesHero.tsx`
- `components/LinksSociaisHero.tsx`
- `hooks/useEfeitoDigitacao.ts`
- `dialogs/DialogCurriculo.tsx`

## 5. Demais seções

### Sobre mim

- [ ] Conferir textos, espaçamentos e alinhamentos.
- [ ] Verificar se o conteúdo se adapta à largura mobile.

### Habilidades

- [ ] Conferir a disposição dos itens e suas quebras de linha.
- [ ] Garantir que ícones, nomes e descrições não se sobreponham.

### Projetos

- [ ] Verificar a adaptação dos cards e grids.
- [ ] Conferir imagens, descrições, links e botões.
- [ ] Validar a leitura do conteúdo em telas estreitas.

### Serviços

- [ ] Conferir o layout dos cards de serviços.
- [ ] Verificar o diálogo de detalhes dos serviços.
- [ ] Garantir que botões e textos não ultrapassem os limites dos cards.

### Experiência profissional

- [ ] Conferir a disposição dos cards de experiência.
- [ ] Verificar textos longos, datas e informações profissionais.
- [ ] Validar o diálogo de experiências.

### Formação acadêmica

- [ ] Conferir os cards de formação.
- [ ] Verificar instituições, cursos, datas e descrições.
- [ ] Validar o diálogo de formação acadêmica.

### Contato

- [ ] Conferir os campos do formulário.
- [ ] Verificar a adaptação dos inputs e da área de mensagem.
- [ ] Validar mensagens de carregamento, sucesso e erro.
- [ ] Garantir que o teclado virtual não prejudique o preenchimento.
- [ ] Testar o envio e a validação do formulário.

## 6. Footer e elementos flutuantes

**Arquivos principais:** `src/components/layout/Footer.tsx`, `src/components/layout/footer/FooterSocialLinks.tsx`, `src/components/common/WhatsAppFlutuante.tsx` e `src/components/common/AlternarTema.tsx`.

- [ ] Conferir o alinhamento e a quebra de linha do footer.
- [ ] Verificar os links sociais.
- [ ] Garantir que o botão flutuante do WhatsApp não cubra conteúdo ou botões.
- [ ] Conferir o posicionamento do botão de alternância de tema.
- [ ] Testar os elementos flutuantes em telas pequenas.
- [ ] Verificar áreas de toque e foco visível.
- [ ] Conferir se os elementos fixos respeitam as áreas seguras do dispositivo.

## 7. Diálogos, acessibilidade e interação

- [ ] Garantir que os diálogos caibam na tela.
- [ ] Verificar rolagem interna quando o conteúdo for maior que a área disponível.
- [ ] Testar abertura e fechamento por botões e teclado.
- [ ] Verificar se o foco permanece dentro do diálogo enquanto ele estiver aberto.
- [ ] Conferir retorno do foco ao elemento que abriu o diálogo.
- [ ] Garantir nomes acessíveis para botões e controles.
- [ ] Verificar contraste de texto e componentes.
- [ ] Conferir o comportamento com zoom de 200%.
- [ ] Respeitar a preferência por redução de movimento quando aplicável.

## 8. Resoluções de teste

### Mobile

- [ ] 320 × 568
- [ ] 360 × 640
- [ ] 375 × 667
- [ ] 390 × 844
- [ ] 414 × 896
- [ ] 430 × 932

### Tablet

- [ ] 768 × 1024
- [ ] 820 × 1180
- [ ] 1024 × 768

### Desktop e telas amplas

- [ ] 1280 × 720
- [ ] 1366 × 768
- [ ] 1440 × 900
- [ ] 1920 × 1080

- [ ] Testar orientação retrato e paisagem.
- [ ] Conferir os pontos de quebra entre mobile, tablet e desktop.
- [ ] Verificar se não há overflow horizontal em nenhuma resolução.
- [ ] Confirmar que alterações mobile não prejudicaram o desktop.

## 9. Validação técnica

- [ ] Executar `npm run lint`.
- [ ] Executar `npx tsc --noEmit`.
- [ ] Executar `npm run build`.
- [ ] Corrigir erros encontrados e repetir os testes.
- [ ] Testar links, botões, formulário, menu e diálogos.
- [ ] Conferir o console do navegador.
- [ ] Revisar o resultado com `git diff`.

## 10. Referências e conclusão

- Checklist desktop: `docs/checklist-responsividade-desktop.md`
- Planejamento geral: `TODO.md`

**Critério de conclusão:** marcar cada item somente após a verificação real. Registrar os problemas encontrados e as correções realizadas antes de considerar a responsividade concluída.

**Status:** [ ] Pendente | [ ] Em andamento | [ ] Validado

**Observações:**

- Problemas encontrados:
- Correções realizadas:
- Resoluções testadas:
- Resultado de lint:
- Resultado do TypeScript:
- Resultado do build:
- Data da validação:
