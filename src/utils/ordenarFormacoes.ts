interface Formacao {
    degree: string;
    institution: string;
    status: string;
    date?: string;
}

/**
 * Define a prioridade de cada nível acadêmico.
 * Quanto menor o número, maior a prioridade.
 */
const ORDEM_FORMACAO: Record<string, number> = {
    "pos-doutorado": 1,
    doutorado: 2,
    mestrado: 3,
    "pos-graduacao": 4,
    graduacao: 5,
    outros: 6,
};

/**
 * Identifica o nível acadêmico pelo nome da formação.
 */
function identificarNivelAcademico(degree: string): string {
    const nome = degree
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

    // Verificar primeiro os níveis mais específicos.
    if (
        nome.includes("pos-doutorado") ||
        nome.includes("pos doutorado")
    ) {
        return "pos-doutorado";
    }

    if (nome.includes("doutorado")) {
        return "doutorado";
    }

    if (nome.includes("mestrado")) {
        return "mestrado";
    }

    if (
        nome.includes("pos-graduacao") ||
        nome.includes("pos graduacao") ||
        nome.includes("especializacao") ||
        nome.includes("lato sensu") ||
        nome.includes("mba")
    ) {
        return "pos-graduacao";
    }

    if (
        nome.includes("graduacao") ||
        nome.includes("bacharelado") ||
        nome.includes("licenciatura") ||
        nome.includes("tecnologo") ||
        nome.includes("analise e desenvolvimento de sistemas")
    ) {
        return "graduacao";
    }

    return "outros";
}

/**
 * Ordena as formações da maior para a menor titulação acadêmica.
 * Não modifica o array original.
 */
export function ordenarFormacoes<T extends Formacao>(
    formacoes: T[],
): T[] {
    return [...formacoes].sort((a, b) => {
        const nivelA = identificarNivelAcademico(a.degree);
        const nivelB = identificarNivelAcademico(b.degree);

        return ORDEM_FORMACAO[nivelA] - ORDEM_FORMACAO[nivelB];
    });
}