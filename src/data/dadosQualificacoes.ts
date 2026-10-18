
export type CategoriaQualificacao =
    | "Formação acadêmica"
    | "Cursos"
    | "Certificações";

export type StatusQualificacao =
    | "Concluído"
    | "Concluída"
    | "Em andamento";


export interface Qualificacao {
    id: string;
    title: string;
    institution: string;
    category: CategoriaQualificacao;
    period: string;
    status?: StatusQualificacao;
    description: string;
    certificateUrl?: string;
    highlights?: string[];
}

export const dadosQualificacoes: Qualificacao[] = [
    {
        id: "analise-desenvolvimento-sistemas",
        title: "Análise e Desenvolvimento de Sistemas",
        institution: "Centro Universitário Estácio de Santa Catarina",
        category: "Formação acadêmica",
        period: "05/07/2026",
        status: "Concluído",
        description:
            "Formação acadêmica em Análise e Desenvolvimento de Sistemas. Colação de grau em 24/07/2026.",
        certificateUrl:
            "https://1drv.ms/b/c/4f67cd707abdaafb/IQQ0O65y3qlMQY-bTqD24-yDATvN9T8U4mQ-2b70kdE-OKY",
    },
    {
        id: "desenvolvimento-full-stack-cloud",
        title: "Desenvolvimento Full Stack e Cloud Computing",
        institution: "Gran Centro Universitário",
        category: "Formação acadêmica",
        period: "15/01/2026",
        status: "Concluído",
        description:
            "Pós-Graduação Lato Sensu em Desenvolvimento Full Stack e Cloud Computing.",
        certificateUrl:
            "https://1drv.ms/b/c/4f67cd707abdaafb/IQQuuCUiLc-ESZCuCCH5r36xAVgRErZnc7myoqVwNF_fZOY",
    },
    {
        id: "linguagens-paradigmas-programacao",
        title: "Linguagens e Paradigmas de Programação",
        institution: "Gran Centro Universitário",
        category: "Formação acadêmica",
        period: "15/01/2026",
        status: "Concluído",
        description:
            "Pós-Graduação Lato Sensu em Linguagens e Paradigmas de Programação.",
        certificateUrl:
            "https://1drv.ms/b/c/4f67cd707abdaafb/IQQuuCUiLc-ESZCuCCH5r36xAVgRErZnc7myoqVwNF_fZOY",
    },
    {
        id: "algoritmos-logica-programacao",
        title: "Algoritmos e Lógica de Programação",
        institution: "Udemy",
        category: "Cursos",
        period: "30/07/2025",
        status: "Concluído",
        description:
            "Curso complementar de Algoritmos e Lógica de Programação.",
        certificateUrl:
            "https://1drv.ms/b/c/4f67cd707abdaafb/IQRZWCcw3xbpR4n-4JlWGwrEARYcN9XFxOhCSoEelfC07O8",
    },
    {
        id: "administrador-banco-dados",
        title: "Administrador de Banco de Dados",
        institution: "Instituto Federal do Rio Grande do Sul",
        category: "Certificações",
        period: "25/04/2025",
        status: "Concluído",
        description:
            "Curso complementar de Administrador de Banco de Dados.",
        certificateUrl:
            "https://1drv.ms/b/c/4f67cd707abdaafb/IQRyDUAl_CJ5SITLiKqDXNWDAUf4RSuZjHz7OKNIIt9P-UU",
    },
    {
        id: "desenvolvimento-web",
        title: "Desenvolvimento Web",
        institution: "Udemy",
        category: "Cursos",
        period: "16/08/2024",
        status: "Concluído",
        description:
            "Curso complementar de Desenvolvimento Web.",
        certificateUrl:
            "https://1drv.ms/b/c/4f67cd707abdaafb/IQSELEZYu-3DQJdd4PCtkJduARJANz_8PCTesAJiIio7p1Q",
    },
    {
        id: "git-github",
        title: "Git e GitHub",
        institution: "Udemy",
        category: "Cursos",
        period: "09/08/2024",
        status: "Concluído",
        description:
            "Curso complementar de Git e GitHub.",
        certificateUrl:
            "https://1drv.ms/b/c/4f67cd707abdaafb/IQTlRoyuW3RKS6dP98uuBx0ZAQwOZwS_uWa1Tfsaf3GajuA",
    },
    {
        id: "bancos-dados-relacionais",
        title: "Bancos de Dados Relacionais",
        institution: "Udemy",
        category: "Cursos",
        period: "23/07/2024",
        status: "Concluído",
        description:
            "Curso complementar de Bancos de Dados Relacionais.",
        certificateUrl:
            "https://1drv.ms/b/c/4f67cd707abdaafb/IQSpzQGt4nWqTYzBiZvMHCfSAUHrlClfDyvahHIW0LURwdA",
    },
];
