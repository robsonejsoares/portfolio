# Checklist — Responsividade Desktop

**Projeto:** XCODIFY Portfolio Robson Soares  
**Branch:** `feature/mobile-config`  
**Objetivo:** revisar e preservar a qualidade visual, o alinhamento e a responsividade do portfólio em desktops e monitores grandes.

> Trabalhar um arquivo ou grupo pequeno por vez. Revisar o código atual, realizar as alterações necessárias e testar antes de marcar cada tarefa como concluída.

## 1. Base global e estrutura

- [ ] `src/app/globals.css`
  - [ ] Revisar estilos globais, tipografia e cores.
  - [ ] Conferir animações, efeitos de fundo e scrollbar.
  - [ ] Identificar elementos que causam overflow horizontal.
- [ ] `src/app/layout.tsx`
  - [ ] Preservar fontes, metadados e configuração do tema.
- [ ] `src/app/portfolio/robson-soares/page.tsx`
  - [ ] Conferir estrutura, ordem das seções e espaçamento vertical.
- [ ] `src/components/common/SectionCard.tsx`
  - [ ] Revisar largura máxima, margens, padding, bordas e alinhamento.
  - [ ] Evitar conteúdo excessivamente largo em monitores grandes.

## 2. Navbar desktop

- [ ] `src/components/layout/Navbar.tsx`
  - [ ] Conferir posicionamento, altura e largura da navbar.
  - [ ] Verificar alinhamento entre logo, links e ações.
  - [ ] Conferir comportamento durante a rolagem.
- [ ] `src/components/layout/navbar/NavbarDesktopLinks.tsx`
  - [ ] Conferir espaçamento entre links.
  - [ ] Validar estados ativo, hover e foco.
  - [ ] Evitar sobreposição em resoluções intermediárias.
- [ ] `src/components/layout/navbar/NavbarMobileMenu.tsx`
  - [ ] Garantir que o menu mobile não apareça indevidamente no desktop.

## 3. Hero — apresentação inicial

- [ ] `src/components/sections/section-hero/SectionHero.tsx`
  - [ ] Revisar proporção entre as colunas.
  - [ ] Ajustar largura máxima e espaçamento entre avatar e apresentação.
  - [ ] Conferir altura da seção e alinhamento vertical.
- [ ] `src/components/sections/section-hero/components/AvatarHero.tsx`
  - [ ] Validar tamanho, posição e proporção do avatar.
- [ ] `src/components/sections/section-hero/components/OrbitasTecnologias.tsx`
  - [ ] Conferir centralização, raios, anéis e animações.
  - [ ] Verificar sobreposição entre tecnologias e avatar.
- [ ] `src/components/sections/section-hero/components/ApresentacaoHero.tsx`
  - [ ] Revisar hierarquia de títulos, subtítulos e textos.
  - [ ] Conferir largura das linhas e legibilidade.
- [ ] `src/components/sections/section-hero/components/EstatisticasHero.tsx`
  - [ ] Validar alinhamento e proporção dos cartões.
- [ ] `src/components/sections/section-hero/components/AcoesHero.tsx`
  - [ ] Conferir tamanho, espaçamento e alinhamento dos botões.
- [ ] `src/components/sections/section-hero/components/LinksSociaisHero.tsx`
  - [ ] Revisar alinhamento e espaçamento dos links sociais.
- [ ] `src/components/sections/section-hero/dialogs/DialogCurriculo.tsx`
  - [ ] Conferir dimensões, centralização e rolagem do diálogo.

## 4. Seção Sobre

- [ ] `src/components/sections/section-sobre/SectionSobre.tsx`
  - [ ] Revisar largura do conteúdo e hierarquia tipográfica.
  - [ ] Conferir alinhamento, espaçamento e legibilidade.
  - [ ] Evitar parágrafos excessivamente largos.

## 5. Habilidades

- [ ] `src/components/sections/section-habilidades/SectionHabilidades.tsx`
  - [ ] Revisar número de colunas e espaçamento entre cartões.
  - [ ] Conferir dimensões de ícones, títulos e descrições.
  - [ ] Preservar consistência visual entre os elementos.

## 6. Projetos

