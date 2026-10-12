import {
    Building2,
    CodeXml,
    Globe,
    Hospital,
    Monitor,
    PanelsTopLeft,
    Plug,
    ShoppingCart,
    UserRound,
    Wrench,
    Mail,
    MessageCircle,
    Sparkles,
    Workflow,
    Layers,
    type LucideIcon,
} from "lucide-react";

export const coresServicos = {
    blue: {
        texto: "text-blue-400",
        fundo: "bg-blue-400/10",
        borda: "border-blue-400/20",
        brilho: "hover:border-blue-400/40",
        sombra: "hover:shadow-blue-500/10",
    },
    purple: {
        texto: "text-purple-400",
        fundo: "bg-purple-400/10",
        borda: "border-purple-400/20",
        brilho: "hover:border-purple-400/40",
        sombra: "hover:shadow-purple-500/10",
    },
    emerald: {
        texto: "text-emerald-400",
        fundo: "bg-emerald-400/10",
        borda: "border-emerald-400/20",
        brilho: "hover:border-emerald-400/40",
        sombra: "hover:shadow-emerald-500/10",
    },
    red: {
        texto: "text-red-400",
        fundo: "bg-red-400/10",
        borda: "border-red-400/20",
        brilho: "hover:border-red-400/40",
        sombra: "hover:shadow-red-500/10",
    },
    amber: {
        texto: "text-amber-400",
        fundo: "bg-amber-400/10",
        borda: "border-amber-400/20",
        brilho: "hover:border-amber-400/40",
        sombra: "hover:shadow-amber-500/10",
    },
    cyan: {
        texto: "text-cyan-400",
        fundo: "bg-cyan-400/10",
        borda: "border-cyan-400/20",
        brilho: "hover:border-cyan-400/40",
        sombra: "hover:shadow-cyan-500/10",
    },
    violet: {
        texto: "text-violet-400",
        fundo: "bg-violet-400/10",
        borda: "border-violet-400/20",
        brilho: "hover:border-violet-400/40",
        sombra: "hover:shadow-violet-500/10",
    },
    pink: {
        texto: "text-pink-400",
        fundo: "bg-pink-400/10",
        borda: "border-pink-400/20",
        brilho: "hover:border-pink-400/40",
        sombra: "hover:shadow-pink-500/10",
    },
    teal: {
        texto: "text-teal-400",
        fundo: "bg-teal-400/10",
        borda: "border-teal-400/20",
        brilho: "hover:border-teal-400/40",
        sombra: "hover:shadow-teal-500/10",
    },
    orange: {
        texto: "text-orange-400",
        fundo: "bg-orange-400/10",
        borda: "border-orange-400/20",
        brilho: "hover:border-orange-400/40",
        sombra: "hover:shadow-orange-500/10",
    },
} as const;

export type CorServico = keyof typeof coresServicos;

export interface Servico {
    titulo: string;
    descricao: string;
    icone: LucideIcon;
    cor: CorServico;
}

export const dadosServicos: Servico[] = [
    {
        titulo: "Design de Websites",
        descricao:
            "Design de UI/UX moderno, com layouts responsivos, identidade visual consistente e foco na experiência do usuário.",
        icone: Monitor,
        cor: "blue",
    },
    {
        titulo: "Desenvolvimento de Websites",
        descricao:
            "Sites personalizados, responsivos e de alto desempenho, desenvolvidos com React, Next.js e tecnologias modernas.",
        icone: CodeXml,
        cor: "purple",
    },
    {
        titulo: "Desenvolvimento de comércio eletrônico",
        descricao:
            "Lojas virtuais com catálogo de produtos, carrinho de compras e possibilidade de integração com pagamentos e estoque.",
        icone: ShoppingCart,
        cor: "emerald",
    },
    {
        titulo: "Sistema de Gestão Hospitalar",
        descricao:
            "Soluções para apoiar a gestão de clínicas e hospitais, com funcionalidades como pacientes, agendamentos e organização de informações.",
        icone: Hospital,
        cor: "red",
    },
    {
        titulo: "Desenvolvimento de Sites Empresariais",
        descricao:
            "Sites corporativos profissionais que fortalecem a presença digital da empresa e ajudam a apresentar seus serviços.",
        icone: Building2,
        cor: "amber",
    },
    {
        titulo: "Design de Landing Page",
        descricao:
            "Páginas estratégicas para divulgar produtos e serviços, com design responsivo, chamadas para ação e foco em conversão.",
        icone: PanelsTopLeft,
        cor: "cyan",
    },
    {
        titulo: "Desenvolvimento WordPress",
        descricao:
            "Criação e personalização de sites WordPress, com temas e recursos adequados às necessidades do negócio.",
        icone: Globe,
        cor: "violet",
    },
    {
        titulo: "Site do Portfólio",
        descricao:
            "Portfólios personalizados para profissionais e empresas apresentarem projetos, habilidades e serviços.",
        icone: UserRound,
        cor: "pink",
    },
    {
        titulo: "Manutenção do site",
        descricao:
            "Correções, melhorias, atualizações e ajustes de desempenho para manter sites funcionando adequadamente.",
        icone: Wrench,
        cor: "teal",
    },
    {
        titulo: "Integração de API",
        descricao:
            "Integração de aplicações com APIs e serviços externos para conectar sistemas e automatizar a troca de informações.",
        icone: Plug,
        cor: "orange",
    },

    // Novos serviços
    {
        titulo: "Desenvolvimento de APIs e Backend",
        descricao:
            "Desenvolvimento de endpoints, regras de negócio, validação de dados e integração entre aplicações.",
        icone: Workflow,
        cor: "blue",
    },
    {
        titulo: "Integração de Formulários e E-mails",
        descricao:
            "Formulários de contato com validação de dados, envio de mensagens por e-mail e tratamento de respostas e erros.",
        icone: Mail,
        cor: "emerald",
    },
    {
        titulo: "Animações e Microinterações Web",
        descricao:
            "Animações, transições e efeitos interativos que tornam a navegação mais fluida e a interface mais envolvente.",
        icone: Sparkles,
        cor: "purple",
    },
    {
        titulo: "Integração com WhatsApp",
        descricao:
            "Botões de contato, links diretos e mensagens personalizadas para facilitar a comunicação entre empresas e clientes.",
        icone: MessageCircle,
        cor: "teal",
    },
    {
        titulo: "Desenvolvimento de Interfaces Interativas",
        descricao:
            "Interfaces com filtros, abas dinâmicas, componentes reutilizáveis e interações adaptadas a diferentes dispositivos.",
        icone: Layers,
        cor: "pink",
    },
];