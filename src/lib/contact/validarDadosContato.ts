export interface DadosContato {
    nome: string;
    email: string;
    assunto: string;
    mensagem: string;
}

export function validarDadosContato(
    dados: DadosContato,
): string | null {
    const nome = dados.nome.trim();
    const email = dados.email.trim();
    const assunto = dados.assunto.trim();
    const mensagem = dados.mensagem.trim();

    if (!nome || !email || !assunto || !mensagem) {
        return "Preencha todos os campos.";
    }

    if (
        nome.length > 100 ||
        email.length > 254 ||
        assunto.length > 150 ||
        mensagem.length > 5000
    ) {
        return "Um ou mais campos excedem o limite permitido.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return "Informe um e-mail válido.";
    }

    if (mensagem.length < 10) {
        return "A mensagem deve ter pelo menos 10 caracteres.";
    }

    return null;

}