- [ ] `src/components/sections/section-projetos/SectionProjetos.tsx`
  - [ ] Revisar quantidade de colunas e largura dos cartões.
  - [ ] Conferir proporção das imagens e alinhamento do conteúdo.
  - [ ] Validar botões, links e efeitos de hover.
  - [ ] Evitar cartões excessivamente largos ou altos.

## 7. Serviços

- [ ] `src/components/sections/section-servicos/SectionServicos.tsx`
- [ ] `src/components/sections/section-servicos/components/CardServico.tsx`
- [ ] `src/components/sections/section-servicos/dialogs/DialogServicos.tsx`
- [ ] Revisar grades, dimensões dos cartões e alinhamento.
- [ ] Conferir animações, efeitos de hover e diálogos.

## 8. Experiência profissional

- [ ] `src/components/sections/section-experiencia/SectionExperiencia.tsx`
- [ ] `src/components/sections/section-experiencia/components/CardExperiencia.tsx`
- [ ] `src/components/sections/section-experiencia/dialogs/DialogExperiencias.tsx`
- [ ] Revisar alinhamento de datas, cargos e descrições.
- [ ] Conferir timeline, cartões e espaçamento vertical.
- [ ] Validar dimensões e rolagem dos diálogos.

## 9. Formação acadêmica

- [ ] `src/components/sections/section-formacao-academica/SectionFormacaoAcademica.tsx`
- [ ] `src/components/sections/section-formacao-academica/components/CardFormacao.tsx`
- [ ] `src/components/sections/section-formacao-academica/dialogs/DialogFormacoAcademica.tsx`
- [ ] Revisar proporções dos cartões e alinhamento dos textos.
- [ ] Conferir datas, descrições e diálogos.

## 10. Contato e formulário

- [ ] `src/components/sections/section-contato/SectionContato.tsx`
- [ ] `src/components/sections/section-contato/components/FormularioContato.tsx`
- [ ] `src/components/sections/section-contato/components/FeedbackContato.tsx`
- [ ] Conferir largura dos campos e alinhamento dos botões.
- [ ] Revisar mensagens de validação e feedback.
- [ ] Testar o envio do formulário e seus estados de carregamento.

## 11. Footer e componentes compartilhados

- [ ] `src/components/layout/Footer.tsx`
- [ ] `src/components/layout/footer/FooterSocialLinks.tsx`
- [ ] `src/components/common/WhatsAppFlutuante.tsx`
- [ ] `src/components/common/AlternarTema.tsx`
- [ ] `src/components/common/BrandLogo.tsx`
- [ ] `src/components/common/EfeitosFundo.tsx`
- [ ] `src/components/common/Loading.tsx`
- [ ] `src/components/common/LoadingDialog.tsx`
- [ ] `src/components/ui/Button.tsx`
- [ ] `src/components/ui/ButtonFechar.tsx`
- [ ] Revisar alinhamento, dimensões, sombras, contraste e estados de interação.

## 12. Testes de desktop

- [ ] Testar resolução de 1024 × 768.
- [ ] Testar resolução de 1280 × 720.
- [ ] Testar resolução de 1366 × 768.
- [ ] Testar resolução de 1440 × 900.
- [ ] Testar resolução de 1920 × 1080.
- [ ] Conferir monitores ultrawide, quando disponíveis.
- [ ] Confirmar ausência de rolagem horizontal indevida.
- [ ] Confirmar que textos, imagens, cartões e diálogos não ficam cortados.
- [ ] Verificar consistência de espaçamentos e alinhamentos.
- [ ] Testar links, botões, animações, menus e formulários.
- [ ] Conferir os breakpoints entre tablet e desktop.
- [ ] Executar lint e build após as alterações.

## Ordem de execução

1. Base global e estrutura das seções.
2. Navbar desktop.
3. Hero, avatar e órbitas.
4. Demais seções, uma por vez.
5. Footer e componentes compartilhados.
6. Testes finais em diferentes resoluções.

**Regra de trabalho:** preservar o design desktop existente sempre que estiver correto. Fazer alterações pontuais, testar e marcar como concluídas antes de avançar. Manter as mudanças na branch `feature/mobile-config`.
