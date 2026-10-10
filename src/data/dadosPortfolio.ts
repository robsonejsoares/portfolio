export interface StatItem {
  value: string;
  label: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: "Freelance" | "Estágio" | "Tempo integral" | "Meio período";
  description: string;
  achievements: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export const dadosPortfolio = {
  personal: {
    name: "Robson Soares",
    roles: [
      "Desenvolvedor Full Stack",
      "Arquiteto Web",
      "Engenheiro de Software",
      "Cloud & DevOps",
    ],
    tagline: "Unindo a precisão da engenharia de software com experiências digitais marcantes e de alta performance.",
    location: "Brasília - DF, Brasil",
    status: "Disponível para trabalho",
    bio: "Desenvolvedor Full Stack apaixonado por criar aplicações web e mobile de alto desempenho. Especialista em ecossistemas React, Next.js, Node.js e Java/Spring Boot.",
    stats: [
      { value: "3+", label: "Anos de Experiência" },
      { value: "CleanCode", label: "Boas Práticas" },
      { value: "100%", label: "Comprometimento" },
    ] as StatItem[],
  },

  skillsCategories: [
    {
      category: "1. Linguagens de Programação",
      items: ["Java", "TypeScript", "JavaScript (ES6+)", "HTML5 & CSS3", "SQL"],
    },
    {
      category: "2. Frontend & Web",
      items: ["React.js", "Next.js (App Router, Server Actions)", "Redux & Context API", "Tailwind CSS", "Electron.js"],
    },
    {
      category: "3. Mobile (Android / iOS)",
      items: ["React Native", "Expo & Expo Router", "Animações, Maps & Push Notifications"],
    },
    {
      category: "4. Backend & Ecossistema Java / Node",
      items: ["Java (Spring Boot, Security, Data JPA)", "Node.js", "NestJS (Controllers, Guards)", "Arquitetura REST & Microserviços"],
    },
    {
      category: "5. Bancos de Dados & BaaS",
      items: ["PostgreSQL & MySQL", "SQLite", "Firebase (Auth, Firestore)", "ORM / Query Builders (Prisma)"],
    },
    {
      category: "6. UI/UX Design & Prototipagem",
      items: ["Figma (Design Systems, Auto Layout)", "Guia de Estilos (Style Guides)", "UI/UX Responsivo & Heurísticas"],
    },
    {
      category: "7. IA & Automação de Processos",
      items: ["Agentes IA & Multi-Agents", "RAG (Retrieval-Augmented Generation)", "n8n (Automações de Fluxo)", "Claude Code & Spec-Driven", "Engenharia de Prompt"],
    },
    {
      category: "8. DevOps, Testes & Ferramentas",
      items: ["Git & GitHub", "Docker", "Deploy em VPS & Vercel", "Testes (Jest, RTL, JUnit)", "Documentação (Swagger / Open API)"],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "cofre-poesia",
      title: "Cofre de Poesia",
      category: "Aplicativos Web",
      shortDescription: "Plataforma de arquivo digital para acervo literário com busca otimizada e interface imersiva.",
      fullDescription: "Sistema completo desenvolvido em Next.js e TypeScript para gerenciamento e exibição de acervos poéticos com busca em tempo real e autenticação.",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      highlights: ["Busca otimizada em milissegundos", "Interface totalmente responsiva", "Modo escuro nativo"],
    },
    {
      id: "edu-portal",
      title: "EduPortal PK",
      category: "Aplicativos Web",
      shortDescription: "Sistema de gestão educacional com LMS integrado e acompanhamento de turmas.",
      fullDescription: "Plataforma para gestão de cursos, atribuição de tarefas e métricas de desempenho acadêmico para professores e alunos.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
      technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      highlights: ["Suporte a mais de 5.000 alunos", "Relatórios interativos", "Painel administrativo"],
    },
  ] as Project[],

  experiences: [
    {
      id: "exp-1",
      role: "Desenvolvedor Full Stack Freelancer",
      company: "Projetos Autônomos",
      period: "2023 - Presente",
      type: "Freelance",
      description: "Desenvolvimento de aplicações web modernas para clientes diversos, com foco em performance, SEO e UI/UX.",
      achievements: [
        "Mais de 15 projetos desenvolvidos e entregues com alto índice de satisfação.",
        "Criação de componentes reutilizáveis e sistemas de design.",
      ],
    },
  ] as Experience[],

  services: [
    {
      id: "web-dev",
      title: "Desenvolvimento Web",
      description: "Sistemas web e landing pages modernas construídas com as tecnologias mais recentes do mercado.",
      iconName: "Code",
      features: ["Frontend com React / Next.js", "Backend em Node.js / Java", "Arquitetura escalável"],
    },
  ] as Service[],

  testimonials: [
    {
      id: "test-1",
      name: "Ayesha Siddiqui",
      role: "Fundadora, EduPortal",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      content: "O Robson entregou uma plataforma incrível com atenção excepcional aos detalhes visuais e de performance.",
      rating: 5,
    },
  ] as Testimonial[],
};
